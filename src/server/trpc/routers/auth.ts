import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const authRouter = router({
  getToken: publicProcedure
    .input(z.object({
      self: z.boolean().optional(),
    }))
    .query(({ ctx }) => {
      return ctx.token
    }),
})
