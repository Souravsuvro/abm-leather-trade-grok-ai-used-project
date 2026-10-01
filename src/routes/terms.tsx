import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/site-shell";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms | ABM Trading Corporation" }],
  }),
});

function TermsPage() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title="Terms of use"
        lede="The website is an introduction. A purchase is a contract, with specs, Incoterms and a mill date in writing."
        crumbs={[{ label: "Terms" }]}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-14 text-sm leading-relaxed text-muted">
        <p>
          Content on this site describes articles and services we typically offer. Availability,
          selection and price are confirmed on quotation. Photographs are representative; the
          contracted spec governs the lot.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Orders</h2>
        <p>
          A purchase order accepted by us, with tannage, substance, selection, colour, quantity,
          Incoterms and shipment window, is the agreement. Samples are indicative unless signed as a
          sealed counter-sample.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Quality claims</h2>
        <p>
          Inspect on arrival against the contract and the inspection report. Notify us promptly with
          evidence. We investigate, and we replace or credit when the fault is ours. We do not accept
          claims that rewrite the selection after the goods have been cut.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Law</h2>
        <p>
          These website terms are governed by the laws of Bangladesh. Individual export contracts may
          specify arbitration or another forum; that document wins over this page.
        </p>
      </article>
    </main>
  );
}
