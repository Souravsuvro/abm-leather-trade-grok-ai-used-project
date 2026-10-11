import type { ReactNode } from "react";

/** Seamless RTL infinite marquee. Duplicate group is inert for a11y. */
export function Marquee({
  children,
  duration = "48s",
  label,
}: {
  children: ReactNode;
  duration?: string;
  label: string;
}) {
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: duration }}
      >
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
