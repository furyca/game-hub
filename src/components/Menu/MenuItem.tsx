"use client";
import Link from "next/link";
import { MenuItemProps } from "@/lists/types";
import useMenuFilters from "@/hooks/useMenuFilters";
import { useAppDispatch } from "@/lib/hooks";
import { setCalendar } from "@/lib/features/data/dataSlice";
import Image from "next/image";

const MenuItem = ({ name, filter, url, icon: { viewBox, d, path } }: MenuItemProps) => {
  const { ordering, dates, platform } = filter || {};
  const dispatch = useAppDispatch();
  const isCalendar = name === "Release calendar";
  const menuFilters = useMenuFilters({ dates, ordering, platform });

  const handleClick = () => {
    if (filter) {
      menuFilters();
    }
    dispatch(setCalendar(isCalendar));
  };

  return (
    <Link href={url} className="flex gap-2 items-center group/menu-link" onClick={handleClick}>
      <span className="flex justify-center items-center w-8 h-8 min-w-8 bg-white/10 rounded-md transition-all duration-300 group-hover/menu-link:bg-white">
        {path ? (
          <Image src={path} alt={path} width={18} height={18} className="h-6 w-6 lg:h-8 lg:w-8" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="h-[18px] w-[18px]">
            <path fill="#FFF" d={d} className="group-hover/menu-link:fill-black" />
          </svg>
        )}
      </span>
      <span className="leading-[1.35]">{name}</span>
    </Link>
  );
};

export default MenuItem;
