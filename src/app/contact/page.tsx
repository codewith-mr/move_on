import MainLayout from '@/components/layout/MainLayout';
import ContactClient from '@/components/pages/ContactClient';

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
