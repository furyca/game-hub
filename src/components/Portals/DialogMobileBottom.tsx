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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/lib/hooks";
import { clearDialog } from "@/lib/features/portals/portalslice";
import useAllGames from "@/hooks/useAllGames";
import Link from "next/link";
import SubMenu from "../Menu/SubMenu";
import useMainPage from "@/hooks/useMainPage";

const DialogMobileBottom = () => {
  const dispatch = useAppDispatch();
  const handleMainPage = useMainPage();
  const allGamesOpts = useAllGames();

  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black grid grid-cols-2 p-6">
        <div>
          <div className="mb-6 font-bold text-[18px]">
            <Link
              href="/"
              onClick={handleMainPage}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              Home
            </Link>
          </div>
          <div className="mb-6">
            <SubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url="/" />
          </div>
          <div className="mb-6 font-bold text-[18px]">
            <Link
              href="/"
              onClick={allGamesOpts}
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              All Games
            </Link>
          </div>
          <div className="mb-6">
            <SubMenu header="Platforms" data={{ short: platformLinksShort, long: platformLinks }} url="/browse" />
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
            </div>
            <div className="mb-6">
              <SubMenu header="Top" data={{ short: topLinks, long: null }} url="/" />
            </div>
            <div className="mb-6">
              <SubMenu header="Browse" data={{ short: browseLinksShort, long: browseLinks }} url="/browse" />
            </div>
            <div className="mb-6">
              <SubMenu header="Genres" data={{ short: genreLinksShort, long: genreLinks }} url="/browse" />
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
