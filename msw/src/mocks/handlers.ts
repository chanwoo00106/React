import { rest } from "msw";
import { Todo } from "@types";

const todos: Todo[] = [];

export const handlers = [
  rest.get("/", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
