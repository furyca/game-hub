import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import useClearSearch from "./useClearSearch";
import { clearAllFilters, setCalendar } from "@/lib/features/data/dataSlice";
import { fetchInitialGames } from "@/lib/features/data/thunks";
import { createURL } from "@/components/Portals/helpers/createURL";
import { setHeader } from "@/lib/features/portals/portalslice";
import useWideScreen from "./useWideScreen";

const useMainPage = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(({ data }) => data);
  const { clearSearch } = useClearSearch();
  const wideScreen = useWideScreen();

  const handleMainPage = () => {
    clearSearch();
    dispatch(clearAllFilters());
    dispatch(fetchInitialGames({ filter: createURL(filter), size: wideScreen ? 10 : 5 }));
    dispatch(setHeader({ header: "New and trending", subHeader: "Based on player counts and release date" }));
    dispatch(setCalendar(false));
  };
  return handleMainPage;
};

export default useMainPage;
