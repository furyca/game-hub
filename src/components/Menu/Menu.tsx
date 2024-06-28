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
import HeadLink from "./HeadLink";
import SubMenu from "./SubMenu";
import GenreMenu from "./GenreMenu";

const Menu = () => {
  return (
    <aside className="hidden lg:block sticky top-0 w-[200px] shrink-0 mt-9 mr-5">
      <HeadLink name="Home" url="/" />
      <HeadLink name="Reviews" url="/reviews" />
      <SubMenu header="New Releases" data={{ short: newReleaseLinks, long: null }} url={null} />
      <SubMenu header="Top" data={{ short: topLinks, long: null }} url={null} />
      <HeadLink name="All Games" url="/games" />
      <SubMenu header="Browse" data={{ short: browseLinksShort, long: browseLinks }} url="/browse" />
      <SubMenu header="Platforms" data={{ short: platformLinksShort, long: platformLinks }} url="/browse/platforms" />
      <GenreMenu header="Genres" data={{ short: genreLinksShort, long: genreLinks }} url="/browse/genres" />
    </aside>
  );
};

export default Menu;
