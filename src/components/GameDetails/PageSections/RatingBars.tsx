import { useAppSelector } from "@/lib/hooks";
import RatingBar from "./RatingBar";
import Image from "next/image";

type ImageProps = {
  classes: string;
  alt: string;
  initial_width: number;
  initial_height: number;
};

export type BarProps = {
  image_props: ImageProps;
  color: string;
  id: number;
};

export const bars: BarProps[] = [
  {
    image_props: {
      classes: "w-[65px] h-[65px] absolute -bottom-4 -left-[14px]",
      alt: "exceptional",
      initial_width: 65,
      initial_height: 65,
    },
    id: 5,
    color: "bg-[linear-gradient(180deg,#b4ec51,#429321)]",
  },
  {
    image_props: {
      classes: "w-[50px] h-[50px] absolute -bottom-[10px] -left-4",
      alt: "recommended",
      initial_width: 50,
      initial_height: 50,
    },
    id: 4,
    color: "bg-[linear-gradient(0deg,#4354b9,#649bff)]",
  },
  {
    image_props: {
      classes: "w-[50px] h-[50px] absolute -bottom-[10px] -left-4",
      alt: "meh",
      initial_width: 50,
      initial_height: 50,
    },
    id: 3,
    color: "bg-[linear-gradient(180deg,#fad961,#f76b1c)]",
  },
  {
    image_props: {
      classes: "w-12 h-12 absolute -bottom-[10px] -left-4",
      alt: "skip",
      initial_width: 48,
      initial_height: 48,
    },
    id: 1,
    color: "bg-[linear-gradient(180deg,#ff5764,#f11a2a)]",
  },
];

const RatingBars = () => {
  const { ratings, ratings_count } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <>
      {ratings_count ? (
        <>
          <p className="opacity-40 mt-6 mb-2 text-sm">Click to rate</p>
          <div className="flex w-full h-[50px] cursor-pointer mb-4">
            {ratings.map((rating, index) => {
              const bar = bars.find((bar) => bar.id === rating.id) as BarProps;
              return <RatingBar key={index} rating_props={{ ...bar, ...rating }} />;
            })}
          </div>
        </>
      ) : (
        <NoReviews />
      )}
    </>
  );
};

const NoReviews = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-xl font-bold bg-[#7e8181] w-full h-[50px] mb-4 rounded mt-6">
      <Image src="/zzz.webp" alt="zzz" width={32} height={32} />
      <span>No reviews</span>
    </div>
  );
};

export default RatingBars;
