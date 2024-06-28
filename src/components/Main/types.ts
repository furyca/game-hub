export type GameProps = {
  id: string
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
