'use client'

import Link from 'next/link'
import { deleteTip } from '@/app/admin/tips/actions'

// Use a more loose type for tips to avoid strict Prisma type dependency issues on the client
// but ensure it has the fields we need
interface Tip {
  id: number
  title: string
  slug: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface TipsListProps {
  tips: Tip[]
}

export default function TipsList({ tips }: TipsListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Existing Tips</h3>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <ul className="divide-y divide-gray-100">
          {tips.map(t => (
            <li key={t.id} className="p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate text-gray-900">{t.title}</div>
                <div className="text-sm text-gray-500 truncate">{t.slug}</div>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href={`/admin/tips/${t.id}/edit`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  Edit
                </Link>
                <span className="text-gray-300">|</span>
                <form action={async (formData: FormData) => { await deleteTip(formData); }}>
                  <input type="hidden" name="id" value={String(t.id)} />
                  <button className="text-red-600 text-sm font-medium hover:text-red-800">Delete</button>
                </form>
              </div>
            </li>
          ))}
          {tips.length === 0 && (
            <li className="p-8 text-center text-gray-500">
              No tips found. Create one above.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
