import useWideScreen from "@/hooks/useWideScreen";
import { useAppSelector } from "@/lib/hooks";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Screenshot = ({ ss, w, h }: { ss: string; w: number; h: number }) => {
  return (
    <Image
      loader={() => ss}
      src={ss}
      alt={ss}
      className={`max-w-none w-auto h-auto rounded-md cursor-pointer me-4 lg:me-0 lg:mt-4 first:mt-0 [&:nth-child(3)]:ms-4`}
      unoptimized
      width={0}
      height={0}
      style={{ width: w, height: h }}
    />
  );
};

const GameScreenshots = () => {
  const { screenshots } = useAppSelector(({ singleGame }) => singleGame);
  const wideScreen = useWideScreen()

  return (
    <div className="flex overflow-auto lg:flex-wrap mb-8">
      {screenshots.length > 0 && (
        <>
          <Screenshot ss={screenshots[0]} w={wideScreen ? 384 : 264} h={wideScreen ? 216 : 148} />
          <Screenshot ss={screenshots[1]} w={wideScreen ? 184 : 264} h={wideScreen ? 102 : 148} />
          <Screenshot ss={screenshots[2]} w={wideScreen ? 184 : 264} h={wideScreen ? 102 : 148} />
          <Screenshot ss={screenshots[3]} w={wideScreen ? 184 : 264} h={wideScreen ? 102 : 148} />
        </>
      )}

      <div
        className="flex items-center flex-col justify-center lg:mt-4 ms-4 rounded-md min-w-[184px] w-[184px] h-auto lg:h-[102px] opacity-30 cursor-pointer group hover:opacity-50"
        style={{
          background: screenshots.length ? `url(${screenshots[4]}) no-repeat center center/cover` : "/",
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} size="xl" width={20} />
        <span className="text-xs">view all</span>
      </div>
    </div>
  );
};

export default GameScreenshots;
