const ShowHide = ({ longList, handleCollapse }: { longList: boolean; handleCollapse: () => void }) => {
  return (
    <li className="mb-2">
      <button className="flex gap-2 items-center w-full text-start opacity-40 group/menu-link" onClick={handleCollapse}>
        <span className="flex justify-center items-center w-8 h-8 min-w-8 bg-white/10 rounded-md transition-all duration-300 group-hover/menu-link:bg-white">
          <svg
            viewBox="0 0 19 35"
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className={`${longList ? "rotate-[-90deg]" : "rotate-90"}`}
          >
            <path
              d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"
              fill="#FFF"
              className="group-hover/menu-link:fill-black"
            />
          </svg>
        </span>
        {longList ? <span className="leading-[1.35]">Hide</span> : <span className="leading-[1.35]">Show all</span>}
      </button>
    </li>
  );
};

export default ShowHide;
