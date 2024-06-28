import { MenuItemProps } from "@/lists/types";
import Link from "next/link";

const MenuItem = ({ name, url, viewBox, d }: MenuItemProps) => {
  return (
    <Link href="/" className="flex gap-2 items-center group/menu-link">
      <span className="flex justify-center items-center w-8 h-8 min-w-8 bg-white/10 rounded-md transition-all duration-300 group-hover/menu-link:bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="h-[18px] w-[18px]">
          <path fill="#FFF" d={d} className="group-hover/menu-link:fill-black" />
        </svg>
      </span>
      <span className="leading-[1.35]">{name}</span>
    </Link>
  );
};

export default MenuItem;
