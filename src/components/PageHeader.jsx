import "../styles/pageheader.css";

export default function PageHeader({ title, subtitle, Icon }) {
  return (
    <div className="page-header">
      <div className="page-header__row">
        <div className="page-header__icon-wrap">
          <Icon size={17} color="#fff" strokeWidth={2} />
        </div>
        <h1 className="page-header__title">{title}</h1>
      </div>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
    </div>
  );
}
