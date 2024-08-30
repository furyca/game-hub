"use client";
import Link from "next/link";
import { SubMenuProps } from "./types";
import { useState } from "react";
import MenuItem from "./MenuItem";
import ShowHide from "./ShowHide";
import { useAppDispatch } from "@/lib/hooks";
import { setHeader } from "@/lib/features/portals/portalslice";
import { capitalizeFirstLetter } from "../Main/helpers/capitalizeFirstLetter";

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
          className="text-[18px] lg:text-2xl font-bold lg:mb-4 block leading-7 transition-all duration-200 hover:opacity-40"
          onClick={handleHeadClick}
        >
          {header}
        </Link>
      ) : (
        <h1 className="text-[18px] lg:text-2xl font-bold lg:mb-4 leading-7">{header}</h1>
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
