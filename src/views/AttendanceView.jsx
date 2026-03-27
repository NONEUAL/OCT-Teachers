import { useState } from "react";
import { CalendarCheck, ChevronDown } from "lucide-react";
import { ATTENDANCE, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/attendance.css";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const YEARS  = ["2026", "2025"];

export default function AttendanceView() {
  const [month, setMonth] = useState("February");
  const [year,  setYear]  = useState("2026");

  const filtered = ATTENDANCE.filter(a => {
    const d = new Date(a.date);
    return d.getFullYear() === Number(year) && MONTHS[d.getMonth()] === month;
  });

  const present = filtered.filter(a => a.status === "Present").length;
  const late    = filtered.filter(a => a.status === "Late").length;
  const absent  = filtered.filter(a => a.status === "Absent").length;

  return (
    <div>
      <PageHeader Icon={CalendarCheck} title="Attendance Logs" subtitle="De Villa, Karen · Faculty Attendance Record" />

      {/* Dropdowns */}
      <div className="attendance__toolbar">
        <span style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.g800 }}>Filter by:</span>
        <div className="dropdown-wrap">
          <select className="dropdown" value={month} onChange={e => setMonth(e.target.value)}>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
        <div className="dropdown-wrap">
          <select className="dropdown" value={year} onChange={e => setYear(e.target.value)}>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
      </div>

      {/* Summary pills */}
      <div className="attendance__summary">
        <div className="attendance__summary-pill">
          <div className="attendance__summary-val" style={{ color: COLORS.g800 }}>{present}</div>
          <div className="attendance__summary-label">Present</div>
        </div>
        <div className="attendance__summary-pill">
          <div className="attendance__summary-val" style={{ color: "#c8a825" }}>{late}</div>
          <div className="attendance__summary-label">Late</div>
        </div>
        <div className="attendance__summary-pill">
          <div className="attendance__summary-val" style={{ color: "#b71c1c" }}>{absent}</div>
          <div className="attendance__summary-label">Absent</div>
        </div>
        <div className="attendance__summary-pill">
          <div className="attendance__summary-val" style={{ color: COLORS.g700 }}>{filtered.length}</div>
          <div className="attendance__summary-label">Working Days</div>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ overflow: "hidden" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px 20px", color: COLORS.subtle, fontSize: 13 }}>
            No attendance records for {month} {year}.
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                {["Date", "Day", "Time In", "Time Out", "Status", "Remarks"].map(h => <th key={h}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{new Date(a.date).toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" })}</td>
                  <td style={{ color: COLORS.muted }}>{a.day}</td>
                  <td style={{ fontWeight: 600, color: COLORS.g700 }}>{a.timeIn}</td>
                  <td style={{ color: COLORS.muted }}>{a.timeOut}</td>
                  <td>
                    <span className={`attendance__status attendance__status--${a.status.toLowerCase()}`}>
                      {a.status}
                    </span>
                  </td>
                  <td style={{ color: COLORS.subtle, fontStyle: a.remarks ? "normal" : "italic" }}>
                    {a.remarks || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
