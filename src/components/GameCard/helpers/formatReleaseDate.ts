export const formatReleaseDate = (dateText: string) => {
  const date = new Date(dateText).toString();
  const day = date.substring(4, 10);
  const year = date.substring(11, 15);

  return `${day}, ${year}`;
};