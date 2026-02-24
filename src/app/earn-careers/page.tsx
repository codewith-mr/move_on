import MainLayout from '@/components/layout/MainLayout';
import EarnCareersClient from '@/components/pages/EarnCareersClient';

export const metadata = {
  title: 'Earn & Careers | Student Income And Career Lab',
  description:
    'Explore freelancing, online earning, remote jobs, internships, and side hustles designed for students.',
};

export default function EarnCareersPage() {
  return (
    <MainLayout>
      <EarnCareersClient />
    </MainLayout>
  );
}

