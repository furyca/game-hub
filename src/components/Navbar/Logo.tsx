import useClearSearch from "@/hooks/useClearSearch";
import { setHeader } from "@/lib/features/portals/portalslice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";

const Logo = () => {
  const dispatch = useAppDispatch();
  const { clearSearch } = useClearSearch();

  const handleClick = () => {
    clearSearch()
    dispatch(setHeader({ header: "New and trending", subHeader: "Based on player counts and release date" }));
  };

  return (
    <div className="flex justify-between items-center lg:me-4 h-[60px]">
      <Link href="/" className="pt-[1px] pb-1" onClick={handleClick}>
        <div className="me-[18px] text-lg font-black tracking-[5px]">RAWG</div>
      </Link>
    </div>
  );
};

export default Logo;
