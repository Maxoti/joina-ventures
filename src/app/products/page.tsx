import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { categories, productsIn } from "@/lib/catalog";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products: custom printed and branded items",
  description:
    "Browse custom t-shirts, hoodies, caps, banners, flags, mugs, glassware, awards and engraved gifts. Request a quote on any item.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="container page">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <h1>Products</h1>
      <p className="lede">Pick an item to see details, or jump straight to a category.</p>
      <ul className="chips jump">
        {categories.map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`}>{c.name}</a>
          </li>
        ))}
      </ul>

      {categories.map((c) => (
        <section key={c.slug} id={c.slug} className="section tight" aria-labelledby={`${c.slug}-h`}>
          <div className="section-head">
            <h2 id={`${c.slug}-h`} className="section-title">
              {c.name}
            </h2>
            <Link href={`/services/${c.slug}`} className="text-link">
              About this service
            </Link>
          </div>
          <div className="product-grid">
            {productsIn(c.slug).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
