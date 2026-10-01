import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { processSteps, services } from "@/lib/content/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Services | ABM Trading Corporation" }],
  }),
});

function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Sourcing, inspection, documents, a mill date."
        lede="A complete buying-house file — from the first brief to the bill of lading — with inspectors on the table in Hemayetpur."
        crumbs={[{ label: "Services" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.slug} className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-body">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-saddle" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="bg-cream/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold">How a file runs</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl text-saddle">{step.n}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <Button asChild className="mt-10">
            <Link to="/contact">Start a brief</Link>
          </Button>
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "The catalogue we inspect and export." },
          { to: "/made-products", label: "Made products", text: "OEM goods cut from those articles, AQL-checked." },
          { to: "/certifications", label: "Certifications", text: "What we can document — and what we will not invent." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
