'use client';

import { AGENT_LABELS, AgentType } from '@/lib/demoReport';

const palette: Record<AgentType, string> = {
  research: 'from-sky-400 to-blue-600',
  validation: 'from-violet-400 to-purple-600',
  messaging: 'from-fuchsia-400 to-pink-600',
  offer: 'from-amber-400 to-orange-600',
  gtm: 'from-emerald-400 to-green-600',
  killscale: 'from-rose-400 to-red-600',
  creative: 'from-pink-400 to-purple-600',
  content: 'from-cyan-400 to-sky-600',
  community: 'from-teal-400 to-emerald-600',
  retention: 'from-lime-400 to-green-600',
  ops: 'from-zinc-400 to-zinc-700',
};

export function PixelAgentSpinner({
  agent,
  status,
  title,
}: {
  agent: AgentType;
  status: 'queued' | 'running' | 'waiting_for_user' | 'blocked' | 'ready_for_review' | 'completed';
  title: string;
}) {
  const active = ['queued', 'running', 'ready_for_review'].includes(status);
  const waiting = status === 'waiting_for_user';
  const blocked = status === 'blocked';
  const completed = status === 'completed';

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${palette[agent]} opacity-20`} />
          <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${palette[agent]} ${active ? 'animate-pulse' : ''} ${blocked ? 'opacity-40 grayscale' : ''} ${completed ? 'opacity-80' : ''}`} />
          <div className={`absolute inset-0 rounded-2xl border-2 border-dashed border-zinc-300 ${active ? 'animate-spin' : ''}`} style={{ animationDuration: '5s' }} />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.18em] text-zinc-900">
            {AGENT_LABELS[agent].split(' ')[0]}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Spinner agent</p>
          <h3 className="mt-1 text-sm font-semibold text-zinc-950">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{AGENT_LABELS[agent]}</p>
          <p className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${active ? 'bg-amber-100 text-amber-800' : waiting ? 'bg-blue-100 text-blue-800' : blocked ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}`}>
            {status.replaceAll('_', ' ')}
          </p>
        </div>
      </div>
    </div>
  );
}
