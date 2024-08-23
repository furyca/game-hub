"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { breakpointColumnsBrowse } from "./helpers/columnBreakpoints";
import BrowseCard from "../BrowseCard/BrowseCard";
import { BrowseCardProps } from "./types";
import { useInView } from "react-intersection-observer";
import LoadMore from "../LoadMore";
import { fetchOne, fetchOneMore, setActivePath } from "@/lib/features/browse/browseSlice";
import { BrowseItem, BrowsePropsKey } from "@/lib/features/browse/types";

const SubBrowseList = () => {
  const dispatch = useAppDispatch();
  const { browse, loading, page, activePath } = useAppSelector(({ browse }) => browse);
  const pathname = usePathname();
  const [list, setList] = useState<null | []>(null);
  const [path, setPath] = useState<null | BrowseItem>(null);
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {
    if (activePath) {
      browse[activePath].count || dispatch(fetchOne({ path: pathname }));
    }
  }, [path]);

  useEffect(() => {
    if (inView && path?.haveNext) {
      dispatch(fetchOneMore({ page, path: pathname }));
    }
  }, [inView]);

  useEffect(() => {
    const browseStr = pathname.slice(1) as BrowsePropsKey;
    setList(browse[browseStr].results);
    setPath(browse[browseStr]);
    dispatch(setActivePath(browseStr));
  }, [browse]);

  return (
    <div className="mt-8">
      <Masonry
        breakpointCols={breakpointColumnsBrowse}
        className="flex -ms-6 w-auto min-h-[120vh]"
        columnClassName="ps-6 bg-clip-padding"
      >
        {list &&
          list.map((item: BrowseCardProps, index) => {
            return (
              <div key={index} className="mb-6">
                <BrowseCard
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
        {loading === "pending" && <LoadMore />}
        <div ref={ref} />
      </Masonry>
    </div>
  );
};

export default SubBrowseList;
