import { useAppSelector } from "@/lib/hooks";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import { platformsIcons } from "./helpers/platformIcons";
import { getRankIcon } from "./helpers/getRankIcon";
import { formatReleaseDate } from "./helpers/formatReleaseDate";
import { GameProps, GenreProps } from "../Main/types";
import { nanoid } from "nanoid";
import { useInView } from "react-intersection-observer";

const getGenres = (genres: GenreProps[]) => {
  const genreNames = genres.slice(0, 4).map(({ name }) => {
    const key = nanoid();
    return (
      <Link href="/" key={key} className="group transition-all duration-200 hover:text-white/40">
        <span className="underline underline-offset-2">{name}</span>
        <span className="group-last:hidden">, </span>
      </Link>
    );
  });

  return genreNames;
};
const GameCard = memo(({ game }: { game: GameProps }) => {
  const [showScreenshots, setShowScreenshots] = useState<boolean>(false);
  const [currentSs, setCurrentSs] = useState<number>(0);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const parent = useRef<HTMLDivElement>(null);
  const height = parent.current ? parent.current.offsetHeight : 0;
  const platforms = game.parent_platforms ? game.parent_platforms?.map(({ platform }) => platform.slug) : [];
  const background = game.background_image
    ? game.background_image.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/640/-/")
    : null;
  const isMasonry = useAppSelector((state) => state.visual.masonry);
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {
    setScreenshots(
      game.short_screenshots?.length > 0
        ? game.short_screenshots.slice(0, 7).map((ss: any) => {
            return ss.image.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/640/-/");
          })
        : []
    );
  }, []);

  const handleCardEnter = () => {
    setShowScreenshots(true);
  };
  const handleCardLeave = () => {
    setShowScreenshots(false);
  };

  const handleSsEnter = (e: any) => {
    setCurrentSs(+e.target.id);
  };  

  return (
    <div
      className={`${
        !isMasonry && "w-full max-w-[714px]"
      } "bg-[#202020] rounded-xl group/card relative mt-6 transition-all duration-300"`}
      style={{ height: height > 0 ? height : "auto" }}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      ref={parent}
    >
      <div className="group-hover/card:absolute  group-hover/card:z-10 bg-[#202020] transition-all duration-300 rounded-xl w-full top-0 left-0 group-hover/card:scale-[1.02]">
        <div className="flex justify-center items-center relative h-0 pb-[56.25%]">
          {showScreenshots && screenshots.length > 0 ? (
            screenshots.map((image: string, index: number) => {
              const key = nanoid();
              return (
                <Image
                  key={key}
                  loader={() => image}
                  unoptimized
                  priority={inView}
                  src={image}
                  alt={image}
                  width={600}
                  height={400}
                  className={`${
                    currentSs !== index ? "hidden" : "block"
                  } rounded-t-xl w-full h-full bg-[50%] bg-cover bg-no-repeat absolute top-0 left-0`}
                />
              );
            })
          ) : background ? (
            <Image
              loader={() => background}
              unoptimized
              priority={inView}
              src={background}
              alt={game.name}
              width={600}
              height={400}
              className={`${
                showScreenshots ? "hidden" : "block"
              } rounded-t-xl w-full h-full bg-[50%] bg-cover bg-no-repeat absolute top-0 left-0`}
            />
          ) : (
            <></>
          )}
          <div className="absolute right-0 left-0 top-0 w-full h-full px-4 ">
            <div className="relative h-full w-full flex gap-2 invisible group-hover/card:visible">
              {screenshots.map((ss) => {
                const key = nanoid();
                return (
                  <div
                    className="relative w-full h-full group/ssicon"
                    key={key}
                    id={screenshots.indexOf(ss).toString()}
                    onMouseEnter={handleSsEnter}
                  >
                    <span className="absolute bottom-4 w-full h-1 rounded bg-white/40 transition-all duration-300 group-hover/ssicon:bg-white/70"></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom of the game card */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm gap-1">
              {platforms
                ?.map((platform) => {
                  const platformIcon = platformsIcons.find((platformIcon) => platformIcon.slug === platform);

                  if (platformIcon) {
                    const key = nanoid();
                    return (
                      <Image
                        key={key}
                        src={platformIcon.icon}
                        alt={platformIcon.icon}
                        className="w-[17px] h-[13px]"
                        width={17}
                        height={13}
                      />
                    );
                  }
                })
                .slice(0, 5)}
              {platforms?.length > 6 && <span>+{platforms.length - 5}</span>}
            </div>
            {game.metacritic && (
              <div className="py-[2px] font-bold text-sm text-[#6dc849] border-[#6dc84966] border rounded-[4px] min-w-8 text-center leading-[1.15]">
                {game.metacritic}
              </div>
            )}
          </div>
          <div className="my-2 ">
            <Link href="/" className="hover:opacity-40 transition-all duration-200">
              <h5 className="text-2xl font-bold inline my-2 me-2 leading-none">{game.name}</h5>
              {game.rating_top > 0 && (
                <Image
                  src={getRankIcon(game.rating_top)}
                  alt={game.rating_top.toString()}
                  className={`${game.rating_top === 5 ? "w-[30px] h-[30px]" : "w-[22px] h-[22px]"} inline align-bottom`}
                  width={30}
                  height={30}
                />
              )}
            </Link>
          </div>
          <div className="flex gap-1">
            <button className="py-0 px-2 h-6 rounded bg-white/[.1] text-xs flex justify-center items-center transition-all duration-200 group/button hover:bg-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="w-3 h-3 me-[6px]">
                <g fill="#fff" fillRule="evenodd" className="group-hover/button:fill-black">
                  <rect width="3" height="12" x="4.5" rx=".75"></rect>
                  <rect width="3" height="12" x="4.5" rx=".75" transform="rotate(-90 6 6)"></rect>
                </g>
              </svg>
              <span>{(game.added - game.added_by_status?.toplay).toString()}</span>
            </button>
            <button className="py-0 px-2 h-6 rounded flex justify-center items-center bg-white/[.1] text-xs transition-all duration-200 group/button hover:bg-white hover:text-black opacity-0 group-hover/card:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="w-5 h-5">
                <path
                  fill="#FFF"
                  className="group-hover/button:fill-black"
                  d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"
                ></path>
              </svg>
            </button>
            <button className="py-0 px-2 h-6 rounded flex justify-center items-center bg-white/[.1] text-xs transition-all duration-200 opacity-0 hover:bg-white hover:text-black group-hover/card:opacity-100">
              <FontAwesomeIcon icon={faEllipsis} height={16} width={16} className="w-4 h-4 align-bottom" />
            </button>
          </div>
          <ul>
            <li className="hidden group-hover/card:flex justify-between py-3 text-xs border-b border-white/10">
              <span className="flex text-white/40">Release Date:</span>
              <span>{formatReleaseDate(game.released)}</span>
            </li>
            <li className="hidden group-hover/card:flex justify-between py-3 text-xs border-b border-white/10">
              <span className="flex text-white/40">Genres:</span>
              <span>{getGenres(game.genres)}</span>
            </li>
            <li className="hidden group-hover/card:flex justify-between pt-3 text-xs">
              <span className="flex text-white/40">Chart:</span>
              <span>unknown</span>
            </li>
          </ul>
          <Link
            href="/"
            className="bg-white/10 text-white transition-all duration-300 w-full justify-between text-sm py-3 px-4 mt-4 rounded-lg hidden group-hover/card:flex hover:text-[#fad860]"
          >
            <span className="">Show more like this:</span>
            <svg
              viewBox="0 0 19 35"
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-20 w-3 h-[18px]"
            >
              <path
                d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"
                fill="#FFF"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div ref={ref} />
    </div>
  );
});

GameCard.displayName = "GameCard";

export default GameCard;
