import Link from 'next/link';
import { DemoReport } from '@/lib/demoReport';

export function CaseCard({ report }: { report: DemoReport }) {
  return (
    <Link href={`/report?case=${report.id}`} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-black">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{report.stage}</p>
      <h3 className="mt-3 text-xl font-semibold text-zinc-950">{report.startupName}</h3>
      <p className="mt-3 text-sm text-zinc-600">{report.statement}</p>
      <div className="mt-4 grid gap-2 text-sm text-zinc-800">
        <p><strong>Bottleneck:</strong> {report.bottleneck}</p>
        <p><strong>Revenue proximity:</strong> {report.revenueProximity}</p>
        <p><strong>Recommended agent:</strong> {report.recommendedAgent}</p>
      </div>
    </Link>
  );
}
