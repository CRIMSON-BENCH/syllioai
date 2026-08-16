import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Free, AI Pro, Teacher & School Plans | Syllio",
  description:
    "Syllio is free to start. AI Pro for students $4.99/mo. Teacher plans from $5.99/mo. Parent Portal $3.99/mo. College Counselor $24.99/mo. API from $99/mo.",
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Syllio Pricing",
  url: "https://www.syllioai.com/pricing",
  mainEntity: [
    { "@type": "Product", name: "Syllio Free", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio AI Pro Student", offers: { "@type": "Offer", price: "4.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio OS Student", offers: { "@type": "Offer", price: "9.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio Teacher Starter", offers: { "@type": "Offer", price: "5.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio Teacher Pro", offers: { "@type": "Offer", price: "11.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio Parent Portal", offers: { "@type": "Offer", price: "3.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio College Counselor", offers: { "@type": "Offer", price: "24.99", priceCurrency: "USD" } },
  ],
};

const studentPlans = [
  {
    id: "free",
    name: "Syllio",
    tagline: "For testing the waters",
    price: null,
    label: "Free",
    cta: "Start free",
    href: "https://syllioai.com/auth",
    highlight: false,
    features: [
      "Unified master calendar",
      "Join unlimited clubs",
      "Up to 2 syllabus scans / semester",
      "Manual task tracking",
      "Add to home screen (PWA)",
    ],
  },
  {
    id: "ai-pro",
    name: "AI Pro Student",
    tagline: "Academic automation",
    price: 4.99,
    annualPrice: 39.99,
    label: "$4.99",
    cta: "Get AI Pro",
    href: "https://syllioai.com/auth",
    highlight: true,
    badge: "Most popular",
    features: [
      "Everything in Free",
      "Unlimited AI syllabus scans",
      "LMS sync — Canvas, Blackboard, Google Classroom",
      "Burnout Radar™ — predictive load alerts",
    ],
  },
  {
    id: "os",
    name: "OS Student",
    tagline: "The Career Architect",
    price: 9.99,
    annualPrice: 79.99,
    label: "$9.99",
    cta: "Go OS",
    href: "https://syllioai.com/auth",
    highlight: false,
    features: [
      "Everything in AI Pro",
      "4-year automated portfolio (link-in-bio)",
      "Long-term goal & milestone tracking",
      "Verified club leadership badges",
      "Club Officer OS — mass push & PDF rosters",
      "Portfolio PDF export included",
    ],
  },
];

const teacherPlans = [
  {
    id: "teacher-starter",
    name: "Teacher Starter",
    tagline: "AI tools for educators",
    price: 5.99,
    annualPrice: 49.99,
    cta: "Start teaching",
    href: "https://syllioai.com/auth",
    highlight: false,
    badge: "New",
    vs: "vs. MagicSchool AI $8.33/mo",
    features: [
      "AI Syllabus Builder (unlimited)",
      "AI Lesson Planner (10/month)",
      "PDF & DOCX export",
      "Class code — students auto-import deadlines",
      "1 class",
    ],
  },
  {
    id: "teacher-pro",
    name: "Teacher Pro",
    tagline: "Your full AI classroom OS",
    price: 11.99,
    annualPrice: 99.99,
    cta: "Go Pro",
    href: "https://syllioai.com/auth",
    highlight: true,
    badge: "New",
    vs: "vs. TeachQuill $15–25/mo",
    features: [
      "Everything in Teacher Starter",
      "Unlimited lesson plans",
      "AI Assignment & Rubric Generator",
      "Canvas & Google Classroom export",
      "Unlimited classes",
      "Student join dashboard",
    ],
  },
  {
    id: "bundle",
    name: "Teacher + Student Bundle",
    tagline: "One plan, both sides of the room",
    price: 14.99,
    annualPrice: 119.99,
    cta: "Get the bundle",
    href: "https://syllioai.com/auth",
    highlight: false,
    badge: "New",
    features: [
      "Teacher Pro, included",
      "OS Student, included",
      "Perfect for homeschool families, tutors, and grad students who teach",
    ],
  },
];

const parentPlan = {
  price: 3.99,
  annualPrice: 34.99,
  features: [
    "Live view of your student's deadlines & calendar",
    "Burnout Radar™ weekly email digest",
    "Club activity & attendance summary",
    "Grade-period progress snapshots",
    "Opt-in nudge alerts ('big week coming')",
    "Links to 1 student account (+$1.99/mo per additional student)",
  ],
};

const counselorPlan = {
  price: 24.99,
  annualPrice: 214.99,
  features: [
    "Multi-student dashboard (up to 50 students)",
    "Read-only access to each student's 4-year portfolio",
    "Deadline & burnout alerts across your entire roster",
    "Portfolio review & annotation tools",
    "College readiness checklist per student",
    "Shareable progress reports for parents",
    "Priority support",
  ],
};

const apiPlans = [
  {
    name: "API Starter",
    price: 99,
    annualPrice: 990,
    badge: "New",
    highlight: false,
    features: [
      "Syllabus scanning API — 500 scans/month",
      "Deadline extraction + structured JSON output",
      "REST API + webhook support",
      "Full documentation & sandbox",
      "Standard SLA (99.5% uptime)",
    ],
  },
  {
    name: "API Pro",
    price: 299,
    annualPrice: 2990,
    badge: "New",
    highlight: true,
    features: [
      "Everything in API Starter",
      "5,000 scans/month",
      "Lesson plan generation endpoint",
      "White-label response headers",
      "Dedicated account manager",
      "Enterprise SLA (99.9% uptime)",
      "Custom volume pricing available",
    ],
  },
];

const institutionalPlans = [
  {
    name: "School Plan",
    tagline: "For departments and schools",
    price: 49.99,
    annualPrice: 449.99,
    seats: "5 teacher seats",
    features: [
      "5 teacher seats (Teacher Pro level)",
      "Student analytics dashboard",
      "Admin controls & bulk onboarding",
      "Parent Portal available as add-on",
      "Priority email support",
    ],
    cta: "Get School Plan",
  },
  {
    name: "District Plan",
    tagline: "Enterprise-scale education OS",
    price: 199,
    annualLabel: "Contact for annual pricing",
    seats: "25+ teacher seats",
    features: [
      "25+ teacher seats",
      "SAML SSO",
      "Custom branding",
      "Usage reports & analytics",
      "Priority support",
      "Parent Portal for all enrolled students",
    ],
    cta: "Contact sales",
    contactSales: true,
  },
];

const oneTimeProducts = [
  {
    name: "Syllabus Template Pack",
    desc: "100+ ready-to-use syllabi organized by subject — Math, English, Science, History, AP courses, and more.",
    price: "$4.99",
    cta: "Buy template pack",
  },
  {
    name: "Portfolio PDF Export",
    desc: "Download a college-ready PDF of your 4-year portfolio — clubs, leadership, volunteer hours, achievements.",
    price: "$4.99",
    cta: "Export portfolio",
    badge: "New",
  },
  {
    name: "Extra AI Scan Credits",
    desc: "30 additional AI syllabus scans for Free-tier students who need more without subscribing.",
    price: "$2.99",
    cta: "Buy scan credits",
  },
];

const comingSoon = [
  {
    name: "Tutoring Marketplace",
    desc: "Get matched with a tutor for your exact class at your exact school. Pay per session — no subscription required.",
    eta: "Coming soon",
  },
  {
    name: "Club Merch Store",
    desc: "Club officers design and sell merch for their members directly inside Syllio. Powered by print-on-demand — zero inventory.",
    eta: "Coming soon",
  },
  {
    name: "Study Aid Recommendations",
    desc: "When Burnout Radar fires on a specific subject, Syllio surfaces vetted study resources and tutoring options relevant to that course.",
    eta: "Coming soon",
  },
];

const comparisonRows = [
  { feature: "AI syllabus scan (students)", free: "2/semester", aiPro: "Unlimited", os: "Unlimited", teacherStarter: "—", teacherPro: "—" },
  { feature: "LMS sync (Canvas, Blackboard, GC)", free: "—", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "✓" },
  { feature: "Burnout Radar™", free: "—", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "Club OS + push notifications", free: "Join only", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "4-Year Portfolio", free: "—", aiPro: "—", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "Portfolio PDF export", free: "—", aiPro: "$4.99", os: "Included", teacherStarter: "—", teacherPro: "—" },
  { feature: "Verified club badges", free: "—", aiPro: "—", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "AI Syllabus Builder", free: "—", aiPro: "—", os: "—", teacherStarter: "Unlimited", teacherPro: "Unlimited" },
  { feature: "AI Lesson Planner", free: "—", aiPro: "—", os: "—", teacherStarter: "10/mo", teacherPro: "Unlimited" },
  { feature: "AI Assignment & Rubric Generator", free: "—", aiPro: "—", os: "—", teacherStarter: "—", teacherPro: "✓" },
  { feature: "Class code (students auto-import)", free: "—", aiPro: "—", os: "—", teacherStarter: "✓", teacherPro: "✓" },
  { feature: "LMS export (Canvas, GC)", free: "—", aiPro: "—", os: "—", teacherStarter: "—", teacherPro: "✓" },
  { feature: "Student join dashboard", free: "—", aiPro: "—", os: "—", teacherStarter: "—", teacherPro: "✓" },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <Nav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Pricing that grows with your GPA.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Start free. Upgrade when your semester gets real.
          </p>
          <p className="text-sm text-slate-400 mt-2">
            All paid plans include a 7-day free trial. Cancel anytime. Annual plans save ~2 months.
          </p>
        </div>

        {/* Student plans */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">For Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {studentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-violet-brand bg-violet-brand/5"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.badge && <span className="text-xs font-bold text-violet-brand mb-2">{plan.badge}</span>}
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{plan.tagline}</p>
              <div className="mb-1">
                <span className="text-3xl font-extrabold tracking-tight">
                  {plan.price ? `$${plan.price}` : "Free"}
                </span>
                {plan.price && <span className="text-slate-400 text-sm">/mo</span>}
              </div>
              {plan.annualPrice && (
                <p className="text-xs text-slate-400 mb-4">${plan.annualPrice}/yr (save 2 months)</p>
              )}
              <Link
                href={plan.href}
                className={`text-center text-sm font-semibold py-2.5 rounded-full mb-6 transition-colors ${
                  plan.highlight
                    ? "bg-violet-brand text-white hover:bg-violet-dark"
                    : "border border-slate-300 dark:border-slate-700 hover:border-violet-brand"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-teal-brand shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Teacher plans */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">For Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {teacherPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-teal-brand bg-teal-brand/5"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              <div className="flex gap-2 mb-1">
                {plan.badge && <span className="text-xs font-bold text-teal-brand">{plan.badge}</span>}
              </div>
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{plan.tagline}</p>
              {plan.vs && <p className="text-xs text-teal-brand mb-3">{plan.vs}</p>}
              <div className="mb-1">
                <span className="text-3xl font-extrabold tracking-tight">${plan.price}</span>
                <span className="text-slate-400 text-sm">/mo</span>
              </div>
              {plan.annualPrice && (
                <p className="text-xs text-slate-400 mb-4">${plan.annualPrice}/yr (save 2 months)</p>
              )}
              <Link
                href={plan.href}
                className={`text-center text-sm font-semibold py-2.5 rounded-full mb-6 transition-colors ${
                  plan.highlight
                    ? "bg-teal-brand text-slate-950 hover:opacity-90"
                    : "border border-slate-300 dark:border-slate-700 hover:border-teal-brand"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-teal-brand shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Parent Portal */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">For Parents</h2>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="text-xs font-bold text-violet-brand">New</span>
            <h3 className="text-xl font-bold mt-1 mb-1">Parent Portal</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Stay in the loop on your student&apos;s semester — without texting them every Sunday night. See their deadlines, burnout risk, and club activity in one private dashboard.
            </p>
            <div className="mb-1">
              <span className="text-3xl font-extrabold">${parentPlan.price}</span>
              <span className="text-slate-400 text-sm">/mo</span>
            </div>
            <p className="text-xs text-slate-400 mb-5">${parentPlan.annualPrice}/yr · Student must have a free or paid Syllio account</p>
            <Link
              href="https://syllioai.com/auth"
              className="inline-block text-sm font-semibold py-2.5 px-6 rounded-full bg-violet-brand text-white hover:bg-violet-dark transition-colors"
            >
              Add Parent Portal
            </Link>
          </div>
          <ul className="space-y-2.5">
            {parentPlan.features.map((f) => (
              <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                <span className="text-teal-brand shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* College Counselor */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">For College Counselors</h2>
        <div className="rounded-2xl border border-violet-brand/40 bg-violet-brand/5 p-6 mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="text-xs font-bold text-violet-brand">New — No one else does this</span>
            <h3 className="text-xl font-bold mt-1 mb-1">College Counselor</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Independent college counselors manage 20–50 students at once. Syllio gives you a single dashboard to track every student&apos;s portfolio, deadlines, and college readiness — without logging in and out of separate accounts.
            </p>
            <div className="mb-1">
              <span className="text-3xl font-extrabold">${counselorPlan.price}</span>
              <span className="text-slate-400 text-sm">/mo</span>
            </div>
            <p className="text-xs text-slate-400 mb-5">${counselorPlan.annualPrice}/yr · Up to 50 students</p>
            <Link
              href="https://syllioai.com/auth"
              className="inline-block text-sm font-semibold py-2.5 px-6 rounded-full bg-violet-brand text-white hover:bg-violet-dark transition-colors"
            >
              Start counselor trial
            </Link>
          </div>
          <ul className="space-y-2.5">
            {counselorPlan.features.map((f) => (
              <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                <span className="text-violet-brand shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Institutional */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">For Schools & Districts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {institutionalPlans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{plan.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-extrabold">${plan.price}</div>
                  <div className="text-xs text-slate-400">/mo</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {plan.annualLabel ?? `$${plan.annualPrice}/yr · ${plan.seats}`}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-teal-brand shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.contactSales ? "/contact" : "https://syllioai.com/auth"}
                className="block text-center text-sm font-semibold py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-violet-brand transition-colors"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* One-time products */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">One-Time Purchases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {oneTimeProducts.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  {p.badge && <span className="text-xs font-bold text-violet-brand block mb-1">{p.badge}</span>}
                  <h3 className="font-bold">{p.name}</h3>
                </div>
                <div className="text-2xl font-extrabold text-violet-brand shrink-0">{p.price}</div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{p.desc}</p>
              <Link
                href="https://syllioai.com/auth"
                className="text-sm font-semibold text-violet-brand hover:underline"
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* API & Developer */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">API & Developer Access</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 max-w-xl">
          Embed Syllio&apos;s syllabus scanning and lesson generation engine directly in your LMS, tutoring platform, or edtech product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {apiPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-teal-brand bg-teal-brand/5"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              <span className="text-xs font-bold text-teal-brand mb-1">{plan.badge}</span>
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-extrabold">${plan.price}</span>
                <span className="text-slate-400 text-sm">/mo</span>
              </div>
              <p className="text-xs text-slate-400 mb-5">${plan.annualPrice}/yr</p>
              <Link
                href="/contact"
                className={`text-center text-sm font-semibold py-2.5 rounded-full mb-6 transition-colors ${
                  plan.highlight
                    ? "bg-teal-brand text-slate-950 hover:opacity-90"
                    : "border border-slate-300 dark:border-slate-700 hover:border-teal-brand"
                }`}
              >
                Request API access
              </Link>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-teal-brand shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {comingSoon.map((item) => (
            <div key={item.name} className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{item.eta}</span>
              <h3 className="font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-extrabold tracking-tight mb-6">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mb-14">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <th className="text-left p-3 font-semibold text-slate-600 dark:text-slate-400 w-1/3">Feature</th>
                <th className="p-3 font-semibold text-slate-600 dark:text-slate-400 text-center">Free</th>
                <th className="p-3 font-semibold text-violet-brand text-center">AI Pro</th>
                <th className="p-3 font-semibold text-slate-600 dark:text-slate-400 text-center">OS</th>
                <th className="p-3 font-semibold text-teal-brand text-center">Teacher Starter</th>
                <th className="p-3 font-semibold text-teal-brand text-center">Teacher Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-slate-100 dark:border-slate-800 ${
                    i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-900/50"
                  }`}
                >
                  <td className="p-3 text-slate-700 dark:text-slate-300">{row.feature}</td>
                  <td className="p-3 text-center text-slate-400">{row.free}</td>
                  <td className="p-3 text-center font-medium">{row.aiPro}</td>
                  <td className="p-3 text-center text-slate-500">{row.os}</td>
                  <td className="p-3 text-center text-teal-brand">{row.teacherStarter}</td>
                  <td className="p-3 text-center text-teal-brand">{row.teacherPro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* vs competitors */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 mb-14">
          <h2 className="text-xl font-extrabold mb-6">How Syllio compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left p-3 font-semibold">Tool</th>
                  <th className="p-3 font-semibold text-center">Monthly price</th>
                  <th className="p-3 font-semibold text-center">Student side</th>
                  <th className="p-3 font-semibold text-center">Teacher side</th>
                  <th className="p-3 font-semibold text-center">Club OS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Syllio AI Pro", price: "$4.99", student: "✓", teacher: "—", club: "✓", highlight: true },
                  { name: "Syllio Teacher Pro", price: "$11.99", student: "—", teacher: "✓", club: "—", highlight: true },
                  { name: "MagicSchool AI", price: "$8.33–$12.99", student: "Limited", teacher: "✓", club: "—", highlight: false },
                  { name: "Semora", price: "$3.99", student: "✓", teacher: "—", club: "—", highlight: false },
                  { name: "TeachQuill", price: "$15–$25", student: "—", teacher: "✓", club: "—", highlight: false },
                  { name: "DormWay", price: "Free", student: "✓", teacher: "—", club: "—", highlight: false },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-slate-100 dark:border-slate-800 ${row.highlight ? "font-semibold" : ""}`}>
                    <td className={`p-3 ${row.highlight ? "text-violet-brand" : "text-slate-600 dark:text-slate-400"}`}>{row.name}</td>
                    <td className="p-3 text-center font-mono text-sm">{row.price}</td>
                    <td className="p-3 text-center">{row.student}</td>
                    <td className="p-3 text-center">{row.teacher}</td>
                    <td className="p-3 text-center">{row.club}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Prices as of 2026. See{" "}
            <Link href="/compare/magicschool-ai" className="text-violet-brand hover:underline">full MagicSchool AI comparison</Link>{" "}
            for details.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-extrabold tracking-tight mb-6">Pricing FAQ</h2>
        <dl className="space-y-5 mb-14">
          {[
            { q: "Can I switch plans at any time?", a: "Yes. Upgrade, downgrade, or cancel from your account portal at any time. Downgrades take effect at the end of your billing cycle." },
            { q: "Is there a free trial on paid plans?", a: "All paid plans include a 7-day free trial. No credit card required to start." },
            { q: "How does the Parent Portal work?", a: "A parent purchases the Parent Portal add-on and connects it to their student's Syllio account. The student approves the link. Parents get a private read-only dashboard — they can see deadlines and burnout alerts, but cannot modify anything in the student's account." },
            { q: "I'm a college counselor working with multiple students. Do they each need their own account?", a: "Yes — each student needs a free or paid Syllio account. The College Counselor plan gives you a single dashboard with read access across all your students. Students control what you can see and can revoke access at any time." },
            { q: "Do annual plans automatically renew?", a: "Yes, annual plans renew automatically. You can cancel before the renewal date in your account portal." },
            { q: "Can I get Syllio for my whole school?", a: "Yes. School Plans start at $49.99/month for 5 teacher seats. For districts with 25+ teachers, contact us for District pricing." },
            { q: "How does the API work?", a: "The API gives your platform access to Syllio's syllabus scanning and deadline extraction engine. Submit a PDF or image, receive structured JSON with extracted deadlines, assignments, and course metadata. Contact us at the link above to request access." },
            { q: "What happens to my data if I cancel?", a: "Your calendar and club data remain accessible for 30 days after cancellation. You can export everything at any time from your dashboard." },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <dt className="font-semibold mb-1.5">{faq.q}</dt>
              <dd className="text-sm text-slate-500 dark:text-slate-400">{faq.a}</dd>
            </div>
          ))}
        </dl>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">Ready to start?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Free forever for the basics.</p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-violet-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Create your free account
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
