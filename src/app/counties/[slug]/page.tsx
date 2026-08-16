import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getCountyBySlug,
  getAllCountySlugs,
  getCountiesByState,
  type County,
} from "@/lib/counties";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllCountySlugs();
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) return {};

  const title = `Syllio for ${county.name}, ${county.state} — AI Syllabus Scanner for Students & Teachers | Syllio`;
  const description = `Students and teachers across ${county.name}, ${county.state} use Syllio to scan syllabi with AI, build course plans, and manage extracurriculars.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.syllioai.com/counties/${county.slug}`,
      siteName: "Syllio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://www.syllioai.com/counties/${county.slug}`,
    },
  };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatPopulation(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return String(n);
}

function getRelatedCounties(county: County): County[] {
  return getCountiesByState(county.stateSlug)
    .filter((c) => c.slug !== county.slug)
    .slice(0, 3);
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function CountyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) notFound();

  const relatedCounties = getRelatedCounties(county);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    url: "https://www.syllioai.com",
    applicationCategory: "EducationalApplication",
    description: `AI-powered syllabus scanner and student OS serving students and teachers across ${county.name}, ${county.state}.`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: county.name,
      containedInPlace: {
        "@type": "State",
        name: county.state,
      },
    },
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
      { "@type": "Offer", price: "5.99", priceCurrency: "USD", name: "Teacher Starter" },
    ],
    featureList: [
      "AI syllabus scan — photo to calendar",
      "Burnout Radar™ predictive load alerts",
      "Club OS — roster, attendance, mass push",
      "4-Year Portfolio — auto link-in-bio",
      "AI Syllabus Builder for teachers",
      "Class code import — teacher to student in one click",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is Syllio free for students in ${county.name}, ${county.state}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever for students in ${county.name}. Paid plans start at $4.99/month.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Syllio work for K-12 schools in ${county.name} County?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio supports high school students and their teachers across ${county.name} County. The AI syllabus scan works with any structured course document, and teachers can share a class code so students auto-import every deadline.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Syllio work for college students near ${county.largestCity}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio is used by college students at universities in and around ${county.largestCity}. Students scan course syllabi, sync with Canvas or Blackboard, and build a 4-year portfolio of their extracurricular involvement.`,
        },
      },
      {
        "@type": "Question",
        name: "What LMS platforms does Syllio support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syllio syncs with Canvas, Blackboard, and Google Classroom on the student side. Teachers can export syllabi and lesson plans directly to Canvas and Google Classroom on the Teacher Pro plan.",
        },
      },
    ],
  };

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Counties", href: "/counties" },
    { label: county.state, href: `/states/${county.stateSlug}` },
    { label: county.name },
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
            {county.stateAbbr} · {county.largestCity} area
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio for {county.name} County, {county.state}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-brand inline-block" />
              Population {formatPopulation(county.population)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-light inline-block" />
              Largest city: {county.largestCity}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
              {county.state}
            </span>
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Students and teachers across {county.name} County — from K-12 classrooms to
            university lecture halls in the {county.largestCity} area — use Syllio to scan
            syllabi with AI, auto-import deadlines, and manage extracurriculars in one app.
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

      {/* ── K-12 section ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
          For K-12 Students & Teachers in {county.name} County
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
          The syllabus tool built for {county.largestCity}-area classrooms.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
          Whether you are a high schooler juggling AP courses or a teacher building a
          semester plan, Syllio handles the logistics so you can focus on learning and teaching.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              role: "Students",
              title: "AI Syllabus Scan",
              desc: `Photograph any course syllabus from your ${county.name} County school. Syllio extracts every exam, assignment, and deadline into your calendar in under 30 seconds.`,
              href: "/features/ai-syllabus-scan",
            },
            {
              role: "Students",
              title: "Burnout Radar™",
              desc: "See your workload weeks before it peaks. Burnout Radar flags high-load stretches so you can plan study time before you are overwhelmed.",
              href: "/features/burnout-radar",
            },
            {
              role: "Students",
              title: "Club OS & Portfolio",
              desc: `Manage every club, team, and activity at your ${county.name} County school. Build a verified portfolio of leadership roles and volunteer hours for college apps.`,
              href: "/features/club-os",
            },
            {
              role: "Teachers",
              title: "AI Syllabus Builder + Class Code",
              desc: `Build a full syllabus in under 60 seconds, publish it with a class code, and students in your ${county.name} County class auto-import every deadline instantly.`,
              href: "/features/syllabus-builder",
            },
          ].map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-brand mb-2">
                {f.role}
              </span>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── College students ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            For College Students Near {county.largestCity}
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
            Scan your university syllabus in 30 seconds.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            College students near {county.largestCity} use Syllio to photograph their course
            syllabi, sync with Canvas and Blackboard, and track every deadline across a full
            course load — without a single spreadsheet. The 4-Year Portfolio auto-builds a
            shareable record of clubs, honors, and leadership roles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { stat: "30 seconds", label: "to extract every deadline from a syllabus" },
              { stat: "5+ classes", label: "unified in one calendar view" },
              { stat: "Free forever", label: "for 2 scans per semester" },
            ].map((s) => (
              <div
                key={s.stat}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 text-center"
              >
                <p className="text-xl font-extrabold text-violet-brand mb-1">{s.stat}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors text-sm"
          >
            Start free — college students
          </Link>
        </div>
      </section>

      {/* ── The closed loop ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
            The Closed Loop
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-balance">
            When teachers in {county.name} County use Syllio, their students never scan again.
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Teachers at {county.name} County schools publish their syllabus with a class code
              — students join and every deadline auto-populates. No scanning required. Every
              student starts the semester organized before day one.
            </p>
            <Link
              href="/features/class-code"
              className="text-sm text-violet-brand hover:underline"
            >
              Learn about the class code system
            </Link>
          </div>
        </div>
      </section>

      {/* ── Districts note ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Schools & Districts in {county.name} County
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            Syllio is serving students and educators across {county.name} County including{" "}
            {county.largestCity} area schools and surrounding districts. Teachers across the
            county use Syllio to build syllabi with AI and share class codes — students join
            and every deadline appears in their calendar instantly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/states/${county.stateSlug}`}
              className="text-sm text-violet-brand hover:underline"
            >
              See all {county.state} schools and districts
            </Link>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <Link
              href="/districts"
              className="text-sm text-violet-brand hover:underline"
            >
              Browse all districts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related counties ─────────────────────────────────────────────────── */}
      {relatedCounties.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold tracking-tight mb-6">
              Other {county.state} counties using Syllio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/counties/${c.slug}`}
                  className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
                >
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {c.largestCity} · Pop. {formatPopulation(c.population)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: `Is Syllio free for students in ${county.name}, ${county.state}?`,
                a: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever for students in ${county.name} County. Paid plans start at $4.99/month for students.`,
              },
              {
                q: `Does Syllio work for K-12 schools in ${county.name} County?`,
                a: `Yes. Syllio supports high school students and teachers across ${county.name} County. The AI scan works with any structured course document, and teachers can share a class code so students auto-import every deadline.`,
              },
              {
                q: `Does Syllio work for college students near ${county.largestCity}?`,
                a: `Yes. College students near ${county.largestCity} use Syllio to photograph course syllabi, sync with Canvas and Blackboard, and build a 4-year portfolio of extracurricular involvement.`,
              },
              {
                q: "What LMS platforms does Syllio support?",
                a: "Syllio syncs with Canvas, Blackboard, and Google Classroom. Teachers can export directly to Canvas and Google Classroom on the Teacher Pro plan.",
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

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Join {county.largestCity}-area students and teachers on Syllio.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Free to start. No credit card. Scan your first syllabus in under two minutes.
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
          {county.name} County, {county.state}, any school district, school, or government entity
          in the county. Course syllabi and deadlines extracted by Syllio AI are for
          organizational reference only. Always verify academic requirements against official
          school communications and your institution&apos;s published resources. Syllio content
          does not constitute official academic or governmental guidance.
        </p>
      </div>

      <Footer />
    </>
  );
}
