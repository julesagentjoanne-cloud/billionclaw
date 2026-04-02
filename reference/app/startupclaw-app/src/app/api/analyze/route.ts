import { generateReport } from '@/lib/startupclaw';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const report = await generateReport(body);
    return NextResponse.json({ report });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate report.' }, { status: 500 });
  }
}
