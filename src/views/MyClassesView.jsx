import { BookOpen, Users } from "lucide-react";
import { MY_CLASSES, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/myclasses.css";

export default function MyClassesView() {
  const totalStudents = MY_CLASSES.reduce((s, c) => s + c.students, 0);
  const uniqueSubjects = [...new Set(MY_CLASSES.map(c => c.code))].length;

  return (
    <div>
      <PageHeader Icon={BookOpen} title="My Classes" subtitle="2nd Semester AY 2025–2026" />

      <div className="myclasses__summary">
        <div className="myclasses__summary-card">
          <div className="myclasses__summary-value">{MY_CLASSES.length}</div>
          <div className="myclasses__summary-label">Total Classes</div>
        </div>
        <div className="myclasses__summary-card">
          <div className="myclasses__summary-value">{uniqueSubjects}</div>
          <div className="myclasses__summary-label">Subjects Handled</div>
        </div>
        <div className="myclasses__summary-card">
          <div className="myclasses__summary-value">{totalStudents}</div>
          <div className="myclasses__summary-label">Total Students</div>
        </div>
        <div className="myclasses__summary-card">
          <div className="myclasses__summary-value">{MY_CLASSES.reduce((s, c) => s + c.units, 0)}</div>
          <div className="myclasses__summary-label">Total Units Load</div>
        </div>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <table className="data-table">
          <thead>
            <tr>
              {["Code", "Subject", "Section", "Schedule", "Room", "Students", "Units"].map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MY_CLASSES.map((c, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, color: COLORS.g800 }}>{c.code}</td>
                <td style={{ fontWeight: 500 }}>{c.subject}</td>
                <td><span className="myclasses__section-badge">{c.section}</span></td>
                <td style={{ color: COLORS.g700, fontWeight: 600 }}>{c.schedule}</td>
                <td>{c.room}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Users size={12} color={COLORS.subtle} />
                    <span className="myclasses__students-count">{c.students} students</span>
                  </div>
                </td>
                <td style={{ textAlign: "center", color: COLORS.muted }}>{c.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
