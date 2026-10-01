import type { ReactNode } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { company } from "@/lib/content/company";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas text-body">
      <SiteHeader />
      {children}
      <SiteFooter />
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-40 flex h-12 items-center gap-2 rounded-full bg-saddle px-4 text-sm font-semibold text-saddle-fg shadow-[var(--shadow-border-hover)] hover:opacity-90"
      >
        WhatsApp
      </a>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-sans text-sm bg-paper text-ink border-line",
        }}
      />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  crumbs,
}: {
  kicker: string;
  title: string;
  lede: string;
  crumbs?: { label: string; to?: LinkProps["to"] }[];
}) {
  return (
    <section className="border-b border-line bg-cream/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-saddle">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {c.to ? (
                    <Link to={c.to} className="hover:text-saddle">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{lede}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  kicker = "Next lot",
  title = "Send a brief. We reply with a mill and a date.",
}: {
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-cream/50">{kicker}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center rounded-sm bg-cream px-6 text-sm font-semibold text-ink hover:bg-paper"
        >
          Request a quote
        </Link>
      </div>
    </section>
  );
}

export function RelatedPages({
  items,
}: {
  items: { to: LinkProps["to"]; label: string; text: string }[];
}) {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Also in this house</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={String(item.to)}
              to={item.to}
              className="rounded-md bg-canvas p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <h2 className="font-display text-2xl font-semibold">{item.label}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
