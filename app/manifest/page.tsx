import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Atoms";
import { MANIFEST, PAIRING_NOTE } from "@/lib/manifest";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Manifest",
  description:
    "Tonight's manifest at SVNKEN CITY — a multi-course voyage pulled from the water. There is no menu, only the manifest of what the divers brought up today.",
};

export default function ManifestPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 48px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "14px" }}>Logged at the Dock · Subject to the Tide</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>The Manifest</h1>
          <p className="sc-lead sc-italic" style={{ color: "var(--text-muted)", margin: 0 }}>
            There is no menu — only the manifest of what the divers brought up today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Card variant="paper" style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(32px, 5vw, 52px)" }}>
            <div style={{ textAlign: "center", marginBottom: "34px" }}>
              <div className="sc-wordmark" style={{ color: "var(--ink-900)", fontSize: "22px", marginBottom: "8px" }}>SVNKENCITY</div>
              <div className="sc-tag-text" style={{ color: "var(--text-ink-muted)" }}>EDC Orlando · Tinker Field Infield</div>
            </div>

            {MANIFEST.map((course, ci) => (
              <div key={course.course} style={{ marginBottom: ci < MANIFEST.length - 1 ? "34px" : 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
                  <h2 className="sc-h4 sc-caps" style={{ color: "var(--rust-600)", whiteSpace: "nowrap", margin: 0 }}>{course.course}</h2>
                  <span style={{ flex: 1, height: "1px", background: "var(--line-ink)" }} />
                </div>
                {course.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                      padding: "11px 0",
                      borderBottom: "1px dotted color-mix(in oklab, var(--ink-900) 22%, transparent)",
                    }}
                  >
                    <div>
                      <div className="sc-body" style={{ fontWeight: 600, color: "var(--ink-900)" }}>{item.name}</div>
                      <div className="sc-small sc-italic" style={{ color: "var(--text-ink-muted)" }}>{item.desc}</div>
                    </div>
                    <div className="sc-tag-text" style={{ color: "var(--text-ink-muted)", whiteSpace: "nowrap", paddingTop: "4px" }}>{item.lot}</div>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ marginTop: "36px", textAlign: "center" }}>
              <div className="sc-tag-text sc-italic" style={{ color: "var(--text-ink-muted)", marginBottom: "20px", maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
                {PAIRING_NOTE}
              </div>
              <ButtonLink href="/tickets">Reserve a Seat · from ${SITE.pricing.softOpening.price}</ButtonLink>
            </div>
          </Card>

          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginTop: "24px", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
            The manifest changes with the tide and the catch. What you see here is a sample crossing — your seating&rsquo;s manifest is logged
            the morning of and may surface differently.
          </p>
        </div>
      </section>
    </>
  );
}
