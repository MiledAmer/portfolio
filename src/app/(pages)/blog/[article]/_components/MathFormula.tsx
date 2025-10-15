"use client";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

export default function MathFormula({ formula }: { formula: string }) {
  return (
    <span style={{ display: "inline" }}>
      <TeX math={formula} />
    </span>
  );
}
