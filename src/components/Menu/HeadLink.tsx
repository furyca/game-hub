import Link from "next/link";
import { HeadLinkProps } from "./types";

const HeadLink = ({ name, url }: HeadLinkProps) => {
  return (
    <Link href={url} className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40">
      {name}
    </Link>
  );
};

export default HeadLink;
