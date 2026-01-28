
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { computeSessionToken, ADMIN_USERNAME, SESSION_SECRET, SESSION_COOKIE_NAME } from '@/lib/admin-auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`[Middleware] Processing request for: ${pathname}`);
  
  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow public access to login and logout
    if (pathname === '/admin/login' || pathname === '/admin/logout') {
      return NextResponse.next();
    }

    const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const expected = await computeSessionToken(ADMIN_USERNAME, SESSION_SECRET);

    if (!session || session !== expected) {
      console.log(`[Middleware] Unauthorized access to ${pathname}. Redirecting to login.`);
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      // Preserve the original URL to redirect back after login if needed (optional enhancement)
      // url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
