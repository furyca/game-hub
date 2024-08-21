import { clearAllFilters } from "@/lib/features/data/dataSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";

const Logo = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex justify-between items-center lg:me-4 h-[60px]">
      <Link href="/" className="pt-[1px] pb-1" onClick={() => dispatch(clearAllFilters())}>
        <div className="me-[18px] text-lg font-black tracking-[5px]">RAWG</div>
      </Link>
    </div>
  );
};

export default Logo;