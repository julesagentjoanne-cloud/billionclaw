export type AgentType =
  | 'research'
  | 'validation'
  | 'messaging'
  | 'offer'
  | 'gtm'
  | 'killscale'
  | 'creative'
  | 'content'
  | 'community'
  | 'retention'
  | 'ops';

export type DemoReport = {
  id: string;
  startupName: string;
  statement: string;
  reasoningCriteria: {
    principles: string[];
    decisions: string[];
    application: string[];
  };
  interpretation: string;
  demandEvidence: string[];
  audienceExpansion: { original: string; local: string[]; global: string[] };
  buyerMapping: { original: string; alternatives: string[]; strongest: string };
  domainPerspectives: {
    endUser: string;
    manager: string;
    executive: string;
    alignment: string;
    conflict: string;
    strongestForSale: string;
  };
  catPersona: string;
  whyNow: string;
  foundingInsight: string;
  categoryStory: string;
  distributionAdvantage: string;
  trustArchitecture: string;
  wedgeExpansion: string;
  habitEmbedding: string;
  leverageArchitecture: string;
  revenueProximity: 'High' | 'Medium' | 'Low';
  stage: string;
  bottleneck: string;
  nextMove: string;
  topActions: string[];
  recommendedAgent: AgentType;
  whatStartupClawDid: string[];
};

export const AGENT_LABELS: Record<AgentType, string> = {
  research: 'Research Agent',
  validation: 'Validation Agent',
  messaging: 'Messaging Agent',
  offer: 'Offer Agent',
  gtm: 'GTM Execution Agent',
  killscale: 'Kill-Scale Agent',
  creative: 'Creative Agent',
  content: 'Content Engine Agent',
  community: 'Community Agent',
  retention: 'Onboarding & Retention Agent',
  ops: 'Operator Systems Agent',
};

export const AGENT_OUTPUTS: Record<AgentType, string[]> = {
  research: ['Audience research brief', 'Competitor/alternative map', 'Demand signal summary'],
  validation: ['Interview script', 'Willingness-to-pay test', 'Validation plan'],
  messaging: ['Positioning angles', 'Landing page copy draft', 'Objection handling bullets'],
  offer: ['Smallest useful offer draft', 'Pricing test plan', 'Package structure'],
  gtm: ['Channel test plan', 'Outreach drafts', 'Launch checklist'],
  killscale: ['Campaign decision table', 'Budget reallocation suggestions', 'Kill/fix/watch/scale states'],
  creative: ['Creative angle matrix', 'Hook shortlist', 'Creative test pack'],
  content: ['Hook research report', 'Post + carousel package', 'Lead magnet draft'],
  community: ['Community strategy brief', 'Ritual calendar', 'Champion framework'],
  retention: ['Onboarding email sequence', 'Getting-started checklist', 'Retention interview script'],
  ops: ['Founder bottleneck audit', 'Delegation matrix', 'SOP starter pack'],
};

export const demoReports: DemoReport[] = [
  {
    id: 'founderflow',
    startupName: 'FounderFlow',
    statement: 'An AI tool that turns founder interviews into pipeline-oriented LinkedIn content.',
    reasoningCriteria: {
      principles: [
        'Founder-facing messaging must connect directly to pipeline or leverage, not just content volume.',
        'A strong startupClaw output should prefer pain linked to money, time, or trust.',
      ],
      decisions: [
        'The biggest tradeoff is authenticity vs automation trust.',
        'The most important variables are buyer urgency, founder bottleneck severity, and whether content inconsistency hurts revenue.',
      ],
      application: [
        'The strongest framing is founder leverage + pipeline consistency rather than generic content automation.',
        'That makes validation the best next move before scaling GTM.',
      ],
    },
    interpretation:
      'FounderFlow is best interpreted as a founder-content workflow product that turns spoken expertise into repeatable pipeline-oriented content.',
    demandEvidence: [
      'Founders already use ghostwriters, agencies, ChatGPT, and manual note repurposing.',
      'The pain is not generic content creation but content inconsistency under founder time pressure.',
      'The category already has visible spend and workaround behavior.',
    ],
    audienceExpansion: {
      original: 'B2B SaaS founders',
      local: ['Agency founders', 'Solo consultants', 'Fractional operators'],
      global: ['Founder-led portfolio companies', 'Accelerators/incubators', 'Personal brand agencies'],
    },
    buyerMapping: {
      original: 'Founder',
      alternatives: ['Chief of Staff / operator', 'Marketing lead', 'Agency partner'],
      strongest: 'Founder-led B2B operator with pipeline pressure',
    },
    domainPerspectives: {
      endUser: 'The founder wants less friction between expertise and publishing.',
      manager: 'An operator/marketing lead wants a repeatable workflow that reduces founder bottlenecks.',
      executive: 'The executive buyer wants pipeline or visibility outcomes, not just more content drafts.',
      alignment: 'All three like less founder-time waste and more consistent output.',
      conflict: 'The founder may care about voice/authenticity while the executive cares more about measurable pipeline impact.',
      strongestForSale: 'Executive/operator combination tied to pipeline and founder leverage.',
    },
    catPersona:
      'Founder who knows they should post but loses pipeline because expertise never gets published consistently.',
    whyNow:
      'Founder-led distribution matters more, AI content tooling is mainstream, and pipeline pressure makes consistency commercially relevant now.',
    foundingInsight:
      'The real pain is not writing content; it is turning founder expertise into a repeatable growth workflow under time pressure.',
    categoryStory: 'Founder distribution workflow / pipeline content system.',
    distributionAdvantage:
      'Can ride founder-content communities, operator circles, and public examples of repurposed content.',
    trustArchitecture:
      'Needs proof that the output sounds like the founder and creates useful commercial content rather than generic AI fluff.',
    wedgeExpansion:
      'Start with founder LinkedIn workflow, then expand into email/newsletter and broader founder-media systems.',
    habitEmbedding:
      'Can become a weekly founder content ritual if tied to calls, voice notes, and publishing cadence.',
    leverageArchitecture:
      'Agents can generate drafts and workflows; founder still supplies expertise and final judgment.',
    revenueProximity: 'High',
    stage: 'Solution validation',
    bottleneck: 'Offer / segment validation',
    nextMove:
      'Validate the strongest audience + pain + offer combination before scaling acquisition.',
    topActions: [
      'Interview 10 likely users across SaaS, agencies, and solo advisors.',
      'Test 3 value angles: time saved, pipeline generated, consistency achieved.',
      'Create one sharp landing page for the strongest segment hypothesis.',
    ],
    recommendedAgent: 'validation',
    whatStartupClawDid: [
      'Expanded the original audience into local and global options.',
      'Mapped alternative buyers and compared commercial strength.',
      'Interpreted the startup through demand evidence and revenue proximity.',
      'Selected one main bottleneck and one best next move.',
    ],
  },
  {
    id: 'renewalsignal',
    startupName: 'RenewalSignal',
    statement: 'A tool for B2B SaaS teams that detects renewal risk early and recommends save playbooks.',
    reasoningCriteria: {
      principles: [
        'Renewal products need trust and operational credibility more than category novelty.',
        'A strong answer should separate signal synthesis value from enterprise trust risk.',
      ],
      decisions: [
        'The biggest tradeoff is intelligence promise vs proof requirement.',
        'The key variables are buyer ownership, trust architecture, and whether retention pain is acute enough to pay now.',
      ],
      application: [
        'The strongest buyer is revenue leadership, not just CS end-users.',
        'That makes research and trust validation more important than immediate GTM scale.',
      ],
    },
    interpretation:
      'RenewalSignal is best understood as renewal intelligence for customer success and revenue teams, not just another dashboard.',
    demandEvidence: [
      'Teams already review accounts manually before renewal and rely on spreadsheets, CRM notes, and CSM intuition.',
      'Retention pressure is increasing and fragmented signals are hard to synthesize consistently.',
      'Renewal review is already operationalized inside many post-sales teams.',
    ],
    audienceExpansion: {
      original: 'B2B SaaS customer success teams',
      local: ['Revenue operations', 'Account management leaders', 'Smaller SaaS founders doing success manually'],
      global: ['Agencies with renewals', 'Recurring service firms', 'Portfolio operators'],
    },
    buyerMapping: {
      original: 'VP Customer Success',
      alternatives: ['CRO', 'COO', 'Founder', 'RevOps leader'],
      strongest: 'CRO or revenue leader under retention pressure',
    },
    domainPerspectives: {
      endUser: 'The CSM wants clearer account-risk visibility and better save guidance.',
      manager: 'The CS/RevOps manager wants a reliable review workflow across the team.',
      executive: 'The CRO wants fewer surprises and stronger revenue retention.',
      alignment: 'All three care about preventing avoidable churn before renewal.',
      conflict: 'End-users may resist noisy scoring while executives demand strong predictive confidence and ROI.',
      strongestForSale: 'Executive-led sale with manager adoption path.',
    },
    catPersona:
      'Revenue/CS leader who gets punished for surprise churn and poor renewal forecasting.',
    whyNow:
      'Efficiency pressure is higher, retention matters more, and AI can now synthesize fragmented customer signals better.',
    foundingInsight:
      'Renewal risk is often visible before it shows up in simple usage dashboards because the real signals are spread across systems and human notes.',
    categoryStory: 'Renewal Intelligence.',
    distributionAdvantage:
      'Potentially via RevOps/CS communities and partner consultancies, but currently weak and needs sharpening.',
    trustArchitecture:
      'Requires high trust: buyers need reliable scoring, explanations, and proof that recommendations improve renewals.',
    wedgeExpansion:
      'Start with renewal risk intelligence, then expand into save playbooks, upsell timing, and broader post-sales operating workflows.',
    habitEmbedding:
      'Can become part of weekly account review and renewal-prep workflows.',
    leverageArchitecture:
      'Signal synthesis and playbook generation fit agents well, but trust-building and enterprise selling stay human-heavy early on.',
    revenueProximity: 'High',
    stage: 'Solution validation',
    bottleneck: 'Distribution advantage + trust architecture',
    nextMove:
      'Validate whether “renewal intelligence” resonates and which buyer owns this pain most acutely before broad product buildout.',
    topActions: [
      'Interview 10 CS/revenue leaders about current renewal-risk workflows.',
      'Test category language: renewal intelligence vs churn prediction vs CS analytics.',
      'Map trust barriers and proof requirements before building deep automation.',
    ],
    recommendedAgent: 'research',
    whatStartupClawDid: [
      'Stress-tested the startup through company-quality logic, not just pain-solution logic.',
      'Identified trust and distribution as the main weak points.',
      'Compared buyers and selected revenue leadership as the stronger wedge.',
      'Separated promising commercial logic from GTM risk.',
    ],
  },
  {
    id: 'focuspath',
    startupName: 'FocusPath',
    statement: 'A mobile app that helps people reduce phone distraction and stay focused during work or study.',
    reasoningCriteria: {
      principles: [
        'Consumer productivity products need either strong habit retention or stronger commercial buyer framing.',
        'A good startupClaw interpretation should look for sponsored or institutional buyers when consumer willingness to pay is weak.',
      ],
      decisions: [
        'The biggest tradeoff is broad consumer appeal vs stronger buyer economics.',
        'The most important variables are who feels the pain most acutely and who can pay for outcome improvement.',
      ],
      application: [
        'The product becomes more promising when reframed toward schools, employers, or programs.',
        'That makes messaging/buyer reframing the highest-value next step.',
      ],
    },
    interpretation:
      'FocusPath is weak as a generic consumer focus app but becomes more interesting when reframed around sponsored buyers and institutional outcomes.',
    demandEvidence: [
      'People already use timers, blocking tools, DND modes, and productivity hacks.',
      'Distraction complaints are common and repeated, but willingness to pay at consumer level is often weak.',
      'Programs and organizations increasingly care about productivity and completion outcomes.',
    ],
    audienceExpansion: {
      original: 'Consumers who want to focus better',
      local: ['Students', 'Freelancers', 'Remote workers'],
      global: ['Employers', 'Schools', 'Coaching programs'],
    },
    buyerMapping: {
      original: 'End user',
      alternatives: ['Employer', 'School', 'Coach', 'Program operator'],
      strongest: 'Employer or program buyer tied to measurable productivity/completion outcomes',
    },
    domainPerspectives: {
      endUser: 'The individual wants less distraction and more control over focus.',
      manager: 'A manager or teacher wants higher completion and less attention fragmentation across a group.',
      executive: 'A sponsor buyer wants measurable outcomes, not just app usage.',
      alignment: 'All three benefit if focus improves and distraction drops.',
      conflict: 'The user wants low friction and personal benefit; the buyer wants measurable performance impact.',
      strongestForSale: 'Manager/executive buyer if outcomes can be tied to productivity or completion.',
    },
    catPersona:
      'A remote team or program where poor focus hurts output, completion, or performance metrics.',
    whyNow:
      'Attention fragmentation is worse, remote/hybrid work increases distraction, and organizations care more about sustainable output.',
    foundingInsight:
      'Focus is not only an individual self-control issue; it can be framed as an organizational workflow and performance problem.',
    categoryStory: 'Focus infrastructure / attention system for teams or programs.',
    distributionAdvantage:
      'Weak in consumer app stores; stronger through institutional buyers, coaches, or program partners.',
    trustArchitecture:
      'Institutional version needs proof that the app improves completion, adherence, or productive routines.',
    wedgeExpansion:
      'Start with one institutional buyer type and expand into broader employee benefits or learning/productivity infrastructure.',
    habitEmbedding:
      'Potentially strong if tied to daily routines, team rituals, or cohort/program cadence.',
    leverageArchitecture:
      'Product and agents can drive routines, nudges, and reports; commercial success depends on stronger buyer framing.',
    revenueProximity: 'Medium',
    stage: 'Problem discovery / solution validation',
    bottleneck: 'Commercial framing and buyer selection',
    nextMove:
      'Test one institutional buyer angle instead of defaulting to consumer subscription logic.',
    topActions: [
      'Interview 10 possible sponsor buyers across schools, coaches, and employers.',
      'Compare whether the problem feels more Cat when tied to outcomes like completion or output.',
      'Test a B2B/B2B2C landing page instead of a direct-to-consumer one.',
    ],
    recommendedAgent: 'messaging',
    whatStartupClawDid: [
      'Used audience expansion to move beyond the default consumer framing.',
      'Used alternative buyer mapping to find stronger commercial routes.',
      'Identified that the product is more promising as sponsored infrastructure than as a commodity app.',
      'Recommended buyer/category reframing before product expansion.',
    ],
  },
];

export const demoReport = demoReports[0];

export function getReportById(id: string | null | undefined) {
  return demoReports.find((report) => report.id === id) ?? demoReport;
}

export function getAssetPreview(agent: AgentType) {
  const previews: Record<AgentType, string> = {
    research: 'Top audience hypotheses, competitor patterns, and demand signals in one brief.',
    validation: '10 founder interview questions + a willingness-to-pay test prompt set.',
    messaging: '3 positioning angles + landing page hero copy + objections.',
    offer: 'A smallest useful offer draft + pricing test plan.',
    gtm: 'A first-channel experiment plan with outreach starter copy.',
    killscale: 'A campaign triage board with kill/fix/watch/scale logic.',
    creative: 'A structured creative system with angle buckets and test packs.',
    content: 'A recurring content package with hooks, assets, and schedule logic.',
    community: 'A community strategy with rituals, champions, and feedback loops.',
    retention: 'A first-week onboarding sequence and activation checklist.',
    ops: 'A founder bottleneck audit with delegation suggestions.',
  };
  return previews[agent];
}

export function getAgentAsset(agent: AgentType) {
  const assets: Record<AgentType, { title: string; body: string[] }> = {
    research: {
      title: 'Audience Research Brief',
      body: [
        'Primary audience remains founder-led B2B SaaS companies under content pressure.',
        'Local expansion options include agencies, solo consultants, and fractional operators.',
        'Global expansion options suggest accelerators/incubators and personal brand agencies as buyers or partners.',
      ],
    },
    validation: {
      title: 'Founder Interview Script',
      body: [
        'What do you currently do when you know you should publish content but do not?',
        'What is the most expensive consequence of not posting consistently?',
        'Why have current workarounds not solved this already?',
      ],
    },
    messaging: {
      title: 'Landing Page Messaging Draft',
      body: [
        'Turn founder expertise into pipeline-driving content without the weekly content scramble.',
        'For B2B founders who know they should publish but never do it consistently.',
        'Get structured content drafts from interviews, calls, and voice notes.',
      ],
    },
    offer: {
      title: 'Pricing Test Plan',
      body: [
        'Test a low-friction pilot for founder-led teams with one weekly content workflow.',
        'Compare a time-saved framing versus a pipeline-generated framing.',
        'Capture objections around “I can just use ChatGPT manually.”',
      ],
    },
    gtm: {
      title: 'First GTM Experiment',
      body: [
        'Target 20 founder-led B2B SaaS companies on LinkedIn.',
        'Lead with a pain-first message about founder content inconsistency and lost pipeline.',
        'Offer one manual/AI-assisted pilot workflow in exchange for feedback.',
      ],
    },
    killscale: {
      title: 'Campaign Triage Board',
      body: [
        'Classify each live campaign into kill, fix, watch, scale, or exploit further.',
        'Flag whether the main issue is creative, audience, landing page, or offer.',
        'Reallocate budget toward the highest-confidence winner and smallest next test.',
      ],
    },
    creative: {
      title: 'Creative Test Pack',
      body: [
        'Generate 3 pain-angle buckets and 10 hooks for each.',
        'Shortlist the strongest creative concepts by persona and format.',
        'Pair each concept with the most relevant landing-page promise and CTA.',
      ],
    },
    content: {
      title: 'Content Engine Package',
      body: [
        'Mine winning hooks from relevant creators or competitors in the last 14 days.',
        'Draft one post, one carousel concept, and one lead magnet angle in founder voice.',
        'Package the assets with a simple publishing recommendation and QA check list.',
      ],
    },
    community: {
      title: 'Community Launch Starter',
      body: [
        'Choose the best-fit community archetype: support, practitioner, ambassador, or ecosystem.',
        'Define the first 3 recurring rituals and one champion path.',
        'Route repeat feedback themes back into product, onboarding, and messaging decisions.',
      ],
    },
    retention: {
      title: 'First-Week Onboarding Checklist',
      body: [
        'Define first success as one published post from one founder input artifact.',
        'Guide the user through interview upload → draft review → publish step.',
        'Use onboarding reminders tied to first-week milestones.',
      ],
    },
    ops: {
      title: 'Founder Bottleneck Audit',
      body: [
        'List recurring tasks still dependent on the founder.',
        'Separate founder-only decisions from systemizable work.',
        'Create one SOP starter for recurring weekly content production.',
      ],
    },
  };
  return assets[agent];
}
