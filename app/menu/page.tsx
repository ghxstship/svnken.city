import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow, OrnamentLabel } from "@/components/ui/Atoms";
import { MANIFEST, PAIRING_NOTE, WITHHOLD_NOTE } from "@/lib/manifest";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The five-course menu at SVNKEN CITY — global fusion meets modern comfort, one plate per fathom, from the sunlit shallows to the drowned city. Pulled from the water and plated for the deep.",
};

export default function MenuPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 48px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "14px" }}>A Five-Course Menu · Subject to the Tide</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>The Menu</h1>
          <p className="sc-lead sc-italic" style={{ color: "var(--text-muted)", margin: 0 }}>
            Global fusion meets modern comfort — five courses, one per fathom, plated from the shallows down to the drowned city.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Card variant="paper" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(32px, 5vw, 52px)" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div className="sc-wordmark" style={{ color: "var(--ink-900)", fontSize: "22px", marginBottom: "8px" }}>SVNKENCITY</div>
              <div className="sc-tag-text" style={{ color: "var(--text-ink-muted)" }}>{SITE.venue.name} · Orlando</div>
            </div>

            {MANIFEST.map((course, ci) => {
              const reveal = ci === MANIFEST.length - 1;
              return (
                <div key={course.course} style={{ marginBottom: ci < MANIFEST.length - 1 ? "30px" : 0 }}>
                  {/* zone header with depth telemetry */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px", flexWrap: "wrap" }}>
                    <h2 className="sc-h4 sc-caps" style={{ color: "var(--rust-600)", whiteSpace: "nowrap", margin: 0 }}>{course.course}</h2>
                    <span className="sc-tag-text" style={{ color: "var(--ink-900)", fontWeight: 700 }}>{course.zone}</span>
                    <span className="sc-tag-text" style={{ color: "var(--text-ink-muted)" }}>{course.depth}</span>
                    <span style={{ flex: 1, height: "1px", minWidth: "24px", background: "var(--line-ink)" }} />
                  </div>
                  <p className="sc-small sc-italic" style={{ color: "var(--text-ink-muted)", margin: "0 0 12px" }}>{course.beat}</p>

                  {reveal ? (
                    <div style={{ padding: "16px 0", borderTop: "1px solid var(--line-ink)", textAlign: "center" }}>
                      <div className="sc-tag-text" style={{ color: "var(--rust-600)", marginBottom: "8px" }}>Sealed until the room</div>
                      <p className="sc-body sc-italic" style={{ color: "var(--ink-900)", margin: 0, maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
                        {WITHHOLD_NOTE}
                      </p>
                    </div>
                  ) : (
                    course.items.map((item) => (
                      <div
                        key={item.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "20px",
                          padding: "10px 0",
                          borderBottom: "1px dotted color-mix(in oklab, var(--ink-900) 22%, transparent)",
                        }}
                      >
                        <div>
                          <div className="sc-body" style={{ fontWeight: 600, color: "var(--ink-900)" }}>{item.name}</div>
                          <div className="sc-small sc-italic" style={{ color: "var(--text-ink-muted)" }}>{item.desc}</div>
                        </div>
                        <div className="sc-tag-text" style={{ color: "var(--text-ink-muted)", whiteSpace: "nowrap", paddingTop: "4px" }}>{item.lot}</div>
                      </div>
                    ))
                  )}
                  <div className="sc-tag-text" style={{ color: "var(--text-ink-muted)", marginTop: "8px" }}>
                    Pairing · {course.pairing}
                  </div>
                </div>
              );
            })}

            <div style={{ marginTop: "34px", textAlign: "center" }}>
              <div className="sc-tag-text sc-italic" style={{ color: "var(--text-ink-muted)", marginBottom: "20px", maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>
                {PAIRING_NOTE}
              </div>
              <ButtonLink href="/tickets">Reserve a Seat · from ${SITE.pricing.softOpening.price}</ButtonLink>
            </div>
          </Card>

          <div style={{ maxWidth: "560px", margin: "26px auto 0", textAlign: "center" }}>
            <OrnamentLabel style={{ marginBottom: "16px" }}>Subject to the tide</OrnamentLabel>
            <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", margin: 0 }}>
              The menu changes with the catch. What you see here is a sample voyage — your seating&rsquo;s menu is logged the morning
              of and may surface differently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
