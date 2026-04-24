import MainLayout from '@/components/layout/MainLayout';
import CryptoAnalysisClient from '@/components/pages/CryptoAnalysisClient';

export const metadata = {
  title: 'Crypto Trading & Analysis | Professional Student Trading Hub',
  description: 'Learn crypto trading from scratch. Live charts, AI insights, and professional risk management for students.',
};

export default function CryptoTradingPage() {
  return (
    <MainLayout>
      <CryptoAnalysisClient />
    </MainLayout>
  );
}
