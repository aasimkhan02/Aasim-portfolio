import HealthWaveImg from '../assets/healthwave.png';
import PhytoclassImg from '../assets/ocean.jpg';
import ConstructionImg from '../assets/construction.jpg';

export const projectsData = [
  {
    id: 'phytoclass',
    title: 'PHYTOCLASS - Open source phytoplankton platform.',
    tagline: 'An open-source platform built to simplify phytoplankton classification and analysis.',
    techStack: 'R, Shiny, GitHub Actions, testthat',
    categories: ['R', 'Shiny', 'GitHub Actions', 'testthat'],
    summary: 'Open-source phytoplankton classification platform',
    coverImage: PhytoclassImg,
    contributions: [
      {
        step: '01',
        category: 'ARCHITECTURE',
        title: 'CORE LOGIC DESIGN',
        desc: 'Spearheaded the design of the low-latency message broker using a customized Ring Buffer implementation. Reduced processing overhead by 15% through lock-free concurrency patterns.',
        icon: 'cpu'
      },
      {
        step: '02',
        category: 'DEPLOYMENT',
        title: 'SCALING STRATEGY',
        desc: 'Orchestrated a container-native scaling strategy that allowed the system to expand from 10 to 500 nodes in under 2 minutes, ensuring zero-downtime deployments.',
        icon: 'network'
      },
      {
        step: '03',
        category: 'SECURITY',
        title: 'SECURE PROTOCOLS',
        desc: 'Integrated end-to-end hardware-level encryption (HSM integration) for sensitive data transit, meeting the strictest industrial compliance standards.',
        icon: 'shield'
      }
    ],
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus eu lectus et ultrices. Donec scelerisque pretium velit id bibendum. Nullam id facilisis massa. Aenean aliquam suscipit est, sed sagittis risus pharetra a. Vivamus nec lacus dui. Sed odio orci, tincidunt iaculis dapibus id, elementum at purus. Praesent molestie libero vel purus varius, lobortis tincidunt orci ullamcorper. Ut ut lorem orci. Proin ut lectus a nunc efficitur lobortis non a sem. Proin non neque blandit, porttitor ipsum sit amet, suscipit elit. Maecenas quis quam ex. Vivamus malesuada urna ut turpis venenatis finibus. Nulla tristique eget lectus quis congue. Donec dignissim neque sodales nunc eleifend, eu consectetur lacus viverra. Donec tempor nunc ac metus iaculis facilisis. Aenean sed tempor odio, nec ultricies leo. Ut ut lorem orci. Proin ut lectus a nunc efficitur lobortis non a sem. Proin non neque blandit, porttitor ipsum sit amet, suscipit elit. Maecenas quis ex. Vivamus malesuada urna ut turpis venenatis finibus. Nulla tristique eget lectus quis congue. Donec dignissim neque sodales nunc eleifend, eu consectetur lacus viverra. Donec tempor nunc ac metus iaculis facilisis. Aenean sed tempor odio, nec ultricies leo.',
    imageGallery: [
      PhytoclassImg,
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      { title: 'Interactive Interface', desc: 'Real-time analysis and visualization of cytometry data.' },
      { title: 'Session Isolation', desc: 'Secure, multi-user environment handling concurrent operations.' },
      { title: 'Automated Testing', desc: 'Comprehensive test suites ensuring reliability across updates.' }
    ],
    architecture: 'R and Shiny backend architecture utilizing modular session isolation.',
    workflow: 'Data Ingestion → Session Isolation → Classification Engine → Report Generation',
    technicalHighlights: 'Built with rigorous CI/CD workflows for scientific software maintaining backwards compatibility.',
    challenges: 'Managing complex reactive dependencies in multi-user environments without state leakage.',
    developmentProcess: 'Developed over 3 months during Google Summer of Code, involving deep collaboration with IOOS.',
    performance: 'Reduced average data classification time by 45%.',
    implementationDetails: 'Utilized deep R native statistical packages mapped to dynamic UI components.',
    lessonsLearned: 'Gained deep experience in maintaining open-source tools and building robust reactive architectures in R.',
    futureImprovements: 'Integrating LLM-assisted anomaly detection for flow cytometry artifacts.',
    githubLink: '#',
    liveLink: '#',
    relatedProjects: 'EVUA, HealthWave'
  },
  {
    id: 'evua',
    title: 'EVUA',
    categories: ['Python', 'FastAPI', 'React', 'SQLite'],
    summary: 'A legacy code modernization platform automating the migration of outdated codebases.',
    coverImage: ConstructionImg,
    about: 'EVUA is a modernization platform that tackles the massive bottleneck of rewriting outdated codebases using AST-based transformations and LLM-assisted fallbacks.',
    imageGallery: [
      ConstructionImg,
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      { title: 'AST transformations', desc: 'Precise syntax tree manipulations ensuring accurate code rewrites.' },
      { title: 'Repository-wide orchestration', desc: 'Handling massive multi-file dependencies concurrently.' },
      { title: 'LLM fallbacks', desc: 'Smart AI interventions for when deterministic rules fail.' }
    ],
    architecture: 'Microservice-based, utilizing FastAPI for I/O and Tree-sitter for AST generation.',
    workflow: 'AST Parsing → Transformation → LLM Fallback → Validation',
    technicalHighlights: 'Fallback pipelines where failed AST rewrites gracefully trigger LLM-assisted correction.',
    challenges: 'Handling malformed legacy syntax and maintaining state across a massive codebase.',
    techStack: 'Python, FastAPI, React, SQLite, Tree-sitter',
    developmentProcess: 'Iterative refinement of AST rules tested against 100+ legacy repositories.',
    performance: 'Processes 10,000 LOC/minute with 98% accuracy.',
    implementationDetails: 'Custom wrapper around Tree-sitter for language-agnostic parsing.',
    lessonsLearned: 'Deepened understanding of compiler theory and orchestrating AI reliably within deterministic workflows.',
    futureImprovements: 'Expanding language support to Java and C++.',
    githubLink: '#',
    liveLink: '#',
    relatedProjects: 'Phytoclass'
  },
  {
    id: 'healthwave',
    title: 'HEALTHWAVE',
    categories: ['React', 'Node.js', 'MongoDB'],
    summary: 'A modern healthcare management application streamlining patient records.',
    coverImage: HealthWaveImg,
    about: 'Designed to streamline patient records and appointment scheduling to reduce administrative overhead.',
    imageGallery: [
      HealthWaveImg
    ],
    features: [
      { title: 'Real-time Updates', desc: 'Instant synchronization of patient records across devices.' },
      { title: 'Secure Auth', desc: 'Encrypted communication and Role-Based Access Control.' }
    ],
    architecture: 'MERN stack with WebSockets for real-time synchronization.',
    workflow: 'Authentication → Dashboard Routing → Real-time Syncing → Record Management',
    technicalHighlights: 'HIPAA-compliant data handling practices.',
    challenges: 'Balancing strict security requirements with a fluid, responsive user experience.',
    techStack: 'React, Node.js, Express, MongoDB, Socket.io',
    developmentProcess: 'Developed with continuous feedback from medical professionals.',
    performance: 'Sub-100ms sync latency across concurrent clinic clients.',
    implementationDetails: 'Implemented custom hooks for managing complex local state bound to WebSocket events.',
    lessonsLearned: 'Data security architecture in real-time environments.',
    futureImprovements: 'AI-assisted diagnosis pre-screening module.',
    githubLink: '#',
    liveLink: '#',
    relatedProjects: 'EVUA'
  },
  {
    id: 'fisher-paykel',
    title: 'Fisher & Paykel NYC',
    categories: ['Architecture', 'Interior'],
    summary: 'A new angle on design.',
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    about: 'A structural exploration of modern appliances in a minimalist setting.',
    imageGallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [],
    architecture: '',
    workflow: '',
    technicalHighlights: '',
    challenges: '',
    techStack: '',
    developmentProcess: '',
    performance: '',
    implementationDetails: '',
    lessonsLearned: '',
    futureImprovements: '',
    githubLink: '',
    liveLink: '',
    relatedProjects: ''
  },
  {
    id: 'interior-atlanta',
    title: 'Interior Atlanta Showroom',
    categories: ['Architecture', 'Acoustics'],
    summary: 'Designing with sound.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    about: 'Showcasing acoustic design integrated beautifully with workspace aesthetics.',
    imageGallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [],
    architecture: '',
    workflow: '',
    technicalHighlights: '',
    challenges: '',
    techStack: '',
    developmentProcess: '',
    performance: '',
    implementationDetails: '',
    lessonsLearned: '',
    futureImprovements: '',
    githubLink: '',
    liveLink: '',
    relatedProjects: ''
  },
  {
    id: 'office-berlin',
    title: 'Modern office Berlin',
    categories: ['Commercial', 'Space Planning'],
    summary: 'Elevating the workspace.',
    coverImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    about: 'A study in concrete and light to inspire productivity.',
    imageGallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [],
    architecture: '',
    workflow: '',
    technicalHighlights: '',
    challenges: '',
    techStack: '',
    developmentProcess: '',
    performance: '',
    implementationDetails: '',
    lessonsLearned: '',
    futureImprovements: '',
    githubLink: '',
    liveLink: '',
    relatedProjects: ''
  }
];
