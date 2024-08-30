"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { browseLinks, genreLinks, newReleaseLinks, platformLinks, topLinks } from "@/lists/menuLinks";
import { useEffect, useMemo, useState } from "react";
import { setDialog } from "@/lib/features/portals/portalslice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createPortal } from "react-dom";
import useAllGames from "@/hooks/useAllGames";
import Link from "next/link";
import MenuItem from "../Menu/MenuItem";
import dynamic from "next/dynamic";
import { debounce } from "@/lib/helpers";
import useMainPage from "@/hooks/useMainPage";

const DialogMobileBottom = dynamic(() => import("../Portals/DialogMobileBottom"));

const STARTING_LIST = [...newReleaseLinks, ...topLinks, ...platformLinks, ...genreLinks, ...browseLinks];
const SCROLL_THRESHOLD = 150;

const BottomMenu = () => {
  const [translate, setTranslate] = useState<"translate-y-0" | "translate-y-[100%]">("translate-y-[100%]");
  const { dialog } = useAppSelector(({ portal }) => portal);
  const dispatch = useAppDispatch();
  const handleMainPage = useMainPage();
  const allGamesOpts = useAllGames();

  const debounceScroll = debounce(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setTranslate("translate-y-0");
    } else if (window.scrollY < SCROLL_THRESHOLD) {
      setTranslate("translate-y-[100%]");
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, [debounceScroll]);

  const menuItems = useMemo(
    () =>
      STARTING_LIST.map((item, index) => (
        <li className="whitespace-nowrap" key={index}>
          <MenuItem
            name={item.name}
            title={item.title}
            subTitle={item.subTitle}
            filter={item.filter}
            //add URLs
            url="/"
            icon={item.icon}
          />
        </li>
      )),
    []
  );

  return (
    <div className={`fixed bottom-0 transition-all duration-200 bg-black text-sm w-full lg:hidden ${translate}`}>
      <div className="relative">
        <ul className="flex h-20 gap-3 items-center overflow-x-auto pe-16 ps-3">
          <li className="whitespace-nowrap">
            <Link
              href="/"
              onClick={handleMainPage}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 hover:opacity-40"
            >
              New and trending
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link
              href="/"
              onClick={allGamesOpts}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 hover:opacity-40"
            >
              All Games
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link
              href="/"
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 hover:opacity-40"
            >
              Reviews
            </Link>
          </li>
          {menuItems}
        </ul>
        <div>
          <div
            onClick={() => dispatch(setDialog("bottom"))}
            className="absolute bottom-0 right-0 h-full py-6 px-4 bg-black border-s-[1px] text-xl shadow-[-20px_0_16px_-8px_rgba(0,0,0,1)]"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      {dialog === "bottom" && createPortal(<DialogMobileBottom />, document.body)}
    </div>
  );
};

export default BottomMenu;
