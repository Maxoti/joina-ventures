import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function pageMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: { title: opts.title, description: opts.description, url, type: "website", siteName: site.name, locale: "en_KE" },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: site.legalName,
    url: site.url,
    description: site.description,
    telephone: site.phoneIntl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.location,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: "Kenya",
    sameAs: site.social,
  };
}
