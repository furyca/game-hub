import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Breadcrumb = () => {
  const { name } = useAppSelector(({ singleGame }) => singleGame);
  return (
    <div className="text-center mb-4 mt-6 lg:mt-0 lg:text-start tracking-[1.7px] uppercase text-[10px] leading-[18px] lg:mb-8 text-white/40">
      <Link href="/" className="transition-all duration-200 hover:text-white">Home </Link>
      / <span className="">{name}</span>
    </div>
  );
};

export default Breadcrumb;