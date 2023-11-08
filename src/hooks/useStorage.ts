import React, { useCallback, useState, useEffect } from "react";

type StorageValue<T> = T | (() => T);

function useStorage<T>(key: string, defaultValue: StorageValue<T>, storageObject: Storage): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    } 
      return defaultValue as T;
    
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
      return; // Explicit return here
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

export function useLocalStorage<T>(key: string, defaultValue: StorageValue<T>): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void] {
  return useStorage<T>(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: StorageValue<T>): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void] {
  return useStorage<T>(key, defaultValue, window.sessionStorage);
}
