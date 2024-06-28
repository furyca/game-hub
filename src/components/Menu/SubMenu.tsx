"use client";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ShowHide from "./ShowHide";
import { SubMenuProps } from "./types";
import { MenuItemProps } from "@/lists/types";

const SubMenu = ({ header, data, url }: SubMenuProps) => {
  const [longList, setLongList] = useState(false);
  const [list, setList] = useState(data.short);
  const haveLong = () => {
    return data.long ? true : false;
  };

  useEffect(() => {
    setList(haveLong() && longList ? (data.long as MenuItemProps[]) : data.short);
  }, [longList]);

  const toggleExpand = () => {
    setLongList((prevList) => !prevList);
  };

  return (
    <div>
      {url ? (
        <Link
          href={url as string}
          className="text-[18px] lg:text-2xl font-bold lg:mb-4 block leading-7 transition-all duration-200 hover:opacity-40"
        >
          {header}
        </Link>
      ) : (
        <h1 className="text-[18px] lg:text-2xl font-bold lg:mb-4 leading-7">{header}</h1>
      )}
      <ul className="lg:mb-6">
        {list.map((item) => {
          return (
            <li key={nanoid()} className="text-sm mb-2 lg:text-base">
              <MenuItem name={item.name} url={item.url} viewBox={item.viewBox} d={item.d} />
            </li>
          );
        })}
        {haveLong() && <ShowHide longList={longList} handleCollapse={toggleExpand} />}
      </ul>
    </div>
  );
};

export default SubMenu;
