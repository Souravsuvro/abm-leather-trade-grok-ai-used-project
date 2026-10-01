import { cn } from "@/lib/utils";

export function BrandMark({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-9 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="3"
          fill={onDark ? "#E8DFD2" : "#1A1410"}
        />
        <path
          d="M10 27.5V12.5h6.2c3.4 0 5.4 1.7 5.4 4.4 0 1.8-1 3.2-2.7 3.9 2.1.6 3.3 2.1 3.3 4.2 0 3-2.2 5-5.9 5H10zm3.4-8.7h2.6c1.6 0 2.5-.8 2.5-2.1s-.9-2-2.5-2h-2.6v4.1zm0 6.5h3.1c1.8 0 2.8-.9 2.8-2.3s-1-2.2-2.8-2.2h-3.1v4.5z"
          fill={onDark ? "#1A1410" : "#F3EEE6"}
        />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] font-semibold tracking-tight",
            onDark ? "text-cream" : "text-ink",
          )}
        >
          ABM Trading
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase",
            onDark ? "text-cream/65" : "text-muted",
          )}
        >
          Corporation
        </span>
      </span>
    </span>
  );
}
