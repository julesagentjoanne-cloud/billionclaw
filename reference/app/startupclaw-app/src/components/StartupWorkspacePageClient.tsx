'use client';

import { readGeneratedReport, readWorkspaceState, saveWorkspaceState } from '@/components/runtime';
import { StartupWorkspaceView } from '@/components/StartupWorkspaceView';
import { demoReport } from '@/lib/demoReport';
import { GeneratedReport } from '@/lib/startupclaw';
import { applyStateUpdate, buildWorkspace, completeTaskAndGenerateUpdates, overrideWorkspaceField, StartupWorkspace } from '@/lib/workspace';
import { useEffect, useMemo, useState } from 'react';

export function StartupWorkspacePageClient() {
  const [generated] = useState<GeneratedReport | null>(() => readGeneratedReport<GeneratedReport>());
  const baseWorkspace = useMemo(() => buildWorkspace(generated ?? demoReport), [generated]);
  const [workspace, setWorkspace] = useState<StartupWorkspace>(() => {
    const stored = readWorkspaceState<StartupWorkspace>();
    return stored && stored.startupName === baseWorkspace.startupName ? stored : baseWorkspace;
  });

  useEffect(() => {
    setWorkspace((current) => current.startupName === baseWorkspace.startupName ? current : baseWorkspace);
  }, [baseWorkspace]);

  useEffect(() => {
    saveWorkspaceState(workspace);
  }, [workspace]);

  return (
    <StartupWorkspaceView
      workspace={workspace}
      onAcceptUpdate={(updateId) => setWorkspace((current) => applyStateUpdate(current, updateId, 'accepted'))}
      onRejectUpdate={(updateId) => setWorkspace((current) => applyStateUpdate(current, updateId, 'rejected'))}
      onOverrideField={(fieldId, value) => setWorkspace((current) => overrideWorkspaceField(current, fieldId, value))}
      onCompleteTask={(taskId) => setWorkspace((current) => completeTaskAndGenerateUpdates(current, taskId))}
    />
  );
}
