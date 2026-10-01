import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm bg-paper px-3.5 text-sm text-body shadow-[var(--shadow-border)] placeholder:text-muted/80",
        "transition-[box-shadow] duration-150 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
