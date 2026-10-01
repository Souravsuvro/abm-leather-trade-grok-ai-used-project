export type GoodsCategory =
  | "belts"
  | "bags"
  | "slg"
  | "footwear"
  | "garments"
  | "gloves"
  | "travel"
  | "industrial";

export type MadeProduct = {
  slug: string;
  name: string;
  category: GoodsCategory;
  short: string;
  description: string;
  leather: string;
  leatherSlugs: string[];
  moq: string;
  leadTime: string;
  customization: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  image: string;
  featured?: boolean;
};

export const goodsCategoryLabel: Record<GoodsCategory, string> = {
  belts: "Belts & straps",
  bags: "Handbags",
  slg: "Small leather goods",
  footwear: "Footwear",
  garments: "Garments",
  gloves: "Gloves",
  travel: "Travel",
  industrial: "Industrial",
};

export const goodsCategories: { id: GoodsCategory; blurb: string; image: string }[] = [
  {
    id: "belts",
    blurb: "Table-cut buffalo and veg-tan cow, 3.0–3.4 mm, edge-dyed, branded or unbranded.",
    image: "/images/goods-belts.jpg",
  },
  {
    id: "bags",
    blurb: "Structured handbags, shoppers and totes in cow nappa, milled and veg-tan.",
    image: "/images/goods-handbags.jpg",
  },
  {
    id: "slg",
    blurb: "Wallets, cardholders, passport covers and key fobs — goat and cow, private label.",
    image: "/images/goods-wallets.jpg",
  },
  {
    id: "footwear",
    blurb: "Oxfords, derbies and casuals from inspected cow and goat uppers.",
    image: "/images/goods-footwear.jpg",
  },
  {
    id: "garments",
    blurb: "Nappa jackets and vests, pattern-graded, with lining and hardware to spec.",
    image: "/images/goods-jacket.jpg",
  },
  {
    id: "gloves",
    blurb: "Fine goat dress gloves and cow-split industrial / safety gloves.",
    image: "/images/goods-gloves.jpg",
  },
  {
    id: "travel",
    blurb: "Duffels, weekenders and holdalls with brass hardware and reinforced bases.",
    image: "/images/goods-travel.jpg",
  },
  {
    id: "industrial",
    blurb: "Aprons, tool belts and heavy straps for workshops and safety programmes.",
    image: "/images/goods-gloves.jpg",
  },
];

export const madeProducts: MadeProduct[] = [
  {
    slug: "buffalo-belt-programme",
    name: "Buffalo Belt Programme",
    category: "belts",
    short: "Table-cut 3.2–3.4 mm buffalo, edge-dyed, ready for your buckle or ours.",
    description:
      "The same buffalo crust we inspect for Chinese and Turkish belt plants, made up in Dhaka. We table-cut for yield, skive and edge-dye to a locked shade, and stitch or snap to your hardware spec. Unbranded OEM or private-label foil. Widths from 30 to 40 mm; length graded. Every piece is checked for empty flanks and neck sponginess before it leaves the workshop.",
    leather: "Buffalo belt crust, full chrome / semi / veg",
    leatherSlugs: ["buffalo-belt-crust"],
    moq: "500 pcs per colour / width",
    leadTime: "Sample 12–16 days · bulk 4–6 weeks",
    customization: ["Width & length grading", "Edge colour", "Buyer buckle or ours", "Foil / emboss logo", "Hang-tag & barcode"],
    applications: ["Fashion retail", "Private label", "Corporate gifting", "Uniform programmes"],
    image: "/images/goods-belts.jpg",
    featured: true,
    specs: [
      { label: "Substance", value: "3.2–3.4 mm+" },
      { label: "Cut", value: "100% table cutting" },
      { label: "Finish", value: "Edge-dyed, burnish optional" },
      { label: "Pack", value: "Individual sleeve + export carton" },
    ],
  },
  {
    slug: "vegetable-cow-belt",
    name: "Vegetable Cow Belt",
    category: "belts",
    short: "Full veg-tan cow, a warmer colour and a firmer handle for European goods desks.",
    description:
      "Chrome-free belt leather for buyers who cannot carry residual chrome. We mill veg-tan cow to 3.0–3.5 mm, cut from the bend, and finish the edge so it burnishes in wear. Colour is naturally warmer; we lock a lab dip before bulk. Suited to slow-fashion and REACH-minded programmes.",
    leather: "Cow vegetable / chrome-free crust",
    leatherSlugs: ["cow-vegetable-chrome-free"],
    moq: "400 pcs per colour",
    leadTime: "Sample 2–3 weeks · bulk 5–7 weeks",
    customization: ["Natural or dyed", "Brass or nickel-free buckle", "Emboss", "Gift box"],
    applications: ["EU retail", "Craft / heritage", "Corporate"],
    image: "/images/goods-belts.jpg",
    featured: true,
    specs: [
      { label: "Tannage", value: "Vegetable / chrome-free" },
      { label: "Substance", value: "3.0–3.5 mm" },
      { label: "Compliance", value: "REACH support, lab tests on request" },
      { label: "Hardware", value: "Brass, antique, nickel-free" },
    ],
  },
  {
    slug: "structured-nappa-handbag",
    name: "Structured Nappa Handbag",
    category: "bags",
    short: "Cow nappa body, tight grain, brass hardware — developed from your tech pack or ours.",
    description:
      "A buying-house handbag programme, not a catalogue mill. We place the shell in inspected cow nappa (or milled / veg-tan on request), source lining, zip and hardware to your RSL, and run a size set before bulk. Edge paint, stitching SPI and handle construction are written into the spec so the second lot matches the first. Private label only — we do not sell a house brand.",
    leather: "Cow nappa crust & finished",
    leatherSlugs: ["cow-nappa-finished", "cow-finished-specialties"],
    moq: "200 pcs per colour / style",
    leadTime: "Sample 3 weeks · bulk 6–8 weeks",
    customization: ["Tech-pack development", "Hardware finish", "Lining", "Emboss / foil", "Dust bag & cards"],
    applications: ["Fashion brands", "Department stores", "E-commerce private label"],
    image: "/images/goods-handbags.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "Cow nappa, 1.0–1.4 mm" },
      { label: "Construction", value: "Boarded / soft, SPI to spec" },
      { label: "Hardware", value: "Brass, gun-metal, custom" },
      { label: "QC", value: "AQL 2.5, piece inspection" },
    ],
  },
  {
    slug: "shopper-tote",
    name: "Shopper & Tote",
    category: "bags",
    short: "Unlined or lightly lined cow totes — volume styles for retail and corporate.",
    description:
      "A cleaner, higher-yield construction than a structured bag: whole-hide panels, reinforced handles, optional zip-top and inner pocket. We run these in milled cow, veg-tan and corrected grain depending on price architecture. Print, foil and woven labels sit on a locked placement drawing.",
    leather: "Cow milled / nappa / veg-tan",
    leatherSlugs: ["cow-full-chrome-crust", "cow-nappa-finished"],
    moq: "300 pcs per colour",
    leadTime: "Sample 2–3 weeks · bulk 5–7 weeks",
    customization: ["Size", "Handles", "Print / foil", "Inner pocket", "Gift wrap"],
    applications: ["Retail", "Corporate gifting", "Hospitality"],
    image: "/images/goods-handbags.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "1.2–1.6 mm cow" },
      { label: "Lining", value: "None / cotton / suede" },
      { label: "Handles", value: "Leather or webbing" },
      { label: "Pack", value: "Polybag + export carton" },
    ],
  },
  {
    slug: "wallet-cardholder-set",
    name: "Wallet & Cardholder Set",
    category: "slg",
    short: "Bifold, card sleeve, passport cover and key fob — goat or cow, stitched to a SPI.",
    description:
      "Small leather goods are where a mill’s grain and a workshop’s needle show. We cut goat for a fine break and cow for a fuller handle, skive pockets so the wallet is not a brick, and lock thread colour and edge paint. Sets can ship as an open-stock programme or a gift box with a brand card. Minimums are by SKU, not by mixed dump.",
    leather: "Goat nappa or cow lining / nappa",
    leatherSlugs: ["goat-crust-finished", "cow-lining", "cow-nappa-finished"],
    moq: "300 pcs per SKU / colour",
    leadTime: "Sample 10–14 days · bulk 4–6 weeks",
    customization: ["Bifold / trifold / zip", "Card count", "RFID optional", "Foil logo", "Gift box"],
    applications: ["Retail SLG", "Travel retail", "Corporate", "E-commerce"],
    image: "/images/goods-wallets.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "Goat 0.7–0.9 mm / cow 0.8–1.1 mm" },
      { label: "Stitch", value: "SPI locked on sample" },
      { label: "Edge", value: "Painted or burnished" },
      { label: "Pack", value: "Sleeve, box or kraft" },
    ],
  },
  {
    slug: "oxford-derby-footwear",
    name: "Oxford & Derby Footwear",
    category: "footwear",
    short: "Men’s dress and casual shoes from inspected cow and goat uppers, Goodyear or cemented.",
    description:
      "Bangladesh’s footwear cluster sits next to the leather. We source uppers from the same cow and goat lots we inspect, last to your size run, and make Goodyear-welted or cemented constructions depending on the brief. Incoming QC is the product: substance, shade and cutting yield are already known before the clicker starts. Samples on your last, or on ours for a first look.",
    leather: "Cow nappa / lining / goat upper",
    leatherSlugs: ["cow-nappa-finished", "cow-lining", "goat-crust-finished"],
    moq: "300 pairs per last / colour",
    leadTime: "Sample 3–4 weeks · bulk 8–10 weeks",
    customization: ["Last", "Construction", "Sole unit", "Lining", "Branded sock"],
    applications: ["Footwear brands", "Private label", "Uniform"],
    image: "/images/goods-footwear.jpg",
    featured: true,
    specs: [
      { label: "Construction", value: "Goodyear / cemented / Blake" },
      { label: "Sizes", value: "EU 39–46 grading" },
      { label: "Upper", value: "Cow or goat, to swatch" },
      { label: "QC", value: "AQL + pairing check" },
    ],
  },
  {
    slug: "cow-nappa-jacket",
    name: "Cow Nappa Jacket",
    category: "garments",
    short: "Soft nappa motorcycle and blouson styles, pattern-graded, lining and hardware to spec.",
    description:
      "Garment nappa has to mill without emptying. We select the same cow nappa we export as crust, then cut, sew and finish in a garment workshop that can hold a size set. Zip, snap and lining are RSL-aware. A fit sample precedes bulk; we do not skip that step to make a ship date look pretty.",
    leather: "Cow nappa, softy milled",
    leatherSlugs: ["cow-nappa-finished"],
    moq: "100 pcs per colour / style",
    leadTime: "Fit sample 4 weeks · bulk 8–12 weeks",
    customization: ["Block & grade", "Hardware", "Lining", "Patches / embroidery", "Hang-tag"],
    applications: ["Fashion", "Outerwear brands", "Corporate"],
    image: "/images/goods-jacket.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "Softy nappa 0.8–1.1 mm" },
      { label: "Sizes", value: "XS–XXL or to grade" },
      { label: "Lining", value: "Satin / cotton / quilt" },
      { label: "QC", value: "Measurement + stitch audit" },
    ],
  },
  {
    slug: "goat-dress-gloves",
    name: "Goat Dress Gloves",
    category: "gloves",
    short: "Fine-break goat, table-cut, for dress and driving — a 15–25% premium over cow for a reason.",
    description:
      "Goat’s tight follicle and natural water resistance are why gloving still prefers it. We cut from inspected goat crust, table-cut for yield, and sew a dress or driving pattern with a locked SPI. Colour to lab dip. Unlined, silk-lined or cashmere-lined on request. Selection is stricter than cow; we do not mix lots to fill a carton.",
    leather: "Goat crust & finished nappa",
    leatherSlugs: ["goat-crust-finished"],
    moq: "300 pairs per colour / size run",
    leadTime: "Sample 2 weeks · bulk 5–7 weeks",
    customization: ["Dress / driving", "Lining", "Snap or button", "Emboss", "Gift pouch"],
    applications: ["Menswear", "Heritage retail", "Gifting"],
    image: "/images/goods-gloves.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "Goat 0.5–0.7 mm" },
      { label: "Cut", value: "Table-cut" },
      { label: "Lining", value: "None / silk / cashmere" },
      { label: "Sizes", value: "7–11 or to chart" },
    ],
  },
  {
    slug: "industrial-work-gloves",
    name: "Industrial Work Gloves",
    category: "industrial",
    short: "Cow-split and grain work gloves for safety programmes — dense fibre, honest palms.",
    description:
      "Work gloves fail in the palm and the cuff, not in a lookbook. We cut cow split and grain from lots we already grade for fibre density, stitch a reinforced palm, and bind the cuff to a length you specify. EN and ANSI testing is arranged when the brief names a standard — we do not stamp a mark we cannot document.",
    leather: "Cow split suede & crust splits",
    leatherSlugs: ["cow-split-suede", "cow-wet-blue-splits"],
    moq: "1,000 pairs per style",
    leadTime: "Sample 10 days · bulk 4–6 weeks",
    customization: ["Palm patch", "Cuff length", "Logo stamp", "Size run", "Polybag mark"],
    applications: ["Safety", "Construction", "Workshop", "OEM tool brands"],
    image: "/images/goods-gloves.jpg",
    specs: [
      { label: "Leather", value: "Cow split / grain" },
      { label: "Palm", value: "Reinforced optional" },
      { label: "Testing", value: "EN / ANSI on request" },
      { label: "Pack", value: "Pair bag + carton" },
    ],
  },
  {
    slug: "travel-duffel",
    name: "Travel Duffel & Weekender",
    category: "travel",
    short: "Cowhide holdalls with brass hardware, reinforced base and a size that actually fits an overhead.",
    description:
      "A duffel is a cutting-yield problem as much as a design problem. We pattern for hide size, reinforce the base, and spec zips that survive an airport, not a photoshoot. Shoulder strap, shoe pocket and monogram plaque are options, not clutter. Runs in milled cow, pull-up and veg-tan.",
    leather: "Cow milled, oily or veg-tan",
    leatherSlugs: ["cow-finished-specialties", "cow-full-chrome-crust"],
    moq: "150 pcs per size / colour",
    leadTime: "Sample 3 weeks · bulk 6–8 weeks",
    customization: ["Volume (30–50 L)", "Hardware", "Strap", "Monogram", "Dust bag"],
    applications: ["Travel retail", "Fashion", "Corporate"],
    image: "/images/goods-travel.jpg",
    featured: true,
    specs: [
      { label: "Leather", value: "1.4–1.8 mm cow" },
      { label: "Hardware", value: "Brass / antique" },
      { label: "Base", value: "Reinforced, studs optional" },
      { label: "QC", value: "Zip cycle + strap pull" },
    ],
  },
];

export function madeProductBySlug(slug: string) {
  return madeProducts.find((p) => p.slug === slug);
}

export function featuredMadeProducts() {
  return madeProducts.filter((p) => p.featured);
}

export const goodsProcess = [
  {
    n: "01",
    title: "Brief",
    text: "Tech pack, or a sample we can reverse. Leather article, hardware RSL, volume and destination.",
  },
  {
    n: "02",
    title: "Sample",
    text: "Fit and colour sample from the same mill that will run bulk. Comments written on the spec, not in a chat.",
  },
  {
    n: "03",
    title: "Cut & make",
    text: "Partner workshop in Dhaka / Savar, using inspected leather. Production photos and a mid-line check.",
  },
  {
    n: "04",
    title: "Inspect",
    text: "AQL 2.5 as standard, tighter on request. Measurement, stitch, hardware, shade. Nothing ships we would not stamp.",
  },
  {
    n: "05",
    title: "Pack & ship",
    text: "Buyer marks, poly, carton, documents. FOB Chittagong or CIF your port — same paper trail as the hide business.",
  },
] as const;

export const goodsCapabilities = [
  {
    title: "Private label OEM / ODM",
    text: "Your brand, our floor. We develop from a tech pack or from a physical sample, then lock construction so repeat orders match.",
  },
  {
    title: "The leather is already inspected",
    text: "Goods are cut from the same cow, goat and buffalo lots we grade hide by hide. Substance and shade are not a surprise at the clicker.",
  },
  {
    title: "Hardware & RSL",
    text: "Zips, snaps, buckles and foils sourced to your restricted-substance list. We do not swap a cheaper fitting after the sample is signed.",
  },
  {
    title: "One counterpart",
    text: "Hides and made-up articles on the same file, the same inspectors, the same documents. You are not coordinating a tannery and a bag factory in two time zones.",
  },
] as const;

export const goodsFaqs = [
  {
    q: "Do you manufacture the goods yourselves?",
    a: "We are a buying house and inspecting agent. Finished goods are cut and sewn in partner workshops in Dhaka and around the Savar tannery estate, using leather we have already inspected. ABM owns the file: spec, sample, AQL and documents.",
  },
  {
    q: "What is a realistic minimum?",
    a: "Belts from 400–500 pieces per colour, wallets from 300, handbags from 200, footwear from 300 pairs, jackets from 100. Mixed-colour dumps to hit a number are not a programme — we quote by SKU.",
  },
  {
    q: "Can you work from our tech pack?",
    a: "Yes. A tech pack with measurements, SPI, hardware and a material list is the fastest path. A physical sample we can reverse is the next best. We will not guess a construction from a mood board.",
  },
  {
    q: "Do you hold a house brand?",
    a: "No. We make private-label and unbranded OEM. Your mark, or none.",
  },
  {
    q: "How do you inspect finished goods?",
    a: "AQL 2.5 as standard (tighter on request): measurements, stitch, hardware function, shade against the sealed sample, packing. Reports travel with the commercial set, the same way they do for hides.",
  },
  {
    q: "Can leather and goods ship together?",
    a: "Yes, when the timing matches. Many buyers book crust or finished leather on one PO and a goods sample or first bulk on another, with the same counterpart in Dhaka.",
  },
] as const;
