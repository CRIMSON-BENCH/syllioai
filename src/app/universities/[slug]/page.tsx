import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getUniversityBySlug,
  getAllUniversitySlugs,
  getUniversitiesByState,
  type University,
} from "@/lib/universities";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllUniversitySlugs();
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  if (!university) return {};

  const title = `Syllio for ${university.name} Students — AI Syllabus Scanner | Syllio`;
  const description = `Scan your ${university.name} syllabus with Syllio AI and get every deadline in your calendar automatically. Free for ${university.name} students.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.syllioai.com/universities/${university.slug}`,
      siteName: "Syllio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://www.syllioai.com/universities/${university.slug}`,
    },
  };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function getRelatedUniversities(university: University): University[] {
  return getUniversitiesByState(university.stateSlug)
    .filter((u) => u.slug !== university.slug)
    .slice(0, 3);
}

function lmsLabel(type: University["type"]): string {
  if (type === "community-college") return "Canvas, Blackboard & Google Classroom";
  return "Canvas, Blackboard & Google Classroom";
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  if (!university) notFound();

  const relatedUniversities = getRelatedUniversities(university);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    url: "https://www.syllioai.com",
    applicationCategory: "EducationalApplication",
    description: `AI-powered syllabus scanner and student OS for ${university.name} students in ${university.city}, ${university.state}.`,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
    ],
    featureList: [
      "AI syllabus scan — photo to calendar",
      "Burnout Radar™ predictive load alerts",
      "Club OS — roster, attendance, mass push",
      "4-Year Portfolio — auto link-in-bio",
      `LMS sync — ${lmsLabel(university.type)}`,
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does Syllio work with ${university.name}'s LMS?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom — the LMS platforms commonly used at ${university.name}. On the AI Pro Student plan you can pull deadlines directly from your LMS without scanning a physical syllabus.`,
        },
      },
      {
        "@type": "Question",
        name: "How many syllabi can I scan for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syllio's free plan includes 2 AI syllabus scans per semester — enough to cover your core courses. Upgrade to AI Pro Student ($4.99/month) for unlimited scans and LMS sync.",
        },
      },
      {
        "@type": "Question",
        name: `Can my professor at ${university.name} use Syllio?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Absolutely. Teachers at ${university.name} can use Syllio's Teacher plan to build their syllabus with AI and share a class code. Students who join the class code auto-import every deadline instantly — no scanning required.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Syllio work for all ${university.name} majors?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio's AI syllabus scanner works with any course at ${university.name} — engineering, liberal arts, business, pre-med, law, and everything in between. It reads PDF syllabi, photos of printed syllabi, and digital course outlines.`,
        },
      },
    ],
  };

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Universities", href: "/universities" },
    { label: university.state, href: `/states/${university.stateSlug}` },
    { label: university.name },
  ];

  const steps = [
    {
      step: "1",
      title: "Snap or upload your syllabus",
      desc: `Take a photo of your printed ${university.name} syllabus or upload a PDF from your course portal.`,
    },
    {
      step: "2",
      title: "AI extracts every deadline",
      desc: "Syllio's AI reads every page and identifies exams, assignments, readings, quizzes, and office-hour reminders — no manual entry.",
    },
    {
      step: "3",
      title: "Your calendar fills itself",
      desc: "Every extracted date lands in your Syllio calendar with smart reminders. Burnout Radar warns you about high-load weeks in advance.",
    },
  ];

  const features = [
    {
      title: "AI Syllabus Scan",
      desc: `Photograph any ${university.name} syllabus. Syllio extracts every exam date, assignment deadline, and reading list item into your calendar in under 30 seconds.`,
      href: "/features/ai-syllabus-scan",
    },
    {
      title: "Burnout Radar™",
      desc: "Predicts high-workload weeks before they hit by analyzing deadlines across all your courses. Get a 7-day warning and time to rebalance.",
      href: "/features/burnout-radar",
    },
    {
      title: "Club OS",
      desc: `Manage your ${university.name} clubs, organizations, and Greek life from one place. Roster, attendance, mass push notifications — all built in.`,
      href: "/features/club-os",
    },
    {
      title: `LMS Sync (${lmsLabel(university.type)})`,
      desc: `Pull deadlines directly from ${university.name}'s learning management system on the AI Pro plan. No scanning required when your professor posts to the LMS.`,
      href: "/features/lms-sync",
    },
    {
      title: "4-Year Portfolio",
      desc: `Auto-builds a shareable link-in-bio of your ${university.name} clubs, leadership roles, and verified volunteer hours — ready for grad school or job applications.`,
      href: "/features/portfolio",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb crumbs={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-4">
            {university.city}, {university.state}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio for {university.name} Students
          </h1>
          <p className="text-xl font-semibold text-violet-light mb-3">
            Scan your {university.name} syllabus in 30 seconds.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Photograph your course syllabus — Syllio extracts every exam, assignment, and reading
            deadline into your personal calendar. Free for {university.name} students.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Start free — no credit card
            </Link>
            <Link
              href="/features/ai-syllabus-scan"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-white">
            Three steps, zero manual entry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <div className="w-9 h-9 rounded-full bg-violet-brand flex items-center justify-center text-white font-bold text-sm mb-4">
                  {s.step}
                </div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student features ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
          For {university.name} Students
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
          Every tool your semester demands.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
          Built for the pace of college life — multiple courses, overlapping deadlines,
          extracurriculars, and the ever-present risk of burning out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
            >
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Teacher section ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            For {university.name} Instructors
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
            Teaching at {university.name}? Build your syllabus in Syllio and share a class code.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Students join with a 6-character class code and auto-import every deadline — no
            scanning required. Pair the AI Syllabus Builder with the AI Lesson Planner to go
            from course outline to week-by-week plan in minutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "AI Syllabus Builder",
                desc: "Generate a complete, polished syllabus from your course details in under 60 seconds.",
                href: "/features/syllabus-builder",
              },
              {
                title: "AI Lesson Planner",
                desc: "Turn your syllabus into a week-by-week lesson plan. Export to Canvas or Google Classroom.",
                href: "/features/lesson-planner",
              },
              {
                title: "Class Code Import",
                desc: `Publish with a 6-digit code. ${university.name} students join and every deadline auto-populates their calendar.`,
                href: "/features/class-code",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
              >
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Create a teacher account — free
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: `Does Syllio work with ${university.name}'s LMS?`,
                a: `Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom — the platforms used at ${university.name}. On AI Pro Student you pull deadlines straight from your LMS with no scanning needed.`,
              },
              {
                q: "How many syllabi can I scan free?",
                a: "The free plan includes 2 AI syllabus scans per semester. For a full course load, AI Pro Student ($4.99/month) gives you unlimited scans, LMS sync, and Burnout Radar.",
              },
              {
                q: `Can my professor at ${university.name} use Syllio?`,
                a: `Yes. Instructors at ${university.name} on a Teacher plan build their syllabus in Syllio and share a class code. Students enter the code and every deadline appears instantly — zero scanning.`,
              },
              {
                q: `Does Syllio work for all ${university.name} majors?`,
                a: `Absolutely. Whether you are studying computer science, nursing, business, English, or engineering at ${university.name}, Syllio scans any course syllabus — PDF, photo, or digital document.`,
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border-b border-slate-200 dark:border-slate-800 pb-6"
              >
                <dt className="font-semibold mb-2">{faq.q}</dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Related universities ─────────────────────────────────────────────── */}
      {relatedUniversities.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold tracking-tight mb-6">
              Other {university.state} universities using Syllio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedUniversities.map((u) => (
                <Link
                  key={u.slug}
                  href={`/universities/${u.slug}`}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
                >
                  <p className="font-semibold text-sm">{u.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {u.city}, {u.state}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/states/${university.stateSlug}`}
                className="text-sm text-violet-brand hover:underline"
              >
                See all {university.state} universities
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Ready to scan your first {university.name} syllabus?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Free forever for the basics. Upgrade when you need unlimited scans
            and LMS sync.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Create your free account
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-950 px-4 py-6">
        <p className="max-w-4xl mx-auto text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-500">Disclaimer:</strong> Syllio is an independent
          productivity tool and is not affiliated with, endorsed by, or officially connected to{" "}
          {university.name} or any of its departments, colleges, or official systems. Course
          syllabi, deadlines, and academic requirements extracted by Syllio AI are for
          organizational reference only. Always verify dates and requirements against your
          official {university.name} course pages, your instructor, and the university registrar.
          Syllio content does not constitute official academic guidance.
        </p>
      </div>

      <Footer />
    </>
  );
}
