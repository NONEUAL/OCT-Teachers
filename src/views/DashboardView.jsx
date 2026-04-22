import { useState } from "react";
import { BookOpen, Users, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TEACHER, SCHEDULE, MY_CLASSES, COLORS, CALENDAR_EVENTS } from "../constants/data.js";
import StatCard from "../components/StatCard.jsx";
import "../styles/dashboard.css";

const SCHEDULE_COLORS = ["#1a3a1a", "#2d6a35", "#4a9a55", "#1a3a1a", "#2d6a35"];
const totalStudents = MY_CLASSES.reduce((s, c) => s + c.students, 0);

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS_SHORT = ["S","M","T","W","T","F","S"];

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth()    &&
    a.getDate()     === b.getDate()
  );
}

function CalendarCard() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year  = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDow    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthEvents = CALENDAR_EVENTS.filter(
    e => e.date.getFullYear() === year && e.date.getMonth() === month
  );

  const upcoming = CALENDAR_EVENTS
    .filter(e => e.date >= today)
    .sort((a, b) => a.date - b.date)
    .slice(0, 3);

  const cells = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="card cal-card">
      <div className="cal-header">
        <div className="cal-month-year">
          <span className="cal-month">{MONTHS[month]}</span>
          <span className="cal-year">{year}</span>
        </div>
        <div className="cal-nav">
          <button className="cal-nav-btn" onClick={() => setViewDate(new Date(year, month - 1, 1))}>
            <ChevronLeft size={12} />
          </button>
          <button className="cal-nav-btn" onClick={() => setViewDate(new Date(year, month + 1, 1))}>
            <ChevronRight size={12} />
          </button>
        </div>
      </div>

      <div className="cal-dow">
        {DAYS_SHORT.map((d, i) => <div key={i} className="cal-dow-cell">{d}</div>)}
      </div>

      <div className="cal-grid">
        {cells.map((day, idx) => {
          if (!day) return <div key={`e-${idx}`} className="cal-day cal-day--empty" />;
          const cellDate    = new Date(year, month, day);
          const isToday     = isSameDay(cellDate, today);
          const isSunday    = cellDate.getDay() === 0;
          const eventsOnDay = monthEvents.filter(e => isSameDay(e.date, cellDate));
          const dotType = eventsOnDay.find(e => e.type === "exam")?.type
            ?? eventsOnDay.find(e => e.type === "holiday")?.type
            ?? eventsOnDay[0]?.type;
          let cls = "cal-day";
          if (isToday)  cls += " cal-day--today";
          if (isSunday) cls += " cal-day--sunday";
          return (
            <div key={day} className={cls}>
              <span className="cal-day-num">{day}</span>
              {dotType && <div className={`cal-dot cal-dot--${dotType}`} />}
            </div>
          );
        })}
      </div>

      <div className="cal-legend">
        {[["#c62828","Exam"],["#c8a825","Holiday"],["#2d6a35","Event"]].map(([color, label]) => (
          <div key={label} className="cal-legend-item">
            <div className="cal-legend-dot" style={{ background: color }} />{label}
          </div>
        ))}
      </div>

      {upcoming.length > 0 && (
        <>
          <div className="cal-upcoming-title">Upcoming</div>
          <div className="cal-events">
            {upcoming.map((ev, i) => (
              <div key={i} className="cal-event-row">
                <div className="cal-event-date">
                  {ev.date.toLocaleDateString("en-PH", { month: "short", day: "numeric" })}
                </div>
                <div className="cal-event-label">{ev.label}</div>
                <span className={`cal-event-tag cal-event-tag--${ev.type}`}>{ev.type}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function DashboardView({ onNavigate }) {
  return (
    <div>
      {/* Banner */}
      <div className="dashboard__banner">
        <div className="dashboard__banner-orb-1" />
        <div className="dashboard__banner-orb-2" />
        <div className="dashboard__banner-content">
          <div className="dashboard__banner-eyebrow">Welcome back</div>
          <h2 className="dashboard__banner-title">Good morning, {TEACHER.firstName}!</h2>
          <p className="dashboard__banner-sub">{TEACHER.department}</p>
          <div className="dashboard__banner-actions">
            <button className="btn btn-gold" onClick={() => onNavigate("gradeencoding")}>
              Grade Encoding <ArrowRight size={13} />
            </button>
            <button className="btn btn-ghost" onClick={() => onNavigate("schedule")}>
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="dashboard__stats">
        <StatCard Icon={BookOpen} label="Classes Handled" value={MY_CLASSES.length} sub="This semester"        accent={COLORS.g800} />
        <StatCard Icon={Users}    label="Total Students"  value={totalStudents}      sub="Across all sections" accent={COLORS.gold} />
      </div>

      <div className="dashboard__grid">
        {/* Today's schedule */}
        <div className="card" style={{ padding: "18px 20px" }}>
          <div className="section-card-header">
            <Clock size={15} color={COLORS.g800} strokeWidth={2} />
            <span className="section-card-title">Class Schedule</span>
          </div>
          {SCHEDULE.map((s, i) => (
            <div key={i} className="sched-preview__item">
              <div className="sched-preview__bar" style={{ background: SCHEDULE_COLORS[i % SCHEDULE_COLORS.length] }} />
              <div style={{ flex: 1 }}>
                <div className="sched-preview__subject">{s.subject}</div>
                <div className="sched-preview__meta">{s.section} · {s.room}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 }}>
                <span className="sched-preview__time">{s.time}</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#2d6a35", background: "#e8f5e9", padding: "2px 6px", borderRadius: 5 }}>{s.day}</span>
              </div>
            </div>
          ))}
        </div>

        {/* OCT Calendar */}
        <CalendarCard />
      </div>
    </div>
  );
}