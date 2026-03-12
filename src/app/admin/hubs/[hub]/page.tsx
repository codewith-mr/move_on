import { notFound } from 'next/navigation'
import HubUpdatesManager from '@/components/admin/HubUpdatesManager'
import { readHubUpdates, type HubKey } from '@/lib/hubs'

const allowed: HubKey[] = ['global-scholar', 'earn-careers', 'self-development', 'resources', 'opportunities', 'gov-schemes']
const titles: Record<HubKey, string> = {
  'global-scholar': 'Global Scholar',
  'earn-careers': 'Earn & Careers',
  'self-development': 'Self Development',
  'resources': 'Resources Hub',
  'opportunities': 'Opportunities',
  'gov-schemes': 'Gov Portal',
}

export default async function HubAdminPage({ params }: { params: Promise<{ hub: string }> }) {
  const { hub } = await params
  if (!allowed.includes(hub as HubKey)) notFound()
  const items = await readHubUpdates(hub as HubKey)
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{titles[hub as HubKey]} — Updates</h2>
      <HubUpdatesManager hub={hub as HubKey} initial={items} />
    </div>
  )
}
