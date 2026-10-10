import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { getCategory, getProduct, products, relatedProducts } from "@/lib/catalog";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name} in Nairobi, Kenya`,
    description: `${product.blurb} Request a quote from ${site.name} in Nairobi.`,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug)!;
  const path = `/products/${product.slug}`;
  const related = relatedProducts(product);

  const productLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.blurb,
    category: category.name,
    url: absoluteUrl(path),
    brand: { "@type": "Brand", name: site.name },
  };
  if (product.image) productLd.image = absoluteUrl(product.image);
  if (product.from) {
    productLd.offers = {
      "@type": "Offer",
      priceCurrency: "KES",
      price: product.from,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
      seller: { "@type": "Organization", name: site.legalName },
    };
  }

  return (
    <div className="container page">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path },
        ])}
      />
      <JsonLd data={productLd} />

      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span aria-current="page">{product.name}</span>
      </nav>

      <div className="product-detail">
        <ProductVisual product={product} priority />
        <div>
          <h1>{product.name}</h1>
          <p className="lede">{product.blurb}</p>
          <p className="prose">
            Made with {category.name.toLowerCase()}. {category.short}
          </p>
          <p className="price big">
            {product.from ? `From KSh ${product.from.toLocaleString("en-KE")}` : "Quote on request"}
          </p>
          <div className="hero-cta">
            <Link href={`/quote?product=${product.slug}`} className="btn wa">
              Get a quote
            </Link>
            <Link href={`/services/${category.slug}`} className="btn ghost">
              About {category.name.toLowerCase()}
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section tight" aria-labelledby="related-h">
          <h2 id="related-h" className="section-title">
            More {category.name.toLowerCase()}
          </h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
