import Image from "next/image";
import Link from "next/link";
import { BrowseCardProps } from "../Main/types";
import { memo } from "react";
import { useInView } from "react-intersection-observer";

const BrowseCard = ({ name, type, image_background, games, image, games_count }: BrowseCardProps) => {
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });
  const background =
    image_background &&
    image_background.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/640/-/");

  return (
    <div
      className={`${
        type === "creators" ? "min-h-[430px]" : "h-80"
      } text-wrap py-8 px-6 rounded-md bg-center bg-cover bg-no-repeat flex flex-col justify-between grow`}
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${background})`,
      }}
    >
      <div>
        <div className={`my-4 ${type === "creators" ? "text-center" : "flex justify-center"}`}>
          {image && (
            <Image
              loader={() => image}
              unoptimized
              priority={inView}
              src={image}
              alt="pp"
              width={0}
              height={0}
              className="mb-4 rounded-full mx-auto h-32 w-32"
            />
          )}
          <Link
            href=""
            className="font-bold leading-7 text-2xl border-b-2 border-white/40 transition-all duration-200 hover:text-white/40"
          >
            {name}
          </Link>
        </div>
        <div className="mb-6 text-center">
          <button className="bg-white/10 px-[35px] py-[10px] rounded leading-[normal] transition-all duration-200 hover:text-black hover:bg-white">
            Follow
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between leading-5">
          <span className="text-base font-bold">{type === "creators" ? "Known for" : "Popular items"}</span>
          <span className="text-sm text-white/40">{games_count}</span>
        </div>
        <ul className="border-t border-white/10 pt-2 mt-2 leading-5">
          {games?.map(({ name, added }, index) => (
            <li key={index} className="flex justify-between text-sm mb-[6px]">
              <Link
                href="/"
                className="max-w-[80%] text-ellipsis whitespace-nowrap overflow-hidden text-sm leading-[1.] transition-all duration-200 hover:text-white/40"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 1px,hsla(0,0%,100%,0) 0)",
                }}
              >
                {name}
              </Link>
              <span className="text-white/40">{added}</span>
            </li>
          ))}
        </ul>
      </div>
      <div ref={ref}/>
    </div>
  );
};

export default memo(BrowseCard);
