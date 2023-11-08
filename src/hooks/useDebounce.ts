import { useEffect, DependencyList } from "react";
import useTimeout from "./useTimeout";

type CallbackFunction = () => void;

export default function useDebounce(
  callback: CallbackFunction,
  delay: number,
  dependencies: DependencyList
): void {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(() => {
    reset();
  }, [...dependencies, reset]);

  useEffect(() => {
    clear();
  }, []);
}
