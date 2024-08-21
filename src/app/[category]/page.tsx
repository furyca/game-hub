import SubBrowseList from "@/components/Main/SubBrowseList";

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

export default function Category({ params: { category } }: { params: { category: string } }) {
  return <SubBrowseList />;
}
