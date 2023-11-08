import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateWindowSize();
    const removeEventListener = useEventListener("resize", updateWindowSize);
    return removeEventListener;
  }, []);

  return windowSize;
}
