import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";

export const Route = createFileRoute("/shipping")({
  component: ShippingPage,
  head: () => ({
    meta: [{ title: "Shipping | ABM Trading Corporation" }],
  }),
});

function ShippingPage() {
  const steps = [
    ["Order", "1–2 days", "Brief locked, mill placed."],
    ["Production", "2–4 weeks", "Standard crust / wet blue. Custom finish extra."],
    ["Final inspection", "2–3 days", "Seal, report, commercial set."],
    ["Pack", "1–2 days", "Moisture protection, labels, buyer marks."],
    ["Transit", "7–10 days air · 3–4 weeks sea", "Chittagong, Mongla, or DAC air."],
  ];

  return (
    <main>
      <PageHero
        kicker="Logistics"
        title="Packed so the grain survives the water."
        lede="Air, sea or express. FOB, CIF, DDP or EXW. Documents that a broker can actually use."
        crumbs={[{ label: "Shipping" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
        <article className="rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Modes</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Air freight — urgent cuttings and samples, about 7–10 days</li>
            <li>Sea freight — volume, about 3–4 weeks</li>
            <li>Express — small lots</li>
            <li>Land — neighbouring markets when it is the honest route</li>
          </ul>
        </article>
        <article className="rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Packing</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Moisture barrier for wet blue and crust</li>
            <li>Buyer marks and handling notes</li>
            <li>Palletisation for container loads</li>
            <li>Special packs when the article needs them</li>
          </ul>
        </article>
        <article className="rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Documents</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Commercial invoice and packing list</li>
            <li>Certificate of origin</li>
            <li>Quality / test certificates</li>
            <li>Broker coordination on request</li>
          </ul>
        </article>
      </section>
      <section className="bg-cream/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold">A typical clock</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-5">
            {steps.map(([t, time, d]) => (
              <li key={t}>
                <p className="font-display text-xl font-semibold">{t}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-saddle">{time}</p>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Incoterms</h2>
            <p className="mt-3 text-sm text-muted">
              FOB Bangladesh port, CIF destination port, DDP door, or EXW our facility. Cost follows
              volume, route, mode and packing. Insurance on request.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Ports</h2>
            <p className="mt-3 text-sm text-muted">
              Chittagong for the bulk of sea freight, Mongla as alternate, Hazrat Shahjalal
              International Airport for air. You handle import permits, duties and destination
              clearance; we supply the paper and a broker introduction when it helps.
            </p>
          </div>
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/services", label: "Services", text: "Logistics sits with inspection and documents, not after them." },
          { to: "/made-products", label: "Made products", text: "Goods packing — poly, gift box, buyer marks." },
          { to: "/contact", label: "Contact", text: "Ask for a route and a date, not a range." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
