import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/content/faqs";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [{ title: "FAQ | ABM Trading Corporation" }],
  }),
});

function FaqPage() {
  return (
    <main>
      <PageHero
        kicker="FAQ"
        title="Straight answers for a factory buyer."
        lede="Lead times, tannages, documents, visits. If it is not here, WhatsApp the number on the bar."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        {faqs.map((group) => (
          <div key={group.group} className="mb-10">
            <h2 className="font-display text-2xl font-semibold">{group.group}</h2>
            <Accordion type="single" collapsible className="mt-2">
              {group.items.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "The catalogue behind those answers." },
          { to: "/made-products", label: "Made products", text: "OEM minimums, tech packs and AQL." },
          { to: "/contact", label: "Contact", text: "If it is not in the FAQ, send the brief." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
