import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageHero, o as RelatedPages, s as company } from "./router-DsqIUCUT.mjs";
import { t as QuoteForm } from "./quote-form-BJaer6VT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CIyej2Ff.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Contact",
			title: "Send the brief. We answer on WhatsApp the same working day.",
			lede: "Quotes, samples, mill visits — leather articles and made-up goods. Abdullah Al Mohan takes partnership files directly.",
			crumbs: [{ label: "Contact" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Talk to us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted",
								children: "Phone · WhatsApp · WeChat · Line · Viber"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-lg font-semibold text-ink",
								href: company.phoneHref,
								children: company.phone
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted",
								children: "Business"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-ink",
								href: `mailto:${company.emails.business}`,
								children: company.emails.business
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-semibold tracking-[0.16em] uppercase text-muted",
								children: "General"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-ink",
								href: `mailto:${company.emails.general}`,
								children: company.emails.general
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "font-semibold text-saddle hover:underline",
								href: company.ceo.linkedin,
								target: "_blank",
								rel: "noreferrer",
								children: ["LinkedIn — ", company.ceo.name]
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: company.office.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: company.office.lines.join(", ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: company.hours
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: company.factory.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: company.factory.lines.join(", ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Visits by appointment."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "ABM Trading Corporation, Dhaka",
							className: "h-56 w-full grayscale",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							src: "https://maps.google.com/maps?q=Hazaribagh%20Dhaka&t=m&z=12&output=embed&iwloc=near"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 text-sm text-muted",
						children: "Article, substance, volume, port. We come back with availability."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/products",
				label: "Leather articles",
				text: "Open an article before you write the brief."
			},
			{
				to: "/made-products",
				label: "Made products",
				text: "Belts, bags, wallets — include a tech pack if you have one."
			},
			{
				to: "/faq",
				label: "FAQ",
				text: "Lead times, tannages and documents, already answered."
			}
		] })
	] });
}
//#endregion
export { ContactPage as component };
