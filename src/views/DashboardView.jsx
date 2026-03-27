import { BookOpen, Users, TrendingUp, Clock, Megaphone, ArrowRight } from "lucide-react";
import { TEACHER, SCHEDULE, ANNOUNCEMENTS, MY_CLASSES, COLORS } from "../constants/data.js";
import StatCard from "../components/StatCard.jsx";
import "../styles/dashboard.css";

const SCHEDULE_COLORS = ["#1a3a1a", "#2d6a35", "#4a9a55", "#1a3a1a", "#2d6a35"];
const totalStudents = MY_CLASSES.reduce((s, c) => s + c.students, 0);

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
          <p className="dashboard__banner-sub">{TEACHER.department} </p>
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
        <StatCard Icon={BookOpen}    label="Classes Handled" value={MY_CLASSES.length} sub="This semester"          accent={COLORS.g800} />
        <StatCard Icon={Users}       label="Total Students"  value={totalStudents}      sub="Across all sections"   accent={COLORS.gold} />
      </div>

      <div className="dashboard__grid">
        {/* Today's schedule */}
        <div className="card" style={{ padding: "18px 20px" }}>
          <div className="section-card-header">
            <Clock size={15} color={COLORS.g800} strokeWidth={2} />
            <span className="section-card-title">Today's Classes</span>
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

        {/* Announcements */}
        <div className="card" style={{ padding: "18px 20px" }}>
          <div className="section-card-header">
            <Megaphone size={15} color={COLORS.g800} strokeWidth={2} />
            <span className="section-card-title">Announcements</span>
          </div>
          {ANNOUNCEMENTS.map((a, i) => (
            <div key={i} className="announce__item">
              <div className="announce__row">
                <span className="announce__tag">{a.tag}</span>
                <div>
                  <div className="announce__title">{a.title}</div>
                  <div className="announce__date">{a.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
