import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact us",
  description: `Call, email or message ${site.name} on WhatsApp. Find our address and opening hours in Nairobi.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container page narrow">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <h1>Contact us</h1>
      <dl className="contact-list">
        <div>
          <dt>WhatsApp</dt>
          <dd>
            <a href={whatsappLink("Hello, I need to know more about:")} target="_blank" rel="noopener noreferrer">
              Start a chat
            </a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a>
          </dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </dd>
        </div>
        <div>
          <dt>Visit</dt>
          <dd>
            {site.address.location}, {site.address.city}
          </dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>{site.hours}</dd>
        </div>
      </dl>
    </div>
  );
}
