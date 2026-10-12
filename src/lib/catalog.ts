export type Ink = "cyan" | "magenta" | "yellow";

export interface Faq {
  q: string;
  a: string;
}

export interface Category {
  slug: string;
  name: string;
  ink: Ink;
  /** Path in /public used for the category hero, list thumbnails and product fallbacks. */
  image: string;
  /** Alt text for the category image. */
  imageAlt: string;
  /** One line used in lists. */
  short: string;
  /** Opening paragraph on the category page. */
  intro: string;
  bestFor: string[];
  seoTitle: string;
  seoDescription: string;
  faqs: Faq[];
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  blurb: string;
  /** Optional starting price in KSh. Leave undefined to show "Request a quote". */
  from?: number;
  /**
   * Optional path in /public, e.g. "/vibrant-uv-rotary-printing-showcase.png".
   * When unset, the product falls back to its category image.
   */
  image?: string;
}

export const categories: Category[] = [
  {
    slug: "dtf-printing",
    name: "No-cut DTF printing",
    ink: "cyan",
    image: "/no-cut-dtf.png",
    imageAlt: "No-cut DTF printing at the Joina Ventures workshop",
    short: "Full-colour designs on garments and bags, with no cutting or weeding.",
    intro:
      "Direct-to-film (DTF) printing puts full-colour artwork on a film that is heat-pressed straight onto fabric. There is no cutting or weeding, so fine detail, gradients and photos come out clean on cotton, blends and many bags and caps.",
    bestFor: ["Campaign and event t-shirts", "Hoodies and caps", "Tote and jute bags", "Small repeat orders"],
    seoTitle: "No-cut DTF printing in Nairobi, Kenya",
    seoDescription:
      "Full-colour no-cut DTF printing on t-shirts, hoodies, caps, reflector jackets and bags in Nairobi. Send your design and request a quote on WhatsApp.",
    faqs: [
      { q: "What is DTF printing?", a: "Your design is printed onto a special film and heat-pressed onto the garment. It handles many colours and fine detail without cutting or weeding." },
      { q: "Can I order just a few pieces?", a: "Yes. There is a small-batch option for people who need only a few prints. Ask for a quote with your quantity." },
      { q: "Do I need to bring my own artwork?", a: "Artwork is best, but if you only have an idea or a rough logo we can design it for you." },
    ],
  },
  {
    slug: "sublimation-printing",
    name: "Sublimation printing",
    ink: "magenta",
    image: "/sublimation.png",
    imageAlt: "Sublimation printing at the Joina Ventures workshop",
    short: "Dye that bonds with polyester and coated surfaces, so it never cracks or peels.",
    intro:
      "Sublimation turns your design into dye that bonds with polyester fabric and specially coated items. The print becomes part of the surface, which means photo-quality colour that does not crack, peel or fade in the wash.",
    bestFor: ["Mugs and mousepads", "Sports and team wear", "Reflector jackets", "Fabric printed by the metre"],
    seoTitle: "Sublimation printing in Nairobi, Kenya",
    seoDescription:
      "Sublimation printing on mugs, mousepads, t-shirts, reflector jackets and fabric by the metre in Nairobi. Durable, full-colour results. Request a quote.",
    faqs: [
      { q: "Which fabrics work with sublimation?", a: "Polyester and polyester-rich fabrics give the best colour. Cotton is better suited to DTF printing." },
      { q: "Will the print fade after washing?", a: "Sublimated colour is inside the surface rather than on top, so it holds up well to washing." },
    ],
  },
  {
    slug: "custom-3d-t-shirts",
    name: "Teamwear and 3D t-shirts",
    ink: "yellow",
    image: "/joina-ventures-3d-print-studio.png",
    imageAlt: "3D all-over t-shirt printing at the Joina Ventures studio",
    short: "All-over printed t-shirts and jerseys for staff, clubs and campaigns.",
    intro:
      "All-over sublimated t-shirts let your design run across the whole garment: front, back and sleeves. They suit clubs, companies, riders, cyclists and campaign teams who want to be recognised from a distance.",
    bestFor: ["Staff uniforms", "Biker and cycling clubs", "Campaign teams", "Sports teams"],
    seoTitle: "Custom 3D t-shirts and teamwear in Nairobi, Kenya",
    seoDescription:
      "All-over printed 3D t-shirts, cycling jerseys, staff shirts and long sleeves made to order in Nairobi. Send your design and get a quote.",
    faqs: [
      { q: "How do I give sizes for a group order?", a: "Send a list with names or numbers and sizes in your quote request. We will confirm the total before printing." },
      { q: "Can each shirt have a different name or number?", a: "Usually yes. Mention it when you request the quote." },
    ],
  },
  {
    slug: "uv-printing",
    name: "UV printing",
    ink: "cyan",
    image: "/uv-printing.png",
    imageAlt: "UV printing at the Joina Ventures workshop",
    short: "Sharp, durable prints straight onto bottles, glass, pens, diaries and gifts.",
    intro:
      "UV printing cures ink with ultraviolet light as it is printed, so you get crisp colour and a durable finish directly on the item. There is no sticker layer, which makes it ideal for rigid promotional items and premium corporate gifts.",
    bestFor: ["Corporate gifts", "Water bottles and glassware", "Diaries and USB flash disks", "Awards"],
    seoTitle: "UV printing services in Nairobi, Kenya",
    seoDescription:
      "UV printing on water bottles, glasses, glass awards, diaries, golf balls and USB flash disks in Nairobi. Sharp, durable branding. Request a quote.",
    faqs: [
      { q: "What can be UV printed?", a: "Most rigid items: bottles, glass, acrylic, metal, wood and many plastics. Send a photo of the item if you are unsure." },
      { q: "Is there a minimum order?", a: "Many UV items can be done in small numbers. Tell us your quantity and we will quote." },
    ],
  },
  {
    slug: "large-format-printing",
    name: "Large format printing",
    ink: "magenta",
    image: "/large-format.png",
    imageAlt: "Large format banner printing at the Joina Ventures workshop",
    short: "Banners, backdrops, tents, window graphics and print-and-cut stickers.",
    intro:
      "Large format printing covers everything from roll-up and X-stand banners to event backdrops, branded gazebo tents and window graphics. It is built for exhibitions, storefronts and events where you need to be seen from far away.",
    bestFor: ["Exhibitions and trade shows", "Shop fronts", "Events and launches", "Branded tents"],
    seoTitle: "Large format printing and banners in Nairobi, Kenya",
    seoDescription:
      "Roll-up banners, X-stand banners, backdrops, gazebo tents and window graphics printed in Nairobi. Get a quote for your event or storefront.",
    faqs: [
      { q: "Do the banner prices include the stand?", a: "Ask when you request the quote. We can quote for print only or for print with the stand." },
      { q: "What file format should I send?", a: "A high-resolution PDF is best. If you only have a logo, we can set up the layout for you." },
    ],
  },
  {
    slug: "flag-printing",
    name: "Flag printing",
    ink: "yellow",
    image: "/kenyan-flag-printing-workshop.png",
    imageAlt: "Flag printing at the Joina Ventures workshop",
    short: "Teardrop, pin, telescopic and tension flags that catch attention outdoors.",
    intro:
      "Flags and flag banners work hard outdoors and at events. Choose a style and size, send your artwork and we will print and finish it ready to mount on its stand.",
    bestFor: ["Outdoor promotions", "Events and rallies", "Dealerships and showrooms", "Schools and sports days"],
    seoTitle: "Flag printing in Nairobi, Kenya",
    seoDescription:
      "Teardrop flags, pin banners, telescopic flags, tension banners and custom flags printed in Nairobi. Request a quote for your brand or event.",
    faqs: [
      { q: "Which flag style is best for wind?", a: "Teardrop and telescopic flags handle outdoor conditions well. Ask us to recommend one for your location." },
    ],
  },
  {
    slug: "laser-engraving",
    name: "Laser engraving",
    ink: "cyan",
    image: "/lasereng.png",
    imageAlt: "Laser engraving at the Joina Ventures workshop",
    short: "Permanent, precise marks on wood, leather, acrylic, metal and glass.",
    intro:
      "Laser engraving etches a design into the material itself, so it lasts far longer than a printed finish. It gives a premium, personal feel to trophies, pens, notebooks, leather goods and key holders.",
    bestFor: ["Corporate and wedding gifts", "Trophies and awards", "Door tags and signage", "Pens and notebooks"],
    seoTitle: "Laser engraving services in Nairobi, Kenya",
    seoDescription:
      "Laser engraving on trophies, pens, notebooks, leather, wristbands, key holders and door tags in Nairobi. Request a quote today.",
    faqs: [
      { q: "Can you engrave my own items?", a: "Often yes. Send a photo and the material so we can confirm it engraves well." },
    ],
  },
  {
    slug: "heat-transfer-printing",
    name: "Heat transfer printing",
    ink: "magenta",
    image: "/heat-transfer.png",
    imageAlt: "Heat transfer printing at the Joina Ventures workshop",
    short: "A fast way to put full-colour designs on mugs, apparel and bottles.",
    intro:
      "Heat transfer printing uses heat and pressure to bond a design to the item. It is quick and reliable for small and mid-sized custom orders, and a good fit when you need a one-off gift or a short run.",
    bestFor: ["One-off gifts", "Short runs", "Mugs and bottles", "Quick turnaround jobs"],
    seoTitle: "Heat transfer printing in Nairobi, Kenya",
    seoDescription:
      "Heat transfer printing on mugs, apparel and bottles in Nairobi. Fast, full-colour results for small and mid-sized orders. Request a quote.",
    faqs: [
      { q: "How fast can a small order be ready?", a: "It depends on the item and quantity. Tell us your deadline when you request the quote." },
    ],
  },
];

const rawProducts: Record<string, [name: string, blurb: string][]> = {
  "dtf-printing": [
    ["DTF printing by the sheet", "Full-colour no-cut prints to apply to your own garments or items."],
    ["Small-batch DTF printing", "A low-minimum option for a handful of prints."],
    ["T-shirt DTF printing", "Your logo or artwork pressed onto t-shirts in full colour."],
    ["Hoodie DTF printing", "Branding for hoodies, from team names to full-colour graphics."],
    ["Reflector jacket DTF printing", "Clear, bright branding on high-visibility jackets."],
    ["Cap DTF printing", "Logos and slogans on caps for events and campaigns."],
    ["Tote bag DTF printing", "Full-colour designs on cotton tote bags."],
    ["Jute bag DTF printing", "Eco-friendly jute bags with your brand on them."],
  ],
  "sublimation-printing": [
    ["Sublimation printing per metre", "Printed polyester fabric sold by the metre."],
    ["T-shirt sublimation", "Durable all-colour prints on polyester t-shirts."],
    ["Reflector jacket sublimation", "Branded high-visibility jackets for teams and sites."],
    ["Mug sublimation", "Custom mugs for gifts, staff and events."],
    ["Mousepad sublimation", "Printed mousepads for offices and giveaways."],
  ],
  "custom-3d-t-shirts": [
    ["Custom 3D sublimation t-shirts", "All-over printed t-shirts made to your design."],
    ["Staff t-shirts", "Matching shirts so your team looks consistent."],
    ["Mandarin collar t-shirts", "A smarter collar for staff and hospitality teams."],
    ["Long sleeve t-shirts", "All-over printed long sleeves for clubs and teams."],
    ["Biker club t-shirts", "Durable shirts for riding groups and clubs."],
    ["Cycling jerseys", "Custom jerseys for cyclists and cycling clubs."],
    ["Campaign t-shirts", "Bold shirts for campaign teams and supporters."],
  ],
  "uv-printing": [
    ["Water bottle UV printing", "Branded bottles that people keep and use."],
    ["Glass UV printing", "Drinking glasses with a sharp, lasting print."],
    ["Glass award UV printing", "Full-colour detail on glass awards and plaques."],
    ["Diary UV printing", "Corporate diaries with your logo on the cover."],
    ["USB flash disk UV printing", "Branded flash disks for presentations and gifts."],
    ["Golf ball UV printing", "Logo golf balls for tournaments and corporate days."],
  ],
  "large-format-printing": [
    ["Roll-up banners", "Portable banners that set up in seconds."],
    ["X-stand banners", "Lightweight, low-cost banners for events and shops."],
    ["L banner stands", "Stable banner stands for counters and reception areas."],
    ["Door frame stand banners", "Tall banners on a frame, good for entrances."],
    ["Adjustable backdrop banners", "Event and photo backdrops that adjust to size."],
    ["Gazebo tent printing", "Branded tents for markets, events and activations."],
    ["Window graphics", "Printed graphics for shop windows and glass."],
    ["Custom wheel covers", "Branded spare wheel covers for vehicles."],
  ],
  "flag-printing": [
    ["Custom flags", "Printed flags in the size and finish you need."],
    ["Teardrop flags", "Eye-catching flags that move well in the wind."],
    ["Pin banner flags", "Slim promotional flags for outdoor use."],
    ["Telescopic stand flags", "Adjustable-height flags on a stand."],
    ["Tension banner flags", "Flat tension banners for clean, bold graphics."],
    ["S-stand banner flags", "Flags on an S-shaped stand for events."],
    ["Pop-up stand flags", "Folding flag displays for quick setup."],
    ["Lantern banner flags", "Distinctive lantern-style banners for outdoor branding."],
  ],
  "laser-engraving": [
    ["Trophy laser engraving", "Names, dates and logos on trophies."],
    ["Pen laser engraving", "Engraved pens for gifts and corporate branding."],
    ["Notebook laser engraving", "Personalised notebook covers."],
    ["Diary laser engraving", "Engraved diaries for staff and clients."],
    ["Leather laser engraving", "Fine detail on wallets, belts and leather items."],
    ["Key holder laser engraving", "Engraved key holders for gifts and events."],
    ["Door tag laser engraving", "Room and door tags for hotels and offices."],
    ["Wristband laser engraving", "Engraved wristbands for events and campaigns."],
  ],
  "heat-transfer-printing": [
    ["Heat-pressed mugs", "Full-colour mugs for one-off gifts and short runs."],
    ["Heat-pressed apparel", "Quick custom apparel for small orders."],
    ["Heat-pressed bottles", "Custom bottles for staff and events."],
  ],
};

/**
 * Product-level image overrides, keyed by product slug.
 * Anything not listed here falls back to its category image.
 */
const productImages: Record<string, string> = {
  "water-bottle-uv-printing": "/vibrant-uv-rotary-printing-showcase.png",
  "glass-uv-printing": "/vibrant-uv-rotary-printing-showcase.png",
  "trophy-laser-engraving": "/precision-cnc-engraving-in-action.png",
  "leather-laser-engraving": "/precision-cnc-engraving-in-action.png",
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = Object.entries(rawProducts).flatMap(([categorySlug, items]) =>
  items.map(([name, blurb]) => {
    const slug = slugify(name);
    return { slug, name, categorySlug, blurb, image: productImages[slug] };
  }),
);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsIn = (categorySlug: string) => products.filter((p) => p.categorySlug === categorySlug);

export function relatedProducts(product: Product, limit = 4): Product[] {
  return productsIn(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, limit);
}

/** A short, mixed selection used on the home page. */
export const featuredSlugs = [
  "t-shirt-dtf-printing",
  "mug-sublimation",
  "roll-up-banners",
  "teardrop-flags",
  "water-bottle-uv-printing",
  "trophy-laser-engraving",
  "custom-3d-sublimation-t-shirts",
  "gazebo-tent-printing",
];