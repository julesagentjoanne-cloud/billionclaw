export function ProductSurfaceCard({
  title,
  body,
  bullets,
}: {
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-zinc-950">{title}</h3>
      <p className="mt-3 text-zinc-600">{body}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {bullets.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
