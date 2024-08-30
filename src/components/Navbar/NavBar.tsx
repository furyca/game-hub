"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarLink from "./NavBarLink";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import Search from "./Search";
import LinkList from "../Portals/LinkList";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setDialog } from "@/lib/features/portals/portalslice";
import DialogMobileTop from "../Portals/DialogMobileTop";
import RateTop from "./RateTop";
import { faBars, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { dialog } = useAppSelector(({ portal }) => portal);
  const refRight =
    dropdownRef.current && document.body.scrollWidth - dropdownRef.current.offsetLeft - dropdownRef.current.offsetWidth;

  return (
    <nav className="px-5 lg:px-0 max-w-[1920px] mx-auto">
      <div className="flex justify-between items-center lg:px-10 lg:py-6">
        <Logo />
        <div className="hidden lg:flex bg-white rounded text-black text-sm leading-none justify-between items-center h-[26px] ms-[2px] mb-[6px] me-2">
          <RateTop />
        </div>
        <Search />
        <div className="lg:ms-4 h-[60px] flex justify-between items-center px-2 lg:px-0">
          <div className="text-center lg:hidden">
            <button id="Hamburger Button" onClick={() => dispatch(setDialog("top"))}>
              <FontAwesomeIcon icon={faBars} className="h-5" />
            </button>
          </div>
          <div className="gap-4 font-medium hidden lg:flex text-sm pb-1">
            <NavBarLink text="LOG IN" url="/" />
            <NavBarLink text="SIGN UP" url="/" />
            <NavBarLink text="API" url="/" />
            <div onMouseEnter={() => setDropdownActive(true)} ref={dropdownRef}>
              <FontAwesomeIcon icon={faEllipsis} size="xl" width={16} height={16} />
            </div>
            {dropdownActive &&
              createPortal(
                <LinkList
                  mouseLeave={() => setDropdownActive(false)}
                  styles={{ top: dropdownRef.current?.offsetTop, right: refRight }}
                />,
                document.body
              )}
            {dialog === "top" && createPortal(<DialogMobileTop />, document.body)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
