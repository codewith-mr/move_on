import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email } = await req.json().catch(() => ({}));
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    const to = [process.env.OWNER_EMAIL || 'mr1ytofficial@gmail.com'];
    const subject = 'New newsletter subscriber';
    const text = `Email: ${email}`;
    const r = await sendEmail({ to, subject, text });
    if (!r.ok && r.status === 429) {
      return NextResponse.json({ error: 'limit' }, { status: 429 });
    }
    if (!r.ok) {
      return NextResponse.json({ error: 'Email service error' }, { status: 502 });
    }
    return NextResponse.json({ success: true, queued: r.ok });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
