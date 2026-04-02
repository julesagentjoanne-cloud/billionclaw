type StatusLevel = 'ready' | 'working' | 'blocked';

export function ExecutionStatusPanel({
  title,
  level,
  canDoNow,
  aiDoing,
  userNeeded,
}: {
  title: string;
  level: StatusLevel;
  canDoNow: string[];
  aiDoing: string[];
  userNeeded: string[];
}) {
  const tone = {
    ready: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    working: 'border-amber-200 bg-amber-50 text-amber-900',
    blocked: 'border-rose-200 bg-rose-50 text-rose-900',
  }[level];

  const label = {
    ready: 'Fully executable now',
    working: 'Partially executable now',
    blocked: 'Blocked pending access',
  }[level];

  return (
    <section className={`rounded-2xl border p-5 shadow-sm ${tone}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">Execution status</p>
          <h2 className="mt-2 text-xl font-semibold">{title}</h2>
        </div>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">{label}</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em]">AI can do now</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            {canDoNow.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em]">AI is doing / did</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            {aiDoing.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em]">What the user may need to provide</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            {userNeeded.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
