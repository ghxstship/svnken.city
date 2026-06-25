import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { RUN_LABEL } from "@/lib/shows";
import { SocialLinks } from "@/components/site/SocialLinks";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        background: "var(--abyss-900)",
        marginTop: "auto",
      }}
    >
      <div className="container" style={{ padding: "56px 40px 30px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          <div>
            <div className="sc-wordmark" style={{ fontSize: "22px", color: "var(--bone-100)", marginBottom: "16px" }}>
              SVNKENCITY
            </div>
            <p className="sc-small" style={{ color: "var(--text-muted)", maxWidth: "300px", margin: "0 0 14px" }}>
              A supper club below the waterline, surfacing for one week inside EDC Orlando. Service when the lanterns are lit.
            </p>
            <div className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{RUN_LABEL}</div>
          </div>

          <FooterCol
            head="Voyage"
            links={[
              ["/experience", "The Voyage"],
              ["/manifest", "The Manifest"],
              ["/gallery", "Gallery"],
              ["/tickets", "Tickets"],
              ["/venue", "The Harbor"],
            ]}
          />
          <FooterCol
            head="The Dock"
            links={[
              ["/faq", "FAQ"],
              ["/group-bookings", "Group Tables"],
              ["/partners", "Partnerships"],
              ["/careers", "Careers"],
              ["/contact", "Contact"],
            ]}
          />

          <div>
            <div className="sc-eyebrow" style={{ marginBottom: "12px" }}>Find Us</div>
            <div className="sc-small" style={{ color: "var(--text)", lineHeight: 1.9, marginBottom: "16px" }}>
              {SITE.venue.name}
              <br />
              {SITE.venue.address}
              <br />
              <a href={`mailto:${SITE.contact.general}`} style={{ color: "var(--brass-400)" }}>
                {SITE.contact.general}
              </a>
            </div>
            <SocialLinks size={36} gap={10} />
          </div>
        </div>

        <hr className="sc-rule" style={{ margin: "36px 0 18px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
            © 2026 SVNKEN CITY · A {SITE.parent} voyage
          </span>
          <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
            Tickets on {SITE.ticketing.platform}, never Ticket Fairy.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ head, links }: { head: string; links: [string, string][] }) {
  return (
    <div>
      <div className="sc-eyebrow" style={{ marginBottom: "12px" }}>{head}</div>
      {links.map(([href, label]) => (
        <Link key={href} href={href} className="sc-small" style={{ display: "block", color: "var(--text)", lineHeight: 2, textDecoration: "none" }}>
          {label}
        </Link>
      ))}
    </div>
  );
}
