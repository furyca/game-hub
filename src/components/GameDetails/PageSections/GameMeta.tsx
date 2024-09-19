import { platformsIcons } from "@/components/GameCard/helpers/platformIcons";
import { convertDateString } from "@/components/Main/helpers/convertDateString";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

const GameMeta = () => {
  const { parent_platforms, playtime, released, name } = useAppSelector(({ singleGame }) => singleGame);
  const icons = platformsIcons.filter((icon) => parent_platforms.includes(icon.slug));

  return (
    <>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 tracking-[2px] mb-3 text-xs uppercase">
        {released && <div className="py-[2px] px-2 bg-white text-black rounded">{convertDateString(released)}</div>}
        {parent_platforms.length > 0 && (
          <div className="flex gap-[10px]">
            {icons.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={`/${icon.icon}`}
                  alt={icon.icon}
                  className="w-4 h-4"
                  width={16}
                  height={16}
                />
              );
            })}
          </div>
        )}
        {!!playtime && <span>AVERAGE PLAYTIME: {playtime} HOURS</span>}
      </div>
      <h1 className="text-4xl lg:text-7xl lg:leading-[74px] text-center lg:text-start font-bold mb-6">{name}</h1>
    </>
  );
};

export default GameMeta;
