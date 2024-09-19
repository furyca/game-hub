import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { getRankProps } from "@/components/GameCard/helpers/getRankProps";

const Ratings = () => {
  const { rating_top, ratings_count } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <>
      <div className="flex justify-center lg:justify-normal">
        <h2 className="text-2xl font-bold lg:pb-2 tracking-wide">
          {rating_top ? getRankProps(rating_top).name : "Not rated yet"}
        </h2>
        <Image
          src={rating_top ? getRankProps(rating_top).icon : "/zzz.webp"}
          alt="rating_icon"
          className="w-8 h-8 ms-2"
          width={32}
          height={32}
        />
      </div>
      <Link
        href=""
        className="block text-center lg:inline lg:text-start uppercase text-white/40 text-xs tracking-[3px] underline underline-offset-2 transition-all duration-200 hover:text-white"
      >
        {ratings_count ? <span>{ratings_count} Ratings</span> : <span>NOT ENOUGH RATINGS (0)</span>}
      </Link>
    </>
  );
};

export default Ratings;
