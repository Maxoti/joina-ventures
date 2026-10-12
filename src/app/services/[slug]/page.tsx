import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, productsIn } from "@/lib/catalog";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const base = pageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/services/${slug}`,
  });

  // Give shared links (WhatsApp, Facebook, X) a real preview image.
  const ogImage = { url: absoluteUrl(category.image), alt: category.imageAlt };
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [ogImage] },
    twitter: { ...base.twitter, images: [ogImage.url] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = productsIn(category.slug);
  const path = `/services/${category.slug}`;

  return (
    <div className="container page">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.name, path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: category.name,
          description: category.seoDescription,
          url: absoluteUrl(path),
          image: absoluteUrl(category.image),
          areaServed: "Kenya",
          provider: { "@id": absoluteUrl("/#business") },
        }}
      />
      {category.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span aria-current="page">{category.name}</span>
      </nav>

      <header className={`service-hero ink-${category.ink}`}>
        <div className="service-hero-copy">
          <h1>{category.name} in Nairobi</h1>
          <p className="lede">{category.intro}</p>
          <Link href={`/quote`} className="btn dark">
            Get a quote
          </Link>
        </div>
        <div className="service-hero-media">
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 540px"
          />
        </div>
      </header>

      <section className="section tight" aria-labelledby="best-h">
        <h2 id="best-h" className="section-title">
          Best for
        </h2>
        <ul className="chips">
          {category.bestFor.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="section tight" aria-labelledby="items-h">
        <h2 id="items-h" className="section-title">
          {category.name} products
        </h2>
        <div className="product-grid">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {category.faqs.length > 0 && (
        <section className="section tight" aria-labelledby="faq-h">
          <h2 id="faq-h" className="section-title">
            Common questions
          </h2>
          <div className="faq">
            {category.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="prose">
            Still unsure? Message {site.name} on WhatsApp and we will help you choose.
          </p>
        </section>
      )}
    </div>
  );
}