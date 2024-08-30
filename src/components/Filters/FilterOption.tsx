import { useAppSelector } from "@/lib/hooks";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterOption = ({ span1, span2, type }: { span1: string; span2: string; type: string }) => {
  const {
    filter: {
      platforms: { name: platform_name },
      parent_platforms: { name: parent_platform_name },
      dates: { name: date_name },
    },
  } = useAppSelector(({ data }) => data);
  const valueExists = () =>
    (type === "platform" && (platform_name?.trim() || parent_platform_name?.trim())) ||
    (type === "date" && date_name?.trim());

  return (
    <button
      className={`${
        valueExists() ? "bg-white text-black" : "bg-white/[.07] hover:text-white/40"
      } px-4 py-[10px] rounded-lg text-sm min-w-[150px] transition-all duration-300 group/filter`}
    >
      <div className="flex justify-between items-center w-full">
        <p className=" whitespace-nowrap me-[6px] leading-[1.15rem]">
          <span>{span1}</span> <span className="font-bold">{span2}</span>
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${
            valueExists() && "group-hover/filter:text-black"
          } text-neutral-500 h-[14px] mt-[3px] me-[3px] transition-all duration-300 `}
        />
      </div>
    </button>
  );
};

export default FilterOption;
