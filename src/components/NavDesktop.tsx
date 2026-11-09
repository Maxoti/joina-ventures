"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };
type NavEntry = Item & { children?: Item[] };

function Chevron() {
  return (
    <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function NavDesktop({ items }: { items: NavEntry[] }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <nav aria-label="Main" className="nav-desktop">
      {items.map((item) => (
        <div key={item.href} className="nav-item">
          <Link href={item.href} className="nav-link" aria-current={isActive(item.href) ? "page" : undefined}>
            {item.label}
            {item.children ? <Chevron /> : null}
          </Link>
          {item.children ? (
            <div className="dropdown">
              {item.children.map((c) => (
                <Link key={c.href} href={c.href}>
                  {c.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}