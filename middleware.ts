import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/auth"; // Mun dauko aikinmu na lib/auth

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Dauko session cookie din
  const session = request.cookies.get("session")?.value;

  // 2. Idan mai amfani yana son shiga shafukan admin amma bashi da session
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Tantance ko Token din yana da kyau ko ya mutu
    const decryptedSession = await decrypt(session);
    if (!decryptedSession) {
      // Idan jabu ne ko ya mutu, a goge cookie din a mayar dashi login
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("session");
      return response;
    }
  }

  // 3. Idan riga yayi login amma yana son komawa shafin login da gangan
  if (pathname.startsWith("/admin/login") && session) {
    const decryptedSession = await decrypt(session);
    if (decryptedSession) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

// Ka'idar Next.js don tantance shafukan da middleware zai yi aiki a kai
export const config = {
  matcher: ["/admin/:path*"],
};