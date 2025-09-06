import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Bell,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Mark Attendance", url: "/attendance", icon: Calendar },
  { title: "Attendance Record", url: "/attendance-record", icon: ClipboardList },
  { title: "Notification", url: "/notifications", icon: Bell },
  { title: "Class Schedule", url: "/schedule", icon: BookOpen },
  { title: "Setting", url: "/settings", icon: Settings },
];

export function StudentSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-sidebar-foreground">
            Student Dashboard
          </h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-sidebar-accent text-sidebar-foreground"
        >
          {isCollapsed ? <Menu size={16} /> : <X size={16} />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const active = isActive(item.url);
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon size={18} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="truncate">{item.title}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          className={cn(
            "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-destructive hover:bg-destructive/10",
            isCollapsed && "justify-center px-2"
          )}
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}