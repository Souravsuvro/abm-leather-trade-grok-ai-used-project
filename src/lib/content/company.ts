export const company = {
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
    contact: "contact@abmleathertrade.com",
    careers: "abmtrc@gmail.com",
  },
  hours: "Saturday–Thursday, 10:00–20:00 (Dhaka). Friday closed.",
  office: {
    label: "Corporate office",
    lines: ["25/2, 2nd Floor, Zigatola", "Hazaribagh, Dhaka-1209", "Bangladesh"],
  },
  factory: {
    label: "Factory & inspection",
    lines: [
      "Plot XA1, BSCIC Chamra Shilpa Nagari",
      "Harindhara, Hemayetpur, Savar",
      "Dhaka-1340, Bangladesh",
    ],
  },
  ceo: {
    name: "Abdullah Al Mohan",
    title: "Founder & Managing Director",
    linkedin: "https://www.linkedin.com/in/mohankhan/",
    facebook: "https://www.facebook.com/mohan.khan.9400",
  },
  social: {
    linkedin: "https://bd.linkedin.com/company/abm-trading-corporation",
    instagram: "https://www.instagram.com/abm_trading_corporation/",
    youtube: "https://www.youtube.com/channel/UCmocnhxZOjGNjonUs7Pd1zA",
  },
  memberships: [
    "Dhaka Chamber of Commerce and Industry (DCCI) — General Member",
    "Bangladesh Tanners Association (BTA) — Member",
  ],
  stats: [
    { value: "32M", unit: "sq ft", label: "Annual capacity" },
    { value: "$10M", unit: "", label: "Turnover" },
    { value: "15", unit: "markets", label: "Regular export" },
    { value: "1980", unit: "", label: "Family in leather" },
  ],
  team: [
    { value: "10", label: "Quality inspectors" },
    { value: "4", label: "Leather technologists" },
    { value: "20", label: "People on staff" },
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
    "United States",
  ],
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/made-products", label: "Made Products" },
  { to: "/services", label: "Services" },
  { to: "/markets", label: "Markets" },
  { to: "/contact", label: "Contact" },
] as const;

export const moreNav = [
  { to: "/videos", label: "Videos" },
  { to: "/gallery", label: "Gallery" },
  { to: "/certifications", label: "Certifications" },
  { to: "/shipping", label: "Shipping" },
  { to: "/faq", label: "FAQ" },
  { to: "/testimonials", label: "Clients" },
  { to: "/careers", label: "Careers" },
] as const;
