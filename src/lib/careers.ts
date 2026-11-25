export interface CareerRole {
  slug: string;
  title: string;
  location?: string;
  workingModel: string;
  engagement: string;
  experience?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applySubject: string;
  metaTitle: string;
  metaDescription: string;
}

export const CAREERS_EMAIL = "people@kolorowey.com";

export const careerRoles: CareerRole[] = [
  {
    slug: "ad-operations-specialist-supply-side",
    title: "Ad Operations Specialist — Supply Side",
    location: "New Delhi",
    workingModel: "Hybrid; remote may be considered for the right candidate",
    engagement: "Full-time",
    experience: "2+ years in supply-side AdOps",
    summary:
      "Own publisher operations, from inventory onboarding and trafficking to yield optimisation, partner integrations, and technical troubleshooting.",
    responsibilities: [
      "Configure, monitor, optimise, and troubleshoot campaigns and publisher inventory across ad servers.",
      "Analyse fill rate, eCPM, bid requests, win rates, auction performance, reporting discrepancies, and traffic quality.",
      "Support SSP, DSP, and exchange integrations, including OpenRTB, Prebid, and ad tags.",
      "Work with publishers, demand partners, and engineering to resolve implementation issues.",
      "Document processes and build scalable AdOps workflows.",
    ],
    requirements: [
      "Hands-on supply-side AdOps and publisher operations experience.",
      "Proficiency with Google Ad Manager; experience with Aniview, AdKernel, Limelight, and XE. SpringServe and Equativ are additional advantages.",
      "Understanding of header bidding, auction mechanics, and video advertising, including relevant standards and player integrations.",
      "Ability to debug tags, macros, network calls, and browser console issues.",
      "Strong spreadsheet, revenue analysis, and stakeholder communication skills.",
    ],
    applySubject: "Application – Ad Operations Specialist – Supply Side",
    metaTitle: "Ad Operations Specialist — Supply Side | Careers at Kolorowey",
    metaDescription:
      "Own supply-side publisher operations at Kolorowey, spanning inventory onboarding, campaign delivery, yield analysis, partner integrations, and technical troubleshooting.",
  },
  {
    slug: "bookkeeper",
    title: "Bookkeeper",
    workingModel: "Remote-first, with periodic office days as required",
    engagement: "Full-time",
    experience: "6 months to 2 years",
    summary:
      "Manage day-to-day accounting for India operations and international client transactions, with a focus on accurate books, multi-currency reconciliation, and foreign exchange compliance. The role reports to the Head of Finance.",
    responsibilities: [
      "Record accounts payable and receivable, receipts, payments, bank entries, and journal entries.",
      "Reconcile bank accounts, client receipts, payment gateways, and foreign-currency transactions; account for FX gains, losses, and revaluations.",
      "Coordinate with banks, forex teams, chartered accountants, and auditors on compliance and audit requests.",
      "Support GST, TDS, RBI, and FEMA related processes.",
      "Improve bookkeeping procedures and controls as the business grows.",
    ],
    requirements: [
      "Degree in Accounting, Finance, or a related field; bookkeeping certification is preferred.",
      "Experience with international transactions and forex handling.",
      "Knowledge of Indian statutory compliance and comfort working with CAs and auditors.",
      "Proficiency with accounting software such as Tally, QuickBooks, or Xero, and with Excel.",
      "Strong attention to detail, organisation, and communication.",
    ],
    applySubject: "Application – Bookkeeper",
    metaTitle: "Bookkeeper | Careers at Kolorowey",
    metaDescription:
      "Support Kolorowey’s India operations and international client transactions through accurate accounting, multi-currency reconciliation, and compliance coordination.",
  },
  {
    slug: "legal-counsel-adtech-commercial-data-privacy",
    title: "Legal Counsel — AdTech, Commercial & Data Privacy",
    location: "India",
    workingModel: "Remote / hybrid",
    engagement: "Long-term retainer",
    summary:
      "Advise Kolorowey’s leadership, product, and AdOps teams on commercial agreements, AdTech operations, data privacy, and legal risk.",
    responsibilities: [
      "Draft, review, and negotiate agreements with publishers, SSPs, DSPs, demand partners, and technology providers.",
      "Advise on revenue-share arrangements, insertion orders, payment terms, chargebacks, liability, and disputes.",
      "Provide legal guidance on the programmatic supply chain, ads.txt, app-ads.txt, sellers.json, and invalid traffic issues.",
      "Support privacy policies, cookie consent, data processing agreements, user data handling, and cross-border data flows.",
      "Advise on applicable DPDP Act, GDPR, and CCPA requirements.",
      "Counsel the business on technology, product integrations, IP protection, and expansion decisions.",
    ],
    requirements: [
      "Strong experience in technology, SaaS, AdTech, or media law.",
      "Proven commercial contract and international agreement experience.",
      "Practical knowledge of data privacy regulations and the programmatic advertising ecosystem.",
      "Commercial judgement, clear communication, and the ability to work quickly with cross-functional teams.",
      "Startup or high-growth company experience is preferred.",
    ],
    applySubject: "Application – Legal Counsel",
    metaTitle: "Legal Counsel — AdTech, Commercial & Data Privacy | Kolorowey Careers",
    metaDescription:
      "Advise Kolorowey on AdTech commercial agreements, programmatic operations, data privacy, and legal risk in India and internationally.",
  },
];

export const getCareerRole = (slug: string | undefined) =>
  careerRoles.find((role) => role.slug === slug);

export const getApplicationHref = (role: CareerRole) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(role.applySubject)}`;