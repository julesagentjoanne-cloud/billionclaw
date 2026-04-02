'use client';

import { FlowSteps } from '@/components/FlowSteps';
import { saveGeneratedReport } from '@/components/runtime';
import { StartupStatementInput } from '@/lib/startupclaw';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const initialState: StartupStatementInput = {
  building: '',
  audience: '',
  alternatives: '',
  advantage: '',
  whyPay: '',
};

export function AnalyzeForm() {
  const router = useRouter();
  const [statement, setStatement] = useState<StartupStatementInput>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(statement),
      });
      const data = await response.json();
      if (!response.ok || !data.report) throw new Error(data.error || 'Failed to generate report');
      saveGeneratedReport(data.report);
      router.push('/report?generated=1');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate report');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startupClaw</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">Business statement</h1>
      <p className="mt-3 max-w-3xl text-lg text-zinc-600">
        Start with a short statement. startupClaw will expand the audience, map better buyers, diagnose the bottleneck, and recommend the next useful work.
      </p>

      <div className="mt-8">
        <FlowSteps />
      </div>

      <form
        className="mt-8 grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          void submit();
        }}
      >
        <textarea className="min-h-24 rounded-xl border border-zinc-300 p-4" placeholder="We are building..." value={statement.building} onChange={(e)=>setStatement({...statement, building:e.target.value})} required />
        <textarea className="min-h-20 rounded-xl border border-zinc-300 p-4" placeholder="It is for..." value={statement.audience} onChange={(e)=>setStatement({...statement, audience:e.target.value})} required />
        <textarea className="min-h-20 rounded-xl border border-zinc-300 p-4" placeholder="They currently use..." value={statement.alternatives} onChange={(e)=>setStatement({...statement, alternatives:e.target.value})} required />
        <textarea className="min-h-20 rounded-xl border border-zinc-300 p-4" placeholder="They should choose us because..." value={statement.advantage} onChange={(e)=>setStatement({...statement, advantage:e.target.value})} required />
        <textarea className="min-h-20 rounded-xl border border-zinc-300 p-4" placeholder="They would pay because..." value={statement.whyPay} onChange={(e)=>setStatement({...statement, whyPay:e.target.value})} required />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" disabled={loading} className="rounded-xl bg-black px-5 py-3 font-semibold text-white disabled:opacity-60">{loading ? 'Generating report...' : 'Generate report'}</button>
          <button type="button" onClick={() => router.push('/report')} className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold text-zinc-900">Use demo example</button>
        </div>
      </form>
    </main>
  );
}
