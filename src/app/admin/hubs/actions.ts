'use server'

import { revalidatePath } from 'next/cache'
import { readHubUpdates, writeHubUpdates, type HubKey, type HubUpdate } from '@/lib/hubs'

export async function addHubUpdate(prev: unknown, formData: FormData) {
  const hub = String(formData.get('hub') || '') as HubKey
  const title = String(formData.get('title') || '')
  const description = String(formData.get('description') || '')
  const link = String(formData.get('link') || '')
  const date = String(formData.get('date') || '')
  const category = String(formData.get('category') || '')
  const status = String(formData.get('status') || '')
  const featuresRaw = String(formData.get('features') || '')
  const imageUrl = String(formData.get('imageUrl') || '')
  const ctaText = String(formData.get('ctaText') || '')
  const items = await readHubUpdates(hub)
  const id = (items.at(-1)?.id ?? 0) + 1
  const features = featuresRaw
    ? featuresRaw.split(',').map(s => s.trim()).filter(Boolean)
    : undefined
  items.unshift({
    id,
    title,
    description,
    link: link || undefined,
    date: date || undefined,
    category: category || undefined,
    status: status || undefined,
    features,
    imageUrl: imageUrl || undefined,
    ctaText: ctaText || undefined
  })
  await writeHubUpdates(hub, items)
  revalidatePath(`/admin/hubs/${hub}`)
  return { success: true }
}

export async function updateHubUpdate(prev: unknown, formData: FormData) {
  const hub = String(formData.get('hub') || '') as HubKey
  const id = Number(formData.get('id') || 0)
  const title = String(formData.get('title') || '')
  const description = String(formData.get('description') || '')
  const link = String(formData.get('link') || '')
  const date = String(formData.get('date') || '')
  const category = String(formData.get('category') || '')
  const status = String(formData.get('status') || '')
  const featuresRaw = String(formData.get('features') || '')
  const imageUrl = String(formData.get('imageUrl') || '')
  const ctaText = String(formData.get('ctaText') || '')
  const items = await readHubUpdates(hub)
  const idx = items.findIndex(i => i.id === id)
  if (idx >= 0) {
    const features = featuresRaw
      ? featuresRaw.split(',').map(s => s.trim()).filter(Boolean)
      : undefined
    const updated: HubUpdate = {
      id,
      title,
      description,
      link: link || undefined,
      date: date || undefined,
      category: category || undefined,
      status: status || undefined,
      features,
      imageUrl: imageUrl || undefined,
      ctaText: ctaText || undefined
    }
    items[idx] = updated
    await writeHubUpdates(hub, items)
  }
  revalidatePath(`/admin/hubs/${hub}`)
  return { success: true }
}

export async function deleteHubUpdate(prev: unknown, formData: FormData) {
  const hub = String(formData.get('hub') || '') as HubKey
  const id = Number(formData.get('id') || 0)
  const items = await readHubUpdates(hub)
  const next = items.filter(i => i.id !== id)
  await writeHubUpdates(hub, next)
  revalidatePath(`/admin/hubs/${hub}`)
  return { success: true }
}
