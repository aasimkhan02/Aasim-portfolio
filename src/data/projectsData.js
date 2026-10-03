import HealthWaveImg from '../assets/healthwave.png'
import PhytoclassImg from '../assets/Phytoclass.png';
import ConstructionImg from '../assets/construction.jpg';
import ValvoImg from '../assets/valvo.png'
import ThreatboxImg from '../assets/Threatbox.png'
import EVUAImg from '../assets/EVUA.png'
import ModelHQImg from '../assets/modelhq.png'
import OceanImg from './../assets/ocean.jpg'
import Phytoclass1 from './../assets/Phytoclass1.png'
import Phytoclass2 from './../assets/Phytoclass2.png'
import Phytoclass3 from './../assets/Phytoclass3.png'
import Threatbox1 from './../assets/Threatbox1.jpg'
import Healthcare from './../assets/healthcare.jpg'
import Healthwave1 from './../assets/healthwave1.jpg'
import Valvo1 from './../assets/valvo1.jpg'
import Modelhq1 from './../assets/modelhq1.png'
import modelhq2 from './../assets/modelhq2.jpg'




export const projectsData = [
  {
  id: 'phytoclass',
  type: 'SOFTWARE',
  title: 'PHYTOCLASS - Open-source phytoplankton platform.',
  tagline: 'An open-source platform built to simplify phytoplankton classification',
  techStack: 'R, Shiny, GitHub Actions, testthat, Git',
  categories: ['R', 'Shiny', 'GitHub Actions', 'testthat', 'Git'],
  summary: 'Open-source phytoplankton classification platform',
  coverImage: PhytoclassImg,
  parallaxImage: OceanImg, 
  containImage: true,
  backgroundColor: '#F5F3EA',

  about:
    'PhytoClass is an open-source R/Shiny application that helps researchers classify and analyze phytoplankton using flow cytometry data. During Google Summer of Code, I contributed to improving the application by implementing session-based file isolation, report export functionality, validation workflows, and automated testing to make the platform more reliable and easier to use for multiple users.',

  contributions: [
    {
      step: '01',
      category: 'MULTI-USER SUPPORT',
      title: 'SESSION ISOLATION',
      desc: 'Implemented session-based file isolation to ensure users could analyze datasets independently without file conflicts or shared state.',
      icon: 'folder'
    },
    {
      step: '02',
      category: 'REPORTING',
      title: 'EXPORT WORKFLOW',
      desc: 'Added support for exporting analysis reports in HTML, QMD, and CSV formats to improve reproducibility and simplify sharing results.',
      icon: 'file'
    },
    {
      step: '03',
      category: 'RELIABILITY',
      title: 'VALIDATION & TESTING',
      desc: 'Improved input validation and integrated automated testing with GitHub Actions and testthat to maintain application stability.',
      icon: 'shield'
    }
  ],

  imageGallery: [
    Phytoclass1,
    Phytoclass2,
    Phytoclass3
  ],

  features: [
    {
      title: 'Interactive Analysis',
      desc: 'Analyze and classify phytoplankton through an intuitive R/Shiny interface.'
    },
    {
      title: 'Session Isolation',
      desc: 'Supports multiple concurrent users with isolated working directories.'
    },
    {
      title: 'Report Exports',
      desc: 'Generate HTML, QMD, and CSV reports directly from the application.'
    },
    {
      title: 'Automated Testing',
      desc: 'Continuous validation using GitHub Actions and testthat.'
    }
  ],

  challenges: [
    {
      problem: 'Supporting multiple concurrent users.',
      solution: 'Introduced isolated session directories to prevent conflicts between uploaded datasets.'
    },
    {
      problem: 'Maintaining application reliability.',
      solution: 'Added validation checks and automated tests to catch regressions before deployment.'
    },
    {
      problem: 'Sharing analysis results.',
      solution: 'Implemented report generation in multiple formats for reproducibility and collaboration.'
    }
  ],

  githubLink: 'https://github.com/phytoclass',
  liveLink: 'https://phytoclass.shinyapps.io/phytoclass-app/',
  },
  {
  id: 'threatbox',
  type: 'BACKEND',

  title: 'THREATBOX — Malware analysis sandbox.',

  tagline:
    'A backend-driven platform for analyzing suspicious files through an isolated malware analysis workflow.',

  categories: [
    'Go',
    'PostgreSQL',
    'Docker',
    'REST API',
    'Security',
    'Malware Analysis'
  ],

  techStack:
    'Go, PostgreSQL, Docker, pgx, REST API, strace',

  summary:
    'A malware analysis platform built around reliable job processing, sample management, behavioral monitoring, and structured analysis results.',

  coverImage: ThreatboxImg,
  parallaxImage: Threatbox1, 
  containImage: true,
  backgroundColor: '#5B6573', 

  about:
    'ThreatBox is a malware analysis platform designed to process suspicious files through a structured analysis pipeline. It uses a Go backend with PostgreSQL to manage samples, analysis jobs, workers, events, and results. The system separates job scheduling from processing and is designed to collect system-level activity during malware execution for behavioral analysis.',

  features: [
    {
      title: 'Sample Management',
      desc:
        'Handles suspicious file uploads and maintains persistent sample metadata and analysis state.'
    },
    {
      title: 'Job Processing Pipeline',
      desc:
        'Uses PostgreSQL-backed jobs to coordinate analysis work between the API and background workers.'
    },
    {
      title: 'Behavioral Monitoring',
      desc:
        'Uses system-call monitoring with strace as the foundation for collecting process and system activity during analysis.'
    },
    {
      title: 'Structured Analysis Results',
      desc:
        'Stores analysis events and results in PostgreSQL for later inspection, reporting, and visualization.'
    }
  ],

  imageGallery: [
    ThreatboxImg
  ],

  architecture:
    'Go REST API communicating with PostgreSQL for sample and job management, with background workers responsible for executing analysis and storing structured results.',

  workflow:
    'File Upload → Sample Storage → Job Creation → Worker Claims Job → Malware Processing → Event Collection → Analysis Results',

  challenges: [
    {
      problem:
        'Building a reliable workflow for processing malware analysis jobs.',
      solution:
        'Separated sample management, job scheduling, worker execution, processing, and result storage into distinct stages with explicit database state transitions.'
    },
    {
      problem:
        'Coordinating background workers without losing or duplicating jobs.',
      solution:
        'Implemented database-backed job claiming and lifecycle management so workers can safely acquire and process pending analysis jobs.'
    },
    {
      problem:
        'Collecting useful behavioral information from analyzed samples.',
      solution:
        'Designed the processing pipeline around system-call and process monitoring with strace to capture activity that can later be mapped to behavioral indicators.'
    }
  ],

  githubLink: 'https://github.com/aasimkhan02/ThreatBox',
  },
  {
  id: 'evua',
  type: 'SOFTWARE',

  title: 'EVUA — Legacy code modernization platform.',

  tagline:
    'An AI-assisted platform for automating large-scale legacy code migrations.',

  categories: [
    'Python',
    'FastAPI',
    'React',
    'SQLite',
    'Tree-sitter',
    'OpenAI'
  ],

  techStack:
    'Python, FastAPI, React, SQLite, Tree-sitter, OpenAI API',

  summary:
    'A platform that modernizes legacy codebases through AST-based transformations and AI-assisted refactoring.',

  coverImage: EVUAImg,
  parallaxImage: ConstructionImg, 
  containImage: true,
  backgroundColor: '#718B9B',

  about:
    'EVUA is a legacy code modernization platform designed to automate the migration of outdated software. It combines deterministic AST-based transformations with LLM-assisted fallbacks to refactor unsupported code patterns, validate generated changes, and streamline repository-wide modernization through a unified workflow.',

  features: [
    {
      title: 'AST-Based Refactoring',
      desc: 'Transforms source code using syntax trees for deterministic and reliable code migrations.'
    },
    {
      title: 'AI-Assisted Fallbacks',
      desc: 'Uses LLMs when predefined transformation rules cannot safely handle a code pattern.'
    },
    {
      title: 'Repository-Wide Processing',
      desc: 'Applies migrations consistently across entire repositories while preserving project structure.'
    },
    {
      title: 'Validation Pipeline',
      desc: 'Validates transformed code before finalizing migrations to reduce migration errors.'
    }
  ],

  imageGallery: [
    EVUAImg
  ],

  architecture:
    'React frontend communicating with a FastAPI backend responsible for repository analysis, AST transformations, AI-assisted migration, and validation.',

  workflow:
    'Repository → AST Parsing → Rule-Based Transformation → LLM Fallback → Validation → Updated Codebase',

  challenges: [
    {
      problem:
        'Legacy repositories often contain inconsistent or unsupported code patterns.',
      solution:
        'Combined deterministic AST transformations with LLM-assisted fallbacks to handle cases that cannot be expressed using predefined rules.'
    },
    {
      problem:
        'Maintaining code structure while applying repository-wide migrations.',
      solution:
        'Designed the migration workflow to preserve project organization while applying automated transformations.'
    },
    {
      problem:
        'Balancing automation with reliability.',
      solution:
        'Introduced a validation stage before accepting generated changes to reduce incorrect transformations.'
    }
  ],

  githubLink: 'https://github.com/aasimkhan02/EVUA/',

  liveLink: 'https://evua.vercel.app/',
  },
  {
    id: 'healthwave',
    type: 'SOFTWARE',

  title: 'HEALTHWAVE — Healthcare information platform.',

  tagline:
    'A web platform that brings together health information, disease prediction, and educational resources.',

  categories: [
    'React',
    'Django',
    'SQLite'
  ],

  techStack:
    'React, Django, SQLite',

  summary:
    'A healthcare platform providing medication information, disease prediction, and educational resources.',

  coverImage: HealthWaveImg,
  parallaxImage: Healthcare, 

  about:
    'HealthWave is a full-stack healthcare platform that helps users access medical information in one place. It combines medication details, disease prediction models, and educational content through a simple web interface, making healthcare resources easier to explore and understand.',

  imageGallery: [
    Healthwave1,
    HealthWaveImg,
  ],

  features: [
    {
      title: 'Medication Information',
      desc: 'Browse medicine details including usage, dosage information, and precautions.'
    },
    {
      title: 'Disease Prediction',
      desc: 'Predict potential health conditions using machine learning models based on user inputs.'
    },
    {
      title: 'Health Education',
      desc: 'Access educational videos and healthcare resources from within the platform.'
    },
    {
      title: 'Unified Dashboard',
      desc: 'Access healthcare tools and information through a single web application.'
    }
  ],

  challenges: [
    {
      problem:
        'Bringing multiple healthcare utilities into one application.',
      solution:
        'Designed a modular backend where each feature could operate independently while sharing a common interface.'
    },
    {
      problem:
        'Integrating machine learning predictions with the web application.',
      solution:
        'Connected trained prediction models to the Django backend through dedicated API endpoints.'
    },
    {
      problem:
        'Presenting medical information in a simple interface.',
      solution:
        'Built reusable React components to organize content into an easy-to-navigate experience.'
    }
  ],

  githubLink: 'https://github.com/aasimkhan02/healthwave',
  },
  {
    id: 'valvo',
    type: 'INFRASTRUCTURE',

  title: 'VALVO — Distributed rate limiting system.',

  tagline:
    'A high-performance distributed rate limiter with an AI-powered control plane.',

  categories: [
    'Go',
    'Redis',
    'Lua',
    'gRPC'
  ],

  techStack:
    'Go, Redis, Lua, gRPC',

  summary:
    'A distributed rate limiting system built for low-latency admission control and scalable API traffic management.',

  coverImage: ValvoImg,
  parallaxImage: Valvo1, // REPLACE THIS with your specific parallax image
  containImage: true,
  backgroundColor: '#155EEF',

  about:
    'Valvo (P.A.R.L-AI) is a distributed rate limiting system designed to enforce multi-dimensional quotas with microsecond-level decision latency. It combines deterministic admission control with an AI-powered control plane, enabling fast local decisions while maintaining bounded global correctness across distributed environments. The system supports repository-scale deployments through Redis-backed coordination, atomic Lua operations, and pluggable rate limiting strategies.' ,

  imageGallery: [
    
  ],

  features: [
    {
      title: 'Distributed Rate Limiting',
      desc: 'Enforces quotas across multiple nodes using Redis-backed synchronization.'
    },
    {
      title: 'Multiple Algorithms',
      desc: 'Implements Token Bucket and Sliding Window algorithms for different traffic patterns.'
    },
    {
      title: 'Atomic Redis Operations',
      desc: 'Uses Lua scripts to perform concurrency-safe quota updates with minimal network overhead.'
    },
    {
      title: 'Multi-Dimensional Quotas',
      desc: 'Supports rate limits based on tenant, region, API resource, and user identifiers.'
    },
    {
      title: 'Tiered Admission Decisions',
      desc: 'Returns ALLOW, SOFT_DENY, or HARD_DENY responses depending on quota availability.'
    },
    {
      title: 'Observability',
      desc: 'Collects metrics for throughput, Redis health, quota overshoot, and burst prediction.'
    }
  ],

  challenges: [
    {
      problem:
        'Maintaining consistent quota enforcement across distributed nodes.',
      solution:
        'Implemented Redis-backed coordination with bounded quota leases to reduce global synchronization while maintaining correctness.'
    },
    {
      problem:
        'Supporting high request throughput without introducing network latency.',
      solution:
        'Designed a memory-resident fast path so admission decisions avoid external network calls during normal execution.'
    },
    {
      problem:
        'Preventing race conditions during concurrent updates.',
      solution:
        'Implemented atomic token bucket operations using Redis Lua scripts.'
    }
  ],

  githubLink: 'https://github.com/aasimkhan02/Valvo',

  },
  {
    id: 'modelhq',
    type: 'SOFTWARE',

  title: 'MODELHQ — AI model discovery platform.',

  tagline:
    'An educational platform for exploring, understanding, and using machine learning models.',

  categories: [
    'React',
    'FastAPI',
    'Python',
    'Machine Learning'
  ],

  techStack:
    'React, FastAPI, Python, scikit-learn',

  summary:
    'A platform that brings together machine learning models from multiple domains with interactive predictions, research references, and implementation guides.',

  coverImage: ModelHQImg,
  parallaxImage: modelhq2, // REPLACE THIS with your specific parallax image

  about:
    'ModelHQ is a full-stack platform that makes machine learning models accessible through a unified web interface. Users can run predictions, explore research-backed implementations, download source code, and understand each model through line-by-line code explanations. Designed as both an educational resource and a practical demonstration of applied machine learning, the platform spans domains including healthcare, finance, business, and real estate.',

  imageGallery: [
    Modelhq1,
    ModelHQImg // REPLACE THIS with your specific showcase image(s)
  ],

  features: [
    {
      title: 'Interactive Predictions',
      desc: 'Run machine learning models directly from the browser through a FastAPI backend.'
    },
    {
      title: 'Research-Based Models',
      desc: 'Implements prediction models inspired by published research across multiple domains.'
    },
    {
      title: 'Code Explanations',
      desc: 'Provides line-by-line explanations to help users understand each implementation.'
    },
    {
      title: 'Source Code Downloads',
      desc: 'Allows users to download model implementations for further experimentation.'
    },
    {
      title: 'Multi-Domain Library',
      desc: 'Includes healthcare, finance, HR, communication, and real-estate prediction models.'
    }
  ],

  challenges: [
    {
      problem:
        'Providing a consistent interface for models with different inputs and prediction pipelines.',
      solution:
        'Designed reusable frontend components and standardized backend APIs for model execution.'
    },
    {
      problem:
        'Making machine learning implementations accessible to beginners.',
      solution:
        'Added downloadable source code together with line-by-line explanations for every model.'
    },
    {
      problem:
        'Managing multiple models within a single application.',
      solution:
        'Organized the platform into modular backend services that allow new models to be integrated with minimal changes.'
    }
  ],

  githubLink: 'https://github.com/aasimkhan02/modelhq',

  }
//   {
//     id: 'quizelite',
//     type: 'SOFTWARE',

//   title: 'QUIZELITE — Online quiz platform.',

//   tagline:
//     'A full-stack platform for creating, hosting, and participating in interactive quizzes.',

//   categories: [
//     'Django',
//     'Python',
//     'JavaScript',
//     'SQLite'
//   ],

//   techStack:
//     'Django, Python, HTML, CSS, JavaScript, SQLite',

//   summary:
//     'A web application that allows users to create, host, and participate in interactive quizzes across multiple subjects.',

//   coverImage: QuizEliteImg,

//   about:
//     'QuizElite is a full-stack quiz platform designed for learning and assessment. It offers a collection of ready-to-play quizzes while allowing registered users to create, host, and share their own quizzes. The platform includes authentication, score tracking, and quiz sharing through unique access codes, making it suitable for classrooms, study groups, and self-paced learning.',

//   imageGallery: [
//     QuizEliteImg
//   ],

//   features: [
//     {
//       title: 'Ready-to-Play Quizzes',
//       desc: 'Explore 20+ quizzes across science, history, technology, and general knowledge.'
//     },
//     {
//       title: 'Quiz Creation',
//       desc: 'Create custom quizzes with your own questions and answers.'
//     },
//     {
//       title: 'Quiz Sharing',
//       desc: 'Invite others using unique quiz codes for collaborative learning.'
//     },
//     {
//       title: 'User Authentication',
//       desc: 'Register, log in, and manage quizzes through secure user accounts.'
//     },
//     {
//       title: 'Instant Scoring',
//       desc: 'Receive immediate feedback and final scores after completing a quiz.'
//     }
//   ],

//   challenges: [
//     {
//       problem:
//         'Supporting both predefined and user-generated quizzes within a single platform.',
//       solution:
//         'Designed reusable Django models and views to manage quizzes, questions, and user submissions.'
//     },
//     {
//       problem:
//         'Providing a simple way to share quizzes.',
//       solution:
//         'Implemented unique access codes that allow users to join custom quizzes without exposing internal identifiers.'
//     },
//     {
//       problem:
//         'Managing authentication and user-owned content.',
//       solution:
//         'Integrated Django authentication to secure accounts and restrict quiz management to their respective creators.'
//     }
//   ],

//   githubLink: 'https://github.com/aasimkhan02/quizelite',

//   }
];
