import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["/", "/services", "/products", "/quote", "/about", "/contact"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
  const cats = categories.map((c) => ({
    url: absoluteUrl(`/services/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const prods = products.map((p) => ({
    url: absoluteUrl(`/products/${p.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...fixed, ...cats, ...prods];
}
