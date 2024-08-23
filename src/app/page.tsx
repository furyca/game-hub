import { Metadata } from "next";
import GameList from "../components/Main/GameList";

export const metadata: Metadata = {
  title: "Game Hub",
  description: "All video games from 1950s to the present",
};
export default function HomePage() {
  return <GameList />;
}
