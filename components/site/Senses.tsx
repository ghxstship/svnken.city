import React from "react";
import { Card } from "@/components/ui/Card";
import { SectionHead, PhotoPlaceholder } from "@/components/ui/Atoms";
import { SENSES, SENSES_INTRO } from "@/lib/senses";
import { SENSE_IMG } from "@/lib/images";

export function SensesSection({ dark = false }: { dark?: boolean }) {
  return (
    <section
      style={
        dark
          ? { background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }
          : undefined
      }
    >
      <div className="container section">
        <SectionHead eyebrow="Five Senses, Five Fathoms" title="A world for every sense" style={{ marginBottom: "12px" }} />
        <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "640px", marginBottom: "40px" }}>
          {SENSES_INTRO}
        </p>
        <div className="cards-3">
          {SENSES.map((s) => (
            <Card key={s.sense} interactive style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <PhotoPlaceholder label={s.tag} src={SENSE_IMG[s.sense]} h={190} />
              <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", flex: 1 }}>
                <div className="sc-tag-text" style={{ color: "var(--brass-400)", marginBottom: "6px" }}>The {s.sense}</div>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{s.title}</h3>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{s.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
