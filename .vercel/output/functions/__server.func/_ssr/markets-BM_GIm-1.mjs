import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, i as CtaBand, o as RelatedPages } from "./router-DsqIUCUT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/markets-BM_GIm-1.js
var import_jsx_runtime = require_jsx_runtime();
var marketNotes = [
	{
		country: "China",
		role: "Volume finishing",
		text: "Still the largest buyer of Bangladeshi wet blue splits, crust and belt buffalo. Price, substance and on-time containers matter more than storytelling. We ship regular split programmes into Chinese finishing plants."
	},
	{
		country: "Italy",
		role: "Luxury goods & footwear",
		text: "Italian tanneries and brands buy crust and selected finished lots for handbags, shoes and belts. Grain, handle and chemical documentation are the gate. Eco and chrome-free articles are a live conversation, not a brochure line."
	},
	{
		country: "Germany",
		role: "Automotive & furniture",
		text: "Demand sits in automotive interiors and contract furniture. Substance, fogging, flame and restricted substances decide the PO. We quote only articles that can be tested to the spec."
	},
	{
		country: "United States",
		role: "Footwear, goods, upholstery",
		text: "US buyers want durability, traceable origin and a clean chemical profile. Bangladesh competes on value when inspection and documents are boringly complete."
	},
	{
		country: "Japan & Korea",
		role: "Tight incoming quality",
		text: "Incoming inspection is the product. We write reports that match what a Tokyo or Seoul QC table will actually see — shade, defects, substance."
	},
	{
		country: "Turkey & Spain",
		role: "Footwear clusters",
		text: "Both markets run cow and buffalo for footwear and belts. Speed plus a stable article wins repeat orders."
	},
	{
		country: "Vietnam",
		role: "Footwear manufacturing",
		text: "Vietnamese factories take crust and splits as input to export footwear. Lead time and assortment stability are the service."
	},
	{
		country: "Hong Kong & Taiwan",
		role: "Trading desks",
		text: "Trading houses still book Bangladesh crust and wet blue for re-export. We speak their language: lots, selections, and a ship date."
	}
];
var sectorContext = {
	heading: "Bangladesh leather, as it actually is",
	body: [
		"Bangladesh’s leather and leather-goods complex earned about US$1.23 billion in FY 2025–26, with goods growing faster than wet blue and crust. The country’s advantage remains hides and skins, a large Savar tannery estate at Hemayetpur, and a price that still works for volume buyers.",
		"The constraint is equally plain: environmental compliance at Savar, limited LWG coverage, and too much of the export mix still stuck in crust rather than finished and goods. We do not pretend otherwise. Buyers who need documented chemistry, hide-level inspection and a mill that can hold a spec are the buyers we are built for.",
		"ABM sits between those mills and your factory: 32 million sq ft of annual capacity through our network, a US$10 million turnover, and inspectors on the table in Hemayetpur — not a trading inbox in another time zone."
	]
};
function MarketsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Markets",
			title: "Where Bangladesh leather earns its keep.",
			lede: "China for volume, Italy for grain, Japan for incoming QC. We ship the article the market actually runs — not a generic ‘export quality’ line.",
			crumbs: [{ label: "Markets" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold",
				children: sectorContext.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4 text-muted",
				children: sectorContext.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2",
				children: marketNotes.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-line pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold tracking-[0.18em] uppercase text-saddle",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-semibold",
							children: m.country
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: m.text
						})
					]
				}, m.country))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/products",
				label: "Leather articles",
				text: "What we actually ship into those markets."
			},
			{
				to: "/made-products",
				label: "Made products",
				text: "Private-label goods for retail and OEM programmes."
			},
			{
				to: "/testimonials",
				label: "Clients",
				text: "What buyers in those markets actually say."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { MarketsPage as component };
