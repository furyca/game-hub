"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { breakpointColumnsBrowse } from "./helpers/columnBreakpoints";
import { BrowseCardProps } from "./types";
import { useInView } from "react-intersection-observer";
import { setActivePath } from "@/lib/features/browse/browseSlice";
import { BrowsePropsKey } from "@/lib/features/browse/types";
import { browseOne, browseOneMore } from "@/lib/features/browse/thunks";
import dynamic from "next/dynamic";
const LoadMore = dynamic(() => import("../LoadMore"))
const BrowseCard = dynamic(() => import("../BrowseCard/BrowseCard"))

const SubBrowseList = () => {
  const dispatch = useAppDispatch();
  const { browse, loading, page, activePath } = useAppSelector(({ browse }) => browse);
  const pathname = usePathname();
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });
  const browseStr = pathname.slice(1) as BrowsePropsKey;

  useEffect(() => {
    if (activePath) {
      browse[activePath].count || dispatch(browseOne({ path: browseStr }));
    }
  }, [activePath, dispatch, browseStr]);

  useEffect(() => {
    if (inView && browse[browseStr]?.haveNext) {
      dispatch(browseOneMore({ page, path: browseStr }));
    }
  }, [inView, page, dispatch, browseStr]);

  useEffect(() => {
    dispatch(setActivePath(browseStr));
  }, [browseStr]);
    
  return (
    <div className="mt-8">
      <Masonry
        breakpointCols={breakpointColumnsBrowse}
        className="flex -ms-6 w-auto min-h-[120vh]"
        columnClassName="ps-6 bg-clip-padding"
      >
        {browse[browseStr].results &&
          browse[browseStr].results.map((item: BrowseCardProps, index) => {
            return (
              <div key={index} className="mb-6">
                <BrowseCard
                  id={item.id}
                  name={item.name}
                  type={pathname.slice(1)}
                  image_background={item.image_background}
                  games={item.games?.slice(0, 3)}
                  image={item.image || null}
                  games_count={item.games_count}
                />
              </div>
            );
          })}
        <div ref={ref} />
      </Masonry>
      {loading === "pending" && <LoadMore />}
    </div>
  );
};

export default SubBrowseList;
