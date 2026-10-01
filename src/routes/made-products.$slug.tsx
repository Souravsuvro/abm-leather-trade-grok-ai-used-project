import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { QuoteForm } from "@/components/quote-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  goodsCategoryLabel,
  madeProductBySlug,
  madeProducts,
} from "@/lib/content/made-products";
import { productBySlug } from "@/lib/content/products";

export const Route = createFileRoute("/made-products/$slug")({
  component: MadeProductDetail,
  loader: ({ params }) => {
    const product = madeProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.product.name ?? "Made product"} | ABM Trading Corporation`,
      },
      {
        name: "description",
        content: loaderData?.product.short ?? "Leather made products from ABM Trading Corporation.",
      },
    ],
  }),
});

function MadeProductDetail() {
  const { product } = Route.useLoaderData();
  const related = madeProducts
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);
  const leatherArticles = product.leatherSlugs
    .map((slug) => productBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <PageHero
        kicker={goodsCategoryLabel[product.category]}
        title={product.name}
        lede={product.short}
        crumbs={[
          { label: "Leather made products", to: "/made-products" },
          { label: product.name },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-lg">
            <img src={product.image} alt={product.name} className="w-full object-cover" />
          </div>
          <div className="mt-4">
            <Badge>{goodsCategoryLabel[product.category]}</Badge>
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
              <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">MOQ</dt>
              <dd className="mt-1 text-sm text-ink">{product.moq}</dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
                Lead time
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.leadTime}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <h2 className="font-display text-2xl font-semibold">Leather</h2>
            <p className="mt-2 text-sm text-muted">{product.leather}</p>
            {leatherArticles.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {leatherArticles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to="/products/$slug"
                      params={{ slug: a.slug }}
                      className="text-sm font-semibold text-saddle hover:underline"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="mt-6">
            <h2 className="font-display text-2xl font-semibold">End uses</h2>
            <p className="mt-2 text-sm text-muted">{product.applications.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-3xl font-semibold">Customization</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Locked on the sample. We do not swap a cheaper fitting after you have signed.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.customization.map((c) => (
              <li key={c} className="flex gap-2 rounded-md bg-paper p-4 shadow-[var(--shadow-border)]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-saddle" />
                <span className="text-sm text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-display text-3xl font-semibold">Request this programme</h2>
        <p className="mt-2 text-sm text-muted">
          Volume, colour, destination, and whether you have a tech pack. We reply with a workshop
          and a sample date.
        </p>
        <div className="mt-8 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]">
          <QuoteForm defaultProduct={product.name} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-2xl font-semibold">
              Related {goodsCategoryLabel[product.category].toLowerCase()}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/made-products/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-md bg-paper p-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-display text-xl font-semibold">{p.name}</p>
                  <p className="mt-1 text-sm text-muted">{p.short}</p>
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/made-products">All made products</Link>
            </Button>
          </div>
        </section>
      ) : (
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Button asChild variant="outline">
            <Link to="/made-products">All made products</Link>
          </Button>
        </div>
      )}

      <RelatedPages
        items={[
          { to: "/made-products", label: "All made products", text: "Belts, bags, wallets, footwear, jackets, gloves and travel." },
          { to: "/products", label: "Leather articles", text: "The cow, goat and buffalo this programme is cut from." },
          { to: "/contact", label: "Contact", text: "WhatsApp the brief the same working day." },
        ]}
      />
      <CtaBand
        kicker="Next sample"
        title="Send a tech pack. We reply with a workshop and a date."
      />
    </main>
  );
}
