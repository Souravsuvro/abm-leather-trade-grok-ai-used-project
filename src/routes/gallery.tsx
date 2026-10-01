import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { cn } from "@/lib/utils";

const items = [
  { src: "/images/hero-hides.jpg", alt: "Stacked cow hides in warehouse", tag: "Warehouse" },
  { src: "/images/cow-crust.jpg", alt: "Cow crust on inspection table", tag: "Crust" },
  { src: "/images/wet-blue.jpg", alt: "Wet blue cow splits", tag: "Wet blue" },
  { src: "/images/goat-nappa.jpg", alt: "Goat nappa drape", tag: "Goat" },
  { src: "/images/buffalo-belt.jpg", alt: "Buffalo belt crust", tag: "Buffalo" },
  { src: "/images/veg-tan.jpg", alt: "Vegetable tanned cow", tag: "Vegetable" },
  { src: "/images/suede.jpg", alt: "Cow split suede nap", tag: "Suede" },
  { src: "/images/aniline.jpg", alt: "Aniline finished cow", tag: "Finished" },
  { src: "/images/inspection.jpg", alt: "Thickness gauging on the table", tag: "Inspection" },
  { src: "/images/goods-hero.jpg", alt: "Handbags, belts and a duffel on the packing table", tag: "Made products" },
  { src: "/images/goods-handbags.jpg", alt: "Structured cow nappa handbags", tag: "Made products" },
  { src: "/images/goods-belts.jpg", alt: "Buffalo and veg-tan belts, coiled", tag: "Made products" },
  { src: "/images/goods-wallets.jpg", alt: "Wallets, cardholders and a passport cover", tag: "Made products" },
  { src: "/images/goods-footwear.jpg", alt: "Cow leather oxfords and derbies", tag: "Made products" },
  { src: "/images/goods-workshop.jpg", alt: "Walking-foot machine stitching a bag", tag: "Workshop" },
] as const;

const tags = ["All", ...Array.from(new Set(items.map((i) => i.tag)))];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: "Gallery | ABM Trading Corporation" }],
  }),
});

function GalleryPage() {
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = tag === "All" ? items : items.filter((i) => i.tag === tag);

  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="Grain, substance, the table."
        lede="Articles, goods and inspection — the way a buyer actually looks at leather. Click any frame to open it."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={cn(
                "h-10 rounded-full px-4 text-sm font-semibold",
                tag === t ? "bg-ink text-cream" : "bg-paper shadow-[var(--shadow-border)]",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => {
            const idx = items.indexOf(item);
            return (
              <button
                key={item.src + item.tag}
                type="button"
                onClick={() => setOpen(idx)}
                className="group overflow-hidden rounded-md text-left shadow-[var(--shadow-border)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="block bg-paper px-4 py-3 text-sm text-muted">{item.alt}</span>
              </button>
            );
          })}
        </div>
      </section>
      {open !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[open].alt}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-sm bg-cream text-ink"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <X />
          </button>
          <img
            src={items[open].src}
            alt={items[open].alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "Wet blue, crust and finished — open an article for specs." },
          { to: "/made-products", label: "Made products", text: "Belts, bags, wallets and the workshops that cut them." },
          { to: "/contact", label: "Contact", text: "Send a brief the same working day." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
