import fs from 'fs/promises';
import path from 'path';

export type HubKey = 'global-scholar' | 'earn-careers' | 'self-development' | 'resources' | 'opportunities' | 'gov-schemes';

export type HubUpdate = {
  id: number;
  title: string;
  description: string;
  link?: string;
  date?: string;
  category?: string;
  status?: string;
  features?: string[];
  imageUrl?: string;
  ctaText?: string;
};

const baseDir = path.join(process.cwd(), 'data', 'hubs');

async function ensureDir() {
  await fs.mkdir(baseDir, { recursive: true });
}

function fileFor(hub: HubKey) {
  return path.join(baseDir, `${hub}.json`);
}

export async function readHubUpdates(hub: HubKey): Promise<HubUpdate[]> {
  await ensureDir();
  try {
    const file = fileFor(hub);
    const raw = await fs.readFile(file, 'utf-8');
    const items = JSON.parse(raw);
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

export async function writeHubUpdates(hub: HubKey, items: HubUpdate[]) {
  await ensureDir();
  const file = fileFor(hub);
  await fs.writeFile(file, JSON.stringify(items, null, 2), 'utf-8');
}
