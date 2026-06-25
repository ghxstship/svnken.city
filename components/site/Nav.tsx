"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { CartButton } from "@/components/shop/CartButton";

const LINKS: [string, string][] = [
  ["/experience", "Experience"],
  ["/manifest", "Menu"],
  ["/gallery", "Gallery"],
  ["/venue", "Venue"],
  ["/shop", "Shoppe"],
  ["/community", "Community"],
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header>
      <div className="site-nav">
        <Link href="/" className="sc-wordmark" style={{ fontSize: "clamp(14px, 4.6vw, 19px)", color: "var(--bone-100)", textDecoration: "none" }} onClick={() => setOpen(false)}>
          SVNKENCITY
        </Link>

        <nav className="hide-mobile" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link" data-active={isActive(href)}>
              {label}
            </Link>
          ))}
          <ButtonLink href="/tickets" size="sm">
            Tickets
          </ButtonLink>
          <CartButton />
        </nav>

        {/* Mobile cart + toggle */}
        <div className="mobile-toggle" style={{ display: "none", alignItems: "center", gap: "10px" }}>
          <CartButton />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            style={{
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
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
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
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
