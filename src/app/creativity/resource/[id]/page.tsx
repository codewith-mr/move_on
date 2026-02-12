import CreativeRoadmapView from '@/components/creativity/CreativeRoadmapView';

export default async function ResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CreativeRoadmapView id={id} />;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return {
    title: `Learning Module ${id} | TBS Creativity`,
    description: 'Deep dive interactive roadmap for creative mastery.',
  };
}