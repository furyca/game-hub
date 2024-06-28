export type ListProps = {
  name: string;
  value: string;
  id?: number;
  expands?: ListProps[];
  secondary?: boolean;
};
export type MenuItemProps = {
  name: string;
  url: string | null;
  viewBox: string;
  d: string;
};

export type GenreLinkProps = {
  name: string;
  icon: string;
  url: string;
};
