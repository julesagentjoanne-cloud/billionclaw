import Link from 'next/link';
import { ReasoningCriteriaCard } from '@/components/ReasoningCriteriaCard';
import { SectionCard } from '@/components/SectionCard';
import { AGENT_LABELS, DemoReport } from '@/lib/demoReport';

export function ReportView({ report }: { report: DemoReport }) {
  return (
    <>
      <div className="mb-8 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startupClaw report</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">{report.startupName}</h1>
        <p className="mt-3 text-lg text-zinc-600">{report.statement}</p>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <ReasoningCriteriaCard title="Principles" bullets={report.reasoningCriteria.principles} />
        <ReasoningCriteriaCard title="Decision criteria" bullets={report.reasoningCriteria.decisions} />
        <ReasoningCriteriaCard title="Applied to this startup" bullets={report.reasoningCriteria.application} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Startup interpretation">
          <p>{report.interpretation}</p>
        </SectionCard>

        <SectionCard title="Existing demand evidence">
          <ul className="list-disc space-y-2 pl-5">
            {report.demandEvidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="Audience expansion">
          <p><strong>Original:</strong> {report.audienceExpansion.original}</p>
          <p className="mt-3"><strong>Local optimum:</strong> {report.audienceExpansion.local.join(', ')}</p>
          <p className="mt-3"><strong>Global optimum:</strong> {report.audienceExpansion.global.join(', ')}</p>
        </SectionCard>

        <SectionCard title="Alternative buyer mapping">
          <p><strong>Original buyer:</strong> {report.buyerMapping.original}</p>
          <p className="mt-3"><strong>Alternative buyers:</strong> {report.buyerMapping.alternatives.join(', ')}</p>
          <p className="mt-3"><strong>Strongest buyer:</strong> {report.buyerMapping.strongest}</p>
        </SectionCard>

        <SectionCard title="Domain specialist perspectives">
          <p><strong>End-user:</strong> {report.domainPerspectives.endUser}</p>
          <p className="mt-3"><strong>Manager:</strong> {report.domainPerspectives.manager}</p>
          <p className="mt-3"><strong>Executive:</strong> {report.domainPerspectives.executive}</p>
          <p className="mt-3"><strong>Alignment:</strong> {report.domainPerspectives.alignment}</p>
          <p className="mt-3"><strong>Conflict:</strong> {report.domainPerspectives.conflict}</p>
          <p className="mt-3"><strong>Strongest for sale:</strong> {report.domainPerspectives.strongestForSale}</p>
        </SectionCard>

        <SectionCard title="Why now / founding insight / category story">
          <p><strong>Why now:</strong> {report.whyNow}</p>
          <p className="mt-3"><strong>Founding insight:</strong> {report.foundingInsight}</p>
          <p className="mt-3"><strong>Category story:</strong> {report.categoryStory}</p>
        </SectionCard>

        <SectionCard title="Distribution / trust / embedding">
          <p><strong>Distribution advantage:</strong> {report.distributionAdvantage}</p>
          <p className="mt-3"><strong>Trust architecture:</strong> {report.trustArchitecture}</p>
          <p className="mt-3"><strong>Habit/workflow embedding:</strong> {report.habitEmbedding}</p>
        </SectionCard>

        <SectionCard title="Wedge / leverage / revenue proximity">
          <p><strong>Wedge expansion:</strong> {report.wedgeExpansion}</p>
          <p className="mt-3"><strong>Leverage architecture:</strong> {report.leverageArchitecture}</p>
          <p className="mt-3"><strong>Revenue proximity:</strong> {report.revenueProximity}</p>
        </SectionCard>

        <SectionCard title="Stage and bottleneck">
          <p><strong>Stage:</strong> {report.stage}</p>
          <p className="mt-3"><strong>Bottleneck:</strong> {report.bottleneck}</p>
          <p className="mt-3"><strong>Cat persona:</strong> {report.catPersona}</p>
        </SectionCard>

        <SectionCard title="Best next move">
          <p>{report.nextMove}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {report.topActions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="What startupClaw did">
          <ul className="list-disc space-y-2 pl-5">
            {report.whatStartupClawDid.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </SectionCard>
      </div>

      <section className="mt-8 rounded-2xl border border-black bg-zinc-950 p-6 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Recommended next</p>
        <h2 className="mt-2 text-2xl font-semibold">{AGENT_LABELS[report.recommendedAgent]}</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          startupClaw should not stop at diagnosis. The next step is choosing the execution module that can create useful work immediately.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/workspace" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Open startup workspace</Link>
          <Link href="/agents" className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white">View execution agents</Link>
          <Link href={`/asset?agent=${report.recommendedAgent}`} className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white">Generate agent asset</Link>
        </div>
      </section>
    </>
  );
}
