import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
const ContactClient = dynamic(() => import('@/components/pages/ContactClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const metadata = {
  title: 'Contact Us | TBS Support',
  description: 'Have questions or need assistance? We are here to help you on your journey to success.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactClient />
    </MainLayout>
  );
}
