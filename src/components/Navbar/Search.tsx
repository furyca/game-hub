import { setInput } from "@/lib/features/input/inputSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSearch from "@/hooks/useSearch";
import useMainPage from "@/hooks/useMainPage";

const Search = () => {
  const { searchInput } = useAppSelector(({ input }) => input);
  const dispatch = useAppDispatch();
  const search = useSearch();
  const handleMainPage = useMainPage();

  return (
    <div className="lg:flex-grow me-3 lg:me-4 h-[60px] flex justify-between items-center">
      <div className="flex flex-grow items-center ps-2 relative lg:-mt-1.5 group/search">
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={(e) => dispatch(setInput(e.target.value))}
          onKeyUp={(e) => search(e)}
          placeholder="Search 865,896 games"
          className="ps-[38px] pe-3 bg-white/[.16] rounded-3xl w-full h-7 lg:h-11 text-sm font-medium transition duration-300 
              bg-[url('/search.svg')] bg-no-repeat bg-[length:14px] bg-scroll bg-[top_.5rem_left_1rem] lg:bg-[top_1rem_left_1rem] focus:outline-none hover:bg-white hover:bg-[url('/search_hover.svg')] hover:text-black"
        />
        <div className="hidden absolute right-[15px] top-[11px] lg:flex justify-center items-center text-white/50 font-mono text-[11px] leading-[1.164]">
          {searchInput.length > 0 ? (
            <button id="clear-search" aria-label="Clear Search" className="w-7" onClick={handleMainPage}>
              <FontAwesomeIcon icon={faXmark} size="2xl" className="group-hover/search:text-black" />
            </button>
          ) : (
            <>
              <div className="border border-white/30 py-[3px] px-[5px] rounded-[3px]">alt</div>
              <span className="mx-1">+</span>
              <div className="border border-white/30 py-[3px] px-[5px] rounded-[3px]">enter</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
