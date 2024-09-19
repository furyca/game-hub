import { useAppSelector } from "@/lib/hooks";

const Stores = () => {
  const { stores } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <div>
      <h2 className="text-lg text-white/40 mb-4">Where to buy</h2>
      <div className="flex lg:flex-wrap gap-4 overflow-auto">
        {stores.map((store, index) => (
          <button
            className="flex items-center justify-center min-w-[150px] w-[184px] h-10 text-white/50 rounded-md bg-white/10 gap-2 text-sm transition-all duration-300 hover:bg-white hover:text-black"
            key={index}
          >
            {store.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stores;
