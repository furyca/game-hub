"use client";
import { SubMenuProps } from "./types";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { useAppDispatch } from "@/lib/hooks";
import { setHeader } from "@/lib/features/portals/portalslice";
import { capitalizeFirstLetter } from "../Main/helpers/capitalizeFirstLetter";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"))
const ShowHide = dynamic(() => import("./ShowHide"))

const SubMenu = ({ header, data, url }: SubMenuProps) => {
  const [list, setList] = useState(data.short);
  const dispatch = useAppDispatch();
  const haveLong = !!data.long;

  const toggleExpand = () => {
    setList(list === data.short ? data.long! : data.short);
  };

  const handleHeadClick = () => {
    dispatch(setHeader({ header: capitalizeFirstLetter(header), subHeader: "" }))
  }

  return (
    <div>
      {/* if the url is more than a "/" */}
      {url.length > 1 ? (
        <Link
          href={url}
          className="text-[18px] lg:text-2xl font-bold lg:mb-4 block lg:leading-7 transition-all duration-200 hover:opacity-40"
          onClick={handleHeadClick}
        >
          {header}
        </Link>
      ) : (
        <h1 className="text-[18px] lg:text-2xl font-bold lg:mb-4 lg:leading-7">{header}</h1>
      )}
      <ul className="lg:mb-6">
        {list.map((item, index) => (
          <li key={index} className="text-sm mb-2 lg:text-base">
            <MenuItem {...item} />
          </li>
        ))}
        {haveLong && <ShowHide longList={list === data.long} handleCollapse={toggleExpand} />}
      </ul>
    </div>
  );
};

export default SubMenu;
