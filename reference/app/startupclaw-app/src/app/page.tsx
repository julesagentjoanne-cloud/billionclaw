import Link from 'next/link';
import { CaseCard } from '@/components/CaseCard';
import { ExecutionStatusPanel } from '@/components/ExecutionStatusPanel';
import { MetricCard } from '@/components/MetricCard';
import { ProductSurfaceCard } from '@/components/ProductSurfaceCard';
import { demoReports } from '@/lib/demoReport';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-10 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startupClaw</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-zinc-950">
          Turn one startup idea statement into a report and execution path.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-zinc-600">
          startupClaw helps founders find better audiences, buyers, GTM angles, and the next useful work to do — before wasting months building the wrong thing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/analyze" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">
            Generate a startup report
          </Link>
          <Link href="/report" className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold text-zinc-900">
            View demo report
          </Link>
          <Link href="/workspace" className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold text-zinc-900">
            Open startup workspace
          </Link>
          <Link href="/security" className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold text-zinc-900">
            Security baseline
          </Link>
        </div>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        <MetricCard label="Input" value="1 statement" detail="A founder starts with one sharp business statement." />
        <MetricCard label="Output" value="Full report" detail="startupClaw returns a startup intelligence report, not vague advice." />
        <MetricCard label="Next step" value="1 agent" detail="The system recommends the fastest execution agent to move forward." />
      </section>

      <div className="mb-10">
        <ExecutionStatusPanel
          title="What startupClaw can do vs what it still needs"
          level="working"
          canDoNow={[
            'Interpret the startup and diagnose the current bottleneck',
            'Recommend the right expert agent and generate starter assets',
            'Show what logic is already productized in the app UI',
          ]}
          aiDoing={[
            'Turning diagnosis into execution paths and agent workflows',
            'Surfacing report sections, agent cards, and output views',
            'Making blocked or missing-access states visible in the product',
          ]}
          userNeeded={[
            'Provide external tool access only when a workflow depends on a missing integration or account',
            'Review/edit generated outputs when human judgment matters',
            'Approve launches or connect publishing systems when needed',
          ]}
        />
      </div>

      <section className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-950">What goes in</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
            <li>We are building X for Y</li>
            <li>They currently use Z</li>
            <li>They should choose us because A</li>
            <li>They would pay because B</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-950">What comes out</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
            <li>Startup interpretation</li>
            <li>Audience expansion</li>
            <li>Alternative buyer mapping</li>
            <li>Stage and bottleneck diagnosis</li>
            <li>Best next move + execution agent</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Find better audiences',
            body: 'startupClaw expands the founder’s first audience guess into nearby and non-obvious options.',
          },
          {
            title: 'Find better buyers',
            body: 'It maps who uses the product, who benefits, and who might be the stronger commercial buyer.',
          },
          {
            title: 'Execute the next work',
            body: 'After the report, founders can choose an execution agent to generate real assets and move faster.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-950">{item.title}</h3>
            <p className="mt-3 text-zinc-600">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-zinc-950">Shared product surfaces</h2>
          <p className="mt-2 text-zinc-600">The venture builder should always show what the AI is doing, what is done, what is blocked, and what it expects from the founder.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ProductSurfaceCard title="Report" body="Diagnosis first, then the right expert and next move." bullets={['Current bottleneck', 'Recommended expert agent', 'Top next actions']} />
          <ProductSurfaceCard title="Execution workspace" body="A clear work area for active tasks, inputs, and status." bullets={['AI doing now', 'Done already', 'What the founder still needs to provide']} />
          <ProductSurfaceCard title="Output + review" body="Assets and reviews should make progress visible and actionable." bullets={['Generated work package', 'Blocked/missing-access states', 'Next recommendation after review']} />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Demo startup cases</h2>
            <p className="mt-2 text-zinc-600">Stress-test the system on multiple startup types.</p>
          </div>
          <Link href="/report" className="text-sm font-semibold text-zinc-900 underline">Open report viewer</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {demoReports.map((report) => (
            <CaseCard key={report.id} report={report} />
          ))}
        </div>
      </section>
    </main>
  );
}
