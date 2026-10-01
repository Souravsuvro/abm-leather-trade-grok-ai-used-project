import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [{ title: "Certifications | ABM Trading Corporation" }],
  }),
});

function CertificationsPage() {
  return (
    <main>
      <PageHero
        kicker="Compliance"
        title="What we can document — and what we will not invent."
        lede="Memberships, quality process, chemical support and mill honesty. If a tannery is not LWG, we say so and still run a rigorous inspection file."
        crumbs={[{ label: "Certifications" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <article className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Memberships</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <strong className="text-ink">Dhaka Chamber of Commerce and Industry (DCCI)</strong> —
              general member. Trade networks, national business practice, policy rooms.
            </li>
            <li>
              <strong className="text-ink">Bangladesh Tanners Association (BTA)</strong> — member.
              Mill standards, regulatory updates, the people who actually tan.
            </li>
          </ul>
        </article>
        <article className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Quality process</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Piece-by-piece inspection and defect classification</li>
            <li>Substance, shade and finish verification</li>
            <li>Quality seal on approved pieces</li>
            <li>Shipment reports with the commercial set</li>
          </ul>
        </article>
        <article className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Standards we work to</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>ISO-aligned quality management on our file</li>
            <li>REACH restricted-substance support for EU programmes</li>
            <li>OEKO-TEX / buyer RSLs via third-party labs when specified</li>
            <li>ASTM and IULTCS methods where the spec names them</li>
          </ul>
        </article>
        <article className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Environment</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Savar’s CETP and LWG coverage are the sector’s open questions — we do not paper over
            them. We place chrome-free and vegetable lots with mills that can show process chemistry,
            support water and chemical-management questions, and arrange independent tests. That is
            more useful than a green badge we do not hold.
          </p>
        </article>
      </section>
      <RelatedPages
        items={[
          { to: "/services", label: "Services", text: "Inspection, documents and REACH support on the file." },
          { to: "/shipping", label: "Shipping", text: "The paper that actually clears a container." },
          { to: "/faq", label: "FAQ", text: "Straight answers on tests, ISO and mill visits." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
