"use client";
import Link from "next/link";
import { MenuItemProps } from "@/lists/types";
import useMenuFilters from "@/hooks/useMenuFilters";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setHeader } from "@/lib/features/portals/portalslice";
import { useEffect, useState } from "react";
import useClearSearch from "@/hooks/useClearSearch";
import { setCalendar } from "@/lib/features/data/dataSlice";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

const MenuItem = ({ name, title, subTitle, filter, url, icon: { viewBox, d, path, width, height } }: MenuItemProps) => {
  const dispatch = useAppDispatch();
  const { ordering, dates, platform, genres } = filter || {};
  const menuFilters = useMenuFilters({ dates, ordering, platform, genres });
  const { header } = useAppSelector(({ portal }) => portal);
  const { activeQuery } = useAppSelector(({ input }) => input);
  const { clearSearch } = useClearSearch();
  const [highlight, setHighlight] = useState(header === name);

  const handleClick = () => {
    activeQuery && clearSearch();
    filter && menuFilters();
    title && dispatch(setHeader({ header: title, subHeader: subTitle }));
    dispatch(setCalendar(name === "Release calendar"));
  };

  useEffect(() => {
    setHighlight(header === name);
  }, [header]);

  return (
    <Link href={url} className="flex gap-2 items-center group/menu-link" onClick={handleClick}>
      <span
        className={`${
          highlight ? "bg-white" : "bg-white/10"
        } flex justify-center items-center w-8 h-8 min-w-8 rounded-md transition-all duration-300 group-hover/menu-link:bg-white`}
      >
        {path ? (
          <Image src={path} alt={path} width={18} height={18} className="h-6 w-6 lg:h-8 lg:w-8" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} style={{ width, height }}>
            <path
              fill="#FFF"
              d={d}
              className={`${highlight && "fill-black"} group-hover/menu-link:fill-black`}
              
            />
          </svg>
        )}
      </span>
      <span className={`${highlight && "font-bold"} leading-[1.35]`}>{name}</span>
    </Link>
  );
};

export default MenuItem;
