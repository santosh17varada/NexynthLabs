/** Honest readiness labels — no customer counts or revenue figures. */
export type GetPanditMetricStatus =
  | "platform-ready"
  | "integration-ready"
  | "in-progress"
  | "planned";

export type GetPanditSuccessMetric = {
  id: string;
  title: string;
  description: string;
  status: GetPanditMetricStatus;
};
