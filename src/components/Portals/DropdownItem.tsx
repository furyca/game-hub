import Link from "next/link";

const DropdownItem = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      href={url}
      className="py-1 px-[10px] rounded block leading-[1.315] min-w-[150px] transition-all duration-200 hover:bg-black/10"
    >
      {text}
    </Link>
  );
};

export default DropdownItem;
