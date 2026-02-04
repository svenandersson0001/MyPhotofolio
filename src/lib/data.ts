import { Skill, Experience, Education, Certification } from '@/types';

export const profile = {
  name: 'Sven Andersson',
  email: 'svenandersson0503@gmail.com',
  location: 'Helsingborg, Sweden',
  phone: '+46 79 008 1285',
  github: 'https://www.github.com/bcexpt1123',
  linkedin: 'https://www.linkedin.com/in/sven-andersson-08a5a9363',
  title: 'Full-Stack Software Engineer',
  summary: 'Versatile Full-Stack Software Engineer with 11+ years of experience across web development, system-level C++ engineering, AI/automation, and DevOps. Skilled at building scalable applications, real-time pipelines, cloud-native systems, and intelligent automation tools.',
  highlights: [
    'Web Engineering: React, Next.js, MERN, TypeScript, GraphQL, OAuth2, SQL & NoSQL DBs',
    'C++ Systems: Qt, FFmpeg, OpenCV, multithreading, GPU processing, performance optimization',
    'AI & Automation: Python, LangChain, N8N, Hugging Face, data workflows',
    'DevOps & Cloud: Docker, Kubernetes, CI/CD, container orchestration, cloud environments',
  ],
};

export const skills: Skill[] = [
  // Web Development
  { name: 'JavaScript', level: 100, category: 'Web Development' },
  { name: 'TypeScript', level: 95, category: 'Web Development' },
  { name: 'React', level: 95, category: 'Web Development' },
  { name: 'Next.js', level: 90, category: 'Web Development' },
  { name: 'Node.js', level: 85, category: 'Web Development' },
  { name: 'PHP', level: 90, category: 'Web Development' },
  { name: 'Laravel', level: 85, category: 'Web Development' },
  { name: 'Inertia.js', level: 80, category: 'Web Development' },
  { name: 'Tailwind CSS', level: 100, category: 'Web Development' },
  { name: 'MongoDB', level: 100, category: 'Web Development' },
  { name: 'PostgreSQL', level: 80, category: 'Web Development' },
  { name: 'MySQL', level: 95, category: 'Web Development' },
  { name: 'Express.js', level: 100, category: 'Web Development' },
  { name: 'Socket.io', level: 100, category: 'Web Development' },
  
  // C++ / System Programming
  { name: 'Qt/C++', level: 90, category: 'C++ / System Programming' },
  { name: 'FFmpeg', level: 75, category: 'C++ / System Programming' },
  { name: 'OpenCV', level: 75, category: 'C++ / System Programming' },
  { name: 'Multithreading', level: 80, category: 'C++ / System Programming' },
  { name: 'Luxand SDK', level: 100, category: 'C++ / System Programming' },
  
  // AI, Automation & Data
  { name: 'Python', level: 85, category: 'AI, Automation & Data' },
  { name: 'PyTorch', level: 85, category: 'AI, Automation & Data' },
  { name: 'Keras', level: 90, category: 'AI, Automation & Data' },
  { name: 'YOLO', level: 90, category: 'AI, Automation & Data' },
  { name: 'LangChain', level: 70, category: 'AI, Automation & Data' },
  { name: 'Hugging Face', level: 70, category: 'AI, Automation & Data' },
  { name: 'OpenAI API', level: 100, category: 'AI, Automation & Data' },
  { name: 'N8N', level: 30, category: 'AI, Automation & Data' },

  // DevOps & Cloud
  // { name: 'Docker', level: 85, category: 'DevOps & Cloud' },
  // { name: 'Kubernetes', level: 70, category: 'DevOps & Cloud' },
  { name: 'AWS', level: 80, category: 'DevOps & Cloud' },
  // { name: 'GCP', level: 65, category: 'DevOps & Cloud' },
  
  // Game Development
  { name: 'Unity', level: 30, category: 'Game Development' },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend Engineer',
    company: 'Betsson AB (publ)',
    location: 'Stockholm, Sweden',
    startDate: '05/2023',
    endDate: 'Present',
    description: [
      'Built and optimized React/TypeScript applications using real-time data sources.',
      'Improved latency and API performance through efficient integration patterns.',
      'Designed reusable frontend modules shared across teams.',
      'Collaborated on distributed tracing and performance diagnostics.',
      'Contributed to UI performance gains during high-traffic periods.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Recipharm',
    location: 'Stockholm, Sweden',
    startDate: '03/2019',
    endDate: '04/2023',
    description: [
      'Developed dashboards powered by REST, GraphQL, and WebSocket data.',
      'Improved component structure and reduced frontend bugs.',
      'Implemented scalable data-fetching and state patterns.',
      'Built internal tools used by manufacturing and logistics teams.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'AFRY',
    location: 'Stockholm, Sweden',
    startDate: '01/2015',
    endDate: '02/2019',
    description: [
      'Built internal tools interacting with distributed backend systems.',
      'Refactored legacy codebases for better performance and maintainability.',
      'Integrated sensor and equipment data into visual dashboards.',
      'Reduced technical debt across multiple internal applications.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'AFRY',
    location: 'Stockholm, Sweden',
    startDate: '07/2014',
    endDate: '12/2014',
    description: [
      'Assisted development of REST and real-time internal dashboards.',
      'Contributed to testing, debugging, and performance improvements.',
      'Learned collaborative workflows and Agile principles.',
    ],
  },
];

export const education: Education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Lund University',
  location: 'Lund, Sweden',
  startDate: '09/2011',
  endDate: '06/2014',
};

export const certifications: Certification[] = [
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022' },
  { name: 'Front-End Development Libraries', issuer: 'freeCodeCamp', year: '2024' },
  { name: 'Docker & Containers', issuer: 'Self-study', year: 'Practical experience' },
  { name: 'Kubernetes Fundamentals', issuer: 'Self-study', year: 'Labs' },
];

export const languages = [
  { name: 'Swedish', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency' },
];
