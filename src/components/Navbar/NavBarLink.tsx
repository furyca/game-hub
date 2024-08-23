import Link from "next/link";
import { ReactNode } from "react";

const NavBarLink = ({ text, url, children }: { text: string; url: string; children?: ReactNode }) => {
  return (
    <Link href={"/"} className="transition duration-75 hover:border-b-2 relative">
      {text}
      {children}
    </Link>
  );
};

export default NavBarLink;
