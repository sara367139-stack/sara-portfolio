import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Building performant, responsive cross-platform native-feeling applications.',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter', badge: 'Core' },
      { name: 'Dart', badge: 'Core' },
      { name: 'Riverpod', badge: 'State Management' },
      { name: 'Clean Architecture', badge: 'Pattern' },
      { name: 'Responsive Layouts' },
      { name: 'Offline Storage / SharedPreferences' },
      { name: 'Bilingual / RTL Support' },
    ],
  },
  {
    id: 'backend-apis',
    name: 'Backend & APIs',
    description: 'Integrating network services, handling asynchronous flows, and designing robust data exchange.',
    icon: 'Server',
    skills: [
      { name: 'REST APIs', badge: 'Integration' },
      { name: 'Dio HTTP Client', badge: 'Networking' },
      { name: 'Token Authentication (JWT)' },
      { name: 'JSON Serialization' },
      { name: 'Error Handling & Interceptors' },
      { name: 'C# / ASP.NET Basics' },
    ],
  },
  {
    id: 'cloud-databases',
    name: 'Backend / Cloud & Databases',
    description: 'Persistent data storage, real-time sync, and relational schema management.',
    icon: 'Database',
    skills: [
      { name: 'Firebase Firestore', badge: 'Cloud' },
      { name: 'Firebase Authentication' },
      { name: 'PostgreSQL', badge: 'Relational' },
      { name: 'SQL Querying & Schema Design' },
      { name: 'Entity Relationship Modeling' },
    ],
  },
  {
    id: 'tools-workflow',
    name: 'Tools & Workflow',
    description: 'Industry-standard developer tooling, version control, and interface design inspection.',
    icon: 'Wrench',
    skills: [
      { name: 'Git', badge: 'VCS' },
      { name: 'GitHub', badge: 'Collaboration' },
      { name: 'VS Code' },
      { name: 'Android Studio' },
      { name: 'Figma (UI/UX Implementation)' },
      { name: 'Postman (API Testing)' },
    ],
  },
];
