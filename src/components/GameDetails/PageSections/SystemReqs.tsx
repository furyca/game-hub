import { useAppSelector } from "@/lib/hooks";
import ReadMore from "./ReadMore";
import useToggle from "@/hooks/useToggle";

const SystemReqs = () => {
  const { platforms } = useAppSelector(({ singleGame }) => singleGame);
  const { toggle, handleToggle } = useToggle()

  return (
    <div className="mb-6 lg:mb-0">
      <div
        className={`${
          toggle ||
          "max-h-[140px] overflow-hidden [mask-image:linear-gradient(#000_calc(100%-60px),transparent_calc(100%-4px))]"
        }`}
      >
        {platforms.map((platform) => {
          return (
            <div key={platform.id}>
              <h3 className="text-xl leading-[22px] lg:text-2xl mb-4 lg:font-bold">
                System requirements for {platform.name}
              </h3>
              <p className="text-sm leading-tight tracking-wide">{platform.requirements.minimum}</p>
            </div>
          );
        })}
      </div>
      <ReadMore
        handleToggle={handleToggle}
        styleProps="h-[30px] w-full text-start text-xs tracking-wider transition-all duration-300 hover:text-white/40"
      >
        {toggle ? "Show less..." : "Read more..."}
      </ReadMore>
    </div>
  );
};

export default SystemReqs;
