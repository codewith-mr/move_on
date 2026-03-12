import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const EarnCareersClient = dynamic(() => import('@/components/pages/EarnCareersClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

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
