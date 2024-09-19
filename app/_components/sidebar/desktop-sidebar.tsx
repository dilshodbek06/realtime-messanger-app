"use client";

import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./desktop-item";
import { User } from "@prisma/client";
import { useState } from "react";
import Avatar from "../avatar";
import SettingsModal from "./settings-modal";
import DarkMode from "../dark-mode";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto dark:bg-slate-700 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav className="mt-4 flex flex-col justify-between">
          <ul className="flex flex-col items-center space-y-1" role="list">
            {routes.map((route, ind) => (
              <DesktopItem
                key={ind}
                href={route.href}
                label={route.label}
                icon={route.icon}
                active={route.active}
                onClick={route.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col gap-4 justify-between items-center">
          <div>
            <DarkMode />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
