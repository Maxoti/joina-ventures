import Image from "next/image";
import Link from "next/link";
import { HeroMotion } from "@/components/HeroMotion";
import { ProductCard } from "@/components/ProductCard";
import { categories, featuredSlugs, getProduct, productsIn, type Product } from "@/lib/catalog";
import { JsonLd, localBusinessLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  path: "/",
});

const steps = [
  { title: "Tell us what you need", text: "Pick a product, add your quantity and deadline, and send it on WhatsApp." },
  { title: "Approve your proof", text: "We confirm the price and show you how the print will look before we start." },
  { title: "We print it", text: "Your order is produced and checked against the approved proof." },
  { title: "Collect or deliver", text: "Pick up your order or have it delivered to you." },
];

export default function HomePage() {
  const featured = featuredSlugs.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <>
      <JsonLd data={localBusinessLd()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: absoluteUrl("/"),
        }}
      />

      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-copy">
              <h1>Your brand, printed properly.</h1>
              <p className="lede">
                T-shirts, banners, flags, mugs, awards and branded gifts. Tell us what you need and we will send a quote on WhatsApp.
              </p>
              <div className="hero-cta">
                <Link href="/quote" className="btn primary">
                  Get a quote
                </Link>
                <Link href="/products" className="btn ghost">
                  Browse products
                </Link>
              </div>
            </div>
            <HeroMotion />
          </div>

          <Image
            className="hero-image"
            src="/joina-showcase.png"
            alt="Joina Ventures services: design for logos and branding, high quality printing on banners and t-shirts, and branded merchandise such as bags, caps, mugs and notebooks"
            width={2262}
            height={1272}
            quality={90}
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
        </div>
      </section>

      <section className="section" aria-labelledby="services-h">
        <div className="container">
          <h2 id="services-h" className="section-title">
            What we print and make
          </h2>
          <ul className="service-list">
            {categories.map((c) => (
              <li key={c.slug} className={`service-row ink-${c.ink}`}>
                <Link href={`/services/${c.slug}`}>
                  <span className="swatch" aria-hidden="true" />
                  {/* Decorative: the service name beside it already describes the row. */}
                  <Image
                    className="service-thumb"
                    src={c.image}
                    alt=""
                    width={120}
                    height={90}
                    sizes="120px"
                  />
                  <span className="service-name">{c.name}</span>
                  <span className="service-short">{c.short}</span>
                  <span className="service-count">{productsIn(c.slug).length} products</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt" aria-labelledby="popular-h">
        <div className="container">
          <div className="section-head">
            <h2 id="popular-h" className="section-title">
              Popular products
            </h2>
            <Link href="/products" className="text-link">
              See all products
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="campaign-h">
        <div className="container band-grid">
          <div>
            <h2 id="campaign-h">Campaign and event merchandise</h2>
            <p>
              Planning a campaign, rally or launch? Order matching t-shirts, reflector jackets, hoodies, caps, pens, flags and banners from one place, in one colour scheme.
            </p>
          </div>
          <Link href="/quote" className="btn primary">
            Request a bulk quote
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="design-h">
        <div className="container split">
          <div>
            <h2 id="design-h" className="section-title">
              No artwork? We will design it.
            </h2>
            <p className="prose">
              Flyers, business cards, brochures, logos for print and event graphics. Share your idea, your logo or even a sketch and we will turn it into something ready to print.
            </p>
            <Link href="/quote" className="btn dark">
              Ask for design help
            </Link>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}