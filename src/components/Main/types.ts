export type GameProps = {
  id: string;
  short_screenshots: ScreenshotProps[];
  background_image: string;
  parent_platforms: PlatformProps[];
  name: string;
  metacritic: number;
  rating_top: number;
  added: number;
  added_by_status: {
    toplay: number;
  };
  released: string;
  genres: GenreProps[];
};

export type BrowseCardProps = {
  id?: number;
  name: string;
  type: string;
  image: string | null;
  image_background: string;
  games: { name: string; added: number; id: number }[];
  games_count: number;
};

export type PlatformProps = {
  platform: {
    slug: string;
  };
};

export type ScreenshotProps = {
  image: string;
};

export type GenreProps = {
  name: string;
};
