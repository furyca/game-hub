type PlatformsIconProps = {
  slug: string;
  icon: string;
  card_scale: { width: number; height: number };
  detail_scale: { width: number; height: number };
}[];

export const platformsIcons: PlatformsIconProps = [
  {
    slug: "pc",
    icon: "platformIcons/pc.svg",
    card_scale: { width: 12, height: 13 },
    detail_scale: { width: 16, height: 16 },
  },
  {
    slug: "playstation",
    icon: "platformIcons/ps.svg",
    card_scale: { width: 17, height: 13 },
    detail_scale: { width: 21, height: 16 },
  },
  {
    slug: "xbox",
    icon: "platformIcons/xbox.svg",
    card_scale: { width: 13, height: 13 },
    detail_scale: { width: 16, height: 16 },
  },
  {
    slug: "mac",
    icon: "platformIcons/macos.svg",
    card_scale: { width: 13, height: 14 },
    detail_scale: { width: 15, height: 18 },
  },
  {
    slug: "linux",
    icon: "platformIcons/linux.svg",
    card_scale: { width: 12, height: 16 },
    detail_scale: { width: 15, height: 18 },
  },
  {
    slug: "android",
    icon: "platformIcons/android.svg",
    card_scale: { width: 12, height: 14 },
    detail_scale: { width: 16, height: 18 },
  },
  {
    slug: "nintendo",
    icon: "platformIcons/nintendo.svg",
    card_scale: { width: 17, height: 13 },
    detail_scale: { width: 21, height: 18 },
  },
  {
    slug: "ios",
    icon: "platformIcons/ios.svg",
    card_scale: { width: 10, height: 16 },
    detail_scale: { width: 11, height: 18 },
  },
  {
    slug: "atari",
    icon: "platformIcons/atari.svg",
    card_scale: { width: 16, height: 13 },
    detail_scale: { width: 20, height: 16 },
  },
  {
    slug: "commodore-amiga",
    icon: "platformIcons/commodore.svg",
    card_scale: { width: 18, height: 13 },
    detail_scale: { width: 23, height: 16 },
  },
  {
    slug: "sega",
    icon: "platformIcons/sega.svg",
    card_scale: { width: 10, height: 13 },
    detail_scale: { width: 13, height: 16 },
  },
  {
    slug: "3do",
    icon: "platformIcons/3do.svg",
    card_scale: { width: 6, height: 16 },
    detail_scale: { width: 8, height: 20 },
  },
  {
    slug: "neo-geo",
    icon: "platformIcons/nintendo.svg",
    card_scale: { width: 17, height: 13 },
    detail_scale: { width: 21, height: 18 },
  },
  {
    slug: "web",
    icon: "platformIcons/web.svg",
    card_scale: { width: 12, height: 13 },
    detail_scale: { width: 16, height: 16 },
  },
];
