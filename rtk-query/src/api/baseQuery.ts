import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, isAxiosError } from "axios";

const baseQuery: BaseQueryFn<
  FetchArgs,
  unknown,
  AxiosError | string,
  any,
  FetchBaseQueryMeta
> = async (args) => {
  try {
    const res = await axios({
      baseURL: "https://jsonplaceholder.typicode.com",
      method: args.method,
      url: args.url,
      data: args.body,
    });

    return { data: res.data };
  } catch (error) {
    if (!isAxiosError(error)) return { error: String(error) };
    return { error };
  }
};

export default baseQuery;
