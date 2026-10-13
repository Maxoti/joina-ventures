"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  image: string;
  ink: string;
  count: number;
};

const PAGE_SIZE = 8;

export function ServiceList({ items }: { items: ServiceItem[] }) {
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLUListElement>(null);
  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  function goTo(next: number) {
    const target = Math.min(Math.max(next, 1), pageCount);
    setPage(target);

    // If the top of the list has scrolled out of view, bring it back.
    const list = listRef.current;
    if (list && list.getBoundingClientRect().top < 0) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      list.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  }

  return (
    <>
      <ul className="service-list" ref={listRef}>
        {items.map((c, i) => {
          const onThisPage = Math.floor(i / PAGE_SIZE) + 1 === page;
          return (
            // Every row stays in the HTML so search engines can follow all the
            // service links. Rows on other pages are simply hidden.
            <li key={c.slug} className={`service-row ink-${c.ink}`} hidden={!onThisPage}>
              <Link href={`/services/${c.slug}`}>
                <span className="swatch" aria-hidden="true" />
                {/* Decorative: the service name beside it already describes it. */}
                <Image
                  className="service-thumb"
                  src={c.image}
                  alt=""
                  width={120}
                  height={90}
                  sizes="120px"
                />
                <span className="service-name">{c.name}</span>
                <span className="service-short">{c.short}</span>
                <span className="service-count">
                  {c.count > 0
                    ? `${c.count} ${c.count === 1 ? "product" : "products"}`
                    : "Ask for a quote"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {pageCount > 1 && (
        <nav className="pager" aria-label="Services pages">
          <button
            type="button"
            className="pager-step"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          {Array.from({ length: pageCount }, (_, n) => n + 1).map((n) => (
            <button
              key={n}
              type="button"
              className="pager-num"
              onClick={() => goTo(n)}
              aria-label={`Page ${n}`}
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            className="pager-step"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount}
          >
            Next
          </button>

          <p className="visually-hidden" role="status">
            Page {page} of {pageCount}
          </p>
        </nav>
      )}
    </>
  );
}