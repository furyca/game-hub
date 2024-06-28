"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { browseLinks, genreLinks, newReleaseLinks, platformLinks, topLinks } from "@/lists/menuLinks";
import MenuItem from "../Menu/MenuItem";
import { nanoid } from "nanoid";
import GenreItem from "../Menu/GenreItem";
import HeadLink from "../Menu/HeadLink";
import { useCallback, useEffect, useState } from "react";
import { setDialog } from "@/lib/features/portals/portalslice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import DialogMobileBottom from "../Portals/DialogMobileBottom";
import { createPortal } from "react-dom";

const STARTING_LIST = [...newReleaseLinks, ...topLinks, ...platformLinks];
const SCROLL_THRESHOLD = 150;

const BottomMenu = () => {
  const [translate, setTranslate] = useState<"translate-y-0" | "translate-y-[100%]">("translate-y-[100%]");
  const { dialog } = useAppSelector(({ portal }) => portal);
  const dispatch = useAppDispatch();

  const handleScroll = useCallback(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setTranslate("translate-y-0");
    } else if (window.scrollY < SCROLL_THRESHOLD) {
      setTranslate("translate-y-[100%]");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`fixed bottom-0 transition-all duration-200 bg-black text-sm w-full lg:hidden ${translate}`}>
      <div className="relative">
        <ul className="flex h-20 gap-3 items-center overflow-x-auto pe-16 ps-3">
          <li className="whitespace-nowrap">
            <HeadLink name="New and trending" url="/" />
          </li>
          <li className="whitespace-nowrap">
            <HeadLink name="All Games" url="/reviews" />
          </li>
          <li className="whitespace-nowrap">
            <HeadLink name="Reviews" url="/reviews" />
          </li>
          {STARTING_LIST.map((item) => {
            return (
              <li className="whitespace-nowrap" key={nanoid()}>
                <MenuItem name={item.name} url={item.url} viewBox={item.viewBox} d={item.d} />
              </li>
            );
          })}
          {genreLinks.map((item) => {
            return (
              <li className="whitespace-nowrap" key={nanoid()}>
                <GenreItem name={item.name} url={item.url} icon={item.icon} />
              </li>
            );
          })}
          {browseLinks.map((item) => {
            return (
              <li className="whitespace-nowrap" key={nanoid()}>
                <MenuItem name={item.name} url={item.url} viewBox={item.viewBox} d={item.d} />
              </li>
            );
          })}
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
