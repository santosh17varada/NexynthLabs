"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import {
  LEAD_STATUS_VALUES,
  leadCrmStatusLabels,
  leadCrmStatusStyles,
  leadCrmStorage,
} from "@/config/leads-crm";
import { getLeadChannelLabel } from "@/lib/leads/normalize";
import type { Lead, LeadStatus } from "@/types/lead";

type LeadsTableProps = {
  initialLeads: Lead[];
  canWrite: boolean;
  emailConfigured: boolean;
};

export function LeadsTable({
  initialLeads,
  canWrite,
  emailConfigured,
}: LeadsTableProps) {
  const router = useRouter();
  const [leads, setLeads] = useState(initialLeads);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState<Record<string, string>>({});

  async function downloadCsv() {
    try {
      const response = await fetch("/api/admin/leads/export");
      if (!response.ok) throw new Error("Export failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `nexynth-leads-${new Date().toISOString().slice(0, 10)}.csv`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("Unable to export CSV. Please try again.");
    }
  }

  async function patchLead(id: string, patch: { status?: LeadStatus; notes?: string }) {
    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message ?? "Update failed.");
      }

      const data = (await response.json()) as { lead: Lead };
      setLeads((current) =>
        current.map((lead) => (lead.id === id ? data.lead : lead)),
      );
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setUpdatingId(null);
    }
  }

  function updateStatus(id: string, status: LeadStatus) {
    return patchLead(id, { status });
  }

  function saveNotes(id: string) {
    const notes = notesDraft[id] ?? "";
    return patchLead(id, { notes });
  }

  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 bg-surface px-6 py-12 text-center">
        <h3 className="text-lg font-semibold text-foreground">No leads yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Submissions from contact, partner, and WhatsApp CTAs will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          CRM Lite · {leadCrmStorage.mode} storage ({leadCrmStorage.filePath})
        </p>
        <button
          type="button"
          onClick={downloadCsv}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
        >
          Export CSV
        </button>
      </div>

      {!emailConfigured && (
        <div className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
          <strong>Backend TODO:</strong> Email notifications not configured. Leads persist in{" "}
          <code className="text-xs">{leadCrmStorage.filePath}</code>. PostgreSQL CRM backend
          planned — see{" "}
          <code className="text-xs">docs/nexynth-labs/14-lead-crm-lite-guide.md</code>.
        </div>
      )}

      {error && (
        <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <div className="space-y-4 lg:hidden">
        {leads.map((lead) => (
          <article
            key={lead.id}
            className="rounded-2xl border border-border/70 bg-surface p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground">{lead.name}</h3>
                <p className="text-sm text-muted">{lead.email}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${leadCrmStatusStyles[lead.status]}`}
              >
                {leadCrmStatusLabels[lead.status]}
              </span>
            </div>
            <dl className="mt-3 space-y-1 text-sm">
              <div>
                <dt className="text-muted">Interest</dt>
                <dd className="text-foreground">{lead.interestType}</dd>
              </div>
              <div>
                <dt className="text-muted">Source page</dt>
                <dd className="font-mono text-xs text-foreground">{lead.sourcePage}</dd>
              </div>
              <div>
                <dt className="text-muted">Channel</dt>
                <dd className="text-foreground">{getLeadChannelLabel(lead.source)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-relaxed text-muted">{lead.message}</p>
            <p className="mt-2 text-xs text-muted">
              {new Date(lead.createdAt).toLocaleString("en-IN")}
            </p>
            {canWrite && (
              <>
                <div className="mt-4 flex flex-wrap gap-2">
                  {LEAD_STATUS_VALUES.map((status) => (
                    <button
                      key={status}
                      type="button"
                      disabled={lead.status === status || updatingId === lead.id}
                      onClick={() => updateStatus(lead.id, status)}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground disabled:opacity-50"
                    >
                      {leadCrmStatusLabels[status]}
                    </button>
                  ))}
                </div>
                <label className="mt-4 block text-sm">
                  <span className="font-medium text-foreground">Notes</span>
                  <textarea
                    rows={2}
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                    value={notesDraft[lead.id] ?? lead.notes}
                    onChange={(e) =>
                      setNotesDraft((current) => ({
                        ...current,
                        [lead.id]: e.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    className="mt-2 text-xs font-semibold text-accent"
                    disabled={updatingId === lead.id}
                    onClick={() => saveNotes(lead.id)}
                  >
                    Save notes
                  </button>
                </label>
              </>
            )}
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-2xl border border-border/70 bg-surface lg:block">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="border-b border-border/60 bg-background/50 text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Created</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Interest</th>
              <th className="px-4 py-3 font-semibold">Source</th>
              <th className="px-4 py-3 font-semibold">Message</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {leads.map((lead) => {
              const isExpanded = expandedId === lead.id;
              return (
                <Fragment key={lead.id}>
                  <tr>
                    <td className="px-4 py-3 align-top text-muted">
                      {new Date(lead.createdAt).toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <p className="font-medium text-foreground">{lead.name}</p>
                      <p className="text-muted">{lead.email}</p>
                      {lead.phone && <p className="text-muted">{lead.phone}</p>}
                      {lead.company && <p className="text-muted">{lead.company}</p>}
                    </td>
                    <td className="px-4 py-3 align-top text-foreground">
                      {lead.interestType}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <p className="font-mono text-xs text-foreground">{lead.sourcePage}</p>
                      <p className="mt-1 text-xs text-muted">
                        {getLeadChannelLabel(lead.source)}
                      </p>
                    </td>
                    <td className="max-w-xs px-4 py-3 align-top text-muted">
                      <p className="line-clamp-3">{lead.message}</p>
                    </td>
                    <td className="px-4 py-3 align-top">
                      {canWrite ? (
                        <select
                          value={lead.status}
                          disabled={updatingId === lead.id}
                          onChange={(e) =>
                            updateStatus(lead.id, e.target.value as LeadStatus)
                          }
                          className="rounded-lg border border-border bg-background px-2 py-1 text-sm"
                        >
                          {LEAD_STATUS_VALUES.map((status) => (
                            <option key={status} value={status}>
                              {leadCrmStatusLabels[status]}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${leadCrmStatusStyles[lead.status]}`}
                        >
                          {leadCrmStatusLabels[lead.status]}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <button
                        type="button"
                        className="text-xs font-semibold text-accent hover:underline"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : lead.id)
                        }
                      >
                        {isExpanded ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-background/40">
                      <td colSpan={7} className="px-4 py-4">
                        <div className="grid gap-4 lg:grid-cols-2">
                          <div>
                            <p className="text-xs font-semibold uppercase text-muted">
                              Full message
                            </p>
                            <p className="mt-2 whitespace-pre-wrap text-sm text-foreground">
                              {lead.message}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase text-muted">
                              Notes
                            </p>
                            {canWrite ? (
                              <>
                                <textarea
                                  rows={4}
                                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                                  value={notesDraft[lead.id] ?? lead.notes}
                                  onChange={(e) =>
                                    setNotesDraft((current) => ({
                                      ...current,
                                      [lead.id]: e.target.value,
                                    }))
                                  }
                                />
                                <button
                                  type="button"
                                  className="mt-2 text-xs font-semibold text-accent"
                                  disabled={updatingId === lead.id}
                                  onClick={() => saveNotes(lead.id)}
                                >
                                  Save notes
                                </button>
                              </>
                            ) : (
                              <p className="mt-2 text-sm text-muted">
                                {lead.notes || "—"}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
