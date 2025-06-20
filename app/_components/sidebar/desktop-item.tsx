"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

interface DesktopItemProps {
  icon: IconType;
  label: string;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem = ({
  active,
  href,
  icon: Icon,
  label,
  onClick,
}: DesktopItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
        group
        flex
        gap-x-3
        rounded-md
        p-3
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
        dark:hover:bg-slate-500
        dark:hover:text-white
        dark:text-gray-300

        `,
          active && "bg-gray-100 dark:bg-slate-500 dark:text-white text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
