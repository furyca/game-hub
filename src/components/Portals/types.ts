import { ListProps } from "@/lists/types";

export type PortalProps = {
  list: ListProps[];
  styles?: StyleProps;
  secondary?: boolean;
  parentVal?: string | number;
  parentName?: string;
};

export type StyleProps = {
  top: number | undefined;
  left?: number | string | undefined;
  right?: number | null;
  width?: number | undefined;
};
