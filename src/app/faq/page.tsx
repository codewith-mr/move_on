import MainLayout from '@/components/layout/MainLayout';
import FAQClient from '@/components/pages/FAQClient';

export const metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Find answers to common questions about our platform.',
};

export default function FAQPage() {
  return (
    <MainLayout>
      <FAQClient />
    </MainLayout>
  );
}
