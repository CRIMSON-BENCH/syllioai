export interface UseCaseFeature {
  title: string;
  description: string;
}

export interface UseCase {
  slug: string;
  headline: string;
  subheadline: string;
  audienceLabel: string;
  benefits: string[];
  features: UseCaseFeature[];
  ctaText: string;
  jsonLdDescription: string;
}

export const useCases: UseCase[] = [
  {
    slug: "college-students",
    headline: "The Academic OS Built for College Students",
    subheadline:
      "Scan syllabi in seconds, never miss a deadline, track your clubs, and build a portfolio that travels beyond graduation — all in one app.",
    audienceLabel: "College Students",
    benefits: [
      "AI scans any syllabus — photo or PDF — and adds every deadline to your calendar in under 30 seconds",
      "Burnout Radar™ warns you 7 days before your hardest workload week hits",
      "LMS sync pulls deadlines from Canvas, Blackboard, and Google Classroom automatically",
      "4-Year Portfolio auto-builds from your verified clubs, officer roles, and service hours",
    ],
    features: [
      {
        title: "AI Syllabus Scan",
        description:
          "Photograph your printed syllabus or upload a PDF. Syllio's AI reads every line, extracts assignments, exams, readings, and due dates, and adds them directly to your Syllio calendar — in under 30 seconds.",
      },
      {
        title: "Burnout Radar™",
        description:
          "Syllio analyzes your full assignment load across all courses and flags high-density weeks seven days before they arrive — giving you enough runway to prepare, not just survive.",
      },
      {
        title: "Club OS",
        description:
          "Join student organizations through Syllio and see every club event alongside your class deadlines in one unified timeline. Presidents can push notifications directly to your home screen.",
      },
      {
        title: "Canvas, Blackboard & Google Classroom Sync",
        description:
          "Connect your LMS account once and every assignment your professors post flows automatically into your Syllio calendar. No checking five tabs. One calendar.",
      },
    ],
    ctaText: "Start for free — no credit card",
    jsonLdDescription:
      "Syllio is an AI-powered academic OS for college students. Scan syllabi, sync your LMS, track clubs, and build a 4-year portfolio.",
  },
  {
    slug: "high-school-students",
    headline: "Syllio for High School Students: Get Ahead and Stay There",
    subheadline:
      "From AP course deadlines to club leadership to college prep — Syllio gives high schoolers one system for all of it.",
    audienceLabel: "High School Students",
    benefits: [
      "Instantly extract deadlines from any class syllabus or course outline",
      "See all your AP, honors, and standard course deadlines in one calendar",
      "Track extracurricular hours and leadership roles that strengthen your college application",
      "Manage multiple clubs and sports in Syllio's Club OS without the group-chat chaos",
    ],
    features: [
      {
        title: "Multi-Course Calendar",
        description:
          "Stack all your courses — AP, honors, electives — into a single timeline. See what's due this week, next week, and before your college application deadlines hit.",
      },
      {
        title: "Extracurricular Tracking",
        description:
          "Log your club memberships, officer roles, volunteer hours, and sports participation. Build a verified record that shows colleges exactly what you did — and proves it.",
      },
      {
        title: "Club OS",
        description:
          "Whether you're a club president or a first-year member, Syllio's Club OS keeps you connected to your student organizations with event notifications, attendance records, and digital rosters.",
      },
      {
        title: "College Prep Portfolio",
        description:
          "Your Syllio portfolio assembles automatically from your academic and extracurricular activity. Share it in your Common App additional materials or link it in your scholarship applications.",
      },
    ],
    ctaText: "Build your portfolio free",
    jsonLdDescription:
      "Syllio helps high school students track class deadlines, manage clubs, log extracurricular hours, and build a verified college application portfolio.",
  },
  {
    slug: "k12-teachers",
    headline: "AI Syllabus Tools Built for K-12 Teachers",
    subheadline:
      "Build your course syllabus in minutes, share it with students via a single code, and get back the hours you've been spending on admin every week.",
    audienceLabel: "K-12 Teachers",
    benefits: [
      "Generate a complete, polished course syllabus from your learning objectives in under 60 seconds",
      "Share with students via a 6-character class code — every deadline auto-imports to their calendar",
      "Export to Google Classroom or your LMS with one click",
      "Create standards-aligned assignments, rubrics, and lesson plans with the same AI workflow",
    ],
    features: [
      {
        title: "AI Syllabus Builder",
        description:
          "Enter your course name, grade level, subject, major assignments, and grading policy. Syllio's AI generates a complete, ready-to-distribute syllabus with learning objectives, a course schedule, and all required policy sections.",
      },
      {
        title: "Class Code Distribution",
        description:
          "Publish your syllabus and receive a 6-character class code. Share it verbally, post it in your LMS, or display it in your classroom. Students enter the code once and every deadline appears in their Syllio calendar instantly.",
      },
      {
        title: "Google Classroom & LMS Export",
        description:
          "On Teacher Pro, export your AI-built syllabus directly to Google Classroom or Canvas — creating assignments in your LMS automatically without manual re-entry.",
      },
      {
        title: "AI Lesson Planner",
        description:
          "Turn your syllabus into a week-by-week lesson plan automatically. Adjust pacing, swap activities, and export to your preferred format without starting from a blank page.",
      },
    ],
    ctaText: "Start building syllabi free",
    jsonLdDescription:
      "Syllio's AI syllabus builder, class code system, and lesson planner help K-12 teachers create and distribute course materials in minutes.",
  },
  {
    slug: "college-professors",
    headline: "AI Syllabus and Lesson Planning Tools for College Professors",
    subheadline:
      "Build graduate-quality syllabi, connect students via class code, and sync everything with Canvas or Blackboard — without the administrative overhead.",
    audienceLabel: "College Professors",
    benefits: [
      "Generate ADA-compliant, pedagogically sound syllabi with proper learning objectives in minutes",
      "Class code system connects your syllabus directly to every enrolled student's academic calendar",
      "Direct Canvas and Blackboard export — no copy-paste, no manual re-entry",
      "Track which students scanned or joined your course so you know every student has the information",
    ],
    features: [
      {
        title: "Institutional-Quality Syllabus Generation",
        description:
          "Syllio's AI is trained on thousands of real college syllabi across disciplines. Generate a complete syllabus — including properly written student learning outcomes, grading breakdown, required policies, and a course calendar — that meets institutional standards.",
      },
      {
        title: "Class Code Import for Students",
        description:
          "Students join your course in Syllio with your unique class code. Every assignment, exam, and due date from your syllabus appears in their calendar automatically — before the first class session.",
      },
      {
        title: "Canvas and Blackboard LMS Export",
        description:
          "Teacher Pro plan includes direct export to Canvas and Blackboard. Your Syllio-built syllabus becomes assignments in your LMS with due dates, point values, and descriptions already populated.",
      },
      {
        title: "AI Assignment and Rubric Generator",
        description:
          "Create standards-aligned assignments, discussion prompts, and analytic rubrics from your course learning objectives. Each generated assignment connects to the relevant week in your course calendar.",
      },
    ],
    ctaText: "Try Syllio for educators free",
    jsonLdDescription:
      "Syllio helps college professors generate compliant syllabi, connect students via class code, and export directly to Canvas and Blackboard.",
  },
  {
    slug: "club-presidents",
    headline: "Club President Tools: Run Your Student Organization Without the Chaos",
    subheadline:
      "Rosters, attendance, event push notifications, and verified member records — Syllio's Club OS is the platform student organizations have always needed.",
    audienceLabel: "Club Presidents",
    benefits: [
      "Manage your full member roster digitally with join requests, roles, and contact info in one place",
      "Push event notifications directly to every member's phone — not a group chat, a real push alert",
      "Track attendance digitally at every meeting and event without a clipboard or a spreadsheet",
      "Generate verified participation records members can use for resumes and scholarship applications",
    ],
    features: [
      {
        title: "Digital Member Roster",
        description:
          "Your club's membership list lives in Syllio — names, roles, join dates, and contact details. When members graduate or transfer, you remove them in one tap. Officer transitions inherit the roster automatically.",
      },
      {
        title: "Mass Push Notifications",
        description:
          "Post an event announcement in Club OS and it hits every member's home screen as a push notification. No group chat noise, no email delays. Members see it when you post it.",
      },
      {
        title: "Event Creation and RSVP",
        description:
          "Create club events in Syllio and they appear in every member's unified timeline alongside their class deadlines. Members can RSVP, check in digitally at the event, and have their attendance logged automatically.",
      },
      {
        title: "Verified Participation Records",
        description:
          "Members earn verified badges for officer roles, service hours, and event attendance — attested by club leadership and stored in their Syllio portfolio. Give your members something they can actually show to employers and graduate programs.",
      },
    ],
    ctaText: "Set up your club for free",
    jsonLdDescription:
      "Syllio's Club OS helps student organization presidents manage rosters, send push notifications, track attendance, and issue verified member records.",
  },
  {
    slug: "graduate-students",
    headline: "Syllio for Graduate Students: One System for Research, Coursework, and Conferences",
    subheadline:
      "Between seminars, lab meetings, thesis deadlines, and conference submissions, graduate student calendars are the most complex in academia. Syllio was built for exactly this.",
    audienceLabel: "Graduate Students",
    benefits: [
      "AI scans course syllabi and research timelines into one unified calendar automatically",
      "Track thesis milestones, committee meeting deadlines, and conference abstract submissions alongside coursework",
      "Burnout Radar™ is especially critical for graduate students managing research and teaching simultaneously",
      "LMS sync covers your coursework deadlines while manual entries handle the research calendar",
    ],
    features: [
      {
        title: "Multi-Source Calendar Integration",
        description:
          "Scan your seminar syllabi, sync your institution's LMS, and manually add research milestones — thesis chapter drafts, qualifying exam dates, IRB submission windows, conference deadlines — all in one unified view.",
      },
      {
        title: "Burnout Radar™ for Graduate Overload",
        description:
          "Graduate students are statistically among the highest-risk populations for academic burnout. Syllio's Burnout Radar™ monitors your full load and surfaces dangerous overload weeks before they become crises.",
      },
      {
        title: "Research Portfolio Building",
        description:
          "Log conference presentations, publications, teaching experience, and research milestones in your Syllio portfolio. Build the record you'll need when it's time to go on the academic or industry job market.",
      },
      {
        title: "TA and Course Management",
        description:
          "If you're a teaching assistant managing your own sections, Syllio's Teacher tools let you build and distribute a course syllabus with a class code — so your students get the same automated deadline experience.",
      },
    ],
    ctaText: "Manage your graduate timeline free",
    jsonLdDescription:
      "Syllio helps graduate students integrate coursework, research timelines, and teaching responsibilities in one academic planning OS.",
  },
  {
    slug: "community-college-students",
    headline: "Syllio for Community College Students: Academic Tools That Work for Real Life",
    subheadline:
      "Community college students juggle classes, work, family, and transfer prep. Syllio gives you the academic infrastructure to manage all of it without dropping anything.",
    audienceLabel: "Community College Students",
    benefits: [
      "AI syllabus scanning works for any course format — in-person, hybrid, and fully online",
      "Free plan is genuinely free — 2 AI scans per semester, full calendar, unlimited club access, forever",
      "Track transfer-credit coursework and articulation requirements alongside your current schedule",
      "Build a portfolio from your community college years that strengthens your transfer application",
    ],
    features: [
      {
        title: "Flexible AI Scanning for Any Syllabus Format",
        description:
          "Community college syllabi come in every format — PDFs, Word documents, Canvas pages, printed handouts. Syllio's AI handles all of them. Photo the handout or upload the PDF and every deadline transfers to your calendar.",
      },
      {
        title: "Free Tier That Is Actually Free",
        description:
          "Syllio's Free plan includes a full academic calendar, 2 AI syllabus scans per semester, unlimited club memberships, and your Syllio portfolio — forever. No credit card, no trial period, no feature degradation after 14 days.",
      },
      {
        title: "Transfer Prep Portfolio",
        description:
          "Four-year institutions evaluating transfer applicants are looking for evidence of engagement and achievement, not just transcripts. Your Syllio portfolio documents your academic and extracurricular record at community college in a format transfer offices can actually review.",
      },
      {
        title: "Online and Hybrid Course Support",
        description:
          "LMS sync covers the online and hybrid courses that now make up a large share of community college enrollment. Connect your Canvas or Google Classroom account and your deadlines sync automatically regardless of course modality.",
      },
    ],
    ctaText: "Get started free — no card needed",
    jsonLdDescription:
      "Syllio gives community college students free AI syllabus scanning, LMS sync, club management, and a transfer-ready academic portfolio.",
  },
  {
    slug: "parents-of-students",
    headline: "Syllio for Parents: Support Your Student Without the Stress",
    subheadline:
      "The best thing you can give your college or high school student isn't homework help — it's a system that prevents them from getting overwhelmed in the first place.",
    audienceLabel: "Parents",
    benefits: [
      "Gift Syllio Pro to your student for one semester and they'll have every deadline organized automatically",
      "Burnout Radar™ gives students early warning about overloaded weeks before they become crises",
      "The portfolio feature ensures four years of achievement is documented, not lost after graduation",
      "Used on iOS, Android, and web — works on whatever device your student already carries",
    ],
    features: [
      {
        title: "Gift a Pro Plan",
        description:
          "Purchase an AI Pro Student or OS Student subscription for your college or high school student. They receive the full plan — unlimited AI syllabus scans, LMS sync, Burnout Radar™, and portfolio building — as a gift from you.",
      },
      {
        title: "Burnout Prevention, Not Just Organization",
        description:
          "Syllio doesn't just track deadlines — it monitors your student's academic load and warns them before their hardest weeks arrive. For parents worried about burnout and mental health, this is the feature that matters most.",
      },
      {
        title: "A Record That Lasts Beyond Graduation",
        description:
          "Your student's Syllio portfolio documents four years of academic achievement, clubs, leadership roles, and service hours. It's the professional record they'll use for job applications and graduate programs — and it starts building on day one.",
      },
      {
        title: "No Maintenance Required",
        description:
          "Once set up, Syllio works in the background. Your student scans a syllabus and their calendar updates. They join a club and the events appear. The system runs automatically so your student can focus on the work, not on managing the app.",
      },
    ],
    ctaText: "Gift Syllio to your student",
    jsonLdDescription:
      "Syllio helps parents support their students with automated deadline tracking, burnout alerts, and a portfolio that documents four years of achievement.",
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}

export function getAllUseCaseSlugs(): Array<{ "use-case": string }> {
  return useCases.map((u) => ({ "use-case": u.slug }));
}
