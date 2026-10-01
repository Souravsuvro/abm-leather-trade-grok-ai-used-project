import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, i as CtaBand, o as RelatedPages, s as company } from "./router-DsqIUCUT.mjs";
import { t as QuoteForm } from "./quote-form-BJaer6VT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-DJc0hM6Q.js
var import_jsx_runtime = require_jsx_runtime();
var jobs = [
	{
		slug: "qc-inspector",
		title: "Quality control inspector",
		location: "Dhaka / Savar",
		experience: "2–5 years in leather inspection",
		education: "Diploma in leather technology or equivalent floor experience",
		responsibilities: [
			"Piece-by-piece inspection against the contract",
			"Defect classification and selection grading",
			"Inspection reports and quality seals",
			"Feedback to mills on recurring faults"
		],
		requirements: [
			"Leather quality standards and defect language",
			"Substance measurement and shade assessment",
			"English and Bengali for reports",
			"Comfortable on a mill floor"
		]
	},
	{
		slug: "technologist",
		title: "Leather technologist",
		location: "Dhaka / Savar",
		experience: "3–7 years",
		education: "Bachelor in leather technology or chemical engineering",
		responsibilities: [
			"Specs, lab dips and mill trials",
			"Tannage and finish advice for buyer end-use",
			"Technical dialogue with tanneries",
			"Keep the file current on restricted substances"
		],
		requirements: [
			"Chrome, veg and finishing chemistry",
			"Ability to write a spec a mill can run",
			"Clear English with overseas buyers",
			"Travel to Hemayetpur as routine"
		]
	},
	{
		slug: "sales",
		title: "Sales & business development",
		location: "Dhaka, with travel",
		experience: "2–4 years international sales",
		education: "Business, marketing or related",
		responsibilities: [
			"New buyers in existing and new markets",
			"Quotations and sample programmes",
			"Account management after the first PO",
			"Handoff to operations without dropping the thread"
		],
		requirements: [
			"Export sales discipline",
			"Written English that a factory can act on",
			"Leather knowledge is an advantage, not a gate",
			"Target ownership"
		]
	},
	{
		slug: "supply-chain",
		title: "Supply chain coordinator",
		location: "Dhaka",
		experience: "2–3 years",
		education: "Supply chain, logistics or business",
		responsibilities: [
			"Mill scheduling against the PO",
			"Shipping bookings and documents",
			"Status to the buyer without being asked twice",
			"Exception handling when a lot is late or short"
		],
		requirements: [
			"Export documentation literacy",
			"Calm timeline management",
			"Office tools and shipment tracking",
			"Direct, precise communication"
		]
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Careers",
			title: "Inspectors, technologists, people who can hold a mill date.",
			lede: "A small house with global files. Dhaka office, Savar floor, buyers in fifteen markets. We hire for judgement, not slogans.",
			crumbs: [{ label: "Careers" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						["Floor and world", "Mill visits in Hemayetpur, buyers from China to Italy."],
						["A craft, taught", "On-the-job and off-site training. Inspectors are not left to guess."],
						["A file you own", "Small enough that your name is on the lot — for better or worse."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-paper p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: d
						})]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-8",
					children: jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-paper p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: job.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									job.location,
									" · ",
									job.experience,
									" · ",
									job.education
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[11px] font-semibold tracking-[0.16em] uppercase text-muted",
									children: "Responsibilities"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 list-disc space-y-1 pl-4 text-sm text-body",
									children: job.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[11px] font-semibold tracking-[0.16em] uppercase text-muted",
									children: "Requirements"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 list-disc space-y-1 pl-4 text-sm text-body",
									children: job.requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
								})] })]
							})
						]
					}, job.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 rounded-lg bg-cream/60 p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Internship"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: "Three to six months, stipend, rotation through inspection, sourcing and coordination. Students and new graduates in leather, chemistry or business. Strong files convert to full-time."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-14 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold",
							children: "Apply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"CV and a short note on the role. Or email ",
								company.emails.careers,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { intent: "career" })
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/about",
				label: "About",
				text: "A leather family, a professional inspecting house."
			},
			{
				to: "/services",
				label: "Services",
				text: "The work inspectors and technologists actually do."
			},
			{
				to: "/contact",
				label: "Contact",
				text: "Or email a CV to the careers desk."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { CareersPage as component };
