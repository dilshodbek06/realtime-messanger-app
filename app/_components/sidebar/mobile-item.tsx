"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

interface MobileItemProps {
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem = ({ href, icon: Icon, active, onClick }: MobileItemProps) => {
  //

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
    group
    flex
    gap-x-3
    text-sm
    leading-6
    font-semibold
    w-full
    justify-center
    p-4
    text-gray-500
    dark:text-white
    hover:text-black
    hover:bg-gray-100
    dark:hover:bg-slate-800
    dark:hover:text-white
    `,
        active && "bg-gray-100 dark:bg-slate-800 dark:text-white   text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
