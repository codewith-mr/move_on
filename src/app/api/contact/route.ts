import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, subject, message } = body || {};
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const to = [process.env.OWNER_EMAIL || 'mr1ytofficial@gmail.com'];
    const s = `Contact: ${subject}`;
    const text = `From: ${name} <${email}>\n\n${message}`;
    const r = await sendEmail({ to, subject: s, text });
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
