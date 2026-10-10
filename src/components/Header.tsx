import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Mark } from "./Mark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Mark />
          <span>Joina</span>
        </Link>
        <nav aria-label="Main" className="nav-desktop">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/quote" className="btn primary header-cta">
            Get a quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
