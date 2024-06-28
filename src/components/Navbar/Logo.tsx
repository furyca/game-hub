import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-between items-center lg:me-4 h-[60px]">
      <Link href="/" className="pt-[1px] pb-1">
        <div className="me-[18px] text-lg font-black tracking-[5px]">RAWG</div>
      </Link>
    </div>
  );
};

export default Logo;