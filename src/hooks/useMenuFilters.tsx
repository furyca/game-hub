import { setFilters } from "@/lib/features/data/dataSlice";
import { useAppDispatch } from "@/lib/hooks";

const useMenuFilters = ({ dates, ordering, platform, genres }: any) => {
  const dispatch = useAppDispatch();

  const menuFilters = () => {
    const isParent = platform.value === "parent_platforms";
    dispatch(
      setFilters({
        parent_platforms: {
          id: isParent ? platform.id : null,
          name: isParent ? platform.name : null,
          value: isParent ? platform.value : null,
        },
        platforms: {
          id: !isParent ? platform.id : null,
          name: !isParent ? platform.name : null,
          value: !isParent ? platform.value : null,
        },
        dates: {
          name: dates.name,
          value: dates.value,
        },
        ordering: {
          name: ordering.name,
          value: ordering.value,
        },
        genres: {
          name: genres.name,
          value: genres.value,
        },
      })
    );
  };
  return menuFilters;
};

export default useMenuFilters;
