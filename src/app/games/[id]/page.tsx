'use server'
import GameDetails from "@/components/GameDetails/GameDetails";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata> {
  const game = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${params.id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

  return {
    title: game.name,
    description: `Explore ${game.name}`,
  };
}

async function getGameData(id: number) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const ssUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const responses = await Promise.all([fetch(apiUrl), fetch(ssUrl)]);

  return await Promise.all(responses.map((response) => response.json()));
}

export default async function Game({ params }: { params: { id: number } }) {
  const data = await getGameData(params.id);
    
  return <GameDetails data={data} />;
}
