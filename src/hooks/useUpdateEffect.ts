/* eslint-disable consistent-return */
import { useEffect, DependencyList, useRef } from "react";

type CallbackFunction = () => void;

export default function useUpdateEffect(
  callback: CallbackFunction,
  dependencies: DependencyList
): void {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return () => callback();
  }, dependencies);
}
