import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
import { prisma } from '@/lib/prisma';
const TipsClient = dynamic(() => import('@/components/pages/TipsClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const revalidate = 60;

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
