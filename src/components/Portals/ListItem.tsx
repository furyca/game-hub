import { useState } from "react";
import PortalContainer from "./PortalContainer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setDates, setOrdering, setParentPlatforms, setPlatforms } from "@/lib/features/data/dataSlice";
import { setDateName, setOrderName, setPlatformName } from "@/lib/features/filters/filterslice";
import { ListProps } from "@/lists/types";

const ListItem = ({ name, value, id, expands, secondary }: ListProps) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();
  const { activePortal } = useAppSelector(({ portal }) => portal);
  const {
    filter: { platforms, parent_platforms, dates, ordering },
  } = useAppSelector(({ data }) => data);

  const isSelected = () => {
    switch (activePortal) {
      case "platform":
        return secondary ? platforms === id : parent_platforms === id;
      case "date":
        return dates === value;
      case "order":
        return ordering === value;
      default:
        return false;
    }
  };

  const changeSelection = () => {
    switch (activePortal) {
      case "platform":
        secondary ? dispatch(setPlatforms(id as number)) : dispatch(setParentPlatforms(id as number));
        dispatch(setPlatformName(name));
        break;
      case "date":
        dispatch(setDates(value));
        dispatch(setDateName(name));
        break;
      case "order":
        dispatch(setOrdering(value));
        dispatch(setOrderName(name));
        break;
      default:
        break;
    }
  };

  return (
    <li
      className={`${
        secondary ? "ps-[5px] py-[5px] pe-[25px]" : "px-[10px] h-5 my-[5px]"
      } w-full leading-[20px] rounded hover:bg-black/10 transition-all duration-300 cursor-pointer relative`}
      onMouseEnter={expands ? () => setExpanded(true) : undefined}
      onMouseLeave={expands ? () => setExpanded(false) : undefined}
    >
      <div className="whitespace-nowrap flex items-center justify-between" onClick={changeSelection}>
        <span>{name}
        {isSelected() && (
          <div className="inline-block ms-1 w-[13px] h-[9px] bg-no-repeat bg-[center_50%] bg-cover bg-[url(/tick.svg)]" />
        )}</span>
        {expands && (
          <svg
            viewBox="0 0 19 35"
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black/40"
          >
            <path
              d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"
            />
          </svg>
        )}
      </div>
      {expanded && (
        <PortalContainer
          list={expands as ListProps[]}
          styles={{ top: -10, left: "calc(100% - 20px)" }}
          secondary={true}
          parentVal={activePortal === "platform" ? id : value}
          parentName={name}
        />
      )}
    </li>
  );
};

export default ListItem;
