import { useState, Dispatch, SetStateAction } from "react";

interface ArrayActions<T> {
  array: T[];
  set: Dispatch<SetStateAction<T[]>>;
  push: (element: T) => void;
  filter: (callback: (element: T) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
}

export default function useArray<T>(defaultValue: T[]): ArrayActions<T> {
  const [array, setArray] = useState<T[]>(defaultValue);

  const push = (element: T): void => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback: (element: T) => boolean): void => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: T): void => {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  };

  const remove = (index: number): void => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const clear = (): void => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
}
