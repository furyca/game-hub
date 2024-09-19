import { convertDateString } from "@/components/Main/helpers/convertDateString";
import { useAppSelector } from "@/lib/hooks";

const EditGame = () => {
  return (
    <>
      <button className="flex items-center justify-center p-4 bg-white text-black w-full rounded-md gap-2 transition-all duration-300 hover:bg-white/60">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path
              className="fill-black"
              d="M16.898 10.735c.426 0 .772.345.772.771v4.201A3.297 3.297 0 0114.377 19H4.293A3.297 3.297 0 011 15.707V5.623a3.296 3.296 0 013.293-3.291h4.202a.772.772 0 010 1.543H4.293a1.75 1.75 0 00-1.75 1.748v10.084c0 .965.785 1.75 1.75 1.75h10.084c.965 0 1.75-.785 1.75-1.75v-4.2c0-.427.345-.772.771-.772zm1.632-7.091a1.614 1.614 0 010 2.28l-6.723 6.722c-.301.3-.716.472-1.14.472H7.975l-.615.614a.769.769 0 01-1.091 0 .77.77 0 010-1.09l.614-.615V9.333c0-.424.172-.838.472-1.139l6.724-6.723a1.614 1.614 0 012.278 0l2.174 2.173zM16.055 6.21l1.384-1.378-2.173-2.27-1.44 1.42 2.229 2.228zm-5.387 5.365L14.962 7.3l-2.235-2.236-4.28 4.22a.07.07 0 00-.022.05v2.24h2.243z"
            ></path>
          </svg>
        </span>
        <span>Edit the game info</span>
      </button>
      <GameUpdated />
    </>
  );
};

const GameUpdated = () => {
  const { updated } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <div className="text-center mt-2 text-white/40 text-sm mb-4 lg:mb-8">
      {updated && <span>Last Modified: {convertDateString(updated)}</span>}
    </div>
  );
};

export default EditGame;
