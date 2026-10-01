import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, i as CtaBand, o as RelatedPages } from "./router-DsqIUCUT.mjs";
import { t as testimonials } from "./testimonials-BqtGMLlD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-BsxJWPg0.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Clients",
			title: "Long files, not one containers.",
			lede: "Footwear, goods and industrial buyers who kept the account because the second lot matched the first.",
			crumbs: [{ label: "Clients" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base leading-relaxed text-body",
					children: [
						"“",
						t.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-6 border-t border-line pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-ink",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								t.role,
								" · ",
								t.firm
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted",
							children: [
								t.product,
								" · ",
								t.years
							]
						})
					]
				})]
			}, t.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/markets",
				label: "Markets",
				text: "Where those files actually ship."
			},
			{
				to: "/made-products",
				label: "Made products",
				text: "The goods programmes behind some of those notes."
			},
			{
				to: "/contact",
				label: "Contact",
				text: "Start a file of your own."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { TestimonialsPage as component };
