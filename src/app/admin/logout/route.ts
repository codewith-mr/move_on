
import { NextResponse } from 'next/server'
import { SESSION_COOKIE_NAME } from '@/lib/admin-auth'

export async function GET(request: Request) {
  const url = new URL('/admin/login', request.url)
  const res = NextResponse.redirect(url)
  res.cookies.set(SESSION_COOKIE_NAME, '', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 0 })
  return res
}
