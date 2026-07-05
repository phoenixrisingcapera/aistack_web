export type ServicePageContent = {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetClients: string[];
  problems: string[];
  whatWeBuild: string[];
  outcomes: string[];
  deliverables: string[];
  useCases: string[];
  relatedCaseStudies: string[];
  relatedServices: string[];
  technicalStack: string[];
  faqs: { question: string; answer: string }[];
  ctaHeadline: string;
  ctaText: string;
  ctaButtonLabel: string;
};

export const services: ServicePageContent[] = [
  {
    slug: 'ai-product-build',
    title: 'AI Product Build',
    shortTitle: 'Product Build',
    seoTitle: 'AI Product Build Services for MVPs, Internal Tools, and Workflow Platforms',
    seoDescription: 'AIStack designs and builds working AI products with frontend, backend, database, orchestration, deployment, and user-facing workflows.',
    heroHeadline: 'Build a real AI product, not just a demo.',
    heroSubheadline: 'AIStack helps founders and operators move from concept, workflow, or prototype into a working AI product with the architecture needed for real users.',
    targetClients: ['Startups with AI product ideas', 'Teams needing internal AI tools', 'Businesses replacing manual workflows', 'Operators needing a real MVP'],
    problems: ['An idea exists, but there is no product architecture.', 'The workflow is still manual or spread across tools.', 'There is no reliable backend or data model.', 'The AI layer is disconnected from the product experience.'],
    whatWeBuild: ['SaaS MVPs', 'Internal AI tools', 'AI dashboards', 'Workflow platforms', 'AI assistants', 'Document intelligence systems', 'Admin panels', 'User-facing apps'],
    outcomes: ['A working product with frontend, backend, database, AI workflow, deployment, and user journey.', 'A clearer path from idea to launch.', 'A system teams can actually use and improve.'],
    deliverables: ['Product architecture', 'Frontend application', 'Backend and APIs', 'Database schema', 'AI workflow integration', 'Deployment plan'],
    useCases: ['Customer-facing AI product', 'Internal operations tool', 'Document review workflow', 'Knowledge assistant', 'Admin-led workflow platform'],
    relatedCaseStudies: ['deckaistack', 'mailtrace'],
    relatedServices: ['prototype-rescue', 'ai-backend-infrastructure', 'automation-agents'],
    technicalStack: ['SvelteKit frontend', 'FastAPI backend', 'PostgreSQL data model', 'LLM orchestration', 'Guardrails and review layers'],
    faqs: [
      { question: 'Who is AI Product Build for?', answer: 'It is for founders and teams who need a working AI product with a real backend, real data model, and a usable workflow rather than another design-heavy demo.' },
      { question: 'Can AIStack build internal and client-facing tools?', answer: 'Yes. The same service can support internal operator tools, workflow systems, and customer-facing AI products.' }
    ],
    ctaHeadline: 'Discuss an AI product build',
    ctaText: 'Bring your idea, workflow, or prototype and AIStack will help shape the smallest useful system worth building.',
    ctaButtonLabel: 'Book a meeting'
  },
  {
    slug: 'prototype-rescue',
    title: 'Prototype Rescue',
    shortTitle: 'Prototype Rescue',
    seoTitle: 'Prototype Rescue Services for AI Demos, No-Code Apps, and Half-Built Products',
    seoDescription: 'AIStack audits, rescues, rebuilds, and productionises unfinished AI prototypes with backend architecture, data models, workflows, and deployment.',
    heroHeadline: 'Turn your AI-generated prototype into a real product.',
    heroSubheadline: 'AI-generated prototypes are useful starting points, but most still need backend architecture, data models, AI workflows, guardrails, and deployment engineering before they become real products.',
    targetClients: ['Founders with half-built AI products', 'Agencies with broken demos', 'Consultants with no-code experiments', 'Businesses with polished interfaces but no working system'],
    problems: ['The app has no real backend.', 'There is no database or user persistence.', 'The AI layer is just a prompt box.', 'The codebase is messy, fragile, or difficult to deploy.', 'There is no roadmap from demo to product.'],
    whatWeBuild: ['Codebase audit', 'Backend rebuild', 'Database models', 'Authentication and workspaces', 'RAG or document workflows where needed', 'Deployment-ready architecture'],
    outcomes: ['A random prototype becomes a structured product with a clear backend, data model, AI layer, and deployment path.', 'You know what is salvageable and what needs to be rebuilt.', 'You stop spending money on surface-level demos that cannot scale.'],
    deliverables: ['Codebase and architecture review', 'Frontend/backend gap analysis', 'AI workflow assessment', 'Database and data model recommendations', 'Deployment risk review', 'Prioritised rescue roadmap'],
    useCases: ['Claude or Manus-built prototype', 'No-code internal tool that cannot scale', 'Prompt-box app with no data model', 'Broken MVP needing a production path', 'Agency proof-of-concept that needs real infrastructure'],
    relatedCaseStudies: ['deckaistack', 'mailtrace'],
    relatedServices: ['ai-product-build', 'ai-backend-infrastructure', 'ai-guardrails-cost-control'],
    technicalStack: ['Backend architecture', 'API design', 'Database planning', 'AI workflow repair', 'Deployment structure'],
    faqs: [
      { question: 'What kinds of prototypes does AIStack rescue?', answer: 'AIStack rescues AI-generated demos, no-code workflows, half-built apps, and messy codebases that need backend structure and a production path.' },
      { question: 'Does Prototype Rescue always mean rebuilding everything?', answer: 'No. The goal is to identify what is salvageable, what needs to be rebuilt, and what should be added to make the product usable.' }
    ],
    ctaHeadline: 'Start with a Prototype Rescue Audit',
    ctaText: 'AIStack will diagnose the gaps, identify the salvageable parts, and recommend the fastest path to a working product.',
    ctaButtonLabel: 'Start with an audit'
  },
  {
    slug: 'ai-backend-infrastructure',
    title: 'AI Backend Infrastructure',
    shortTitle: 'Backend Infrastructure',
    seoTitle: 'AI Backend Infrastructure for Products, Workflows, and Internal Tools',
    seoDescription: 'AIStack builds the backend layer for AI products with FastAPI, PostgreSQL, orchestration, provider routing, usage logging, and admin visibility.',
    heroHeadline: 'AI backend infrastructure for products, workflows, and internal tools.',
    heroSubheadline: 'This is where AIStack sells the backend itself: the service layer needed to run AI workflows reliably, with data, orchestration, and operational controls.',
    targetClients: ['Founders shipping AI products', 'Agencies needing AI backend capability', 'Teams with frontend prototypes but no service layer', 'Businesses building internal AI systems'],
    problems: ['There is no backend architecture behind the AI workflow.', 'Provider usage is not tracked or routed properly.', 'Document and file workflows are missing.', 'There is no admin or audit layer for operations.'],
    whatWeBuild: ['FastAPI backend', 'PostgreSQL database', 'Redis or job queues', 'File upload and storage', 'AI orchestration layer', 'Admin dashboards and API docs'],
    outcomes: ['Companies get the backend layer they need to run AI workflows reliably.', 'The product gains a real service boundary and deployment path.', 'The team can add new AI workflows faster over time.'],
    deliverables: ['API architecture', 'Database models', 'Workflow orchestration layer', 'Provider routing logic', 'Usage logging', 'Technical documentation'],
    useCases: ['AI product backend', 'Internal workflow engine', 'RAG service layer', 'Document processing API', 'Agency white-label backend'],
    relatedCaseStudies: ['deckaistack', 'mailtrace'],
    relatedServices: ['ai-product-build', 'rag-document-intelligence', 'ai-guardrails-cost-control'],
    technicalStack: ['FastAPI', 'PostgreSQL', 'Redis queues', 'File storage', 'Provider routing', 'Admin visibility'],
    faqs: [
      { question: 'What does AI backend infrastructure usually include?', answer: 'Usually a backend API, database, file handling, workflow orchestration, provider routing, logging, and an admin or operator layer.' },
      { question: 'Is this only for new products?', answer: 'No. It is also for existing apps that need a stronger backend to support AI workflows reliably.' }
    ],
    ctaHeadline: 'Discuss backend architecture with AIStack',
    ctaText: 'If the frontend exists but the product has no reliable backend, AIStack can help define and build the missing infrastructure.',
    ctaButtonLabel: 'Discuss backend infrastructure'
  },
  {
    slug: 'rag-document-intelligence',
    title: 'RAG & Document Intelligence',
    shortTitle: 'RAG & Documents',
    seoTitle: 'RAG Development and Document Intelligence Services',
    seoDescription: 'AIStack builds RAG systems, document ingestion workflows, searchable knowledge bases, and evidence intelligence pipelines for document-heavy businesses.',
    heroHeadline: 'Make business documents searchable, structured, and usable inside AI workflows.',
    heroSubheadline: 'AIStack helps document-heavy teams turn PDFs, emails, reports, policies, and contracts into usable data, searchable knowledge, and AI-assisted workflows.',
    targetClients: ['Law firms', 'Consultants', 'Compliance teams', 'Operations teams', 'Education providers', 'Real estate and property businesses'],
    problems: ['Important information is trapped in PDFs and email threads.', 'Teams cannot search or query their own document base reliably.', 'AI answers are ungrounded because there is no retrieval layer.', 'Review is manual and inconsistent.'],
    whatWeBuild: ['PDF ingestion', 'Email ingestion', 'Document classification', 'Entity extraction', 'Timeline generation', 'RAG assistants with source citations'],
    outcomes: ['Business documents become searchable, structured, and usable inside AI workflows.', 'Operators review information faster with better traceability.', 'The AI layer stays grounded in source material.'],
    deliverables: ['Ingestion pipelines', 'Searchable knowledge base', 'Citation-aware RAG flows', 'Human review queue', 'Reporting outputs'],
    useCases: ['Contract review support', 'Evidence and complaint workflows', 'Policy search assistant', 'Operational document classifier', 'Research and reporting workflows'],
    relatedCaseStudies: ['mailtrace', 'deckaistack'],
    relatedServices: ['ai-backend-infrastructure', 'ai-guardrails-cost-control', 'automation-agents'],
    technicalStack: ['Document pipelines', 'RAG architecture', 'Search index', 'Citation layer', 'Review queues'],
    faqs: [
      { question: 'What kinds of documents can AIStack work with?', answer: 'PDFs, email threads, reports, policies, contracts, attachments, and other business records that need structure and retrieval.' },
      { question: 'Does AIStack support source-grounded answers?', answer: 'Yes. RAG and document intelligence work is designed to keep outputs grounded in source material with better traceability.' }
    ],
    ctaHeadline: 'Discuss RAG and document intelligence',
    ctaText: 'If your documents are the bottleneck, AIStack can design the ingestion, retrieval, and review layer behind a real workflow.',
    ctaButtonLabel: 'Book a document workflow call'
  },
  {
    slug: 'ml-data-science',
    title: 'Machine Learning & Data Science',
    shortTitle: 'ML & Data Science',
    seoTitle: 'Machine Learning Consulting and Data Science Services',
    seoDescription: 'AIStack offers machine learning and data science services for prediction, classification, segmentation, risk scoring, and decision support.',
    heroHeadline: 'Use your data to predict, segment, prioritise, and make better decisions.',
    heroSubheadline: 'AIStack turns data science capability into practical business workflows, from baseline modelling and evaluation to decision-support outputs.',
    targetClients: ['Businesses with usable datasets', 'Operators needing prediction or prioritisation', 'Teams exploring decision support', 'Founders needing ML-backed product features'],
    problems: ['Data exists, but there is no practical modelling workflow.', 'Teams need prediction or classification but lack technical direction.', 'Results are hard to explain to business stakeholders.', 'There is no bridge between analysis and product use.'],
    whatWeBuild: ['Predictive models', 'Classification workflows', 'Segmentation analysis', 'Risk scoring', 'Feature engineering', 'Explainable dashboards'],
    outcomes: ['Companies can use their data to predict, segment, prioritise, and make better decisions.', 'Data science work becomes more operational and commercially useful.', 'Model outputs are easier to explain and act on.'],
    deliverables: ['Data review', 'Baseline modelling', 'Evaluation framework', 'Feature recommendations', 'Decision-support outputs'],
    useCases: ['Churn prediction', 'Classification model', 'Segmentation workflow', 'Risk scoring', 'Model-backed internal dashboard'],
    relatedCaseStudies: ['machine-learning-projects', 'data-visualisation-projects'],
    relatedServices: ['data-visualisation', 'hpc-distributed-data-science'],
    technicalStack: ['Python modelling workflows', 'Feature engineering', 'Model evaluation', 'Business-facing reporting'],
    faqs: [
      { question: 'Is this service only for advanced ML teams?', answer: 'No. It can start with baseline modelling, clearer evaluation, and practical decision-support use cases.' },
      { question: 'What kinds of modelling projects fit here?', answer: 'Prediction, classification, segmentation, scoring, prioritisation, and model-backed workflow design.' }
    ],
    ctaHeadline: 'Talk through a machine learning workflow',
    ctaText: 'AIStack can help decide whether the right solution is prediction, classification, segmentation, or a simpler analytics workflow.',
    ctaButtonLabel: 'Discuss ML and data science'
  },
  {
    slug: 'data-visualisation',
    title: 'Data Visualisation & Analytics',
    shortTitle: 'Data Visualisation',
    seoTitle: 'Data Visualisation Dashboards and Analytics Services',
    seoDescription: 'AIStack builds dashboards, KPI systems, analytics views, and business intelligence interfaces that make data decision-ready.',
    heroHeadline: 'Turn raw data into decision-ready visual intelligence.',
    heroSubheadline: 'AIStack builds dashboards and analytics interfaces that help teams understand operations, performance, customer segments, and business opportunities faster.',
    targetClients: ['Founders', 'Operators', 'Consultants', 'Business teams with spreadsheet-heavy workflows', 'Teams needing executive reporting'],
    problems: ['Data lives in spreadsheets and reports but not in a usable interface.', 'Stakeholders cannot see what matters quickly.', 'Analytics work is hard to share or operationalise.', 'Reporting is reactive instead of decision-ready.'],
    whatWeBuild: ['Executive dashboards', 'KPI dashboards', 'Operational dashboards', 'Market analysis views', 'Segmentation visuals', 'Business intelligence prototypes'],
    outcomes: ['Raw data becomes decision-ready visual intelligence.', 'Teams get clearer operational visibility.', 'Reporting becomes more usable and more commercial.'],
    deliverables: ['Dashboard design', 'Data storytelling structure', 'KPI reporting layer', 'Analytical views', 'Interactive visual outputs'],
    useCases: ['Executive KPI board', 'Operational reporting dashboard', 'Customer segmentation view', 'Market or geographic analysis', 'Interactive analytics prototype'],
    relatedCaseStudies: ['data-visualisation-projects', 'machine-learning-projects'],
    relatedServices: ['ml-data-science', 'hpc-distributed-data-science'],
    technicalStack: ['Dashboard UI', 'Analytics queries', 'Reporting layer', 'Interactive visuals'],
    faqs: [
      { question: 'What is the difference between this and BI reporting?', answer: 'AIStack focuses on making data easier to act on, not just easier to display. That often means clearer KPI logic, interaction, and operational context.' },
      { question: 'Can this service work with existing spreadsheets or datasets?', answer: 'Yes. Many analytics and dashboard projects start from spreadsheets, exports, and scattered reporting sources.' }
    ],
    ctaHeadline: 'Discuss a data visualisation project',
    ctaText: 'AIStack can help shape the reporting layer, dashboard logic, and visual structure that your data is currently missing.',
    ctaButtonLabel: 'Book an analytics call'
  },
  {
    slug: 'hpc-distributed-data-science',
    title: 'HPC & Distributed Data Science',
    shortTitle: 'Distributed Data Science',
    seoTitle: 'Distributed Data Processing and HPC Workflow Support',
    seoDescription: 'AIStack supports large-scale data processing, parallel workflows, research computing, and reproducible distributed data science pipelines.',
    heroHeadline: 'Distributed data processing for large-scale analysis.',
    heroSubheadline: 'AIStack helps technically demanding teams make large data workloads more structured, reproducible, and scalable without hiding the engineering complexity.',
    targetClients: ['Research teams', 'Technical startups', 'Data-heavy operators', 'Organisations with large or complex datasets'],
    problems: ['Large workloads are too slow or too manual.', 'Pipelines are difficult to reproduce.', 'Batch jobs and preprocessing are fragile.', 'The team needs more scalable technical foundations.'],
    whatWeBuild: ['Large dataset processing pipelines', 'Parallel workflows', 'PySpark-style data pipelines', 'Batch processing systems', 'Scalable data preparation', 'Performance optimisation'],
    outcomes: ['Large data workloads become structured, reproducible, and scalable.', 'Technical teams gain better performance for heavy analysis.', 'Research or batch processing becomes easier to maintain.'],
    deliverables: ['Distributed workflow review', 'Pipeline engineering plan', 'Batch processing logic', 'Performance recommendations', 'Scalable data preparation'],
    useCases: ['Research computing support', 'Large preprocessing jobs', 'Distributed feature engineering', 'Bioinformatics or scientific data workflows', 'Performance-sensitive data pipelines'],
    relatedCaseStudies: ['hpc-distributed-data-science', 'machine-learning-projects'],
    relatedServices: ['ml-data-science', 'data-visualisation'],
    technicalStack: ['Distributed processing patterns', 'Batch workflows', 'Pipeline reproducibility', 'Performance tuning'],
    faqs: [
      { question: 'Who usually needs distributed data processing?', answer: 'Teams with large datasets, heavy preprocessing, batch jobs, or research workflows that are too slow or fragile in smaller setups.' },
      { question: 'Does AIStack position this only for research teams?', answer: 'No. It also applies to technical businesses dealing with large-scale data preparation or performance-sensitive pipelines.' }
    ],
    ctaHeadline: 'Talk through a large-data workflow',
    ctaText: 'If the challenge is scale, reproducibility, or performance rather than basic reporting, AIStack can help scope the right technical path.',
    ctaButtonLabel: 'Discuss distributed processing'
  },
  {
    slug: 'ai-guardrails-cost-control',
    title: 'AI Guardrails & Cost Control',
    shortTitle: 'Guardrails & Cost Control',
    seoTitle: 'AI Guardrails, Token Cost Optimisation, and Governance Services',
    seoDescription: 'AIStack helps companies use AI without losing control of quality, cost, access, logging, or operational risk.',
    heroHeadline: 'Use AI without losing control of quality, cost, or risk.',
    heroSubheadline: 'Many companies already use AI, but with weak governance, unclear spend, no review path, and no operational visibility. AIStack fixes that.',
    targetClients: ['Businesses already using AI', 'Operational teams under cost pressure', 'Risk-conscious buyers', 'Founders scaling AI features'],
    problems: ['Usage costs are climbing with low visibility.', 'Outputs are unreliable or hard to audit.', 'There is no prompt versioning or model routing discipline.', 'Human review is missing where it matters.'],
    whatWeBuild: ['Token usage tracking', 'Model routing', 'Prompt versioning', 'Human review flows', 'Hallucination checks', 'Audit logs and access controls'],
    outcomes: ['Companies can use AI without losing control of quality, cost, or risk.', 'Spend becomes easier to understand and manage.', 'The AI layer becomes safer for real business use.'],
    deliverables: ['Usage audit', 'Risk map', 'Guardrail design', 'Budget and routing rules', 'Admin visibility', 'Monitoring recommendations'],
    useCases: ['Internal assistant governance', 'Client-facing AI guardrails', 'RAG grounding controls', 'Token-cost reduction', 'Operational audit logging'],
    relatedCaseStudies: ['deckaistack', 'mailtrace'],
    relatedServices: ['ai-backend-infrastructure', 'automation-agents', 'rag-document-intelligence'],
    technicalStack: ['Usage logging', 'Model routing', 'Prompt governance', 'Human review', 'Auditability'],
    faqs: [
      { question: 'Why do guardrails and cost control matter so much?', answer: 'Because many teams already use AI but still lack review paths, usage visibility, routing discipline, and controls for quality or risk.' },
      { question: 'Can AIStack help reduce token costs?', answer: 'Yes. The work can include usage tracking, model routing, prompt governance, and operational controls that reduce waste.' }
    ],
    ctaHeadline: 'Discuss guardrails and cost control',
    ctaText: 'AIStack can review your current AI usage, identify failure points, and recommend the smallest useful control layer.',
    ctaButtonLabel: 'Start with a guardrails review'
  },
  {
    slug: 'automation-agents',
    title: 'Automation Agents',
    shortTitle: 'Automation Agents',
    seoTitle: 'Automation Agent Development for AI Workflows and Internal Operations',
    seoDescription: 'AIStack builds research agents, document agents, CRM enrichment workflows, and human-in-the-loop automation systems for real business use.',
    heroHeadline: 'Build automation agents that help teams, not just impress demos.',
    heroSubheadline: 'AIStack turns repetitive workflows into semi-automated systems with review, logging, routing, and business controls.',
    targetClients: ['Operations teams', 'Consultants', 'Agencies', 'Founders with repetitive internal workflows'],
    problems: ['Automation ideas exist, but the workflow is still manual.', 'Agents act without enough business control.', 'There is no review or logging around important actions.', 'The AI layer is not integrated into the actual process.'],
    whatWeBuild: ['Research agents', 'Email agents', 'Report agents', 'CRM enrichment agents', 'Document processing agents', 'Human-in-the-loop approval flows'],
    outcomes: ['Repetitive workflows become semi-automated systems with review, logging, and business controls.', 'Teams save time without handing over full control.', 'Automation becomes more operationally credible.'],
    deliverables: ['Workflow mapping', 'Agent design', 'Approval and review logic', 'Logging and monitoring', 'Operational rollout plan'],
    useCases: ['CRM enrichment', 'Proposal generation', 'Document triage', 'Internal reporting', 'Research support workflows'],
    relatedCaseStudies: ['deckaistack', 'mailtrace'],
    relatedServices: ['ai-product-build', 'ai-guardrails-cost-control', 'fractional-ai-product-partner'],
    technicalStack: ['Agent orchestration', 'API integrations', 'Review flows', 'Audit logging'],
    faqs: [
      { question: 'What kinds of business agents does AIStack build?', answer: 'Research agents, CRM enrichment workflows, report agents, document processing agents, and internal operations agents with review steps.' },
      { question: 'Does AIStack support human approval flows?', answer: 'Yes. AIStack is explicit about where automation should pause for review, approval, or escalation.' }
    ],
    ctaHeadline: 'Discuss automation agents for your workflow',
    ctaText: 'AIStack can help define what should be automated, what should stay human-reviewed, and how the workflow should actually run.',
    ctaButtonLabel: 'Book an automation call'
  },
  {
    slug: 'fractional-ai-product-partner',
    title: 'Fractional AI Product Partner',
    shortTitle: 'Fractional AI Partner',
    seoTitle: 'Fractional AI Product Partner for Founders, Agencies, and Operators',
    seoDescription: 'AIStack provides senior AI product direction, architecture, workflow planning, and ongoing delivery leadership without a full-time AI team.',
    heroHeadline: 'Get senior AI product direction without hiring a full-time AI team.',
    heroSubheadline: 'AIStack works as a fractional AI product partner for teams that need strategy, architecture, developer guidance, and steady weekly delivery.',
    targetClients: ['Founders', 'Agencies', 'SMEs', 'Consultants', 'Teams without AI technical leadership'],
    problems: ['The team has AI ideas but no senior product direction.', 'Developers or contractors need clearer technical leadership.', 'There is no roadmap from experiments to systems.', 'Delivery is fragmented across tools and decisions.'],
    whatWeBuild: ['AI roadmap support', 'Technical architecture', 'Prototype planning', 'Agent orchestration guidance', 'Weekly delivery leadership', 'Code and deployment review'],
    outcomes: ['The client gets senior AI product direction without hiring a full-time AI team.', 'Execution becomes clearer, faster, and more consistent.', 'Commercial decisions and technical decisions stay aligned.'],
    deliverables: ['Architecture reviews', 'Roadmap planning', 'Weekly execution support', 'Workflow prioritisation', 'Delivery oversight'],
    useCases: ['Founder support during MVP build', 'Agency delivery oversight', 'Internal AI roadmap leadership', 'Architecture review and rescue planning'],
    relatedCaseStudies: ['deckaistack', 'machine-learning-projects'],
    relatedServices: ['prototype-rescue', 'ai-product-build', 'ai-backend-infrastructure'],
    technicalStack: ['Product direction', 'Architecture planning', 'Review discipline', 'Delivery management'],
    faqs: [
      { question: 'What does a fractional AI product partner actually do?', answer: 'It provides senior product and technical direction across architecture, prioritisation, workflow design, delivery oversight, and roadmap decisions.' },
      { question: 'Who is this service best for?', answer: 'Founders, agencies, SMEs, and consultants who need AI product leadership without hiring a full-time senior AI team.' }
    ],
    ctaHeadline: 'Discuss fractional AI product support',
    ctaText: 'If you need senior AI product and delivery direction rather than just implementation labor, AIStack can work as an ongoing partner.',
    ctaButtonLabel: 'Discuss a retainer'
  }
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

export const featuredServiceSlugs = ['ai-product-build', 'prototype-rescue', 'ai-backend-infrastructure', 'ai-guardrails-cost-control'];
