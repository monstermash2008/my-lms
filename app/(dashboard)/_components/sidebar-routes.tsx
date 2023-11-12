"use client";

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

const SidebarRoutes = () => {
  const guestRoutes = [
    {
      icon: Layout,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: Compass,
      label: "Browse",
      href: "/search",
    },
  ];

  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((r) => (
        <SidebarItem
          key={r.href}
          icon={r.icon}
          label={r.label}
          href={r.href}
        ></SidebarItem>
      ))}
    </div>
  );
};

export default SidebarRoutes;
