import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const ResourcesHubClient = dynamic(() => import('@/components/pages/ResourcesHubClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const metadata = {
  title: 'Resources Hub | PDFs, Templates, And Guides For Students',
  description:
    'Downloadable PDFs, templates, roadmaps, and guides to support study, career, and government processes.',
};

export default function ResourcesPage() {
  return (
    <MainLayout>
      <ResourcesHubClient />
    </MainLayout>
  );
}
