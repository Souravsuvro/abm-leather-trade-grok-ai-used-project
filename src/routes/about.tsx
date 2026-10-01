import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { company } from "@/lib/content/company";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About | ABM Trading Corporation" }],
  }),
});

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="A leather family, a professional inspecting house."
        lede="Hides since 1980. ABM Trading Corporation since 2014. We source Bangladesh-origin leather and inspect it as if we were the ones cutting it next week."
        crumbs={[{ label: "About" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            Abdullah Al Mohan runs ABM Trading Corporation as founder and managing director. The
            family — descending from Imam Moulvi Mohammad Mohhsin, through Hazi Nurul Alam and Nur
            Jahan Begum — entered hide processing and export in 1980, when Hazaribagh was still the
            country’s tannery cluster.
          </p>
          <p>
            The mills have since moved to the BSCIC tannery estate at Hemayetpur, Savar. We moved
            with them. The office remains in Zigatola, Hazaribagh; inspection and production sit at
            Plot XA1, Chamra Shilpa Nagari, Savar. That split is deliberate: buyers need a Dhaka
            counterpart and a floor that can actually see the lot.
          </p>
          <p>
            Internationally we represent Bangladesh-origin cow, goat, sheep and buffalo: raw, wet
            blue, wet blue splits, crust and finished. Abdullah is a general member of the Dhaka
            Chamber of Commerce and Industry and of the Bangladesh Tanners Association.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/hero-hides.jpg"
            alt="Hides in the warehouse"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-cream/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { k: "32M sq ft", v: "Annual capacity through our mill network" },
            { k: "US$10M", v: "Company turnover" },
            { k: "10", v: "Quality inspectors" },
            { k: "4", v: "Leather technologists" },
            { k: "20", v: "People on staff" },
          ].map((s) => (
            <div key={s.k} className="rounded-md bg-paper p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl font-semibold text-ink">{s.k}</p>
              <p className="mt-2 text-sm text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">Mission</h2>
          <p className="mt-4 text-muted">
            Understand the brief, add value, cut cost where it does not cut quality, and keep
            improving the article. World-class compliance is not a slogan; it is the condition for
            staying on a European or Japanese approved-vendor list.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold">Vision</h2>
          <p className="mt-4 text-muted">
            To be the inspecting agent a serious buyer names when they need Bangladesh leather that
            arrives as specified — every lot, not the first lot.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold">What we will not trade away</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Quality", "Best article the mill can run for the money, delivered on the date."],
              ["World-class production", "Leather that meets the spec and the season, not last year’s leftover."],
              ["Response", "A same-day answer on WhatsApp or email when a lot is in question."],
              ["Integrity", "We say what a mill can document. We do not invent LWG or ISO a plant does not hold."],
            ].map(([t, d]) => (
              <li key={t} className="border-t border-line pt-5">
                <p className="font-semibold text-ink">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Leadership</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">{company.ceo.name}</h2>
          <p className="mt-1 text-muted">{company.ceo.title}</p>
          <p className="mt-4 max-w-2xl text-muted">
            Direct line {company.phone} · {company.emails.business}
          </p>
          <div className="mt-4 flex gap-4 text-sm font-semibold">
            <a className="text-saddle hover:underline" href={company.ceo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-saddle hover:underline" href={company.ceo.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "Cow, goat, buffalo and sheep — wet blue, crust and finished." },
          { to: "/made-products", label: "Made products", text: "Private-label belts, bags, wallets, footwear and gloves." },
          { to: "/careers", label: "Careers", text: "Inspectors and technologists who can hold a mill date." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
