export const GENERATED_REPORT_KEY = 'startupclaw-generated-report';
export const WORKSPACE_STATE_KEY = 'startupclaw-workspace-state-v2';

export function readGeneratedReport<T>() {
  if (typeof window === 'undefined') return null;
  const raw = window.sessionStorage.getItem(GENERATED_REPORT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function saveGeneratedReport(value: unknown) {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(GENERATED_REPORT_KEY, JSON.stringify(value));
}

export function clearGeneratedReport() {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(GENERATED_REPORT_KEY);
}

export function readWorkspaceState<T>() {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(WORKSPACE_STATE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function saveWorkspaceState(value: unknown) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(WORKSPACE_STATE_KEY, JSON.stringify(value));
}

export function clearWorkspaceState() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(WORKSPACE_STATE_KEY);
}
