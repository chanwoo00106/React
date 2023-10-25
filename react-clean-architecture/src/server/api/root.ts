import { createTRPCRouter } from "@src/server/api/trpc";
import userRouter from "./routers/userRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
