import { Archive } from "lucide-react";
import { ARCHIVED, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/archived.css";

export default function ArchivedView() {
  return (
    <div>
      <PageHeader Icon={Archive} title="Archived Classes" subtitle="Previous semesters — read only" />
      <div className="card" style={{ overflow: "hidden" }}>
        <table className="data-table">
          <thead>
            <tr>
              {["Code", "Subject", "Section", "Semester", "Room", "Students"].map(h => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {ARCHIVED.map((a, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, color: COLORS.g800 }}>{a.code}</td>
                <td style={{ fontWeight: 500 }}>{a.subject}</td>
                <td>
                  <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.g700, background: "#e8f5e9", padding: "3px 9px", borderRadius: 7 }}>
                    {a.section}
                  </span>
                </td>
                <td><span className="archived__semester-badge">{a.semester}</span></td>
                <td style={{ color: COLORS.muted }}>{a.room}</td>
                <td style={{ color: COLORS.muted }}>{a.students} students</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
