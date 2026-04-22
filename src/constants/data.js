export const COLORS = {
  g900: "#0a1f0a",
  g800: "#1a3a1a",
  g700: "#2d6a35",
  g500: "#4a9a55",
  gold: "#c8a825",
  goldLight: "#fdf6d8",
  bg: "#f0faf2",
  card: "#ffffff",
  cardAlt: "#e8f5e9",
  text: "#0d1f0d",
  muted: "#3a5c3a",
  subtle: "#7aaa80",
  border: "#c8e6c9",
};

export const TEACHER = {
  name: "De Villa, Karen",
  firstName: "Karen",
  initials: "KD",
  employeeId: "OCT-2026",
  department: "Information Technology",
  position: "Instructor",
  email: "karen.devilla@oct.edu.ph",
  contact: "+63 912 345 6789",
  section: "BSIT",
};

export const NAV_ITEMS = [
  {
    section: null,
    items: [{ id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" }],
  },
  {
    section: "Academic",
    items: [
      { id: "myclasses",    label: "My Classes",    icon: "BookOpen" },
      { id: "schedule",     label: "Class Schedule", icon: "Clock" },
      { id: "gradeencoding",label: "Grade Encoding", icon: "ClipboardEdit" },
      { id: "classlist",    label: "Class List",     icon: "Users" },
    ],
  },
  {
    section: "Records",
    items: [
      { id: "syllabus",    label: "Course Syllabus",  icon: "FileText" },
      { id: "archived",    label: "Archived Classes", icon: "Archive" },
    ],
  },
  {
    section: "Resources",
    items: [
      { id: "forms", label: "Downloadable Forms", icon: "Download" },
    ],
  },
  {
    section: "Profile",
    items: [
      { id: "profile", label: "Personal Information", icon: "UserCircle" },
    ],
  },
];

export const MY_CLASSES = [
  { code: "IT 104", subject: "Quantitative Method",                      section: "BSIT 212-A", room: "COMLAB 2", schedule: "FRI 1:00–4:00",   students: 28, units: 3 },
  { code: "IT 104", subject: "Quantitative Method",                      section: "BSIT 212-B", room: "COMLAB 2", schedule: "FRI 7:00–10:00",  students: 28, units: 3 },
  { code: "IT 210", subject: "Web Programming",                          section: "BSIT 311-A", room: "COMLAB 1", schedule: "MON 1:00–4:00",   students: 30, units: 3 },
  { code: "IT 210", subject: "Web Programming",                          section: "BSIT 311-B", room: "COMLAB 1", schedule: "WED 1:00–4:00",   students: 27, units: 3 },
  { code: "IT 104", subject: "Quantitative Method",                      section: "BSIT 213-A", room: "COMLAB 2", schedule: "SAT 7:00–10:00",  students: 35, units: 3 },
];

export const SCHEDULE = [
  { code: "IT 104", subject: "Quantitative Method", section: "BSIT 212-A", day: "FRI", time: "1:00–4:00",  room: "COMLAB 2", units: 3 },
  { code: "IT 104", subject: "Quantitative Method", section: "BSIT 212-B", day: "FRI", time: "7:00–10:00", room: "COMLAB 2", units: 3 },
  { code: "IT 210", subject: "Web Programming",     section: "BSIT 311-A", day: "MON", time: "1:00–4:00",  room: "COMLAB 1", units: 3 },
  { code: "IT 210", subject: "Web Programming",     section: "BSIT 311-B", day: "WED", time: "1:00–4:00",  room: "COMLAB 1", units: 3 },
  { code: "IT 104", subject: "Quantitative Method", section: "BSIT 213-A", day: "SAT", time: "7:00–10:00", room: "COMLAB 2", units: 3 },
];

export const STUDENTS = {
  "IT 104 - BSIT 212-A": [
    { id: "211C-101", name: "Abarquez, Rheiven Irah Pacifico",  year: "2nd Year", section: "BSIT 212-A", prelim: 88, midterm: 90, finals: null },
    { id: "211C-102", name: "Araza, Aerionne Wayne Hernando",   year: "2nd Year", section: "BSIT 212-A", prelim: 85, midterm: 87, finals: null },
    { id: "211C-103", name: "Bernardino, John Dave Gatdula",    year: "2nd Year", section: "BSIT 212-A", prelim: 91, midterm: 89, finals: null },
    { id: "211C-104", name: "Besa, Brent Patrick Cortez",       year: "2nd Year", section: "BSIT 212-A", prelim: 78, midterm: 82, finals: null },
    { id: "211C-105", name: "Bueno, Rose Ann Baron",            year: "2nd Year", section: "BSIT 212-A", prelim: 92, midterm: 94, finals: null },
    { id: "211C-106", name: "Caralipio, Alfonso Marco Galletes",year: "2nd Year", section: "BSIT 212-A", prelim: 80, midterm: 83, finals: null },
    { id: "211C-107", name: "Constante, John Fredrick Cabrera", year: "2nd Year", section: "BSIT 212-A", prelim: 87, midterm: 88, finals: null },
    { id: "211C-108", name: "Constante, Piolo Maldonado",       year: "2nd Year", section: "BSIT 212-A", prelim: 84, midterm: 86, finals: null },
    { id: "211C-109", name: "Coro, Kurt RJ Roculas",            year: "2nd Year", section: "BSIT 212-A", prelim: 90, midterm: 91, finals: null },
    { id: "211C-110", name: "Creus, John Carlo Fuentes",        year: "2nd Year", section: "BSIT 212-A", prelim: 83, midterm: 85, finals: null },
    { id: "211C-111", name: "Cuadra, Johnsen Paula Abelida",    year: "2nd Year", section: "BSIT 212-A", prelim: 76, midterm: 79, finals: null },
    { id: "211C-112", name: "Dimaranan, Ralph Jocel Blanza",    year: "2nd Year", section: "BSIT 212-A", prelim: 88, midterm: 90, finals: null },
    { id: "211C-113", name: "Enriquez, Isiah Daniell Erni",     year: "2nd Year", section: "BSIT 212-A", prelim: 93, midterm: 92, finals: null },
    { id: "211C-114", name: "Ermino, Christian Yvan Dogelio",   year: "2nd Year", section: "BSIT 212-A", prelim: 81, midterm: 84, finals: null },
    { id: "211C-115", name: "Gimena, Mark Edgine Rada",         year: "2nd Year", section: "BSIT 212-A", prelim: 86, midterm: 88, finals: null },
    { id: "211C-116", name: "Gonzales, Don Aldrich Benitez",    year: "2nd Year", section: "BSIT 212-A", prelim: 89, midterm: 91, finals: null },
    { id: "211C-117", name: "Marcelino, Emmanuel Manimitmit",   year: "2nd Year", section: "BSIT 212-A", prelim: 77, midterm: 80, finals: null },
    { id: "211C-118", name: "Pablo, John Russel Tongga",        year: "2nd Year", section: "BSIT 212-A", prelim: 85, midterm: 87, finals: null },
    { id: "211C-119", name: "Payad, Marco Van Jairon Javier",   year: "2nd Year", section: "BSIT 212-A", prelim: 91, midterm: 93, finals: null },
    { id: "211C-120", name: "Perey, Neil Aaron Gaborно",        year: "2nd Year", section: "BSIT 212-A", prelim: 82, midterm: 84, finals: null },
    { id: "211C-121", name: "Reyes, Shawn Abasolo",             year: "2nd Year", section: "BSIT 212-A", prelim: 90, midterm: 92, finals: null },
    { id: "211C-122", name: "Rivero, Aivan Mark Gomez",         year: "2nd Year", section: "BSIT 212-A", prelim: 87, midterm: 89, finals: null },
    { id: "211C-123", name: "Rocha, Veronica Erni",             year: "2nd Year", section: "BSIT 212-A", prelim: 94, midterm: 95, finals: null },
    { id: "211C-124", name: "Ronario, Jhon Vincent Peji",       year: "2nd Year", section: "BSIT 212-A", prelim: 79, midterm: 81, finals: null },
    { id: "211C-125", name: "Segurigan, Mark Harry Balad-on",   year: "2nd Year", section: "BSIT 212-A", prelim: 86, midterm: 88, finals: null },
    { id: "211C-126", name: "Tugbo, Ericson Gorospe",           year: "2nd Year", section: "BSIT 212-A", prelim: 83, midterm: 85, finals: null },
    { id: "211C-127", name: "Velasquez, Gabriel Escarilla",     year: "2nd Year", section: "BSIT 212-A", prelim: 95, midterm: 96, finals: null },
    { id: "211C-128", name: "Zerrudo, Warren Baltazar",         year: "2nd Year", section: "BSIT 212-A", prelim: 88, midterm: 90, finals: null },
  ],
  "IT 104 - BSIT 212-B": [
    { id: "2024-00201", name: "Aquino, Patricia Reyes",   year: "2nd Year", section: "BSIT 212-B", prelim: 87, midterm: 89, finals: null },
    { id: "2024-00202", name: "Batungbakal, Mark Santos", year: "2nd Year", section: "BSIT 212-B", prelim: 76, midterm: 80, finals: null },
    { id: "2024-00203", name: "Castillo, Nina Cruz",      year: "2nd Year", section: "BSIT 212-B", prelim: 90, midterm: 92, finals: null },
    { id: "2024-00204", name: "Dimaculangan, Roy Lim",    year: "2nd Year", section: "BSIT 212-B", prelim: 84, midterm: 85, finals: null },
    { id: "2024-00205", name: "Evangelista, Lea Torres",  year: "2nd Year", section: "BSIT 212-B", prelim: 88, midterm: 91, finals: null },
    { id: "2024-00206", name: "Flores, Angelo Garcia",    year: "2nd Year", section: "BSIT 212-B", prelim: 79, midterm: 78, finals: null },
  ],
  "IT 210 - BSIT 311-A": [
    { id: "2022-00301", name: "Gomez, Tricia Ramos",      year: "3rd Year", section: "BSIT 311-A", prelim: 91, midterm: 93, finals: null },
    { id: "2022-00302", name: "Gutierrez, Paolo Mendoza", year: "3rd Year", section: "BSIT 311-A", prelim: 86, midterm: 88, finals: null },
    { id: "2022-00303", name: "Ilagan, Camille Santos",   year: "3rd Year", section: "BSIT 311-A", prelim: 94, midterm: 95, finals: null },
    { id: "2022-00304", name: "Jimenez, Renz Aquino",     year: "3rd Year", section: "BSIT 311-A", prelim: 82, midterm: 84, finals: null },
    { id: "2022-00305", name: "Lacson, Bianca Reyes",     year: "3rd Year", section: "BSIT 311-A", prelim: 89, midterm: 90, finals: null },
  ],
  "IT 210 - BSIT 311-B": [
    { id: "2022-00401", name: "Magno, Dante Cruz",        year: "3rd Year", section: "BSIT 311-B", prelim: 77, midterm: 80, finals: null },
    { id: "2022-00402", name: "Navarro, Sheila Torres",   year: "3rd Year", section: "BSIT 311-B", prelim: 88, midterm: 87, finals: null },
    { id: "2022-00403", name: "Ocampo, Rico Lim",         year: "3rd Year", section: "BSIT 311-B", prelim: 92, midterm: 94, finals: null },
    { id: "2022-00404", name: "Padilla, Jane Garcia",     year: "3rd Year", section: "BSIT 311-B", prelim: 85, midterm: 83, finals: null },
  ],
  "IT 104 - BSIT 213-A": [
    { id: "2024-00501", name: "Quizon, Andres Ramos",     year: "2nd Year", section: "BSIT 213-A", prelim: 90, midterm: 91, finals: null },
    { id: "2024-00502", name: "Reyes, Luz Mendoza",       year: "2nd Year", section: "BSIT 213-A", prelim: 83, midterm: 85, finals: null },
    { id: "2024-00503", name: "Santos, Emilio Aquino",    year: "2nd Year", section: "BSIT 213-A", prelim: 87, midterm: 89, finals: null },
    { id: "2024-00504", name: "Tolentino, Iris Cruz",     year: "2nd Year", section: "BSIT 213-A", prelim: 75, midterm: 77, finals: null },
    { id: "2024-00505", name: "Umali, Vicente Santos",    year: "2nd Year", section: "BSIT 213-A", prelim: 93, midterm: 95, finals: null },
  ],
};

export const SYLLABUS = [
  { code: "IT 104", subject: "Quantitative Method", semester: "2nd Sem AY 2025-2026", sections: ["BSIT 212-A", "BSIT 212-B", "BSIT 213-A"], file: "IT104_Syllabus_2025-2026.pdf", uploaded: "Jan 10, 2026" },
  { code: "IT 210", subject: "Web Programming",     semester: "2nd Sem AY 2025-2026", sections: ["BSIT 311-A", "BSIT 311-B"],               file: "IT210_Syllabus_2025-2026.pdf", uploaded: "Jan 10, 2026" },
];

export const ARCHIVED = [
  { code: "IT 104", subject: "Quantitative Method", section: "BSIT 211-A", semester: "1st Sem AY 2025-2026", room: "COMLAB 2", students: 30 },
  { code: "IT 104", subject: "Quantitative Method", section: "BSIT 211-B", semester: "1st Sem AY 2025-2026", room: "COMLAB 2", students: 28 },
  { code: "IT 103", subject: "Data Structures",     section: "BSIT 211-A", semester: "1st Sem AY 2025-2026", room: "COMLAB 3", students: 30 },
];

export const FORMS = [
  { title: "Grade Sheet",          description: "Official grade encoding form",         file: "grade_sheet.xlsx",    icon: "ClipboardList" },
  { title: "Faculty Clearance",    description: "End of semester clearance form",       file: "faculty_clearance.pdf",icon: "CheckSquare" },
  { title: "Incident Report",      description: "Student incident report form",         file: "incident_report.pdf", icon: "AlertTriangle" },
  { title: "Leave Application",    description: "Official leave of absence form",       file: "leave_application.pdf",icon: "CalendarOff" },
  { title: "Course Syllabus Template", description: "Standard syllabus format",        file: "syllabus_template.docx",icon: "FileText" },
  { title: "Class Record",         description: "Printable class attendance record",    file: "class_record.xlsx",   icon: "BookOpen" },
];

// type: "exam" | "holiday" | "event"
export const CALENDAR_EVENTS = [
  { date: new Date(2026, 3,  7), label: "Foundation Day",          type: "holiday" },
  { date: new Date(2026, 3,  9), label: "Araw ng Kagitingan",      type: "holiday" },
  { date: new Date(2026, 3, 14), label: "Finals Week Begins",      type: "exam"    },
  { date: new Date(2026, 3, 15), label: "Grade Submission Starts", type: "event"   },
  { date: new Date(2026, 3, 17), label: "Good Friday",             type: "holiday" },
  { date: new Date(2026, 3, 18), label: "Black Saturday",          type: "holiday" },
  { date: new Date(2026, 3, 20), label: "Easter Monday",           type: "holiday" },
  { date: new Date(2026, 3, 24), label: "Finals Week Ends",        type: "exam"    },
  { date: new Date(2026, 3, 25), label: "Grade Submission Deadline", type: "event" },
  { date: new Date(2026, 3, 28), label: "Enrollment Opens",        type: "event"   },
  { date: new Date(2026, 2, 15), label: "Midterm Grade Deadline",  type: "event"   },
  { date: new Date(2026, 2, 23), label: "Midterm Exams Begin",     type: "exam"    },
  { date: new Date(2026, 2, 27), label: "Midterm Exams End",       type: "exam"    },
  { date: new Date(2026, 4,  1), label: "Labor Day",               type: "holiday" },
];