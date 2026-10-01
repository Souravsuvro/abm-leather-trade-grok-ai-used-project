import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { QuoteForm } from "@/components/quote-form";
import { Badge } from "@/components/ui/badge";
import { productBySlug, products, speciesLabel, stageLabel, tannageLabel } from "@/lib/content/products";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.product.name ?? "Article"} | ABM Trading Corporation`,
      },
    ],
  }),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug && p.species === product.species).slice(0, 3);

  return (
    <main>
      <PageHero
        kicker={`${speciesLabel[product.species]} · ${stageLabel[product.stage]}`}
        title={product.name}
        lede={product.short}
        crumbs={[
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-lg">
            <img src={product.image} alt={product.name} className="w-full object-cover" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tannage.map((t) => (
              <Badge key={t}>{tannageLabel[t]}</Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted">{product.description}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="border-t border-line pt-3">
                <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{s.value}</dd>
              </div>
            ))}
            <div className="border-t border-line pt-3">
              <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
                Thickness
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.thickness}</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
                Selection
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.selection}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <h2 className="font-display text-2xl font-semibold">Finishes</h2>
            <p className="mt-2 text-sm text-muted">{product.finishes.join(" · ")}</p>
          </div>
          <div className="mt-6">
            <h2 className="font-display text-2xl font-semibold">End uses</h2>
            <p className="mt-2 text-sm text-muted">{product.applications.join(" · ")}</p>
          </div>
        </div>
      </section>
      <section className="bg-cream/50">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="font-display text-3xl font-semibold">Request this article</h2>
          <p className="mt-2 text-sm text-muted">
            Tell us substance, colour and destination. We come back with availability and a mill date.
          </p>
          <div className="mt-8 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
            <QuoteForm defaultProduct={product.name} />
          </div>
        </div>
      </section>
      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-2xl font-semibold">Related {speciesLabel[product.species].toLowerCase()}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="rounded-md bg-paper p-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="font-display text-xl font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-muted">{p.short}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <RelatedPages
        items={[
          { to: "/products", label: "All articles", text: "Cow, goat, buffalo and sheep — wet blue to finished." },
          { to: "/made-products", label: "Made products", text: "Have this leather cut and sewn as a private-label programme." },
          { to: "/contact", label: "Contact", text: "Substance, colour, destination — we come back with a mill date." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
