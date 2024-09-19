import Header from "@/components/Header/Header";
import BrowseList from "@/components/Main/BrowseList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse",
  description: "Browse games, creators, developers, genres, platforms, publishers, stores and tags.",
};

export default function Browse() {
  return (
    <>
      <Header />
      <BrowseList />;
    </>
  );
}
