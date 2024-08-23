import { getCalendar, getLastMonth, getLastWeek, getNextWeek, getThisYear, getToday } from "./helpers/formatDate";
import { ALL_TIMES } from "./releaseDates";
import { MenuItemProps } from "./types";

export const newReleaseLinks: MenuItemProps[] = [
  {
    name: "Last 30 days",
    title: "Last 30 days",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: null,
        value: `${getLastMonth()},${getToday()}`,
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 24 24",
      d: "M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z",
    },
  },
  {
    name: "This week",
    title: "This week",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: null,
        value: `${getLastWeek()},${getToday()}`,
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 19 26",
      d: "M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z",
    },
  },
  {
    name: "Next week",
    title: "Next week",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: null,
        value: `${getToday()},${getNextWeek()}`,
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 20 16",
      d: "M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z",
    },
  },
  {
    name: "Release calendar",
    title: "Release calendar",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Release date",
        value: "-released",
      },
      dates: {
        name: null,
        value: getCalendar()[6].dateValue,
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 19 14",
      d: "M3.736 8.017V5.688h1.65c1.145 0 1.9-.635 1.9-1.601 0-.967-.736-1.565-1.929-1.565-1.174 0-1.966.69-2.003 1.73H.252C.298 1.657 2.31 0 5.432 0c2.982 0 5.031 1.482 5.031 3.627 0 1.528-1.034 2.733-2.543 3.01v.174c1.854.194 3.037 1.4 3.037 3.111 0 2.403-2.292 4.078-5.58 4.078C2.236 14 .12 12.306 0 9.702h3.261c.047 1.012.876 1.638 2.171 1.638 1.211 0 2.05-.681 2.05-1.675 0-1.022-.792-1.648-2.097-1.648H3.736zm11.845 5.624V3.406h-.177L12.16 5.569V2.66l3.421-2.3H19v13.282h-3.42z",
    },
  },
];

export const topLinks: MenuItemProps[] = [
  {
    name: "Best of the year",
    title: "Best of the year",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: null,
        value: getThisYear(),
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 20 22",
      d: "M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z",
    },
  },
  {
    name: "Popular in 2023",
    title: "Popular in 2023",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: null,
        value: "2023-01-01,2023-12-31",
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 24 16",
      d: "M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z",
    },
  },
  {
    name: "All time top 250",
    title: "All time top 250",
    subTitle: "",
    url: "/",
    filter: {
      ordering: {
        name: null,
        value: null,
      },
      dates: {
        name: "",
        value: ALL_TIMES,
      },
      platform: {
        name: null,
        value: null,
        id: null,
      },
      genre: {
        name: null,
        value: null,
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 25 16",
      d: "M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z",
    },
  },
];

export const browseLinksShort: MenuItemProps[] = [
  {
    name: "Platforms",
    title: "Platforms",
    subTitle: "",
    url: "/platforms",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 22 16",
      d: "M21.535 6.966C20.455 2.123 18.934.928 18.008.45c-1.484-.767-3.204-.32-3.775-.031-.648.327-1.085.95-1.744 1.22-.761.31-1.796.395-2.575.02-.62-.3-1.168-.94-1.92-1.224-.952-.36-2.54-.865-4.11.238C3.512.933.864 3.11.068 9.904c-.491 4.19 1.854 5.539 1.768 5.478.604.423 1.955 1.14 3.786.018 1.223-.75 2.216-2.23 2.216-2.23s.443-.822 1.03-1.172c.416-.248 1.038-.06 1.038-.06h2.202s.699-.086 1.19.127c.476.203.745.706.745.706s1.451 1.837 2.842 2.773c.592.398 2.972.856 4.2-.614.803-.962 1.35-3.92.45-7.964zM9.773 6.537a.666.666 0 01-.667.666H7.438v1.668a.667.667 0 01-.666.667h-.5a.666.666 0 01-.667-.667V7.203h-1.67a.666.666 0 01-.666-.666v-.5c0-.368.299-.667.667-.667h1.668V3.705c0-.369.298-.668.667-.668h.5c.368 0 .667.299.667.668V5.37h1.668c.368 0 .667.298.667.667v.5zm4.698 2.333a1.25 1.25 0 11-.001-2.5 1.25 1.25 0 01.001 2.5zm2.293-2.776a1.237 1.237 0 110-2.473 1.237 1.237 0 010 2.473z",
    },
  },
  {
    name: "Stores",
    title: "Stores",
    subTitle: "",
    url: "/stores",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 16 20",
      d: "M15.966 7.05h-4.558V0H4.57v7.05H.01l7.978 8.226 7.977-8.225zM.011 17.628v2.35h15.955v-2.35H.011z",
    },
  },
  {
    name: "Collections",
    title: "Browse",
    subTitle: "",
    url: "/browse",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 20 18",
      d: "M1.31 1.481c0-.106.087-.193.196-.193h5.605c.053 0 .103.02.14.057L8.454 2.53c.281.276.67.433 1.065.433h7.273c1.047 0 1.898.839 1.898 1.869v.192H4.91c-.83 0-1.505.666-1.505 1.483v10.205h-.197c-1.047 0-1.898-.839-1.898-1.869V1.481zm8.209.194a.199.199 0 01-.139-.057L8.177.434A1.508 1.508 0 007.111 0H1.506C.676 0 0 .664 0 1.481v13.362C0 16.584 1.44 18 3.208 18h13.584C18.56 18 20 16.584 20 14.843V4.832c0-1.74-1.44-3.157-3.208-3.157H9.519z",
    },
  },
];

export const browseLinks: MenuItemProps[] = [
  ...browseLinksShort,
  {
    name: "Reviews",
    title: "Browse",
    subTitle: "",
    url: "/browse",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 21 18",
      d: "M10.5 0C4.7 0 0 3.62 0 8.086c0 2.19 1.132 4.18 2.97 5.635-.106 1.485-.463 3.3-1.497 4.279 2.058 0 4.161-1.29 5.49-2.3 1.106.304 2.295.471 3.537.471 5.8 0 10.5-3.617 10.5-8.085C21 3.619 16.3 0 10.5 0z",
    },
  },
  {
    name: "Genres",
    title: "Genres",
    subTitle: "",
    url: "/genres",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 18 20",
      d: "M16.879 4.198c-.655-1.222-1.56-2.195-2.689-2.894C12.79.44 11.044 0 9 0 6.956 0 5.21.439 3.81 1.305c-1.13.698-2.034 1.672-2.688 2.893C.032 6.234 0 8.27 0 8.494v10.917c0 .084 0 .16.002.215.013.347.25.374.321.374.143 0 .222-.07.45-.293l.013-.012 2.148-2.677 2.144 2.655.024.026c.168.165.473.284.723.284h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.656.025.027c.169.165.473.285.723.285h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.664.024.027c.09.088.322.293.517.293.244 0 .396-.225.396-.589V8.494c0-.225-.031-2.26-1.121-4.296zM5.472 10.202c-1.106 0-2.002-.875-2.002-1.954 0-1.08.896-1.954 2.002-1.954 1.106 0 2.002.875 2.002 1.954s-.896 1.954-2.002 1.954zm7.004 0c-1.106 0-2.003-.875-2.003-1.954 0-1.08.897-1.954 2.003-1.954 1.105 0 2.002.875 2.002 1.954s-.897 1.954-2.002 1.954z",
    },
  },
  {
    name: "Creators",
    title: "Creators",
    subTitle: "",
    url: "/creators",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 17 20",
      d: "M8.182 10c2.51 0 4.545-2.239 4.545-5s-1.47-5-4.545-5-4.546 2.239-4.546 5 2.036 5 4.546 5zM16.354 16.994c-.08-4.797.228-4.31-4.83-5.176 0 0-1.682.86-3.342.86-1.66 0-3.341-.86-3.341-.86-5.004.856-4.736.349-4.829 5.02-.007.381-.01.401-.012.357v.504S1.206 20 8.183 20s8.181-2.3 8.181-2.3v-.374c0 .028-.003-.025-.009-.332z",
    },
  },
  {
    name: "Tags",
    title: "Tags",
    subTitle: "",
    url: "/tags",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 16 18",
      d: "M15.467 7.317h-2.745l-.69 3.141h2.72l-.534 2.78h-2.732L10.485 18H7.597l1.001-4.762H5.554L4.553 18H1.678l1.002-4.762H0l.546-2.78H3.24l.676-3.14H1.25l.546-2.756h2.68L5.437 0h2.875L7.35 4.562h3.043L11.356 0h2.888l-.963 4.562H16l-.533 2.755zm-8.82-.237l-.767 3.628h3.395l.793-3.628h-3.42z",
    },
  },
  {
    name: "Developers",
    title: "Developers",
    subTitle: "",
    url: "/developers",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 22 16",
      d: "M13.288.224l-.722-.197a.326.326 0 00-.274.029.378.378 0 00-.18.227L7.767 15.289a.348.348 0 00.029.285c.05.089.126.149.227.18l.722.197a.325.325 0 00.274-.029.374.374 0 00.18-.226L13.544.69a.348.348 0 00-.03-.285.378.378 0 00-.226-.18zm-6.51 2.93c0-.1-.039-.19-.116-.268l-.583-.58a.369.369 0 00-.536 0L.116 7.721a.367.367 0 000 .534l5.427 5.417a.368.368 0 00.536 0l.582-.58a.367.367 0 000-.535L2.085 7.988 6.662 3.42a.367.367 0 00.116-.267zm14.417 4.568l-5.427-5.417a.369.369 0 00-.268-.116.37.37 0 00-.268.116l-.582.581a.367.367 0 000 .535l4.577 4.568-4.577 4.568a.367.367 0 000 .535l.582.581a.369.369 0 00.536 0l5.427-5.417a.367.367 0 000-.534z",
    },
  },
  {
    name: "Publishers",
    title: "Publishers",
    subTitle: "",
    url: "/publishers",
    filter: null,
    icon: {
      path: "",
      viewBox: "0 0 18 20",
      d: "M0 16.843V3.159L12.57 0v20L0 16.843zm15.02-14.32h2.822v15.675H15.02V2.524z",
    },
  },
];

export const platformLinksShort: MenuItemProps[] = [
  {
    name: "PC",
    title: "Games for PC",
    subTitle: "PC games, or personal computer games, started with the video game crash of 1983. PC games became popular after the development of the microprocessor and microcomputer. Some of the first PC games were Bertie the Brain, OXO and Spacewar! As the 3D graphics accelerators became faster and CPU power improved, PC games became more realistic and more accessible to produce. The PC market sales rocketed in the 80s when IBM computers and sound cards were generated. The platform involves different peripherals, gaming hardware, and software. These are mouse and keyboard; gamepads and motion controllers aren't obligatory, but still popularly accepted. Better hardware improves the game's accuracy; it usually lets the players use more NPCs than equivalents on other platforms. With the platform, the players can perform every sort of game. For example, shooters are easy to play due to the mouse controllers. However, the main reason for the PC games popularity is their lower prices and the backward compatibility with older titles, which leaves much to be desired on cosoles.",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "PC",
        value: "parent_platforms",
        id: 1,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 16 16",
      d: "M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z",
    },
  },
  {
    name: "Playstation 4",
    title: "Games for PlayStation 4",
    subTitle: "PlayStation 4 is a home video game console launched in 2013 by Sony. There are currently three versions of the hardware variations: original console (also called 'fat'); a slim version with optical audio output removed, weight and size reduced as well as USB interfaces differently placed; and Pro version with 4k and HDR support added and PS VR functions improved. PS4 supports VR with the special helmet called PS VR. The starting game lineup of the system is considered to be a one of the most successful in history. The console maintains the status of an exclusive-oriented platform with many remasters and Playstation-only games. Together with the start of the system, there was a multiplayer requirement introduced — now everyone seeking to play via PlayStation Network must have PS Plus active. It is a paid subscription granting the player 5 games per month for all three platforms.",
    url: "/",
    filter: {
      ordering: {
        name: "Popularity",
        value: "-popularity",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "PlayStation 4",
        value: "platforms",
        id: 18,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 21 16",
      d: "M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z",
    },
  },
  {
    name: "Xbox One",
    title: "Games for Xbox One",
    subTitle: "Xbox One is a home video game console released by Microsoft in 2013. Unlike its main competitor — PlayStation 4, the accent in the development was made in multitasking and using a console as a home media player to watch TV, listen to music and play the games. There is three hardware option available to gamers: original console, One S version (with a smaller body, no external power supply, and native HDR/4k support) and One X (pro-gamer-oriented system with updated hardware and 4k rendering in real time). While PS4 is known for exclusive-orientation, Xbox One's games are mostly multi-platform titles. This supports Microsoft's initial idea to prevent selling used games between the players. However, given the competition from the Sony side, the corporation quickly gave up. Among the notable exclusive games, there are Sunset Overdrive, Halo 5: Guardians and Forza Motorsport 5.",
    url: "/",
    filter: {
      ordering: {
        name: "",
        value: "",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "Xbox One",
        value: "platforms",
        id: 1,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 16 16",
      d: "M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z",
    },
  },
];
export const platformLinks: MenuItemProps[] = [
  ...platformLinksShort,
  {
    name: "Nintendo Switch",
    title: "Games for Nintendo Switch",
    subTitle: "Nintendo Switch is a hybrid video game console made by Nintendo. The system represents a tablet-like device with a touchscreen with detachable controllers on the sides. The system can be inserted into a docking station connected to the TV and serve as a home console. This allows the games on the system to be played both on a big screen or in the handheld with no need to reset the system to change the modes. The central controller for the Switch is a pair of Joy-Cons – small controllers both of which feature four face buttons, an analog stick, two side buttons, and high-definition vibration. The controllers can be used separately by different players, together using a grip accessory or attached to the system in handheld mode. Unlike many previous Nintendo consoles, as for 2019, the system has strong support from third-party developers, especially from the indie scene. The Switch introduced Nintendo Switch Online, a subscription-based service that resembles Xbox Live Gold and PlayStation Plus. It allows players to play online multiplayer, offers a selection of classic Nintendo games and lets players use cloud saves.",
    url: "/",
    filter: {
      ordering: {
        name: "",
        value: "",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "Nintendo Switch",
        value: "platforms",
        id: 7,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 21 16",
      d: "M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z",
    },
  },
  {
    name: "iOS",
    title: "Games for iOS",
    subTitle: "iOS is an operating system initially developed by Apple and named iPhone OS by the title of the only phone developed by a corporation. While it was intended for mobile phones and media players at first, it has grown to tablets and TV-console. The OS is considered the second most famous system after Android. iOS is widely known for its closed source code and high data encryption making it nearly impossible to boot the system on the device other than Apple's. The system features a lot of apps unique to the Apple users including Siri — a voice assistant which can access apps as well as Game Center — a various apps manager allowing gamers to share their achievements while playing with friends. App Store is considered to be the most profound mobile application platform with strict selection and moderating policies. The most popular iOS hack is called Jailbreak and allows the user to overclock the CPU and access the hidden homebrew apps within the system.",
    url: "/",
    filter: {
      ordering: {
        name: "",
        value: "",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "iOS",
        value: "parent_platforms",
        id: 4,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 11 18",
      d: "M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z",
    },
  },
  {
    name: "Android",
    title: "Games for Android",
    subTitle: "Android is a mobile operating system based on Linux kernel. The OS uses open-source code so that any developer can modify it. There is a considerable amount of Android devices from various mobile companies. Android application marketplace — Play Market is the most substantial accumulation of mobile games for one platform with iOS being the second largest one. Partly, such title comes from a little moderation required for an app to be published in the store, so there naturally are many scam apps and viruses there not to mention that any Android app can be pirated relatively easy. The separate bunch of Android devices is gaming consoles on the OS. It is the usual mobile phones but with higher performance values and built-in gamepads for more convenient use. The Google Play Games service was introduced featuring achievements, comparing scores between friends and listing various game tops.",
    url: "/",
    filter: {
      ordering: {
        name: "",
        value: "",
      },
      dates: {
        name: " ",
        value: ALL_TIMES,
      },
      platform: {
        name: "Android",
        value: "parent_platforms",
        id: 8,
      },
      genre: {
        name: "",
        value: "",
      },
    },
    icon: {
      path: "",
      viewBox: "0 0 16 18",
      d: "M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z",
    },
  },
];

export const genreLinksShort: MenuItemProps[] = [
  {
    name: "Free Online Games",
    title: "Free Online Games",
    subTitle: "",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/free_online.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Action",
    title: "Action Games",
    subTitle: "The action game is a genre that includes fights, puzzles, and strategies emphasizing coordination and reaction. It includes a large variety of sub-genres like fighting, beat 'em ups, shooters, survivals, mazes, and platforms; sometimes even multiplayer online battles and real-time strategies. Usually, the player performs as the protagonist with its unique abilities; some games add power-ups along the way. The character aims to complete levels, collect items, avoid obstacles, and battle against antagonists. It's necessary to avoid severe injuries during fights; if the health bar goes low, the player loses. Some games have an unbeatable number of enemies, and the only goal is to maximize score and survive for as long as possible. There might be a boss enemy who appears at the last level; he has unique abilities and a longer health bar. Pong is one of the first action games, released in 1972; the latest include Battlefield, Assasin's Creed, Fortnite and Dark Souls.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/action.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Strategy",
    title: "Strategy Games",
    subTitle: "A strategy is a broad genre, its main feature lies in letting players be autonomous, they claim decision-making and high situational awareness, require private decision tree-style thinking as each action can determine the possible outcome. There are all sorts of strategies such as team plays, simulation games, and wargames. Many actions and adventure games need strategic thinking, but they can be hardly seen as ones. A strategy usually is extensive in range of sub-genres, its primary emphasis is on the player's ability to outthink opponents. It rarely involves a physical challenge, focusing on puzzles. There might be no enemy at all, which makes strategies very different from other genres. Resources, actions, powers, and gaps of each side of competitors are generally balanced. The last strategies released are Total War: Warhammer II, Mutant Year Zero: Road to Eden, and Into the Breach.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/strategy.png",
      viewBox: "",
      d: "",
    },
  },
];
export const genreLinks: MenuItemProps[] = [
  ...genreLinksShort,
  {
    name: "RPG",
    title: "RPG Games",
    subTitle: "Role-playing games use protagonists as the leading figures in the occurring events. The player performs as a protagonist; his moves affect the setting and the possible outcome. Some RPGs are created in the form of trading card games; some relate to wargames. Except for the video RPGs, the genre is divided into two primary forms; the original tabletop role-playing, handled through discussion, and live-action role-playing, conducted through the characters' actions. Each of them has a game master who's in charge of the rules and settings. The video RPGs include sandboxes, like GTA; tactical games, like Dragonfall; and roguelikes, like Mystery Dungeon. Usually, the primary purpose is to save the world or other characters. That includes taking part in collaborative storytelling, fighting, collecting items and solving puzzles if needed. The plot tends to develop in a fantasy or science fiction universe.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/rpg.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Shooter",
    title: "Shooter Games",
    subTitle: "A shooter is a sub-genre of action video games the gameplay of which is thoroughly centered around shooting targets. Such games can be presented from first and the third perspectives with the latter being mostly twin-stick platforming shooters. Mouse and keyboard are widely regarded as the best controllers for shooters, as the firing demands high precision achieved only with manual aiming. The primary goal of shooters is to defeat enemies by discharging loads of bullets into them. Shooters are the most discussable video game genre when it comes to judging violence in games, as the gunfire process involves realistic scenes of killing quite often. Sub-genre of shooters is also divided by sub-subgenres such as shoot'em ups, tactical shooters, and hero shooters. The former involves changing a direction of movement and shooting forward while the latter focuses on wiping out tons of enemies by one protagonist. Notable games of the genre are Resogun, Bulletstorm and Call of Duty.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/shooter.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Adventure",
    title: "Adventure Games",
    subTitle: "An adventure game is a genre in which the player performs as a protagonist. It is usually supported by puzzle-solving, gathering items, dialogues, and intervening goals. Adventure focus on story, many of them are designed for a single player. Colossal Cave Adventure is known as the first of the genre, released in 1976. They rocketed in the 1980s; later it led to the appearance of independent video game developers. The Walking Dead by TellTale Games is considered as the game which renewed the whole genre. It has a revolutionary mechanics which change the gameplay as the players make their choices. These games are still favorite among the users; independent developers start crowd-funding companies to raise money; the genre is celebrated on practically any platform.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/adventure.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Puzzle",
    title: "Puzzle Games",
    subTitle: "Puzzle games are a broad genre that maintains logical and conceptual challenges; it may include concentration, logic, pattern recognition, word completion, and sequence searching. The games have either infinite attempts to solve puzzles and an unlimited amount of time or involve restricted timing and limited tries. They typically offer related puzzles for each theme, using the same colors, shapes, and numbers; however, the game design might be quite simple. There is also a set of rules which form the mechanics, and various outcomes leading to next levels. Sometimes they are tied into a whole story developing throughout the play. Minesweeper is one of the first puzzles developed in the 1980s. The gameplay and mechanics are very easy, and the game itself is cheap. At the time, it led to tremendous success which made puzzles one of the most favored genres ever since. It is now divided into various types and is available via the majority of platforms.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/puzzle.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Racing",
    title: "Racing Games",
    subTitle: "Racing games is the video game genre with a high focus on driving competition. Such games are usually presented from the first-person or a third-person perspective. It is noted that gamepads are generally more suited to control the vehicle than keyboard/mouse pair. Although car avatars may render real-life examples, there are many instances where spaceships, formless mechanisms and other fantastical entities take the role of the avatar. Grand Prix released in 1969 is considered to be the first racing game ever made. Racings is a defining genre of a video game which is, in turn, can be divided into a lot of sub-genres: for instance, a primary focus may be made on destroying enemies' vehicles (FlatOut, Twisted Metal) or crushing as many environments as possible (Split/Second). Those mechanics can alternatively be mixed with open world structure or set in the defined assortment of separate racing events.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/racing.png",
      viewBox: "",
      d: "",
    },
  },
  {
    name: "Sports",
    title: "Sports Games",
    subTitle: "Sports games are a genre that simulates competitive and single-player sports like arcades, management, simulation, multisport, and fighting. The primary goal is to compete with other players, either online or via consoles, upgrade clubs and buy new players, maintain a team's strategy. The genre was released in the 1970s, and the sales rocketed right away. The games recreate track and field, needed equipment, teams. Some of them maintain playing while others emphasize strategy and sports management. Games like Need for Speed and Punch-Out!!, mock sports for a subtle effect. It can be performed on every platform; some of them, like the Wii console, specialize in featuring sports games. EA and 2K dominate sports and hold licenses for developing games based on official leagues such as the Madden NFL series, the NBA series, the WWE 2K series, the NBA 2K series.",
    url: "/",
    filter: null,
    icon: {
      path: "/genres/sports.png",
      viewBox: "",
      d: "",
    },
  },
];
