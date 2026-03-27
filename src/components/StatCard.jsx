import "../styles/dashboard.css";

export default function StatCard({ label, value, sub, accent, Icon }) {
  return (
    <div className="stat-card" style={{ borderTop: `3px solid ${accent}` }}>
      <div className="stat-card__icon-wrap" style={{ background: `${accent}14` }}>
        <Icon size={16} color={accent} strokeWidth={2} />
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
      {sub && <div className="stat-card__sub">{sub}</div>}
    </div>
  );
}
