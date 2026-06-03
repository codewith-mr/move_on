import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { createUser, getUserByEmail, getUserByUsername, computeSessionToken, SESSION_SECRET, USER_SESSION_COOKIE_NAME } from '@/lib/user-auth'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = String(formData.get('email') || '').trim().toLowerCase()
    const username = String(formData.get('username') || '').trim()
    const password = String(formData.get('password') || '')
    const name = String(formData.get('name') || '').trim() || null

    if (!email || !username || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const existingEmail = await getUserByEmail(email)
    if (existingEmail) {
      return NextResponse.json({ error: 'email-exists' }, { status: 400 })
    }

    const existingUsername = await getUserByUsername(username)
    if (existingUsername) {
      return NextResponse.json({ error: 'username-exists' }, { status: 400 })
    }

    const user = await createUser(email, username, password, name)
    
    const token = await computeSessionToken(user.id, SESSION_SECRET)
    ;(await cookies()).set(USER_SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
