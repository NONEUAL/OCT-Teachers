import { Download } from "lucide-react";
import { FORMS, COLORS } from "../constants/data.js";
import { getIcon } from "../constants/icons.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/forms.css";

export default function DownloadableFormsView() {
  return (
    <div>
      <PageHeader Icon={Download} title="Downloadable Forms" subtitle="Official OCT faculty forms and templates" />
      <div className="forms__grid">
        {FORMS.map((f, i) => {
          const Icon = getIcon(f.icon);
          return (
            <div key={i} className="form-card">
              <div className="form-card__icon">
                {Icon && <Icon size={20} color="#fff" strokeWidth={1.8} />}
              </div>
              <div>
                <div className="form-card__title">{f.title}</div>
                <div className="form-card__desc">{f.description}</div>
              </div>
              <button className="form-card__btn">
                <Download size={12} /> Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
