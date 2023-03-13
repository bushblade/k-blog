import { createCookie } from '@remix-run/node'

export const themeCookie = createCookie('theme', {
  maxAge: 604_800, // one week
})
