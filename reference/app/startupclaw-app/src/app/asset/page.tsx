import { AssetPageClient } from '@/components/AssetPageClient';

export default async function AssetPage({ searchParams }: { searchParams: Promise<{ agent?: string }> }) {
  const params = await searchParams;
  return <AssetPageClient requestedAgent={params.agent} />;
}
