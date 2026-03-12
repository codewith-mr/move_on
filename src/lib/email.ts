export type SendEmailPayload = {
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
};

export async function sendEmail(payload: SendEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY || '';
  const from = payload.from || process.env.FROM_EMAIL || 'noreply@example.com';
  if (!apiKey) {
    console.warn('Email not sent. Missing RESEND_API_KEY.');
    console.info('Email preview:', { ...payload, from });
    return { ok: false, preview: true, status: 0 };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html || '',
      text: payload.text || '',
    }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    console.error('Email send failed:', res.status, t);
    return { ok: false, status: res.status };
  }
  return { ok: true, status: res.status };
}
