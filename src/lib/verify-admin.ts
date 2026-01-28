
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { computeSessionToken, ADMIN_USERNAME, SESSION_SECRET, SESSION_COOKIE_NAME } from './admin-auth'

export async function verifyAdmin() {
  const cookieStore = cookies()
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value
  const expected = await computeSessionToken(ADMIN_USERNAME, SESSION_SECRET)
  
  if (!session || session !== expected) {
    redirect('/admin/login')
  }
}
