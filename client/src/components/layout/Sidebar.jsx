import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Sidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      title: "Inventory",
      icon: Package,
      path: "/inventory",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen bg-slate-900 text-white
          transition-all duration-300 ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0

          ${collapsed ? "lg:w-20" : "lg:w-64"}

          w-64
        `}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-700 px-5">
          {!collapsed && (
            <h2 className="text-xl font-bold">
              Aura Engine
            </h2>
          )}

          <div className="flex items-center gap-2">
            {/* Desktop Collapse */}
            <button
              onClick={() =>
                setCollapsed(!collapsed)
              }
              className="hidden rounded-md p-1 hover:bg-slate-800 lg:block"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>

            {/* Mobile Close */}
            <button
              className="rounded-md p-1 hover:bg-slate-800 lg:hidden"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200

                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />

                {!collapsed && (
                  <span>{item.title}</span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;