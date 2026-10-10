import Image from "next/image";
import { getCategory, type Product } from "@/lib/catalog";

/**
 * Shows the product photo when `image` is set, otherwise a colour-coded
 * placeholder tile (halftone dots in the category's ink colour).
 */
export function ProductVisual({ product, priority = false }: { product: Product; priority?: boolean }) {
  const category = getCategory(product.categorySlug);
  const ink = category?.ink ?? "cyan";

  if (product.image) {
    return (
      <div className="pv pv-photo">
        <Image
          src={product.image}
          alt={`${product.name} by Joina Ventures`}
          fill
          sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 280px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`pv ink-${ink}`} role="img" aria-label={`${product.name} (photo coming soon)`} />
  );
}
