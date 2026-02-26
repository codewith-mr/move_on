import MainLayout from '@/components/layout/MainLayout';
import CalculatorClient from '@/components/pages/CalculatorClient';

export const metadata = {
  title: 'Calculator | TBS Tools',
  description: 'A powerful and easy-to-use calculator for all your mathematical needs.',
};

export default function CalculatorPage() {
  return (
    <MainLayout>
      <CalculatorClient />
    </MainLayout>
  );
}
