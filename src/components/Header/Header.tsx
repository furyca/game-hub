"use client";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const { activeQuery } = useAppSelector(({ input }) => input);
  const { header, subHeader } = useAppSelector(({ portal }) => portal);
  return (
    <div className="text-center lg:text-start px-[10px] lg:px-0">
      {!activeQuery && (
        <>
          <h1 className="text-4xl font-bold lg:text-7xl lg:leading-[74px] mb-4 lg:mb-0">{header}</h1>
          {subHeader && <p className="mt-2 leading-[1.35rem] line-clamp-3 xl:line-clamp-none">{subHeader}</p>}
        </>
      )}
    </div>
  );
};

export default Header;
