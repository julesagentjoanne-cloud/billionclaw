'use client';

import Link from 'next/link';
import { ExecutionStatusPanel } from '@/components/ExecutionStatusPanel';
import { ReportView } from '@/components/ReportView';
import { readGeneratedReport } from '@/components/runtime';
import { demoReports, getReportById } from '@/lib/demoReport';
import { GeneratedReport } from '@/lib/startupclaw';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

export function ReportPageClient() {
  const searchParams = useSearchParams();
  const isGenerated = searchParams.get('generated') === '1';
  const selectedCase = searchParams.get('case');

  const report = useMemo(() => {
    if (isGenerated) {
      return readGeneratedReport<GeneratedReport>() ?? getReportById(undefined);
    }
    return getReportById(selectedCase);
  }, [isGenerated, selectedCase]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex flex-wrap gap-3">
        <Link href="/report?generated=1" className={`rounded-xl border px-4 py-2 text-sm font-semibold ${isGenerated ? 'border-black bg-black text-white' : 'border-zinc-300 text-zinc-900'}`}>
          Your generated report
        </Link>
        {demoReports.map((item) => (
          <Link
            key={item.id}
            href={`/report?case=${item.id}`}
            className={`rounded-xl border px-4 py-2 text-sm font-semibold ${!isGenerated && item.id === report.id ? 'border-black bg-black text-white' : 'border-zinc-300 text-zinc-900'}`}
          >
            {item.startupName}
          </Link>
        ))}
      </div>
      {'source' in report ? (
        <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 shadow-sm">
          Report source: <strong>{report.source === 'llm' ? 'LLM-generated' : 'Fallback logic'}</strong>
        </div>
      ) : null}
      <div className="mb-8">
        <ExecutionStatusPanel
          title="Current report status"
          level={'source' in report && report.source === 'llm' ? 'ready' : 'working'}
          canDoNow={[
            'Show the startup diagnosis and recommended expert agent',
            'Explain what startupClaw did and what it recommends next',
            'Move you into agents and asset generation directly from the report',
          ]}
          aiDoing={[
            'Interpreting the startup through the venture-studio logic',
            'Selecting the best next expert to move the startup forward',
            'Preparing the next execution path based on the current bottleneck',
          ]}
          userNeeded={[
            'Review whether the diagnosis matches reality',
            'Provide missing external data only if a later step depends on it',
            'Choose whether to generate the next work package now',
          ]}
        />
      </div>
      <ReportView report={report} />
    </main>
  );
}
