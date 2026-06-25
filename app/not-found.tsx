import React from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, OrnamentLabel } from "@/components/ui/Atoms";

export default function NotFound() {
  return (
    <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ position: "relative", maxWidth: "560px" }}>
        <Eyebrow style={{ marginBottom: "20px" }}>Lot No. 0404 · Lost to the Tide</Eyebrow>
        <h1 className="sc-wordmark" style={{ color: "var(--bone-100)", fontSize: "clamp(3rem, 12vw, 6rem)", margin: 0 }}>404</h1>
        <OrnamentLabel style={{ margin: "20px 0 24px" }}>This page went under</OrnamentLabel>
        <p className="sc-lead" style={{ color: "var(--text-muted)", marginBottom: "30px" }}>
          Whatever you were after slipped off the manifest. Let&rsquo;s get you back to the dock.
        </p>
        <div className="row-center">
          <ButtonLink href="/" size="lg">Back to the House</ButtonLink>
          <ButtonLink href="/tickets" size="lg" variant="secondary">Register to Board</ButtonLink>
        </div>
      </div>
    </section>
  );
}
