import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page narrow">
      <h1>We could not find that page</h1>
      <p className="lede">It may have moved. Try the products list or ask us on WhatsApp.</p>
      <Link href="/products" className="btn primary">
        Browse products
      </Link>
    </div>
  );
}
