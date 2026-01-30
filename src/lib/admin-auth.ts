
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'mr1yt.tbs'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'sikhopakistan1,'
export const SESSION_SECRET = process.env.SESSION_SECRET || ''
export const SESSION_COOKIE_NAME = 'admin_session'

export async function computeSessionToken(username: string, secret: string) {
  const data = new TextEncoder().encode(`${username}|${secret}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  const bytes = new Uint8Array(buf)
  let hex = ''
  for (const b of bytes) hex += b.toString(16).padStart(2, '0')
  return hex
}
