import { Construction } from "lucide-react";
import { COLORS } from "../constants/data.js";

export default function PlaceholderView({ label }) {
  return (
    <div style={{ textAlign: "center", paddingTop: 90 }}>
      <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg,${COLORS.g800},${COLORS.g700})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
        <Construction size={26} color="#fff" strokeWidth={1.8} />
      </div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", color: COLORS.g800, fontSize: 19, fontWeight: 700 }}>Coming Soon</h2>
      <p style={{ color: COLORS.muted, marginTop: 8, fontSize: 13 }}>The <strong>{label}</strong> section is under development.</p>
    </div>
  );
}
