import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, f as products, i as CtaBand, l as cn, m as stageLabel, o as RelatedPages, p as speciesLabel } from "./router-DsqIUCUT.mjs";
import { t as Input } from "./input-CGos8pMy.mjs";
import { t as Badge } from "./badge-T8G6wXLJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Qyo8wots.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var speciesFilters = [
	{
		id: "all",
		label: "All species"
	},
	{
		id: "cow",
		label: "Cow"
	},
	{
		id: "goat",
		label: "Goat"
	},
	{
		id: "buffalo",
		label: "Buffalo"
	},
	{
		id: "sheep",
		label: "Sheep"
	}
];
var stageFilters = [
	{
		id: "all",
		label: "All stages"
	},
	{
		id: "wet-blue",
		label: "Wet blue"
	},
	{
		id: "crust",
		label: "Crust"
	},
	{
		id: "finished",
		label: "Finished"
	}
];
function ProductsPage() {
	const [species, setSpecies] = (0, import_react.useState)("all");
	const [stage, setStage] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return products.filter((p) => {
			if (species !== "all" && p.species !== species) return false;
			if (stage !== "all" && p.stage !== stage) return false;
			if (!query) return true;
			return p.name.toLowerCase().includes(query) || p.short.toLowerCase().includes(query) || p.applications.join(" ").toLowerCase().includes(query);
		});
	}, [
		species,
		stage,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Catalogue",
			title: "Articles we inspect and export.",
			lede: "Cow, goat, buffalo and sheep. Wet blue, crust and finished. Filter by species and stage, then open an article for specs and a quote. Need the article already made up? See leather made products.",
			crumbs: [{ label: "Products" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: speciesFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: species === f.id,
							onClick: () => setSpecies(f.id),
							children: f.label
						}, f.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search articles, end uses…",
						className: "lg:max-w-xs",
						"aria-label": "Search products"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: stageFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: stage === f.id,
						onClick: () => setStage(f.id),
						children: f.label
					}, f.id))
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-20 text-center text-muted",
					children: "No articles match those filters."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "group overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: speciesLabel[p.species] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: stageLabel[p.stage] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-2xl font-semibold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-sm text-muted",
									children: p.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-muted",
									children: ["Substance ", p.thickness]
								})
							]
						})]
					}, p.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-cream/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
						children: "Leather made products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Belts, bags, wallets — cut from these articles."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: "Private-label OEM from partner workshops. Same inspectors, same documents."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/made-products",
					className: "inline-flex h-12 items-center rounded-sm bg-ink px-6 text-sm font-semibold text-cream hover:opacity-90",
					children: "View made products"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/made-products",
				label: "Made products",
				text: "OEM belts, handbags, wallets, footwear, jackets and gloves."
			},
			{
				to: "/services",
				label: "Services",
				text: "Sourcing, hide-by-hide inspection, documents and a mill date."
			},
			{
				to: "/shipping",
				label: "Shipping",
				text: "Packing, incoterms and the clock from order to the water."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-4 text-sm font-semibold transition-colors", active ? "bg-ink text-cream" : "bg-paper text-body shadow-[var(--shadow-border)] hover:bg-cream"),
		children
	});
}
//#endregion
export { ProductsPage as component };
