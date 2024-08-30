"use client";
import useAllGames from "@/hooks/useAllGames";
import Link from "next/link";
import SubMenu from "./SubMenu";
import {
  browseLinks,
  browseLinksShort,
  genreLinks,
  genreLinksShort,
  newReleaseLinks,
  platformLinks,
  platformLinksShort,
  topLinks,
} from "@/lists/menuLinks";
import useMainPage from "@/hooks/useMainPage";

const Menu = () => {
  const allGamesOpts = useAllGames();
  const handleMainPage = useMainPage();

  return (
    <aside className="hidden lg:block sticky top-0 w-[200px] shrink-0 mt-9 mr-5">
      <Link
        href="/"
        onClick={handleMainPage}
        className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
      >
        Home
      </Link>
      <Link
        href=""
        className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
      >
        Reviews
      </Link>
      <SubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url="/" />
      <SubMenu header="Top" data={{ short: topLinks, long: null }} url="/" />
      <Link
        href="/"
        onClick={allGamesOpts}
        className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
      >
        All Games
      </Link>
      <SubMenu header="Browse" data={{ short: browseLinksShort, long: browseLinks }} url="/browse" />
      <SubMenu header="Platforms" data={{ short: platformLinksShort, long: platformLinks }} url="/platforms" />
      <SubMenu header="Genres" data={{ short: genreLinksShort, long: genreLinks }} url="/genres" />
    </aside>
  );
};

export default Menu;
