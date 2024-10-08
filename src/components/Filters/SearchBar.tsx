import { setInput } from "@/lib/features/input/inputSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useSearch from "@/hooks/useSearch";
import { memo } from "react";
import useMainPage from "@/hooks/useMainPage";

const SearchBar = () => {
  const { searchInput } = useAppSelector(({ input }) => input);
  const dispatch = useAppDispatch();
  const search = useSearch();
  const handleMainPage = useMainPage();

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full bg-transparent outline-none border-b p-2"
        value={searchInput}
        onChange={(e) => dispatch(setInput(e.target.value))}
        onKeyUp={(e) => search(e)}
      />
      {searchInput.length > 0 && (
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2xl"
          style={{ background: "radial-gradient(circle at center, white 0, black 100%)" }}
          className="text-black absolute right-0 rounded-full cursor-pointer transition-all duration-300 hover:opacity-40"
          onClick={handleMainPage}
        />
      )}
    </div>
  );
};

export default memo(SearchBar)
