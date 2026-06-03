import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { USER_SESSION_COOKIE_NAME } from '@/lib/user-auth'

export async function POST() {
  (await cookies()).delete(USER_SESSION_COOKIE_NAME)
  return NextResponse.json({ success: true })
}
