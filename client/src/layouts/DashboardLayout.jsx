import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Navbar
        collapsed={collapsed}
        setMobileOpen={setMobileOpen}
      />

      <main
        className={`
          transition-all duration-300
          p-4 md:p-6

          ${
            collapsed
              ? "lg:ml-20"
              : "lg:ml-64"
          }
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;