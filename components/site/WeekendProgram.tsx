import React from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { WEEKEND_PROGRAM, WEEKEND_DATES } from "@/lib/shows";

export function WeekendProgram() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px", flexWrap: "wrap" }}>
        <Tag tone="patina">SVNKEN CITY × EDC Orlando × The Vanguard</Tag>
        <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{WEEKEND_DATES}</span>
      </div>
      <div className="cards-3">
        {WEEKEND_PROGRAM.map((b, i) => (
          <Card key={b.title} interactive style={{ display: "flex", flexDirection: "column" }}>
            <div className="sc-tag-text" style={{ color: "var(--brass-400)", marginBottom: "10px" }}>{b.time}</div>
            <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>
              <span style={{ color: "var(--text-faint)" }}>{String(i + 1).padStart(2, "0")} · </span>
              {b.title}
            </h3>
            <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{b.detail}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
