import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-wide transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-saddle text-saddle-fg hover:opacity-90",
        ink: "bg-ink text-cream hover:opacity-90",
        outline:
          "bg-transparent text-ink ring-1 ring-inset ring-line-strong hover:bg-cream",
        ghost: "bg-transparent text-ink hover:bg-cream",
        cream: "bg-cream text-ink hover:bg-paper",
        link: "bg-transparent p-0 text-saddle underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-sm px-5",
        lg: "h-12 rounded-sm px-6 text-base",
        sm: "h-10 rounded-xs px-3.5 text-[13px]",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
