import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as object, n as boolean, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { S as madeProducts, c as Button, f as products, l as cn } from "./router-DsqIUCUT.mjs";
import { t as Input } from "./input-CGos8pMy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-BJaer6VT.js
var import_jsx_runtime = require_jsx_runtime();
var enquirySchema = object({
	name: string().trim().min(2, "Please enter your name"),
	company: string().trim().min(2, "Please enter your company"),
	country: string().trim().min(2, "Please enter your country"),
	email: string().trim().email("Enter a valid email"),
	phone: string().trim().min(6, "Enter a phone or WhatsApp number"),
	product: string().trim().optional(),
	quantity: string().trim().optional(),
	sample: boolean(),
	intent: _enum([
		"quote",
		"sample",
		"career",
		"general"
	]),
	message: string().trim().min(12, "Tell us what you need — at least a sentence")
});
var KEY = "abm-enquiries";
function listEnquiries() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveEnquiry(data) {
	const record = {
		...data,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const next = [record, ...listEnquiries()].slice(0, 50);
	localStorage.setItem(KEY, JSON.stringify(next));
	return record;
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-md bg-paper px-3.5 py-3 text-sm text-body shadow-[var(--shadow-border)] placeholder:text-muted/80", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-[13px] font-semibold tracking-wide text-ink", className),
		...props
	});
}
function QuoteForm({ defaultProduct, intent = "quote" }) {
	const form = useForm({
		resolver: u(enquirySchema),
		defaultValues: {
			name: "",
			company: "",
			country: "",
			email: "",
			phone: "",
			product: defaultProduct ?? "",
			quantity: "",
			sample: intent === "sample",
			intent,
			message: ""
		}
	});
	function onSubmit(values) {
		saveEnquiry(values);
		form.reset({
			...form.getValues(),
			name: "",
			company: "",
			country: "",
			email: "",
			phone: "",
			quantity: "",
			message: "",
			sample: false
		});
		toast.success("Enquiry saved. We reply within one working day on WhatsApp or email.");
	}
	const err = form.formState.errors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						error: err.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: "name",
							...form.register("name")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Company",
						error: err.company?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: "organization",
							...form.register("company")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Country",
						error: err.country?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: "country-name",
							...form.register("country")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						error: err.email?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							autoComplete: "email",
							...form.register("email")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone / WhatsApp",
						error: err.phone?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "tel",
							autoComplete: "tel",
							...form.register("phone")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Article",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-11 w-full rounded-sm bg-paper px-3.5 text-sm text-body shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle",
							...form.register("product"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select an article"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
									label: "Leather articles",
									children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.name,
										children: p.name
									}, p.slug))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
									label: "Leather made products",
									children: madeProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.name,
										children: p.name
									}, p.slug))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Custom / other",
									children: "Custom / other"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Quantity (sq ft, pcs or containers)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "e.g. 20,000 sq ft",
							...form.register("quantity")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 self-end pb-1 text-sm text-body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 accent-saddle",
							...form.register("sample")
						}), "Request a cutting / sample"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Brief",
				error: err.message?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					placeholder: "Substance, tannage, colour, end use, destination port — or a goods tech pack…",
					...form.register("message")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "w-full sm:w-auto",
				children: "Send enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Stored on this device for the preview. For a live order, WhatsApp +880 1734-420401 or email abmtrc@gmail.com."
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-danger",
				children: error
			}) : null
		]
	});
}
//#endregion
export { QuoteForm as t };
