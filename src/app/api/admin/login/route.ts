import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { encrypt } from '@/lib/auth'; 
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Find Admin
    const admin = await prisma.adminUser.findUnique({
      where: { email }
    });

    if (!admin) {
      return NextResponse.json({ error: "Email ko Password ba daidai ba" }, { status: 401 });
    }

    // 2. Validate Password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Email ko Password ba daidai ba" }, { status: 401 });
    }

    // 3. Make a Session 
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // Awa 2
    const session = await encrypt({ adminId: admin.id, email: admin.email, expires });

    // 4. Store the Session inside the Cookie (HTTP-Only)
    const cookieStore = await cookies();
    cookieStore.set('session', session, {
      expires,
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return NextResponse.json({ message: "Login successful" });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An samu matsala a uwar garke" }, { status: 500 });
  }
}