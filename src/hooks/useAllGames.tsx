import { clearAllPlatforms, clearQuery, setCalendar, setDates, setOrdering } from "@/lib/features/data/dataSlice";
import { setHeader } from "@/lib/features/portals/portalslice";
import { useAppDispatch } from "@/lib/hooks";
import { ALL_TIMES } from "@/lists/releaseDates";

const useAllGames = () => {
  const dispatch = useAppDispatch();

  const allGamesOpts = () => {
    dispatch(clearQuery());
    dispatch(clearAllPlatforms());
    dispatch(setOrdering({ name: "Popularity", value: "-popularity" }));
    dispatch(setDates({ name: " ", value: ALL_TIMES }));
    dispatch(setCalendar(false));
    dispatch(setHeader({ header: "All Games", subHeader: "" }));
  };
  return allGamesOpts;
};

export default useAllGames;
