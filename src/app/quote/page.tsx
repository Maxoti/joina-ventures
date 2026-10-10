import { QuoteForm } from "@/components/QuoteForm";
import { products } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a quote",
  description: "Tell us what you need printed or branded and send your request on WhatsApp. We will reply with a quote.",
  path: "/quote",
});

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product } = await searchParams;
  const options = products.map((p) => ({ slug: p.slug, name: p.name }));
  const initial = options.some((o) => o.slug === product) ? product : undefined;

  return (
    <div className="container page narrow">
      <h1>Request a quote</h1>
      <p className="lede">Fill this in and it opens WhatsApp with your request ready to send.</p>
      <QuoteForm options={options} initial={initial} />
    </div>
  );
}
