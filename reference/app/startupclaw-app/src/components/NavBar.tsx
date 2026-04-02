import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-950">
          startupClaw
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-700">
          <Link href="/analyze">Analyze</Link>
          <Link href="/report">Reports</Link>
          <Link href="/workspace">Workspace</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/security">Security</Link>
        </div>
      </div>
    </nav>
  );
}
