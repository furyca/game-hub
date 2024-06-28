export const getRankIcon = (rating: number) => {
  switch (rating) {
    case 5:
      return "/ratings/exceptional.png";
    case 4:
      return "/ratings/recommended.png";
    case 3:
    case 2:
      return "/ratings/meh.png";
    case 1:
      return "/ratings/skip.png";
    default:
      return "";
  }
};
