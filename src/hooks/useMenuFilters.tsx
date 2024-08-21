import { setCalendar, setDates, setOrdering, setParentPlatforms, setPlatforms } from "@/lib/features/data/dataSlice";
import { useAppDispatch } from "@/lib/hooks";

const useMenuFilters = ({dates, ordering, platform}: any) => {
  const dispatch = useAppDispatch();
  
  const menuFilters = () => {   
    dispatch(setDates({ name: dates.name, value: dates.value }));
    dispatch(setOrdering({ name: ordering.name, value: ordering.value }));
    platform.value === "platforms"
      ? dispatch(setPlatforms({ name: platform.name, id: platform.id, value: platform.value }))
      : dispatch(setParentPlatforms({ name: platform.name, id: platform.id, value: platform.value }));
  };
  return menuFilters;
};

export default useMenuFilters;
