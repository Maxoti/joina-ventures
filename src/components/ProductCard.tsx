import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-link">
        <ProductVisual product={product} />
        <h3>{product.name}</h3>
      </Link>
      <p className="product-blurb">{product.blurb}</p>
      <div className="product-actions">
        {product.from ? <span className="price">From KSh {product.from.toLocaleString("en-KE")}</span> : <span className="price muted">Quote on request</span>}
        <Link className="btn wa small" href={`/quote?product=${product.slug}`}>
          Get a quote
        </Link>
      </div>
    </article>
  );
}
