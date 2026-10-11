import { createFileRoute } from "@tanstack/react-router";
import { PageHero, RelatedPages } from "@/components/layout/site-shell";
import { QuoteForm } from "@/components/quote-form";
import { company } from "@/lib/content/company";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact | ABM Trading Corporation" }],
  }),
});

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Send the brief. We answer on WhatsApp the same working day."
        lede="Quotes, samples, mill visits — leather articles and made-up goods. Abdullah Al Mohan takes partnership files directly."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">Talk to us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                  Phone · WhatsApp · WeChat · Line · Viber
                </span>
                <a className="text-lg font-semibold text-ink" href={company.phoneHref}>
                  {company.phone}
                </a>
              </li>
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                  Enquiries
                </span>
                <a className="text-ink" href={`mailto:${company.emails.contact}`}>
                  {company.emails.contact}
                </a>
              </li>
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                  Business
                </span>
                <a className="text-ink" href={`mailto:${company.emails.business}`}>
                  {company.emails.business}
                </a>
              </li>
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                  General
                </span>
                <a className="text-ink" href={`mailto:${company.emails.general}`}>
                  {company.emails.general}
                </a>
              </li>
              <li>
                <a className="font-semibold text-saddle hover:underline" href={company.ceo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn — {company.ceo.name}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">{company.office.label}</h2>
            <p className="mt-2 text-sm text-muted">
              {company.office.lines.join(", ")}
            </p>
            <p className="mt-2 text-sm text-muted">{company.hours}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">{company.factory.label}</h2>
            <p className="mt-2 text-sm text-muted">{company.factory.lines.join(", ")}</p>
            <p className="mt-2 text-sm text-muted">Visits by appointment.</p>
          </div>
          <div className="overflow-hidden rounded-md">
            <iframe
              title="ABM Trading Corporation, Dhaka"
              className="h-56 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Hazaribagh%20Dhaka&t=m&z=12&output=embed&iwloc=near"
            />
          </div>
        </div>
        <div className="rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] md:p-8">
          <h2 className="font-display text-2xl font-semibold">Enquiry</h2>
          <p className="mt-2 mb-6 text-sm text-muted">
            Article, substance, volume, port. We come back with availability.
          </p>
          <QuoteForm />
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "Open an article before you write the brief." },
          { to: "/made-products", label: "Made products", text: "Belts, bags, wallets — include a tech pack if you have one." },
          { to: "/videos", label: "Mill videos", text: "Watch the leather before you book the sample." },
        ]}
      />
    </main>
  );
}
