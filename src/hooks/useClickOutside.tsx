import { RefObject, useEffect, useRef } from "react";

const useClickOutside = (callback: () => { payload: void; type: string; } | null) => {
  const ref = useRef<HTMLDivElement>();  

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref as RefObject<HTMLDivElement>;
};


export default useClickOutside