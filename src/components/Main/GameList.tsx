"use client";
import { useCallback, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import Filters from "../Filters/Filters";
import Masonry from "react-masonry-css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { fetchMore, fetchGames, searchMore } from "@/lib/features/data/dataSlice";
import LoadMore from "../LoadMore";
import { createURL } from "../Portals/helpers/createURL";
import SearchBar from "../Filters/SearchBar";
import Calendar from "../Filters/Calendar";
import { breakpointColumnsObj } from "./helpers/columnBreakpoints";

const GameList = () => {
  const { masonry } = useAppSelector(({ visual }) => visual);
  const { games, filter, page, haveNext, activeQuery, isCalendar, loading } = useAppSelector(({ data }) => data);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {   
    activeQuery || dispatch(fetchGames(createURL(filter)));
  }, [filter]);

  useEffect(() => {
    if (inView && haveNext) {
      activeQuery
        ? dispatch(searchMore({ query: activeQuery, page }))
        : dispatch(fetchMore({ filter: createURL(filter), page }));
    }
  }, [inView]);

  const listGames = useCallback(() => {
    return (
      games.length > 0 &&
      games.map((game, index) => {
        return <GameCard key={index} game={game} />;
      })
    );
  }, [games]);

  return (
    <div className="w-full mt-4">
      {activeQuery ? (
        <SearchBar />
      ) : (
        <>
          {isCalendar && <Calendar />}
          <Filters />
        </>
      )}
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
      <div ref={ref} />
    </div>
  );
};

export default GameList;
