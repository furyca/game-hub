import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { masonryOn, masonryOff } from "@/lib/features/visuals/visualslice";
import { memo, RefObject, useCallback, useRef } from "react";
import FilterOption from "./FilterOption";
import PortalContainer from "../Portals/PortalContainer";
import { ordersLong } from "@/lists/orderingLists";
import { platformsShort } from "@/lists/platformLists";
import { setPortal } from "@/lib/features/portals/portalslice";
import { createPortal } from "react-dom";
import { releaseDates } from "@/lists/releaseDates";

const Filters = () => {
  const { masonry } = useAppSelector(({ visual }) => visual);
  const { activePortal } = useAppSelector(({ portal }) => portal);
  const {
    filter: {
      platforms: { name: platform_name },
      parent_platforms: { name: parent_platform_name },
      dates: { name: date_name },
      ordering: { name: order_name },
    },
  } = useAppSelector(({ data }) => data);
  const dispatch = useAppDispatch();
  const orderRef = useRef<HTMLLIElement>(null);
  const platformRef = useRef<HTMLLIElement>(null);
  const dateRef = useRef<HTMLLIElement>(null);

  const styles = useCallback((ref: RefObject<HTMLLIElement>) => {
    return {
      top: ref.current?.offsetTop,
      left: ref.current?.offsetLeft,
      width: ref.current?.offsetWidth,
    }
  },[])

  return (
    <div className="flex justify-between overflow-x-auto">
      <ul className="flex gap-2 items-center h-[55px]">
        <li onClick={() => dispatch(setPortal("order"))} ref={orderRef} className={`${order_name ? "" : "hidden"}`}>
          <FilterOption span1="Order by:" span2={order_name || ""} type="order" />
          {activePortal === "order" &&
            createPortal(<PortalContainer list={ordersLong} styles={styles(orderRef)} />, document.body)}
        </li>
        <li onClick={() => dispatch(setPortal("date"))} ref={dateRef} className={`${date_name ? "" : "hidden"}`}>
          <FilterOption span1="Release Date:" span2={date_name || ""} type="date" />
          {activePortal === "date" &&
            createPortal(
              <PortalContainer
                list={releaseDates}
                styles={styles(dateRef)}
              />,
              document.body
            )}
        </li>
        <li onClick={() => dispatch(setPortal("platform"))} ref={platformRef}>
          <FilterOption
            span1={platform_name ? platform_name : parent_platform_name ? parent_platform_name : "Platforms"}
            span2=""
            type="platform"
          />
          {activePortal === "platform" &&
            createPortal(
              <PortalContainer
                list={platformsShort}
                styles={styles(platformRef)}
              />,
              document.body
            )}
        </li>
      </ul>
      <div className="hidden lg:flex gap-4 items-center">
        <p className="text-sm content-center opacity-40">Display options:</p>
        <div className="flex gap-2">
          <button
            id="Masonry View On"
            className={`w-12 h-12 ${!masonry && "opacity-40 transition-opacity duration-300 hover:opacity-60"}`}
            onClick={() => dispatch(masonryOn())}
            disabled={masonry}
          >
            <Image src="/gridList.svg" alt="" width={56} height={56} />
          </button>
          <button
            id="Masonry View Off"
            className={`w-12 h-12 ${masonry && "opacity-40 transition-opacity duration-300 hover:opacity-60"}`}
            onClick={() => dispatch(masonryOff())}
            disabled={!masonry}
          >
            <Image src="/scrollList.svg" alt="" width={56} height={56} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Filters)
