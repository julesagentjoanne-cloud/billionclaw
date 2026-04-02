import { ReactNode } from 'react';

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold text-zinc-900">{title}</h2>
      <div className="text-zinc-700">{children}</div>
    </section>
  );
}
