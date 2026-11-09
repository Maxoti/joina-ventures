import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/catalog";
import { site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { NavDesktop } from "./NavDesktop";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: categories.map((c) => ({ href: `/services/${c.slug}`, label: c.name })),
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products", label: "All products" },
      ...categories.map((c) => ({ href: `/services/${c.slug}#products`, label: c.name })),
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 2.5 2.8 10.2c-.8.3-.8 1.4 0 1.7l5.3 2 2 5.3c.3.8 1.4.8 1.7 0L21.5 2.5Zm-4.9 4.9-7 6.4-2.4-.9 9.4-5.5Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt={site.legalName} width={900} height={249} priority className="brand-logo" />
        </Link>
        <NavDesktop items={navItems} />
        <div className="header-actions">
          <Link href="/quote" className="btn primary header-cta">
            <SendIcon /> Get a quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}