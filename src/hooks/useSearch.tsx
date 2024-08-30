import { searchGames } from "@/lib/features/data/thunks";
import { setQuery } from "@/lib/features/input/inputSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const dispatch = useAppDispatch();
  const { searchInput } = useAppSelector(({ input }) => input);
  const router = useRouter()

  const search = (e: any) => {
    if (e.key === "Enter") {
      router.push('/')
      dispatch(setQuery(searchInput));
      dispatch(searchGames({ query: searchInput }));
    }
  }

  return search;
};

export default useSearch;
