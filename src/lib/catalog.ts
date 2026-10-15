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
    image: "/dtf.png",
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
    short: "Sharp, durable prints straight onto bottles, glass, pens, phone cases and gifts.",
    intro:
      "UV printing cures ink with ultraviolet light as it is printed, so you get crisp colour and a durable finish directly on the item. There is no sticker layer, which makes it ideal for rigid promotional items and premium corporate gifts.",
    bestFor: ["Corporate gifts", "Water bottles and glassware", "Phone cases and keychains", "Promotional pens"],
    seoTitle: "UV printing services in Nairobi, Kenya",
    seoDescription:
      "UV printing on water bottles, glasses, phone cases, pens, keychains and golf balls in Nairobi. Sharp, durable branding. Request a quote.",
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
  {
    slug: "graphic-design",
    name: "Graphic design",
    ink: "yellow",
    image: "/vibrant-graphic-design-studio-workspace.png",
    imageAlt: "Graphic design studio workspace at Joina Ventures",
    short: "Logos, branding and print-ready artwork, from a rough idea to a finished file.",
    intro:
      "Good print starts with good artwork. Our design service turns a rough idea, a sketch or an old logo into clean, print-ready files, so what you approve on screen is what comes off the machine.",
    bestFor: ["New business logos", "Brand refreshes", "Event and campaign artwork", "Fixing low-quality logos for print"],
    seoTitle: "Graphic design and logo design in Nairobi, Kenya",
    seoDescription:
      "Logo design, branding and print-ready artwork in Nairobi. Share your idea on WhatsApp and get a design quote from Joina Ventures.",
    faqs: [
      { q: "Can you redraw my old logo?", a: "Yes. Send what you have, even a photo, and we can rebuild it as a clean file for printing." },
      { q: "Do I get the design files?", a: "Ask when you request the quote and we will confirm what is included." },
    ],
  },
  {
    slug: "digital-printing",
    name: "Digital printing",
    ink: "cyan",
    image: "/digital-printing-services.png",
    imageAlt: "Digital printing services at Joina Ventures",
    short: "Fast, sharp prints for flyers, brochures, cards and short-run stationery.",
    intro:
      "Digital printing is the quick route for short and mid-sized runs. There is no plate setup, so flyers, brochures, cards and stationery can be turned around fast with consistent colour.",
    bestFor: ["Flyers and leaflets", "Business cards", "Brochures and menus", "Short-run stationery"],
    seoTitle: "Digital printing in Nairobi, Kenya",
    seoDescription:
      "Digital printing of flyers, brochures, business cards and stationery in Nairobi. Fast turnaround on short runs. Request a quote.",
    faqs: [
      { q: "Is digital printing good for small quantities?", a: "Yes. It suits short runs without the setup cost of offset printing." },
      { q: "What file should I send?", a: "A print-ready PDF is best. If you only have an idea, we can design it for you." },
    ],
  },
  {
    slug: "offset-printing",
    name: "Offset printing",
    ink: "magenta",
    image: "/modern-offset-lithography-pressroom.png",
    imageAlt: "Offset lithography press room",
    short: "Large print runs of brochures, books, calendars and stationery at a lower unit cost.",
    intro:
      "Offset printing uses plates and a press to deliver consistent, high-quality results on large runs. The more you print, the lower the cost per piece, which makes it the sensible choice for bulk jobs.",
    bestFor: ["Large brochure runs", "Calendars and diaries", "Receipt and invoice books", "Books and booklets"],
    seoTitle: "Offset printing in Nairobi, Kenya",
    seoDescription:
      "Offset printing for brochures, calendars, books and stationery in bulk in Nairobi. Lower cost per piece on large runs. Request a quote.",
    faqs: [
      { q: "When should I choose offset over digital?", a: "For large quantities. Offset costs more to set up but is cheaper per piece as numbers grow." },
    ],
  },
  {
    slug: "screen-printing",
    name: "Screen printing",
    ink: "yellow",
    image: "/screen-printing-workshop.png",
    imageAlt: "Screen printing workshop at Joina Ventures",
    short: "Bold, hard-wearing prints on t-shirts and bags, best for bigger batches.",
    intro:
      "Screen printing pushes ink through a mesh stencil to give bold, durable colour. It works best for simple designs in a few colours on larger batches of garments and bags.",
    bestFor: ["Bulk t-shirt orders", "Uniforms", "Tote bags", "Simple one to three colour logos"],
    seoTitle: "Screen printing in Nairobi, Kenya",
    seoDescription:
      "Screen printing on t-shirts, uniforms and bags in Nairobi. Bold, durable prints for bulk orders. Send your design and request a quote.",
    faqs: [
      { q: "Is screen printing good for photos?", a: "Not usually. Photos and gradients suit DTF or sublimation better. Screen printing shines on simple logos." },
    ],
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    ink: "cyan",
    image: "/summit-outdoor-gear-embroidery-machine.png",
    imageAlt: "Embroidery machine stitching a logo",
    short: "Stitched logos on polos, caps, jackets and uniforms for a premium finish.",
    intro:
      "Embroidery stitches your logo into the fabric, giving a raised, premium look that lasts. It is a favourite for corporate polos, caps, jackets and uniforms.",
    bestFor: ["Corporate polo shirts", "Caps", "Jackets and uniforms", "School and security wear"],
    seoTitle: "Embroidery services in Nairobi, Kenya",
    seoDescription:
      "Logo embroidery on polo shirts, caps, jackets and uniforms in Nairobi. A durable, premium finish. Request a quote.",
    faqs: [
      { q: "Can any logo be embroidered?", a: "Most can, but very fine detail may need simplifying. We will advise when you send the artwork." },
      { q: "Can you embroider items I supply?", a: "Often yes. Send a photo of the item so we can confirm." },
    ],
  },
  {
    slug: "vinyl-stickers",
    name: "Vinyl stickers",
    ink: "magenta",
    image: "/vibrant-vinyl-sticker-printing-workshop.png",
    imageAlt: "Vinyl sticker printing workshop",
    short: "Custom die-cut and print-and-cut stickers for branding, packaging and vehicles.",
    intro:
      "Printed vinyl stickers are cut to shape and ready to stick. They suit product labels, packaging, laptops, windows and vehicles, in any size and quantity.",
    bestFor: ["Product labels", "Packaging", "Vehicle branding", "Giveaway stickers"],
    seoTitle: "Custom vinyl stickers in Nairobi, Kenya",
    seoDescription:
      "Custom vinyl stickers, die-cut and print-and-cut, for labels, packaging and vehicles in Nairobi. Request a quote.",
    faqs: [
      { q: "Can stickers be cut to any shape?", a: "Yes. Send your design and we will cut around it." },
    ],
  },
  {
    slug: "uv-dtf-stickers",
    name: "UV DTF stickers",
    ink: "yellow",
    image: "/uv-dtf-sticker-printing-studio.png",
    imageAlt: "UV DTF sticker printing studio",
    short: "Hard-wearing transfer stickers that press onto glass, metal, plastic and more.",
    intro:
      "UV DTF prints a durable, glossy transfer that you peel and stick onto rigid items. It gives a printed look on surfaces such as bottles, glass, metal and plastic without needing a printer for each item.",
    bestFor: ["Bottles and tumblers", "Glass and acrylic", "Metal and plastic items", "Branding items you supply"],
    seoTitle: "UV DTF stickers in Nairobi, Kenya",
    seoDescription:
      "UV DTF transfer stickers for bottles, glass, metal and plastic in Nairobi. Durable, glossy branding. Request a quote.",
    faqs: [
      { q: "How is UV DTF different from vinyl stickers?", a: "UV DTF transfers are thin, tough and glossy, and sit like a print on the item rather than a visible sticker." },
    ],
  },
  {
    slug: "uv-rotary-printing",
    name: "UV rotary printing",
    ink: "cyan",
    image: "/vibrant-uv-rotary-printing-showcase.png",
    imageAlt: "UV rotary printing on round items",
    short: "Wrap-around prints directly on round items such as bottles, tumblers and cups.",
    intro:
      "A rotary UV printer turns the item as it prints, so artwork wraps cleanly around cylindrical and tapered objects. It is the neat way to brand bottles, tumblers and cups.",
    bestFor: ["Water bottles", "Tumblers and mugs", "Cups and cylinders", "Corporate drinkware"],
    seoTitle: "UV rotary printing in Nairobi, Kenya",
    seoDescription:
      "UV rotary printing on bottles, tumblers and cups in Nairobi. Seamless wrap-around prints. Request a quote.",
    faqs: [
      { q: "Can you print all the way round?", a: "Yes, rotary printing is designed for wrap-around artwork on round items." },
    ],
  },
  {
    slug: "doming",
    name: "Doming",
    ink: "magenta",
    image: "/sprite-doming-services-workshop.png",
    imageAlt: "Doming services workshop",
    short: "Glossy, raised resin domes over stickers and badges for a premium 3D look.",
    intro:
      "Doming adds a clear, raised resin layer over a printed sticker or badge. The result is glossy, protected and eye-catching, ideal for logos on products, electronics and promotional items.",
    bestFor: ["Product logo badges", "Premium stickers", "Key tags", "Branding on devices and gear"],
    seoTitle: "Doming and resin stickers in Nairobi, Kenya",
    seoDescription:
      "Doming and resin dome stickers and badges in Nairobi. A glossy, durable 3D finish for your logo. Request a quote.",
    faqs: [
      { q: "What does doming protect against?", a: "The clear layer protects the print from scratches and everyday wear." },
    ],
  },
  {
    slug: "cnc-engraving",
    name: "CNC engraving",
    ink: "yellow",
    image: "/precision-cnc-engraving-in-action.png",
    imageAlt: "CNC engraving machine at work",
    short: "Precise cutting and carving in wood, acrylic and other sheet materials.",
    intro:
      "CNC engraving cuts and carves materials with a machine-controlled tool. It handles signage, name plates, wooden lettering and decorative panels where laser engraving is not the right fit.",
    bestFor: ["Signage", "Wooden and acrylic lettering", "Name plates", "Decorative panels"],
    seoTitle: "CNC engraving and cutting in Nairobi, Kenya",
    seoDescription:
      "CNC engraving and cutting on wood, acrylic and sheet materials for signage and name plates in Nairobi. Request a quote.",
    faqs: [
      { q: "When is CNC better than laser engraving?", a: "For deeper carving, cutting out shapes and thicker materials. Tell us the job and we will recommend one." },
    ],
  },
  {
    slug: "id-card-printing",
    name: "ID card printing",
    ink: "cyan",
    image: "/professional-id-card-printing-workspace.png",
    imageAlt: "ID card printing workspace",
    short: "Durable PVC ID cards with photos and details, plus lanyards and holders.",
    intro:
      "Professional PVC ID cards for staff, students and members. We print your design with photos and details, and can supply lanyards and card holders to go with them.",
    bestFor: ["Staff ID cards", "Student and member cards", "Event passes", "Lanyards and holders"],
    seoTitle: "ID card printing in Nairobi, Kenya",
    seoDescription:
      "PVC ID card printing for staff, students and events in Nairobi, with lanyards and holders. Request a quote.",
    faqs: [
      { q: "How do I send the details for many cards?", a: "Send a spreadsheet of names and details with photos, and we will confirm before printing." },
    ],
  },
  {
    slug: "asset-tagging",
    name: "Asset tagging",
    ink: "magenta",
    image: "/professional-asset-tagging-workspace.png",
    imageAlt: "Asset tag and label printing workspace",
    short: "Numbered asset tags and barcode or QR labels to track equipment.",
    intro:
      "Durable asset tags and labels let you track equipment across offices, schools and sites. We can print serial numbers, barcodes and QR codes on tough, long-lasting material.",
    bestFor: ["Office equipment", "Schools and hospitals", "Warehouses", "Barcode and QR labels"],
    seoTitle: "Asset tagging and labels in Nairobi, Kenya",
    seoDescription:
      "Numbered asset tags and barcode or QR labels for equipment tracking in Nairobi. Durable and tamper-resistant options. Request a quote.",
    faqs: [
      { q: "Can tags be numbered in sequence?", a: "Yes. Send the starting number and quantity, and add your logo if you like." },
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
    ["Golf ball UV printing", "Logo golf balls for tournaments and corporate days."],
    ["Phone case UV printing", "Custom phone cases with sharp, full-colour prints."],
    ["Pen UV printing", "Branded promotional pens for events and offices."],
    ["Keychain UV printing", "Durable printed keychains for gifts and giveaways."],
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
  ],
  "laser-engraving": [
    ["Trophy laser engraving", "Names, dates and logos on trophies."],
    ["Pen laser engraving", "Engraved pens for gifts and corporate branding."],
    ["Notebook laser engraving", "Personalised notebook covers."],
    ["Diary laser engraving", "Engraved diaries for staff and clients."],
    ["Leather laser engraving", "Fine detail on wallets, belts and leather items."],
    ["Wristband laser engraving", "Engraved wristbands for events and campaigns."],
  ],
  "heat-transfer-printing": [
    ["Heat-pressed mugs", "Full-colour mugs for one-off gifts and short runs."],
    ["Heat-pressed apparel", "Quick custom apparel for small orders."],
    ["Heat-pressed bottles", "Custom bottles for staff and events."],
  ],
  "graphic-design": [
    ["Logo design", "A clean, memorable logo ready for print and screen."],
    ["Brand identity design", "Logo, colours and layouts that keep your brand consistent."],
    ["Print-ready artwork setup", "We prepare your artwork so it prints correctly first time."],
  ],
  "digital-printing": [
    ["Flyers and leaflets", "Sharp full-colour flyers for promotions and events."],
    ["Brochures", "Folded and stapled brochures for products and services."],
    ["Business cards", "Professional cards on quality stock."],
  ],
  "offset-printing": [
    ["Offset printed brochures", "Large brochure runs at a lower cost per piece."],
    ["Calendars", "Wall and desk calendars printed in bulk."],
    ["Receipt and invoice books", "Numbered, carbonless books for your business."],
  ],
    "screen-printing": [
    ["Screen printed t-shirts", "Bold, hard-wearing logo prints for bulk orders."],
    ["Screen printed tote bags", "Simple branded totes in larger batches."],
    ["Screen printed jackets", "Branded jackets for teams, staff and events."],
  ],

  "embroidery": [
    ["Embroidered polo shirts", "Stitched logos on corporate polos."],
    ["Embroidered caps", "Neat embroidered branding on caps."],
    ["Embroidered uniforms", "Staff, school and security uniforms with stitched logos."],
  ],
  "vinyl-stickers": [
    ["Custom vinyl stickers", "Printed stickers in any shape and size."],
    ["Die-cut vinyl stickers", "Stickers cut precisely around your design."],
  ],
  "uv-dtf-stickers": [
    ["UV DTF transfer stickers", "Tough, glossy transfers for rigid surfaces."],
    ["UV DTF stickers for bottles and glass", "Durable branding for drinkware and glass items."],
    ["UV DTF logo stickers", "Small glossy logo transfers for products and packaging."],
  ],
  "uv-rotary-printing": [
    ["Rotary UV printing on bottles", "Wrap-around prints on water bottles."],
    ["Rotary UV printing on tumblers", "Full-colour branding on tumblers and cups."],
  ],
  "doming": [
    ["Doming stickers", "Clear raised resin over printed stickers."],
    ["Domed logo badges", "Premium 3D logo badges for products and gear."],
  ],
  "cnc-engraving": [
    ["CNC wood engraving", "Carved lettering and designs in wood."],
    ["CNC acrylic engraving", "Precise cutting and engraving on acrylic."],
    ["CNC signage and name plates", "Custom signs and name plates for offices and homes."],
  ],
  "id-card-printing": [
    ["PVC ID cards", "Durable ID cards with photos and details."],
    ["Lanyards and card holders", "Lanyards and holders to go with your ID cards."],
  ],
  "asset-tagging": [
    ["Asset tags", "Numbered tags to track your equipment."],
    ["Barcode and QR labels", "Scannable labels printed on durable material."],
  ],
};

/**
 * Product-level image overrides, keyed by product slug.
 * Anything not listed here falls back to its category image.
 */
const productImages: Record<string, string> = {
  // UV printing
  "water-bottle-uv-printing":  "/vibrant-uv-printed-water-bottles.png",
  "glass-uv-printing":         "/vibrant-uv-rotary-printing-showcase.png",
  "golf-ball-uv-printing":     "/custom-uv-printed-golf-balls-on-the-green.png",
  "phone-case-uv-printing":    "/vibrant-uv-printed-phone-cases.png",
  "pen-uv-printing":           "/vibrant-uv-printed-promotional-pens.png",
  "keychain-uv-printing":      "/vibrant-uv-printed-keychains-showcase.png",

  // ID cards
  "pvc-id-cards":              "/brightpath-staff-id-badge-mockup.png",

   // Laser engraving
  "trophy-laser-engraving":    "/precision-cnc-engraving-in-action.png",
  "pen-laser-engraving":       "/pen-laser-engraving.png",
  "notebook-laser-engraving":  "/notebook-laser-engraving.png",
  "leather-laser-engraving":   "/leather-laser-engraving.png",
  "wristband-laser-engraving": "/wristband-laser-engraving.png",

  // DTF printing
  "hoodie-dtf-printing":           "/Hoodie_dtf.png",
  "cap-dtf-printing":              "/cap_dtf.png",
  "jute-bag-dtf-printing":         "/Jute_dtf.png",
  "t-shirt-dtf-printing":          "/Tshirt.png",
  "tote-bag-dtf-printing":         "/Totebag.png",
  "reflector-jacket-dtf-printing": "/Reflector_dtf.png",

  // Sublimation
  "mug-sublimation":              "/coke_mug.png",
  "t-shirt-sublimation":          "/Coke_T-Shirt.png",
  "reflector-jacket-sublimation": "/kenha_jacket.png",

     // Flags
    "teardrop-flags":        "/smart_teardropflag.png",
    "custom-flags":          "/kenyan_flag.png",
    "pin-banner-flags":      "/pin-banner-flags.png",
    "telescopic-stand-flags": "/telescopic-stand-flags.png",
    "tension-banner-flags":  "/tension-banner-flags.png",
    "s-stand-banner-flags":  "/s-stand-banner-flags.png",

  // Large format
  "gazebo-tent-printing":        "/coca-cola-promotional-gazebo-showcase.png",
  "adjustable-backdrop-banners": "/creativeprints-adjustable-banner-display.png",
  "roll-up-banners":             "/nexora-roll-up-banner-in-modern-office.png",
  "x-stand-banners":             "/x-banner.png",
  "door-frame-stand-banners":    "/modern-kensure-solutions-lobby-banner.png",
  "l-banner-stands":             "/skyline-properties-lobby-banner.png",
  "window-graphics":             "/technova-modern-storefront-wrap.png",

  // Custom 3D t-shirts
  "custom-3d-sublimation-t-shirts": "/custom-sublimation-t-shirt.png",
  "biker-club-t-shirts":            "/biker-club-t-shirt.png",
  "mandarin-collar-t-shirts":       "/custom-chinese-collar-dragon-tee-mockup.png",
  "cycling-jerseys":                "/dynamic-cycling-jersey-mockup-views-1.png",
  "staff-t-shirts":                 "/custom-blue-team-vision-jersey-mockup.png",

      // Heat transfer
    "heat-pressed-mugs":    "/heat-pressed-mugs.png",
    "heat-pressed-apparel": "/heat-pressed-apparel.png",
    "heat-pressed-bottles": "/heat-pressed-bottles.png",
        // Graphic design
    "logo-design":                "/logo-design.png",
    "brand-identity-design":      "/brand-identity-design.png",
    "print-ready-artwork-setup":  "/print-ready-artwork-setup.jpg",

        // Digital printing
    "flyers-and-leaflets": "/flyers-and-leaflets.png",
    "brochures":           "/brochures.png",
    "business-cards":      "/business-cards.png",
 
    // Offset printing
  "offset-printed-brochures":   "/professional-offset-printing-brochure-display.png",
  "calendars":                  "/greenprint-january-2025-desk-calendar.png",
  "receipt-and-invoice-books":  "/professional-invoice-book-stationery.png",

  //screen printing
  "campaign-t-shirts":        "/bright-yellow-joina-ventures-t-shirt.png",
  "screen-printed-tote-bags": "/eco-brand-canvas-tote-display.png",
"screen-printed-jackets":   "/blue-jv-branded-jacket-mockup.png",

  // Embroidery
  "embroidered-polo-shirts": "/white-polo-with-jv-joina-embroidery.png",
  "embroidered-caps":        "/kensington-agro-solutions-cap.png",
  "embroidered-uniforms":    "/blue-embroidered-academic-crest.png",
    // Vinyl stickers
  "custom-vinyl-stickers":  "/glossy-custom-sticker-collection.png",
  "die-cut-vinyl-stickers": "/brightprint-solutions-sticker.png",

  // UV DTF stickers
  "uv-dtf-transfer-stickers":              "/greenlife-organic-sticker-jar-mockup.png",
  "uv-dtf-stickers-for-bottles-and-glass": "/pure-water-uv-dtf-bottle-sticker-mockup.png",
  "uv-dtf-logo-stickers":                  "/sunlit-green-leaves-sticker.png",

    // UV rotary printing
  "rotary-uv-printing-on-bottles":  "/pure-water-bottle-design.png",
  "rotary-uv-printing-on-tumblers": "/summit-outdoors-tumbler-mockup.png",
  


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