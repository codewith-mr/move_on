import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import TipForm from '@/components/admin/TipForm'
import Link from 'next/link'

export default async function EditTipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tip = await prisma.tip.findUnique({
    where: { id: parseInt(id) }
  })

  if (!tip) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Tip</h2>
        <Link href="/admin/tips" className="text-sm text-neutral-500 hover:text-neutral-700">
          ← Back to Tips
        </Link>
      </div>

      <TipForm initialData={tip} />
    </div>
  )
}
