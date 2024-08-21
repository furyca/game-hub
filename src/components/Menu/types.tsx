import { MenuItemProps } from "@/lists/types";

export type SubMenuProps = {
  header: string;
  data: {
    short: MenuItemProps[];
    long: MenuItemProps[] | null;
  };
  url: string;
};
