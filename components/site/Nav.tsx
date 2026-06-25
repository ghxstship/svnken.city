"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";

const LINKS: [string, string][] = [
  ["/experience", "The Voyage"],
  ["/manifest", "The Manifest"],
  ["/gallery", "Gallery"],
  ["/venue", "The Harbor"],
  ["/faq", "Logbook"],
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header>
      <div className="site-nav">
        <Link href="/" className="sc-wordmark" style={{ fontSize: "19px", color: "var(--bone-100)", textDecoration: "none" }} onClick={() => setOpen(false)}>
          SVNKENCITY
        </Link>

        <nav className="hide-mobile" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link" data-active={isActive(href)}>
              {label}
            </Link>
          ))}
          <ButtonLink href="/tickets" size="sm">
            Tickets
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--line-strong)",
            borderRadius: "var(--radius-sm)",
            color: "var(--brass-400)",
            padding: "8px 12px",
            cursor: "pointer",
            fontFamily: "var(--font-label)",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
          className="mobile-toggle"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link" data-active={isActive(href)} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/tickets" className="nav-link" data-active={isActive("/tickets")} onClick={() => setOpen(false)}>
            Tickets →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .mobile-toggle { display: inline-block !important; }
        }
      `}</style>
    </header>
  );
}
