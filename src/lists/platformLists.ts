export const playstationsShort = [
  {
    id: 18,
    name: "PlayStation 4",
    value: "platforms",
  },
  {
    id: 187,
    name: "PlayStation 5",
    value: "platforms",
  },
];
export const playstationsLong = [
  ...playstationsShort.toReversed(),
  {
    id: 16,
    name: "PlayStation 3",
    value: "platforms",
  },
  {
    id: 15,
    name: "PlayStation 2",
    value: "platforms",
  },
  {
    id: 27,
    name: "PlayStation",
    value: "platforms",
  },
  {
    id: 19,
    name: "PS Vita",
    value: "platforms",
  },
  {
    id: 17,
    name: "PSP",
    value: "platforms",
  },
];

export const xBoxShort = [
  {
    id: 1,
    name: "Xbox One",
    value: "platforms",
  },
  {
    id: 186,
    name: "Xbox Series S/X",
    value: "platforms",
  },
];

export const xBoxLong = [
  ...xBoxShort,
  {
    id: 14,
    name: "Xbox 360",
    value: "platforms",
  },
  {
    id: 80,
    name: "Xbox",
    value: "platforms",
  },
];

export const mac = [
  {
    id: 5,
    name: "macOS",
    value: "platforms",
  },
  {
    id: 55,
    name: "Classic Macintosh",
    value: "platforms",
  },
  {
    id: 41,
    name: "Apple II",
    value: "platforms",
  },
];

export const nintendo = [
  {
    id: 7,
    name: "Nintendo Switch",
    value: "platforms",
  },
  {
    id: 8,
    name: "Nintendo 3DS",
    value: "platforms",
  },
  {
    id: 9,
    name: "Nintendo DS",
    value: "platforms",
  },
  {
    id: 13,
    name: "Nintendo DSi",
    value: "platforms",
  },
  {
    id: 10,
    name: "Wii U",
    value: "platforms",
  },
  {
    id: 11,
    name: "Wii",
    value: "platforms",
  },
  {
    id: 105,
    name: "GameCube",
    value: "platforms",
  },
  {
    id: 83,
    name: "Nintendo 64",
    value: "platforms",
  },
  {
    id: 24,
    name: "Game Boy Advance",
    value: "platforms",
  },
  {
    id: 43,
    name: "Game Boy Color",
    value: "platforms",
  },
  {
    id: 26,
    name: "Game Boy",
    value: "platforms",
  },
  {
    id: 79,
    name: "SNES",
    value: "platforms",
  },
  {
    id: 49,
    name: "NES",
    value: "platforms",
  },
];

export const atari = [
  {
    id: 28,
    name: "Atari 7800",
    value: "platforms",
  },
  {
    id: 31,
    name: "Atari 5200",
    value: "platforms",
  },
  {
    id: 23,
    name: "Atari 2600",
    value: "platforms",
  },
  {
    id: 22,
    name: "Atari Flashback",
    value: "platforms",
  },
  {
    id: 25,
    name: "Atari 8-bit",
    value: "platforms",
  },
  {
    id: 34,
    name: "Atari ST",
    value: "platforms",
  },
  {
    id: 46,
    name: "Atari Lynx",
    value: "platforms",
  },
  {
    id: 50,
    name: "Atari XEGS",
    value: "platforms",
  },
  {
    id: 112,
    name: "Jaguar",
    value: "platforms",
  },
];

export const sega = [
  {
    id: 167,
    name: "Genesis",
    value: "platforms",
  },
  {
    id: 107,
    name: "SEGA Saturn",
    value: "platforms",
  },
  {
    id: 119,
    name: "SEGA CD",
    value: "platforms",
  },
  {
    id: 117,
    name: "SEGA 32X",
    value: "platforms",
  },
  {
    id: 74,
    name: "SEGA Master System",
    value: "platforms",
  },
  {
    id: 106,
    name: "Dreamcast",
    value: "platforms",
  },
  {
    id: 77,
    name: "Game Gear",
    value: "platforms",
  },
];

export const platformsShort = [
  {
    id: 1,
    name: "PC",
    value: "parent_platforms",
  },
  {
    id: 2,
    name: "PlayStation",
    value: "parent_platforms",
    expands: playstationsShort,
  },
  {
    id: 3,
    name: "Xbox",
    value: "parent_platforms",
    expands: xBoxShort,
  },
  {
    id: 4,
    name: "iOS",
    value: "parent_platforms",
  },
  {
    id: 8,
    name: "Android",
    value: "parent_platforms",
  },
  {
    id: 5,
    name: "Apple Macintosh",
    value: "parent_platforms",
  },
  {
    id: 6,
    name: "Linux",
    value: "parent_platforms",
  },
  {
    id: 7,
    name: "Nintendo",
    value: "parent_platforms",
  },
];

export const platformssLong = [
  {
    id: 1,
    name: "PC",
    value: "parent_platforms",
  },
  {
    id: 2,
    name: "PlayStation",
    value: "parent_platforms",
    expands: playstationsShort,
  },
  {
    id: 3,
    name: "Xbox",
    value: "parent_platforms",
    expands: xBoxShort,
  },
  {
    id: 4,
    name: "iOS",
    value: "parent_platforms",
  },
  {
    id: 8,
    name: "Android",
    value: "parent_platforms",
  },
  {
    id: 5,
    name: "Apple Macintosh",
    value: "parent_platforms",
    expands: mac,
  },
  {
    id: 6,
    name: "Linux",
    value: "parent_platforms",
  },
  {
    id: 7,
    name: "Nintendo",
    value: "parent_platforms",
    expands: nintendo,
  },
  {
    id: 9,
    name: "Atari",
    value: "parent_platforms",
    expands: atari,
  },
  {
    id: 10,
    name: "Commodore / Amiga",
    value: "parent_platforms",
  },
  {
    id: 11,
    name: "SEGA",
    value: "parent_platforms",
    expands: sega,
  },
  {
    id: 12,
    name: "3DO",
    value: "parent_platforms",
  },
  {
    id: 13,
    name: "Neo Geo",
    value: "parent_platforms",
  },
  {
    id: 14,
    name: "Web",
    value: "parent_platforms",
  },
];
