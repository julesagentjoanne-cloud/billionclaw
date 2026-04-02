import './globals.css';
import { NavBar } from '@/components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'startupClaw',
  description: 'Turn one startup idea statement into a report and execution path.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-950 antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
