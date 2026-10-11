import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { Marquee } from "@/components/marquee-row";
import { testimonials } from "@/lib/content/testimonials";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [{ title: "Clients | ABM Trading Corporation" }],
  }),
});

function TestimonialsPage() {
  return (
    <main>
      <PageHero
        kicker="Clients"
        title="Long files, not one containers."
        lede="Footwear, goods and industrial buyers who kept the account because the second lot matched the first."
        crumbs={[{ label: "Clients" }]}
      />
      <section className="py-16">
        <Marquee label="Client testimonials" duration="55s">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="w-80 shrink-0 rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]"
            >
              <p className="text-base leading-relaxed text-body">“{t.quote}”</p>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted">
                  {t.role} · {t.firm}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {t.product} · {t.years}
                </p>
              </footer>
            </blockquote>
          ))}
        </Marquee>
      </section>
      <RelatedPages
        items={[
          { to: "/markets", label: "Markets", text: "Where those files actually ship." },
          { to: "/videos", label: "Mill videos", text: "See the leather those buyers keep ordering." },
          { to: "/contact", label: "Contact", text: "Start a file of your own." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
