import { GameProps } from "@/components/Main/types";

export type FilterProps = {
  parent_platforms: {
    id: number | null;
    name: string | null;
    value: number | null;
  };
  platforms: {
    id: number | null;
    name: string | null;
    value: number | null;
  };
  dates: {
    name: string | null;
    value: string | null;
  };
  ordering: {
    name: string | null;
    value: string | null;
  };
  genres: {
    name: string | null
    value: string | null
  }
};

export type DataState = {
  games: GameProps[];
  filter: FilterProps;
  isCalendar: boolean;
  haveNext: boolean;
  page: number;
  loading: "idle" | "pending";
};
