import { searchGames, setQuery } from "@/lib/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const useSearch = () => {
  const dispatch = useAppDispatch();
  const { searchInput } = useAppSelector(({ input }) => input);

  const search = (e: any) => {
    if (e.key === "Enter") {
      dispatch(setQuery(searchInput));
      dispatch(searchGames({ query: searchInput }));
    }
  };

  return search;
};

export default useSearch;
