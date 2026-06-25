import React from "react";
import type { Metadata } from "next";
import { Eyebrow, Rule } from "@/components/ui/Atoms";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact the Dock",
  description: "Reach SVNKEN CITY — reservations, press, access needs, and group tables for the EDC Orlando run.",
};

export default function ContactPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>Contact</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Write the dock</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto" }}>
            Questions about a seating, access needs, or press — leave a note and the crew will write you back.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>By the Lantern Line</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "20px" }}>Reach us direct</h2>
            <div className="sc-body" style={{ color: "var(--text-muted)", lineHeight: 2 }}>
              <div>
                <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "2px" }}>General &amp; Guest Services</span>
                <a href={`mailto:${SITE.contact.general}`}>{SITE.contact.general}</a>
              </div>
              <Rule style={{ margin: "18px 0" }} />
              <div>
                <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "2px" }}>Group Tables &amp; Buyouts</span>
                <a href={`mailto:${SITE.contact.groups}`}>{SITE.contact.groups}</a>
              </div>
              <Rule style={{ margin: "18px 0" }} />
              <div>
                <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "2px" }}>Press</span>
                <a href={`mailto:${SITE.contact.press}`}>{SITE.contact.press}</a>
              </div>
              <Rule style={{ margin: "18px 0" }} />
              <div>
                <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "2px" }}>Find Us</span>
                {SITE.venue.name}
                <br />
                {SITE.venue.address}
              </div>
              <Rule style={{ margin: "18px 0" }} />
              <div>
                <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "2px" }}>Follow the Tide</span>
                <a href={SITE.contact.instagramUrl} target="_blank" rel="noopener noreferrer">{SITE.contact.instagram}</a>
              </div>
            </div>
          </div>
          <ContactForm topic="general" />
        </div>
      </section>
    </>
  );
}
