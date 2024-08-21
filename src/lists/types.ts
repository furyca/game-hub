export type ListProps = {
  name: string;
  value: string;
  id?: number | undefined;
  expands?: ListProps[];
  secondary?: boolean;
};
export type MenuItemProps = {
  name: string;
  url: string;
  filter: {
    ordering: { name: string | null; value: string | null };
    dates: { name: string | null; value: string };
    platform: { name: string | null; value: string | null; id: number | null };
    genre: { name: string | null; value: string | null };
  } | null;
  icon: {
    path: string;
    viewBox: string;
    d: string;
  };
};
