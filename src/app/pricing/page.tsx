import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Free, AI Pro, Teacher & School Plans | Syllio",
  description:
    "Syllio is free to start. AI Pro for students starts at $4.99/mo. Teacher plans from $5.99/mo — up to 52% cheaper than MagicSchool AI. School plans available.",
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Syllio Pricing",
  url: "https://www.syllioai.com/pricing",
  mainEntity: [
    { "@type": "Product", name: "Syllio Free", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio AI Pro Student", offers: { "@type": "Offer", price: "4.99", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/SubscriptionPrice", billingDuration: "P1M" } } },
    { "@type": "Product", name: "Syllio OS Student", offers: { "@type": "Offer", price: "9.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio Teacher Starter", offers: { "@type": "Offer", price: "5.99", priceCurrency: "USD" } },
    { "@type": "Product", name: "Syllio Teacher Pro", offers: { "@type": "Offer", price: "11.99", priceCurrency: "USD" } },
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
    label: "$5.99",
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
    label: "$11.99",
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
    label: "$14.99",
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

const institutionalPlans = [
  {
    name: "School Plan",
    tagline: "For departments and schools",
    price: 49.99,
    annualPrice: 449.99,
    seats: "5 teacher seats",
    features: ["5 teacher seats", "Student analytics dashboard", "Admin controls", "Bulk onboarding"],
    cta: "Get School Plan",
  },
  {
    name: "District Plan",
    tagline: "Enterprise-scale education OS",
    price: 199,
    annualLabel: "Contact for annual pricing",
    seats: "25+ teacher seats",
    features: ["25+ teacher seats", "SAML SSO", "Custom branding", "Usage reports & analytics", "Priority support"],
    cta: "Contact sales",
    contactSales: true,
  },
];

const comparisonRows = [
  { feature: "AI syllabus scan (students)", free: "2/semester", aiPro: "Unlimited", os: "Unlimited", teacherStarter: "—", teacherPro: "—" },
  { feature: "LMS sync (Canvas, Blackboard, GC)", free: "—", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "✓" },
  { feature: "Burnout Radar™", free: "—", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "Club OS + push notifications", free: "Join only", aiPro: "✓", os: "✓", teacherStarter: "—", teacherPro: "—" },
  { feature: "4-Year Portfolio", free: "—", aiPro: "—", os: "✓", teacherStarter: "—", teacherPro: "—" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
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
            All paid plans include a 7-day free trial. Cancel anytime.
            Annual plans save ~2 months.
          </p>
        </div>

        {/* Student plans */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          For Students
        </h2>
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
              {plan.badge && (
                <span className="text-xs font-bold text-violet-brand mb-2">{plan.badge}</span>
              )}
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{plan.tagline}</p>
              <div className="mb-1">
                <span className="text-3xl font-extrabold tracking-tight">
                  {plan.price ? `$${plan.price}` : "Free"}
                </span>
                {plan.price && (
                  <span className="text-slate-400 text-sm">/mo</span>
                )}
              </div>
              {plan.annualPrice && (
                <p className="text-xs text-slate-400 mb-4">
                  ${plan.annualPrice}/yr (save 2 months)
                </p>
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
                    <span className="text-green shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Teacher plans */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          For Teachers
        </h2>
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
                {plan.badge && (
                  <span className="text-xs font-bold text-teal-brand">{plan.badge}</span>
                )}
              </div>
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{plan.tagline}</p>
              {plan.vs && (
                <p className="text-xs text-green mb-3">{plan.vs}</p>
              )}
              <div className="mb-1">
                <span className="text-3xl font-extrabold tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-slate-400 text-sm">/mo</span>
              </div>
              {plan.annualPrice && (
                <p className="text-xs text-slate-400 mb-4">
                  ${plan.annualPrice}/yr (save 2 months)
                </p>
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
                    <span className="text-green shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Institutional */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          For Schools & Districts
        </h2>
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
                    <span className="text-green shrink-0">✓</span>
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
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          One-Time Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {[
            {
              name: "Syllabus Template Pack",
              desc: "100+ ready-to-use syllabi organized by subject — Math, English, Science, History, AP courses, and more.",
              price: "$4.99",
              cta: "Buy template pack",
            },
            {
              name: "Extra AI Scan Credits",
              desc: "30 additional AI syllabus scans for Free-tier students who need more without subscribing.",
              price: "$2.99",
              cta: "Buy scan credits",
            },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex gap-5 items-start">
              <div className="flex-1">
                <h3 className="font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{p.desc}</p>
                <Link
                  href="https://syllioai.com/auth"
                  className="text-sm font-semibold text-violet-brand hover:underline"
                >
                  {p.cta} →
                </Link>
              </div>
              <div className="text-2xl font-extrabold text-violet-brand shrink-0">{p.price}</div>
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
            { q: "Do annual plans automatically renew?", a: "Yes, annual plans renew automatically. You can cancel before the renewal date in your account portal." },
            { q: "Can I get Syllio for my whole school?", a: "Yes. School Plans start at $49.99/month for 5 teacher seats. For districts with 25+ teachers, contact us for District pricing." },
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
