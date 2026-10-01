import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, p as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as object, i as number, o as string, r as literal, s as union } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTrigger, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/made-products-C2X04sFT.js
var goodsCategoryLabel = {
	belts: "Belts & straps",
	bags: "Handbags",
	slg: "Small leather goods",
	footwear: "Footwear",
	garments: "Garments",
	gloves: "Gloves",
	travel: "Travel",
	industrial: "Industrial"
};
var goodsCategories = [
	{
		id: "belts",
		blurb: "Table-cut buffalo and veg-tan cow, 3.0–3.4 mm, edge-dyed, branded or unbranded.",
		image: "/images/goods-belts.jpg"
	},
	{
		id: "bags",
		blurb: "Structured handbags, shoppers and totes in cow nappa, milled and veg-tan.",
		image: "/images/goods-handbags.jpg"
	},
	{
		id: "slg",
		blurb: "Wallets, cardholders, passport covers and key fobs — goat and cow, private label.",
		image: "/images/goods-wallets.jpg"
	},
	{
		id: "footwear",
		blurb: "Oxfords, derbies and casuals from inspected cow and goat uppers.",
		image: "/images/goods-footwear.jpg"
	},
	{
		id: "garments",
		blurb: "Nappa jackets and vests, pattern-graded, with lining and hardware to spec.",
		image: "/images/goods-jacket.jpg"
	},
	{
		id: "gloves",
		blurb: "Fine goat dress gloves and cow-split industrial / safety gloves.",
		image: "/images/goods-gloves.jpg"
	},
	{
		id: "travel",
		blurb: "Duffels, weekenders and holdalls with brass hardware and reinforced bases.",
		image: "/images/goods-travel.jpg"
	},
	{
		id: "industrial",
		blurb: "Aprons, tool belts and heavy straps for workshops and safety programmes.",
		image: "/images/goods-gloves.jpg"
	}
];
var madeProducts = [
	{
		slug: "buffalo-belt-programme",
		name: "Buffalo Belt Programme",
		category: "belts",
		short: "Table-cut 3.2–3.4 mm buffalo, edge-dyed, ready for your buckle or ours.",
		description: "The same buffalo crust we inspect for Chinese and Turkish belt plants, made up in Dhaka. We table-cut for yield, skive and edge-dye to a locked shade, and stitch or snap to your hardware spec. Unbranded OEM or private-label foil. Widths from 30 to 40 mm; length graded. Every piece is checked for empty flanks and neck sponginess before it leaves the workshop.",
		leather: "Buffalo belt crust, full chrome / semi / veg",
		leatherSlugs: ["buffalo-belt-crust"],
		moq: "500 pcs per colour / width",
		leadTime: "Sample 12–16 days · bulk 4–6 weeks",
		customization: [
			"Width & length grading",
			"Edge colour",
			"Buyer buckle or ours",
			"Foil / emboss logo",
			"Hang-tag & barcode"
		],
		applications: [
			"Fashion retail",
			"Private label",
			"Corporate gifting",
			"Uniform programmes"
		],
		image: "/images/goods-belts.jpg",
		featured: true,
		specs: [
			{
				label: "Substance",
				value: "3.2–3.4 mm+"
			},
			{
				label: "Cut",
				value: "100% table cutting"
			},
			{
				label: "Finish",
				value: "Edge-dyed, burnish optional"
			},
			{
				label: "Pack",
				value: "Individual sleeve + export carton"
			}
		]
	},
	{
		slug: "vegetable-cow-belt",
		name: "Vegetable Cow Belt",
		category: "belts",
		short: "Full veg-tan cow, a warmer colour and a firmer handle for European goods desks.",
		description: "Chrome-free belt leather for buyers who cannot carry residual chrome. We mill veg-tan cow to 3.0–3.5 mm, cut from the bend, and finish the edge so it burnishes in wear. Colour is naturally warmer; we lock a lab dip before bulk. Suited to slow-fashion and REACH-minded programmes.",
		leather: "Cow vegetable / chrome-free crust",
		leatherSlugs: ["cow-vegetable-chrome-free"],
		moq: "400 pcs per colour",
		leadTime: "Sample 2–3 weeks · bulk 5–7 weeks",
		customization: [
			"Natural or dyed",
			"Brass or nickel-free buckle",
			"Emboss",
			"Gift box"
		],
		applications: [
			"EU retail",
			"Craft / heritage",
			"Corporate"
		],
		image: "/images/goods-belts.jpg",
		featured: true,
		specs: [
			{
				label: "Tannage",
				value: "Vegetable / chrome-free"
			},
			{
				label: "Substance",
				value: "3.0–3.5 mm"
			},
			{
				label: "Compliance",
				value: "REACH support, lab tests on request"
			},
			{
				label: "Hardware",
				value: "Brass, antique, nickel-free"
			}
		]
	},
	{
		slug: "structured-nappa-handbag",
		name: "Structured Nappa Handbag",
		category: "bags",
		short: "Cow nappa body, tight grain, brass hardware — developed from your tech pack or ours.",
		description: "A buying-house handbag programme, not a catalogue mill. We place the shell in inspected cow nappa (or milled / veg-tan on request), source lining, zip and hardware to your RSL, and run a size set before bulk. Edge paint, stitching SPI and handle construction are written into the spec so the second lot matches the first. Private label only — we do not sell a house brand.",
		leather: "Cow nappa crust & finished",
		leatherSlugs: ["cow-nappa-finished", "cow-finished-specialties"],
		moq: "200 pcs per colour / style",
		leadTime: "Sample 3 weeks · bulk 6–8 weeks",
		customization: [
			"Tech-pack development",
			"Hardware finish",
			"Lining",
			"Emboss / foil",
			"Dust bag & cards"
		],
		applications: [
			"Fashion brands",
			"Department stores",
			"E-commerce private label"
		],
		image: "/images/goods-handbags.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "Cow nappa, 1.0–1.4 mm"
			},
			{
				label: "Construction",
				value: "Boarded / soft, SPI to spec"
			},
			{
				label: "Hardware",
				value: "Brass, gun-metal, custom"
			},
			{
				label: "QC",
				value: "AQL 2.5, piece inspection"
			}
		]
	},
	{
		slug: "shopper-tote",
		name: "Shopper & Tote",
		category: "bags",
		short: "Unlined or lightly lined cow totes — volume styles for retail and corporate.",
		description: "A cleaner, higher-yield construction than a structured bag: whole-hide panels, reinforced handles, optional zip-top and inner pocket. We run these in milled cow, veg-tan and corrected grain depending on price architecture. Print, foil and woven labels sit on a locked placement drawing.",
		leather: "Cow milled / nappa / veg-tan",
		leatherSlugs: ["cow-full-chrome-crust", "cow-nappa-finished"],
		moq: "300 pcs per colour",
		leadTime: "Sample 2–3 weeks · bulk 5–7 weeks",
		customization: [
			"Size",
			"Handles",
			"Print / foil",
			"Inner pocket",
			"Gift wrap"
		],
		applications: [
			"Retail",
			"Corporate gifting",
			"Hospitality"
		],
		image: "/images/goods-handbags.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "1.2–1.6 mm cow"
			},
			{
				label: "Lining",
				value: "None / cotton / suede"
			},
			{
				label: "Handles",
				value: "Leather or webbing"
			},
			{
				label: "Pack",
				value: "Polybag + export carton"
			}
		]
	},
	{
		slug: "wallet-cardholder-set",
		name: "Wallet & Cardholder Set",
		category: "slg",
		short: "Bifold, card sleeve, passport cover and key fob — goat or cow, stitched to a SPI.",
		description: "Small leather goods are where a mill’s grain and a workshop’s needle show. We cut goat for a fine break and cow for a fuller handle, skive pockets so the wallet is not a brick, and lock thread colour and edge paint. Sets can ship as an open-stock programme or a gift box with a brand card. Minimums are by SKU, not by mixed dump.",
		leather: "Goat nappa or cow lining / nappa",
		leatherSlugs: [
			"goat-crust-finished",
			"cow-lining",
			"cow-nappa-finished"
		],
		moq: "300 pcs per SKU / colour",
		leadTime: "Sample 10–14 days · bulk 4–6 weeks",
		customization: [
			"Bifold / trifold / zip",
			"Card count",
			"RFID optional",
			"Foil logo",
			"Gift box"
		],
		applications: [
			"Retail SLG",
			"Travel retail",
			"Corporate",
			"E-commerce"
		],
		image: "/images/goods-wallets.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "Goat 0.7–0.9 mm / cow 0.8–1.1 mm"
			},
			{
				label: "Stitch",
				value: "SPI locked on sample"
			},
			{
				label: "Edge",
				value: "Painted or burnished"
			},
			{
				label: "Pack",
				value: "Sleeve, box or kraft"
			}
		]
	},
	{
		slug: "oxford-derby-footwear",
		name: "Oxford & Derby Footwear",
		category: "footwear",
		short: "Men’s dress and casual shoes from inspected cow and goat uppers, Goodyear or cemented.",
		description: "Bangladesh’s footwear cluster sits next to the leather. We source uppers from the same cow and goat lots we inspect, last to your size run, and make Goodyear-welted or cemented constructions depending on the brief. Incoming QC is the product: substance, shade and cutting yield are already known before the clicker starts. Samples on your last, or on ours for a first look.",
		leather: "Cow nappa / lining / goat upper",
		leatherSlugs: [
			"cow-nappa-finished",
			"cow-lining",
			"goat-crust-finished"
		],
		moq: "300 pairs per last / colour",
		leadTime: "Sample 3–4 weeks · bulk 8–10 weeks",
		customization: [
			"Last",
			"Construction",
			"Sole unit",
			"Lining",
			"Branded sock"
		],
		applications: [
			"Footwear brands",
			"Private label",
			"Uniform"
		],
		image: "/images/goods-footwear.jpg",
		featured: true,
		specs: [
			{
				label: "Construction",
				value: "Goodyear / cemented / Blake"
			},
			{
				label: "Sizes",
				value: "EU 39–46 grading"
			},
			{
				label: "Upper",
				value: "Cow or goat, to swatch"
			},
			{
				label: "QC",
				value: "AQL + pairing check"
			}
		]
	},
	{
		slug: "cow-nappa-jacket",
		name: "Cow Nappa Jacket",
		category: "garments",
		short: "Soft nappa motorcycle and blouson styles, pattern-graded, lining and hardware to spec.",
		description: "Garment nappa has to mill without emptying. We select the same cow nappa we export as crust, then cut, sew and finish in a garment workshop that can hold a size set. Zip, snap and lining are RSL-aware. A fit sample precedes bulk; we do not skip that step to make a ship date look pretty.",
		leather: "Cow nappa, softy milled",
		leatherSlugs: ["cow-nappa-finished"],
		moq: "100 pcs per colour / style",
		leadTime: "Fit sample 4 weeks · bulk 8–12 weeks",
		customization: [
			"Block & grade",
			"Hardware",
			"Lining",
			"Patches / embroidery",
			"Hang-tag"
		],
		applications: [
			"Fashion",
			"Outerwear brands",
			"Corporate"
		],
		image: "/images/goods-jacket.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "Softy nappa 0.8–1.1 mm"
			},
			{
				label: "Sizes",
				value: "XS–XXL or to grade"
			},
			{
				label: "Lining",
				value: "Satin / cotton / quilt"
			},
			{
				label: "QC",
				value: "Measurement + stitch audit"
			}
		]
	},
	{
		slug: "goat-dress-gloves",
		name: "Goat Dress Gloves",
		category: "gloves",
		short: "Fine-break goat, table-cut, for dress and driving — a 15–25% premium over cow for a reason.",
		description: "Goat’s tight follicle and natural water resistance are why gloving still prefers it. We cut from inspected goat crust, table-cut for yield, and sew a dress or driving pattern with a locked SPI. Colour to lab dip. Unlined, silk-lined or cashmere-lined on request. Selection is stricter than cow; we do not mix lots to fill a carton.",
		leather: "Goat crust & finished nappa",
		leatherSlugs: ["goat-crust-finished"],
		moq: "300 pairs per colour / size run",
		leadTime: "Sample 2 weeks · bulk 5–7 weeks",
		customization: [
			"Dress / driving",
			"Lining",
			"Snap or button",
			"Emboss",
			"Gift pouch"
		],
		applications: [
			"Menswear",
			"Heritage retail",
			"Gifting"
		],
		image: "/images/goods-gloves.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "Goat 0.5–0.7 mm"
			},
			{
				label: "Cut",
				value: "Table-cut"
			},
			{
				label: "Lining",
				value: "None / silk / cashmere"
			},
			{
				label: "Sizes",
				value: "7–11 or to chart"
			}
		]
	},
	{
		slug: "industrial-work-gloves",
		name: "Industrial Work Gloves",
		category: "industrial",
		short: "Cow-split and grain work gloves for safety programmes — dense fibre, honest palms.",
		description: "Work gloves fail in the palm and the cuff, not in a lookbook. We cut cow split and grain from lots we already grade for fibre density, stitch a reinforced palm, and bind the cuff to a length you specify. EN and ANSI testing is arranged when the brief names a standard — we do not stamp a mark we cannot document.",
		leather: "Cow split suede & crust splits",
		leatherSlugs: ["cow-split-suede", "cow-wet-blue-splits"],
		moq: "1,000 pairs per style",
		leadTime: "Sample 10 days · bulk 4–6 weeks",
		customization: [
			"Palm patch",
			"Cuff length",
			"Logo stamp",
			"Size run",
			"Polybag mark"
		],
		applications: [
			"Safety",
			"Construction",
			"Workshop",
			"OEM tool brands"
		],
		image: "/images/goods-gloves.jpg",
		specs: [
			{
				label: "Leather",
				value: "Cow split / grain"
			},
			{
				label: "Palm",
				value: "Reinforced optional"
			},
			{
				label: "Testing",
				value: "EN / ANSI on request"
			},
			{
				label: "Pack",
				value: "Pair bag + carton"
			}
		]
	},
	{
		slug: "travel-duffel",
		name: "Travel Duffel & Weekender",
		category: "travel",
		short: "Cowhide holdalls with brass hardware, reinforced base and a size that actually fits an overhead.",
		description: "A duffel is a cutting-yield problem as much as a design problem. We pattern for hide size, reinforce the base, and spec zips that survive an airport, not a photoshoot. Shoulder strap, shoe pocket and monogram plaque are options, not clutter. Runs in milled cow, pull-up and veg-tan.",
		leather: "Cow milled, oily or veg-tan",
		leatherSlugs: ["cow-finished-specialties", "cow-full-chrome-crust"],
		moq: "150 pcs per size / colour",
		leadTime: "Sample 3 weeks · bulk 6–8 weeks",
		customization: [
			"Volume (30–50 L)",
			"Hardware",
			"Strap",
			"Monogram",
			"Dust bag"
		],
		applications: [
			"Travel retail",
			"Fashion",
			"Corporate"
		],
		image: "/images/goods-travel.jpg",
		featured: true,
		specs: [
			{
				label: "Leather",
				value: "1.4–1.8 mm cow"
			},
			{
				label: "Hardware",
				value: "Brass / antique"
			},
			{
				label: "Base",
				value: "Reinforced, studs optional"
			},
			{
				label: "QC",
				value: "Zip cycle + strap pull"
			}
		]
	}
];
function madeProductBySlug(slug) {
	return madeProducts.find((p) => p.slug === slug);
}
function featuredMadeProducts() {
	return madeProducts.filter((p) => p.featured);
}
var goodsProcess = [
	{
		n: "01",
		title: "Brief",
		text: "Tech pack, or a sample we can reverse. Leather article, hardware RSL, volume and destination."
	},
	{
		n: "02",
		title: "Sample",
		text: "Fit and colour sample from the same mill that will run bulk. Comments written on the spec, not in a chat."
	},
	{
		n: "03",
		title: "Cut & make",
		text: "Partner workshop in Dhaka / Savar, using inspected leather. Production photos and a mid-line check."
	},
	{
		n: "04",
		title: "Inspect",
		text: "AQL 2.5 as standard, tighter on request. Measurement, stitch, hardware, shade. Nothing ships we would not stamp."
	},
	{
		n: "05",
		title: "Pack & ship",
		text: "Buyer marks, poly, carton, documents. FOB Chittagong or CIF your port — same paper trail as the hide business."
	}
];
var goodsCapabilities = [
	{
		title: "Private label OEM / ODM",
		text: "Your brand, our floor. We develop from a tech pack or from a physical sample, then lock construction so repeat orders match."
	},
	{
		title: "The leather is already inspected",
		text: "Goods are cut from the same cow, goat and buffalo lots we grade hide by hide. Substance and shade are not a surprise at the clicker."
	},
	{
		title: "Hardware & RSL",
		text: "Zips, snaps, buckles and foils sourced to your restricted-substance list. We do not swap a cheaper fitting after the sample is signed."
	},
	{
		title: "One counterpart",
		text: "Hides and made-up articles on the same file, the same inspectors, the same documents. You are not coordinating a tannery and a bag factory in two time zones."
	}
];
var goodsFaqs = [
	{
		q: "Do you manufacture the goods yourselves?",
		a: "We are a buying house and inspecting agent. Finished goods are cut and sewn in partner workshops in Dhaka and around the Savar tannery estate, using leather we have already inspected. ABM owns the file: spec, sample, AQL and documents."
	},
	{
		q: "What is a realistic minimum?",
		a: "Belts from 400–500 pieces per colour, wallets from 300, handbags from 200, footwear from 300 pairs, jackets from 100. Mixed-colour dumps to hit a number are not a programme — we quote by SKU."
	},
	{
		q: "Can you work from our tech pack?",
		a: "Yes. A tech pack with measurements, SPI, hardware and a material list is the fastest path. A physical sample we can reverse is the next best. We will not guess a construction from a mood board."
	},
	{
		q: "Do you hold a house brand?",
		a: "No. We make private-label and unbranded OEM. Your mark, or none."
	},
	{
		q: "How do you inspect finished goods?",
		a: "AQL 2.5 as standard (tighter on request): measurements, stitch, hardware function, shade against the sealed sample, packing. Reports travel with the commercial set, the same way they do for hides."
	},
	{
		q: "Can leather and goods ship together?",
		a: "Yes, when the timing matches. Many buyers book crust or finished leather on one PO and a goods sample or first bulk on another, with the same counterpart in Dhaka."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/products-BhZulaNQ.js
var speciesLabel = {
	cow: "Cow",
	goat: "Goat",
	buffalo: "Buffalo",
	sheep: "Sheep"
};
var stageLabel = {
	"wet-blue": "Wet blue",
	crust: "Crust",
	finished: "Finished"
};
var tannageLabel = {
	"full-chrome": "Full chrome",
	"semi-chrome": "Semi chrome",
	vegetable: "Vegetable",
	"chrome-free": "Chrome-free"
};
var products = [
	{
		slug: "cow-full-chrome-crust",
		name: "Cow Full Chrome Crust",
		species: "cow",
		stage: "crust",
		tannage: ["full-chrome"],
		short: "The workhorse article for footwear and leather goods. Even substance, clean grain, ready for your finishing line.",
		description: "Full chrome cow crust is the backbone of our programme. We select from Savar-estate tanneries for substance consistency, grain tightness and milling behaviour, then inspect hide by hide before packing. Offered as lining, nappa, milled and 100% chrome-free companion lots when a buyer needs a mixed container.",
		thickness: "0.8–2.2 mm, to order",
		selection: "TR / A / B / AB, as contracted",
		finishes: [
			"Lining",
			"Nappa",
			"Milled",
			"Nubuck crust"
		],
		applications: [
			"Footwear uppers",
			"Bags & small leather goods",
			"Linings",
			"Belts"
		],
		image: "/images/cow-crust.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Tannage",
				value: "Full chrome"
			},
			{
				label: "Form",
				value: "Crust, whole hide / side"
			},
			{
				label: "MOQ",
				value: "By article; sample lots available"
			}
		]
	},
	{
		slug: "cow-semi-chrome-crust",
		name: "Cow Semi Chrome Crust",
		species: "cow",
		stage: "crust",
		tannage: ["semi-chrome"],
		short: "Chrome plus vegetable retan for a firmer, more filled handle — belts, straps and structured goods.",
		description: "Semi chrome cow crust balances chrome’s speed and softness with vegetable retannage for fill and cutting yield. Buyers use it where a full veg programme is too slow and a pure chrome lot is too empty. We grade for belly fill, neck wrinkles and dye affinity so finishing does not surprise you.",
		thickness: "1.2–2.8 mm",
		selection: "A / AB, table-cut lots on request",
		finishes: [
			"Milled",
			"Burnish crust",
			"Strap"
		],
		applications: [
			"Belts",
			"Straps",
			"Structured bags",
			"Saddlery components"
		],
		image: "/images/cow-crust.jpg",
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Tannage",
				value: "Semi chrome"
			},
			{
				label: "Handle",
				value: "Filled, cutting-friendly"
			},
			{
				label: "MOQ",
				value: "By article"
			}
		]
	},
	{
		slug: "cow-vegetable-chrome-free",
		name: "Cow Vegetable & Chrome-Free Crust",
		species: "cow",
		stage: "crust",
		tannage: ["vegetable", "chrome-free"],
		short: "Ecological crust for buyers who need REACH-minded, chrome-free or full veg programmes.",
		description: "Vegetable and chrome-free cow crust for European and Japanese programmes that cannot carry residual chrome. We work with tanneries that can document process chemistry and support third-party testing. Colour is naturally warmer; we advise on dye recipes so the finished shade lands where your lab expects.",
		thickness: "1.0–3.0 mm",
		selection: "As contracted; tighter selections for goods",
		finishes: [
			"Full veg tan",
			"Chrome-free crust",
			"Natural"
		],
		applications: [
			"Goods",
			"Belt leather",
			"Orthopaedic",
			"Craft"
		],
		image: "/images/veg-tan.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Tannage",
				value: "Vegetable / chrome-free"
			},
			{
				label: "Compliance",
				value: "REACH support, lab tests on request"
			},
			{
				label: "Lead time",
				value: "Typically 3–6 weeks"
			}
		]
	},
	{
		slug: "cow-wet-blue-splits",
		name: "Cow Wet Blue Splits",
		species: "cow",
		stage: "wet-blue",
		tannage: ["full-chrome", "semi-chrome"],
		short: "Single and double butt splits in calibrated substance — the input many Asian finishing plants run every week.",
		description: "Cow wet blue splits in full chrome and semi chrome, packed for export from Hemayetpur. We measure substance lot by lot and separate single butt from double butt so your splitting and shaving plan is honest. Regular business into China and Vietnam. Finished leather from these splits becomes suede, lining and corrected-grain uppers.",
		thickness: "1.0–1.3 mm+",
		selection: "5 / 7 / 10 / 12 sq ft and up",
		finishes: ["Full chrome", "Semi chrome"],
		applications: [
			"Suede",
			"Lining",
			"Corrected grain",
			"Upholstery splits"
		],
		image: "/images/wet-blue.jpg",
		featured: true,
		specs: [
			{
				label: "12 sq ft+",
				value: "Double butt, 1.3 mm+"
			},
			{
				label: "10 sq ft+",
				value: "Double butt, 1.3 mm+"
			},
			{
				label: "7 sq ft+",
				value: "Double butt 1.2 mm+ / single butt 1.3 mm+"
			},
			{
				label: "5 sq ft+",
				value: "Double butt 1.0 mm+ / single butt 1.2 mm+"
			}
		]
	},
	{
		slug: "cow-split-suede",
		name: "Cow Split Suede & Crust Splits",
		species: "cow",
		stage: "crust",
		tannage: ["full-chrome"],
		short: "Even nap, export suede and crust splits for footwear, garments and upholstery.",
		description: "Cow splits in crust and suede with a dense, even nap. We reject lots with coarse fibre, greasiness or patchy buffing. Thickness and colour can be developed against a buyer’s standard. Suitable for sneakers, lining, garments and contract upholstery.",
		thickness: "0.9–1.6 mm",
		selection: "By size assortment",
		finishes: ["Suede", "Crust split"],
		applications: [
			"Footwear",
			"Garments",
			"Upholstery",
			"Accessories"
		],
		image: "/images/suede.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Form",
				value: "Split crust / suede"
			},
			{
				label: "Nap",
				value: "Fine, even buff"
			},
			{
				label: "Colour",
				value: "To swatch"
			}
		]
	},
	{
		slug: "cow-nappa-finished",
		name: "Cow Nappa Crust & Finished",
		species: "cow",
		stage: "finished",
		tannage: ["full-chrome"],
		short: "Soft, supple nappa with a clean touch — bags, footwear and garments.",
		description: "Cow nappa in crust and finished form. We develop milling, fatliquor and top coat so the handle stays plump without becoming loose. Aniline and semi-aniline versions keep grain visible; pigmented versions lock colour for high-abuse footwear.",
		thickness: "0.8–1.6 mm",
		selection: "Goods / footwear grades",
		finishes: [
			"Nappa",
			"Softy milled",
			"Aniline",
			"Semi-aniline"
		],
		applications: [
			"Handbags",
			"Footwear",
			"Garments",
			"Small leather goods"
		],
		image: "/images/aniline.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Handle",
				value: "Soft, full"
			},
			{
				label: "Finish",
				value: "Aniline to pigmented"
			},
			{
				label: "Lead time",
				value: "Finished: ex-stock or 2–4 weeks"
			}
		]
	},
	{
		slug: "cow-lining",
		name: "Cow Lining Leather",
		species: "cow",
		stage: "crust",
		tannage: ["full-chrome"],
		short: "Thin, even lining crust and finished lining for footwear interiors.",
		description: "Full chrome cow lining with consistent substance and a clean flesh. We inspect for pipes, veins and dye streaks that show through a sock lining. Available in crust for your own finishing or finished to a lab dip.",
		thickness: "0.6–1.0 mm",
		selection: "Lining grade",
		finishes: ["Full chrome lining", "Finished lining"],
		applications: [
			"Footwear linings",
			"Insoles",
			"Sock linings"
		],
		image: "/images/cow-crust.jpg",
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Tannage",
				value: "Full chrome"
			},
			{
				label: "Form",
				value: "Crust or finished"
			},
			{
				label: "Colour",
				value: "To swatch"
			}
		]
	},
	{
		slug: "cow-finished-specialties",
		name: "Finished Cow — Aniline, Wax, Oil, Emboss",
		species: "cow",
		stage: "finished",
		tannage: ["full-chrome", "semi-chrome"],
		short: "Aniline, semi-aniline, oily, waxy, burnish, glazed, milled and embossed finishes developed to sample.",
		description: "Finished cow leather for buyers who want a ready article, not a crust to interpret. We run aniline and semi-aniline for natural-looking goods; oily and waxy pull-up for boots and bags; burnish and glazed for dress footwear; milled and embossed for fashion. Custom colour and print development with mill trials before bulk.",
		thickness: "0.9–2.4 mm",
		selection: "As contracted",
		finishes: [
			"Softy plain",
			"Softy milled",
			"Burnish",
			"Polished",
			"Glazed",
			"Waxy",
			"Oily",
			"Milled",
			"Embossed",
			"Aniline",
			"Semi-aniline"
		],
		applications: [
			"Footwear",
			"Bags",
			"Upholstery",
			"Automotive trim"
		],
		image: "/images/aniline.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Development",
				value: "Lab dip + mill trial"
			},
			{
				label: "Stock",
				value: "Selected articles ex-warehouse"
			},
			{
				label: "Custom",
				value: "2–3 weeks extra for new finish"
			}
		]
	},
	{
		slug: "goat-crust-finished",
		name: "Goat Crust & Finished",
		species: "goat",
		stage: "crust",
		tannage: [
			"full-chrome",
			"semi-chrome",
			"vegetable"
		],
		short: "Tight grain, fine break, a 15–25% premium over cow for gloves, linings and luxury small goods.",
		description: "Goat crust in lining, full chrome, semi chrome and full veg tan. Goat’s tight follicle pattern and natural water resistance suit gloves, lining, shoes and small leather goods that need a fine break. We also finish goat nappa to buyer shade. Selection is stricter than cow; we do not mix lots to fill a container.",
		thickness: "0.5–1.2 mm",
		selection: "Gloving / lining / upper",
		finishes: [
			"Lining",
			"Full chrome",
			"Semi chrome",
			"Full veg tan",
			"Nappa"
		],
		applications: [
			"Gloves",
			"Linings",
			"Luxury SLG",
			"Footwear"
		],
		image: "/images/goat-nappa.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Character",
				value: "Fine grain, tight break"
			},
			{
				label: "Tannage",
				value: "Chrome, semi, veg"
			},
			{
				label: "MOQ",
				value: "Discuss by article"
			}
		]
	},
	{
		slug: "buffalo-belt-crust",
		name: "Buffalo Belt & Industrial Crust",
		species: "buffalo",
		stage: "crust",
		tannage: [
			"full-chrome",
			"semi-chrome",
			"vegetable"
		],
		short: "Dense 3.2–3.4 mm table-cut buffalo for belts and heavy industrial use.",
		description: "Buffalo crust for belt factories that need thickness without empty flanks. We offer table-cutting programmes (including 3.2–3.4 mm+ lots for Chinese belt plants) and industrial substances for straps and safety articles. Fibre is compact; we reject spongy necks.",
		thickness: "2.0–3.4 mm+",
		selection: "Table cut for belts",
		finishes: [
			"Belt crust",
			"Industrial",
			"Veg / chrome"
		],
		applications: [
			"Belts",
			"Straps",
			"Industrial",
			"Safety"
		],
		image: "/images/buffalo-belt.jpg",
		featured: true,
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Belt substance",
				value: "3.2–3.4 mm+"
			},
			{
				label: "Cut",
				value: "100% table cutting available"
			},
			{
				label: "Markets",
				value: "China, Turkey, Spain, Italy"
			}
		]
	},
	{
		slug: "sheep-articles",
		name: "Sheep Skin Articles",
		species: "sheep",
		stage: "crust",
		tannage: ["full-chrome"],
		short: "Soft sheep for garments, gloves and lining — sourced to order.",
		description: "Sheep articles are developed against a buyer brief rather than held as a standing stock programme. Typical uses: garment nappa, gloving and lining. Tell us substance, tannage and end use; we will source and inspect from partner tanneries.",
		thickness: "0.4–0.9 mm",
		selection: "To brief",
		finishes: [
			"Garment",
			"Gloving",
			"Lining"
		],
		applications: [
			"Garments",
			"Gloves",
			"Linings"
		],
		image: "/images/goat-nappa.jpg",
		specs: [
			{
				label: "Origin",
				value: "Bangladesh"
			},
			{
				label: "Programme",
				value: "To-order"
			},
			{
				label: "Lead time",
				value: "Quoted per brief"
			},
			{
				label: "Samples",
				value: "Yes"
			}
		]
	}
];
function productBySlug(slug) {
	return products.find((p) => p.slug === slug);
}
function featuredProducts() {
	return products.filter((p) => p.featured);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DsqIUCUT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandMark({ className, onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			className: "size-9 shrink-0",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.5",
				y: "1.5",
				width: "37",
				height: "37",
				rx: "3",
				fill: onDark ? "#E8DFD2" : "#1A1410"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 27.5V12.5h6.2c3.4 0 5.4 1.7 5.4 4.4 0 1.8-1 3.2-2.7 3.9 2.1.6 3.3 2.1 3.3 4.2 0 3-2.2 5-5.9 5H10zm3.4-8.7h2.6c1.6 0 2.5-.8 2.5-2.1s-.9-2-2.5-2h-2.6v4.1zm0 6.5h3.1c1.8 0 2.8-.9 2.8-2.3s-1-2.2-2.8-2.2h-3.1v4.5z",
				fill: onDark ? "#1A1410" : "#F3EEE6"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-[1.15rem] font-semibold tracking-tight", onDark ? "text-cream" : "text-ink"),
				children: "ABM Trading"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase", onDark ? "text-cream/65" : "text-muted"),
				children: "Corporation"
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-wide transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-saddle text-saddle-fg hover:opacity-90",
			ink: "bg-ink text-cream hover:opacity-90",
			outline: "bg-transparent text-ink ring-1 ring-inset ring-line-strong hover:bg-cream",
			ghost: "bg-transparent text-ink hover:bg-cream",
			cream: "bg-cream text-ink hover:bg-paper",
			link: "bg-transparent p-0 text-saddle underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-sm px-5",
			lg: "h-12 rounded-sm px-6 text-base",
			sm: "h-10 rounded-xs px-3.5 text-[13px]",
			icon: "size-11 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
function SheetContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-canvas p-6 shadow-[var(--shadow-border-hover)]", "data-[state=open]:animate-in", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-sm text-ink hover:bg-cream",
			"aria-label": "Close menu",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		})]
	})] });
}
var company = {
	name: "ABM Trading Corporation",
	shortName: "ABM",
	legalName: "ABM Trading Corporation",
	tagline: "Bangladesh origin leather, inspected hide by hide.",
	lede: "Buying house and inspecting agent for cow, goat, buffalo and sheep leather — wet blue, crust and finished — shipped to footwear, goods, furniture and automotive buyers worldwide.",
	foundedFamily: 1980,
	foundedCompany: 2014,
	phone: "+8801734420401",
	phoneHref: "tel:+8801734420401",
	whatsapp: "https://wa.me/8801734420401",
	emails: {
		general: "aamohanbd@gmail.com",
		business: "abmtrc@gmail.com",
		careers: "abmtrc@gmail.com"
	},
	hours: "Saturday–Thursday, 10:00–20:00 (Dhaka). Friday closed.",
	office: {
		label: "Corporate office",
		lines: [
			"25/2, 2nd Floor, Zigatola",
			"Hazaribagh, Dhaka-1209",
			"Bangladesh"
		]
	},
	factory: {
		label: "Factory & inspection",
		lines: [
			"Plot XA1, BSCIC Chamra Shilpa Nagari",
			"Harindhara, Hemayetpur, Savar",
			"Dhaka-1340, Bangladesh"
		]
	},
	ceo: {
		name: "Abdullah Al Mohan",
		title: "Founder & Managing Director",
		linkedin: "https://www.linkedin.com/in/mohankhan/",
		facebook: "https://www.facebook.com/mohan.khan.9400"
	},
	social: {
		linkedin: "https://bd.linkedin.com/company/abm-trading-corporation",
		instagram: "https://www.instagram.com/abm_trading_corporation/"
	},
	memberships: ["Dhaka Chamber of Commerce and Industry (DCCI) — General Member", "Bangladesh Tanners Association (BTA) — Member"],
	stats: [
		{
			value: "32M",
			unit: "sq ft",
			label: "Annual capacity"
		},
		{
			value: "$10M",
			unit: "",
			label: "Turnover"
		},
		{
			value: "15",
			unit: "markets",
			label: "Regular export"
		},
		{
			value: "1980",
			unit: "",
			label: "Family in leather"
		}
	],
	team: [
		{
			value: "10",
			label: "Quality inspectors"
		},
		{
			value: "4",
			label: "Leather technologists"
		},
		{
			value: "20",
			label: "People on staff"
		}
	],
	markets: [
		"China",
		"Hong Kong",
		"Vietnam",
		"Japan",
		"Korea",
		"Taiwan",
		"Pakistan",
		"Cambodia",
		"South Africa",
		"Turkey",
		"Spain",
		"Italy",
		"Portugal",
		"Germany",
		"United States"
	]
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/made-products",
		label: "Made Products"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/markets",
		label: "Markets"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var moreNav = [
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/certifications",
		label: "Certifications"
	},
	{
		to: "/shipping",
		label: "Shipping"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/testimonials",
		label: "Clients"
	},
	{
		to: "/careers",
		label: "Careers"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden border-b border-line bg-ink text-cream md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-[12px] tracking-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-cream/75",
					children: "Savar, Dhaka · Inspecting agent since 2014 · Family in hides since 1980"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.phoneHref,
						className: "hover:text-cream",
						children: company.phone
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${company.emails.business}`,
						className: "hover:text-cream",
						children: company.emails.business
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "ABM Trading Corporation home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-xs px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors", active ? "text-saddle" : "text-body hover:text-saddle"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "xl:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mt-8 flex flex-col gap-1",
							"aria-label": "Mobile",
							children: [...nav, ...moreNav].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "flex min-h-11 items-center rounded-sm px-2 text-base font-semibold text-ink hover:bg-cream",
									children: item.label
								})
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Request a quote"
								})
							})
						})
					] })] })]
				})
			]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { onDark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-cream/70",
						children: company.lede
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-cream/80 hover:text-cream",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						moreNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-cream/80 hover:text-cream",
							children: item.label
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-cream/80 hover:text-cream",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-cream/80 hover:text-cream",
							children: "Terms"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50",
					children: "Dhaka"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-4 space-y-3 text-sm not-italic text-cream/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: company.office.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: l
						}, l)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-cream",
							href: company.phoneHref,
							children: company.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-cream/55",
							children: "WhatsApp · WeChat · Line · Viber"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-cream",
							href: `mailto:${company.emails.business}`,
							children: company.emails.business
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/55",
							children: company.hours
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Member, DCCI and Bangladesh Tanners Association." })]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-canvas text-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: company.whatsapp,
				target: "_blank",
				rel: "noreferrer",
				className: "fixed right-4 bottom-4 z-40 flex h-12 items-center gap-2 rounded-full bg-saddle px-4 text-sm font-semibold text-saddle-fg shadow-[var(--shadow-border-hover)] hover:opacity-90",
				children: "WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { className: "font-sans text-sm bg-paper text-ink border-line" }
			})
		]
	});
}
function PageHero({ kicker, title, lede, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-cream/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 md:py-20",
			children: [
				crumbs && crumbs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-5 text-xs text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-saddle",
							children: "Home"
						}) }), crumbs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "/"
							}), c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "hover:text-saddle",
								children: c.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: c.label
							})]
						}, c.label))]
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
					children: lede
				})
			]
		})
	});
}
function CtaBand({ kicker = "Next lot", title = "Send a brief. We reply with a mill and a date." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-cream/50",
				children: kicker
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-semibold md:text-4xl",
				children: title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-flex h-12 items-center rounded-sm bg-cream px-6 text-sm font-semibold text-ink hover:bg-paper",
				children: "Request a quote"
			})]
		})
	});
}
function RelatedPages({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.22em] uppercase text-saddle",
				children: "Also in this house"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: "rounded-md bg-canvas p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.text
					})]
				}, String(item.to)))
			})]
		})
	});
}
var styles_default = "/assets/styles-CBCwQbfx.css";
var APP_NAME = "ABM Trading Corporation";
var Route$17 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "ABM Trading Corporation — Bangladesh leather buying house and inspecting agent. Cow, goat and buffalo wet blue, crust and finished leather for export."
			},
			{
				name: "theme-color",
				content: "#1A1410"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$16 = () => import("./routes-C1iViwMi.mjs");
var Route$16 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "ABM Trading Corporation | Bangladesh leather export & inspection" }, {
		name: "description",
		content: company.lede
	}] })
});
var $$splitComponentImporter$15 = () => import("./about-BL6atzJw.mjs");
var Route$15 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: "About | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$14 = () => import("./careers-DJc0hM6Q.mjs");
var Route$14 = createFileRoute("/careers")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({ meta: [{ title: "Careers | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$13 = () => import("./certifications-C-IN6qMi.mjs");
var Route$13 = createFileRoute("/certifications")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "Certifications | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$12 = () => import("./contact-CIyej2Ff.mjs");
var Route$12 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "Contact | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$11 = () => import("./faq-BVUzOmXk.mjs");
var Route$11 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "FAQ | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$10 = () => import("./gallery-DpA4Nu5o.mjs");
var Route$10 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "Gallery | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$9 = () => import("./made-products-CA-TQGFX.mjs");
var Route$9 = createFileRoute("/made-products")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Leather Made Products | ABM Trading Corporation" }, {
		name: "description",
		content: "OEM and private-label leather goods from Bangladesh — belts, handbags, wallets, footwear, jackets and gloves, cut from inspected cow, goat and buffalo leather."
	}] })
});
var $$splitComponentImporter$8 = () => import("./markets-BM_GIm-1.mjs");
var Route$8 = createFileRoute("/markets")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Markets | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$7 = () => import("./privacy-C8bR4Bbd.mjs");
var Route$7 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Privacy | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$6 = () => import("./products-Qyo8wots.mjs");
var Route$6 = createFileRoute("/products")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Products | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$5 = () => import("./services-CAdtEgx9.mjs");
var Route$5 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Services | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$4 = () => import("./shipping-CJBOSvrm.mjs");
var Route$4 = createFileRoute("/shipping")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Shipping | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$3 = () => import("./terms-BvojqF_U.mjs");
var Route$3 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Terms | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$2 = () => import("./testimonials-BsxJWPg0.mjs");
var Route$2 = createFileRoute("/testimonials")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Clients | ABM Trading Corporation" }] })
});
var $$splitComponentImporter$1 = () => import("./made-products._slug-BJ4rtolO.mjs");
var Route$1 = createFileRoute("/made-products/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => {
		const product = madeProductBySlug(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.product.name ?? "Made product"} | ABM Trading Corporation` }, {
		name: "description",
		content: loaderData?.product.short ?? "Leather made products from ABM Trading Corporation."
	}] })
});
var $$splitComponentImporter = () => import("./products._slug-CdjHOMR2.mjs");
var Route = createFileRoute("/products/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const product = productBySlug(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.product.name ?? "Article"} | ABM Trading Corporation` }] })
});
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var CareersRoute = Route$14.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$17
});
var CertificationsRoute = Route$13.update({
	id: "/certifications",
	path: "/certifications",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$17
});
var GalleryRoute = Route$10.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$17
});
var MadeProductsRoute = Route$9.update({
	id: "/made-products",
	path: "/made-products",
	getParentRoute: () => Route$17
});
var MarketsRoute = Route$8.update({
	id: "/markets",
	path: "/markets",
	getParentRoute: () => Route$17
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$17
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$17
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$17
});
var ShippingRoute = Route$4.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => Route$17
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$17
});
var TestimonialsRoute = Route$2.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$17
});
var MadeProductsSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => MadeProductsRoute
});
var ProductsSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
});
var MadeProductsRouteChildren = { MadeProductsSlugRoute };
var MadeProductsRouteWithChildren = MadeProductsRoute._addFileChildren(MadeProductsRouteChildren);
var ProductsRouteChildren = { ProductsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CareersRoute,
	CertificationsRoute,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	MadeProductsRoute: MadeProductsRouteWithChildren,
	MarketsRoute,
	PrivacyRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	ServicesRoute,
	ShippingRoute,
	TermsRoute,
	TestimonialsRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.2em] uppercase text-muted",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold",
				children: "This hide is not in the lot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "The page does not exist. Return home or browse the article list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Products"
					})
				})]
			})
		]
	});
}
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { madeProducts as S, goodsCapabilities as _, PageHero as a, goodsFaqs as b, Button as c, productBySlug as d, products as f, featuredMadeProducts as g, tannageLabel as h, CtaBand as i, cn as l, stageLabel as m, Route as n, RelatedPages as o, speciesLabel as p, Route$1 as r, company as s, router_exports as t, featuredProducts as u, goodsCategories as v, goodsProcess as x, goodsCategoryLabel as y };
