import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as madeProducts, _ as goodsCapabilities, a as PageHero, b as goodsFaqs, c as Button, i as CtaBand, l as cn, o as RelatedPages, v as goodsCategories, x as goodsProcess, y as goodsCategoryLabel } from "./router-DsqIUCUT.mjs";
import { t as Input } from "./input-CGos8pMy.mjs";
import { t as QuoteForm } from "./quote-form-BJaer6VT.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CaHXFyVg.mjs";
import { t as Badge } from "./badge-T8G6wXLJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/made-products-CA-TQGFX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categoryFilters = [{
	id: "all",
	label: "All goods"
}, ...goodsCategories.map((c) => ({
	id: c.id,
	label: goodsCategoryLabel[c.id]
}))];
function MadeProductsPage() {
	const [category, setCategory] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return madeProducts.filter((p) => {
			if (category !== "all" && p.category !== category) return false;
			if (!query) return true;
			return p.name.toLowerCase().includes(query) || p.short.toLowerCase().includes(query) || p.applications.join(" ").toLowerCase().includes(query);
		});
	}, [category, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Leather made products",
			title: "Belts, bags, wallets, shoes — cut from leather we already inspected.",
			lede: "Private-label OEM from partner workshops in Dhaka and Savar. The hide business and the goods business on one file: spec, sample, AQL, documents.",
			crumbs: [{ label: "Leather made products" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
					children: "The programme"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold md:text-4xl",
					children: "A buying house that can also deliver the article already made up."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted",
					children: "Bangladesh’s leather-goods export is growing faster than wet blue and crust. Buyers who already take our cow, goat and buffalo often want the next step — a belt, a bag, a wallet — without standing up a second supplier. We place those orders in partner workshops, cut from lots we have graded hide by hide, and inspect the finished piece the same way we inspect a crust: against a sealed sample, with a report."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "We do not hold a house brand. Private label and unbranded OEM only. Tech pack or a physical sample we can reverse; we will not guess a construction from a mood board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#catalogue",
							children: "Browse the catalogue"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "Leather articles"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/goods-workshop.jpg",
					alt: "Artisan stitching a cowhide bag on a walking-foot machine",
					className: "h-full min-h-80 w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4",
				children: [
					{
						k: "200–500",
						v: "Typical MOQ, by SKU"
					},
					{
						k: "AQL 2.5",
						v: "Finished-goods inspection"
					},
					{
						k: "4–8 wks",
						v: "Bulk after sample sign-off"
					},
					{
						k: "OEM",
						v: "Private label only — no house brand"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-ink md:text-3xl",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-semibold tracking-[0.14em] uppercase text-muted",
						children: s.v
					})]
				}, s.k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
					children: "Categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold",
					children: "What the workshops actually run."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: goodsCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setCategory(c.id);
							document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
						},
						className: "group overflow-hidden rounded-md bg-paper text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: goodsCategoryLabel[c.id],
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold",
								children: goodsCategoryLabel[c.id]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-sm text-muted",
								children: c.blurb
							})]
						})]
					}, c.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "catalogue",
			className: "scroll-mt-24 bg-cream/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
							children: "Catalogue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold",
							children: "Programmes we can place."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search belts, bags, end uses…",
							className: "lg:max-w-xs",
							"aria-label": "Search made products"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: categoryFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: category === f.id,
							onClick: () => setCategory(f.id),
							children: f.label
						}, f.id))
					}),
					list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-20 text-center text-muted",
						children: "No programmes match those filters."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/made-products/$slug",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: goodsCategoryLabel[p.category] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl font-semibold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-3 text-sm text-muted",
										children: p.short
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-xs text-muted",
										children: ["MOQ ", p.moq]
									})
								]
							})]
						}, p.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
					children: "OEM / ODM"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-2xl font-display text-3xl font-semibold",
					children: "Capabilities a factory buyer actually asks for."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: goodsCapabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-paper p-7 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: c.text
						})]
					}, c.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
						children: "How a goods file runs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Brief. Sample. Make. Inspect. Ship."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
						children: goodsProcess.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-saddle",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-semibold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: step.text
							})
						] }, step.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
						children: "Commercial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "MOQ, clock, packing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 grid gap-5 sm:grid-cols-2",
						children: [
							["Sampling", "10 days (gloves, belts) to 4 weeks (footwear, jackets)."],
							["Bulk lead time", "4–8 weeks after sample sign-off; footwear and garments longer."],
							["MOQ", "By SKU, not mixed dumps. 100 jackets to 1,000 work gloves."],
							["Incoterms", "FOB Chittagong, CIF, DDP or EXW — same as the hide file."],
							["Packing", "Poly, sleeve, gift box or buyer spec. Carton marks as instructed."],
							["Labelling", "Woven, foil, hang-tag, barcode. Placement locked on the sample."]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-line pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] font-semibold tracking-[0.14em] uppercase text-muted",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-ink",
								children: v
							})]
						}, k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
						children: "Leather used"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Cut from articles on this site."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Goods are not a separate chemistry. They are cut from cow nappa, goat, buffalo belt crust and splits we already inspect. Open the leather article if you want the hide spec; open the goods article if you want the made-up programme."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "Leather catalogue"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/goods-hero.jpg",
						alt: "Handbags, belts, wallets and a duffel on a packing table",
						className: "mt-8 w-full rounded-lg object-cover"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
						children: "Quality"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Inspection is not a slogan on goods either."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: [
							["Sealed sample", "Bulk is judged against the signed sample, not against a photograph."],
							["AQL 2.5", "Tighter on request. Measurement, stitch, hardware, shade, packing."],
							["One report", "The same commercial set as hides: invoice, packing list, COO, QC notes."]
						].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-ink",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: d
							})]
						}, t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold",
					children: "Straight answers on made-up articles."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-8",
					children: goodsFaqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: item.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
					}, item.q))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Request a goods programme"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Style, leather, volume, destination. Attach the idea of a tech pack in the brief — we come back with a workshop and a sample date."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { defaultProduct: "Structured Nappa Handbag" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { items: [
			{
				to: "/products",
				label: "Leather articles",
				text: "Wet blue, crust and finished — the input these goods are cut from."
			},
			{
				to: "/services",
				label: "Services",
				text: "Inspection, sourcing, documents and a mill date for hides and goods."
			},
			{
				to: "/shipping",
				label: "Shipping",
				text: "Packing, incoterms and the clock from sample sign-off to the water."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			kicker: "Next sample",
			title: "Send a tech pack. We reply with a workshop and a date."
		})
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
export { MadeProductsPage as component };
