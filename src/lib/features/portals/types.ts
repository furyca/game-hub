export type PortalState = {
  activePortal: "order" | "date" | "platform" | null;
  dialog: "top" | "bottom" | null;
  header: string,
  subHeader: string
};
