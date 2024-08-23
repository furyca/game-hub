import Link from "next/link";
import { capitalizeFirstLetter } from "../Main/helpers/capitalizeFirstLetter";

const BrowseHeading = ({ name, count }: { name: string; count: number }) => {
  return (
    <div className="mb-6">
      <Link href={`/${name}`} className="group/head-link">
        <h2
          className="me-2 font-bold inline text-2xl leading-[28px] transition-all duration-200 group-hover/head-link:text-white/40"
          style={{
            backgroundImage:
              "linear-gradient(0deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 1px,hsla(0,0%,100%,0) 0)",
          }}
        >
          {capitalizeFirstLetter(name)}
        </h2>
        <span className="text-2xl leading-[28px] me-1 text-white/40">{count}</span>
        <svg
          className="inline align-baseline"
          viewBox="0 0 18 35"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"
            fill="#fff6"
          />
        </svg>
      </Link>
    </div>
  );
};

export default BrowseHeading;
