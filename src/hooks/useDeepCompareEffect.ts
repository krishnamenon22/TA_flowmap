import { useEffect, useRef, DependencyList } from "react";
import isEqual from "lodash/fp/isEqual";

type CallbackFunction = () => void;

export default function useDeepCompareEffect(callback: CallbackFunction, dependencies: DependencyList): void {
  const currentDependenciesRef = useRef<DependencyList | undefined>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
}
