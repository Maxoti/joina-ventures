import Link from "next/link";
import { categories } from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Mark />
            <span>Joina</span>
          </Link>
          <p className="footer-note">{site.tagline}. Tell us what you need and we will send a quote.</p>
        </div>
        <nav aria-label="Services">
          <h2 className="footer-title">Services</h2>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/services/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>
              <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink("Hello, I need to know more about:")}>Message on WhatsApp</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address.location}, {site.address.city}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} {site.legalName}</p>
        <p>
          <Link href="/quote">Request a quote</Link>
        </p>
      </div>
    </footer>
  );
}
