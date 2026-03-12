'use client'

import { useActionState } from 'react'
import { addHubUpdate, updateHubUpdate, deleteHubUpdate } from '@/app/admin/hubs/actions'
import type { HubKey, HubUpdate } from '@/lib/hubs'

export default function HubUpdatesManager({ hub, initial }: { hub: HubKey, initial: HubUpdate[] }) {
  const [stateAdd, actionAdd, pendingAdd] = useActionState(addHubUpdate, { success: false })
  const [stateEdit, actionEdit, pendingEdit] = useActionState(updateHubUpdate, { success: false })
  const [stateDel, actionDel, pendingDel] = useActionState(deleteHubUpdate, { success: false })

  return (
    <div className="space-y-6">
      <form action={actionAdd} className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white p-4 border rounded">
        <input type="hidden" name="hub" value={hub} />
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <input name="title" className="w-full border rounded px-3 py-2" placeholder="Update title" required />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Date</label>
          <input name="date" className="w-full border rounded px-3 py-2" placeholder="YYYY-MM-DD" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Category</label>
          <input name="category" className="w-full border rounded px-3 py-2" placeholder="Education, Business, etc." />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Status</label>
          <input name="status" className="w-full border rounded px-3 py-2" placeholder="Active, Upcoming…" />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Description</label>
          <textarea name="description" rows={3} className="w-full border rounded px-3 py-2" placeholder="Short details"></textarea>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm font-medium">Image URL</label>
            <input name="imageUrl" className="w-full border rounded px-3 py-2" placeholder="`https://...`" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Features (comma-separated)</label>
            <input name="features" className="w-full border rounded px-3 py-2" placeholder="Latest Specs, Merit Based, Free of Cost" />
          </div>
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Link (optional)</label>
          <input name="link" className="w-full border rounded px-3 py-2" placeholder="`https://...`" />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">CTA Text</label>
          <input name="ctaText" className="w-full border rounded px-3 py-2" placeholder="Apply Now" />
        </div>
        <div className="md:col-span-2">
          <button disabled={pendingAdd} className="px-4 py-2 bg-primary text-white rounded">
            {pendingAdd ? 'Adding...' : 'Add Update'}
          </button>
        </div>
      </form>

      <div className="space-y-2">
        <h4 className="font-semibold">Existing Post's</h4>
        <ul className="divide-y border rounded bg-white">
          {initial.map(item => (
            <li key={item.id} className="p-3 space-y-3">
              <div className="bg-white border rounded-xl overflow-hidden">
                {item.imageUrl && (
                  <div className="relative h-40 overflow-hidden rounded-t-xl">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                        {item.category || ''}
                      </div>
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-xs text-neutral-500">{item.date || ''}</div>
                    </div>
                    <form action={actionDel} className="shrink-0">
                      <input type="hidden" name="hub" value={hub} />
                      <input type="hidden" name="id" value={String(item.id)} />
                      <button disabled={pendingDel} className="text-red-600 text-sm">Delete</button>
                    </form>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.status && (
                      <>
                        <span className={`w-2 h-2 rounded-full ${item.status?.toLowerCase() === 'upcoming' ? 'bg-amber-400' : 'bg-emerald-600'}`} />
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{item.status}</span>
                      </>
                    )}
                  </div>
                  {item.description && (
                    <div className="text-sm text-neutral-700 whitespace-pre-line">{item.description}</div>
                  )}
                  {item.features && item.features.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {item.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-neutral-800"></div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-neutral-900 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors">
                      {item.ctaText || 'Open link'} →
                    </a>
                  )}
                </div>
              </div>
              <form action={actionEdit} className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 p-3 rounded">
                <input type="hidden" name="hub" value={hub} />
                <input type="hidden" name="id" value={String(item.id)} />
                <input name="title" defaultValue={item.title} className="border rounded px-2 py-1" />
                <input name="date" defaultValue={item.date || ''} className="border rounded px-2 py-1" />
                <textarea name="description" defaultValue={item.description} rows={2} className="md:col-span-2 border rounded px-2 py-1"></textarea>
                <input name="category" defaultValue={item.category || ''} className="border rounded px-2 py-1" />
                <input name="status" defaultValue={item.status || ''} className="border rounded px-2 py-1" />
                <input name="features" defaultValue={(item.features || []).join(', ')} className="md:col-span-2 border rounded px-2 py-1" />
                <input name="imageUrl" defaultValue={item.imageUrl || ''} className="md:col-span-2 border rounded px-2 py-1" />
                <input name="link" defaultValue={item.link || ''} className="md:col-span-2 border rounded px-2 py-1" />
                <input name="ctaText" defaultValue={item.ctaText || ''} className="md:col-span-2 border rounded px-2 py-1" />
                <div className="md:col-span-2">
                  <button disabled={pendingEdit} className="px-3 py-1 bg-neutral-800 text-white rounded text-sm">
                    {pendingEdit ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </li>
          ))}
          {initial.length === 0 && <li className="p-4 text-sm text-neutral-500">No updates added yet.</li>}
        </ul>
      </div>
    </div>
  )
}
