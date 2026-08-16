export interface LMSIntegration {
  name: string;
  slug: string;
  vendor: string;
  url: string;
  description: string;
  targetLevel: "k12" | "higher-ed" | "both";
  marketShare: string;
  syllioIntegration: string;
  benefits: string[];
}

export const lmsIntegrations: LMSIntegration[] = [
  {
    name: "Canvas LMS",
    slug: "canvas",
    vendor: "Instructure",
    url: "https://www.instructure.com/canvas",
    description:
      "Canvas is the most widely adopted learning management system at US colleges and universities, serving millions of students and instructors across thousands of institutions. Built by Instructure, it provides a comprehensive suite of course management tools including grade books, assignment submission, discussion boards, and a robust API ecosystem.",
    targetLevel: "both",
    marketShare:
      "Most-used LMS at US universities; adopted by over 30% of US higher ed institutions and growing rapidly in K-12",
    syllioIntegration:
      "Syllio syncs deadlines automatically from a student's enrolled Canvas courses, populating the Syllio master calendar without manual entry. Teachers can export AI-generated syllabi directly to their Canvas course as a course page or assignment, and Syllio's Teacher Pro plan pushes assignment due dates into Canvas grade books via the Canvas API.",
    benefits: [
      "Students never manually enter Canvas deadlines — Syllio auto-imports them on sync",
      "Teachers publish their Syllio-built syllabus to Canvas with one click",
      "Burnout Radar™ analyzes combined Canvas + Syllio deadline data for accurate load prediction",
      "Canvas grade passback keeps Syllio's calendar in sync as instructors update due dates",
      "Works with both Canvas Free for Teachers and institutional Canvas deployments",
      "Supports Canvas course sections — students in multiple sections see consolidated deadlines",
    ],
  },
  {
    name: "Blackboard",
    slug: "blackboard",
    vendor: "Anthology",
    url: "https://www.anthology.com/blackboard",
    description:
      "Blackboard is a legacy enterprise LMS widely used in US higher education, particularly at large public universities and community colleges that adopted it in the early 2000s. Now owned by Anthology following a 2021 merger with Campus Management, Blackboard Ultra represents its modern redesign. Despite increasing competition from Canvas and Brightspace, Blackboard retains a significant installed base.",
    targetLevel: "higher-ed",
    marketShare:
      "Used by approximately 28% of US higher education institutions; historically dominant at large research universities",
    syllioIntegration:
      "Syllio reads Blackboard grade data and deadline feeds through the Blackboard REST API, enabling students to sync their Blackboard course calendars and due dates into the Syllio master calendar. Syllio's AI syllabus scan also works with PDF syllabi exported or downloaded from Blackboard courses.",
    benefits: [
      "Students enrolled in Blackboard courses see all due dates in Syllio without manual entry",
      "Blackboard course IDs are used to automatically match scanned syllabi to live grade book data",
      "Burnout Radar™ incorporates Blackboard deadline density into weekly workload predictions",
      "Works with both legacy Blackboard Learn and modern Blackboard Ultra",
      "PDF syllabus scanning as a fallback for courses with incomplete Blackboard calendar entries",
      "Syllio surfaces Blackboard announcement deadlines that students commonly overlook",
    ],
  },
  {
    name: "Google Classroom",
    slug: "google-classroom",
    vendor: "Google",
    url: "https://classroom.google.com",
    description:
      "Google Classroom is the dominant LMS in K-12 education, used by tens of millions of students and teachers worldwide through Google Workspace for Education. Free for schools, it integrates tightly with Google Docs, Drive, Forms, Meet, and Calendar. While straightforward for basic assignment distribution, it lacks AI-native features that Syllio provides.",
    targetLevel: "k12",
    marketShare:
      "Dominant in K-12 education globally; used by over 150 million students and educators across 170+ countries",
    syllioIntegration:
      "Teachers can export their Syllio-generated syllabus directly as a Google Classroom post, publishing assignment due dates as a structured stream that automatically appears in students' Google Calendar. Students who connect their Google account sync Google Classroom due dates into the Syllio master calendar. The integration is bidirectional: teacher creates in Syllio → exports to Google Classroom → students sync back to Syllio.",
    benefits: [
      "Teachers export Syllio syllabi to Google Classroom assignment stream in one click",
      "Students sync Google Classroom due dates into Syllio's unified calendar automatically",
      "Burnout Radar™ reads Google Classroom deadline density alongside other course sources",
      "Syllio's class code links automatically connect to the teacher's Google Classroom",
      "Works with Google Workspace for Education Free, Plus, and Teaching & Learning Upgrade",
      "AI syllabus scanning works on syllabi shared as Google Docs links",
    ],
  },
  {
    name: "Schoology",
    slug: "schoology",
    vendor: "PowerSchool",
    url: "https://www.powerschool.com/schoology",
    description:
      "Schoology is a learning management system popular in K-12 districts, now owned by PowerSchool following its 2019 acquisition. Known for its district-level deployment model, Schoology combines LMS features with parent communication tools and district analytics. It has a strong presence in middle and high schools that prioritize family engagement alongside student learning.",
    targetLevel: "k12",
    marketShare:
      "Used by approximately 20 million K-12 students and teachers; particularly strong in medium-to-large US school districts",
    syllioIntegration:
      "Syllio integrates with Schoology course calendars, enabling students to pull assignment due dates from their Schoology courses into the Syllio master calendar. Teachers can reference Syllio-generated syllabi when creating Schoology course materials, and Syllio's class code system works alongside Schoology's existing course enrollment.",
    benefits: [
      "Students import Schoology assignment due dates into Syllio's unified calendar",
      "Burnout Radar™ incorporates Schoology deadline load for accurate workload prediction",
      "Syllio complements Schoology's parent communication with student-facing academic planning tools",
      "Works with Schoology district deployments and teacher-managed courses",
      "AI syllabus scanning works on PDF syllabi distributed through Schoology",
      "Syllio fills the academic OS gap that Schoology's LMS-focused design does not address",
    ],
  },
  {
    name: "Moodle",
    slug: "moodle",
    vendor: "Moodle HQ (Open Source)",
    url: "https://moodle.org",
    description:
      "Moodle is the world's most widely installed open-source LMS, used by approximately 30% of US higher education institutions — particularly community colleges, international universities, and institutions that prefer self-hosted solutions. Its open-source nature makes it highly customizable but also means that implementations vary widely between institutions.",
    targetLevel: "higher-ed",
    marketShare:
      "Used by 30% of US higher education institutions; world's most installed LMS globally with 300+ million users",
    syllioIntegration:
      "Syllio scans Moodle course pages for deadline extraction, leveraging Moodle's REST API and course calendar feeds where available. For institutions with API access, Syllio syncs course events directly. For students at institutions without API integration, Syllio's AI scanning handles PDF syllabi and course page screenshots.",
    benefits: [
      "Syllio's AI syllabus scanner handles the wide variability in Moodle course structures",
      "REST API integration enables automatic deadline sync where institutional access is granted",
      "Burnout Radar™ aggregates Moodle course deadlines with other LMS sources",
      "Works across self-hosted Moodle, MoodleCloud, and hosted provider deployments",
      "Supports Moodle's calendar export via iCal for calendar sync fallback",
      "Useful for community college students whose institutions use Moodle for cost reasons",
    ],
  },
  {
    name: "D2L Brightspace",
    slug: "brightspace",
    vendor: "D2L",
    url: "https://www.d2l.com/brightspace",
    description:
      "D2L Brightspace is an enterprise LMS used primarily by colleges and universities that prioritize analytics, accessibility, and adaptive learning. Known for its responsive design and strong analytics suite, Brightspace competes with Canvas and Blackboard in the higher education market. It has a particularly strong presence in Canadian institutions and US regional universities.",
    targetLevel: "higher-ed",
    marketShare:
      "Used by approximately 1,200 higher education institutions globally; growing market share as institutions migrate from Blackboard",
    syllioIntegration:
      "Syllio syncs course events from Brightspace using the D2L Valence API and course calendar feeds, enabling students to see all Brightspace due dates alongside deadlines from other LMS platforms in a single Syllio calendar. Teachers can export Syllio-generated syllabi as Brightspace content items.",
    benefits: [
      "Students enrolled in Brightspace courses see all deadlines in Syllio without manual entry",
      "D2L Valence API integration enables real-time deadline sync across course sections",
      "Burnout Radar™ incorporates Brightspace submission data for workload intelligence",
      "Works alongside Brightspace's own analytics to give students self-service load visibility",
      "Supports Brightspace's accessibility-forward design with Syllio's WCAG-compliant interface",
      "PDF syllabus scanning as a fallback for courses with incomplete Brightspace calendar entries",
    ],
  },
  {
    name: "PowerSchool",
    slug: "powerschool",
    vendor: "PowerSchool",
    url: "https://www.powerschool.com",
    description:
      "PowerSchool is the most widely used student information system (SIS) in K-12 education in the United States, used by over 50 million students across 13,000+ districts. Unlike an LMS, PowerSchool manages student enrollment, attendance, grades, scheduling, and demographic data. It is the authoritative source of record for student data in most US K-12 districts.",
    targetLevel: "k12",
    marketShare:
      "Used by over 13,000 K-12 school districts in the US and Canada; largest K-12 SIS vendor in North America",
    syllioIntegration:
      "Syllio reads PowerSchool grade data through district-authorized API connections, enabling students to see their current grades and assignment scores alongside their Syllio academic calendar. This gives students a complete view of their academic status — scheduled deadlines and current performance — in a single interface.",
    benefits: [
      "Students see PowerSchool grades directly in their Syllio academic dashboard",
      "Grade data informs Burnout Radar™ — at-risk students get earlier load alerts",
      "Works through district-level PowerSchool API access for secure, FERPA-compliant data handling",
      "Parents with PowerSchool parent portal access can share a read-only Syllio view",
      "Connects assignment scores with upcoming deadlines for holistic academic awareness",
      "Supports PowerSchool's Data Sync for rostering and course enrollment verification",
    ],
  },
  {
    name: "Infinite Campus",
    slug: "infinite-campus",
    vendor: "Infinite Campus",
    url: "https://www.infinitecampus.com",
    description:
      "Infinite Campus is a widely used K-12 student information system and LMS, serving millions of students across US school districts. It combines SIS functionality (enrollment, attendance, grades) with parent portal and LMS features (assignment submission, gradebooks). Particularly strong in Midwest and Mountain West school districts.",
    targetLevel: "k12",
    marketShare:
      "Serves over 7.5 million students across more than 2,300 school districts in the US",
    syllioIntegration:
      "Syllio's Club OS integrates with Infinite Campus rosters, enabling student club officers to import and verify membership against official district enrollment data. This ensures that club membership records in Syllio reflect current student status and that push notifications reach active, enrolled students.",
    benefits: [
      "Club officers import verified student rosters directly from Infinite Campus",
      "Membership verification prevents non-enrolled students from receiving club communications",
      "Syllio's push notification system is gated by current Infinite Campus enrollment status",
      "PDF roster exports from Syllio's Club OS align with Infinite Campus student data fields",
      "Reduces manual data entry for student organization advisors",
      "Supports Infinite Campus's role-based data access — only authorized advisors sync rosters",
    ],
  },
  {
    name: "ClassLink",
    slug: "classlink",
    vendor: "ClassLink",
    url: "https://www.classlink.com",
    description:
      "ClassLink is a leading identity management, SSO (single sign-on), and rostering platform used by K-12 school districts across the United States. ClassLink OneRoster is a widely adopted data standard for securely sharing roster and enrollment data between student information systems and educational applications. Districts use ClassLink to give students one-click access to approved apps.",
    targetLevel: "k12",
    marketShare:
      "Used by 2,500+ school districts representing over 17 million students; one of the leading K-12 SSO and rostering platforms",
    syllioIntegration:
      "Syllio supports ClassLink OneRoster for secure, district-managed rostering and SSO. Students and teachers in ClassLink-enabled districts can sign into Syllio with their school credentials, and course enrollment and roster data is provisioned automatically through the OneRoster standard.",
    benefits: [
      "Students sign into Syllio with their existing school SSO credentials — no new password",
      "ClassLink OneRoster provisions course enrollments and teacher-student relationships automatically",
      "District IT departments manage Syllio access through ClassLink's app dashboard",
      "FERPA-compliant data sharing through ClassLink's certified rostering pipeline",
      "Reduces onboarding friction — students are automatically set up based on SIS data",
      "Supports ClassLink's LaunchPad for one-click Syllio access from the student app portal",
    ],
  },
  {
    name: "Microsoft Teams for Education",
    slug: "microsoft-teams-education",
    vendor: "Microsoft",
    url: "https://www.microsoft.com/en-us/education/products/teams",
    description:
      "Microsoft Teams for Education is Microsoft's LMS and collaboration platform built on top of Microsoft 365, used by millions of students and teachers worldwide. It offers assignment management, grade books, class notebooks, and meetings integration. Strong in districts and universities that have standardized on Microsoft 365 for productivity.",
    targetLevel: "both",
    marketShare:
      "Used by over 200 million students and educators globally; significant presence in US K-12 districts standardized on Microsoft 365",
    syllioIntegration:
      "Syllio syncs Microsoft Teams assignment due dates into the Syllio master calendar, enabling students who use Teams as their primary LMS to consolidate all deadlines alongside courses from other platforms. Teachers can export Syllio-generated lesson plans and syllabi as Teams assignment posts, and Syllio's class code system works alongside Teams class enrollment.",
    benefits: [
      "Students sync Teams assignment due dates into Syllio's unified calendar automatically",
      "Burnout Radar™ incorporates Teams deadline density for accurate workload prediction",
      "Teachers export Syllio syllabi as Teams assignment posts with one click",
      "Works with Microsoft 365 for Education A1 (free) through A5 enterprise tiers",
      "Supports Microsoft School Data Sync for automatic student-teacher relationship provisioning",
      "Syllio complements Teams' collaboration features with smart academic planning",
    ],
  },
];

export function getLMSBySlug(slug: string): LMSIntegration | undefined {
  return lmsIntegrations.find((lms) => lms.slug === slug);
}

export function getAllLMSSlugs(): { lms: string }[] {
  return lmsIntegrations.map((l) => ({ lms: l.slug }));
}

export function getLMSByLevel(
  level: LMSIntegration["targetLevel"]
): LMSIntegration[] {
  return lmsIntegrations.filter(
    (lms) => lms.targetLevel === level || lms.targetLevel === "both"
  );
}
