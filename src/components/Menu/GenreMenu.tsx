"use client";
import Link from "next/link";
import { nanoid } from "nanoid";
import GenreItem from "./GenreItem";
import { useEffect, useState } from "react";
import ShowHide from "./ShowHide";
import { GenreMenuProps } from "./types";

const GenreMenu = ({ header, data, url }: GenreMenuProps) => {
  const [longList, setLongList] = useState(false);
  const [list, setList] = useState(data.short);

  useEffect(() => {
    setList(longList ? data.long : data.short);
  }, [longList]);

  const toggleExpand = () => {
    setLongList(prevList => !prevList)
  }

  return (
    <div>
      <Link
        href={url as string}
        className="text-2xl font-bold mb-4 block leading-7 transition-all duration-200 hover:opacity-40"
      >
        {header}
      </Link>

      <ul className="mb-6">
        {list.map((item) => {
          return (
            <li key={nanoid()} className="mb-2">
              <GenreItem name={item.name} icon={item.icon} url={item.url} />
            </li>
          );
        })}
        <ShowHide longList={longList} handleCollapse={toggleExpand} />
      </ul>
    </div>
  );
};

export default GenreMenu;
