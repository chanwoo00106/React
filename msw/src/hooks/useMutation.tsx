import { api } from "@lib";
import { useCallback, useState } from "react";

interface MutationType {
  method: "get" | "post" | "patch";
  url: string;
}

type MutationReturnType<T> = [
  (body?: any) => Promise<void>,
  { data: T | undefined; isLoading: boolean }
];

function useMutation<T = any>({
  method,
  url,
}: MutationType): MutationReturnType<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = useCallback(async (body?: any) => {
    setIsLoading(true);
    try {
      const { data } = await api[method](url, body);
      setData(data);
    } catch (e) {}
    setIsLoading(false);
  }, []);

  return [mutate, { data, isLoading }];
}

export default useMutation;
