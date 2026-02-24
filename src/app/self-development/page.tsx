import MainLayout from '@/components/layout/MainLayout';
import SelfDevelopmentClient from '@/components/pages/SelfDevelopmentClient';

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

