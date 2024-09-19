import Image from "next/image";
import { useCallback } from "react";
import { getRankProps } from "@/components/GameCard/helpers/getRankProps";
import { BarProps } from "./RatingBars";
import { RatingProps } from "@/lib/features/singleGame/types";

const RatingBar = ({ rating_props }: { rating_props: BarProps & RatingProps }) => {
  const {image_props} = rating_props
  const assignBarWidth = useCallback(() => {
    const multiplier = 5.28;
    return Math.round(multiplier * rating_props.percent);
  }, [rating_props]);

  return (
    <div
      className={`relative h-full overflow-hidden first:rounded-l last:rounded-r hover:shadow-[0_0_10px_0_#fff] ${rating_props.color}`}
      style={{
        width: assignBarWidth(),
      }}
    >
      {assignBarWidth() > 79 && (
        <Image
          src={getRankProps(rating_props.id).icon}
          alt={image_props.alt}
          className={image_props.classes}
          width={image_props.initial_width}
          height={image_props.initial_height}
        />
      )}
    </div>
  );
};

export default RatingBar;
