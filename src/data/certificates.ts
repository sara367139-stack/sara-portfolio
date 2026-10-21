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
];
