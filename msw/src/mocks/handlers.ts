import { rest } from "msw";
import { Todo } from "@types";

const todos: Todo[] = [
  { todo: "hi", checked: false, id: 1 },
  { todo: "하핳", checked: true, id: 2 },
];

export const handlers = [
  rest.get("/", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
