import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar  from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import DashboardView           from "./views/DashboardView.jsx";
import MyClassesView           from "./views/MyClassesView.jsx";
import ScheduleView            from "./views/ScheduleView.jsx";
import GradeEncodingView       from "./views/GradeEncodingView.jsx";
import ClassListView           from "./views/ClassListView.jsx";
import AttendanceView          from "./views/AttendanceView.jsx";
import SyllabusView            from "./views/SyllabusView.jsx";
import ArchivedView            from "./views/ArchivedView.jsx";
import DownloadableFormsView   from "./views/DownloadableFormsView.jsx";
import PersonalInformationView from "./views/PersonalInformationView.jsx";
import PlaceholderView         from "./views/PlaceholderView.jsx";

function renderView(active, onNavigate) {
  switch (active) {
    case "dashboard":     return <DashboardView onNavigate={onNavigate} />;
    case "myclasses":     return <MyClassesView />;
    case "schedule":      return <ScheduleView />;
    case "gradeencoding": return <GradeEncodingView />;
    case "classlist":     return <ClassListView />;
    case "attendance":    return <AttendanceView />;
    case "syllabus":      return <SyllabusView />;
    case "archived":      return <ArchivedView />;
    case "forms":         return <DownloadableFormsView />;
    case "profile":       return <PersonalInformationView />;
    default:              return <PlaceholderView label={active} />;
  }
}

export default function App() {
  const isMobile = () => window.innerWidth <= 768;
  const [active,  setActive]  = useState("dashboard");
  const [sidebar, setSidebar] = useState(!isMobile());

  useEffect(() => {
    const handler = () => {
      if (isMobile()) setSidebar(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const navigate = (id) => {
    setActive(id);
    if (isMobile()) setSidebar(false);
  };

  return (
    <div className="app-shell">
      <Navbar onToggleSidebar={() => setSidebar(s => !s)} />
      <div className="app-body">
        <Sidebar active={active} onNavigate={navigate} isOpen={sidebar} />
        {sidebar && isMobile() && (
          <div className="sidebar-overlay" onClick={() => setSidebar(false)} />
        )}
        <main className="app-main">
          <div className="fade-in" key={active}>
            {renderView(active, navigate)}
          </div>
        </main>
      </div>
    </div>
  );
}
