'use client';

import { AgentCard } from '@/components/AgentCard';
import { readGeneratedReport } from '@/components/runtime';
import { AGENT_LABELS, AgentType, demoReport } from '@/lib/demoReport';
import { GeneratedReport } from '@/lib/startupclaw';
import { useState } from 'react';

const agents = Object.keys(AGENT_LABELS) as AgentType[];

export function AgentsPageClient() {
  const [generated] = useState<GeneratedReport | null>(() => readGeneratedReport<GeneratedReport>());
  const activeReport = generated ?? demoReport;

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startupClaw</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">Choose an execution agent</h1>
        <p className="mt-3 text-lg text-zinc-600">
          After the report, founders should be able to buy concrete help — not generic analysis. Each agent produces usable work.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-black bg-zinc-950 p-6 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Recommended for current report</p>
        <h2 className="mt-2 text-2xl font-semibold">{AGENT_LABELS[activeReport.recommendedAgent]}</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          startupClaw currently believes this is the fastest route to real signal and progress for {activeReport.startupName}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent} agent={agent} recommended={agent === activeReport.recommendedAgent} />
        ))}
      </div>
    </main>
  );
}
