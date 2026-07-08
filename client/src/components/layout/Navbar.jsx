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
    subtitle: "Manage Warehouse Inventory",
  },
};

const Navbar = ({ setCollapsed }) => {
  const { pathname } = useLocation();

  const page = pages[pathname] || {
    title: "Aura Engine",
    subtitle: "",
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {page.title}
          </h1>

          {page.subtitle && (
            <p className="hidden text-sm text-gray-500 md:block">
              {page.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <button className="rounded-full transition hover:scale-105">
          <UserCircle
            size={34}
            className="text-gray-700"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;