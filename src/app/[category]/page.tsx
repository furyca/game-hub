import Header from "@/components/Header/Header";
import { capitalizeFirstLetter } from "@/components/Main/helpers/capitalizeFirstLetter";
import SubBrowseList from "@/components/Main/SubBrowseList";
import { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { category: "platforms" },
    { category: "genres" },
    { category: "tags" },
    { category: "creators" },
    { category: "developers" },
    { category: "publishers" },
    { category: "stores" },
  ];
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: capitalizeFirstLetter(params.category),
    description: `Explore ${params.category}`,
  };
}

export default function Category() {
  return (
    <>
      <Header />
      <SubBrowseList />;
    </>
  );
}
