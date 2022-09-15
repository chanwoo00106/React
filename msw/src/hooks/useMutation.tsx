import { api } from "@lib";
import { useState } from "react";

interface MutationType {
  method: "get" | "post";
  url: string;
  body?: any;
}

type MutationReturnType<T> = [
  () => Promise<void>,
  { data: T | undefined; isLoading: boolean }
];

function useMutation<T = any>({
  method,
  url,
  body,
}: MutationType): MutationReturnType<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = async () => {
    setIsLoading(true);
    try {
      const { data } = await api[method](url, body);
      setData(data);
    } catch (e) {}
    setIsLoading(false);
  };

  return [mutate, { data, isLoading }];
}

export default useMutation;
