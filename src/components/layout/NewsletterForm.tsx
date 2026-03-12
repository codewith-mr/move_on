'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.status === 429) {
        setStatus('error');
        setMessage('We hit today’s email limit. Please try again tomorrow.');
        return;
      }
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      setMessage('Subscribed. We will keep you posted.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Subscription failed. Try again later.');
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col lg:flex-row gap-2 max-w-full overflow-hidden" suppressHydrationWarning>
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 rounded-md focus:outline-none text-text font-body w-full"
        aria-label="Email for newsletter"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        suppressHydrationWarning
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-2 bg-secondary text-primary rounded-md hover:bg-white transition-colors font-body font-semibold whitespace-nowrap disabled:opacity-60"
        suppressHydrationWarning
      >
        {status === 'loading' ? 'Submitting...' : 'Subscribe'}
      </button>
      {message && (
        <div className={`text-xs ${status === 'success' ? 'text-white/80' : 'text-red-200'} lg:ml-2`}>
          {message}
        </div>
      )}
    </form>
  );
}
