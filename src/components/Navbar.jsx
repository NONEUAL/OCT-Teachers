import { Bell, Search, Menu } from "lucide-react";
import { TEACHER } from "../constants/data.js";
import "../styles/navbar.css";

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar__glow" />
      <button className="navbar__hamburger" onClick={onToggleSidebar}>
        <Menu size={20} />
      </button>
      <img src="/OCT_logo.png" alt="OCT Logo" className="navbar__logo" />
      <div className="navbar__brand">
        <div className="navbar__brand-name">Olivarez College Tagaytay</div>
        <div className="navbar__brand-sub">Faculty Portal</div>
      </div>
      <div className="navbar__spacer">
      </div>
      <div className="navbar__notif">
        <button className="navbar__notif-btn">
          <Bell size={16} color="rgba(255,255,255,0.7)" />
        </button>
        <div className="navbar__notif-dot" />
      </div>
      <div className="navbar__profile">
        <div className="navbar__avatar">{TEACHER.initials}</div>
        <div>
          <div className="navbar__profile-name">{TEACHER.name}</div>
          <div className="navbar__profile-id">{TEACHER.employeeId} · {TEACHER.position}</div>
        </div>
      </div>
    </header>
  );
}
