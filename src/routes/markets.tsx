import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { marketNotes, sectorContext } from "@/lib/content/markets";

export const Route = createFileRoute("/markets")({
  component: MarketsPage,
  head: () => ({
    meta: [{ title: "Markets | ABM Trading Corporation" }],
  }),
});

function MarketsPage() {
  return (
    <main>
      <PageHero
        kicker="Markets"
        title="Where Bangladesh leather earns its keep."
        lede="China for volume, Italy for grain, Japan for incoming QC. We ship the article the market actually runs — not a generic ‘export quality’ line."
        crumbs={[{ label: "Markets" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-display text-3xl font-semibold">{sectorContext.heading}</h2>
        <div className="mt-6 space-y-4 text-muted">
          {sectorContext.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          {marketNotes.map((m) => (
            <article key={m.country} className="border-t border-line pt-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-saddle">
                {m.role}
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold">{m.country}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.text}</p>
            </article>
          ))}
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "What we actually ship into those markets." },
          { to: "/made-products", label: "Made products", text: "Private-label goods for retail and OEM programmes." },
          { to: "/testimonials", label: "Clients", text: "What buyers in those markets actually say." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
