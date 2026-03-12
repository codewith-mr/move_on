import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const OpportunitiesClient = dynamic(() => import('@/components/pages/OpportunitiesClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const metadata = {
  title: 'Opportunities Radar | Scholarships, Internships, And Programs',
  description:
    'Track scholarships, internships, competitions, government jobs, and exchange programs relevant for students.',
};

export default function OpportunitiesPage() {
  return (
    <MainLayout>
      <OpportunitiesClient />
    </MainLayout>
  );
}
