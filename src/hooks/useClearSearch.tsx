import { createURL } from "@/components/Portals/helpers/createURL";
import { clearAllFilters, clearQuery, fetchGames, setCalendar } from "@/lib/features/data/dataSlice";
import { clearInput } from "@/lib/features/input/inputSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRef } from "react";

const useClearSearch = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(({ data }) => data);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    dispatch(clearInput());
    dispatch(clearQuery());
    dispatch(clearAllFilters());
    dispatch(fetchGames(createURL(filter)));
    dispatch(setCalendar(false));
    if (inputRef.current) inputRef.current.value = "";
  };
  return { clearSearch, inputRef };
};

export default useClearSearch;
