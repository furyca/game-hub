import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RatingProps, SingleGameProps } from "./types";

const initialState: SingleGameProps = {
  id: "",
  name: "",
  background_image: "",
  description: "",
  developers: [],
  esrb_rating: {
    id: 0,
    name: "",
  },
  genres: [],
  metacritic: 0,
  parent_platforms: [],
  platforms: [],
  publishers: [],
  playtime: 0,
  rating_top: 0,
  ratings: [],
  ratings_count: 0,
  released: "",
  reviews_count: null,
  screenshots: [],
  stores: [],
  updated: "",
  website: "",
  loading: false,
};

export const getSingleGame = createAsyncThunk("getSingleGame", async (id: string) => {
  const response = await fetch(`/api/getSingleGame?${id}`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const singleGameSlice = createSlice({
  name: "singleGameSlice",
  initialState,
  reducers: {
    setScreenshots: (state, { payload }) => {
      state.screenshots = payload;
    },
    resetGameState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getSingleGame.pending, (state: SingleGameProps) => {
      state.loading = true;
    });
    builder.addCase(getSingleGame.fulfilled, (state: SingleGameProps, { payload }) => {
      const [game, screenshots] = payload;
      state.id = game.id;
      state.name = game.name;
      state.background_image = game.background_image;
      state.description = game.description;
      state.developers = game.developers?.map((dev: any) => dev.name);
      (state.esrb_rating = {
        id: game.esrb_rating?.id,
        name: game.esrb_rating?.name,
      }),
        (state.genres = game.genres?.map((genre: any) => genre.name));
      state.metacritic = game.metacritic;
      state.parent_platforms = game.parent_platforms?.map(({ platform }: any) => platform.slug);
      state.platforms = game.platforms && Object.keys(game.platforms).map((key) => {
        return {
          name: game.platforms[key].platform.name,
          id: game.platforms[key].platform.id,
          requirements: {
            minimum: game.platforms[key].requirements.minimum,
            recommended: game.platforms[key].requirements.recommended,
          },
        };
      });

      state.publishers = game.publishers?.map((publisher: any) => publisher.name);
      state.playtime = game.playtime;
      state.rating_top = game.rating_top;
      state.ratings = game.ratings ? game.ratings.slice().sort((a: RatingProps, b: RatingProps) => b.id - a.id) : [];
      state.ratings_count = game.ratings_count;
      state.released = game.released;
      state.reviews_count = game.reviews_count;
      state.stores = game.stores && Object.keys(game.stores).map((key) => {
        return {
          name: game.stores[key].store.name,
          store_id: game.stores[key].store.id,
        };
      });
      state.screenshots =
        screenshots.results?.length > 0
          ? screenshots.results.map(({ image }: any, index: number) => {
              if (index === 0) {
                return image.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/420/-/");
              }
              return image.replace("https://media.rawg.io/media/", "https://media.rawg.io/media/resize/200/-/");
            })
          : [];
      state.updated = game.updated;
      state.website = game.website;
      state.loading = false;
    });
  },
});

export const { setScreenshots, resetGameState } = singleGameSlice.actions;
export default singleGameSlice.reducer;
