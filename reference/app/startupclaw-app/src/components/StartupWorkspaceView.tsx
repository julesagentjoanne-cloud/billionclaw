'use client';

import { ExecutionStatusPanel } from '@/components/ExecutionStatusPanel';
import { PixelAgentSpinner } from '@/components/PixelAgentSpinner';
import { SectionCard } from '@/components/SectionCard';
import { StartupWorkspace } from '@/lib/workspace';
import { useState } from 'react';

export function StartupWorkspaceView({
  workspace,
  onAcceptUpdate,
  onRejectUpdate,
  onOverrideField,
  onCompleteTask,
}: {
  workspace: StartupWorkspace;
  onAcceptUpdate: (updateId: string) => void;
  onRejectUpdate: (updateId: string) => void;
  onOverrideField: (fieldId: string, value: string) => void;
  onCompleteTask: (taskId: string) => void;
}) {
  const pendingUpdates = workspace.stateUpdates.filter((item) => item.status === 'proposed');
  const [stageOverride, setStageOverride] = useState(workspace.stage.value);
  const [audienceOverride, setAudienceOverride] = useState(workspace.fields.find((field) => field.id === 'best-audience')?.value ?? '');
  const [buyerOverride, setBuyerOverride] = useState(workspace.fields.find((field) => field.id === 'strongest-buyer')?.value ?? '');
  const [channelOverride, setChannelOverride] = useState(workspace.fields.find((field) => field.id === 'best-channel')?.value ?? '');
  const [messageOverride, setMessageOverride] = useState(workspace.fields.find((field) => field.id === 'best-message')?.value ?? '');
  const [offerOverride, setOfferOverride] = useState(workspace.fields.find((field) => field.id === 'best-offer')?.value ?? '');

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startup workspace</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">{workspace.startupName}</h1>
        <p className="mt-3 text-lg text-zinc-600">A stateful view of how the startup is changing over time, what is being tested, and what startupClaw thinks is currently true.</p>
      </div>

      <div className="mb-8">
        <ExecutionStatusPanel
          title="Current startup workspace status"
          level={pendingUpdates.length ? 'working' : 'ready'}
          canDoNow={[
            'Show the current stage, bottleneck, and best-known strategic fields',
            'Track hypotheses, tasks, timeline events, and state-change proposals',
            'Turn task completion into concrete proposed changes to startup state',
          ]}
          aiDoing={[
            pendingUpdates.length ? 'Generating and queuing structured state updates from completed tasks' : 'Workspace state is up to date with accepted changes',
            'Recalculating the next best expert when state changes are accepted or overridden',
            'Queuing the next useful task based on the latest startup understanding',
          ]}
          userNeeded={[
            'Complete tasks to generate new state updates',
            'Accept or reject proposed state changes when the evidence is strong enough',
            'Override stage, audience, or buyer when you know the reality better than the inference',
          ]}
        />
      </div>

      <div className="mb-8">
        <SectionCard title="Spinner agents at work">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workspace.tasks.filter((task) => task.status !== 'completed').slice(0, 6).map((task) => (
              <PixelAgentSpinner key={task.id} agent={task.agent} status={task.status} title={task.title} />
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Current state">
          <ul className="space-y-3 text-sm">
            <li><strong>{workspace.stage.label}:</strong> {workspace.stage.value}</li>
            <li><strong>{workspace.bottleneck.label}:</strong> {workspace.bottleneck.value}</li>
            <li><strong>{workspace.recommendedAgent.label}:</strong> {workspace.recommendedAgent.value}</li>
          </ul>
        </SectionCard>

        <SectionCard title="Tracked fields">
          <ul className="space-y-3 text-sm">
            {workspace.fields.map((field) => (
              <li key={field.id}>
                <strong>{field.label}:</strong> {field.value}
                <div className="text-zinc-500">Confidence: {field.confidence} · Source: {field.source}{field.founderOverride ? ' · Founder override' : ''}</div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Hypotheses">
          <ul className="space-y-3 text-sm">
            {workspace.hypotheses.map((item) => (
              <li key={item.id}>
                <strong>{item.label}</strong>
                <div className="text-zinc-500">{item.type} · {item.status}</div>
                <div>{item.reason}</div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Founder overrides">
          <div className="space-y-4 text-sm">
            <div>
              <label className="mb-1 block font-semibold">Stage</label>
              <input value={stageOverride} onChange={(e) => setStageOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('stage', stageOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override stage</button>
            </div>
            <div>
              <label className="mb-1 block font-semibold">Best audience</label>
              <input value={audienceOverride} onChange={(e) => setAudienceOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('best-audience', audienceOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override audience</button>
            </div>
            <div>
              <label className="mb-1 block font-semibold">Strongest buyer</label>
              <input value={buyerOverride} onChange={(e) => setBuyerOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('strongest-buyer', buyerOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override buyer</button>
            </div>
            <div>
              <label className="mb-1 block font-semibold">Best channel</label>
              <input value={channelOverride} onChange={(e) => setChannelOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('best-channel', channelOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override channel</button>
            </div>
            <div>
              <label className="mb-1 block font-semibold">Best message</label>
              <input value={messageOverride} onChange={(e) => setMessageOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('best-message', messageOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override message</button>
            </div>
            <div>
              <label className="mb-1 block font-semibold">Best offer</label>
              <input value={offerOverride} onChange={(e) => setOfferOverride(e.target.value)} className="w-full rounded-xl border border-zinc-300 p-3" />
              <button onClick={() => onOverrideField('best-offer', offerOverride)} className="mt-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Override offer</button>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Proposed state updates">
          {pendingUpdates.length ? (
            <ul className="space-y-4 text-sm">
              {pendingUpdates.map((update) => (
                <li key={update.id} className="rounded-xl border border-zinc-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <strong>{update.fieldLabel}</strong>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">{update.status}</span>
                  </div>
                  <p className="mt-2"><strong>Old:</strong> {update.oldValue}</p>
                  <div className="mt-1">
                    <strong>New:</strong>
                    <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-zinc-50 p-3 text-sm text-zinc-800">{update.newValue}</pre>
                  </div>
                  <p className="mt-2 text-zinc-700"><strong>Why:</strong> {update.why}</p>
                  <p className="mt-1 text-zinc-500">Confidence: {update.confidence} · Source task: {update.sourceTaskId}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button onClick={() => onAcceptUpdate(update.id)} className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Accept update</button>
                    <button onClick={() => onRejectUpdate(update.id)} className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-600">No pending state updates right now. Accepted changes will appear in the timeline and tracked fields.</p>
          )}
        </SectionCard>

        <SectionCard title="Task output engine">
          <p className="text-sm text-zinc-700">Completing a task now generates structured proposed changes to startup state instead of only changing the task status.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Research tasks propose audience/buyer updates</li>
            <li>GTM tasks propose stage/next-move updates</li>
            <li>Retention tasks propose bottleneck and lifecycle updates</li>
          </ul>
        </SectionCard>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Field history">
          <ul className="space-y-4 text-sm">
            {workspace.fieldHistory.length ? workspace.fieldHistory.map((entry) => (
              <li key={entry.id} className="rounded-xl border border-zinc-200 p-4">
                <strong>{entry.fieldLabel}</strong>
                <p className="mt-2 text-zinc-700">{entry.oldValue} → {entry.newValue}</p>
                <p className="mt-2 text-zinc-700">Reason: {entry.reason}</p>
                <p className="mt-2 text-zinc-500">Source: {entry.source}</p>
              </li>
            )) : <p className="text-zinc-600">No field-history entries yet. Accept updates or use founder overrides to build the history trail.</p>}
          </ul>
        </SectionCard>

        <SectionCard title="Evidence objects">
          <ul className="space-y-4 text-sm">
            {workspace.evidence.length ? workspace.evidence.map((item) => (
              <li key={item.id} className="rounded-xl border border-zinc-200 p-4">
                <strong>{item.fieldLabel}</strong>
                <p className="mt-2 text-zinc-700">{item.summary}</p>
                <p className="mt-2 text-zinc-500">Source: {item.source} · Confidence: {item.confidence}</p>
              </li>
            )) : <p className="text-zinc-600">No evidence objects yet. Complete tasks to generate evidence tied to state changes.</p>}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Tasks">
          <ul className="space-y-4 text-sm">
            {workspace.tasks.map((task) => (
              <li key={task.id} className="rounded-xl border border-zinc-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <strong>{task.title}</strong>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-700">{task.status.replaceAll('_', ' ')}</span>
                </div>
                <p className="mt-2 text-zinc-700"><strong>AI:</strong> {task.aiDoing}</p>
                <p className="mt-2 text-zinc-700"><strong>User:</strong> {task.userNeeded}</p>
                {task.output ? <p className="mt-2 text-zinc-700"><strong>Output:</strong> {task.output}</p> : null}
                {task.blockedReason ? <p className="mt-2 text-rose-700"><strong>Blocked because:</strong> {task.blockedReason}</p> : null}
                {task.status !== 'completed' && task.status !== 'blocked' ? (
                  <button onClick={() => onCompleteTask(task.id)} className="mt-4 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Complete task and generate updates</button>
                ) : null}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Timeline">
          <ul className="space-y-4 text-sm">
            {workspace.timeline.map((event) => (
              <li key={event.id} className="rounded-xl border border-zinc-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <strong>{event.title}</strong>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-700">{event.type.replaceAll('_', ' ')}</span>
                </div>
                <p className="mt-2 text-zinc-700">{event.detail}</p>
                <p className="mt-2 text-zinc-500">By: {event.by}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </main>
  );
}
