import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About us",
  description: `${site.legalName} is a printing and branding business in Nairobi, Kenya. Learn how we work and how to order.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container page narrow">
      <h1>About {site.name}</h1>
      {/* CHANGE ME: replace this copy with Joina's real story, team and equipment. */}
      <p className="lede">
        {site.legalName} helps businesses, schools, campaigns and individuals in Nairobi put their name on things people use and see.
      </p>
      <p className="prose">
        We print on fabric, glass, metal, wood and vinyl, and we engrave, press and finish items in the quantities you need, from a single gift to a full campaign order.
      </p>
      <p className="prose">
        You tell us what you need, we confirm the price and show you a proof, and we make it. If you do not have artwork yet, we can design it.
      </p>
      <Link href="/quote" className="btn primary">
        Get a quote
      </Link>
    </div>
  );
}
