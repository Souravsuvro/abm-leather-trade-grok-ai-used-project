import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as PageHero, i as CtaBand, l as cn, o as RelatedPages } from "./router-DsqIUCUT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DpA4Nu5o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		src: "/images/hero-hides.jpg",
		alt: "Stacked cow hides in warehouse",
		tag: "Warehouse"
	},
	{
		src: "/images/cow-crust.jpg",
		alt: "Cow crust on inspection table",
		tag: "Crust"
	},
	{
		src: "/images/wet-blue.jpg",
		alt: "Wet blue cow splits",
		tag: "Wet blue"
	},
	{
		src: "/images/goat-nappa.jpg",
		alt: "Goat nappa drape",
		tag: "Goat"
	},
	{
		src: "/images/buffalo-belt.jpg",
		alt: "Buffalo belt crust",
		tag: "Buffalo"
	},
	{
		src: "/images/veg-tan.jpg",
		alt: "Vegetable tanned cow",
		tag: "Vegetable"
	},
	{
		src: "/images/suede.jpg",
		alt: "Cow split suede nap",
		tag: "Suede"
	},
	{
		src: "/images/aniline.jpg",
		alt: "Aniline finished cow",
		tag: "Finished"
	},
	{
		src: "/images/inspection.jpg",
		alt: "Thickness gauging on the table",
		tag: "Inspection"
	},
	{
		src: "/images/goods-hero.jpg",
		alt: "Handbags, belts and a duffel on the packing table",
		tag: "Made products"
	},
	{
		src: "/images/goods-handbags.jpg",
		alt: "Structured cow nappa handbags",
		tag: "Made products"
	},
	{
		src: "/images/goods-belts.jpg",
		alt: "Buffalo and veg-tan belts, coiled",
		tag: "Made products"
	},
	{
		src: "/images/goods-wallets.jpg",
		alt: "Wallets, cardholders and a passport cover",
		tag: "Made products"
	},
	{
		src: "/images/goods-footwear.jpg",
		alt: "Cow leather oxfords and derbies",
		tag: "Made products"
	},
	{
		src: "/images/goods-workshop.jpg",
		alt: "Walking-foot machine stitching a bag",
		tag: "Workshop"
	}
];
var tags = ["All", ...Array.from(new Set(items.map((i) => i.tag)))];
function GalleryPage() {
	const [tag, setTag] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(null);
	const list = tag === "All" ? items : items.filter((i) => i.tag === tag);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Gallery",
			title: "Grain, substance, the table.",
			lede: "Articles, goods and inspection — the way a buyer actually looks at leather. Click any frame to open it.",
			crumbs: [{ label: "Gallery" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTag(t),
					className: cn("h-10 rounded-full px-4 text-sm font-semibold", tag === t ? "bg-ink text-cream" : "bg-paper shadow-[var(--shadow-border)]"),
					children: t
				}, t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((item) => {
					const idx = items.indexOf(item);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(idx),
						className: "group overflow-hidden rounded-md text-left shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block bg-paper px-4 py-3 text-sm text-muted",
							children: item.alt
						})]
					}, item.src + item.tag);
				})
			})]
		}),
		open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": items[open].alt,
			onClick: () => setOpen(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-sm bg-cream text-ink",
				"aria-label": "Close",
				onClick: () => setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: items[open].src,
				alt: items[open].alt,
				className: "max-h-[85vh] max-w-full object-contain",
				onClick: (e) => e.stopPropagation()
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/products",
				label: "Leather articles",
				text: "Wet blue, crust and finished — open an article for specs."
			},
			{
				to: "/made-products",
				label: "Made products",
				text: "Belts, bags, wallets and the workshops that cut them."
			},
			{
				to: "/contact",
				label: "Contact",
				text: "Send a brief the same working day."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { GalleryPage as component };
