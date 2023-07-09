import { z } from 'zod'
import { Greeting, type Prisma } from '@prisma/client'
import { publicProcedure, router } from '../trpc'

export const helloRouter = router({
  getHello: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      const id = input?.id

      const hello = ctx.prisma.hello.findUnique({
        where: {
          id,
        },
      })

      return hello
    }),
  getAllHellos: publicProcedure
    .input(z.object({}))
    .query(async ({ ctx }) => {
      return await ctx.prisma.hello.findMany()
    }),
  createHello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const newHello: Prisma.HelloCreateInput = {
        name: input.name,
        greeting: Greeting.HELLO,
      }

      return await ctx.prisma.hello.create({
        data: newHello,
      })
    }),
})
