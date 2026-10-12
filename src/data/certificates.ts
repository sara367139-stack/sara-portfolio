import type { Certificate } from '../types';
import { withBase } from '../utils/withBase';

export const certificatesData: Certificate[] = [
  {
    id: 'cert-nti-flutter',
    title: 'Mobile Application Development (Flutter Track)',
    issuer: 'National Telecommunication Institute (NTI)',
    issuerLogoText: 'NTI',
    duration: '3 Months, 120 Hours',
    date: 'Summer 2024',
    image: withBase('/assets/certificates/Gemini_Generated_Image_d0yoiud0yoiud0yo.jpg'),
    description:
      'Intensive hands-on engineering track focusing on Flutter SDK, Dart language fundamentals, asynchronous programming, reactive state patterns, and native mobile hardware integrations.',
    skillsLearned: ['Flutter SDK', 'Dart', 'State Management', 'REST APIs', 'Mobile UI/UX'],
  },
  {
    id: 'cert-iti-python',
    title: 'Full-Stack Web Development using Python',
    issuer: 'Information Technology Institute (ITI)',
    issuerLogoText: 'ITI',
    duration: '2 Months Intensive',
    date: '2024',
    // [MISSING] Real certificate image not provided yet; using the existing placeholder.
    image: withBase('/assets/certificates/cert-iti-python.svg'),
    description:
      'Applied full-stack web engineering track covering Python fundamentals, web frameworks, database connectivity, and clean MVC architectural patterns.',
    skillsLearned: ['Python', 'Web Frameworks', 'Databases', 'MVC Pattern', 'API Development'],
  },
  {
    id: 'cert-iti-sait-web',
    title: 'Web Development Fundamentals',
    issuer: 'ITI & SAIT Camp',
    issuerLogoText: 'ITI / SAIT',
    duration: '132 Hours Combined',
    date: '2023–2024',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-12 121132.png'),
    description:
      'Modern web standards, responsive layouts, semantic HTML5, CSS layout systems (Flexbox & Grid), DOM manipulation, and dynamic client-side scripting.',
    skillsLearned: ['HTML5', 'CSS3', 'Modern JavaScript', 'Responsive Web Design', 'DOM Manipulation'],
  },
  {
    id: 'cert-mahara-tech',
    title: 'Database & Web Fundamentals Track',
    issuer: 'Mahara-Tech (مهارة-تك)',
    issuerLogoText: 'Mahara-Tech',
    duration: 'Specialized Track',
    date: '2023',
    // [MISSING] Real certificate image not provided yet; using the existing placeholder.
    image: withBase('/assets/certificates/cert-mahara-tech.svg'),
    description:
      'Relational database architecture, Entity-Relationship (ER) diagramming, 3NF normalization, SQL indexing, and backend transaction modeling.',
    skillsLearned: ['Database Modeling', 'SQL', 'Normalization', 'ER Diagrams', 'PHP & MySQL Basics'],
  },
  {
    id: 'cert-huawei-overview-ai',
    title: 'Overview of AI',
    issuer: 'Huawei ICT Academy',
    issuerLogoText: 'Huawei ICT',
    date: 'Sep 10, 2026',
    image: withBase('/assets/certificates/photo_2026-09-10_18-03-52.jpg'),
    description:
      'Certificate of completion for the study and exam of the Overview of AI course at Huawei ICT Academy.',
    skillsLearned: [],
  },
  {
    id: 'cert-mahara-freelancing-basics',
    title: 'Freelancing Basics',
    issuer: 'Mahara-Tech (ITI Platform)',
    issuerLogoText: 'Mahara-Tech',
    duration: '3 Hours, 8 Minutes',
    date: 'Aug 18, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-18 144314.png'),
    description:
      'Certificate of completion for the Freelancing Basics course, issued by the Information Technology Institute (ITI) Mahara-Tech platform.',
    skillsLearned: [],
  },
  {
    id: 'cert-mahara-freelancer-upwork',
    title: 'Getting Started as a Freelancer (Upwork)',
    issuer: 'Mahara-Tech (ITI Platform)',
    issuerLogoText: 'Mahara-Tech',
    duration: '50 Minutes',
    date: 'Aug 18, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-18 152144.png'),
    description:
      'Certificate of completion for the Getting Started as a Freelancer (Upwork) course, issued by the Information Technology Institute (ITI) Mahara-Tech platform.',
    skillsLearned: [],
  },
  {
    id: 'cert-mahara-freelancer-mostaql',
    title: 'Getting Started as a Freelancer (Mostaql)',
    issuer: 'Mahara-Tech (ITI Platform)',
    issuerLogoText: 'Mahara-Tech',
    duration: '33 Minutes',
    date: 'Aug 18, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-18 162729.png'),
    description:
      'Certificate of completion for the Getting Started as a Freelancer (Mostaql) course, issued by the Information Technology Institute (ITI) Mahara-Tech platform.',
    skillsLearned: [],
  },
  {
    id: 'cert-mahara-freelancer-khamsat',
    title: 'Getting Started as a Freelancer (Khamsat)',
    issuer: 'Mahara-Tech (ITI Platform)',
    issuerLogoText: 'Mahara-Tech',
    duration: '1 Hour',
    date: 'Aug 19, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-19 024424.png'),
    description:
      'Certificate of completion for the Getting Started as a Freelancer (Khamsat) course, issued by the Information Technology Institute (ITI) Mahara-Tech platform.',
    skillsLearned: [],
  },
  {
    id: 'cert-khebra-khamsat-basics',
    title: 'أساسيات العمل على خمسات (Basics of Working on Khamsat)',
    issuer: 'Khebra (خبرة)',
    issuerLogoText: 'Khebra',
    date: 'Aug 21, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-21 155328.png'),
    description:
      'Khebra certificate awarded after successfully completing the Basics of Working on Khamsat test.',
    skillsLearned: [],
  },
  {
    id: 'cert-khebra-client-communication',
    title: 'مهارات التواصل مع العملاء (Client Communication Skills)',
    issuer: 'Khebra (خبرة)',
    issuerLogoText: 'Khebra',
    date: 'Aug 21, 2026',
    image: withBase('/assets/certificates/لقطة شاشة 2026-08-21 161148.png'),
    description:
      'Khebra certificate awarded after successfully completing the Client Communication Skills test.',
    skillsLearned: [],
  },
];
