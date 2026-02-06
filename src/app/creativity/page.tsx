import MainLayout from '@/components/layout/MainLayout';
import CreativityClient from '@/components/pages/CreativityClient';

export const metadata = {
  title: 'Creativity | TBS Website',
  description: 'Unlock your creative potential with advanced resources and tools.',
};

export default function CreativityPage() {
  return (
    <MainLayout>
      <CreativityClient />
    </MainLayout>
  );
}
