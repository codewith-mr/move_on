import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

const SelfDevelopmentClient = dynamic(() => import('@/components/pages/SelfDevelopmentClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const metadata = {
  title: 'Self Development | Productivity, Study, And Habits For Students',
  description:
    'Build productivity, time management, study techniques, health, confidence, and habits tailored for students.',
};

export default function SelfDevelopmentPage() {
  return (
    <MainLayout>
      <SelfDevelopmentClient />
    </MainLayout>
  );
}
