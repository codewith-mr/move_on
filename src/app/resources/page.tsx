import MainLayout from '@/components/layout/MainLayout';
import ResourcesHubClient from '@/components/pages/ResourcesHubClient';

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

