export type SingleGameProps = {
  id: string;
  name: string;
  background_image: string | null;
  description: string;
  developers: string[];
  esrb_rating: ESRBProps | null;
  genres: string[];
  metacritic: number | null;
  parent_platforms: string[]; //for icons
  platforms: PlatformProps[];
  publishers: string[];
  playtime: number | null;
  rating_top: number | null;
  ratings: RatingProps[];
  ratings_count: number | null;
  released: string;
  reviews_count: number | null;
  screenshots: string[];
  stores: StoreProps[];
  updated: string | null;
  website: string;
};

export type ESRBProps = {
  id: number;
  name: string;
};

export type RatingProps = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

export type StoreProps = {
  name: string;
  store_id: number;
};

export type PlatformProps = {
  name: string;
  id: number;
  requirements: {
    minimum: string;
    recommended: string;
  };
};
