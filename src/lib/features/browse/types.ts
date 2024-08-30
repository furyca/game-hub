export type BrowseProps = {
  platforms: BrowseItem;
  genres: BrowseItem;
  tags: BrowseItem;
  creators: BrowseItem;
  developers: BrowseItem;
  publishers: BrowseItem;
  stores: BrowseItem;
};

export type BrowsePropsKey = keyof BrowseProps;

export type BrowseItem = {
  count: number;
  haveNext: boolean;
  results: [];
};

export type BrowseState = {
  browse: BrowseProps;
  activePath: BrowsePropsKey | null;
  page: number;
  loading: "idle" | "pending" | "error";
};
