import { createApi } from "@reduxjs/toolkit/query/react";
import { Todo } from "../type/Todo";
import baseQuery from "../../../api/baseQuery";

const testApi = createApi({
  reducerPath: "testApi",
  baseQuery,
  endpoints: (builder) => ({
    getTest: builder.query<Todo[], string>({
      query: () => ({
        url: "/todos",
      }),
    }),
  }),
});

export const { useGetTestQuery } = testApi;

export default testApi;
