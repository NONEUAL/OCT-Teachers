import { FileText, Download } from "lucide-react";
import { SYLLABUS, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/syllabus.css";

export default function SyllabusView() {
  return (
    <div>
      <PageHeader Icon={FileText} title="Course Syllabus" subtitle="2nd Semester AY 2025–2026" />
      <div className="syllabus__grid">
        {SYLLABUS.map((s, i) => (
          <div key={i} className="syllabus__card">
            <div className="syllabus__icon-wrap">
              <FileText size={22} color="#fff" strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 4 }}>
                <span className="syllabus__code">{s.code}</span>
              </div>
              <div className="syllabus__subject">{s.subject}</div>
              <div className="syllabus__meta">{s.semester} · Uploaded {s.uploaded}</div>
              <div className="syllabus__sections">
                {s.sections.map(sec => (
                  <span key={sec} className="syllabus__section-tag">{sec}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", flexShrink: 0 }}>
              <button className="btn btn-outline" style={{ fontSize: 11.5 }}>
                <Download size={12} /> Download
              </button>
              <span style={{ fontSize: 10, color: COLORS.subtle }}>{s.file}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
