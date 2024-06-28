"use client";
import { useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import Filters from "../Filters/Filters";
import Masonry from "react-masonry-css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { fetchMore, fetchGames } from "@/lib/features/data/dataSlice";
import LoadMore from "../LoadMore";
import { createURL } from "../Portals/helpers/createURL";

const breakpointColumnsObj = {
  default: 4,
  1440: 3,
  1280: 2,
  1024: 1,
};

const GameList = () => {
  const { masonry } = useAppSelector(({ visual }) => visual);
  const { games, filter, page, haveNext, loading, loadingMore } = useAppSelector(({ data }) => data);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {
    dispatch(fetchGames(createURL(filter)));
  }, [filter]);

  useEffect(() => {
    if (inView && haveNext) {
      dispatch(fetchMore({ filter: createURL(filter), page }));
    }
  }, [inView, haveNext]);

  const listGames = () => {
    return (
      games.length > 0 &&
      games.map((game, index) => {
        return <GameCard key={index} game={game} />;
      })
    );
  };

  return (
    <div className="w-full mt-4">
      <Filters />
      {loading === "pending" && <LoadMore />}
      {masonry ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ms-6 w-auto min-h-[120vh]"
          columnClassName="ps-6 bg-clip-padding"
        >
          {listGames()}
        </Masonry>
      ) : (
        <div className="flex flex-col items-center">{listGames()}</div>
      )}
      {loadingMore === "pending" && <LoadMore />}
      <div ref={ref} />
    </div>
  );
};

export default GameList;
