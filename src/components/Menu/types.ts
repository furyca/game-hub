import { GenreLinkProps, MenuItemProps } from "@/lists/types";

export type GenreMenuProps = {
  header: string;
  data: GenreDataProps;
  url: string;
};

export type GenreDataProps = {
  short: GenreLinkProps[];
  long: GenreLinkProps[];
};

export type HeadLinkProps = {
  name: string;
  url: string;
};
export type SubMenuProps = {
  header: string;
  data: MenuDataProps;
  url: string | null;
};

export type MenuDataProps = {
  short: MenuItemProps[];
  long: MenuItemProps[] | null;
};
