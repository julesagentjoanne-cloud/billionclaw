import { AGENT_LABELS, AGENT_OUTPUTS, AgentType, getAssetPreview } from '@/lib/demoReport';
import Link from 'next/link';

export function AgentCard({ agent, recommended = false }: { agent: AgentType; recommended?: boolean }) {
  const role = {
    research: 'Market researcher',
    validation: 'Validation specialist',
    messaging: 'Positioning strategist',
    offer: 'Pricing and packaging strategist',
    gtm: 'GTM engineer',
    killscale: 'Performance operator',
    creative: 'Creative strategist',
    content: 'Content systems operator',
    community: 'Community strategist',
    retention: 'Lifecycle specialist',
    ops: 'Ops architect',
  }[agent];
  return (
    <div className={`rounded-2xl border p-5 ${recommended ? 'border-black bg-zinc-50' : 'border-zinc-200 bg-white'}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">{AGENT_LABELS[agent]}</h3>
        {recommended ? <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">Recommended next</span> : null}
      </div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">{role}</p>
      <p className="mb-3 text-sm text-zinc-600">{getAssetPreview(agent)}</p>
      <ul className="mb-4 list-disc pl-5 text-sm text-zinc-700">
        {AGENT_OUTPUTS[agent].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link href={`/asset?agent=${agent}`} className="text-sm font-semibold text-zinc-900 underline">
        Generate output
      </Link>
    </div>
  );
}
