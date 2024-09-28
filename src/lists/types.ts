export type ListProps = {
  name: string;
  value: string;
  id?: number | undefined;
  expands?: ListProps[];
  secondary?: boolean;
};
export type MenuItemProps = {
  name: string;
  title: string;
  subTitle: string;
  url: string;
  filter: {
    ordering: { name: string | null; value: string | null };
    dates: { name: string | null; value: string };
    platform: { name: string | null; value: string | null; id: number | null };
    genres: { name: string | null; value: string | null };
  } | null;
  icon: {
    path: string;
    viewBox: string;
    width: number;
    height: number;
    d: string;
  };
};
