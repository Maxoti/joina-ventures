import Image from "next/image";
import Link from "next/link";

function SendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 2.5 2.8 10.2c-.8.3-.8 1.4 0 1.7l5.3 2 2 5.3c.3.8 1.4.8 1.7 0L21.5 2.5Zm-4.9 4.9-7 6.4-2.4-.9 9.4-5.5Z" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 3.5 7v10L12 21.5 20.5 17V7L12 2.5Z" />
      <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero-v2">
      <Image
        className="hero-v2-bg"
        src="/hero_bg.png"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
      />

      <div className="container hero-v2-inner">
        <div className="hero-v2-copy">
          <h1>
            Your brand,
            <br />
            printed{" "}
            <span className="accent">
              properly.
              <svg className="swoosh" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 14 C 80 4, 200 2, 298 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="lede">T-shirts, banners, flags, mugs, awards and branded gifts.</p>
          <div className="hero-cta">
            <Link href="/quote" className="btn primary">
              <SendIcon /> Get a quote
            </Link>
            <Link href="/products" className="btn outline">
              <BoxIcon /> Explore products
            </Link>
          </div>
        </div>
      </div>

      <svg className="hero-v2-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 30 C 260 40, 520 150, 960 220 L0 220 Z" fill="#7ac70c" />
        <path d="M0 52 C 260 62, 520 160, 900 220 L0 220 Z" fill="#0b2a55" />
      </svg>
    </section>
  );
}