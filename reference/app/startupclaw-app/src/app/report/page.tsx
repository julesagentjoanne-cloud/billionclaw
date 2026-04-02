import { ReportPageClient } from '@/components/ReportPageClient';
import { Suspense } from 'react';

export default function ReportPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-6xl px-6 py-12 text-zinc-600">Loading report...</main>}>
      <ReportPageClient />
    </Suspense>
  );
}
