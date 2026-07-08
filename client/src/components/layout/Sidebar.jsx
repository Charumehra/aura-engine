import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-40
        h-screen bg-slate-900 text-white
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        -translate-x-full
        lg:translate-x-0
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-slate-700">
        {!collapsed && (
          <h2 className="font-bold text-xl">
            Aura Engine
          </h2>
        )}

        <button
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      <nav className="mt-6 px-3 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-4 py-3 transition
            ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-4 py-3 transition
            ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Package size={20} />
          {!collapsed && <span>Inventory</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;