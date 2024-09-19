import { useAppSelector } from "@/lib/hooks";
import MetacriticRate from "./MetacriticRate";
import Link from "next/link";
import { ReactNode } from "react";
import { convertDateString } from "@/components/Main/helpers/convertDateString";

const QuickInfos = () => {
  const { platforms, metacritic, genres, developers, released, publishers, esrb_rating } = useAppSelector(
    ({ singleGame }) => singleGame
  );

  return (
    <div className="flex flex-wrap gap-y-4 mb-8">
      <ListBlock header="Platforms" list={platforms} />
      {metacritic && <ConditionalBlock block={<MetacriticRate rate={metacritic} />} header="Metascore" />}
      <ListBlock header="Genre" list={genres} />
      <ConditionalBlock
        block={released ? <span className="text-sm lg:text-base">{convertDateString(released)}</span> : <span className="text-sm lg:text-base">TBA</span>}
        header="Release date"
      />
      <ListBlock header="Developer" list={developers} />
      <ListBlock header="Publisher" list={publishers} />
      <ConditionalBlock
        block={esrb_rating?.name ? <span className="text-sm lg:text-base">{esrb_rating.name}</span> : <span className="text-sm lg:text-base">Not rated</span>}
        header="Age rating"
      />
      <ListBlock header="Website" list={[]} />
    </div>
  );
};

const ListBlock = ({ header, list }: { header: string; list: any[] }) => {
  const { website } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <>
      {list.length > 0 ? (
        <div className="w-1/2 even:ps-2 odd:pe-2">
          <p className="mb-2 text-sm font-medium text-white/20">{header}</p>
          <div className="leading-normal break-words text-sm lg:text-base">
            {list.map((item, index) => {
              return (
                <Link
                  href=""
                  className="break-words me-1 group bg-gradient-to-t from-white to-[1px] transition-all duration-200 hover:text-white/40"
                  key={index}
                >
                  {item?.name || item}
                  <span className="group-last:hidden">,</span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        website && (
          <div className="w-full">
            <p className="mb-2 text-sm font-medium text-white/20">Website</p>
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-base break-words me-1 group bg-gradient-to-t from-white to-[1px] transition-all duration-200 hover:text-white/40"
            >
              {website}
            </Link>
          </div>
        )
      )}
    </>
  );
};

const ConditionalBlock = ({ block, header }: { block: ReactNode; header: string }) => {
  return (
    <div className="w-1/2 even:ps-2 odd:pe-2">
      <p className="mb-2 text-sm lg:text-base font-medium text-white/20">{header}</p>
      {block}
    </div>
  );
};

export default QuickInfos;
