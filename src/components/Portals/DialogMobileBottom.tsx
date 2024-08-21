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
// import HeadLink from "../Menu/HeadLink";
// import SubMenu from "../Menu/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/lib/hooks";
import { clearDialog } from "@/lib/features/portals/portalslice";
import useClearSearch from "@/hooks/useClearSearch";
import useAllGames from "@/hooks/useAllGames";
import Link from "next/link";
import ASubMenu from "../Menu/SubMenu";
// import GenreItem from "../Menu/GenreItem";
// import BrowseItem from "../Menu/BrowseItem";
// import MenuItem from "../Menu/MenuItem";

const DialogMobileBottom = () => {
  const dispatch = useAppDispatch();
  const { clearSearch } = useClearSearch();
  const allGamesOpts = useAllGames();

  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black grid grid-cols-2 p-6">
        <div>
          <div className="mb-6 font-bold text-[18px]">
            <Link
              href="/"
              onClick={clearSearch}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              Home
            </Link>
            {/* <HeadLink name="Home" url="/" filterOpt={clearSearch} /> */}
          </div>
          <div className="mb-6">
            <ASubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url="/" />
            {/* <SubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url={null} Item={MenuItem} /> */}
          </div>
          <div className="mb-6 font-bold text-[18px]">
            <Link
              href="/"
              onClick={allGamesOpts}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              All Games
            </Link>
            {/* <HeadLink name="All Games" url="/games" filterOpt={allGamesOpts} /> */}
          </div>
          <div className="mb-6">
            <ASubMenu header="Platforms" data={{ short: platformLinksShort, long: platformLinks }} url="/browse" />
            {/* <SubMenu
              header="Platforms"
              data={{ short: platformLinksShort, long: platformLinks }}
              url="/browse/platforms"
              Item={MenuItem}
            /> */}
          </div>
        </div>
        <div>
          <div>
            <div className="mb-6 font-bold text-[18px]">
              <Link
                href="/reviews"
                className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
              >
                Reviews
              </Link>
              {/* <HeadLink name="Reviews" url="/reviews" filterOpt={undefined} /> */}
            </div>
            <div className="mb-6">
              <ASubMenu header="Top" data={{ short: topLinks, long: null }} url="/" />
              {/* <SubMenu header="Top" data={{ short: topLinks, long: null }} url={null} Item={MenuItem} /> */}
            </div>
            <div className="mb-6">
              <ASubMenu header="Browse" data={{ short: browseLinksShort, long: browseLinks }} url="/browse" />
              {/* <SubMenu
                header="Browse"
                data={{ short: browseLinksShort, long: browseLinks }}
                url="/browse"
                Item={BrowseItem}
              /> */}
            </div>
            <div className="mb-6">
              <ASubMenu header="Genres" data={{ short: genreLinksShort, long: genreLinks }} url="/browse" />

              {/* <SubMenu
                header="Genres"
                data={{ short: genreLinksShort, long: genreLinks }}
                url="/browse/genres"
                Item={GenreItem}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => dispatch(clearDialog())}
        className="bg-white fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faXmark} size="xl" className="text-black" />
      </div>
    </>
  );
};

export default DialogMobileBottom;
