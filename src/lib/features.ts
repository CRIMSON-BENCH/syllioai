export interface Feature {
  slug: string;
  name: string;
  audience: 'students' | 'teachers' | 'both';
  tagline: string;
  description: string;
  benefits: string[];
  price: string;
  schema: string;
}

export const features: Feature[] = [
  {
    slug: 'ai-syllabus-scan',
    name: 'AI Syllabus Scan',
    audience: 'students',
    tagline: 'Snap your syllabus. Never miss a deadline again.',
    description:
      'Point your phone at any syllabus — printed, PDF, or digital — and Syllio\'s AI extracts every exam, paper, project, and reading assignment in seconds. All deadlines land directly on your Syllio calendar, color-coded by class and priority. Stop manually copying due dates and start actually preparing for them.',
    benefits: [
      'Extracts 100% of deadlines from any syllabus format in under 10 seconds',
      'Auto-tags assignments by type: exam, paper, quiz, project, or reading',
      'Syncs immediately to your Syllio calendar with smart priority scoring',
      'Works on photos, PDFs, Canvas-exported syllabi, and Google Classroom handouts',
    ],
    price: 'Free',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'burnout-radar',
    name: 'Burnout Radar™',
    audience: 'students',
    tagline: 'Know your brutal weeks before they blindside you.',
    description:
      'Burnout Radar analyzes your entire semester\'s workload and flags overloaded weeks up to 7 days in advance — giving you time to get ahead, reschedule, or ask for extensions before it\'s too late. It scores each week on a 1–10 stress index based on combined deadlines, exam proximity, and assignment weight across all your courses. Stop waking up Sunday night in full panic mode.',
    benefits: [
      '7-day early warning system for high-workload weeks across all classes',
      'Weekly stress index (1–10) built from your actual live assignment data',
      'Actionable nudges like "Start this paper 4 days early to avoid week 9 collision"',
      'Semester heat map so you can plan study sessions and breaks strategically',
    ],
    price: 'Included in AI Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'club-os',
    name: 'Club OS',
    audience: 'students',
    tagline: 'Run your club like a startup, not a group chat.',
    description:
      'Club OS is a complete operating system for student organizations — roster management, attendance tracking, meeting scheduling, and mass push notifications, all in one place. Officers can blast announcements to every member with a single tap, track who showed up to which events, and manage officer transitions without losing institutional knowledge. Say goodbye to 47-person group chats and dead email threads.',
    benefits: [
      'Roster management with role-based permissions for officers and members',
      'One-tap push notifications to all members or targeted subgroups',
      'Attendance tracking with QR code check-in for meetings and events',
      'Officer election tools and seamless transition handoffs built in',
    ],
    price: 'Free',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'portfolio',
    name: '4-Year Portfolio',
    audience: 'students',
    tagline: 'Your four years of hustle, one shareable link.',
    description:
      'The 4-Year Portfolio auto-generates a professional link-in-bio showcasing every club, leadership role, community service hour, award, and extracurricular you log in Syllio. It updates in real time as you add activities, so by senior year your entire high school or college career is already documented and shareable for college apps, internships, and jobs. No resume builder required — just send the link.',
    benefits: [
      'Auto-built from your Syllio activity log with no manual formatting required',
      'Shareable public URL ready for college applications, LinkedIn, and internship portals',
      'Timestamps and verified badges for every role and activity you add',
      'One-click export to PDF resume format for traditional applications',
    ],
    price: 'Included in AI Pro',
    schema: 'ProfilePage',
  },
  {
    slug: 'verified-badges',
    name: 'Verified Badges',
    audience: 'students',
    tagline: 'Prove it. Third-party verified leadership that admissions trusts.',
    description:
      'Verified Badges lets club presidents, faculty advisors, and organization officers formally confirm your role and contributions within a club on Syllio. Once verified, a badge appears on your portfolio that cannot be self-issued — providing third-party proof of your leadership that college admissions offices and employers can actually rely on. It\'s the difference between claiming "club president" and proving it.',
    benefits: [
      'Verified badges issued by club officers or faculty advisors, never self-issued',
      'Email confirmation flow with tamper-evident audit trail',
      'Verified badges display prominently on your public 4-Year Portfolio',
      'Supports officer roles, volunteer hours, academic honors, and award recognition',
    ],
    price: 'Free',
    schema: 'EducationalOccupationalCredential',
  },
  {
    slug: 'lms-sync',
    name: 'LMS Sync',
    audience: 'students',
    tagline: 'All your classes. One calendar. Zero manual entry.',
    description:
      'LMS Sync connects Syllio directly to Canvas, Blackboard, and Google Classroom to automatically import every assignment, due date, and course announcement the moment your teacher posts it. Your Syllio dashboard becomes the single source of truth for all your coursework across all your classes — with real-time updates so you never encounter a surprise deadline. Works across multiple LMS platforms simultaneously.',
    benefits: [
      'Real-time sync from Canvas, Blackboard, and Google Classroom in one view',
      'New assignments appear in Syllio within minutes of being posted by your teacher',
      'Handles multiple LMS platforms simultaneously for students in mixed-tool schools',
      'Burnout Radar auto-updates with every new synced assignment automatically',
    ],
    price: 'Included in AI Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'syllabus-builder',
    name: 'AI Syllabus Builder',
    audience: 'teachers',
    tagline: 'A complete, polished syllabus in minutes — not hours.',
    description:
      'Type in your course name, grade level, learning objectives, and a handful of key topics, and Syllio\'s AI generates a fully structured, professionally formatted syllabus ready to share with students the same day. The AI builds out weekly schedules, grading rubrics, late-work policies, academic integrity statements, and required materials sections — all customizable with your school\'s branding and policies. What used to take three hours now takes five minutes.',
    benefits: [
      'Full syllabus generated from just your course title and a few key details',
      'Includes grading rubric, weekly schedule, course policies, and required materials',
      'Fully customizable with your name, school, course code, and personal policies',
      'Export to PDF, Word, Google Docs, or push directly to Canvas or Blackboard',
    ],
    price: 'Included in Teacher Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'lesson-planner',
    name: 'AI Lesson Planner',
    audience: 'teachers',
    tagline: 'A full week of lesson plans while you drink your morning coffee.',
    description:
      'AI Lesson Planner turns your syllabus topics and learning standards into detailed, week-by-week lesson plans complete with objectives, activities, discussion questions, and assessment ideas. It aligns automatically to Common Core, NGSS, AP standards, or your own custom framework — and it remembers where you left off each week. Teachers report saving four to six hours per week on lesson prep alone.',
    benefits: [
      'Full week-by-week lesson plans generated from your syllabus in minutes',
      'Auto-aligns to Common Core, NGSS, AP standards, or any custom framework',
      'Each plan includes warm-ups, core activities, discussion questions, and exit tickets',
      'Easily editable in Syllio and exportable to PDF or Google Docs',
    ],
    price: 'Included in Teacher Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'assignment-generator',
    name: 'AI Assignment Generator',
    audience: 'teachers',
    tagline: 'Create standards-aligned assignments and rubrics in under 60 seconds.',
    description:
      'Describe an assignment concept — "a 5-page essay on the causes of World War I for 10th grade" — and the AI generates a complete assignment sheet with clear student-facing instructions, learning objectives, a grading rubric, and suggested resources. Every assignment is standards-aligned and can be differentiated for advanced, grade-level, and support learners on request. Stop spending your evenings building rubrics from scratch.',
    benefits: [
      'Complete assignment sheets with student instructions, objectives, and rubrics',
      'Standards-aligned to AP, Common Core, NGSS, or your custom course standards',
      'Differentiation options for advanced, grade-level, and intervention learners',
      'Batch-generate an entire semester of assignments directly from your syllabus',
    ],
    price: 'Included in Teacher Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'class-code',
    name: 'Class Code Import',
    audience: 'both',
    tagline: 'One code. Every deadline imported in 5 seconds.',
    description:
      'Teachers publish a unique Class Code when they finalize their Syllio syllabus. Students enter the code and every assignment, exam, and deadline from that course is instantly imported to their personal Syllio calendar — correctly named, weighted, and ready for Burnout Radar to analyze. No more students claiming they didn\'t see the due date.',
    benefits: [
      'Teacher publishes once; every student imports all deadlines in under 5 seconds',
      'All assignments transfer with correct names, point values, and due times',
      'Automatically feeds student Burnout Radar for instant workload analysis',
      'Supports multiple sections — one code per class section, managed separately',
    ],
    price: 'Free',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'lms-export',
    name: 'LMS Export',
    audience: 'teachers',
    tagline: 'Build it in Syllio. Publish it everywhere, instantly.',
    description:
      'With one click, export your Syllio syllabus, lesson plans, and assignments directly to Canvas, Google Classroom, or Blackboard — fully formatted and ready for students without any additional reformatting. Changes made in Syllio can sync back to your LMS automatically whenever you choose. No more copying and pasting between platforms or losing formatting in the transfer.',
    benefits: [
      'One-click export to Canvas, Google Classroom, and Blackboard',
      'All assignments, due dates, rubrics, and course info transfer with full formatting',
      'Optional two-way sync keeps Syllio and your LMS automatically in lockstep',
      'Supports multiple course sections and instances simultaneously',
    ],
    price: 'Included in Teacher Pro',
    schema: 'SoftwareApplication',
  },
  {
    slug: 'template-pack',
    name: 'Syllabus Template Pack',
    audience: 'teachers',
    tagline: '100+ ready-to-use syllabi for every subject and grade level.',
    description:
      'The Syllabus Template Pack gives teachers instant access to over 100 professionally written, standards-aligned syllabus templates covering every major subject from AP Calculus to Introduction to Business. Each template includes a complete course description, weekly schedule, grading rubric, and course policies — ready to customize with your name and school in under five minutes. Stop reinventing the wheel every August.',
    benefits: [
      '100+ templates spanning every major subject, grade level, and AP course',
      'Professionally written course descriptions and learning objectives included',
      'Instantly customizable: swap your name, school, and policies in minutes',
      'New subject templates added monthly based on teacher community requests',
    ],
    price: 'Included in Teacher Pro',
    schema: 'ItemList',
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
