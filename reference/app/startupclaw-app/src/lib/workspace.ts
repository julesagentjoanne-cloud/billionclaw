import { AgentType, AGENT_LABELS, DemoReport } from '@/lib/demoReport';

export type WorkspaceField = {
  id: string;
  label: string;
  value: string;
  confidence: 'High' | 'Medium' | 'Low';
  source: string;
  founderOverride?: boolean;
};

export type WorkspaceHypothesis = {
  id: string;
  type: 'audience' | 'buyer' | 'channel' | 'offer' | 'message';
  label: string;
  status: 'proposed' | 'researching' | 'tested' | 'winning' | 'rejected' | 'parked';
  reason: string;
};

export type WorkspaceTask = {
  id: string;
  agent: AgentType;
  title: string;
  status: 'queued' | 'running' | 'waiting_for_user' | 'blocked' | 'ready_for_review' | 'completed';
  aiDoing: string;
  userNeeded: string;
  blockedReason?: string;
  output?: string;
};

export type WorkspaceStateUpdate = {
  id: string;
  fieldId: string;
  fieldLabel: string;
  oldValue: string;
  newValue: string;
  confidence: 'High' | 'Medium' | 'Low';
  why: string;
  sourceTaskId: string;
  status: 'proposed' | 'accepted' | 'rejected';
};

export type WorkspaceTimelineEvent = {
  id: string;
  title: string;
  detail: string;
  by: string;
  type: 'state_change' | 'task_update' | 'recommendation';
};

export type WorkspaceFieldHistoryEntry = {
  id: string;
  fieldId: string;
  fieldLabel: string;
  oldValue: string;
  newValue: string;
  reason: string;
  source: string;
};

export type WorkspaceEvidence = {
  id: string;
  fieldId: string;
  fieldLabel: string;
  summary: string;
  source: string;
  confidence: 'High' | 'Medium' | 'Low';
};

export type StartupWorkspace = {
  startupName: string;
  stage: WorkspaceField;
  bottleneck: WorkspaceField;
  recommendedAgent: WorkspaceField;
  fields: WorkspaceField[];
  hypotheses: WorkspaceHypothesis[];
  tasks: WorkspaceTask[];
  stateUpdates: WorkspaceStateUpdate[];
  fieldHistory: WorkspaceFieldHistoryEntry[];
  evidence: WorkspaceEvidence[];
  timeline: WorkspaceTimelineEvent[];
};

const OVERRIDABLE_FIELD_IDS = ['stage', 'best-audience', 'strongest-buyer', 'best-channel', 'best-message', 'best-offer'];

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function findField(workspace: StartupWorkspace, fieldId: string) {
  if (fieldId === 'stage') return workspace.stage;
  if (fieldId === 'bottleneck') return workspace.bottleneck;
  if (fieldId === 'recommended-agent') return workspace.recommendedAgent;
  return workspace.fields.find((field) => field.id === fieldId) ?? null;
}

function nextTaskForAgent(agent: AgentType): WorkspaceTask {
  const map: Record<AgentType, Omit<WorkspaceTask, 'id' | 'agent'>> = {
    research: {
      title: 'Audience and buyer evidence review',
      status: 'ready_for_review',
      aiDoing: 'Synthesizing new audience and buyer evidence from the current startup state.',
      userNeeded: 'Review whether the evidence should change the current startup focus.',
      output: 'Suggested audience and buyer ranking update.',
    },
    validation: {
      title: 'Validation sprint design',
      status: 'ready_for_review',
      aiDoing: 'Preparing interviews and assumption tests for the biggest unknowns.',
      userNeeded: 'Approve which assumption should be tested first.',
      output: 'Validation plan and interview script.',
    },
    messaging: {
      title: 'Positioning refinement task',
      status: 'ready_for_review',
      aiDoing: 'Rewriting the message around the strongest buyer and use case.',
      userNeeded: 'Choose which positioning angle should become the new default.',
      output: 'Positioning and landing-page message pack.',
    },
    offer: {
      title: 'Offer structure refinement',
      status: 'ready_for_review',
      aiDoing: 'Reshaping the smallest useful offer around the strongest early use case.',
      userNeeded: 'Choose the offer version to test next.',
      output: 'Offer draft and pricing test plan.',
    },
    gtm: {
      title: 'First GTM execution task',
      status: 'ready_for_review',
      aiDoing: 'Turning the current diagnosis into one focused GTM experiment.',
      userNeeded: 'Approve the first channel and audience pairing.',
      output: 'Channel test plan and outreach starter pack.',
    },
    killscale: {
      title: 'Campaign triage review',
      status: 'waiting_for_user',
      aiDoing: 'Waiting for live campaign data or manual performance notes.',
      userNeeded: 'Provide campaign data or connect a future ad/reporting source.',
      blockedReason: 'Needs live experiment data before meaningful triage is possible.',
      output: 'Kill/fix/watch/scale board once data is available.',
    },
    creative: {
      title: 'Creative system build',
      status: 'ready_for_review',
      aiDoing: 'Mapping pain angles and building the first creative test pack.',
      userNeeded: 'Provide brand assets later if more precise creative output is needed.',
      output: 'Creative angle matrix and hook shortlist.',
    },
    content: {
      title: 'Content engine starter pack',
      status: 'waiting_for_user',
      aiDoing: 'Drafting the first content engine workflow from current startup state.',
      userNeeded: 'Provide voice samples or previous content to improve voice fidelity.',
      blockedReason: 'Best version needs voice/profile inputs or publishing access later.',
      output: 'Hook research and draft content package.',
    },
    community: {
      title: 'Community model design',
      status: 'ready_for_review',
      aiDoing: 'Designing the first community model around current users and ecosystem value.',
      userNeeded: 'Confirm whether community is a near-term priority.',
      output: 'Community archetype and first rituals.',
    },
    retention: {
      title: 'Activation and retention review',
      status: 'waiting_for_user',
      aiDoing: 'Waiting for activation or churn signals to diagnose lifecycle friction.',
      userNeeded: 'Provide user journey or retention feedback once available.',
      blockedReason: 'Needs onboarding/retention evidence to move beyond generic advice.',
      output: 'Onboarding and retention improvement pack.',
    },
    ops: {
      title: 'Founder leverage cleanup',
      status: 'ready_for_review',
      aiDoing: 'Identifying recurring execution drag and founder bottlenecks.',
      userNeeded: 'Review which workflow pain is most urgent to systematize.',
      output: 'Leverage audit and cleanup priorities.',
    },
  };

  return { id: uid(`task-${agent}`), agent, ...map[agent] };
}

function inferNextAgent(workspace: StartupWorkspace): AgentType {
  const stage = workspace.stage.value.toLowerCase();
  const bottleneck = workspace.bottleneck.value.toLowerCase();
  const nextMove = findField(workspace, 'next-move')?.value.toLowerCase() ?? '';
  const trust = findField(workspace, 'trust-level')?.value.toLowerCase() ?? '';
  const proof = findField(workspace, 'proof-level')?.value.toLowerCase() ?? '';

  if (bottleneck.includes('acquisition') || bottleneck.includes('distribution') || nextMove.includes('channel')) return 'gtm';
  if (bottleneck.includes('message') || bottleneck.includes('position')) return 'messaging';
  if (bottleneck.includes('offer') || bottleneck.includes('pricing')) return 'offer';
  if (bottleneck.includes('retention') || bottleneck.includes('onboarding') || bottleneck.includes('activation')) return 'retention';
  if (bottleneck.includes('trust') || trust.includes('low') || proof.includes('low') || bottleneck.includes('audience') || bottleneck.includes('buyer')) return 'research';
  if (stage.includes('problem discovery') || stage.includes('validation')) return 'validation';
  if (stage.includes('gtm')) return 'gtm';
  return 'research';
}

function extractStructuredRecommendationCandidates(fieldId: string, newValue: string) {
  const lines = newValue
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return [newValue.trim().toLowerCase()];

  if (fieldId === 'best-audience') {
    const primary = lines.find((line) => line.startsWith('Primary:'));
    return primary ? [primary.replace(/^Primary:\s*/i, '').trim().toLowerCase()] : [lines[0].toLowerCase()];
  }

  if (fieldId === 'strongest-buyer') {
    return lines
      .filter((line) => /^\d+\.\s+/.test(line))
      .map((line) => line.replace(/^\d+\.\s+/, '').trim().toLowerCase());
  }

  if (fieldId === 'best-channel') {
    return lines
      .filter((line) => /^\d+\.\s+/.test(line))
      .map((line) => line.replace(/^\d+\.\s+/, '').trim().toLowerCase());
  }

  return [newValue.trim().toLowerCase()];
}

function updateHypothesisStatuses(hypotheses: WorkspaceHypothesis[], fieldId: string, newValue: string): WorkspaceHypothesis[] {
  const fieldTypeMap: Record<string, WorkspaceHypothesis['type'] | undefined> = {
    'best-audience': 'audience',
    'strongest-buyer': 'buyer',
    'best-channel': 'channel',
    'best-offer': 'offer',
    'best-message': 'message',
  };
  const type = fieldTypeMap[fieldId];
  if (!type) return hypotheses;

  const candidates = extractStructuredRecommendationCandidates(fieldId, newValue);

  return hypotheses.map((hypothesis) => {
    if (hypothesis.type !== type) return hypothesis;

    const normalizedLabel = hypothesis.label.trim().toLowerCase();
    const isWinning = candidates.some((candidate) => candidate.includes(normalizedLabel) || normalizedLabel.includes(candidate));

    return {
      ...hypothesis,
      status: isWinning ? 'winning' : (hypothesis.status === 'winning' ? 'tested' : hypothesis.status),
    };
  });
}

function stripLeadIn(value: string) {
  return value
    .replace(/^it is for\s+/i, '')
    .replace(/^we are building .*? for\s+/i, '')
    .trim();
}

function inferPainTheme(workspace: StartupWorkspace) {
  const combined = [
    workspace.bottleneck.value,
    findField(workspace, 'next-move')?.value ?? '',
    findField(workspace, 'category-story')?.value ?? '',
    findField(workspace, 'trust-level')?.value ?? '',
  ].join(' ').toLowerCase();

  if (/(ai search|geo|search visibility|search ranking|seo)/.test(combined)) {
    return {
      primary: 'needing a clearer AI-search / GEO offer',
      wedges: [
        'agencies struggling to prove AI-search visibility to clients',
        'agencies under pressure to productize an AI-search / GEO service fast',
        'agencies losing strategist time to manual AI-search analysis and reporting',
      ],
      adjacent: ['in-house SEO teams at B2B SaaS companies', 'ecommerce growth teams responsible for organic revenue'],
    };
  }

  if (/(pipeline|outbound|acquisition|gtm|distribution|lead)/.test(combined)) {
    return {
      primary: 'under pipeline pressure and needing a faster route to signal',
      wedges: [
        'teams with a near-term pipeline gap to close',
        'teams that need a focused GTM test instead of a broad strategy deck',
        'teams burning founder time on manual outreach or distribution work',
      ],
      adjacent: ['fractional GTM operators serving multiple startups', 'portfolio support teams inside accelerators or venture studios'],
    };
  }

  if (/(trust|proof|renewal|retention|churn)/.test(combined)) {
    return {
      primary: 'with trust and proof gaps that directly affect retention or conversion',
      wedges: [
        'teams getting blocked by missing proof rather than missing features',
        'teams trying to reduce surprise churn or renewal risk',
        'teams needing clearer trust signals before buyers will move',
      ],
      adjacent: ['revenue operations teams', 'customer success leadership teams'],
    };
  }

  return {
    primary: 'with a high-cost version of the problem',
    wedges: [
      'teams feeling the pain frequently enough to act now',
      'teams losing money or time because the workaround is still manual',
      'teams needing a more productized way to solve the same workflow',
    ],
    adjacent: ['adjacent operators who manage the same workflow', 'budget owners responsible for the same outcome'],
  };
}

function buildAudienceRecommendation(workspace: StartupWorkspace, currentAudience: string) {
  const normalizedAudience = stripLeadIn(currentAudience);
  const theme = inferPainTheme(workspace);
  const alternativeHypotheses = workspace.hypotheses
    .filter((item) => item.type === 'audience')
    .map((item) => item.label)
    .filter((label) => label !== currentAudience && label !== normalizedAudience);

  const adjacent = [...new Set([...alternativeHypotheses, ...theme.adjacent])].slice(0, 2);

  return [
    `Primary: ${normalizedAudience} ${theme.primary}`,
    '3 wedges to test:',
    ...theme.wedges.slice(0, 3).map((item, index) => `${index + 1}. ${normalizedAudience} ${item}`),
    '2 adjacent audiences the founder may not be thinking about yet:',
    ...adjacent.map((item, index) => `${index + 1}. ${item}`),
  ].join('\n');
}

function inferBuyerExamples(workspace: StartupWorkspace, currentAudience: string) {
  const audience = stripLeadIn(currentAudience).toLowerCase();
  const combined = [
    audience,
    workspace.bottleneck.value,
    findField(workspace, 'next-move')?.value ?? '',
    findField(workspace, 'category-story')?.value ?? '',
  ].join(' ').toLowerCase();

  if (/(seo|ai search|geo|search visibility)/.test(combined)) {
    return [
      'agency owner responsible for service-line revenue and retention',
      'head of SEO or search strategy lead accountable for client outcomes',
      'client services director responsible for renewals and reporting credibility',
    ];
  }

  if (/(pipeline|outbound|gtm|acquisition|distribution)/.test(combined)) {
    return [
      'founder or GM carrying the pipeline number',
      'head of growth responsible for channel performance',
      'GTM lead who owns outbound or early acquisition experiments',
    ];
  }

  if (/(retention|renewal|churn|customer success)/.test(combined)) {
    return [
      'revenue leader accountable for retention targets',
      'head of customer success responsible for renewal performance',
      'operations lead managing renewal-review workflows',
    ];
  }

  return [
    'owner or operator closest to the commercial pain',
    'team lead accountable for the workflow outcome',
    'budget holder who feels the cost of the current workaround',
  ];
}

function buildBuyerRecommendation(workspace: StartupWorkspace, currentBuyer: string, currentAudience: string) {
  const examples = inferBuyerExamples(workspace, currentAudience);
  return [
    'Principle: the buyer with the clearest budget and strongest urgency around the problem.',
    `Current working audience: ${stripLeadIn(currentAudience)}`,
    '3 buyer examples inside that audience:',
    ...examples.map((item, index) => `${index + 1}. ${item}`),
  ].join('\n');
}

function inferChannelExamples(workspace: StartupWorkspace, currentAudience: string) {
  const audience = stripLeadIn(currentAudience).toLowerCase();
  const combined = [
    audience,
    workspace.bottleneck.value,
    findField(workspace, 'next-move')?.value ?? '',
    findField(workspace, 'category-story')?.value ?? '',
  ].join(' ').toLowerCase();

  if (/(seo|ai search|geo|search visibility)/.test(combined)) {
    return {
      primary: 'go where search operators already discuss client pressure, reporting pain, and new service packaging',
      wedges: [
        'warm outbound to SEO agencies already posting about AI-search or GEO',
        'partner-led intros via SEO consultants, freelancers, or niche operators trusted by agencies',
        'founder-led educational content showing how agencies can package AI-search visibility into a sellable offer',
      ],
      overlooked: ['private SEO operator communities and masterminds', 'client-facing agency partners or white-label SEO providers'],
    };
  }

  if (/(pipeline|outbound|gtm|acquisition|distribution)/.test(combined)) {
    return {
      primary: 'use channels that create fast feedback from buyers already feeling pipeline pressure',
      wedges: [
        'founder-led warm outbound to a tight list of likely buyers',
        'partner distribution through operators already serving the same audience',
        'pain-led content in places where the buyer actively looks for growth solutions',
      ],
      overlooked: ['portfolio support teams and venture studios', 'fractional operators with multiple client accounts'],
    };
  }

  if (/(retention|renewal|churn|customer success)/.test(combined)) {
    return {
      primary: 'use channels where retention owners already compare workflows, tooling, and save motions',
      wedges: [
        'direct outreach to CS or revenue leaders with active renewal pressure',
        'community-led distribution inside RevOps / CS groups',
        'proof-led content built around renewal mistakes, signals, and save workflows',
      ],
      overlooked: ['customer success consultancies', 'revenue operations communities'],
    };
  }

  return {
    primary: 'choose the shortest path to buyers already feeling the pain and already discussing fixes',
    wedges: [
      'founder-led direct outreach to high-fit accounts',
      'partner channels with people already trusted by the same audience',
      'educational content in communities where the problem is already visible',
    ],
    overlooked: ['service providers adjacent to the workflow', 'operator communities around the same problem'],
  };
}

function buildChannelRecommendation(workspace: StartupWorkspace, currentChannel: string, currentAudience: string) {
  const channel = inferChannelExamples(workspace, currentAudience);
  return [
    `Principle: ${channel.primary}`,
    `Current working audience: ${stripLeadIn(currentAudience)}`,
    '3 channel wedges to test:',
    ...channel.wedges.map((item, index) => `${index + 1}. ${item}`),
    '2 overlooked channels worth checking:',
    ...channel.overlooked.slice(0, 2).map((item, index) => `${index + 1}. ${item}`),
  ].join('\n');
}

function buildEvidenceFromUpdate(update: WorkspaceStateUpdate): WorkspaceEvidence {
  return {
    id: uid('evidence'),
    fieldId: update.fieldId,
    fieldLabel: update.fieldLabel,
    summary: `${update.fieldLabel} changed because ${update.why}`,
    source: update.sourceTaskId,
    confidence: update.confidence,
  };
}

function buildHistoryFromUpdate(update: WorkspaceStateUpdate, source: string): WorkspaceFieldHistoryEntry {
  return {
    id: uid('history'),
    fieldId: update.fieldId,
    fieldLabel: update.fieldLabel,
    oldValue: update.oldValue,
    newValue: update.newValue,
    reason: update.why,
    source,
  };
}

function taskOutputGenerators(workspace: StartupWorkspace, task: WorkspaceTask): WorkspaceStateUpdate[] {
  const currentAudience = findField(workspace, 'best-audience')?.value ?? 'Current audience';
  const currentBuyer = findField(workspace, 'strongest-buyer')?.value ?? 'Current buyer';
  const currentMove = findField(workspace, 'next-move')?.value ?? 'Current next move';
  const currentBottleneck = workspace.bottleneck.value;
  const currentStage = workspace.stage.value;
  const currentChannel = findField(workspace, 'best-channel')?.value ?? 'Manual founder-led outreach';
  const currentMessage = findField(workspace, 'best-message')?.value ?? 'Outcome-led positioning';
  const currentOffer = findField(workspace, 'best-offer')?.value ?? 'Pilot offer';
  const currentTraction = findField(workspace, 'traction-signal')?.value ?? 'Early signal';
  const currentProof = findField(workspace, 'proof-level')?.value ?? 'Low proof';
  const currentTrust = findField(workspace, 'trust-level')?.value ?? 'Medium trust';

  const generators: Record<AgentType, WorkspaceStateUpdate[]> = {
    research: [
      { id: uid('update'), fieldId: 'best-audience', fieldLabel: 'Best audience right now', oldValue: currentAudience, newValue: buildAudienceRecommendation(workspace, currentAudience), confidence: 'Medium', why: 'Research task sharpened the audience into one primary segment, three concrete wedges, and two adjacent audiences worth testing next.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'strongest-buyer', fieldLabel: 'Strongest buyer right now', oldValue: currentBuyer, newValue: buildBuyerRecommendation(workspace, currentBuyer, currentAudience), confidence: 'Medium', why: 'Buyer mapping now keeps the core principle but translates it into concrete buyer examples inside the current audience.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'trust-level', fieldLabel: 'Current trust level', oldValue: currentTrust, newValue: 'Needs stronger proof to unlock trust', confidence: 'Medium', why: 'Research uncovered trust barriers that should be addressed explicitly.', sourceTaskId: task.id, status: 'proposed' },
    ],
    validation: [
      { id: uid('update'), fieldId: 'stage', fieldLabel: 'Current stage', oldValue: currentStage, newValue: 'Solution validation', confidence: 'High', why: 'Validation work reduces uncertainty and sharpens what should be proven next.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Run the highest-signal validation sprint and record which assumptions survive.', confidence: 'High', why: 'Validation output should change the immediate operating move.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'proof-level', fieldLabel: 'Current proof level', oldValue: currentProof, newValue: 'Moderate proof forming', confidence: 'Medium', why: 'Validation work increases the quality of proof available to the startup.', sourceTaskId: task.id, status: 'proposed' },
    ],
    messaging: [
      { id: uid('update'), fieldId: 'category-story', fieldLabel: 'Current category story', oldValue: findField(workspace, 'category-story')?.value ?? 'Current category story', newValue: 'Sharper positioning around the strongest buyer outcome', confidence: 'Medium', why: 'Messaging work improved the narrative around the most urgent value.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'best-message', fieldLabel: 'Best message right now', oldValue: currentMessage, newValue: 'Specific outcome-led promise with proof and urgency', confidence: 'High', why: 'Messaging work should improve the best message in market.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Use the sharpened positioning in the next landing page or GTM test.', confidence: 'High', why: 'Messaging output changes what should happen next.', sourceTaskId: task.id, status: 'proposed' },
    ],
    offer: [
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Offer clarity and packaging', confidence: 'Medium', why: 'Offer work suggests packaging/pricing is the main constraint now.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'best-offer', fieldLabel: 'Best offer right now', oldValue: currentOffer, newValue: 'Smallest useful paid pilot', confidence: 'High', why: 'Offer work should improve the practical structure of what is sold.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Test the smallest useful offer with the strongest buyer and use case.', confidence: 'High', why: 'Offer output should directly shape the next experiment.', sourceTaskId: task.id, status: 'proposed' },
    ],
    gtm: [
      { id: uid('update'), fieldId: 'stage', fieldLabel: 'Current stage', oldValue: currentStage, newValue: 'Early GTM', confidence: 'Medium', why: 'A GTM task implies the startup is moving into live market testing.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'best-channel', fieldLabel: 'Best channel right now', oldValue: currentChannel, newValue: buildChannelRecommendation(workspace, currentChannel, currentAudience), confidence: 'Medium', why: 'GTM work now translates the best-channel recommendation into one core principle, three testable channel wedges, and two overlooked channels.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'traction-signal', fieldLabel: 'Current traction signal', oldValue: currentTraction, newValue: 'First live GTM signal pending', confidence: 'Medium', why: 'GTM work should move the startup toward observable traction.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Launch the focused GTM experiment and collect response data for triage.', confidence: 'High', why: 'GTM output should turn into a live execution step.', sourceTaskId: task.id, status: 'proposed' },
    ],
    killscale: [
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Campaign triage and budget direction', confidence: 'Medium', why: 'Kill-Scale work indicates the bottleneck is now decision quality on live experiments.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'traction-signal', fieldLabel: 'Current traction signal', oldValue: currentTraction, newValue: 'Winners and losers now visible', confidence: 'Medium', why: 'Kill-Scale work sharpens real traction interpretation.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Pause weak experiments, double down on the best signal, and refresh the weakest component.', confidence: 'High', why: 'Performance review should directly change the next operating move.', sourceTaskId: task.id, status: 'proposed' },
    ],
    creative: [
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Creative variation and message packaging', confidence: 'Medium', why: 'Creative work clarified that the next limiting factor is asset quality and variation.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'best-message', fieldLabel: 'Best message right now', oldValue: currentMessage, newValue: 'Pain-led hook with stronger creative packaging', confidence: 'Medium', why: 'Creative work often reveals which message frames package best.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Launch the strongest creative test pack and compare hooks by audience and format.', confidence: 'High', why: 'Creative task output should become the next action directly.', sourceTaskId: task.id, status: 'proposed' },
    ],
    content: [
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Run the first recurring content cycle and capture which themes convert best.', confidence: 'High', why: 'Content engine work should change the immediate operating priority.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'category-story', fieldLabel: 'Current category story', oldValue: findField(workspace, 'category-story')?.value ?? 'Current category story', newValue: 'Category narrative shaped for recurring authority-building content', confidence: 'Medium', why: 'Content systems often sharpen the public category narrative.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'traction-signal', fieldLabel: 'Current traction signal', oldValue: currentTraction, newValue: 'Audience attention and content pull increasing', confidence: 'Low', why: 'Content work should create visible early attention signals over time.', sourceTaskId: task.id, status: 'proposed' },
    ],
    community: [
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Launch the first community rituals and track where users contribute value back.', confidence: 'Medium', why: 'Community planning should alter the next practical move.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Trust, education, and ecosystem pull', confidence: 'Medium', why: 'Community work often reveals a trust/category-building bottleneck.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'trust-level', fieldLabel: 'Current trust level', oldValue: currentTrust, newValue: 'Trust growing through repeated community value', confidence: 'Low', why: 'Community work can compound trust over time.', sourceTaskId: task.id, status: 'proposed' },
    ],
    retention: [
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Onboarding, activation, or retention', confidence: 'High', why: 'Lifecycle work points the bottleneck toward repeat-value delivery.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'traction-signal', fieldLabel: 'Current traction signal', oldValue: currentTraction, newValue: 'Repeat usage signal improving', confidence: 'Medium', why: 'Retention work should improve quality of traction, not just top-of-funnel activity.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Improve first value and measure where users drop before repeat usage.', confidence: 'High', why: 'Retention work should directly alter the startup’s immediate focus.', sourceTaskId: task.id, status: 'proposed' },
    ],
    ops: [
      { id: uid('update'), fieldId: 'bottleneck', fieldLabel: 'Current bottleneck', oldValue: currentBottleneck, newValue: 'Founder leverage and operating drag', confidence: 'Medium', why: 'Ops work indicates internal execution is limiting progress.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'proof-level', fieldLabel: 'Current proof level', oldValue: currentProof, newValue: 'Operational clarity improved, market proof unchanged', confidence: 'Low', why: 'Ops work improves execution readiness more than market proof directly.', sourceTaskId: task.id, status: 'proposed' },
      { id: uid('update'), fieldId: 'next-move', fieldLabel: 'Current next move', oldValue: currentMove, newValue: 'Systematize the most repeated founder bottleneck before adding more complexity.', confidence: 'High', why: 'Ops work should change the next internal action.', sourceTaskId: task.id, status: 'proposed' },
    ],
  };

  return generators[task.agent] ?? [];
}

export function buildWorkspace(report: DemoReport): StartupWorkspace {
  const bestAudience = report.audienceExpansion.local[0] ?? report.audienceExpansion.original;
  const bestBuyer = report.buyerMapping.strongest;

  return {
    startupName: report.startupName,
    stage: { id: 'stage', label: 'Current stage', value: report.stage, confidence: 'Medium', source: 'startupClaw report' },
    bottleneck: { id: 'bottleneck', label: 'Current bottleneck', value: report.bottleneck, confidence: 'Medium', source: 'startupClaw report' },
    recommendedAgent: { id: 'recommended-agent', label: 'Recommended next expert', value: AGENT_LABELS[report.recommendedAgent], confidence: 'High', source: 'startupClaw report' },
    fields: [
      { id: 'best-audience', label: 'Best audience right now', value: bestAudience, confidence: 'Medium', source: 'Audience expansion' },
      { id: 'strongest-buyer', label: 'Strongest buyer right now', value: bestBuyer, confidence: 'Medium', source: 'Buyer mapping' },
      { id: 'best-channel', label: 'Best channel right now', value: 'Manual founder-led outreach or direct operator conversations', confidence: 'Low', source: 'Initial system default' },
      { id: 'best-message', label: 'Best message right now', value: 'Outcome-led painkiller framing', confidence: 'Low', source: 'Initial system default' },
      { id: 'best-offer', label: 'Best offer right now', value: 'Smallest useful pilot offer', confidence: 'Low', source: 'Initial system default' },
      { id: 'traction-signal', label: 'Current traction signal', value: 'Early qualitative signal only', confidence: 'Low', source: 'Initial system default' },
      { id: 'proof-level', label: 'Current proof level', value: 'Low proof', confidence: 'Low', source: 'Initial system default' },
      { id: 'trust-level', label: 'Current trust level', value: 'Medium trust required', confidence: 'Medium', source: 'Trust architecture' },
      { id: 'category-story', label: 'Current category story', value: report.categoryStory, confidence: 'Medium', source: 'Category story' },
      { id: 'next-move', label: 'Current next move', value: report.nextMove, confidence: 'High', source: 'Recommendation' },
    ],
    hypotheses: [
      { id: 'aud-1', type: 'audience', label: report.audienceExpansion.original, status: 'tested', reason: 'Original founder input' },
      { id: 'aud-2', type: 'audience', label: bestAudience, status: 'winning', reason: 'Current strongest local audience from report logic' },
      ...(report.audienceExpansion.local.slice(1, 3).map((label, index) => ({ id: `aud-local-${index + 1}`, type: 'audience' as const, label, status: 'proposed' as const, reason: 'Local adjacent audience worth pressure-testing' }))),
      ...(report.audienceExpansion.global.slice(0, 2).map((label, index) => ({ id: `aud-global-${index + 1}`, type: 'audience' as const, label, status: 'proposed' as const, reason: 'More different audience the founder may not have considered yet' }))),
      { id: 'buy-1', type: 'buyer', label: report.buyerMapping.original, status: 'tested', reason: 'Original/default buyer' },
      { id: 'buy-2', type: 'buyer', label: bestBuyer, status: 'winning', reason: 'Current strongest commercial buyer' },
      { id: 'chan-1', type: 'channel', label: 'Manual founder-led outreach or direct operator conversations', status: 'proposed', reason: 'Initial low-cost learning path' },
      { id: 'offer-1', type: 'offer', label: 'Smallest useful pilot offer', status: 'proposed', reason: 'Initial default for early commercialization' },
      { id: 'msg-1', type: 'message', label: 'Outcome-led painkiller framing', status: 'proposed', reason: 'Initial message hypothesis' },
    ],
    tasks: [
      { id: 'task-current', agent: report.recommendedAgent, title: `Run ${AGENT_LABELS[report.recommendedAgent]}`, status: 'ready_for_review', aiDoing: 'Prepared the next expert path based on the current bottleneck.', userNeeded: 'Review and run the next work package if this direction looks right.', output: report.topActions[0] ?? 'Next work package ready.' },
      nextTaskForAgent(report.recommendedAgent),
    ],
    stateUpdates: [
      { id: 'update-audience', fieldId: 'best-audience', fieldLabel: 'Best audience right now', oldValue: report.audienceExpansion.original, newValue: bestAudience, confidence: 'Medium', why: 'Current research logic suggests this audience is stronger than the original input.', sourceTaskId: 'task-current', status: 'proposed' },
      { id: 'update-buyer', fieldId: 'strongest-buyer', fieldLabel: 'Strongest buyer right now', oldValue: report.buyerMapping.original, newValue: bestBuyer, confidence: 'Medium', why: 'Buyer mapping suggests this commercial buyer is strongest right now.', sourceTaskId: 'task-current', status: 'proposed' },
    ],
    fieldHistory: [],
    evidence: [
      {
        id: uid('evidence'),
        fieldId: 'best-audience',
        fieldLabel: 'Best audience right now',
        summary: 'Initial audience recommendation came from the first startupClaw report.',
        source: 'startupClaw report',
        confidence: 'Medium',
      },
      {
        id: uid('evidence'),
        fieldId: 'strongest-buyer',
        fieldLabel: 'Strongest buyer right now',
        summary: 'Initial buyer recommendation came from buyer mapping in the first report.',
        source: 'startupClaw report',
        confidence: 'Medium',
      },
    ],
    timeline: [
      { id: 'event-1', title: 'Startup workspace created', detail: 'Initial startup state was created from the current startupClaw report.', by: 'startupClaw', type: 'task_update' },
      { id: 'event-2', title: 'Best audience candidate proposed', detail: `${bestAudience} is currently treated as the leading audience hypothesis.`, by: 'Research logic', type: 'state_change' },
      { id: 'event-3', title: 'Next expert selected', detail: `${AGENT_LABELS[report.recommendedAgent]} is currently the fastest route to progress based on the report.`, by: 'startupClaw recommendation engine', type: 'recommendation' },
    ],
  };
}

export function completeTaskAndGenerateUpdates(workspace: StartupWorkspace, taskId: string): StartupWorkspace {
  const task = workspace.tasks.find((item) => item.id === taskId);
  if (!task || task.status === 'completed' || task.status === 'blocked') return workspace;
  const tasks = workspace.tasks.map((item) => item.id === taskId ? { ...item, status: 'completed' as const, aiDoing: 'Completed the current task and generated proposed state updates.', userNeeded: 'Review the newly proposed state changes below.' } : item);
  const newUpdates = taskOutputGenerators(workspace, task);
  const stateUpdates = [...newUpdates, ...workspace.stateUpdates];
  const nextAgent = inferNextAgent(workspace);
  const shouldQueueNextTask = !tasks.some((item) => item.agent === nextAgent && item.status !== 'completed');
  return {
    ...workspace,
    tasks: shouldQueueNextTask ? [nextTaskForAgent(nextAgent), ...tasks] : tasks,
    stateUpdates,
    evidence: [...newUpdates.map(buildEvidenceFromUpdate), ...workspace.evidence],
    timeline: [
      { id: uid('timeline'), title: `${task.title} completed`, detail: `${task.title} finished and proposed ${newUpdates.length} state update${newUpdates.length === 1 ? '' : 's'}.`, by: AGENT_LABELS[task.agent], type: 'task_update' },
      ...workspace.timeline,
    ],
  };
}

export function applyStateUpdate(workspace: StartupWorkspace, updateId: string, decision: 'accepted' | 'rejected'): StartupWorkspace {
  const target = workspace.stateUpdates.find((item) => item.id === updateId);
  if (!target || target.status !== 'proposed') return workspace;
  const stateUpdates = workspace.stateUpdates.map((item) => item.id === updateId ? { ...item, status: decision } : item);
  if (decision === 'rejected') {
    return { ...workspace, stateUpdates, fieldHistory: [buildHistoryFromUpdate(target, 'Rejected update'), ...workspace.fieldHistory], timeline: [{ id: uid('timeline'), title: `${target.fieldLabel} update rejected`, detail: `The proposed change from "${target.oldValue}" to "${target.newValue}" was rejected by the founder/user.`, by: 'Founder review', type: 'state_change' }, ...workspace.timeline] };
  }
  const topFieldUpdate = target.fieldId === 'stage' || target.fieldId === 'bottleneck' || target.fieldId === 'recommended-agent';
  const fields = workspace.fields.map((field) => field.id === target.fieldId ? { ...field, value: target.newValue, confidence: target.confidence, source: `Accepted update from ${target.sourceTaskId}` } : field);
  const hypotheses = updateHypothesisStatuses(workspace.hypotheses, target.fieldId, target.newValue);
  const updatedWorkspace = {
    ...workspace,
    stage: target.fieldId === 'stage' ? { ...workspace.stage, value: target.newValue, confidence: target.confidence, source: `Accepted update from ${target.sourceTaskId}` } : workspace.stage,
    bottleneck: target.fieldId === 'bottleneck' ? { ...workspace.bottleneck, value: target.newValue, confidence: target.confidence, source: `Accepted update from ${target.sourceTaskId}` } : workspace.bottleneck,
    fields,
    hypotheses,
  };
  const inferredAgent = inferNextAgent(updatedWorkspace);
  const currentNextAgent = workspace.recommendedAgent.value;
  const nextAgentLabel = AGENT_LABELS[inferredAgent];
  const shouldQueueNextTask = !workspace.tasks.some((task) => task.agent === inferredAgent && task.status !== 'completed');
  return {
    ...updatedWorkspace,
    tasks: shouldQueueNextTask ? [nextTaskForAgent(inferredAgent), ...workspace.tasks] : workspace.tasks,
    stateUpdates,
    fieldHistory: [buildHistoryFromUpdate(target, 'Accepted update'), ...workspace.fieldHistory],
    evidence: [buildEvidenceFromUpdate(target), ...workspace.evidence],
    recommendedAgent: { ...workspace.recommendedAgent, value: nextAgentLabel, source: currentNextAgent === nextAgentLabel ? workspace.recommendedAgent.source : 'Dynamic workspace recommendation', founderOverride: false },
    timeline: [
      { id: uid('timeline'), title: `${target.fieldLabel} updated`, detail: `Changed from "${target.oldValue}" to "${target.newValue}" because ${target.why}`, by: 'Accepted state update', type: 'state_change' },
      ...(currentNextAgent !== nextAgentLabel ? [{ id: uid('timeline'), title: 'Next expert recommendation updated', detail: `startupClaw now recommends ${nextAgentLabel} as the next best expert based on the updated startup state.`, by: 'Dynamic workspace recommendation', type: 'recommendation' as const }] : []),
      ...workspace.timeline,
    ],
  };
}

export function overrideWorkspaceField(workspace: StartupWorkspace, fieldId: string, newValue: string): StartupWorkspace {
  const isTopField = ['stage', 'bottleneck', 'recommended-agent'].includes(fieldId);
  const currentField = isTopField ? (fieldId === 'stage' ? workspace.stage : fieldId === 'bottleneck' ? workspace.bottleneck : workspace.recommendedAgent) : workspace.fields.find((field) => field.id === fieldId);
  if (!currentField || !OVERRIDABLE_FIELD_IDS.includes(fieldId)) return workspace;
  const oldValue = currentField.value;
  const updatedField = { ...currentField, value: newValue, source: 'Founder override', founderOverride: true, confidence: 'High' as const };
  const fields = isTopField ? workspace.fields : workspace.fields.map((field) => field.id === fieldId ? updatedField : field);
  const hypotheses = updateHypothesisStatuses(workspace.hypotheses, fieldId, newValue);
  const updatedWorkspace = { ...workspace, stage: fieldId === 'stage' ? updatedField : workspace.stage, fields, hypotheses };
  const nextAgent = inferNextAgent(updatedWorkspace);
  const recommendedAgent = { ...workspace.recommendedAgent, value: AGENT_LABELS[nextAgent], source: 'Dynamic workspace recommendation after founder override' };
  return {
    ...updatedWorkspace,
    recommendedAgent,
    tasks: [nextTaskForAgent(nextAgent), ...workspace.tasks],
    fieldHistory: [{ id: uid('history'), fieldId, fieldLabel: currentField.label, oldValue, newValue, reason: 'Founder override', source: 'Founder override' }, ...workspace.fieldHistory],
    evidence: [{ id: uid('evidence'), fieldId, fieldLabel: currentField.label, summary: `Founder overrode ${currentField.label} from "${oldValue}" to "${newValue}".`, source: 'Founder override', confidence: 'High' }, ...workspace.evidence],
    timeline: [
      { id: uid('timeline'), title: `${currentField.label} overridden by founder`, detail: `Changed from "${oldValue}" to "${newValue}" by founder override.`, by: 'Founder override', type: 'state_change' },
      { id: uid('timeline'), title: 'Next expert recommendation recalculated', detail: `startupClaw now recommends ${AGENT_LABELS[nextAgent]} after the founder override.`, by: 'Dynamic workspace recommendation', type: 'recommendation' },
      ...workspace.timeline,
    ],
  };
}
