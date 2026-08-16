import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getCompetitorBySlug,
  getAllCompetitorSlugs,
  Competitor,
} from "@/lib/competitors";

export function generateStaticParams() {
  return getAllCompetitorSlugs();
}

type Props = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const competitor = getCompetitorBySlug(slug);
  if (!competitor) return { title: "Comparison Not Found" };

  return {
    title: `Syllio vs ${competitor.name} — Which is Better? | Syllio`,
    description: `Compare Syllio and ${competitor.name} side by side. See feature differences, pricing, and why thousands of students and teachers choose Syllio over ${competitor.name}.`,
    openGraph: {
      title: `Syllio vs ${competitor.name} | Syllio`,
      description: `Full comparison: Syllio vs ${competitor.name} — features, pricing, and which is the right academic OS for students and teachers.`,
      url: `https://www.syllioai.com/compare/${competitor.slug}`,
    },
    alternates: {
      canonical: `https://www.syllioai.com/compare/${competitor.slug}`,
    },
  };
}

interface FeatureRow {
  label: string;
  syllio: boolean | string;
  competitor: (c: Competitor) => boolean | string;
}

const FEATURE_ROWS: FeatureRow[] = [
  {
    label: "Student syllabus scanning",
    syllio: true,
    competitor: (c) =>
      ["semora", "dormway"].includes(c.slug) ? true : false,
  },
  {
    label: "Teacher syllabus builder",
    syllio: true,
    competitor: (c) =>
      ["magicschool-ai", "teachquill", "education-copilot", "coursebox-ai"].includes(c.slug)
        ? true
        : false,
  },
  {
    label: "AI lesson planner",
    syllio: true,
    competitor: (c) =>
      ["magicschool-ai", "teachquill", "education-copilot", "coursebox-ai"].includes(c.slug)
        ? true
        : false,
  },
  {
    label: "Club management",
    syllio: true,
    competitor: () => false,
  },
  {
    label: "Portfolio tracking",
    syllio: true,
    competitor: (c) => (c.slug === "canvas-lms" ? "Basic ePortfolio" : false),
  },
  {
    label: "Burnout alerts",
    syllio: true,
    competitor: () => false,
  },
  {
    label: "LMS sync",
    syllio: true,
    competitor: (c) =>
      ["google-classroom", "canvas-lms"].includes(c.slug) ? "Native LMS" : false,
  },
  {
    label: "Class code import",
    syllio: true,
    competitor: (c) =>
      ["google-classroom", "canvas-lms"].includes(c.slug) ? "Enrollment codes" : false,
  },
  {
    label: "International curriculum",
    syllio: true,
    competitor: (c) =>
      ["google-classroom", "canvas-lms"].includes(c.slug) ? true : false,
  },
  {
    label: "Free plan",
    syllio: "Yes — forever",
    competitor: (c) => {
      if (!c.pricing.free) return false;
      if (c.pricing.notes?.toLowerCase().includes("credit")) return "Credit-limited";
      return true;
    },
  },
  {
    label: "Starting price",
    syllio: "$0 / free forever",
    competitor: (c) => {
      if (c.pricing.annualPrice) return `$${c.pricing.annualPrice}/mo (annual)`;
      if (c.pricing.monthlyPrice) return `$${c.pricing.monthlyPrice}/mo`;
      if (c.pricing.free && !c.pricing.monthlyPrice && !c.pricing.annualPrice)
        return "Free (pricing not public)";
      return "Not publicly listed";
    },
  },
];

const FAQS: Array<{ q: string; a: (c: Competitor) => string }> = [
  {
    q: "What is the biggest difference between Syllio and {name}?",
    a: (c) =>
      c.syllioDifference[0] ??
      `Syllio is a full academic OS for both students and teachers. ${c.name} focuses on a narrower set of tools.`,
  },
  {
    q: "Does {name} have AI syllabus scanning for students?",
    a: (c) => {
      const hasScanning = ["semora", "dormway"].includes(c.slug);
      return hasScanning
        ? `${c.name} does offer some syllabus scanning, but lacks the teacher-side tools, LMS sync, club management, and portfolio features that Syllio provides as a complete academic OS.`
        : `No — ${c.name} does not have student-facing AI syllabus scanning. Syllio's AI scan converts any syllabus (photo or PDF) into a structured calendar in under 30 seconds.`;
    },
  },
  {
    q: "Is Syllio more expensive than {name}?",
    a: (c) => {
      const price = c.pricing.annualPrice ?? c.pricing.monthlyPrice;
      if (!price) {
        return `Syllio's free plan is genuinely free forever. Paid plans start at $4.99/month for students and $5.99/month for teachers. ${c.name}'s pricing is ${c.pricing.notes ?? "not publicly listed"}.`;
      }
      return `Syllio's free plan costs nothing forever. Paid student plans start at $4.99/month. ${c.name} starts at $${price}/month but covers only a fraction of what Syllio provides — no club management, no portfolio, no burnout alerts.`;
    },
  },
  {
    q: "Can I use Syllio alongside {name}?",
    a: (c) => {
      if (["google-classroom", "canvas-lms"].includes(c.slug)) {
        return `Yes — Syllio is designed to complement ${c.name}, not replace it. Syllio's LMS sync pulls your ${c.name} deadlines automatically, and Teacher Pro exports Syllio-built syllabi directly to ${c.name}. They work together.`;
      }
      return `In most cases, yes. Syllio can serve as your primary academic planning OS while you use ${c.name} for its specific strengths. However, most users who switch to Syllio find it replaces ${c.name} entirely for their use case.`;
    },
  },
];

function FeatureCheck({ value }: { value: boolean | string }) {
  if (value === true || (typeof value === "string" && value !== "false")) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-green font-bold text-base" aria-label="Yes">
          ✓
        </span>
        {typeof value === "string" && value !== "true" && (
          <span className="ml-1.5 text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            {value}
          </span>
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <span className="text-red font-bold text-base" aria-label="No">
        ✗
      </span>
    </div>
  );
}

function buildJsonLd(competitor: Competitor) {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Syllio vs ${competitor.name}`,
    url: `https://www.syllioai.com/compare/${competitor.slug}`,
    description: `Side-by-side comparison of Syllio and ${competitor.name} — features, pricing, and key differences.`,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q.replace("{name}", competitor.name),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a(competitor),
      },
    })),
  };

  return [webPage, faqPage];
}

export default async function CompareCompetitorPage({ params }: Props) {
  const { competitor: slug } = await params;
  const competitor = getCompetitorBySlug(slug);

  if (!competitor) notFound();

  const jsonLds = buildJsonLd(competitor);

  return (
    <>
      {jsonLds.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Compare", href: "/compare" },
              { label: `Syllio vs ${competitor.name}` },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Comparison
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio vs {competitor.name}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-3">
            {competitor.tagline}
          </p>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            A full, side-by-side look at how Syllio compares to {competitor.name} — features, pricing, and which platform
            delivers more for students and teachers.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight mb-8">
          Feature Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left py-4 px-5 font-semibold text-slate-300 w-1/2">
                  Feature
                </th>
                <th className="text-center py-4 px-5 font-extrabold text-violet-brand w-1/4">
                  Syllio
                </th>
                <th className="text-center py-4 px-5 font-semibold text-slate-300 w-1/4">
                  {competitor.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row, i) => {
                const compValue = row.competitor(competitor);
                return (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-slate-950"
                        : "bg-slate-50 dark:bg-slate-900"
                    }
                  >
                    <td className="py-3.5 px-5 font-medium text-slate-700 dark:text-slate-300">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <FeatureCheck value={row.syllio} />
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <FeatureCheck value={compValue} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-slate-50 dark:bg-slate-900 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-8">
            Pricing Comparison
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Syllio pricing */}
            <div className="bg-white dark:bg-slate-950 border-2 border-violet-brand rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-extrabold text-violet-brand">Syllio</span>
                <span className="text-xs font-semibold bg-violet-brand/10 text-violet-brand px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-green font-bold">✓</span>
                  <strong className="text-slate-800 dark:text-slate-200">Free forever</strong> — calendar, 2 AI scans/semester, clubs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green font-bold">✓</span>
                  <strong className="text-slate-800 dark:text-slate-200">AI Pro Student — $4.99/mo</strong> — unlimited scans, LMS sync, Burnout Radar™
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green font-bold">✓</span>
                  <strong className="text-slate-800 dark:text-slate-200">OS Student — $9.99/mo</strong> — everything + 4-year portfolio
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green font-bold">✓</span>
                  <strong className="text-slate-800 dark:text-slate-200">Teacher Starter — $5.99/mo</strong> — AI syllabus builder
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green font-bold">✓</span>
                  <strong className="text-slate-800 dark:text-slate-200">Teacher Pro — $11.99/mo</strong> — full AI suite + LMS export
                </li>
              </ul>
            </div>

            {/* Competitor pricing */}
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-extrabold text-slate-700 dark:text-slate-300">
                  {competitor.name}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {competitor.pricing.notes ?? "Pricing not publicly disclosed."}
              </p>
              <div className="mt-4 flex items-center gap-2">
                {competitor.pricing.free ? (
                  <span className="text-xs font-semibold bg-green-bg text-green px-2.5 py-1 rounded-full">
                    Free tier available
                  </span>
                ) : (
                  <span className="text-xs font-semibold bg-red/10 text-red px-2.5 py-1 rounded-full">
                    No free tier
                  </span>
                )}
                {competitor.pricing.enterprise && (
                  <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 px-2.5 py-1 rounded-full">
                    Enterprise available
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why teams switch */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight mb-3">
          Why students and teachers switch to Syllio from {competitor.name}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
          Here&apos;s what makes Syllio different — in the words of the features that matter most.
        </p>
        <ul className="space-y-4">
          {competitor.syllioDifference.map((diff, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-violet-brand font-bold mt-0.5 shrink-0">✓</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {diff}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 dark:bg-slate-900 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-7">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-slate-200 dark:border-slate-800 pb-7"
              >
                <dt className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {faq.q.replace("{name}", competitor.name)}
                </dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {faq.a(competitor)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Ready to switch?
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Try the full academic OS — free
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            No credit card. No commitment. Start with a free account and see
            exactly why Syllio outperforms {competitor.name} for students and
            teachers.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <strong className="text-slate-500">Disclaimer:</strong> Pricing, features, and product
          capabilities for {competitor.name} are based on publicly available information at the
          time of writing and may have changed. Syllio makes no warranties about the accuracy of
          third-party product details. Visit{" "}
          <a
            href={competitor.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-violet-brand"
          >
            {competitor.url}
          </a>{" "}
          for the most current information. This page is for informational purposes only and does
          not constitute endorsement of or disparagement against any third-party product.
        </p>
      </div>

      <Footer />
    </>
  );
}
