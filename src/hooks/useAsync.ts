import { useCallback, useEffect, useState } from "react";

type AsyncFunction<T> = () => Promise<T>;

interface AsyncState<T> {
  loading: boolean;
  error?: any;
  value?: T;
}

export default function useAsync<T>(callback: AsyncFunction<T>, dependencies: any[] = []): AsyncState<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [callback]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized, ...dependencies]);

  return { loading, error, value };
}
