import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { QuoteForm } from "@/components/quote-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  goodsCapabilities,
  goodsCategories,
  goodsCategoryLabel,
  goodsFaqs,
  goodsProcess,
  madeProducts,
  type GoodsCategory,
} from "@/lib/content/made-products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/made-products/")({
  component: MadeProductsPage,
  head: () => ({
    meta: [
      { title: "Leather Made Products | ABM Trading Corporation" },
      {
        name: "description",
        content:
          "OEM and private-label leather goods from Bangladesh — belts, handbags, wallets, footwear, jackets and gloves, cut from inspected cow, goat and buffalo leather.",
      },
    ],
  }),
});

const categoryFilters: { id: "all" | GoodsCategory; label: string }[] = [
  { id: "all", label: "All goods" },
  ...goodsCategories.map((c) => ({ id: c.id, label: goodsCategoryLabel[c.id] })),
];

function MadeProductsPage() {
  const [category, setCategory] = useState<"all" | GoodsCategory>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return madeProducts.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.short.toLowerCase().includes(query) ||
        p.applications.join(" ").toLowerCase().includes(query)
      );
    });
  }, [category, q]);

  return (
    <main>
      <PageHero
        kicker="Leather made products"
        title="Belts, bags, wallets, shoes — cut from leather we already inspected."
        lede="Private-label OEM from partner workshops in Dhaka and Savar. The hide business and the goods business on one file: spec, sample, AQL, documents."
        crumbs={[{ label: "Leather made products" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">The programme</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
            A buying house that can also deliver the article already made up.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Bangladesh’s leather-goods export is growing faster than wet blue and crust. Buyers who
            already take our cow, goat and buffalo often want the next step — a belt, a bag, a wallet
            — without standing up a second supplier. We place those orders in partner workshops,
            cut from lots we have graded hide by hide, and inspect the finished piece the same way
            we inspect a crust: against a sealed sample, with a report.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We do not hold a house brand. Private label and unbranded OEM only. Tech pack or a
            physical sample we can reverse; we will not guess a construction from a mood board.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#catalogue">Browse the catalogue</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">Leather articles</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/goods-workshop.jpg"
            alt="Artisan stitching a cowhide bag on a walking-foot machine"
            className="h-full min-h-80 w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4">
          {[
            { k: "200–500", v: "Typical MOQ, by SKU" },
            { k: "AQL 2.5", v: "Finished-goods inspection" },
            { k: "4–8 wks", v: "Bulk after sample sign-off" },
            { k: "OEM", v: "Private label only — no house brand" },
          ].map((s) => (
            <div key={s.k} className="px-5 py-8">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">{s.k}</p>
              <p className="mt-2 text-xs font-semibold tracking-[0.14em] uppercase text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Categories</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">What the workshops actually run.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goodsCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCategory(c.id);
                document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group overflow-hidden rounded-md bg-paper text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-xl font-semibold">{goodsCategoryLabel[c.id]}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{c.blurb}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="catalogue" className="scroll-mt-24 bg-cream/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Catalogue</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Programmes we can place.</h2>
            </div>
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search belts, bags, end uses…"
              className="lg:max-w-xs"
              aria-label="Search made products"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categoryFilters.map((f) => (
              <FilterChip key={f.id} active={category === f.id} onClick={() => setCategory(f.id)}>
                {f.label}
              </FilterChip>
            ))}
          </div>
          {list.length === 0 ? (
            <p className="py-20 text-center text-muted">No programmes match those filters.</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <Link
                  key={p.slug}
                  to="/made-products/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
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
                    <p className="mt-2 line-clamp-3 text-sm text-muted">{p.short}</p>
                    <p className="mt-3 text-xs text-muted">MOQ {p.moq}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">OEM / ODM</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold">
          Capabilities a factory buyer actually asks for.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {goodsCapabilities.map((c) => (
            <article key={c.title} className="rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">How a goods file runs</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Brief. Sample. Make. Inspect. Ship.</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {goodsProcess.map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl text-saddle">{step.n}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Commercial</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">MOQ, clock, packing.</h2>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["Sampling", "10 days (gloves, belts) to 4 weeks (footwear, jackets)."],
                ["Bulk lead time", "4–8 weeks after sample sign-off; footwear and garments longer."],
                ["MOQ", "By SKU, not mixed dumps. 100 jackets to 1,000 work gloves."],
                ["Incoterms", "FOB Chittagong, CIF, DDP or EXW — same as the hide file."],
                ["Packing", "Poly, sleeve, gift box or buyer spec. Carton marks as instructed."],
                ["Labelling", "Woven, foil, hang-tag, barcode. Placement locked on the sample."],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-line pt-4">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">{k}</dt>
                  <dd className="mt-1 text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Leather used</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Cut from articles on this site.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Goods are not a separate chemistry. They are cut from cow nappa, goat, buffalo belt
              crust and splits we already inspect. Open the leather article if you want the hide
              spec; open the goods article if you want the made-up programme.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/products">Leather catalogue</Link>
            </Button>
            <img
              src="/images/goods-hero.jpg"
              alt="Handbags, belts, wallets and a duffel on a packing table"
              className="mt-8 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">Quality</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Inspection is not a slogan on goods either.</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Sealed sample", "Bulk is judged against the signed sample, not against a photograph."],
              ["AQL 2.5", "Tighter on request. Measurement, stitch, hardware, shade, packing."],
              ["One report", "The same commercial set as hides: invoice, packing list, COO, QC notes."],
            ].map(([t, d]) => (
              <li key={t} className="border-t border-line pt-5">
                <p className="font-semibold text-ink">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Straight answers on made-up articles.</h2>
        <Accordion type="single" collapsible className="mt-8">
          {goodsFaqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-cream/50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold">Request a goods programme</h2>
          <p className="mt-2 text-sm text-muted">
            Style, leather, volume, destination. Attach the idea of a tech pack in the brief — we
            come back with a workshop and a sample date.
          </p>
          <div className="mt-8 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] md:p-8">
            <QuoteForm defaultProduct="Structured Nappa Handbag" />
          </div>
        </div>
      </section>

      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "Wet blue, crust and finished — the input these goods are cut from." },
          { to: "/services", label: "Services", text: "Inspection, sourcing, documents and a mill date for hides and goods." },
          { to: "/shipping", label: "Shipping", text: "Packing, incoterms and the clock from sample sign-off to the water." },
        ]}
      />
      <CtaBand
        kicker="Next sample"
        title="Send a tech pack. We reply with a workshop and a date."
      />
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-4 text-sm font-semibold transition-colors",
        active ? "bg-ink text-cream" : "bg-paper text-body shadow-[var(--shadow-border)] hover:bg-cream",
      )}
    >
      {children}
    </button>
  );
}
