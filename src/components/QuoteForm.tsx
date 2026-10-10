"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";

interface Option {
  slug: string;
  name: string;
}

export function QuoteForm({ options, initial }: { options: Option[]; initial?: string }) {
  const [sent, setSent] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const item = options.find((o) => o.slug === get("item"))?.name ?? get("item");

    const lines = [
      `Hello ${site.name}, I would like a quote.`,
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Item: ${item}`,
      get("quantity") && `Quantity: ${get("quantity")}`,
      get("deadline") && `Needed by: ${get("deadline")}`,
      `Artwork: ${get("artwork") === "yes" ? "I have artwork" : "I need design help"}`,
      get("details") && `Details: ${get("details")}`,
    ].filter(Boolean) as string[];

    const url = whatsappLink(lines.join("\n"));
    setSent(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </label>
      </div>

      <label>
        What do you need?
        <select name="item" defaultValue={initial ?? ""} required>
          <option value="" disabled>
            Choose a product
          </option>
          {options.map((o) => (
            <option key={o.slug} value={o.slug}>
              {o.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>

      <div className="field-row">
        <label>
          Quantity
          <input name="quantity" type="text" inputMode="numeric" placeholder="For example 50" />
        </label>
        <label>
          Needed by
          <input name="deadline" type="date" />
        </label>
      </div>

      <fieldset>
        <legend>Artwork</legend>
        <label className="inline">
          <input type="radio" name="artwork" value="yes" defaultChecked /> I have artwork
        </label>
        <label className="inline">
          <input type="radio" name="artwork" value="no" /> I need design help
        </label>
      </fieldset>

      <label>
        Details
        <textarea name="details" rows={4} placeholder="Sizes, colours, text to print, where it will be used" />
      </label>

      <button type="submit" className="btn wa">
        Send on WhatsApp
      </button>
      <p className="form-note">
        This opens WhatsApp with your request filled in. You can attach your artwork there.
        {sent && (
          <>
            {" "}
            Nothing opened?{" "}
            <a href={sent} target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
