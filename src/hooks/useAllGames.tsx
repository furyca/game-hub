import { setCalendar, setFilters } from "@/lib/features/data/dataSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ALL_TIMES } from "@/lists/releaseDates";
import useClearSearch from "./useClearSearch";
import { setHeader } from "@/lib/features/portals/portalslice";

const useAllGames = () => {
  const dispatch = useAppDispatch();
  const { clearSearch } = useClearSearch();

  const allGamesOpts = () => {
    clearSearch()
    dispatch(
      setFilters({
        parent_platforms: {
          id: null,
          name: null,
          value: null,
        },
        platforms: {
          id: null,
          name: null,
          value: null,
        },
        dates: {
          name: " ",
          value: ALL_TIMES,
        },
        ordering: {
          name: "Popularity",
          value: "-popularity",
        },
        genres: {
          name: "",
          value: ""
        }
      })
    );
    dispatch(setHeader({ header: "All Games", subHeader: "" }));
    dispatch(setCalendar(false))

  }
  return allGamesOpts;
};

export default useAllGames;
