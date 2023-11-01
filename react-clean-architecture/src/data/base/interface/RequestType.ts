import type { Method } from "../Method";

export type RequestType<D = undefined> = {
  method: Method;
  url: string;
  data?: D;
  headers?: Record<string, string>;
};
