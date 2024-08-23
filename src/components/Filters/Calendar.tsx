import { setDates } from "@/lib/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getCalendar } from "@/lists/helpers/formatDate";

const Calendar = () => {
  const dispatch = useAppDispatch();
  const {
    filter: {
      dates: { value },
    },
  } = useAppSelector(({ data }) => data);

  const changeMonth = (dateValue: string) => {
    dispatch(setDates({ name: null, value: dateValue }));
  };

  return (
    <div className="mb-3">
      <ul className="flex gap-x-4 gap-y-1 overflow-auto lg:flex-wrap">
        {getCalendar().map(({ dateName, dateValue }, index) => {
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

export default Calendar;
