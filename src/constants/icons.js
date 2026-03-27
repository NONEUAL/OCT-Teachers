import {
  LayoutDashboard, BookOpen, Clock, FileText, Download,
  UserCircle, Users, CalendarCheck, Archive, ClipboardList,
  CheckSquare, AlertTriangle, Award, Bell, Search, Menu,
  ChevronRight, TrendingUp, BookMarked, Code, Calculator,
  Construction, Megaphone, ArrowRight, User, Save,
  ClipboardEdit, CalendarOff, Globe, ChevronDown,
} from "lucide-react";

const ICON_MAP = {
  LayoutDashboard, BookOpen, Clock, FileText, Download,
  UserCircle, Users, CalendarCheck, Archive, ClipboardList,
  CheckSquare, AlertTriangle, Award, Bell, Search, Menu,
  ChevronRight, TrendingUp, BookMarked, Code, Calculator,
  Construction, Megaphone, ArrowRight, User, Save,
  ClipboardEdit, CalendarOff, Globe, ChevronDown,
};

export function getIcon(name) {
  return ICON_MAP[name] ?? null;
}

export default ICON_MAP;
