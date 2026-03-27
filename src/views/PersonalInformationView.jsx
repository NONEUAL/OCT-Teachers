import { useState } from "react";
import { UserCircle, Save } from "lucide-react";
import { TEACHER, COLORS } from "../constants/data.js";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/profile.css";

export default function PersonalInformationView() {
  const [form, setForm] = useState({
    name:       TEACHER.name,
    employeeId: TEACHER.employeeId,
    department: TEACHER.department,
    position:   TEACHER.position,
    email:      TEACHER.email,
    contact:    TEACHER.contact,
  });
  const [saved, setSaved] = useState(false);

  const update = (field, val) => { setForm(f => ({ ...f, [field]: val })); setSaved(false); };

  return (
    <div>
      <PageHeader Icon={UserCircle} title="Personal Information" subtitle="Manage your faculty profile" />

      <div className="profile__layout">
        {/* Left — profile card */}
        <div className="profile__card">
          <div className="profile__avatar-wrap">
            <div className="profile__avatar">{TEACHER.initials}</div>
            <div className="profile__name">{form.name}</div>
            <div className="profile__position">{form.position}</div>
            <div className="profile__dept">{form.department}</div>
            <div className="profile__id-badge">{form.employeeId}</div>
          </div>
          <div className="profile__stats">
            <div>
              <div className="profile__stat-val">5</div>
              <div className="profile__stat-lbl">Classes</div>
            </div>
            <div>
              <div className="profile__stat-val">152</div>
              <div className="profile__stat-lbl">Students</div>
            </div>
          </div>
        </div>

        {/* Right — editable form */}
        <div className="profile__card">
          <div className="profile__section-title">Basic Information</div>

          <div className="profile__field-row">
            <div className="profile__field">
              <div className="profile__field-label">Full Name</div>
              <input className="profile__field-input" value={form.name} onChange={e => update("name", e.target.value)} />
            </div>
            <div className="profile__field">
              <div className="profile__field-label">Employee ID</div>
              <input className="profile__field-input" value={form.employeeId} disabled />
            </div>
          </div>

          <div className="profile__field-row">
            <div className="profile__field">
              <div className="profile__field-label">Department</div>
              <input className="profile__field-input" value={form.department} onChange={e => update("department", e.target.value)} />
            </div>
            <div className="profile__field">
              <div className="profile__field-label">Position</div>
              <input className="profile__field-input" value={form.position} onChange={e => update("position", e.target.value)} />
            </div>
          </div>

          <div style={{ marginTop: 8, marginBottom: 18, paddingTop: 18, borderTop: `1px solid ${COLORS.border}` }}>
            <div className="profile__section-title">Contact Details</div>
          </div>

          <div className="profile__field-row">
            <div className="profile__field">
              <div className="profile__field-label">Email Address</div>
              <input className="profile__field-input" type="email" value={form.email} onChange={e => update("email", e.target.value)} />
            </div>
            <div className="profile__field">
              <div className="profile__field-label">Contact Number</div>
              <input className="profile__field-input" value={form.contact} onChange={e => update("contact", e.target.value)} />
            </div>
          </div>

          <div className="profile__save-row">
            {saved && <span style={{ fontSize: 11.5, color: COLORS.g700, fontWeight: 600, marginRight: 12 }}>✓ Profile saved</span>}
            <button className="btn btn-primary" onClick={() => setSaved(true)}>
              <Save size={13} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
