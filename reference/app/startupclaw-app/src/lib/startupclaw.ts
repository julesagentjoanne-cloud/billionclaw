import { AGENT_LABELS, AgentType, DemoReport, getAgentAsset } from '@/lib/demoReport';

export type StartupStatementInput = {
  building: string;
  audience: string;
  alternatives: string;
  advantage: string;
  whyPay: string;
};

export type GeneratedReport = DemoReport & {
  source: 'llm' | 'fallback';
  generatedAt: string;
  input: StartupStatementInput;
};

export type GeneratedAsset = {
  title: string;
  body: string[];
  whyItMatters: string;
  agent: AgentType;
  source: 'llm' | 'fallback';
};

const MODEL = 'gpt-4.1-mini';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'startup';
}

function compactLines(items: string[], fallback: string[]) {
  const cleaned = items.map((item) => item.trim()).filter(Boolean);
  return cleaned.length ? cleaned : fallback;
}

function deriveAgent(input: StartupStatementInput): AgentType {
  const text = `${input.building} ${input.audience} ${input.alternatives} ${input.advantage} ${input.whyPay}`.toLowerCase();
  if (/(retention|onboarding|activation|renewal|churn)/.test(text)) return 'retention';
  if (/(message|landing page|copy|brand|positioning|content)/.test(text)) return 'messaging';
  if (/(price|pricing|offer|package)/.test(text)) return 'offer';
  if (/(research|insight|market|competitor)/.test(text)) return 'research';
  if (/(ops|workflow|system|automation|delegate)/.test(text)) return 'ops';
  if (/(growth|gtm|outreach|launch|pipeline|sales)/.test(text)) return 'gtm';
  return 'validation';
}

function fallbackReport(input: StartupStatementInput): GeneratedReport {
  const statement = `We are building ${input.building} for ${input.audience}. They currently use ${input.alternatives}. They should choose us because ${input.advantage}. They would pay because ${input.whyPay}.`;
  const recommendedAgent = deriveAgent(input);
  const startupName = input.building.split(/[,.]/)[0].trim().slice(0, 60) || 'New Startup';
  return {
    id: slugify(startupName),
    startupName,
    statement,
    reasoningCriteria: {
      principles: [
        'A strong startupClaw output should prioritize commercial relevance over vague idea description.',
        'The system should identify what would make this startup more buyable, testable, or learnable next.',
      ],
      decisions: [
        'The main tradeoffs are audience quality, buyer strength, and speed of learning.',
        'The most important question is which bottleneck matters most right now.',
      ],
      application: [
        'The current recommendation is shaped by the startup statement, audience guess, and why-pay logic provided.',
        'startupClaw uses that to pick one main bottleneck and one best next expert.',
      ],
    },
    interpretation: `${startupName} looks like a focused attempt to solve a painful workflow for ${input.audience}. The core question is whether the wedge is sharp enough and whether the buyer is strong enough to convert quickly.`,
    demandEvidence: compactLines([
      `The target audience already relies on ${input.alternatives}, which means there is existing behavior to displace rather than a market to invent from scratch.`,
      `The claimed advantage — ${input.advantage} — suggests a practical wedge, but it still needs proof against current alternatives.`,
      `The payment logic — ${input.whyPay} — points to commercial intent if the pain is urgent and measurable.`,
    ], ['Users already show workaround behavior.', 'There is a plausible painkiller wedge.', 'Commercial proof still needs validation.']),
    audienceExpansion: {
      original: input.audience,
      local: compactLines([
        `${input.audience} with acute pain`,
        `Adjacent operators around ${input.audience}`,
        'High-urgency early adopters',
      ], ['Adjacent users', 'Operators', 'Early adopters']),
      global: compactLines([
        'Sponsors, managers, or budget owners around the workflow',
        'Channel partners with repeated exposure to the pain',
        'Programs or teams that need the outcome at scale',
      ], ['Budget owners', 'Partners', 'Teams/programs']),
    },
    buyerMapping: {
      original: input.audience,
      alternatives: compactLines([
        'Team lead / manager',
        'Operator closest to the workflow bottleneck',
        'Budget owner tied to the outcome',
      ], ['Manager', 'Operator', 'Budget owner']),
      strongest: 'The buyer with the clearest budget and strongest urgency around the problem.',
    },
    domainPerspectives: {
      endUser: `The end-user wants ${input.advantage.toLowerCase() || 'a clearly better workflow'} without extra friction.`,
      manager: 'The manager wants a repeatable system that reduces noise and improves output consistency.',
      executive: `The executive buyer cares about the business result behind "${input.whyPay}" rather than the feature list.`,
      alignment: 'All stakeholders benefit if the workflow becomes faster, clearer, or more reliable.',
      conflict: 'The end-user may value usability while the buyer values measurable ROI and implementation confidence.',
      strongestForSale: 'The strongest sale is usually to the person who owns the cost of the current workaround.',
    },
    catPersona: `Buyer who feels the pain behind "${input.whyPay}" often enough to act now.`,
    whyNow: 'The opportunity is strongest if market conditions, tooling shifts, or cost pressure make the old workaround feel increasingly broken.',
    foundingInsight: `The hidden insight is that the real job is not the surface feature — it is helping ${input.audience} escape the inefficiency of ${input.alternatives}.`,
    categoryStory: `${startupName} should frame itself around the job/outcome, not just the mechanism.`,
    distributionAdvantage: 'Distribution still needs proof. Start with one concentrated channel where this pain is already discussed or purchased.',
    trustArchitecture: 'Trust will depend on proving the output is better than the current workaround and safe enough to adopt in real workflows.',
    wedgeExpansion: 'Start with the smallest painful wedge, then expand into adjacent users and neighboring workflow steps.',
    habitEmbedding: 'The product wins if it becomes part of an existing recurring workflow rather than a separate tool people must remember to open.',
    leverageArchitecture: 'Use software and agents for synthesis and output, but keep the founder close to positioning and learning loops early on.',
    revenueProximity: 'Medium',
    stage: 'Solution validation',
    bottleneck: 'Segment + buyer clarity',
    nextMove: `Validate whether ${input.audience} is the best initial segment and whether "${input.whyPay}" is strong enough to convert into willingness to buy.`,
    topActions: compactLines([
      `Interview 8-10 people who currently use ${input.alternatives}.`,
      `Test whether ${input.advantage} is the strongest reason to switch.`,
      `Create one sharp landing page that sells the outcome implied by "${input.whyPay}".`,
    ], ['Run interviews', 'Test the switch trigger', 'Build one sharp landing page']),
    recommendedAgent,
    whatStartupClawDid: [
      'Turned the founder statement into a structured market interpretation.',
      'Expanded the likely audience and mapped stronger buyer options.',
      'Diagnosed the current bottleneck and picked one best next move.',
      `Recommended the ${AGENT_LABELS[recommendedAgent]} as the fastest next work package.`,
    ],
    source: 'fallback',
    generatedAt: new Date().toISOString(),
    input,
  };
}

export async function generateReport(input: StartupStatementInput): Promise<GeneratedReport> {
  if (!process.env.OPENAI_API_KEY) return fallbackReport(input);

  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['startupName','statement','reasoningCriteria','interpretation','demandEvidence','audienceExpansion','buyerMapping','domainPerspectives','catPersona','whyNow','foundingInsight','categoryStory','distributionAdvantage','trustArchitecture','wedgeExpansion','habitEmbedding','leverageArchitecture','revenueProximity','stage','bottleneck','nextMove','topActions','recommendedAgent','whatStartupClawDid'],
    properties: {
      startupName: { type: 'string' },
      statement: { type: 'string' },
      reasoningCriteria: { type: 'object', additionalProperties: false, required: ['principles','decisions','application'], properties: { principles: { type: 'array', items: { type: 'string' } }, decisions: { type: 'array', items: { type: 'string' } }, application: { type: 'array', items: { type: 'string' } } } },
      interpretation: { type: 'string' },
      demandEvidence: { type: 'array', items: { type: 'string' } },
      audienceExpansion: { type: 'object', additionalProperties: false, required: ['original','local','global'], properties: { original: { type: 'string' }, local: { type: 'array', items: { type: 'string' } }, global: { type: 'array', items: { type: 'string' } } } },
      buyerMapping: { type: 'object', additionalProperties: false, required: ['original','alternatives','strongest'], properties: { original: { type: 'string' }, alternatives: { type: 'array', items: { type: 'string' } }, strongest: { type: 'string' } } },
      domainPerspectives: { type: 'object', additionalProperties: false, required: ['endUser','manager','executive','alignment','conflict','strongestForSale'], properties: { endUser: { type: 'string' }, manager: { type: 'string' }, executive: { type: 'string' }, alignment: { type: 'string' }, conflict: { type: 'string' }, strongestForSale: { type: 'string' } } },
      catPersona: { type: 'string' }, whyNow: { type: 'string' }, foundingInsight: { type: 'string' }, categoryStory: { type: 'string' }, distributionAdvantage: { type: 'string' }, trustArchitecture: { type: 'string' }, wedgeExpansion: { type: 'string' }, habitEmbedding: { type: 'string' }, leverageArchitecture: { type: 'string' }, revenueProximity: { type: 'string', enum: ['High','Medium','Low'] }, stage: { type: 'string' }, bottleneck: { type: 'string' }, nextMove: { type: 'string' }, topActions: { type: 'array', items: { type: 'string' } }, recommendedAgent: { type: 'string', enum: ['research','validation','messaging','offer','gtm','killscale','creative','content','community','retention','ops'] }, whatStartupClawDid: { type: 'array', items: { type: 'string' } }
    }
  };

  const prompt = `You are startupClaw, a sharp founder GTM operator. Analyze this startup input and produce a practical report. Prefer direct language, concrete buyers, practical next moves, and speed-to-signal.\n\nInput:\n- We are building: ${input.building}\n- It is for: ${input.audience}\n- They currently use: ${input.alternatives}\n- They should choose us because: ${input.advantage}\n- They would pay because: ${input.whyPay}\n\nRules:\n- Be specific and commercially minded.\n- Recommend only one agent.\n- Make topActions immediately testable.\n- Keep each string compact.\n- Return valid JSON only.`;

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'startupclaw_report',
          schema,
          strict: true,
        },
      },
    }),
  });

  if (!response.ok) return fallbackReport(input);
  const data = await response.json();
  const content = data.output?.[0]?.content?.[0]?.text;
  if (!content) return fallbackReport(input);
  const parsed = JSON.parse(content);
  return {
    ...parsed,
    id: slugify(parsed.startupName),
    source: 'llm',
    generatedAt: new Date().toISOString(),
    input,
  } satisfies GeneratedReport;
}

export async function generateAgentAsset(agent: AgentType, report: GeneratedReport): Promise<GeneratedAsset> {
  if (!process.env.OPENAI_API_KEY) {
    const fallback = getAgentAsset(agent);
    return {
      ...fallback,
      whyItMatters: `This ${AGENT_LABELS[agent]} output is designed to help ${report.startupName} move from analysis into concrete execution immediately.`,
      agent,
      source: 'fallback',
    };
  }

  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['title','body','whyItMatters'],
    properties: {
      title: { type: 'string' },
      body: { type: 'array', items: { type: 'string' } },
      whyItMatters: { type: 'string' },
    },
  };

  const prompt = `You are the ${AGENT_LABELS[agent]} inside startupClaw. Generate one immediately useful startup asset based on this report.\n\nStartup: ${report.startupName}\nStatement: ${report.statement}\nInterpretation: ${report.interpretation}\nBottleneck: ${report.bottleneck}\nBest next move: ${report.nextMove}\nTop actions: ${report.topActions.join(' | ')}\nRecommended agent: ${report.recommendedAgent}\n\nRules:\n- Make the asset practical and ready to use.\n- Return 3-7 bullet items in body.\n- Keep it compact.\n- Return valid JSON only.`;

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'startupclaw_asset',
          schema,
          strict: true,
        },
      },
    }),
  });

  if (!response.ok) {
    const fallback = getAgentAsset(agent);
    return {
      ...fallback,
      whyItMatters: `This ${AGENT_LABELS[agent]} output is designed to help ${report.startupName} move from analysis into concrete execution immediately.`,
      agent,
      source: 'fallback',
    };
  }

  const data = await response.json();
  const content = data.output?.[0]?.content?.[0]?.text;
  if (!content) {
    const fallback = getAgentAsset(agent);
    return {
      ...fallback,
      whyItMatters: `This ${AGENT_LABELS[agent]} output is designed to help ${report.startupName} move from analysis into concrete execution immediately.`,
      agent,
      source: 'fallback',
    };
  }

  const parsed = JSON.parse(content);
  return {
    ...parsed,
    agent,
    source: 'llm',
  } satisfies GeneratedAsset;
}
