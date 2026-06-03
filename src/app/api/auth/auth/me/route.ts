import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/user-auth';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  return NextResponse.json({
    user: { id: user.id, email: user.email, username: user.username },
  });
}
