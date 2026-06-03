import bcrypt from 'bcryptjs'
import { prisma } from './prisma'
import { cookies } from 'next/headers'

export const USER_SESSION_COOKIE_NAME = 'user_session'
export const SESSION_SECRET = process.env.SESSION_SECRET || 'your-secret-key-change-this-in-production'

export async function computeSessionToken(userId: number, secret: string) {
  const data = new TextEncoder().encode(`${userId}|${secret}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  const bytes = new Uint8Array(buf)
  let hex = ''
  for (const b of bytes) hex += b.toString(16).padStart(2, '0')
  return hex
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

export async function createUser(email: string, username: string, password: string, name?: string) {
  const hashedPassword = await hashPassword(password)
  return await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      name,
    },
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  })
}

export async function getUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: { username },
  })
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
  })
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get(USER_SESSION_COOKIE_NAME)?.value
  
  if (!token) {
    return null
  }

  // Verify token by checking all users (in production, you'd want a better approach)
  const users = await prisma.user.findMany()
  for (const user of users) {
    const expectedToken = await computeSessionToken(user.id, SESSION_SECRET)
    if (expectedToken === token) {
      return user
    }
  }
  
  return null
}
