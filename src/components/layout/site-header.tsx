import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { company, moreNav, nav } from "@/lib/content/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur-md">
      <div className="hidden border-b border-line bg-ink text-cream md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-[12px] tracking-wide">
          <p className="text-cream/75">Savar, Dhaka · Inspecting agent since 2014 · Family in hides since 1980</p>
          <div className="flex items-center gap-5">
            <a href={company.phoneHref} className="hover:text-cream">
              {company.phone}
            </a>
            <a href={`mailto:${company.emails.business}`} className="hover:text-cream">
              {company.emails.business}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" aria-label="ABM Trading Corporation home">
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-xs px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors",
                  active ? "text-saddle" : "text-body hover:text-saddle",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Request a quote</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <BrandMark />
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {[...nav, ...moreNav].map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-11 items-center rounded-sm px-2 text-base font-semibold text-ink hover:bg-cream"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild className="mt-6 w-full">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
