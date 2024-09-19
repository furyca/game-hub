import { useAppSelector } from "@/lib/hooks";
import ReadMore from "./ReadMore";
import useToggle from "@/hooks/useToggle";

const AboutGame = () => {
  const { description } = useAppSelector(({ singleGame }) => singleGame);
  const { toggle, handleToggle } = useToggle()

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-2">About</h3>
      <div
        className={`${!toggle && "line-clamp-[8]"} text-sm lg:text-base lg:leading-[22px]`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ReadMore
        handleToggle={handleToggle}
        styleProps="inline-flex items-center text-xs h-[14px] px-[5px] pb-[1px] rounded-sm bg-white text-black transition-all duration-300 hover:bg-white/50"
      >
        {toggle ? "Show less" : "Read more"}
      </ReadMore>
    </div>
  );
};

export default AboutGame;
