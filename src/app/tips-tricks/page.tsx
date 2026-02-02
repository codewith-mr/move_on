import MainLayout from '@/components/layout/MainLayout';
import { prisma } from '@/lib/prisma';
import TipsClient from '@/components/pages/TipsClient';

export default async function TipsAndTricksPage() {
  const allTips = await prisma.tip.findMany({ orderBy: { updatedAt: 'desc' } })
  
  // Extract unique categories
  const categories = Array.from(new Set(allTips.map(tip => tip.category))).filter(Boolean);

  return (
    <MainLayout>
      <TipsClient tips={allTips} availableCategories={categories} />
    </MainLayout>
  )
}
