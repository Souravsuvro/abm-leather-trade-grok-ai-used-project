import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/site-shell";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy | ABM Trading Corporation" }],
  }),
});

function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title="Privacy policy"
        lede="Last updated 25 September 2026. How ABM Trading Corporation handles the information you send us."
        crumbs={[{ label: "Privacy" }]}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-14 text-sm leading-relaxed text-muted">
        <p>
          We collect what you type into an enquiry — name, company, country, email, phone, article
          interest and message — to answer that enquiry and to fulfil an order. We also see ordinary
          server logs (IP, browser, pages). We do not sell personal information.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Use</h2>
        <p>
          Quotations, sample programmes, shipping, quality follow-up, and — only with consent —
          occasional product notes. We share data with tanneries, freight partners and professional
          advisors when the file requires it, and with authorities when the law requires it.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Retention & security</h2>
        <p>
          Commercial records are kept for as long as tax and contract law require. Access is limited
          to people on the file. This preview stores enquiries in your browser only; a production
          deployment would use a private mailbox (quotes) and would not publish submissions.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Your rights</h2>
        <p>
          Ask to see, correct or delete personal data we hold, or to stop marketing mail, at
          abmtrc@gmail.com. If you are in the EEA or UK you may also complain to your supervisory
          authority.
        </p>
      </article>
    </main>
  );
}
