export type CapabilityCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  capabilities: string[];
  technicalStack: string[];
  servicesSupported: string[];
  outcomes: string[];
  status: 'AIStack Lab' | 'Product Prototype' | 'Academic Project' | 'Technical Project';
  cta: string;
  href?: string;
};

export const caseStudies: CapabilityCaseStudy[] = [
  {
    slug: 'mailtrace',
    title: 'MailTrace',
    subtitle: 'Procedural intelligence for email evidence',
    problem: 'Legal and complaint workflows often bury facts across long email chains, PDFs, attachments, and fragmented notes.',
    solution: 'AIStack built a document and evidence workflow that ingests email threads, extracts documents, clusters issues, generates timelines, and supports human-reviewed reporting.',
    capabilities: ['Email ingestion', 'Timeline generation', 'Issue clustering', 'Document extraction', 'Evidence reports'],
    technicalStack: ['AI workflow orchestration', 'Document pipelines', 'Human review layer', 'Structured outputs'],
    servicesSupported: ['rag-document-intelligence', 'ai-product-build', 'ai-backend-infrastructure'],
    outcomes: ['Searchable case intelligence', 'Faster review path', 'More structured evidence workflows'],
    status: 'AIStack Lab',
    cta: 'See how AIStack turns messy evidence into usable systems.',
    href: '/work/mailtrace'
  },
  {
    slug: 'deckaistack',
    title: 'DeckAIStack',
    subtitle: 'AI deck infrastructure for investors, advisors, and operators',
    problem: 'Deck review is slow, inconsistent, and difficult to scale when teams need source fidelity, brand control, and faster iteration.',
    solution: 'AIStack built a smart deck workspace with slide extraction, brand intelligence, source-grounded LLM workflows, and operator-friendly editing.',
    capabilities: ['Slide extraction', 'Brand-aware edits', 'Grounded generation', 'Workflow orchestration', 'Frontend and backend systems'],
    technicalStack: ['LLM workflows', 'Frontend/backend integration', 'Document intelligence', 'Guardrails'],
    servicesSupported: ['ai-product-build', 'automation-agents', 'ai-guardrails-cost-control'],
    outcomes: ['Faster deck iteration', 'Better source fidelity', 'A more structured workflow for commercial teams'],
    status: 'Product Prototype',
    cta: 'Review the AI workflow architecture behind DeckAIStack.',
    href: '/work/deckaistack'
  },
  {
    slug: 'machine-learning-projects',
    title: 'Machine Learning Projects',
    subtitle: 'Prediction, classification, and decision support workflows',
    problem: 'Many teams have data but no usable pipeline for prediction, prioritisation, segmentation, or model evaluation.',
    solution: 'AIStack applies practical data science workflows across churn prediction, classification baselines, feature engineering, and model evaluation to support business decisions.',
    capabilities: ['Predictive modelling', 'Classification', 'Segmentation', 'Feature engineering', 'Model evaluation'],
    technicalStack: ['Python ML workflows', 'Baseline models', 'Evaluation pipelines', 'Decision-support outputs'],
    servicesSupported: ['ml-data-science', 'data-visualisation'],
    outcomes: ['Clearer prediction pipelines', 'Decision-ready modelling outputs', 'More explainable analysis'],
    status: 'Technical Project',
    cta: 'Explore how AIStack turns modelling work into business-facing systems.'
  },
  {
    slug: 'data-visualisation-projects',
    title: 'Data Visualisation Projects',
    subtitle: 'Turning complex datasets into visual decision systems',
    problem: 'Businesses often have reports, spreadsheets, and raw datasets but no interface that helps operators or executives act quickly.',
    solution: 'AIStack builds dashboards, clustering views, geographic analysis, and KPI reporting surfaces that make data easier to use.',
    capabilities: ['Interactive dashboards', 'Clustering analysis', 'Geographic visualisation', 'KPI reporting', 'Data storytelling'],
    technicalStack: ['Dashboard interfaces', 'Analytics workflows', 'Segmentation', 'Visual reporting'],
    servicesSupported: ['data-visualisation', 'ml-data-science'],
    outcomes: ['Decision-ready visuals', 'Better stakeholder reporting', 'Stronger operational visibility'],
    status: 'Academic Project',
    cta: 'See how AIStack makes analytics more usable for real teams.',
    href: '/work/data-visualisation'
  },
  {
    slug: 'hpc-distributed-data-science',
    title: 'HPC / Distributed Data Science',
    subtitle: 'Scalable processing for large and complex data workloads',
    problem: 'Large-scale research and data preparation workflows often become slow, brittle, and hard to reproduce without distributed processing discipline.',
    solution: 'AIStack supports scalable batch processing, HPC workflows, pipeline engineering, and large-data preparation for technically demanding environments.',
    capabilities: ['Batch processing', 'Distributed jobs', 'Large-data preparation', 'Pipeline engineering', 'Performance optimisation'],
    technicalStack: ['HPC workflows', 'PySpark-style patterns', 'Parallel processing', 'Research computing support'],
    servicesSupported: ['hpc-distributed-data-science', 'ml-data-science'],
    outcomes: ['More scalable data workloads', 'More reproducible technical pipelines', 'Better performance for large analyses'],
    status: 'Technical Project',
    cta: 'Discuss large-scale processing and research workflow support.'
  }
];

export const caseStudiesBySlug = Object.fromEntries(caseStudies.map((study) => [study.slug, study]));
