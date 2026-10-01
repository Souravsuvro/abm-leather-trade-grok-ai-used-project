import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock3, FileCheck2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/layout/site-shell";
import { company } from "@/lib/content/company";
import { featuredMadeProducts, goodsCategoryLabel } from "@/lib/content/made-products";
import { featuredProducts, speciesLabel, stageLabel } from "@/lib/content/products";
import { processSteps } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "ABM Trading Corporation | Bangladesh leather export & inspection",
      },
      {
        name: "description",
        content: company.lede,
      },
    ],
  }),
});

function Home() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-cream">
        <img
          src="/images/hero-hides.jpg"
          alt="Stacked cow hides in a tannery warehouse"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/70 to-ink/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-16 md:justify-center md:py-24">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-cream/70">
            Hemayetpur, Savar · Dhaka
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-cream md:text-7xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            {company.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="cream">
              <Link to="/products">
                Browse leather <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/30 text-cream ring-cream/30 hover:bg-white/10">
              <Link to="/made-products">Made products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4">
          {company.stats.map((s) => (
            <div key={s.label} className="px-5 py-8">
              <p className="font-display text-3xl font-semibold text-ink tabular-nums md:text-4xl">
                {s.value}
                {s.unit ? <span className="ml-1 text-lg text-muted">{s.unit}</span> : null}
              </p>
              <p className="mt-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Articles</p>
            <h2 className="mt-2 max-w-xl font-display text-4xl font-semibold">
              Cow, goat and buffalo — wet blue to finished.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">Full catalogue</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts()
            .slice(0, 6)
            .map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2">
                    <Badge>{speciesLabel[p.species]}</Badge>
                    <Badge>{stageLabel[p.stage]}</Badge>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{p.short}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">
                Leather made products
              </p>
              <h2 className="mt-2 max-w-xl font-display text-4xl font-semibold">
                The article, already made up.
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Private-label belts, bags, wallets, footwear and gloves from partner workshops —
                cut from the same leather we inspect.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/made-products">All made products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMadeProducts()
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/made-products/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-lg bg-canvas shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <Badge>{goodsCategoryLabel[p.category]}</Badge>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{p.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{p.short}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Why ABM</p>
            <h2 className="mt-2 font-display text-4xl font-semibold">
              A buying house that still stands at the table.
            </h2>
            <p className="mt-5 text-muted">
              We are not a catalogue mill and we are not a freight forwarder. We place orders in
              Savar, inspect every hide, and put our seal on what ships. Family in leather since 1980;
              the company professionally run since 2014.
            </p>
            <ul className="mt-8 grid gap-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Piece inspection",
                  text: "Thickness, shade, finish, defects. Quality seal on approved lots.",
                },
                {
                  icon: Globe2,
                  title: "Fifteen markets",
                  text: "China to Italy, Vietnam to Japan — regular, not one-off containers.",
                },
                {
                  icon: FileCheck2,
                  title: "Documents that clear",
                  text: "COO, quality certificates, REACH support. No second project at customs.",
                },
                {
                  icon: Clock3,
                  title: "A date, not a range",
                  text: "Finished ex-stock; wet blue and crust in 2–4 weeks; custom finish extra.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <item.icon className="mt-0.5 size-5 shrink-0 text-saddle" />
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/inspection.jpg"
              alt="Inspector measuring hide thickness"
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Process</p>
        <h2 className="mt-2 font-display text-4xl font-semibold">Brief. Source. Inspect. Ship.</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n} className="rounded-md bg-paper p-6 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl text-saddle">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Markets</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {company.markets.map((m) => (
              <span
                key={m}
                className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Clients</p>
            <h2 className="mt-2 font-display text-4xl font-semibold">What buyers actually say.</h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/testimonials">All notes</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote key={t.name} className="rounded-md bg-paper p-6 shadow-[var(--shadow-border)]">
              <p className="text-sm leading-relaxed text-body">“{t.quote}”</p>
              <footer className="mt-5">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role}, {t.firm}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
