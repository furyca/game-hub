import useMainPage from "@/hooks/useMainPage";
import Link from "next/link";

const Logo = () => {
  const handleMainPage = useMainPage();

  return (
    <div className="flex justify-between items-center lg:me-4 h-[60px]">
      <Link href="/" className="pt-[1px] pb-1" onClick={handleMainPage}>
        <span className="me-[18px] text-lg font-black tracking-[5px]">RAWG</span>
      </Link>
    </div>
  );
};

export default Logo;
