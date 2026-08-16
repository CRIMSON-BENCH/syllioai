import Link from "next/link";

type Variant = "student" | "teacher" | "k12-parent" | "counselor" | "district" | "api";

interface Props {
  variant: Variant;
  className?: string;
}

interface Item {
  icon: string;
  title: string;
  price: string;
  desc: string;
  href: string;
  cta: string;
  accent: "violet" | "teal" | "amber";
}

const STRIPS: Record<Variant, { headline: string; items: Item[] }> = {
  student: {
    headline: "Level up your semester",
    items: [
      {
        icon: "⚡",
        title: "AI Pro Student",
        price: "$4.99/mo",
        desc: "Unlimited syllabus scans + LMS sync + Burnout Radar™",
        href: "/pricing",
        cta: "Upgrade",
        accent: "violet",
      },
      {
        icon: "🎓",
        title: "OS Student + Portfolio PDF",
        price: "$9.99/mo",
        desc: "4-Year Portfolio, verified badges, and one-click PDF export for college apps",
        href: "/pricing",
        cta: "Go OS",
        accent: "violet",
      },
      {
        icon: "📚",
        title: "Find a Tutor",
        price: "Per session",
        desc: "Get matched with a tutor who knows your class and your syllabus",
        href: "/tutors",
        cta: "Join waitlist",
        accent: "teal",
      },
    ],
  },
  teacher: {
    headline: "Save hours every week",
    items: [
      {
        icon: "✏️",
        title: "Teacher Starter",
        price: "$5.99/mo",
        desc: "AI Syllabus Builder + PDF export + class code sharing",
        href: "/pricing",
        cta: "Start free trial",
        accent: "teal",
      },
      {
        icon: "🚀",
        title: "Teacher Pro",
        price: "$11.99/mo",
        desc: "Unlimited lesson plans, AI rubric generator, Canvas & Google Classroom export",
        href: "/pricing",
        cta: "Go Pro",
        accent: "teal",
      },
      {
        icon: "🏫",
        title: "School Plan",
        price: "$49.99/mo",
        desc: "5 teacher seats + admin dashboard + bulk onboarding for your whole department",
        href: "/pricing",
        cta: "Get school plan",
        accent: "violet",
      },
    ],
  },
  "k12-parent": {
    headline: "For parents, counselors & admins",
    items: [
      {
        icon: "👨‍👩‍👧",
        title: "Parent Portal",
        price: "$3.99/mo",
        desc: "See your student's deadlines, burnout score & club activity — without texting them",
        href: "/pricing",
        cta: "Add Parent Portal",
        accent: "violet",
      },
      {
        icon: "🏫",
        title: "School Plan",
        price: "$49.99/mo",
        desc: "5 teacher seats, admin controls, student analytics — for departments and campuses",
        href: "/pricing",
        cta: "Get school plan",
        accent: "teal",
      },
      {
        icon: "🏢",
        title: "District Plan",
        price: "$199/mo",
        desc: "25+ teacher seats, SAML SSO, custom branding — enterprise-scale education OS",
        href: "/pricing",
        cta: "Contact sales",
        accent: "violet",
      },
    ],
  },
  counselor: {
    headline: "For college counselors & advisors",
    items: [
      {
        icon: "🗂️",
        title: "College Counselor",
        price: "$24.99/mo",
        desc: "Multi-student dashboard for up to 50 students — portfolios, burnout alerts, progress reports",
        href: "/pricing",
        cta: "Start counselor trial",
        accent: "violet",
      },
      {
        icon: "📄",
        title: "Portfolio PDF Export",
        price: "$4.99 one-time",
        desc: "Download any student's 4-year portfolio as a formatted, college-ready PDF",
        href: "/pricing",
        cta: "Export portfolio",
        accent: "teal",
      },
      {
        icon: "⚡",
        title: "AI Pro for Your Students",
        price: "$4.99/student/mo",
        desc: "Unlimited AI scans, Burnout Radar™, and LMS sync for the students you advise",
        href: "/pricing",
        cta: "See student plans",
        accent: "violet",
      },
    ],
  },
  district: {
    headline: "For school and district leaders",
    items: [
      {
        icon: "🏫",
        title: "School Plan",
        price: "$49.99/mo",
        desc: "5 teacher seats (Teacher Pro level) + student analytics + admin controls",
        href: "/pricing",
        cta: "Get school plan",
        accent: "teal",
      },
      {
        icon: "🏢",
        title: "District Plan",
        price: "$199/mo",
        desc: "25+ teacher seats, SAML SSO, custom branding, priority support",
        href: "/pricing",
        cta: "Contact sales",
        accent: "violet",
      },
      {
        icon: "👨‍👩‍👧",
        title: "Parent Portal",
        price: "$3.99/parent/mo",
        desc: "Optional add-on: parents see deadlines, burnout score & club activity",
        href: "/pricing",
        cta: "Learn more",
        accent: "violet",
      },
    ],
  },
  api: {
    headline: "For developers & edtech platforms",
    items: [
      {
        icon: "⚙️",
        title: "API Starter",
        price: "$99/mo",
        desc: "500 syllabus scans/month — deadline extraction, structured JSON, REST + webhooks",
        href: "/pricing",
        cta: "Request access",
        accent: "teal",
      },
      {
        icon: "🔌",
        title: "API Pro",
        price: "$299/mo",
        desc: "5,000 scans/month, lesson plan generation endpoint, white-label headers, 99.9% SLA",
        href: "/pricing",
        cta: "Request access",
        accent: "teal",
      },
      {
        icon: "🚀",
        title: "Teacher Pro",
        price: "$11.99/mo",
        desc: "Full AI classroom OS for individual educators — works alongside your LMS",
        href: "/pricing",
        cta: "See teacher plans",
        accent: "violet",
      },
    ],
  },
};

export default function MonetizationStrip({ variant, className = "" }: Props) {
  const { headline, items } = STRIPS[variant];
  return (
    <section className={`my-10 ${className}`}>
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
        {headline}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col hover:border-violet-brand transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{item.icon}</span>
              <span className="font-bold text-sm">{item.title}</span>
            </div>
            <span
              className={`text-xs font-bold mb-2 ${
                item.accent === "teal" ? "text-teal-brand" : "text-violet-brand"
              }`}
            >
              {item.price}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
              {item.desc}
            </p>
            <Link
              href={item.href}
              className={`text-xs font-semibold text-center py-2 rounded-full transition-colors ${
                item.accent === "teal"
                  ? "bg-teal-brand text-slate-950 hover:opacity-90"
                  : "bg-violet-brand text-white hover:bg-violet-dark"
              }`}
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
