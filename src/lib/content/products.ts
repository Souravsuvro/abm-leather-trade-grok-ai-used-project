export type Species = "cow" | "goat" | "buffalo" | "sheep";
export type Stage = "wet-blue" | "crust" | "finished";
export type Tannage = "full-chrome" | "semi-chrome" | "vegetable" | "chrome-free";

export type Product = {
  slug: string;
  name: string;
  species: Species;
  stage: Stage;
  tannage: Tannage[];
  short: string;
  description: string;
  thickness: string;
  selection: string;
  finishes: string[];
  applications: string[];
  image: string;
  featured?: boolean;
  specs: { label: string; value: string }[];
};

export const speciesLabel: Record<Species, string> = {
  cow: "Cow",
  goat: "Goat",
  buffalo: "Buffalo",
  sheep: "Sheep",
};

export const stageLabel: Record<Stage, string> = {
  "wet-blue": "Wet blue",
  crust: "Crust",
  finished: "Finished",
};

export const tannageLabel: Record<Tannage, string> = {
  "full-chrome": "Full chrome",
  "semi-chrome": "Semi chrome",
  vegetable: "Vegetable",
  "chrome-free": "Chrome-free",
};

export const products: Product[] = [
  {
    slug: "cow-full-chrome-crust",
    name: "Cow Full Chrome Crust",
    species: "cow",
    stage: "crust",
    tannage: ["full-chrome"],
    short: "The workhorse article for footwear and leather goods. Even substance, clean grain, ready for your finishing line.",
    description:
      "Full chrome cow crust is the backbone of our programme. We select from Savar-estate tanneries for substance consistency, grain tightness and milling behaviour, then inspect hide by hide before packing. Offered as lining, nappa, milled and 100% chrome-free companion lots when a buyer needs a mixed container.",
    thickness: "0.8–2.2 mm, to order",
    selection: "TR / A / B / AB, as contracted",
    finishes: ["Lining", "Nappa", "Milled", "Nubuck crust"],
    applications: ["Footwear uppers", "Bags & small leather goods", "Linings", "Belts"],
    image: "/images/cow-crust.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Tannage", value: "Full chrome" },
      { label: "Form", value: "Crust, whole hide / side" },
      { label: "MOQ", value: "By article; sample lots available" },
    ],
  },
  {
    slug: "cow-semi-chrome-crust",
    name: "Cow Semi Chrome Crust",
    species: "cow",
    stage: "crust",
    tannage: ["semi-chrome"],
    short: "Chrome plus vegetable retan for a firmer, more filled handle — belts, straps and structured goods.",
    description:
      "Semi chrome cow crust balances chrome’s speed and softness with vegetable retannage for fill and cutting yield. Buyers use it where a full veg programme is too slow and a pure chrome lot is too empty. We grade for belly fill, neck wrinkles and dye affinity so finishing does not surprise you.",
    thickness: "1.2–2.8 mm",
    selection: "A / AB, table-cut lots on request",
    finishes: ["Milled", "Burnish crust", "Strap"],
    applications: ["Belts", "Straps", "Structured bags", "Saddlery components"],
    image: "/images/cow-crust.jpg",
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Tannage", value: "Semi chrome" },
      { label: "Handle", value: "Filled, cutting-friendly" },
      { label: "MOQ", value: "By article" },
    ],
  },
  {
    slug: "cow-vegetable-chrome-free",
    name: "Cow Vegetable & Chrome-Free Crust",
    species: "cow",
    stage: "crust",
    tannage: ["vegetable", "chrome-free"],
    short: "Ecological crust for buyers who need REACH-minded, chrome-free or full veg programmes.",
    description:
      "Vegetable and chrome-free cow crust for European and Japanese programmes that cannot carry residual chrome. We work with tanneries that can document process chemistry and support third-party testing. Colour is naturally warmer; we advise on dye recipes so the finished shade lands where your lab expects.",
    thickness: "1.0–3.0 mm",
    selection: "As contracted; tighter selections for goods",
    finishes: ["Full veg tan", "Chrome-free crust", "Natural"],
    applications: ["Goods", "Belt leather", "Orthopaedic", "Craft"],
    image: "/images/veg-tan.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Tannage", value: "Vegetable / chrome-free" },
      { label: "Compliance", value: "REACH support, lab tests on request" },
      { label: "Lead time", value: "Typically 3–6 weeks" },
    ],
  },
  {
    slug: "cow-wet-blue-splits",
    name: "Cow Wet Blue Splits",
    species: "cow",
    stage: "wet-blue",
    tannage: ["full-chrome", "semi-chrome"],
    short: "Single and double butt splits in calibrated substance — the input many Asian finishing plants run every week.",
    description:
      "Cow wet blue splits in full chrome and semi chrome, packed for export from Hemayetpur. We measure substance lot by lot and separate single butt from double butt so your splitting and shaving plan is honest. Regular business into China and Vietnam. Finished leather from these splits becomes suede, lining and corrected-grain uppers.",
    thickness: "1.0–1.3 mm+",
    selection: "5 / 7 / 10 / 12 sq ft and up",
    finishes: ["Full chrome", "Semi chrome"],
    applications: ["Suede", "Lining", "Corrected grain", "Upholstery splits"],
    image: "/images/wet-blue.jpg",
    featured: true,
    specs: [
      { label: "12 sq ft+", value: "Double butt, 1.3 mm+" },
      { label: "10 sq ft+", value: "Double butt, 1.3 mm+" },
      { label: "7 sq ft+", value: "Double butt 1.2 mm+ / single butt 1.3 mm+" },
      { label: "5 sq ft+", value: "Double butt 1.0 mm+ / single butt 1.2 mm+" },
    ],
  },
  {
    slug: "cow-split-suede",
    name: "Cow Split Suede & Crust Splits",
    species: "cow",
    stage: "crust",
    tannage: ["full-chrome"],
    short: "Even nap, export suede and crust splits for footwear, garments and upholstery.",
    description:
      "Cow splits in crust and suede with a dense, even nap. We reject lots with coarse fibre, greasiness or patchy buffing. Thickness and colour can be developed against a buyer’s standard. Suitable for sneakers, lining, garments and contract upholstery.",
    thickness: "0.9–1.6 mm",
    selection: "By size assortment",
    finishes: ["Suede", "Crust split"],
    applications: ["Footwear", "Garments", "Upholstery", "Accessories"],
    image: "/images/suede.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Form", value: "Split crust / suede" },
      { label: "Nap", value: "Fine, even buff" },
      { label: "Colour", value: "To swatch" },
    ],
  },
  {
    slug: "cow-nappa-finished",
    name: "Cow Nappa Crust & Finished",
    species: "cow",
    stage: "finished",
    tannage: ["full-chrome"],
    short: "Soft, supple nappa with a clean touch — bags, footwear and garments.",
    description:
      "Cow nappa in crust and finished form. We develop milling, fatliquor and top coat so the handle stays plump without becoming loose. Aniline and semi-aniline versions keep grain visible; pigmented versions lock colour for high-abuse footwear.",
    thickness: "0.8–1.6 mm",
    selection: "Goods / footwear grades",
    finishes: ["Nappa", "Softy milled", "Aniline", "Semi-aniline"],
    applications: ["Handbags", "Footwear", "Garments", "Small leather goods"],
    image: "/images/aniline.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Handle", value: "Soft, full" },
      { label: "Finish", value: "Aniline to pigmented" },
      { label: "Lead time", value: "Finished: ex-stock or 2–4 weeks" },
    ],
  },
  {
    slug: "cow-lining",
    name: "Cow Lining Leather",
    species: "cow",
    stage: "crust",
    tannage: ["full-chrome"],
    short: "Thin, even lining crust and finished lining for footwear interiors.",
    description:
      "Full chrome cow lining with consistent substance and a clean flesh. We inspect for pipes, veins and dye streaks that show through a sock lining. Available in crust for your own finishing or finished to a lab dip.",
    thickness: "0.6–1.0 mm",
    selection: "Lining grade",
    finishes: ["Full chrome lining", "Finished lining"],
    applications: ["Footwear linings", "Insoles", "Sock linings"],
    image: "/images/cow-crust.jpg",
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Tannage", value: "Full chrome" },
      { label: "Form", value: "Crust or finished" },
      { label: "Colour", value: "To swatch" },
    ],
  },
  {
    slug: "cow-finished-specialties",
    name: "Finished Cow — Aniline, Wax, Oil, Emboss",
    species: "cow",
    stage: "finished",
    tannage: ["full-chrome", "semi-chrome"],
    short: "Aniline, semi-aniline, oily, waxy, burnish, glazed, milled and embossed finishes developed to sample.",
    description:
      "Finished cow leather for buyers who want a ready article, not a crust to interpret. We run aniline and semi-aniline for natural-looking goods; oily and waxy pull-up for boots and bags; burnish and glazed for dress footwear; milled and embossed for fashion. Custom colour and print development with mill trials before bulk.",
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
      "Semi-aniline",
    ],
    applications: ["Footwear", "Bags", "Upholstery", "Automotive trim"],
    image: "/images/aniline.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Development", value: "Lab dip + mill trial" },
      { label: "Stock", value: "Selected articles ex-warehouse" },
      { label: "Custom", value: "2–3 weeks extra for new finish" },
    ],
  },
  {
    slug: "goat-crust-finished",
    name: "Goat Crust & Finished",
    species: "goat",
    stage: "crust",
    tannage: ["full-chrome", "semi-chrome", "vegetable"],
    short: "Tight grain, fine break, a 15–25% premium over cow for gloves, linings and luxury small goods.",
    description:
      "Goat crust in lining, full chrome, semi chrome and full veg tan. Goat’s tight follicle pattern and natural water resistance suit gloves, lining, shoes and small leather goods that need a fine break. We also finish goat nappa to buyer shade. Selection is stricter than cow; we do not mix lots to fill a container.",
    thickness: "0.5–1.2 mm",
    selection: "Gloving / lining / upper",
    finishes: ["Lining", "Full chrome", "Semi chrome", "Full veg tan", "Nappa"],
    applications: ["Gloves", "Linings", "Luxury SLG", "Footwear"],
    image: "/images/goat-nappa.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Character", value: "Fine grain, tight break" },
      { label: "Tannage", value: "Chrome, semi, veg" },
      { label: "MOQ", value: "Discuss by article" },
    ],
  },
  {
    slug: "buffalo-belt-crust",
    name: "Buffalo Belt & Industrial Crust",
    species: "buffalo",
    stage: "crust",
    tannage: ["full-chrome", "semi-chrome", "vegetable"],
    short: "Dense 3.2–3.4 mm table-cut buffalo for belts and heavy industrial use.",
    description:
      "Buffalo crust for belt factories that need thickness without empty flanks. We offer table-cutting programmes (including 3.2–3.4 mm+ lots for Chinese belt plants) and industrial substances for straps and safety articles. Fibre is compact; we reject spongy necks.",
    thickness: "2.0–3.4 mm+",
    selection: "Table cut for belts",
    finishes: ["Belt crust", "Industrial", "Veg / chrome"],
    applications: ["Belts", "Straps", "Industrial", "Safety"],
    image: "/images/buffalo-belt.jpg",
    featured: true,
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Belt substance", value: "3.2–3.4 mm+" },
      { label: "Cut", value: "100% table cutting available" },
      { label: "Markets", value: "China, Turkey, Spain, Italy" },
    ],
  },
  {
    slug: "sheep-articles",
    name: "Sheep Skin Articles",
    species: "sheep",
    stage: "crust",
    tannage: ["full-chrome"],
    short: "Soft sheep for garments, gloves and lining — sourced to order.",
    description:
      "Sheep articles are developed against a buyer brief rather than held as a standing stock programme. Typical uses: garment nappa, gloving and lining. Tell us substance, tannage and end use; we will source and inspect from partner tanneries.",
    thickness: "0.4–0.9 mm",
    selection: "To brief",
    finishes: ["Garment", "Gloving", "Lining"],
    applications: ["Garments", "Gloves", "Linings"],
    image: "/images/goat-nappa.jpg",
    specs: [
      { label: "Origin", value: "Bangladesh" },
      { label: "Programme", value: "To-order" },
      { label: "Lead time", value: "Quoted per brief" },
      { label: "Samples", value: "Yes" },
    ],
  },
];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}
