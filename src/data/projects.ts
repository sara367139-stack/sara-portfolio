import type { Project } from '../types';
import { withBase } from '../utils/withBase';

export const projectsData: Project[] = [
  {
    id: 'logitrack',
    title: 'LogiTrack',
    category: 'Flutter',
    categories: ['Flutter'],
    subtitle: 'Warehouse Management Application',
    shortDescription:
      'A cross-platform mobile solution designed for real-time warehouse inventory tracking, barcode/stock scanning workflows, and automated product movement audits.',
    featured: true,
    heroImage: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 161759.png'),
    technologies: ['Flutter', 'Dart', 'REST API', 'PostgreSQL', 'Firebase'],
    // [MISSING] Repository-specific GitHub URL and live demo URL not provided yet; githubUrl points to the profile.
    githubUrl: 'https://github.com/sara367139-stack',
    caseStudy: {
      overview:
        'LogiTrack was conceived to solve operational inefficiencies in warehouse inventory counting and product tracking. The application allows warehouse staff to monitor stock levels, scan incoming/outgoing items, and maintain synchronization with a centralized database.',
      myRole: 'Lead Flutter Developer (UI Design, State Architecture & REST API Integration)',
      problem:
        'Manual stock tracking on paper or spreadsheets results in inaccurate stock levels, delayed fulfillment, and human data entry mistakes in fast-paced storage environments.',
      solution:
        'Engineered a mobile-first Flutter application featuring intuitive workflows for product scanning, real-time quantity validation, and direct API synchronization with backend PostgreSQL storage.',
      keyFeatures: [
        '[Editable] User Authentication & Role-Based Access (Admin / Staff)',
        '[Editable] Real-Time Warehouse Inventory Dashboard',
        '[Editable] Product Catalog & Stock Level Management',
        '[Editable] Barcode / QR Stock Scanning Module',
        '[Editable] Low Stock Notifications & Movement Logs',
        '[Editable] Inventory Summary Reports & Export',
      ],
      architectureHighlights: [
        'Separation of concerns using Feature-First clean folder structure',
        'Repository pattern isolating network models from presentation layer',
        'Offline capability with local caching for intermittent connectivity',
      ],
      screenshots: [
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 161543.png'), caption: 'Onboarding: Smart Inventory Management' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114124.png'), caption: 'Onboarding: Scan Products Quickly' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114133.png'), caption: 'Onboarding: Track Your Warehouse' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 161651.png'), caption: 'Terminal Sign In' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 161759.png'), caption: 'Home Dashboard & Quick Actions' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 165405.png'), caption: 'Inbound / Outbound Volume & Throughput Trend' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-09-16 165336.png'), caption: 'Purchase Orders List' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114200.png'), caption: 'Scanner: Quick Audit' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114244.png'), caption: 'Scanner: Physical Audit Count & Discrepancy' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114302.png'), caption: 'Movement Details & Timeline' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114327.png'), caption: 'Create Purchase Order' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114337.png'), caption: 'Create Purchase Order: Add Line Item' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114355.png'), caption: 'New Movement: Route Details & Cargo Manifest' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114403.png'), caption: 'New Movement: Schedule & Priority' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114434.png'), caption: 'Reports: Fulfillment Rate & Throughput' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114442.png'), caption: 'Reports: Category Distribution & Top Moving SKUs' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114454.png'), caption: 'Warehouse Hub Rack Matrix' },
        { url: withBase('/assets/projects/logitrack/لقطة شاشة 2026-10-12 114520.png'), caption: 'Terminal Hardware, Roles & Settings' },
      ],
      challenges: [
        'Ensuring snappy UI responsiveness while loading large product catalogs with search filtering.',
        'Handling offline reconciliation when warehouse Wi-Fi fluctuates during active scanning.',
      ],
      whatILearned: [
        'Optimizing ListView rendering and image asset caching in Flutter for high item counts.',
        'Architecting reusable API interceptors with Dio for token refresh and error resilience.',
      ],
      futureImprovements: [
        '[Editable] Direct integration with thermal Bluetooth label printers.',
        '[Editable] Advanced analytics forecasting stock depletion rates based on historical movement.',
      ],
      isPlaceholderData: true,
    },
  },
  {
    id: 'noorah',
    title: 'Noorah',
    category: 'Flutter',
    categories: ['Flutter', 'UI/UX'],
    subtitle: 'Islamic Mobile Application',
    shortDescription:
      'A clean, feature-rich Islamic mobile app built with Flutter and Riverpod, offering precise prayer times, digital Quran reading, daily Adhkar counters, and full Arabic/English localization.',
    featured: true,
    heroImage: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020328.png'),
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST API'],
    // [MISSING] Repository-specific GitHub URL and live demo URL not provided yet; githubUrl points to the profile.
    githubUrl: 'https://github.com/sara367139-stack',
    caseStudy: {
      overview:
        'Noorah provides a serene, ad-free mobile environment for daily Islamic devotions. Designed with elegant Islamic typography and smooth micro-interactions, the app emphasizes seamless bilingual switching and offline usability.',
      myRole: 'Flutter Mobile Developer & UI/UX Implementer',
      problem:
        'Many devotional applications are cluttered with intrusive ads, lack fluid bilingual support, or fail to calculate accurate prayer schedules without continuous internet access.',
      solution:
        'Developed a lightweight, reactive Flutter application using Riverpod for reliable state management, offline mathematical prayer time calculations, and smooth RTL Arabic layouts.',
      keyFeatures: [
        '[Editable] Offline Accurate Prayer Times & Calculation Methods',
        '[Editable] Digital Quran Reader with Surah & Ayah Bookmarking',
        '[Editable] Interactive Digital Tasbih (Dhikr) Counter with Vibration Feedback',
        '[Editable] Daily Adhkar with Morning & Evening Categorization',
        '[Editable] Full Arabic & English Bilingual Support with Instant RTL Switch',
        '[Editable] Dark & Light Devotional Reading Modes',
      ],
      architectureHighlights: [
        'Riverpod StateNotifier/AsyncNotifier pattern for predictable state flow',
        'Feature-First modular structure (Prayer, Quran, Adhkar, Settings)',
        'Local SQLite / SharedPreferences storage for offline ayah bookmarks and counter state',
      ],
      screenshots: [
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020328.png'), caption: 'Home: Next Prayer Countdown & Prayer Times' },
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020347.png'), caption: 'Home: Quick Access & Daily Verse' },
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020339.png'), caption: 'Al-Quran Surah List' },
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020359.png'), caption: 'Surah Reader with Audio Recitation' },
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020415.png'), caption: 'Digital Tasbih Counter' },
        { url: withBase('/assets/projects/noorah/لقطة شاشة 2026-10-03 020427.png'), caption: 'More Resources: Qibla, Hijri Calendar, Hisnul Muslim' },
      ],
      challenges: [
        'Achieving pixel-perfect typography alignment across both Arabic (RTL) and English (LTR) modes.',
        'Handling background prayer notification scheduling reliably across various Android battery optimizations.',
      ],
      whatILearned: [
        'Deep mastery of Riverpod providers and selective widget rebuilding.',
        'Handling bi-directional layout mirroring and custom Arabic font rendering in Flutter.',
      ],
      futureImprovements: [
        '[Editable] Qibla compass integration utilizing device magnetometer.',
        '[Editable] Audio recitation streaming and background playback service.',
      ],
      isPlaceholderData: true,
    },
  },
  {
    id: 'nafi3',
    title: 'Nafi3 - Smart Donation Platform',
    category: 'Flutter',
    subtitle: 'Charity & Donation Mobile App',
    shortDescription:
      'A location-aware donation platform connecting donors directly with verified regional charities, featuring item category matching and pickup dispatch.',
    featured: false,
    heroImage: withBase('/assets/projects/Nafi3/Gemini_Generated_Image_2u02gf2u02gf2u02.jpg'),
    technologies: ['Flutter', 'Dart', 'REST API', 'Firebase', 'Google Maps API'],
    // [MISSING] Repository-specific GitHub URL and live demo URL not provided yet; githubUrl points to the profile.
    githubUrl: 'https://github.com/sara367139-stack',
    caseStudy: {
      overview:
        'Nafi3 streamlines charitable giving by connecting donors who have surplus items (clothing, furniture, medical equipment) directly with verified local charity hubs requiring those specific goods.',
      myRole: 'Flutter Mobile Developer',
      problem:
        'Charities often receive items they cannot use, while urgently needing other goods. Donors lack visibility into where their donations have the highest impact.',
      solution:
        'Built a donation application matching donor offers with specific charity wishlists based on geographic proximity and urgency rating.',
      keyFeatures: [
        '[Editable] Donor Item Listing with Photo Upload & Categorization',
        '[Editable] Verified Charity Database & Urgent Needs Radar',
        '[Editable] Location-Based Distance Filtering',
        '[Editable] In-App Pickup Scheduling & Dispatch Status',
      ],
      screenshots: [
        { url: withBase('/assets/projects/Nafi3/Gemini_Generated_Image_2u02gf2u02gf2u02.jpg'), caption: 'Nafi3: Your Community Donation Platform' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-08-18 160528.png'), caption: 'Onboarding: Welcome to Community Hub' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-10-03 001642.png'), caption: 'Login & Create Account' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-10-12 115636.png'), caption: 'Home: Categories & Recent Donations' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-08-18 160640.png'), caption: 'Favorites: Saved Donation Requests' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-10-03 020650.png'), caption: 'Publish Donation Form' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-10-03 020708.png'), caption: 'Total Donations & Saved Causes' },
        { url: withBase('/assets/projects/Nafi3/لقطة شاشة 2026-10-12 115652.png'), caption: 'App Screens Overview' },
      ],
      challenges: ['Optimizing image uploads and handling geo-coordinates for nearby charity discovery.'],
      whatILearned: ['Implementing device location services and RESTful API authentication workflows.'],
      futureImprovements: ['[Editable] Volunteer delivery courier driver mode.'],
      isPlaceholderData: true,
    },
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    // Category inferred from Flutter widget/package labels visible in the screenshots (CachedNetworkImage, SettingsTile).
    category: 'Flutter',
    subtitle: 'Smart Home Control App',
    shortDescription:
      'A smart home app with sign-in, a home dashboard showing temperature and humidity, room and device controls, quick scenes, energy usage analytics, and settings.',
    featured: false,
    heroImage: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115816.png'),
    // [MISSING] Technologies not provided yet.
    technologies: [],
    // [MISSING] Repository-specific GitHub URL and live demo URL not provided yet; githubUrl points to the profile.
    githubUrl: 'https://github.com/sara367139-stack',
    caseStudy: {
      overview:
        'A smart home app with sign-in, a home dashboard showing temperature and humidity, room and device controls, quick scenes, energy usage analytics, and settings.',
      // [MISSING] Role, problem, solution, challenges, learnings and roadmap not provided yet; empty sections are hidden.
      myRole: '',
      problem: '',
      solution: '',
      keyFeatures: [
        'Sign in with email and password, with Google and Apple options',
        'Home dashboard with inside temperature, outside temperature and humidity',
        'Rooms list (Living Room, Bedroom, Kitchen) with device counts',
        'Room details with device toggles (Ceiling Light, Ceiling Fan, AC Unit, Bedside Lamp)',
        'Quick scenes (Relax, Entertain, Away)',
        'Weekly energy usage analytics with daily kWh breakdown',
        'Settings for profile, privacy, security, notifications, dark mode and connected devices',
        'Side navigation drawer',
      ],
      screenshots: [
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115828.png'), caption: 'Sign In to Your Home' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115816.png'), caption: 'Home Dashboard: Rooms, Devices & Quick Scenes' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115840.png'), caption: 'Home Dashboard: Climate & Rooms' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115853.png'), caption: 'Bedroom: Devices & Scenes' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115904.png'), caption: 'Analytics: Energy Usage' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115915.png'), caption: 'Settings: Account & Preferences' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115948.png'), caption: 'Settings: Notifications & System' },
        { url: withBase('/assets/projects/smart_home/لقطة شاشة 2026-10-12 115957.png'), caption: 'Navigation Drawer' },
      ],
      challenges: [],
      whatILearned: [],
      futureImprovements: [],
    },
  },
  {
    id: 'shop-sport',
    title: 'Shop Sport',
    // Category inferred from the flutter.dev sample account visible on the profile screen.
    category: 'Flutter',
    subtitle: 'Sports World Shopping App',
    shortDescription:
      'A sports shopping app ("Sports World") with product categories, a product catalog with prices and add-to-cart, a discover grid, a user profile, and settings.',
    featured: false,
    heroImage: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121447.png'),
    // [MISSING] Technologies not provided yet.
    technologies: [],
    // [MISSING] Repository-specific GitHub URL and live demo URL not provided yet; githubUrl points to the profile.
    githubUrl: 'https://github.com/sara367139-stack',
    caseStudy: {
      overview:
        'A sports shopping app ("Sports World") with product categories, a product catalog with prices and add-to-cart, a discover grid, a user profile, and settings.',
      // [MISSING] Role, problem, solution, challenges, learnings and roadmap not provided yet; empty sections are hidden.
      myRole: '',
      problem: '',
      solution: '',
      keyFeatures: [
        'Home screen with product search and categories (Soccer Gear, Running Shoes, Basketball Apparel, Fitness Bags & Tech)',
        'Product catalog with prices and add-to-cart',
        'Discover grid with favorites',
        'Profile with orders, wishlist and reviews',
        'Settings for dark mode, notifications, language and account',
      ],
      screenshots: [
        { url: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121447.png'), caption: 'Home: Sports World Categories' },
        { url: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121458.png'), caption: 'All Products' },
        { url: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121508.png'), caption: 'Discover' },
        { url: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121518.png'), caption: 'Profile: Orders, Wishlist & Reviews' },
        { url: withBase('/assets/projects/shop sport/لقطة شاشة 2026-10-12 121528.png'), caption: 'Settings' },
      ],
      challenges: [],
      whatILearned: [],
      futureImprovements: [],
    },
  },
];
