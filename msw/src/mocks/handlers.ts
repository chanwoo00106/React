import { rest } from "msw";
import { Todo } from "@types";

const todos: Todo[] = [
  { todo: "hi", checked: false, id: 0 },
  { todo: "하핳", checked: true, id: 1 },
];

export const handlers = [
  rest.get("/", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
  rest.post("/", async (req, res, ctx) => {
    todos.push(await req.json<Todo>());
    return res(ctx.status(200), ctx.json({ ok: true }));
  }),
  rest.patch("/", async (req, res, ctx) => {
    const id = (await req.json()).id;
    todos.map(async (todo) => {
      if (todo.id === id) todo.checked = !todo.checked;
    });
    return res(ctx.status(200), ctx.json({ ok: true }));
  }),
];
