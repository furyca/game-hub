type RankProps = {
  name: string;
  icon: string;
};

type RatingObj = {
  [key: number]: RankProps;
};

export const getRankProps = (rating: number) => {
  const ratingObj: RatingObj = {
    5: {
      name: "Exceptional",
      icon: "/ratings/exceptional.png",
    },
    4: {
      name: "Recommended",
      icon: "/ratings/recommended.png",
    },
    3: {
      name: "Meh",
      icon: "/ratings/meh.png",
    },
    1: {
      name: "Skip",
      icon: "/ratings/skip.png",
    },
  };

  return ratingObj[rating];
};
