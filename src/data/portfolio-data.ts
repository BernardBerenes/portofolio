import type { PersonalInfo, Experience, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Bernard Bereness',
  tagline: 'Software Engineer & Back End Developer',
  overview:
    'Passionate software engineer with expertise in building modern web applications. I love crafting clean, performant, and user-friendly digital experiences using cutting-edge technologies. Always eager to learn, grow, and contribute to impactful projects.',
  photoUrl: '/profile.jpg',
  cvUrl: '/CV.pdf',
  email: import.meta.env.VITE_EMAIL,
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL,
  githubUrl: import.meta.env.VITE_GITHUB_URL,
};

export const workExperience: Experience[] = [
  {
    role: 'Backend Developer | Internship',
    company: 'Time International',
    location: 'South Jakarta, Indonesia',
    startDate: '02/2025',
    endDate: '01/2026',
    description: [
      'Developed 5+ software projects from planning to deployment.',
      'Built 40+ RESTful APIs to support backend functionalities.',
      'Actively participated in 2+ knowledge sharing sessions to contribute insights and foster collaboration.',
      'Collaborated with 8+ Information Technology and Digital team members to deliver impactful solutions.',
      'Contributed to the development of 5+ mailing modules, including email automation and template management.'
    ]
  },
  {
    role: 'Software Engineer | Internship',
    company: 'Bina Nusantara IT Division',
    location: 'West Jakarta, Indonesia',
    startDate: '03/2024',
    endDate: '02/2025',
    description: [
      'Implemented 5+ new technologies, improving efficiency and scalability across the Software Solution Group (SSG) and other divisions.',
      'Conducted 2+ weekly meetings to provide updates and maintain alignment with stakeholders, ensuring timely project delivery.',
      'Researched and documented 10+ feature comparisons between Datadog and New Relic, enabling informed decision-making for Application Performance Monitoring (APM).',
      'Delivered a successful Proof of Concept (POC) for Datadog and New Relic, leading to the selection of an optimal APM tool for 10+ applications across Bina Nusantara.',
      'Evaluated 3 media player platforms (MediaKind MK.IO, Wowza, BlendVision) and recommended Azure Media Services as a cost-effective and scalable replacement.',
      'Collaborated with the IT Technology Team to deploy Kubernetes for 5 mission-critical applications, enhancing container orchestration and scalability.',
      'Designed and implemented Redis on Kubernetes, reducing database latency by 30% and improving system reliability.'
    ],
  },
  {
    role: 'Praetorian | Part Time',
    company: 'Bina Nusantara Computer Club',
    location: 'West Jakarta, Indonesia',
    startDate: '11/2023',
    endDate: '03/2024',
    description: [
      'Conducted 2 weekly training sessions, improving the back-end development skills of 50+ members with a focus on the Laravel framework.',
      'Supervised and guided 20+ participants in the successful completion of a final project on back-end development selection, ensuring high-quality deliverables.',
      'Delivered 8+ comprehensive lessons covering Laravel topics such as architecture, CRUD operations, sessions, middleware, authentication, and authorization, tailored to meet the needs of BNCC members.'
    ],
  },
];

export const organizationExperience: Experience[] = [
  {
    role: 'Co-Director | Research and Development',
    company: 'Binus Blockchain and Crypto Club',
    location: 'West Jakarta, Indonesia',
    startDate: '08/2024',
    endDate: '02/2025',
    description: [
      'Contributed 2+ innovative ideas for the design and functionality of the BBCC website to enhance user engagement and align with organizational goals.',
      'Developed and maintained a Discord bot for BBCC, automating the posting of blockchain-related news from Instagram to Discord, ensuring consistent updates for 150+ members.'
    ],
  },
  {
    role: 'Activist',
    company: 'Data Science Club',
    location: 'West Jakarta, Indonesia',
    startDate: '04/2023',
    endDate: '11/2023',
    description: [
      'Completed data science and analysis assignments, focusing on statistical modelling and data manipulation using Python.',
      'Designed the Data Science Club\'s website prototype using Figma, creating an intuitive user experience and visually appealing interface that aligned with the club\'s objectives.',
      'Developed the Data Science Club\'s website using React, implementing responsive and interactive features to enhance user engagement.'
    ],
  },
  {
    role: 'Member',
    company: 'Bina Nusantara Computer Club',
    location: 'West Jakarta, Indonesia',
    startDate: '11/2022',
    endDate: '11/2023',
    description: [
      'Participated in 10+ weekly bootcamp sessions organized by the Praetorian division, enhancing backend development skills with a focus on best practices, modern tools, and hands-on projects for scalable server-side applications.',
      'Collaborated with peers in 13 discussions, sharing knowledge and exploring innovative back-end solutions.',
      'Completed 2 major projects (mid-term and final), applying learned concepts to design and implement efficient back-end solutions.'
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'StockFlow — Inventory Management',
    githubUrl: 'https://github.com/BernardBerenes/StockFlow-UI',
    images: ['/projects/stockflow/1.png', '/projects/stockflow/2.png', '/projects/stockflow/3.png'],
    techStack: ['Golang', 'Go Fiber', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    description: 'StockFlow is an inventory management application designed to monitor the movement of goods, including shipment status and payment tracking, ensuring better control over delivered and pending transactions.',
  },
  {
    name: 'FoodSaver — Waste Reduction',
    githubUrl: 'https://github.com/BernardBerenes/FoodSaver',
    images: ['/projects/foodsaver/1.png', '/projects/foodsaver/2.png'],
    techStack: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'Docker', 'Kubernetes', 'REST API'],
    description: 'FoodSaver is a platform that helps reduce food waste by redistributing surplus food from restaurants at more affordable prices, while managing availability and order status efficiently.',
  },
  {
    name: 'Tutoran — Learning Management',
    githubUrl: 'https://github.com/BernardBerenes/Tutoran',
    images: ['/projects/tutoran/1.png', '/projects/tutoran/2.png', '/projects/tutoran/3.png'],
    techStack: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'Docker', 'REST API'],
    description: 'Tutoran is a Learning Management System (LMS) designed to facilitate online courses, enabling users to access learning materials, track progress, and manage courses efficiently.',
  },
  {
    name: 'ERamen Shop — Ramen E-Commerce',
    githubUrl: 'https://github.com/BernardBerenes/ERamen-Shops',
    images: ['/projects/eramen/1.png'],
    techStack: ['HTML', 'CSS', 'Javascript'],
    description: 'Eramen is an e-commerce platform dedicated to ramen products, enabling users to browse menus, place orders, and manage transactions seamlessly.',
  },
];
