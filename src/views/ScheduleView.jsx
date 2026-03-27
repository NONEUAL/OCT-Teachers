import { Clock } from "lucide-react";
import { SCHEDULE } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/schedule.css";

const HEADERS = ["Code", "Subject", "Section", "Day", "Time", "Room", "Units"];

export default function ScheduleView() {
  return (
    <div>
      <PageHeader Icon={Clock} title="Class Schedule" subtitle="2nd Semester AY 2025–2026 · De Villa, Karen" />
      <div className="card schedule__table-wrap">
        <table className="schedule__table">
          <thead>
            <tr>{HEADERS.map(h => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {SCHEDULE.map((s, i) => (
              <tr key={i}>
                <td className="schedule__td-code">{s.code}</td>
                <td className="schedule__td-subject">{s.subject}</td>
                <td><span className="schedule__section-badge">{s.section}</span></td>
                <td className="schedule__td-center">
                  <span className="schedule__day-badge">{s.day}</span>
                </td>
                <td className="schedule__td-time">{s.time}</td>
                <td>{s.room}</td>
                <td className="schedule__td-center">{s.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="schedule__footer">
          Total Units Load:&nbsp;<strong>{SCHEDULE.reduce((s, c) => s + c.units, 0)}</strong>
        </div>
      </div>
    </div>
  );
}
