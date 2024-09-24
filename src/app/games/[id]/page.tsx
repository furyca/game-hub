import GameDetails from "@/components/GameDetails/GameDetails";
import { Metadata } from "next";
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata> {
  const game = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${params.id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

  return {
    title: game.name,
    description: `Explore ${game.name}`,
  };
}

export default async function Game({ params }: { params: { id: string } }) {
  return <GameDetails id={params.id} />;
}
