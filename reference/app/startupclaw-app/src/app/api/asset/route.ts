import { generateAgentAsset } from '@/lib/startupclaw';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const asset = await generateAgentAsset(body.agent, body.report);
    return NextResponse.json({ asset });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate asset.' }, { status: 500 });
  }
}
