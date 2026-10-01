import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, i as CtaBand, o as RelatedPages } from "./router-DsqIUCUT.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CaHXFyVg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BVUzOmXk.js
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		group: "Company",
		items: [
			{
				q: "What does ABM Trading Corporation do?",
				a: "We are a Bangladesh leather buying house and inspecting agent. We source, inspect and export cow, goat, sheep and buffalo leather as wet blue, crust and finished goods, and we represent overseas buyers on the ground in Dhaka and Savar."
			},
			{
				q: "How long have you been in leather?",
				a: "The family entered hide processing and export in 1980. Abdullah Al Mohan has run the company professionally since 2014. That mix of tannery-floor memory and current mill relationships is the point of the firm."
			},
			{
				q: "Which markets do you ship to?",
				a: "Regular business in about 15 countries: China, Hong Kong, Vietnam, Japan, Korea, Taiwan, Pakistan, Cambodia, South Africa, Turkey, Spain, Italy, Portugal, plus programmes into Germany and the United States."
			}
		]
	},
	{
		group: "Product & quality",
		items: [
			{
				q: "What articles do you handle?",
				a: "Cow full chrome, semi chrome and vegetable crust; goat in the same tannages; buffalo belt and industrial crust; cow wet blue splits (single and double butt); lining, nappa, milled, nubuck, suede; and finished aniline, semi-aniline, oily, wax, burnish, glazed and embossed. We also place private-label leather goods — belts, bags, wallets, footwear, jackets and gloves — cut from those articles."
			},
			{
				q: "How do you inspect?",
				a: "Piece by piece. Inspectors check substance, shade, finish, defects and contract selection. Approved pieces take our quality seal. You receive a report with the shipment documents."
			},
			{
				q: "Can you develop a custom article?",
				a: "Yes. Colour, handle, thickness and finish are developed with partner tanneries. Typical path: swatch → lab dip → mill trial → bulk. Add two to three weeks for a new finish."
			}
		]
	},
	{
		group: "Orders & shipping",
		items: [
			{
				q: "What is a typical lead time?",
				a: "Finished articles that are available: immediate. Wet blue and standard crust: 2–4 weeks. Custom finishing: add 2–3 weeks. We quote a date at order, not a range after production has started."
			},
			{
				q: "Do you ship and document?",
				a: "Yes. Air (about 7–10 days), sea (about 3–4 weeks) and express. Terms FOB, CIF, DDP or EXW. We prepare the commercial set, packing list, certificate of origin and quality certificates. Main ports: Chittagong, Mongla, and Hazrat Shahjalal for air."
			},
			{
				q: "Payment terms?",
				a: "Discussed per relationship and order size. Typical structures: deposit with balance after inspection, or letter of credit on larger programmes. Volume pricing is real because we place bulk with mills."
			}
		]
	},
	{
		group: "Compliance",
		items: [{
			q: "REACH, ISO, tests?",
			a: "We support REACH documentation, ISO-aligned quality management, ASTM and IULTCS methods where specified, and third-party laboratory tests. Chrome-free and vegetable articles are available. We do not claim LWG mill certification we do not hold — we will say plainly what a given tannery can document."
		}, {
			q: "Can we visit?",
			a: "Office and mill visits by appointment for serious buyers. Factory: Plot XA1, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar."
		}]
	},
	{
		group: "Leather made products",
		items: [
			{
				q: "Do you make finished leather goods?",
				a: "Yes. Private-label OEM from partner workshops in Dhaka and Savar: belts, handbags, wallets, footwear, jackets, gloves and travel goods, cut from leather we have already inspected. We do not hold a house brand."
			},
			{
				q: "What are typical minimums and lead times for goods?",
				a: "Belts from 400–500 pieces, wallets from 300, handbags from 200, footwear from 300 pairs, jackets from 100. Samples 10 days to 4 weeks; bulk 4–8 weeks after sign-off (footwear and garments longer). Quoted by SKU, not mixed dumps."
			},
			{
				q: "Can we send a tech pack?",
				a: "A tech pack with measurements, SPI, hardware and a material list is the fastest path. A physical sample we can reverse is next. We will not guess a construction from a mood board."
			}
		]
	}
];
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "FAQ",
			title: "Straight answers for a factory buyer.",
			lede: "Lead times, tannages, documents, visits. If it is not here, WhatsApp the number on the bar.",
			crumbs: [{ label: "FAQ" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 py-14",
			children: faqs.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: group.group
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-2",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: item.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
					}, item.q))
				})]
			}, group.group))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/products",
				label: "Leather articles",
				text: "The catalogue behind those answers."
			},
			{
				to: "/made-products",
				label: "Made products",
				text: "OEM minimums, tech packs and AQL."
			},
			{
				to: "/contact",
				label: "Contact",
				text: "If it is not in the FAQ, send the brief."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { FaqPage as component };
