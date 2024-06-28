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
import GenreMenu from "../Menu/GenreMenu";
import HeadLink from "../Menu/HeadLink";
import SubMenu from "../Menu/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/lib/hooks";
import { clearDialog } from "@/lib/features/portals/portalslice";

const DialogMobileBottom = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black grid grid-cols-2 p-6">
        <div>
          <div className="mb-6 font-bold text-[18px]">
            <HeadLink name="Home" url="/" />
          </div>
          <div className="mb-6">
            <SubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url={null} />
          </div>
          <div className="mb-6 font-bold text-[18px]">
            <HeadLink name="All Games" url="/games" />
          </div>
          <div className="mb-6">
            <SubMenu
              header="Platforms"
              data={{ short: platformLinksShort, long: platformLinks }}
              url="/browse/platforms"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="mb-6 font-bold text-[18px]">
              <HeadLink name="Reviews" url="/reviews" />
            </div>
            <div className="mb-6">
              <SubMenu header="Top" data={{ short: topLinks, long: null }} url={null} />
            </div>
            <div className="mb-6">
              <SubMenu header="Browse" data={{ short: browseLinksShort, long: browseLinks }} url="/browse" />
            </div>
            <div className="mb-6">
              <GenreMenu header="Genres" data={{ short: genreLinksShort, long: genreLinks }} url="/browse/genres" />
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => dispatch(clearDialog())} className="bg-white fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faXmark} size="xl" className="text-black" />
      </div>
    </>
  );
};

export default DialogMobileBottom;
