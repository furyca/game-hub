import { BrowseDataProps, GenreDataProps, MenuDataProps } from "@/components/Menu/types";
import { BrowseLinkProps, GenreLinkProps, MenuItemProps } from "@/lists/types";
import { useEffect, useState } from "react";

const useLongList = ({data}: {data: GenreDataProps | MenuDataProps | BrowseDataProps}) => {
  const [longList, setLongList] = useState(false);
  const [list, setList] = useState<GenreLinkProps[] | MenuItemProps[] | BrowseLinkProps[]>(data.short);
  const haveLong = () => data.long ? true : false;

  useEffect(() => {
    setList(haveLong() && longList ? data.long : data.short);
  }, [longList]);

  const toggleExpand = () => {
    setLongList((prevList) => !prevList);
  };

  return { longList, toggleExpand, haveLong, list };
};

export default useLongList;
