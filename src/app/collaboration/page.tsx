import MainLayout from '@/components/layout/MainLayout';
import CollaborationClient from '@/components/pages/CollaborationClient';

export const metadata = {
  title: 'Collaborate With Us | Grow Together with TBS',
  description:
    'Join forces with The Business Sidekick. We collaborate with individuals, small businesses, and creators to build a stronger ecosystem of practical learning and growth.',
};

export default function CollaborationPage() {
  return (
    <MainLayout>
      <CollaborationClient />
    </MainLayout>
  );
}
