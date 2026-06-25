import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Atoms";
import { FAQ } from "@/lib/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logbook · FAQ",
  description: "Everything you need before the lanterns — tickets, the EDC weekend shuttles, access, allergies, sensory notes, and more.",
};

export default function FaqPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>The Logbook</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Questions, logged</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto" }}>
            Everything we get asked at the dock. If it isn&rsquo;t here, write{" "}
            <a href={`mailto:${SITE.contact.general}`}>{SITE.contact.general}</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {FAQ.map((group) => (
            <div key={group.group} style={{ marginBottom: "44px" }}>
              <Eyebrow style={{ marginBottom: "16px" }}>{group.group}</Eyebrow>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="faq-item"
                    style={{ borderBottom: "1px solid var(--line)", padding: "4px 0" }}
                  >
                    <summary
                      style={{
                        listStyle: "none",
                        cursor: "pointer",
                        padding: "18px 4px",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <span className="sc-h4" style={{ color: "var(--text-strong)" }}>{item.q}</span>
                      <span className="sc-label faq-plus" style={{ color: "var(--brass-400)", flex: "none" }}>+</span>
                    </summary>
                    <p className="sc-body" style={{ color: "var(--text-muted)", padding: "0 4px 18px", margin: 0 }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <ButtonLink href="/tickets" size="lg">Register to Board</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
