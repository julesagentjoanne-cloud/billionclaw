export function ReasoningCriteriaCard({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">How startupClaw reasoned</p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-950">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
