/**
 * Single source of truth for business details.
 * Replace every value marked CHANGE ME before launch.
 */
export const site = {
  name: "Joina Ventures",
  legalName: "Joina Ventures Ltd",
  // Vercel is set to redirect the root domain to www, so www is canonical.
  url: "https://www.joinaventuresltd.co.ke",
  tagline: "Custom printing and branding in Nairobi",
  description:
    "T-shirts, banners, flags, mugs, awards and branded gifts. Tell us what you need and get a quote on WhatsApp.",
  phoneDisplay: "+254 720 158 262", // CHANGE ME
  phoneIntl: "+254720158262", // CHANGE ME
  whatsapp: "254720158262", // CHANGE ME (digits only, with country code)
  email: "joinaventures254@gmail.com", // CHANGE ME
  hours: "Mon to Fri, 8:00am to 6:00pm", // CHANGE ME
  address: {
    location: "Afya Business Plaza,2nd Floor,office 208", // CHANGE ME
    city: "Nairobi",
    region: "Nairobi County",
    country: "KENYA",
  },
  social: [] as string[], // CHANGE ME: full profile URLs for the sameAs schema
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
