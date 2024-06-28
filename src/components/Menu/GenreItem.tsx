"use client";
import { GenreLinkProps } from "@/lists/types";
import Image from "next/image";
import Link from "next/link";

const GenreItem = ({ name, icon, url }: GenreLinkProps) => {
  return (
    <Link href={url} className="flex gap-1 lg:gap-2 items-center group/menu-link">
      <span className="flex justify-center items-center w-8 h-8 min-w-8 bg-white/10 rounded-md transition-all duration-300 group-hover/menu-link:bg-white">
        <Image src={icon as string} alt={icon as string} width={18} height={18} className="h-6 w-6 lg:h-8 lg:w-8" />
      </span>
      <span className="leading-[1.35]">{name}</span>
    </Link>
  );
};

export default GenreItem;
