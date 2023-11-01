import DIContext from "@src/libs/DIContext";
import { useContext } from "react";

const useInjection = <T,>(symbol: symbol): T => {
  const { container } = useContext(DIContext);
  if (!container) throw new Error("not found container");

  return container.get<T>(symbol);
};

export default useInjection;
