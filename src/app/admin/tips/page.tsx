import { prisma } from '@/lib/prisma'
import TipForm from '@/components/admin/TipForm'
import TipsList from '@/components/admin/TipsList'

export default async function TipsManager() {
  const tips = await prisma.tip.findMany({ orderBy: { updatedAt: 'desc' } })

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Tips & Tricks Manager</h2>
      
      <TipForm />

      <TipsList tips={tips} />
    </div>
  )
}
