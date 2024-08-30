import { setFilters } from "@/lib/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getCalendar } from "@/lists/helpers/formatDate";
import { memo, useMemo } from "react";

const Calendar = () => {
  const dispatch = useAppDispatch();
  const { filter, filter: { dates: { value }}} = useAppSelector(({ data }) => data);

  const changeMonth = (dateValue: string) => {
    dispatch(setFilters({...filter, dates: { name: null, value: dateValue} }))
  };

  const calendar = useMemo(() => getCalendar(), []);
  
  return (
    <div className="mb-3">
      <ul className="flex gap-x-4 gap-y-1 overflow-auto lg:flex-wrap">
        {calendar.map(({ dateName, dateValue }, index) => {
          return (
            <li key={index}>
              <button
                className={`text-lg leading-none pb-1 box border-b ${
                  value === dateValue ? "text-white border-white cursor-default" : "text-white/40 border-white/40"
                }`}
                onClick={() => changeMonth(dateValue)}
              >
                {dateName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Calendar)
