import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ListProps } from "@/lists/types";
import { setFilters } from "@/lib/features/data/dataSlice";
import dynamic from "next/dynamic";
const PortalContainer = dynamic(() => import("./PortalContainer"))

const ListItem = ({ name, value, id, expands, secondary }: ListProps) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();
  const { activePortal } = useAppSelector(({ portal }) => portal);
  const {
    filter,
    filter: {
      platforms: { id: platformID },
      parent_platforms: { id: parent_platformID },
      dates: { value: dateVal },
      ordering: { value: orderVal },
    },
  } = useAppSelector(({ data }) => data);

  const isSelected =
    {
      platform: secondary ? platformID === id : parent_platformID === id,
      date: dateVal === value,
      order: orderVal === value,
    }[activePortal] || false;

  const changeSelection =
    {
      platform: () =>
        secondary
          ? dispatch(
              setFilters({
                ...filter,
                parent_platforms: { id: null, name: null, value: null },
                platforms: { id, name, value },
              })
            )
          : dispatch(
              setFilters({
                ...filter,
                parent_platforms: { id, name, value },
                platforms: { id: null, name: null, value: null },
              })
            ),
      date: () => dispatch(setFilters({ ...filter, dates: { name, value } })),
      order: () => dispatch(setFilters({ ...filter, ordering: { name, value } })),
    }[activePortal] || (() => {});

  return (
    <li
      className={`${
        secondary ? "ps-[5px] py-[5px] pe-[25px]" : "px-[10px] h-5 my-[5px]"
      } w-full leading-[20px] rounded hover:bg-black/10 transition-all duration-300 cursor-pointer relative`}
      onMouseEnter={expands ? () => setExpanded(true) : undefined}
      onMouseLeave={expands ? () => setExpanded(false) : undefined}
    >
      <div className="whitespace-nowrap flex items-center justify-between" onClick={changeSelection}>
        <span>
          {name}
          {isSelected && (
            <div className="inline-block ms-1 w-[13px] h-[9px] bg-no-repeat bg-[center_50%] bg-cover bg-[url(/tick.svg)]" />
          )}
        </span>
        {expands && (
          <svg viewBox="0 0 19 35" width="8" height="8" xmlns="http://www.w3.org/2000/svg" className="fill-black/40">
            <path d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z" />
          </svg>
        )}
      </div>
      {expanded && (
        <PortalContainer
          list={expands as ListProps[]}
          styles={{ top: -10, left: "calc(100% - 20px)" }}
          secondary={true}
          parentID={activePortal === "platform" ? id : undefined}
          parentVal={value}
          parentName={name}
        />
      )}
    </li>
  );
};

export default ListItem;
