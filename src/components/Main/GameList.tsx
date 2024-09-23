"use client";
import { useCallback, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import Filters from "../Filters/Filters";
import Masonry from "react-masonry-css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import LoadMore from "../LoadMore";
import { createURL } from "../Portals/helpers/createURL";
import SearchBar from "../Filters/SearchBar";
import Calendar from "../Filters/Calendar";
import { breakpointColumnsObj } from "./helpers/columnBreakpoints";
import { fetchInitialGames, fetchMoreGames, searchMoreGames } from "@/lib/features/data/thunks";

const GameList = () => {
  const { masonry } = useAppSelector(({ visual }) => visual);
  const { games, filter, page, haveNext, isCalendar, loading } = useAppSelector(({ data }) => data);
  const { activeQuery } = useAppSelector(({ input }) => input);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {
    const mobileView = window.innerWidth < 1025;
    activeQuery || dispatch(fetchInitialGames({ filter: createURL(filter), size: mobileView ? 5 : 10 }));
  }, [filter, dispatch]);

  useEffect(() => {
    if (inView && haveNext) {
      activeQuery
        ? dispatch(searchMoreGames({ query: activeQuery, page }))
        : dispatch(fetchMoreGames({ filter: createURL(filter), page }));
    }
  }, [inView, dispatch]);

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
      {haveNext ? <LoadMore /> : <div className="mb-8"/>}
      <div ref={ref} data-testid="load-more-trigger" />
    </div>
  );
};

export default GameList;
