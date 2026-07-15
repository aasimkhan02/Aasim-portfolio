import HealthWaveImg from '../assets/healthwave.png';
import PhytoclassImg from '../assets/ocean.jpg';
import ConstructionImg from '../assets/construction.jpg';

export const projectsData = [
  {
    id: 'phytoclass',
    title: 'PHYTOCLASS',
    categories: ['R', 'Shiny', 'GitHub Actions', 'testthat'],
    summary: 'An open-source phytoplankton classification platform that provides an interactive interface for analyzing and validating flow cytometry data.',
    description: 'During Google Summer of Code, I improved the analysis workflow by implementing session isolation, report exports, validation checks, and automated testing to enhance reliability and multi-user support.',
    coverImage: PhytoclassImg,
    problem: 'Phytoplankton classification relies heavily on manual, error-prone data analysis in legacy environments. Researchers needed a robust, interactive platform to validate flow cytometry data reliably and securely in multi-user settings.',
    howItWorks: ['Data Ingestion', 'Session Isolation', 'Classification Engine', 'Report Generation'],
    keyFeatures: [
      { title: 'Interactive Interface', desc: 'Real-time analysis and visualization of cytometry data.' },
      { title: 'Session Isolation', desc: 'Secure, multi-user environment handling concurrent operations.' },
      { title: 'Automated Testing', desc: 'Comprehensive test suites ensuring reliability across updates.' }
    ],
    technicalChallenges: [
      { title: 'Why R & Shiny?', desc: 'Leveraged native statistical packages while providing a web-based UI.' },
      { title: 'State Management', desc: 'Managed complex reactive dependencies in multi-user environments.' }
    ],
    learned: 'Gained deep experience in maintaining open-source tools, building robust reactive architectures in R, and implementing rigorous CI/CD workflows for scientific software.',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'evua',
    title: 'EVUA',
    categories: ['Python', 'FastAPI', 'React', 'SQLite'],
    summary: 'A legacy code modernization platform automating the migration of outdated codebases using AST-based transformations and LLM-assisted fallbacks.',
    description: 'EVUA is a legacy code modernization platform that automates the migration of outdated codebases. It streamlines repository-wide upgrades through automated refactoring, validation, and testing workflows.',
    coverImage: ConstructionImg,
    problem: 'Legacy code migrations are historically painful, error-prone, and manually intensive. I built EVUA to tackle the massive bottleneck of rewriting outdated codebases, removing the friction from large-scale refactoring and ensuring a more reliable transition process.',
    howItWorks: ['AST Parsing', 'Transformation', 'LLM Fallback', 'Validation'],
    keyFeatures: [
      { title: 'AST transformations', desc: 'Precise syntax tree manipulations ensuring accurate code rewrites without risking logic errors.' },
      { title: 'Repository-wide orchestration', desc: 'Handling massive multi-file dependencies concurrently for seamless project transitions.' },
      { title: 'LLM fallbacks', desc: 'Smart AI interventions that automatically trigger when deterministic AST rules fail.' },
      { title: 'Validation pipeline', desc: 'Automated testing injected directly into the workflow to verify modernized code correctness instantly.' }
    ],
    technicalChallenges: [
      { title: 'Why Tree-sitter?', desc: 'Provides extremely robust, fast, and language-agnostic parsing to generate syntax trees critical for safe transformations across large codebases.' },
      { title: 'Why FastAPI?', desc: 'Chosen for its high performance and async capabilities, perfectly handling the I/O intensive nature of continuous LLM and parsing operations.' },
      { title: 'Why SQLite?', desc: 'Ensures lightweight, embedded tracking of migration states without the massive configuration overhead of a full database service.' },
      { title: 'Edge Cases', desc: 'Handling malformed legacy syntax was a major hurdle. We implemented fallback pipelines where failed AST rewrites gracefully trigger an LLM-assisted correction, validated immediately by the core test suites.' }
    ],
    learned: 'This project profoundly deepened my understanding of compiler theory, syntax trees, and how to orchestrate AI reliably within deterministic development workflows. Managing repository-wide state and rollback mechanisms taught me invaluable lessons in building fault-tolerant software architecture.',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'healthwave',
    title: 'HEALTHWAVE',
    categories: ['React', 'Node.js', 'MongoDB'],
    summary: 'A modern healthcare management application designed to streamline patient records and appointment scheduling.',
    description: 'Features include real-time updates, secure authentication, and a responsive dashboard for medical professionals.',
    coverImage: HealthWaveImg,
    problem: 'Medical professionals often struggle with disjointed software for patient records and scheduling, leading to administrative overhead.',
    howItWorks: ['Authentication', 'Dashboard Routing', 'Real-time Syncing', 'Record Management'],
    keyFeatures: [
      { title: 'Real-time Updates', desc: 'Instant synchronization of patient records across devices.' },
      { title: 'Secure Auth', desc: 'Encrypted communication and Role-Based Access Control.' },
      { title: 'Responsive Dashboard', desc: 'Optimized for tablets and mobile devices used in clinics.' }
    ],
    technicalChallenges: [
      { title: 'Why MongoDB?', desc: 'Schema flexibility allowed for rapid iteration of varied medical record formats.' },
      { title: 'Data Security', desc: 'Ensuring HIPAA-compliant data handling practices.' }
    ],
    learned: 'Learned to balance strict security requirements with a fluid, responsive user experience.',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'fisher-paykel',
    title: 'Fisher & Paykel NYC Experience Center',
    categories: ['Architecture', 'Interior'],
    summary: 'A new angle on design.',
    description: 'A structural exploration of modern appliances in a minimalist setting.',
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'interior-atlanta',
    title: 'Interior Environments Atlanta Showroom',
    categories: ['Architecture', 'Acoustics'],
    summary: 'Designing with sound.',
    description: 'Showcasing acoustic design integrated beautifully with workspace aesthetics.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'office-berlin',
    title: 'Modern office architecture in Berlin',
    categories: ['Commercial', 'Space Planning'],
    summary: 'Elevating the workspace.',
    description: 'A study in concrete and light to inspire productivity.',
    coverImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'minimalist-living',
    title: 'Integrating nature into urban spaces',
    categories: ['Residential', 'Biophilic'],
    summary: 'Minimalist living.',
    description: 'Blurring the lines between the urban interior and natural environment.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'library-oslo',
    title: 'The new central library in Oslo',
    categories: ['Public', 'Structural'],
    summary: 'Structural elegance.',
    description: 'A monument to knowledge designed with sharp angles and vast open spaces.',
    coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 'warehouse-creative',
    title: 'Converting warehouses into creative hubs',
    categories: ['Renovation', 'Industrial'],
    summary: 'Industrial revival.',
    description: 'Preserving raw materials while introducing high-tech infrastructure.',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    problem: 'N/A',
    howItWorks: [],
    keyFeatures: [],
    technicalChallenges: [],
    learned: 'N/A',
    githubLink: '#',
    liveLink: '#'
  }
];
