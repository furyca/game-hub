"use client";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const { activeQuery } = useAppSelector(({ data }) => data);

  return (
    <div className="text-center lg:text-start px-[10px] lg:px-0">
      {activeQuery ? (
        <></>
      ) : (
        <>
          <h1 className="text-4xl font-bold lg:text-7xl lg:leading-[74px]">New and trending</h1>
          <p className="mt-2 leading-[1.35rem]">Based on player counts and release date</p>
        </>
      )}
    </div>
  );
};

export default Header;
