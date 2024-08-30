import useClickOutside from "@/hooks/useClickOutside";
import { clearDialog, setHeader } from "@/lib/features/portals/portalslice";
import { useAppDispatch } from "@/lib/hooks";
import RateTop from "../Navbar/RateTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { browseLinks } from "@/lists/menuLinks";
import Link from "next/link";
import useMainPage from "@/hooks/useMainPage";

const DialogMobileTop = () => {
  const dispatch = useAppDispatch();
  const handleMainPage = useMainPage();

  const outDiv = useClickOutside(() => {
    return dispatch(clearDialog());
  });

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/80 transition-all duration-200">
      <div
        ref={outDiv}
        className="bg-white text-black absolute top-3 right-1 max-h-[720px] min-w-[310px] rounded-3xl py-6 px-5"
      >
        <div className="flex justify-between">
          <div>
            <div className="mb-6 font-bold text-2xl">
              <Link
                href="/"
                onClick={handleMainPage}
                className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
              >
                Home
              </Link>
            </div>
            <div className="flex bg-white rounded  border text-black text-[18px] leading-none justify-between items-center  mb-2 me-2">
              <RateTop />
            </div>
            <div className="mb-6 font-bold text-2xl">
              <Link
                href="/"
                className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
              >
                Reviews
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div onClick={() => dispatch(clearDialog())}>
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            </div>
            <div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
                <Image src="/login.svg" alt="" width={24} height={24} />
              </div>
              <p className="text-xs opacity-40 text-center mt-1">Log in</p>
            </div>
            <div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
                <Image src="/signup.svg" alt="" width={24} height={24} />
              </div>
              <p className="text-xs opacity-40 text-center mt-1">Sign up</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 font-bold text-2xl">
            <Link
              href="/browse"
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
              onClick={() => dispatch(setHeader({ header: "Browse", subHeader: "" }))}
            >
              Browse
            </Link>
          </div>
          <ul>
            {browseLinks.map((item, index) => {
              return (
                <div className="text-[18px] py-[6px] leading-5" key={index}>
                  <Link
                    href={item.url as string}
                    onClick={() => dispatch(setHeader({ header: item.title, subHeader: item.subTitle }))}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </ul>
          <div className="mb-5 mt-2 font-bold text-2xl">
            <Link
              href="/"
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              API
            </Link>
          </div>
          <div className="mb-5 font-bold text-2xl">
            <Link
              href="/"
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              Get an API key
            </Link>
          </div>
          <div className="mb-5 font-bold text-2xl">
            <Link
              href="/"
              className="lg:text-2xl lg:font-bold lg:mb-5 block leading-7 transition-all duration-200 hover:opacity-40"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogMobileTop;
