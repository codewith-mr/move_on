import MainLayout from '@/components/layout/MainLayout';
import OpportunitiesClient from '@/components/pages/OpportunitiesClient';

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

