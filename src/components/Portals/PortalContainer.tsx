import useClickOutside from "@/hooks/useClickOutside";
import ListItem from "./ListItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearPortal } from "@/lib/features/portals/portalslice";
import { nanoid } from "nanoid";
import { setDateName, setPlatformName } from "@/lib/features/filters/filterslice";
import { setDates, setParentPlatforms, setPlatforms } from "@/lib/features/data/dataSlice";
import { PortalProps } from "./types";

const PortalContainer = ({ list, styles, secondary, parentVal, parentName }: PortalProps) => {
  const dispatch = useAppDispatch();
  const { activePortal } = useAppSelector(({ portal }) => portal);
  const { filter } = useAppSelector(({ data }) => data);
  const outDiv = useClickOutside(() => {
    return !secondary ? dispatch(clearPortal()) : null;
  });
  const haveFilter = () => {
    return (
      ((activePortal === "platform" && (filter.parent_platforms || filter.platforms)) ||
      (activePortal === "date" && filter.dates)) && !secondary
    );
  };

  const clearSelection = () => {
    switch (activePortal) {
      case "date":
        dispatch(setDateName(null));
        dispatch(setDates(null));
        break;
      case "platform":
        dispatch(setPlatformName(null));
        dispatch(setPlatforms(null));
        dispatch(setParentPlatforms(null));
        break;
      default:
        break;
    }
  };

  const selectParent = () => {
    switch (activePortal) {
      case "date":
        dispatch(setDateName(parentName));
        dispatch(setDates(parentVal));
        break;
      case "platform":
        dispatch(setPlatformName(parentName));
        dispatch(setPlatforms(null));
        dispatch(setParentPlatforms(parentVal));
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="min-w-[130px] z-10 rounded bg-white text-black absolute animate-fade shadow-[-1px_1px_5px_rgba(0,0,0,.2)]"
      style={{ top: styles?.top, left: styles?.left, width: styles?.width }}
      ref={outDiv}
    >
      <ul className={`${secondary ? "px-[7px] pb-[5px]" : "px-[10px] pb-[10px]"} pt-[5px] text-xs w-full`}>
        {
          <>
            {activePortal === "platform" && !secondary && (
              <div className="pt-3 text-sm px-[10px] text-black/50">Platforms</div>
            )}
            {haveFilter() && (
              <li className="text-[#fc4531] border-b border-black/10 my-[5px] h-5 text-xs px-[10px] pb-[6px] flex items-center">
                <button className="w-full text-start h-5 leading-[20px]" onClick={clearSelection}>
                  Clear
                </button>
              </li>
            )}
          </>
        }
        {list.map(({ name, value, id, expands }) => {
          return <ListItem key={nanoid()} name={name} id={id} value={value} expands={expands} secondary={secondary} />;
        })}
        {secondary && (
          <button
            className="text-[#31a94b] border-t border-[#dedede] mt-1 ps-[5px] py-[5px] pe-[25px]"
            onClick={selectParent}
          >
            Select all
          </button>
        )}
      </ul>
    </div>
  );
};

export default PortalContainer;
