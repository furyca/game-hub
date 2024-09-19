const UserActions = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
      <button className="flex justify-between items-center overflow-hidden bg-white text-black rounded-md min-w-[180px]  py-[5px] ps-4 h-[50px] transition-all duration-300 hover:bg-white/80">
        <div className="text-start">
          <div className="text-xs leading-[14px] opacity-40">Add to</div>
          <div className="text-lg leading-5">My games</div>
        </div>
        <div className="w-8 ms-3">
          <svg width="43" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stopColor="#B4EC51" offset="0%" />
                <stop stopColor="#429321" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M18 0C8.018 0 0 8.018 0 18s8.018 18 18 18 18-8.018 18-18S27.982 0 18 0zm9.818 18.818c0 .491-.327.818-.818.818h-6.955c-.245 0-.409.164-.409.41V27c0 .49-.327.818-.818.818h-1.636c-.491 0-.818-.327-.818-.818v-6.955c0-.245-.164-.409-.41-.409H9c-.49 0-.818-.327-.818-.818v-1.636c0-.491.327-.818.818-.818h6.955c.245 0 .409-.164.409-.41V9c0-.49.327-.818.818-.818h1.636c.491 0 .818.327.818.818v6.955c0 .245.164.409.41.409H27c.49 0 .818.327.818.818v1.636z"
              fill="url(#a)"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <button className="flex justify-between items-center overflow-hidden border border-white rounded-md py-[5px] ps-4 h-[50px] transition-all duration-300 hover:border-white/40">
        <div className="text-start">
          <div className="text-xs leading-[14px] opacity-40">Add to</div>
          <div className="text-lg leading-5">Wishlist</div>
        </div>
        <div className="w-8 ms-3">
          <svg className="h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              fill="#FFF"
              d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"
            />
          </svg>
        </div>
      </button>
      <button className="flex justify-between items-center py-[5px] h-[50px] group">
        <div className="text-start">
          <div className="text-xs leading-[14px] opacity-40">Save to</div>
          <div className="text-lg leading-5 flex">
            <span className="transition-all duration-300 group-hover:opacity-40">Collection</span>
            <svg className="ms-[5px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M15.363 17.319H5.243V7.965c0-.098.079-.178.177-.178h12.4v7.82c0 .944-.766 1.712-1.709 1.712M2.18 3.358c0-.098.079-.177.176-.177H7.4c.047 0 .092.018.126.052L8.609 4.32c.253.253.602.398.958.398h6.546c.942 0 1.708.768 1.708 1.712v.177H5.42a1.36 1.36 0 00-1.356 1.359v9.354h-.176a1.713 1.713 0 01-1.71-1.713V3.358zm7.388.177a.177.177 0 01-.125-.052L8.36 2.398A1.345 1.345 0 007.4 2H2.355C1.608 2 1 2.609 1 3.358v12.248A2.894 2.894 0 003.888 18.5h12.225A2.894 2.894 0 0019 15.606V6.43a2.894 2.894 0 00-2.887-2.894H9.567z"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default UserActions;
