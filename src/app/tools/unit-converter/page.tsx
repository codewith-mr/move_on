import MainLayout from '@/components/layout/MainLayout';
import UnitConverterClient from '@/components/pages/UnitConverterClient';

export const metadata = {
  title: 'Unit Converter | TBS Tools',
  description: 'Convert between different units of measurement with precision and ease.',
};

export default function UnitConverterPage() {
  return (
    <MainLayout>
      <UnitConverterClient />
    </MainLayout>
  );
}
