"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useEffect, useState } from "react";
import BrowseCard from "../BrowseCard/BrowseCard";
import BrowseHeading from "../BrowseCard/BrowseHeading";
import { BrowseCardProps } from "./types";
import { BrowsePropsKey } from "@/lib/features/browse/types";
import { browseAll } from "@/lib/features/browse/browseSlice";
import LoadMore from "../LoadMore";

const BrowseList = () => {
  const dispatch = useAppDispatch();
  const { browse } = useAppSelector(({ browse }) => browse);
  const [amount, setAmount] = useState(2);
  const [gridCols, setGridCols] = useState("grid-cols-2");

  useEffect(() => {
    let needFetch: boolean = false;
    for (const key in browse) {
      if (browse[key as BrowsePropsKey].count === 0) {
        needFetch = true;
        dispatch(browseAll());
        break;
      }
    }
  }, []);

  useEffect(() => {
    handleAmount();
  }, []);

  const handleAmount = useCallback(() => {
    if (window.innerWidth < 1025) {
      setGridCols("grid-cols-8");
      setAmount(8);
    } else if (window.innerWidth < 1472) {
      setGridCols("grid-cols-3");
      setAmount(3);
    } else if (window.innerWidth < 1940) {
      setGridCols("grid-cols-4");
      setAmount(4);
    } else {
      setGridCols("grid-cols-5");
      setAmount(5);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleAmount);

    return () => {
      window.removeEventListener("resize", handleAmount);
    };
  }, [handleAmount]);

  return (
    <div className="mt-8">
      {Object.entries(browse).map(([key, value]) => {
        return (
          <div key={key} className="mb-10">
            {value.count ? <BrowseHeading name={key} count={value.count} /> : <LoadMore />}
            <div className={`lg:grid ${gridCols} whitespace-nowrap pb-4 gap-x-6 overflow-x-auto`}>
              {value.results.slice(0, amount).map((result: BrowseCardProps) => (
                <div key={result.id} className="inline-block lg:block me-4 lg:me-0">
                  <BrowseCard
                    name={result.name}
                    type={key}
                    image_background={result.image_background}
                    games={result.games?.slice(0, 3)}
                    image={result.image ? result.image : null}
                    games_count={result.games_count}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrowseList;
