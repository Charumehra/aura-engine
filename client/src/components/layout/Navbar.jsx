import {
  Bell,
  Menu,
  UserCircle,
} from "lucide-react";

import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "Dashboard",
    subtitle: "Business Overview",
  },

  "/inventory": {
    title: "Inventory",
    subtitle:
      "Manage Warehouse Inventory",
  },
};

const Navbar = ({
  collapsed,
  setMobileOpen,
}) => {
  const { pathname } = useLocation();

  const page = pages[pathname] || {
    title: "Aura Enterprise Engine",
    subtitle: "",
  };

  return (
    <header
      className={`
        sticky top-0 z-30
        bg-white border-b

        transition-all duration-300

        ${
          collapsed
            ? "lg:ml-20"
            : "lg:ml-64"
        }
      `}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              {page.title}
            </h1>

            <p className="hidden md:block text-sm text-gray-500">
              {page.subtitle}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell size={20} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <button className="rounded-full hover:scale-105 transition">
            <UserCircle
              size={34}
              className="text-gray-700"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;