import { useEffect, useState } from "react";

const useWideScreen = () => {
  const [wideScreen, setWideScreen] = useState(false);

  useEffect(() => {
    setWideScreen(window.innerWidth > 1024);
  }, []);

  return wideScreen;
};

export default useWideScreen;
