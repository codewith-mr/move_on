import { prisma } from '@/lib/prisma'
import TipForm from '@/components/admin/TipForm'
import TipsList from '@/components/admin/TipsList'

export default async function TipsManager() {
  const tips = await prisma.tip.findMany({ orderBy: { updatedAt: 'desc' } })
  
  // Serialize and map to clean objects for client components
  const serializedTips = tips.map(t => ({
    id: t.id,
    title: t.title,
    slug: t.slug,
    category: t.category,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Tips & Tricks Manager</h2>
      
      <TipForm />

      <TipsList tips={serializedTips} />
    </div>
  )
}
