import MainLayout from '@/components/layout/MainLayout';
import GlobalScholarClient from '@/components/pages/GlobalScholar/GlobalScholarClient';

export const metadata = {
  title: 'Global Scholar | International Opportunities for Students',
  description: 'Explore international scholarships, visa guides, and career scopes for global education.',
};

export default function GlobalScholarPage() {
  return (
    <MainLayout>
      <GlobalScholarClient />
    </MainLayout>
  );
}
