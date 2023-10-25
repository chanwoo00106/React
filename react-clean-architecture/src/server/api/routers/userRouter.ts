import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const loginResponse = z.object({
  email: z.string(),
  password: z.string(),
});

const userRouter = createTRPCRouter({
  login: publicProcedure
    .input(loginResponse)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (user?.password !== input.password)
        throw new TRPCError({ code: "BAD_REQUEST" });

      return {
        ...user,
        password: undefined,
      };
    }),
});

export default userRouter;
