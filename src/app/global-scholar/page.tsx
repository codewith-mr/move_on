import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const GlobalScholarClient = dynamic(() => import('@/components/pages/GlobalScholar/GlobalScholarClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

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
