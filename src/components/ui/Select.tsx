import { inputBaseClasses, labelBaseClasses } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
};

export function Select({
  label,
  hint,
  error,
  id,
  className = "",
  wrapperClassName = "",
  children,
  ...props
}: SelectProps) {
  const inputId = id ?? props.name;

  return (
    <div className={wrapperClassName}>
      {label ? (
        <label htmlFor={inputId} className={labelBaseClasses}>
          {label}
        </label>
      ) : null}
      <select
        id={inputId}
        className={cn(
          inputBaseClasses,
          error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
        }
        {...props}
      >
        {children}
      </select>
      {hint && !error ? (
        <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-sm text-red-700"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
