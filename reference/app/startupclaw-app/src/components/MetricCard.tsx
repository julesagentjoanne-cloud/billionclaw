export function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-950">{value}</p>
      <p className="mt-2 text-sm text-zinc-600">{detail}</p>
    </div>
  );
}
