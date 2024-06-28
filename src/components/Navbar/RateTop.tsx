import Image from "next/image";
import Link from "next/link";

const RateTop = () => {
  return (
    <Link href="" className="flex justify-between items-center pe-2 h-full">
      <Image className="h-[28px] w-auto lg:h-[18px] mr-1 self-end" alt="" src="/temp.png" width={18} height={18} />
      Rate top games
    </Link>
  );
};

export default RateTop;
