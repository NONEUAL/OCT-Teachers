import { useState } from "react";
import { ClipboardEdit, Save, ChevronDown } from "lucide-react";
import { MY_CLASSES, STUDENTS, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/gradeencoding.css";

function calcAvg(prelim, midterm, finals) {
  const vals = [prelim, midterm, finals].map(Number).filter(v => !isNaN(v) && v !== "");
  if (!vals.length) return null;
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
}

export default function GradeEncodingView() {
  const classKeys = MY_CLASSES.map(c => `${c.code} - ${c.section}`);
  const [selected, setSelected] = useState("");
  const [grades, setGrades]     = useState({});
  const [saved, setSaved]       = useState(false);

  const students = selected ? (STUDENTS[selected] || []) : [];

  const handleChange = (id, field, val) => {
    setSaved(false);
    setGrades(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: val },
    }));
  };

  const getVal = (student, field) => {
    if (grades[student.id]?.[field] !== undefined) return grades[student.id][field];
    return student[field] ?? "";
  };

  const handleSave = () => setSaved(true);

  return (
    <div>
      <PageHeader Icon={ClipboardEdit} title="Grade Encoding" subtitle="2nd Semester AY 2025–2026" />

      <div className="grade-encoding__toolbar">
        <span className="grade-encoding__toolbar-label">Select Class:</span>
        <div className="dropdown-wrap">
          <select className="dropdown" value={selected} onChange={e => { setSelected(e.target.value); setSaved(false); setGrades({}); }}>
            <option value="">-- Choose a class --</option>
            {classKeys.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
      </div>

      {!selected ? (
        <div className="card grade-encoding__no-select">
          Select a class above to start encoding grades.
        </div>
      ) : (
        <div className="card" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                {["#", "Student ID", "Name", "Prelim", "Midterm", "Finals", "Average", "Status"].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => {
                const prelim  = getVal(s, "prelim");
                const midterm = getVal(s, "midterm");
                const finals  = getVal(s, "finals");
                const avg     = calcAvg(prelim, midterm, finals);
                const passed  = avg !== null && avg >= 75;
                return (
                  <tr key={s.id}>
                    <td style={{ color: COLORS.subtle }}>{i + 1}</td>
                    <td style={{ fontFamily: "monospace", fontSize: 11.5, color: COLORS.subtle }}>{s.id}</td>
                    <td style={{ fontWeight: 600 }}>{s.name}</td>
                    <td>
                      <input className="grade-input" type="number" min="0" max="100"
                        value={prelim} onChange={e => handleChange(s.id, "prelim", e.target.value)} />
                    </td>
                    <td>
                      <input className="grade-input" type="number" min="0" max="100"
                        value={midterm} onChange={e => handleChange(s.id, "midterm", e.target.value)} />
                    </td>
                    <td>
                      <input className="grade-input" type="number" min="0" max="100"
                        value={finals} onChange={e => handleChange(s.id, "finals", e.target.value)} />
                    </td>
                    <td>
                      <span className="grade-encoding__avg" style={{ color: avg >= 90 ? COLORS.g800 : avg >= 75 ? COLORS.g700 : "#b71c1c" }}>
                        {avg ?? "—"}
                      </span>
                    </td>
                    <td>
                      {avg !== null && (
                        <span className={`grade-encoding__status ${passed ? "grade-encoding__status--pass" : "grade-encoding__status--fail"}`}>
                          {passed ? "PASSING" : "FAILED"}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="grade-encoding__save-bar">
            {saved && <span className="grade-encoding__saved-msg">✓ Grades saved successfully</span>}
            <button className="btn btn-primary" onClick={handleSave}>
              <Save size={13} /> Save Grades
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
