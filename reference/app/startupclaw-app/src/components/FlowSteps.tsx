export function FlowSteps() {
  const steps = [
    'Business statement',
    'Startup intelligence report',
    'Recommended execution agent',
    'Generated startup asset',
  ];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {steps.map((step, i) => (
        <div key={step} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Step {i + 1}</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">{step}</p>
        </div>
      ))}
    </div>
  );
}
