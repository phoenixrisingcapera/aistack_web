export type Locale = 'en' | 'es';

export type NavItem = { label: string; href: string };
export type Metric = { label: string; value: string };
export type Problem = { title: string; body: string };
export type Service = { slug: string; title: string; summary: string; bullets: string[] };
export type DemoTab = { key: string; label: string; before: string; after: string; detail: string };
export type ProcessStep = { title: string; deliverable: string; detail: string };
export type PackageTier = {
  slug?: string;
  title: string;
  summary: string;
  price: string;
  deliverables: string[];
  bestFor?: string[];
  outcome?: string;
  ctaLabel?: string;
  ctaHref?: string;
};
export type FaqItem = { question: string; answer: string };
export type CaseStudy = {
  slug: string;
  title: string;
  strap: string;
  problem: string;
  solution: string;
  capabilities: string[];
  outcomes: string[];
  kind: string;
  liveUrl?: string;
  liveLabel?: string;
};

export type LocaleContent = {
  locale: Locale;
  siteTitle: string;
  seoSuffix: string;
  announcement: string;
  nav: NavItem[];
  hero: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  liveNowTitle: string;
  liveNowIntro: string;
  heroMetrics: Metric[];
  mission: string;
  problemTitle: string;
  problemIntro: string;
  problems: Problem[];
  layersTitle: string;
  layers: string[];
  servicesTitle: string;
  servicesIntro: string;
  services: Service[];
  demoTitle: string;
  demoIntro: string;
  demoTabs: DemoTab[];
  workTitle: string;
  workIntro: string;
  caseStudies: CaseStudy[];
  processTitle: string;
  processIntro: string;
  process: ProcessStep[];
  packagesTitle: string;
  packagesIntro: string;
  packages: PackageTier[];
  platformTitle: string;
  platformIntro: string;
  platformBody: string;
  platformModules: string[];
  platformPackagesTitle: string;
  platformPackagesIntro: string;
  platformPackages: PackageTier[];
  aboutTitle: string;
  aboutBody: string[];
  trustTitle: string;
  trustPoints: string[];
  faqTitle: string;
  faqIntro: string;
  faqs: FaqItem[];
  contactTitle: string;
  contactIntro: string;
  contactPoints: string[];
  ctaTitle: string;
  ctaBody: string;
  footerNote: string;
  labels: {
    language: string;
    contact: string;
    services: string;
    work: string;
    process: string;
    about: string;
    packages: string;
    capabilities: string;
    outcomes: string;
    founder: string;
    audit: string;
    message: string;
    send: string;
    liveSite: string;
    openCase: string;
    livePortfolio: string;
    navigation: string;
    trust: string;
    faq: string;
    name: string;
    email: string;
    company: string;
    requestMeeting: string;
    availableSlots: string;
    timezone: string;
    loadingSlots: string;
    noSlots: string;
    problem: string;
    solution: string;
    adminLeads: string;
    token: string;
    loadLeads: string;
  };
};

const english: LocaleContent = {
  locale: 'en',
  siteTitle: 'AIStack',
  seoSuffix: 'AI implementation, AI systems, workflows, products, and guardrails',
  announcement: 'AIStack is becoming the operating system for AI implementation.',
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Platform', href: '/platform' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    title: 'AIStack builds AI products, internal tools, and workflow systems for companies that need measurable business value.',
    body: 'AIStack is an AI implementation studio plus reusable backend product. We help businesses turn messy operations, documents, workflows, and ideas into working AI systems with guardrails, cost controls, human review, and real deployment architecture.',
    primaryCta: 'Book a Discovery Call',
    secondaryCta: 'View Live Work'
  },
  liveNowTitle: 'Live products and active systems',
  liveNowIntro: 'A professional services portfolio should show shipped work. These are live product environments and operating builds connected to the AIStack practice.',
  heroMetrics: [
    { label: 'Delivery focus', value: 'Live systems and production workflows' },
    { label: 'Service model', value: 'Audit, build, deploy, improve' },
    { label: 'Core stack', value: 'AI products, CRM, document intelligence' }
  ],
  mission: 'AIStack exists to turn AI from scattered experiments into reliable business infrastructure.',
  problemTitle: 'AI adoption is easy. AI implementation is where companies fail.',
  problemIntro: 'Most teams do not need more AI demos. They need workflows, controls, and products that stand up under daily use.',
  problems: [
    { title: 'Token costs spiral', body: 'Without routing, caching, budgets, and telemetry, usage grows faster than value.' },
    { title: 'AI outputs are unreliable', body: 'No validation, no review path, and no traceability means low trust.' },
    { title: 'Workflows stay manual', body: 'AI lives in disconnected chats instead of business systems and dashboards.' },
    { title: 'Data is messy', body: 'PDFs, email threads, spreadsheets, and CRM records remain unstructured.' },
    { title: 'Products stay prototypes', body: 'Teams ship a demo but never reach production reliability and governance.' }
  ],
  layersTitle: 'AIStack operating layer',
  layers: ['Data layer', 'Workflow layer', 'Model layer', 'Guardrail layer', 'Human review layer', 'Business output layer'],
  servicesTitle: 'Services',
  servicesIntro: 'AIStack sells outcomes, not hours. Services create fast cashflow while the platform creates recurring revenue. Every offer is designed to move a client from diagnosis to deployment to ongoing operational control.',
  services: [
    {
      slug: 'ai-systems-audit',
      title: 'AI Systems Audit',
      summary: 'Paid discovery for companies that know they need AI but do not yet know what to automate, what to avoid, or what system to build first.',
      bullets: ['AI opportunity map', 'Workflow diagnosis', 'Cost and risk analysis', 'Recommended architecture']
    },
    {
      slug: 'prototype-rescue-audit',
      title: 'Prototype Rescue Audit',
      summary: 'For founders and businesses with unfinished AI prototypes, no-code experiments, or broken MVPs that need a real production path.',
      price: 'From £1,500',
      deliverables: ['Codebase review', 'Frontend/backend gap analysis', 'Data model review', 'Deployment risk review', 'Rescue roadmap', 'Fixed-price build recommendation'],
      bestFor: ['Half-built prototypes', 'Broken internal tools', 'No-code experiments', 'Messy codebases'],
      outcome: 'A clear diagnosis of what is salvageable, what must be rebuilt, and how to turn a fragile demo into a real product.',
      ctaLabel: 'Start rescue audit',
      ctaHref: '/billing?offer=prototype-rescue-audit'
    },
    {
      slug: 'ai-prototype-sprint',
      title: 'AI Prototype Sprint',
      summary: 'A 2-4 week sprint to build something visible, credible, and testable for internal teams, founders, or operational buyers.',
      bullets: ['Working prototype', 'Frontend interface', 'Backend/API', 'Basic guardrails and deployment']
    },
    {
      slug: 'production-ai-build',
      title: 'Production AI Build',
      summary: 'Full implementation for companies ready to turn an AI idea or manual workflow into a real working system.',
      bullets: ['Full-stack app', 'Auth/admin', 'Human review workflow', 'Deployment and training']
    },
    {
      slug: 'guardrails-cost-control',
      title: 'AI Guardrails & Cost Control',
      summary: 'For teams already using AI and needing stronger control over hallucinations, cost, access, logging, and governance.',
      bullets: ['Risk map', 'Human review layer', 'Token budgets', 'Model routing and caching']
    },
    {
      slug: 'monthly-ai-build-partner',
      title: 'Monthly AI Build Partner',
      summary: 'Ongoing implementation support for teams that want a serious build partner rather than one-off project delivery.',
      bullets: ['Monthly feature builds', 'Prompt and model optimisation', 'Cost monitoring', 'Team training']
    }
  ],
  demoTitle: 'See what AIStack builds',
  demoIntro: 'Each workflow shows the transition from raw operational friction to a controlled AI product layer.',
  demoTabs: [
    { key: 'documents', label: 'Documents', before: 'PDFs, emails, attachments, scattered facts', after: 'Structured timeline, evidence tags, searchable record', detail: 'MailTrace-style document intelligence with extraction, review, and reporting.' },
    { key: 'teams', label: 'Teams', before: 'Inbox and Slack requests handled manually', after: 'Triage, routing, tasks, dashboard visibility', detail: 'AI-assisted operational pipelines with human approval at decision points.' },
    { key: 'cost', label: 'Cost Control', before: 'Every request hits the most expensive model', after: 'Model routing, caching, budgets, spend attribution', detail: 'Inference-layer controls that make AI usable at business scale.' },
    { key: 'guardrails', label: 'Guardrails', before: 'Raw answer with no validation', after: 'Checked output, policy controls, human-reviewed release', detail: 'Structured validation to improve reliability and auditability.' },
    { key: 'product', label: 'Product Build', before: 'Idea and disconnected workflows', after: 'Architecture, MVP, admin tools, deployment path', detail: 'End-to-end product systems, not just prompting experiments.' }
  ],
  workTitle: 'Selected work, live products, and operating systems',
  workIntro: 'Live products and applied systems that demonstrate how Andrea Capera builds AI tools people can use, teams can trust, and businesses can buy.',
  caseStudies: [
    {
      slug: 'mailtrace',
      title: 'MailTrace',
      strap: 'Procedural intelligence for email evidence',
      problem: 'Legal, complaint, and institutional evidence is buried across long email threads and PDFs.',
      solution: 'AI-powered timeline generation, issue clustering, document extraction, evidence tagging, and report workflows.',
      capabilities: ['Email ingestion', 'PDF extraction', 'Timeline generation', 'Issue detection', 'Human review layer'],
      outcomes: ['Structured evidence workflows', 'Faster review path', 'Traceable case intelligence'],
      kind: 'Case study'
    },
    {
      slug: 'deckaistack',
      title: 'DeckAIStack',
      strap: 'AI deck infrastructure for investors, advisors, and operators',
      problem: 'Teams need to review and improve decks faster without losing structure, brand, or source fidelity.',
      solution: 'A smart deck workspace with slide extraction, brand profiles, AI edits, visual preview, and grounded source facts.',
      capabilities: ['Product architecture', 'LLM workflow design', 'Frontend/backend integration', 'Brand-aware edits', 'Document pipelines'],
      outcomes: ['Faster deck iteration', 'Grounded AI edits', 'Operational editing workflow'],
      kind: 'Live product',
      liveUrl: 'https://deck.aistack.codes',
      liveLabel: 'deck.aistack.codes'
    },
    {
      slug: 'crm-aistack',
      title: 'CRM AIStack',
      strap: 'Operational CRM workflows and business visibility',
      problem: 'Teams need a live CRM layer that connects contacts, workflow actions, and internal process visibility.',
      solution: 'A CRM operating environment for tracking activity, capturing structured lead data, and supporting AI-assisted workflow actions.',
      capabilities: ['CRM structure', 'Lead operations', 'Workflow tracking', 'Internal business tooling', 'Delivery operations'],
      outcomes: ['Cleaner internal operations', 'Structured lead handling', 'Live delivery environment'],
      kind: 'Operating system'
    },
    {
      slug: 'data-visualisation',
      title: 'Data Visualisation',
      strap: 'Business dashboards and analytical storytelling',
      problem: 'Companies have data but no decision interface that helps teams act quickly.',
      solution: 'Dashboards, analytical views, segmentation, and explainable outputs that turn data into action.',
      capabilities: ['Dashboard design', 'Data storytelling', 'Segmentation analysis', 'KPI systems', 'Decision support'],
      outcomes: ['Clear reporting layer', 'Operational visibility', 'Decision-ready analytics'],
      kind: 'Analytics Build'
    },
    {
      slug: 'workflow-prototype',
      title: 'AI Workflow Prototype',
      strap: 'Prototype lab for support, compliance, and operations',
      problem: 'Companies need to test an AI workflow before funding a full implementation.',
      solution: 'Rapid prototype sprints for support triage, HR assistants, compliance review, or sales proposal generation.',
      capabilities: ['Workflow mapping', 'Prototype interface', 'Approval layers', 'API integration'],
      outcomes: ['Faster validation', 'Implementation clarity', 'Roadmap for production'],
      kind: 'Prototype Lab'
    }
  ],
  processTitle: 'Process',
  processIntro: 'Every engagement is designed to move from uncertainty to a working operating layer with measurable controls.',
  process: [
    { title: 'Diagnose', deliverable: 'AI opportunity map', detail: 'Identify workflow pain, business objectives, and where AI has real leverage.' },
    { title: 'Map', deliverable: 'Data and process diagram', detail: 'Define inputs, approvals, system boundaries, and operational risk.' },
    { title: 'Design', deliverable: 'Architecture and implementation plan', detail: 'Choose products, model patterns, guardrails, and delivery priorities.' },
    { title: 'Build', deliverable: 'Working MVP or internal tool', detail: 'Ship the interface, orchestration, and workflow logic with real use cases.' },
    { title: 'Deploy', deliverable: 'Metrics, guardrails, and cost controls', detail: 'Measure usage, improve quality, and keep the system governable.' }
  ],
  packagesTitle: 'Service pricing',
  packagesIntro: 'Every engagement starts with the smallest useful system that can create measurable value. Use starting prices to anchor budget, then scope by workflow, risk, data, and integration depth.',
  packages: [
    {
      slug: 'ai-systems-audit',
      title: 'AI Systems Audit',
      summary: 'For businesses that know they need AI but do not know where to start, what to automate, what to avoid, or what system to build first.',
      price: 'From £1,500',
      deliverables: [
        'AI opportunity map',
        'Workflow diagnosis',
        'Cost and risk analysis',
        'Recommended architecture',
        'Automation roadmap',
        'Build estimate'
      ],
      bestFor: [
        'Companies exploring AI adoption',
        'Founders with product ideas',
        'Teams using AI manually but without structure'
      ],
      outcome: 'A paid discovery deliverable that leads to a practical implementation plan instead of vague advice.',
      ctaLabel: 'Pay for audit',
      ctaHref: '/billing?offer=ai-systems-audit'
    },
    {
      slug: 'ai-prototype-sprint',
      title: 'AI Prototype Sprint',
      summary: 'The main early cash offer for startups and SMEs that need a credible working demo, not slideware.',
      price: 'From £5,000',
      deliverables: ['Working AI prototype', 'Frontend interface', 'Backend/API', 'Database if needed', 'Basic guardrails', 'Deployment'],
      bestFor: ['Startups', 'Internal teams', 'SMEs validating a workflow'],
      outcome: 'A visible system you can demo, test, and use to make a production decision.',
      ctaLabel: 'Pay deposit',
      ctaHref: '/billing?offer=ai-prototype-sprint'
    },
    {
      slug: 'production-ai-build',
      title: 'Production AI Build',
      summary: 'A serious implementation engagement for companies ready to deploy an internal tool or client-facing AI product.',
      price: 'From £15,000',
      deliverables: ['Full-stack AI product', 'Frontend app', 'Backend API', 'Auth/admin', 'Guardrails', 'Usage logging and deployment'],
      bestFor: ['Businesses ready to deploy', 'Law firms', 'Operational teams', 'Product-led founders'],
      outcome: 'A working business system with real infrastructure, controls, and documentation.',
      ctaLabel: 'Request build billing',
      ctaHref: '/billing?offer=production-ai-build'
    },
    {
      slug: 'guardrails-cost-layer',
      title: 'Guardrails & Cost Layer',
      summary: 'A differentiated technical offer for companies already using AI and worried about hallucinations, data leakage, and unclear ROI.',
      price: 'From £8,000',
      deliverables: ['AI usage audit', 'Guardrail design', 'Human review layer', 'Token budget limits', 'Model routing', 'Admin dashboard'],
      bestFor: ['Teams already using AI', 'Operators under cost pressure', 'Businesses with governance concerns'],
      outcome: 'Better control over cost, quality, and operational risk.',
      ctaLabel: 'Request quote',
      ctaHref: '/billing?offer=guardrails-cost-layer'
    },
    {
      slug: 'ai-build-partner',
      title: 'AI Build Partner',
      summary: 'Recurring implementation support for companies that want continuous workflow improvements and ongoing AI delivery capacity.',
      price: 'From £2,000/month',
      deliverables: ['AI roadmap support', 'Monthly feature builds', 'Cost monitoring', 'Guardrail improvements', 'Data pipeline support', 'Team training'],
      bestFor: ['Growing teams', 'Operators with ongoing backlog', 'Companies standardising AI internally'],
      outcome: 'Recurring services revenue paired with an ongoing system improvement loop.',
      ctaLabel: 'Start retainer',
      ctaHref: '/billing?offer=ai-build-partner'
    }
  ],
  platformTitle: 'AIStack Core',
  platformIntro: 'AIStack Core is the reusable backend layer behind the services business. It turns one-off builds into a productized backend with recurring revenue.',
  platformBody: 'AIStack Core gives companies a reusable foundation for AI workflows, document intelligence, guardrails, human review, and usage tracking without rebuilding the same backend every time.',
  platformModules: ['User and project management', 'File and document ingestion', 'AI workflow orchestration', 'Prompt and version management', 'Guardrail checks', 'Human review queues', 'Cost and token tracking', 'Audit logs', 'Admin dashboard', 'Integration layer'],
  platformPackagesTitle: 'Platform plans',
  platformPackagesIntro: 'Use subscription pricing for the reusable backend, then pair it with setup fees, custom workflows, and usage-based billing where needed.',
  platformPackages: [
    {
      slug: 'aistack-core-starter',
      title: 'AIStack Core Starter',
      summary: 'For small businesses testing one AI workflow.',
      price: 'From £499/month',
      deliverables: ['1 workspace', '1 AI workflow', 'Basic dashboard', 'Limited usage', 'Email support'],
      outcome: 'A low-friction way to start with one useful workflow without custom infrastructure.',
      ctaLabel: 'Start subscription',
      ctaHref: '/billing?offer=aistack-core-starter'
    },
    {
      slug: 'aistack-core-growth',
      title: 'AIStack Core Growth',
      summary: 'For companies with real operational workflow usage.',
      price: 'From £1,500/month',
      deliverables: ['3-5 workflows', 'Document ingestion', 'Human review queue', 'Guardrails', 'Usage analytics', 'Token-cost dashboard'],
      outcome: 'A recurring operational platform layer for companies moving beyond experiments.',
      ctaLabel: 'Subscribe to growth',
      ctaHref: '/billing?offer=aistack-core-growth'
    },
    {
      slug: 'aistack-core-custom',
      title: 'AIStack Core Custom',
      summary: 'For companies needing custom deployment, compliance, private data controls, or deeper integrations.',
      price: 'From £3,000/month',
      deliverables: ['Custom workflows', 'Private deployment', 'Custom integrations', 'Advanced guardrails', 'Role-based access', 'Audit logs and SLA support'],
      outcome: 'A serious backend and control layer for higher-stakes AI operations.',
      ctaLabel: 'Request custom plan',
      ctaHref: '/billing?offer=aistack-core-custom'
    }
  ],
  aboutTitle: 'Founder-led, commercially focused, engineering-backed',
  aboutBody: [
    'Andrea Capera is a data scientist and AI product builder focused on turning complex workflows into practical AI systems.',
    'Her work combines product architecture, document intelligence, data pipelines, frontend/backend systems, dashboards, and human-in-the-loop AI.'
  ],
  trustTitle: 'Why companies hire Andrea through AIStack',
  trustPoints: [
    'MSc Data Science & Analytics background',
    'Full-stack product systems approach',
    'Document intelligence and evidence workflows',
    'Guardrails, review layers, and operational control',
    'Live portfolio across document intelligence, CRM, and deck tooling',
    'Bilingual-ready commercial positioning for LATAM and global work',
    'Discovery-call ready positioning built for consulting conversion and product credibility'
  ],
  faqTitle: 'Questions companies ask before they hire AIStack',
  faqIntro: 'This section is written for decision-makers comparing AI implementation partners, internal build options, and product delivery risk.',
  faqs: [
    {
      question: 'What does AIStack actually do for a company?',
      answer: 'AIStack helps companies scope, design, build, and deploy AI systems that support real business workflows. That includes internal tools, document intelligence, dashboards, CRM workflows, guardrails, production-ready product builds, and a reusable backend layer called AIStack Core.'
    },
    {
      question: 'Is AIStack consulting, product development, or implementation?',
      answer: 'It is a hybrid commercial offer: consulting to diagnose the right problem, product development to build the system, and implementation to make the workflow usable inside the business.'
    },
    {
      question: 'Who should book a discovery call?',
      answer: 'Founders, operators, firm partners, and internal teams who already know they want AI to solve a real workflow problem and need a credible build partner.'
    },
    {
      question: 'How is AIStack different from generic AI agencies?',
      answer: 'The work is anchored in real systems and live products, not generic automation promises. AIStack focuses on product structure, data handling, guardrails, cost control, and delivery discipline.'
    },
    {
      question: 'Can AIStack build internal systems and client-facing products?',
      answer: 'Yes. The portfolio covers internal workflows, CRM and operations systems, document intelligence, dashboards, and external-facing AI products.'
    },
    {
      question: 'Does AIStack only work in English-speaking markets?',
      answer: 'No. The practice is bilingual-ready and positioned for global teams as well as LATAM commercial work.'
    }
  ],
  contactTitle: 'Book a discovery call or send a qualified project brief',
  contactIntro: 'Use the contact form if you want to discuss an AI systems audit, prototype sprint, production AI build, AIStack Core subscription, document intelligence build, or a scoped implementation engagement.',
  contactPoints: [
    'Best for qualified consulting conversations and scoped project work',
    'You can request a discovery call directly from the form',
    'Typical topics: AI implementation, product builds, workflow automation, CRM systems, document intelligence'
  ],
  ctaTitle: 'Book a discovery call to turn AI ambition into a system your business can actually run.',
  ctaBody: 'AIStack helps serious buyers move from AI interest to a scoped implementation conversation, a paid systems audit, a working prototype, or a platform-backed product build.',
  footerNote: 'AI implementation studio and reusable backend platform for consulting, product builds, and recurring AI infrastructure.',
  labels: {
    language: 'Spanish',
    contact: 'Contact',
    services: 'Services',
    work: 'Work',
    process: 'Process',
    about: 'About',
    packages: 'Packages',
    capabilities: 'Capabilities',
    outcomes: 'Outcomes',
    founder: 'Founder',
    audit: 'Book discovery call',
    message: 'Tell us what you need',
    send: 'Send inquiry',
    liveSite: 'Live site',
    openCase: 'Open case',
    livePortfolio: 'Live Portfolio',
    navigation: 'Navigation',
    trust: 'Trust',
    faq: 'FAQ',
    name: 'Name',
    email: 'Email',
    company: 'Company',
    requestMeeting: 'Book a discovery call',
    availableSlots: 'Available slots',
    timezone: 'Your timezone',
    loadingSlots: 'Loading available slots...',
    noSlots: 'No available slots are currently open in the Monday to Thursday 13:00-15:00 London window.',
    problem: 'Problem',
    solution: 'Solution',
    adminLeads: 'Admin leads',
    token: 'Admin token',
    loadLeads: 'Load leads'
  }
};

const spanish: LocaleContent = {
  locale: 'es',
  siteTitle: 'AIStack',
  seoSuffix: 'Implementacion IA, sistemas, productos, flujos y guardrails',
  announcement: 'AIStack se esta convirtiendo en el sistema operativo para la implementacion de IA.',
  nav: [
    { label: 'Servicios', href: '/es/servicios' },
    { label: 'Plataforma', href: '/es/plataforma' },
    { label: 'Trabajo', href: '/es/trabajo' },
    { label: 'Precios', href: '/es/precios' },
    { label: 'Sobre AIStack', href: '/es/sobre-aistack' },
    { label: 'Contacto', href: '/es/contacto' }
  ],
  hero: {
    title: 'AIStack construye productos IA, herramientas internas y sistemas de workflow para empresas que necesitan valor de negocio medible.',
    body: 'AIStack es un estudio de implementacion IA mas un backend reutilizable. Ayudamos a convertir operaciones desordenadas, documentos, workflows e ideas en sistemas IA funcionales con guardrails, control de costos, revision humana e infraestructura real.',
    primaryCta: 'Reservar discovery call',
    secondaryCta: 'Ver trabajo en vivo'
  },
  liveNowTitle: 'Productos en vivo y sistemas activos',
  liveNowIntro: 'Un portafolio profesional de servicios debe mostrar trabajo publicado. Estos son entornos en vivo y sistemas operativos conectados a la practica AIStack.',
  heroMetrics: [
    { label: 'Enfoque', value: 'Sistemas en vivo y flujos en produccion' },
    { label: 'Modelo', value: 'Auditar, construir, desplegar, mejorar' },
    { label: 'Base', value: 'Productos IA, CRM e inteligencia documental' }
  ],
  mission: 'AIStack existe para convertir experimentos dispersos de IA en infraestructura de negocio confiable.',
  problemTitle: 'Adoptar IA es facil. Implementarla bien es donde las empresas fallan.',
  problemIntro: 'La mayoria de los equipos no necesitan mas demos. Necesitan flujos, controles y productos que resistan el uso diario.',
  problems: [
    { title: 'Los costos se disparan', body: 'Sin routing, cache, presupuestos y telemetria, el uso crece mas rapido que el valor.' },
    { title: 'Las salidas no son confiables', body: 'Sin validacion, sin revision y sin trazabilidad, la confianza baja.' },
    { title: 'Los flujos siguen manuales', body: 'La IA vive en chats aislados en lugar de sistemas de negocio y dashboards.' },
    { title: 'Los datos estan desordenados', body: 'PDFs, correos, hojas de calculo y CRM siguen sin estructura.' },
    { title: 'Los productos quedan en prototipo', body: 'Se construye una demo, pero no se llega a produccion con gobierno y fiabilidad.' }
  ],
  layersTitle: 'Capa operativa de AIStack',
  layers: ['Capa de datos', 'Capa de flujo', 'Capa de modelos', 'Capa de guardrails', 'Capa de revision humana', 'Capa de resultado'],
  servicesTitle: 'Servicios',
  servicesIntro: 'AIStack vende resultados, no horas. Los servicios crean flujo de caja rapido y la plataforma crea ingresos recurrentes. Cada oferta esta diseñada para mover al cliente desde el diagnostico hasta el despliegue y el control continuo.',
  services: [
    {
      slug: 'auditoria-sistemas-ia',
      title: 'Auditoria de sistemas IA',
      summary: 'Discovery pagado para empresas que saben que necesitan IA pero aun no tienen claro que automatizar o que sistema construir primero.',
      bullets: ['Mapa de oportunidad IA', 'Diagnostico de workflow', 'Analisis de costo y riesgo', 'Arquitectura recomendada']
    },
    {
      slug: 'sprint-prototipo-ia',
      title: 'Sprint de prototipo IA',
      summary: 'Un sprint de 2-4 semanas para construir algo visible, creible y testeable para equipos internos, founders o buyers operativos.',
      bullets: ['Prototipo funcional', 'Interfaz frontend', 'Backend/API', 'Guardrails basicos y despliegue']
    },
    {
      slug: 'construccion-ia-produccion',
      title: 'Construccion IA en produccion',
      summary: 'Implementacion completa para empresas listas para convertir una idea IA o un workflow manual en un sistema real.',
      bullets: ['App full-stack', 'Auth/admin', 'Workflow con revision humana', 'Despliegue y training']
    },
    {
      slug: 'guardrails-control-costos',
      title: 'Guardrails y control de costos',
      summary: 'Para equipos que ya usan IA y necesitan mas control sobre alucinaciones, costo, acceso, logging y gobierno.',
      bullets: ['Mapa de riesgos', 'Capa de revision humana', 'Presupuestos de tokens', 'Routing y cache']
    },
    {
      slug: 'partner-mensual-ia',
      title: 'Partner mensual IA',
      summary: 'Soporte continuo para equipos que quieren un partner serio de implementacion y no solo proyectos aislados.',
      bullets: ['Features mensuales', 'Optimizacion de prompts y modelos', 'Monitoreo de costos', 'Capacitacion']
    }
  ],
  demoTitle: 'Mira lo que construye AIStack',
  demoIntro: 'Cada flujo muestra la transicion desde friccion operativa hasta una capa de producto IA controlada.',
  demoTabs: [
    { key: 'documents', label: 'Documentos', before: 'PDFs, correos, adjuntos, hechos dispersos', after: 'Timeline estructurado, tags de evidencia, registro buscable', detail: 'Inteligencia documental tipo MailTrace con extraccion, revision y reportes.' },
    { key: 'teams', label: 'Equipos', before: 'Bandejas y Slack gestionados manualmente', after: 'Triage, routing, tareas, visibilidad en dashboard', detail: 'Pipelines operativos asistidos por IA con aprobacion humana en puntos criticos.' },
    { key: 'cost', label: 'Control de costo', before: 'Cada solicitud usa el modelo mas caro', after: 'Routing, cache, presupuestos, atribucion de gasto', detail: 'Controles en la capa de inferencia para hacer la IA viable a escala.' },
    { key: 'guardrails', label: 'Guardrails', before: 'Respuesta cruda sin validacion', after: 'Salida verificada, controles de politica, liberacion con revision humana', detail: 'Validacion estructurada para mejorar confiabilidad y auditoria.' },
    { key: 'product', label: 'Producto', before: 'Idea y flujos desconectados', after: 'Arquitectura, MVP, herramientas admin, ruta de despliegue', detail: 'Sistemas completos de producto, no solo experimentos de prompting.' }
  ],
  workTitle: 'Trabajo seleccionado, productos en vivo y sistemas operativos',
  workIntro: 'Productos en vivo y sistemas aplicados que muestran como Andrea Capera construye herramientas IA que se pueden usar, confiar y vender.',
  caseStudies: [
    {
      slug: 'mailtrace',
      title: 'MailTrace',
      strap: 'Inteligencia procesal para evidencia en correo',
      problem: 'La evidencia legal, institucional o de reclamos queda enterrada en largos hilos de correo y PDFs.',
      solution: 'Generacion de timelines, agrupacion de issues, extraccion documental, etiquetado de evidencia y reportes.',
      capabilities: ['Ingestion de email', 'Extraccion PDF', 'Timeline', 'Deteccion de issues', 'Capa de revision humana'],
      outcomes: ['Flujo estructurado de evidencia', 'Revision mas rapida', 'Inteligencia trazable'],
      kind: 'Caso de estudio'
    },
    {
      slug: 'deckaistack',
      title: 'DeckAIStack',
      strap: 'Infraestructura de decks con IA para inversionistas, advisors y operadores',
      problem: 'Los equipos necesitan revisar y mejorar decks sin perder estructura, marca o fidelidad a la fuente.',
      solution: 'Workspace inteligente con extraccion de slides, perfiles de marca, edicion IA, preview visual y grounding.',
      capabilities: ['Arquitectura de producto', 'Flujos LLM', 'Integracion frontend/backend', 'Edicion segun marca', 'Pipelines documentales'],
      outcomes: ['Iteracion mas rapida', 'Ediciones con grounding', 'Flujo operativo de edicion'],
      kind: 'Producto en vivo',
      liveUrl: 'https://deck.aistack.codes',
      liveLabel: 'deck.aistack.codes'
    },
    {
      slug: 'crm-aistack',
      title: 'CRM AIStack',
      strap: 'Flujos CRM operativos y visibilidad de negocio',
      problem: 'Los equipos necesitan una capa CRM en vivo que conecte contactos, acciones operativas y visibilidad interna.',
      solution: 'Un entorno CRM para registrar actividad, capturar datos estructurados y soportar acciones asistidas por IA.',
      capabilities: ['Estructura CRM', 'Operacion de leads', 'Tracking de flujo', 'Herramienta interna', 'Operacion de entrega'],
      outcomes: ['Operacion interna mas limpia', 'Gestion estructurada de leads', 'Entorno en vivo'],
      kind: 'Sistema operativo'
    },
    {
      slug: 'visualizacion-de-datos',
      title: 'Visualizacion de datos',
      strap: 'Dashboards de negocio y narrativa analitica',
      problem: 'Las empresas tienen datos pero no una interfaz de decision que ayude a actuar rapido.',
      solution: 'Dashboards, vistas analiticas, segmentacion y salidas explicables que convierten datos en accion.',
      capabilities: ['Diseno de dashboards', 'Narrativa de datos', 'Analisis de segmentacion', 'Sistemas KPI', 'Soporte a decision'],
      outcomes: ['Capa clara de reporting', 'Visibilidad operativa', 'Analitica lista para decision'],
      kind: 'Analytics Build'
    },
    {
      slug: 'prototipo-flujo-ia',
      title: 'Prototipo de flujo IA',
      strap: 'Laboratorio de prototipos para soporte, compliance y operaciones',
      problem: 'Las empresas necesitan probar un flujo IA antes de financiar una implementacion completa.',
      solution: 'Sprints rapidos para triage de soporte, asistentes HR, revision de compliance o generacion de propuestas.',
      capabilities: ['Mapeo de flujo', 'Interfaz prototipo', 'Capas de aprobacion', 'Integracion API'],
      outcomes: ['Validacion mas rapida', 'Claridad de implementacion', 'Roadmap para produccion'],
      kind: 'Prototype Lab'
    }
  ],
  processTitle: 'Proceso',
  processIntro: 'Cada proyecto esta disenado para pasar de la incertidumbre a una capa operativa funcional con controles medibles.',
  process: [
    { title: 'Diagnosticar', deliverable: 'Mapa de oportunidad IA', detail: 'Identificamos dolor operativo, objetivos de negocio y donde la IA realmente aporta.' },
    { title: 'Mapear', deliverable: 'Diagrama de datos y procesos', detail: 'Definimos entradas, aprobaciones, limites del sistema y riesgo operativo.' },
    { title: 'Disenar', deliverable: 'Arquitectura y plan de implementacion', detail: 'Elegimos productos, patrones de modelos, guardrails y prioridades de entrega.' },
    { title: 'Construir', deliverable: 'MVP o herramienta interna funcional', detail: 'Entregamos interfaz, orquestacion y logica de flujo con casos reales.' },
    { title: 'Desplegar', deliverable: 'Metricas, guardrails y control de costos', detail: 'Medimos uso, mejoramos calidad y mantenemos gobernabilidad.' }
  ],
  packagesTitle: 'Precios de servicios',
  packagesIntro: 'Cada proyecto empieza con el sistema mas pequeño que pueda crear valor medible. Usa estos precios base para alinear presupuesto y luego define el alcance por workflow, riesgo, datos e integraciones.',
  packages: [
    { slug: 'ai-systems-audit', title: 'Auditoria de sistemas IA', summary: 'Para empresas que necesitan IA pero aun no saben por donde empezar ni que sistema construir primero.', price: 'Desde £1,500', deliverables: ['Mapa de oportunidad IA', 'Diagnostico de workflow', 'Analisis de costo y riesgo', 'Arquitectura recomendada', 'Roadmap de automatizacion', 'Estimacion de build'], bestFor: ['Empresas explorando IA', 'Founders con ideas', 'Equipos con uso manual de IA'], outcome: 'Discovery pagado que termina en un plan practico de implementacion.', ctaLabel: 'Pagar auditoria', ctaHref: '/es/facturacion?offer=ai-systems-audit' },
    { slug: 'prototype-rescue-audit', title: 'Auditoria de rescate de prototipo', summary: 'Para founders y empresas con prototipos IA incompletos, experimentos no-code o MVPs rotos que necesitan una ruta real a produccion.', price: 'Desde £1,500', deliverables: ['Revision de codebase', 'Analisis frontend/backend', 'Revision de modelo de datos', 'Revision de riesgo de despliegue', 'Roadmap de rescate', 'Recomendacion de build'], bestFor: ['Prototipos a medias', 'Herramientas internas rotas', 'Experimentos no-code', 'Codebases desordenados'], outcome: 'Un diagnostico claro de que se puede salvar, que hay que reconstruir y como convertir una demo fragil en producto.', ctaLabel: 'Iniciar auditoria de rescate', ctaHref: '/es/facturacion?offer=prototype-rescue-audit' },
    { slug: 'ai-prototype-sprint', title: 'Sprint de prototipo IA', summary: 'La oferta principal para startups y SMEs que necesitan una demo funcional y creible.', price: 'Desde £5,000', deliverables: ['Prototipo funcional', 'Interfaz frontend', 'Backend/API', 'Base de datos si hace falta', 'Guardrails basicos', 'Despliegue'], bestFor: ['Startups', 'Equipos internos', 'SMEs validando workflows'], outcome: 'Un sistema visible para demo, prueba y decision de produccion.', ctaLabel: 'Pagar deposito', ctaHref: '/es/facturacion?offer=ai-prototype-sprint' },
    { slug: 'production-ai-build', title: 'Construccion IA en produccion', summary: 'Implementacion seria para empresas listas para desplegar una herramienta interna o producto IA.', price: 'Desde £15,000', deliverables: ['Producto IA full-stack', 'Frontend app', 'Backend API', 'Auth/admin', 'Guardrails', 'Logging y despliegue'], bestFor: ['Empresas listas para desplegar', 'Firmas legales', 'Equipos operativos'], outcome: 'Un sistema real con infraestructura, controles y documentacion.', ctaLabel: 'Solicitar facturacion', ctaHref: '/es/facturacion?offer=production-ai-build' },
    { slug: 'guardrails-cost-layer', title: 'Guardrails y control de costos', summary: 'Oferta tecnica diferencial para empresas que ya usan IA y necesitan gobernanza mas seria.', price: 'Desde £8,000', deliverables: ['Auditoria de uso IA', 'Diseno de guardrails', 'Capa de revision humana', 'Presupuestos de tokens', 'Model routing', 'Dashboard admin'], bestFor: ['Equipos que ya usan IA', 'Operaciones con presion de costos', 'Negocios con riesgo regulatorio'], outcome: 'Mas control sobre costo, calidad y riesgo operativo.', ctaLabel: 'Solicitar cotizacion', ctaHref: '/es/facturacion?offer=guardrails-cost-layer' },
    { slug: 'ai-build-partner', title: 'Partner mensual IA', summary: 'Soporte continuo de implementacion para empresas con backlog y necesidad de mejora constante.', price: 'Desde £2,000/mes', deliverables: ['Soporte de roadmap', 'Features mensuales', 'Monitoreo de costos', 'Mejoras de guardrails', 'Soporte de pipelines', 'Capacitacion'], bestFor: ['Equipos en crecimiento', 'Operadores con backlog continuo', 'Empresas estandarizando IA'], outcome: 'Ingresos recurrentes de servicios mas un ciclo continuo de mejora del sistema.', ctaLabel: 'Iniciar retainer', ctaHref: '/es/facturacion?offer=ai-build-partner' }
  ],
  platformTitle: 'AIStack Core',
  platformIntro: 'AIStack Core es la capa backend reutilizable detras del negocio de servicios. Convierte builds puntuales en un producto con ingresos recurrentes.',
  platformBody: 'AIStack Core da a las empresas una base reutilizable para workflows IA, inteligencia documental, guardrails, revision humana y tracking de uso sin reconstruir el mismo backend cada vez.',
  platformModules: ['Gestion de usuarios y proyectos', 'Ingestion de archivos y documentos', 'Orquestacion de workflows IA', 'Gestion de prompts y versiones', 'Checks de guardrails', 'Colas de revision humana', 'Tracking de costo y tokens', 'Logs de auditoria', 'Dashboard admin', 'Capa de integraciones'],
  platformPackagesTitle: 'Planes de plataforma',
  platformPackagesIntro: 'Usa suscripciones para el backend reutilizable y combinalas con setup fees, workflows custom y billing por uso cuando haga falta.',
  platformPackages: [
    { slug: 'aistack-core-starter', title: 'AIStack Core Starter', summary: 'Para small businesses probando un solo workflow IA.', price: 'Desde £499/mes', deliverables: ['1 workspace', '1 workflow IA', 'Dashboard basico', 'Uso limitado', 'Soporte por email'], outcome: 'Una forma simple de empezar con un workflow util sin infraestructura custom.', ctaLabel: 'Iniciar suscripcion', ctaHref: '/es/facturacion?offer=aistack-core-starter' },
    { slug: 'aistack-core-growth', title: 'AIStack Core Growth', summary: 'Para empresas con uso operativo real.', price: 'Desde £1,500/mes', deliverables: ['3-5 workflows', 'Ingestion documental', 'Cola de revision humana', 'Guardrails', 'Analitica de uso', 'Dashboard de costo'], outcome: 'Una capa operativa recurrente para empresas que ya van mas alla del experimento.', ctaLabel: 'Suscribirse a growth', ctaHref: '/es/facturacion?offer=aistack-core-growth' },
    { slug: 'aistack-core-custom', title: 'AIStack Core Custom', summary: 'Para empresas que necesitan despliegue custom, compliance o integraciones mas profundas.', price: 'Desde £3,000/mes', deliverables: ['Workflows custom', 'Despliegue privado', 'Integraciones custom', 'Guardrails avanzados', 'Acceso por roles', 'Logs de auditoria y SLA'], outcome: 'Un backend y capa de control serios para operaciones IA de mayor riesgo.', ctaLabel: 'Solicitar plan custom', ctaHref: '/es/facturacion?offer=aistack-core-custom' }
  ],
  aboutTitle: 'Liderado por fundadora, orientado a negocio y respaldado por ejecucion tecnica',
  aboutBody: [
    'Andrea Capera es cientifica de datos y constructora de productos IA enfocada en convertir flujos complejos en sistemas utiles.',
    'Su trabajo une arquitectura de producto, inteligencia documental, pipelines de datos, sistemas frontend/backend, dashboards y IA con humano en el loop.'
  ],
  trustTitle: 'Por que contratar a Andrea a traves de AIStack',
  trustPoints: [
    'Base en MSc Data Science & Analytics',
    'Enfoque de sistemas y producto full-stack',
    'Experiencia en inteligencia documental y evidencia',
    'Guardrails, revision humana y control operativo',
    'Portafolio en vivo entre inteligencia documental, CRM y tooling de decks',
    'Posicionamiento bilingue para LATAM y mercado global',
    'Posicionamiento preparado para discovery calls, consultoria y credibilidad de producto'
  ],
  faqTitle: 'Preguntas que hacen las empresas antes de contratar AIStack',
  faqIntro: 'Esta seccion esta pensada para decisores que comparan partners de implementacion IA, desarrollo interno y riesgo de entrega.',
  faqs: [
    {
      question: 'Que hace AIStack realmente para una empresa?',
      answer: 'AIStack ayuda a definir, diseñar, construir y desplegar sistemas IA que soportan flujos reales de negocio. Eso incluye herramientas internas, inteligencia documental, dashboards, flujos CRM, guardrails, productos listos para produccion y una capa backend reutilizable llamada AIStack Core.'
    },
    {
      question: 'AIStack es consultoria, desarrollo de producto o implementacion?',
      answer: 'Es una oferta hibrida: consultoria para diagnosticar el problema correcto, desarrollo de producto para construir el sistema e implementacion para que el flujo funcione dentro del negocio.'
    },
    {
      question: 'Quien deberia reservar una discovery call?',
      answer: 'Fundadores, operadores, socios de firma y equipos internos que ya saben que quieren resolver un problema real con IA y necesitan un partner creible para construirlo.'
    },
    {
      question: 'Como se diferencia AIStack de una agencia IA generica?',
      answer: 'El trabajo esta apoyado en sistemas reales y productos en vivo, no en promesas genericas de automatizacion. AIStack se centra en estructura de producto, datos, guardrails, control de costo y disciplina de entrega.'
    },
    {
      question: 'AIStack puede construir sistemas internos y productos para clientes?',
      answer: 'Si. El portafolio cubre flujos internos, CRM y operaciones, inteligencia documental, dashboards y productos IA externos.'
    },
    {
      question: 'AIStack solo trabaja para mercados angloparlantes?',
      answer: 'No. La practica esta preparada para trabajar en dos idiomas y posicionada tanto para equipos globales como para trabajo comercial en LATAM.'
    }
  ],
  contactTitle: 'Reserva una discovery call o envia un brief de proyecto calificado',
  contactIntro: 'Usa el formulario si quieres hablar de una auditoria de sistemas IA, un sprint de prototipo, una build en produccion, una suscripcion AIStack Core o un engagement de implementacion bien definido.',
  contactPoints: [
    'Ideal para conversaciones de consultoria y proyectos con alcance real',
    'Puedes solicitar una discovery call directamente desde el formulario',
    'Temas tipicos: implementacion IA, productos, automatizacion, CRM, inteligencia documental'
  ],
  ctaTitle: 'Reserva una discovery call para convertir la ambicion de IA en un sistema que tu negocio realmente pueda operar.',
  ctaBody: 'AIStack ayuda a compradores serios a pasar del interes por la IA a una conversacion de implementacion con alcance claro, una auditoria pagada, un prototipo funcional o una build apoyada por plataforma.',
  footerNote: 'Estudio de implementacion IA y plataforma backend reutilizable para productos, consultoria e infraestructura recurrente.',
  labels: {
    language: 'English',
    contact: 'Contacto',
    services: 'Servicios',
    work: 'Trabajo',
    process: 'Proceso',
    about: 'Sobre AIStack',
    packages: 'Paquetes',
    capabilities: 'Capacidades',
    outcomes: 'Resultados',
    founder: 'Fundadora',
    audit: 'Reservar discovery call',
    message: 'Cuentanos que necesitas',
    send: 'Enviar consulta',
    liveSite: 'Sitio en vivo',
    openCase: 'Ver caso',
    livePortfolio: 'Portafolio en vivo',
    navigation: 'Navegacion',
    trust: 'Confianza',
    faq: 'FAQ',
    name: 'Nombre',
    email: 'Email',
    company: 'Empresa',
    requestMeeting: 'Reservar discovery call',
    availableSlots: 'Horarios disponibles',
    timezone: 'Tu zona horaria',
    loadingSlots: 'Cargando horarios disponibles...',
    noSlots: 'No hay horarios disponibles dentro de la ventana de lunes a jueves de 13:00 a 15:00 hora de Londres.',
    problem: 'Problema',
    solution: 'Solucion',
    adminLeads: 'Leads admin',
    token: 'Token admin',
    loadLeads: 'Cargar leads'
  }
};

export const siteByLocale: Record<Locale, LocaleContent> = {
  en: english,
  es: spanish
};

export function getSiteContent(locale: Locale) {
  return siteByLocale[locale];
}

export function getCaseStudy(locale: Locale, slug: string) {
  return siteByLocale[locale].caseStudies.find((item) => item.slug === slug);
}
