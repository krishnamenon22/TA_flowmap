import { useCallback, useEffect, useRef } from "react";

interface TimeoutResult {
  reset: () => void;
  clear: () => void;
}

type BrowserTimeout = ReturnType<typeof setTimeout>;

export default function useTimeout(
  callback: () => void,
  delay: number
): TimeoutResult {
  const callbackRef = useRef<() => void>(callback);
  const timeoutRef = useRef<BrowserTimeout  | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      if (typeof timeoutRef.current === "number") {
        clearTimeout(timeoutRef.current);
      } else {
        clearInterval(timeoutRef.current);
      }
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

