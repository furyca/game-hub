import { GameProps } from "@/components/Main/types";

export type FilterProps = {
  parent_platforms: number | null;
  platforms: number | null;
  dates: string | null;
  ordering: string | null;
};

export type DataState = {
  games: GameProps[];
  filter: FilterProps;
  haveNext: boolean;
  page: number;
  loading: "idle" | "pending";
  loadingMore: "idle" | "pending";
};
