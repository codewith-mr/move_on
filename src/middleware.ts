
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { computeSessionToken as computeAdminSessionToken, ADMIN_USERNAME, SESSION_SECRET as ADMIN_SESSION_SECRET, SESSION_COOKIE_NAME as ADMIN_SESSION_COOKIE_NAME } from '@/lib/admin-auth';
import { computeSessionToken as computeUserSessionToken, SESSION_SECRET as USER_SESSION_SECRET, USER_SESSION_COOKIE_NAME } from '@/lib/user-auth';
import { prisma } from '@/lib/prisma';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow public access to login and logout
    if (pathname === '/admin/login' || pathname === '/admin/logout') {
      return NextResponse.next();
    }

    const session = request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value;
    const expected = await computeAdminSessionToken(ADMIN_USERNAME, ADMIN_SESSION_SECRET);

    if (!session || session !== expected) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }

  // Protect user routes
  const protectedUserPaths = [
    '/courses',
    '/blog',
    '/tools',
    '/tips-tricks',
    '/creativity',
    '/global-scholar',
    '/gov-schemes',
    '/earn-careers',
    '/resources',
    '/opportunities',
    '/collaboration'
  ];

  if (protectedUserPaths.some(path => pathname === path || pathname.startsWith(`${path}/`))) {
    const session = request.cookies.get(USER_SESSION_COOKIE_NAME)?.value;
    let isAuthenticated = false;

    if (session) {
      const users = await prisma.user.findMany();
      for (const user of users) {
        const expected = await computeUserSessionToken(user.id, USER_SESSION_SECRET);
        if (expected === session) {
          isAuthenticated = true;
          break;
        }
      }
    }

    if (!isAuthenticated) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/courses/:path*', '/blog/:path*', '/tools/:path*', '/tips-tricks/:path*', '/creativity/:path*', '/global-scholar/:path*', '/gov-schemes/:path*', '/earn-careers/:path*', '/resources/:path*', '/opportunities/:path*', '/collaboration/:path*'],
};
