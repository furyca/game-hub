import { MouseEventHandler } from "react";
import DropdownItem from "./DropdownItem";
import { StyleProps } from "./types";

const LinkList = ({ mouseLeave, styles }: { mouseLeave: MouseEventHandler<HTMLDivElement>; styles: StyleProps }) => {
  const { top, right } = styles;
  return (
    <div
      className="min-w-44 z-10 rounded bg-white text-black text-sm absolute -right-8 top-0 animate-fade"
      style={{ top, right: right ? right : 0 }}
      onMouseLeave={mouseLeave}
    >
      <div className="py-5 px-[10px]">
        <DropdownItem text="Leaderboard" url="/" />
        <DropdownItem text="Discord" url="/" />
        <DropdownItem text="@rawgtheworld" url="/" />
        <DropdownItem text="@rawgthepictures" url="/" />
        <DropdownItem text="Get an API key" url="/" />
        <DropdownItem text="Sitemap" url="/" />
      </div>
    </div>
  );
};

export default LinkList;
