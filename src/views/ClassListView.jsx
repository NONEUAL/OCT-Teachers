import { useState } from "react";
import { Users, ChevronDown } from "lucide-react";
import { MY_CLASSES, STUDENTS, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/classlist.css";

export default function ClassListView() {
  const classKeys = MY_CLASSES.map(c => `${c.code} - ${c.section}`);
  const [selected, setSelected] = useState("");

  const students = selected ? (STUDENTS[selected] || []) : [];

  return (
    <div>
      <PageHeader Icon={Users} title="Class List" subtitle="2nd Semester AY 2025–2026" />

      <div className="classlist__toolbar">
        <span style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.g800 }}>Select Class:</span>
        <div className="dropdown-wrap">
          <select className="dropdown" value={selected} onChange={e => setSelected(e.target.value)}>
            <option value="">-- Choose a class --</option>
            {classKeys.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
        {students.length > 0 && (
          <span className="classlist__count">{students.length} students enrolled</span>
        )}
      </div>

      {!selected ? (
        <div className="card" style={{ textAlign: "center", padding: "60px 20px", color: COLORS.subtle, fontSize: 13 }}>
          Select a class above to view the student list.
        </div>
      ) : (
        <div className="card" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                {["#", "Student ID", "Full Name", "Year", "Section"].map(h => <th key={h}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td style={{ color: COLORS.subtle }}>{i + 1}</td>
                  <td className="classlist__id">{s.id}</td>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ color: COLORS.muted }}>{s.year}</td>
                  <td>
                    <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.g700, background: "#e8f5e9", padding: "3px 9px", borderRadius: 7 }}>
                      {s.section}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
