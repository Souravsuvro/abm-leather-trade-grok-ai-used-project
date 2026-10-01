import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  products,
  speciesLabel,
  stageLabel,
  type Species,
  type Stage,
} from "@/lib/content/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [{ title: "Products | ABM Trading Corporation" }],
  }),
});

const speciesFilters: { id: "all" | Species; label: string }[] = [
  { id: "all", label: "All species" },
  { id: "cow", label: "Cow" },
  { id: "goat", label: "Goat" },
  { id: "buffalo", label: "Buffalo" },
  { id: "sheep", label: "Sheep" },
];

const stageFilters: { id: "all" | Stage; label: string }[] = [
  { id: "all", label: "All stages" },
  { id: "wet-blue", label: "Wet blue" },
  { id: "crust", label: "Crust" },
  { id: "finished", label: "Finished" },
];

function ProductsPage() {
  const [species, setSpecies] = useState<"all" | Species>("all");
  const [stage, setStage] = useState<"all" | Stage>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter((p) => {
      if (species !== "all" && p.species !== species) return false;
      if (stage !== "all" && p.stage !== stage) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.short.toLowerCase().includes(query) ||
        p.applications.join(" ").toLowerCase().includes(query)
      );
    });
  }, [species, stage, q]);

  return (
    <main>
      <PageHero
        kicker="Catalogue"
        title="Articles we inspect and export."
        lede="Cow, goat, buffalo and sheep. Wet blue, crust and finished. Filter by species and stage, then open an article for specs and a quote. Need the article already made up? See leather made products."
        crumbs={[{ label: "Products" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {speciesFilters.map((f) => (
              <FilterChip key={f.id} active={species === f.id} onClick={() => setSpecies(f.id)}>
                {f.label}
              </FilterChip>
            ))}
          </div>
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles, end uses…"
            className="lg:max-w-xs"
            aria-label="Search products"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {stageFilters.map((f) => (
            <FilterChip key={f.id} active={stage === f.id} onClick={() => setStage(f.id)}>
              {f.label}
            </FilterChip>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="py-20 text-center text-muted">No articles match those filters.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
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
                  <div className="flex flex-wrap gap-2">
                    <Badge>{speciesLabel[p.species]}</Badge>
                    <Badge>{stageLabel[p.stage]}</Badge>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold">{p.name}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{p.short}</p>
                  <p className="mt-3 text-xs text-muted">Substance {p.thickness}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <section className="border-t border-line bg-cream/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle">
              Leather made products
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Belts, bags, wallets — cut from these articles.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Private-label OEM from partner workshops. Same inspectors, same documents.
            </p>
          </div>
          <Link
            to="/made-products"
            className="inline-flex h-12 items-center rounded-sm bg-ink px-6 text-sm font-semibold text-cream hover:opacity-90"
          >
            View made products
          </Link>
        </div>
      </section>
      <RelatedPages
        items={[
          { to: "/made-products", label: "Made products", text: "OEM belts, handbags, wallets, footwear, jackets and gloves." },
          { to: "/services", label: "Services", text: "Sourcing, hide-by-hide inspection, documents and a mill date." },
          { to: "/shipping", label: "Shipping", text: "Packing, incoterms and the clock from order to the water." },
        ]}
      />
      <CtaBand />
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
