import useWideScreen from "@/hooks/useWideScreen";
import { useAppSelector } from "@/lib/hooks";

const GameBackground = () => {
  const { background_image } = useAppSelector(({ singleGame }) => singleGame);
  const wideScreen = useWideScreen();
  const bg = wideScreen
    ? background_image?.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/640/-/")
    : background_image;

  return (
    <div
      className="absolute top-0 left-0 -z-10 w-full h-[300px] lg:h-[500px]"
      style={{
        background: "no-repeat top",
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${bg})`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default GameBackground;
