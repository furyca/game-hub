import { useAppSelector } from "@/lib/hooks";
import { BarProps, bars } from "./RatingBars";
import { capitalizeFirstLetter } from "@/components/Main/helpers/capitalizeFirstLetter";

const RatingButtons = () => {
  const { ratings } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <div className="flex flex-wrap -ms-4 mb-8">
      {ratings.map((rating, index) => {
        const bar = bars.find((bar) => bar.id === rating.id) as BarProps;
        return <RatingButton key={index} count={rating.count} color={bar.color} name={rating.title} />;
      })}
    </div>
  );
};

const RatingButton = ({ count, color, name }: { count: number; color: string; name: string }) => {
  return (
    <button className="flex items-center h-8 rounded-3xl py-2 px-3 mx-1 text-sm hover:shadow-[0_0_0_2px_#ffffff33]">
      <div className={`me-[6px] w-[10px] h-[10px] rounded-full ${color}`} />
      <span className="font-bold leading-none">{capitalizeFirstLetter(name)}</span>
      <span className="ms-2 opacity-40">{count}</span>
    </button>
  );
};

export default RatingButtons;
