# Joina Ventures website

Next.js (App Router) + TypeScript. Statically generated, SEO-ready, quotes go to WhatsApp.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (needs internet for Google Fonts)
```

## Before launch: replace these

1. `src/lib/site.ts` — phone, WhatsApp number, email, address, hours (every line marked `CHANGE ME`).
2. `src/app/about/page.tsx` — write Joina's real story.
3. Product photos — put files in `public/products/` and set `image: "/products/name.webp"` on a product in `src/lib/catalog.ts`. Until then each product shows a colour-coded placeholder tile.
4. Prices — set `from: 450` on any product to show "From KSh 450". Leave it out to show "Quote on request".

## Where things live

- `src/lib/catalog.ts` — all categories and products. Add a product by adding a line to `rawProducts`; pages, sitemap and schema update automatically.
- `src/lib/site.ts` — business details and `whatsappLink()`.
- `src/app/globals.css` — colour tokens at the top (`--cyan`, `--magenta`, `--yellow`, `--ink`).

## SEO built in

- Unique title, description and canonical URL on every page (www is canonical, matching the Vercel redirect).
- JSON-LD: LocalBusiness and WebSite (home), Service + FAQPage (service pages), Product + BreadcrumbList (product pages).
- `sitemap.xml` and `robots.txt` generated from the catalogue (67 URLs).
- Server-rendered HTML, one `h1` per page, semantic headings, breadcrumbs, `lang="en-KE"`.

After deploying: verify the domain in Google Search Console (DNS TXT record), submit `https://www.joinaventuresltd.co.ke/sitemap.xml`, and add real photos with descriptive alt text.

## Next steps (phase 2)

- Save quote requests to a database (Postgres + Prisma) and notify by email, instead of only opening WhatsApp.
- Admin dashboard to manage products, prices and quote status.
- M-Pesa (Daraja STK Push) checkout for fixed-price items.
