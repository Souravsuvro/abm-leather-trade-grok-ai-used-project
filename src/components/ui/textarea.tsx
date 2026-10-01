import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-md bg-paper px-3.5 py-3 text-sm text-body shadow-[var(--shadow-border)] placeholder:text-muted/80",
        "transition-[box-shadow] duration-150 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle",
        className,
      )}
      {...props}
    />
  );
}
