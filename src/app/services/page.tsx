import Link from "next/link";
import { categories, productsIn } from "@/lib/catalog";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Printing and branding services in Nairobi",
  description:
    "DTF, sublimation, UV, large format, flag printing, laser engraving and heat transfer in Nairobi. See what each method is best for and request a quote.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="container page">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <h1>Printing and branding services</h1>
      <p className="lede">Different jobs need different methods. Here is what each one does best.</p>
      <ul className="service-list">
        {categories.map((c) => (
          <li key={c.slug} className={`service-row ink-${c.ink}`}>
            <Link href={`/services/${c.slug}`}>
              <span className="swatch" aria-hidden="true" />
              <span className="service-name">{c.name}</span>
              <span className="service-short">{c.short}</span>
              <span className="service-count">{productsIn(c.slug).length} products</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
