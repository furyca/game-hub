import { clearAllFilters} from "@/lib/features/data/dataSlice";
import { clearQuery } from "@/lib/features/input/inputSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRef } from "react";

const useClearSearch = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    dispatch(clearQuery());
    dispatch(clearAllFilters())
    if (inputRef.current) inputRef.current.value = "";
  }
  return { clearSearch, inputRef };
};

export default useClearSearch;
