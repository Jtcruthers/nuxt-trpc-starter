import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { prisma } from '../db'
import { getToken } from '#auth'

export async function createContext(event: H3Event) {
  const token = await getToken({ event })

  return {
    token,
    prisma,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
