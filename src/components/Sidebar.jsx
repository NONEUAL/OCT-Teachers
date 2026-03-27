import { ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "../constants/data.js";
import { getIcon } from "../constants/icons.js";
import "../styles/sidebar.css";

export default function Sidebar({ active, onNavigate, isOpen }) {
  const collapsed = !isOpen;

  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div className="sidebar__scroll">
        {NAV_ITEMS.map((group, gi) => (
          <div key={gi} className="sidebar__group">
            {group.section && !collapsed && (
              <div className="section-label">{group.section}</div>
            )}
            {collapsed && gi > 0 && (
              <div className="sidebar__divider" />
            )}
            {group.items.map(({ id, label, icon }) => {
              const isActive = active === id;
              const Icon = getIcon(icon);
              return (
                <button
                  key={id}
                  className={`sidebar__nav-btn ${isActive ? "sidebar__nav-btn--active" : ""} ${collapsed ? "sidebar__nav-btn--collapsed" : ""}`}
                  onClick={() => onNavigate(id)}
                  title={collapsed ? label : undefined}
                >
                  {Icon && <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />}
                  {!collapsed && (
                    <span className={`sidebar__nav-label ${isActive ? "sidebar__nav-label--active" : "sidebar__nav-label--inactive"}`}>
                      {label}
                    </span>
                  )}
                  {isActive && !collapsed && <ChevronRight size={12} className="sidebar__chevron" />}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className={`sidebar__footer ${collapsed ? "sidebar__footer--collapsed" : ""}`}>
        {!collapsed && (
          <>
            <div className="sidebar__footer-ay">AY 2025–2026 · 2nd Semester</div>
            <div className="sidebar__footer-motto">Mind · Body · Soul</div>
          </>
        )}
        {collapsed && <div className="sidebar__footer-dot" />}
      </div>
    </aside>
  );
}
