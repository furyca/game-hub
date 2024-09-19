export const convertDateString = (date: string) => {
  // date format "YYYY-MM-DD"

  const dateObj = new Date(date);

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };

  return dateObj.toLocaleDateString("en-US", options);
};
