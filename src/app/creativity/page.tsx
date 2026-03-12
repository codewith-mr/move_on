import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const CreativityClient = dynamic(() => import('@/components/pages/CreativityClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

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
