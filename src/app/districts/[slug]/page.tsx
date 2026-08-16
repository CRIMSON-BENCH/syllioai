import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getDistrictBySlug,
  getAllDistrictSlugs,
  type SchoolDistrict,
} from "@/lib/districts";
import { getSchoolsByDistrict } from "@/lib/k12schools";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllDistrictSlugs();
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) return {};

  const title = `Syllio for ${district.name} — AI Syllabus Tools for Students & Teachers | Syllio`;
  const description = `Students and teachers in ${district.name} use Syllio AI to scan syllabi, build course plans, and manage clubs. Free to start.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.syllioai.com/districts/${district.slug}`,
      siteName: "Syllio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://www.syllioai.com/districts/${district.slug}`,
    },
  };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatEnrollment(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : String(n);
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  const schools = getSchoolsByDistrict(district.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    url: "https://www.syllioai.com",
    applicationCategory: "EducationalApplication",
    description: `AI-powered syllabus scanner and student OS for students and teachers in ${district.name}, ${district.city}, ${district.state}.`,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
      { "@type": "Offer", price: "5.99", priceCurrency: "USD", name: "Teacher Starter" },
    ],
    featureList: [
      "AI syllabus scan — photo to calendar",
      "AI Syllabus Builder for teachers",
      "Class code import — teacher to student in one click",
      "Burnout Radar™ predictive load alerts",
      "Club OS — roster, attendance, mass push",
      "4-Year Portfolio — shareable extracurricular record",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is Syllio free for ${district.name} students?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever for students in ${district.name}. Paid plans start at $4.99/month for unlimited scans.`,
        },
      },
      {
        "@type": "Question",
        name: `Can teachers at ${district.name} schools use Syllio?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Teachers in ${district.name} use Syllio's Teacher plans to build syllabi with AI and share a class code. Students join the code and every deadline auto-populates their calendar — no scanning required.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Syllio work with Canvas or Google Classroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom on the student side. Teachers on Teacher Pro can export syllabi directly to Canvas and Google Classroom.",
        },
      },
      {
        "@type": "Question",
        name: `Does Syllio work for middle school students in ${district.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Syllio is designed primarily for high school and college students, though middle school students in ${district.name} can use the calendar and club features. The AI syllabus scan works with any structured course document.`,
        },
      },
    ],
  };

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Districts", href: "/districts" },
    { label: district.state, href: `/states/${district.stateSlug}` },
    { label: district.name },
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
            {district.city}, {district.state}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio for {district.name}
          </h1>
          <p className="text-xl font-semibold text-violet-light mb-3">
            The AI syllabus tool for {district.city} students and teachers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-brand inline-block" />
              {formatEnrollment(district.enrollment)} students enrolled
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-light inline-block" />
              {district.schoolCount} schools
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
              {district.city}, {district.state}
            </span>
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Students and teachers across {district.name}&apos;s {district.schoolCount} schools
            use Syllio to scan syllabi with AI, auto-import deadlines, build polished course
            plans, and manage clubs and extracurriculars — all in one free app.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Start free — students & teachers
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── For students ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
          For Students in {district.name}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
          Every deadline. One calendar. Zero manual entry.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
          Juggling five classes, two clubs, and a part-time job? Syllio keeps your semester
          organized so you can focus on learning, not logistics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: "AI Syllabus Scan",
              desc: `Photograph any course syllabus from your ${district.name} school and Syllio extracts every assignment, quiz, and exam date into your calendar — in under 30 seconds.`,
              href: "/features/ai-syllabus-scan",
            },
            {
              title: "Burnout Radar™",
              desc: "See your workload curve before it peaks. Burnout Radar flags weeks with overlapping deadlines and gives you time to reschedule or ask for help.",
              href: "/features/burnout-radar",
            },
            {
              title: "Club OS",
              desc: "Join and manage clubs at your school. Club leaders can track attendance, send mass push notifications, and schedule events — all inside Syllio.",
              href: "/features/club-os",
            },
            {
              title: "4-Year Portfolio",
              desc: "Build a verified, shareable record of your clubs, leadership roles, and volunteer hours — automatically — starting freshman year.",
              href: "/features/portfolio",
            },
          ].map((f) => (
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

      {/* ── For teachers ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            For Teachers in {district.name}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
            Build your syllabus. Share a code. Students auto-import everything.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Syllio&apos;s Teacher plans give {district.name} educators an AI-powered syllabus
            builder, a lesson planner, and the class code system — so students never have to
            manually enter a deadline again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "AI Syllabus Builder",
                desc: "Generate a complete syllabus from your course details in under 60 seconds. Edit, customize, and export to PDF or your LMS.",
                href: "/features/syllabus-builder",
              },
              {
                title: "AI Lesson Planner",
                desc: "Turn your syllabus into a week-by-week lesson plan. Add activities, adjust pacing, and export to Canvas or Google Classroom.",
                href: "/features/lesson-planner",
              },
              {
                title: "Class Code Import",
                desc: `Publish your syllabus with a 6-character code. Students in your ${district.name} class join and every deadline auto-populates their Syllio calendar.`,
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
            href="https://app.syllioai.com/auth"
            className="inline-block bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Create a teacher account — free
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
            When teachers and students both use Syllio, no one ever scans a syllabus again.
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <ol className="space-y-6">
              {[
                {
                  n: "1",
                  text: `Teachers at ${district.name} schools build their syllabus using Syllio's AI Syllabus Builder.`,
                },
                {
                  n: "2",
                  text: "They publish it and share a 6-character class code with the class.",
                },
                {
                  n: "3",
                  text: "Students enter the code in Syllio — every deadline auto-populates their calendar instantly.",
                },
                {
                  n: "4",
                  text: "Zero scanning. Zero manual entry. Every student starts the semester organized.",
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-violet-brand text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {step.n}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Schools ──────────────────────────────────────────────────────────── */}
      {schools.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold tracking-tight mb-6">
              Schools in {district.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {schools.map((school) => (
                <Link
                  key={school.slug}
                  href={`/schools/${school.slug}`}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
                >
                  <p className="font-semibold text-sm">{school.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {school.city} · {school.enrollment.toLocaleString()} students
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: `Is Syllio free for ${district.name} students?`,
                a: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever. Paid plans start at $4.99/month for students who need unlimited scans and LMS sync.`,
              },
              {
                q: `Can teachers at ${district.name} schools use Syllio?`,
                a: `Yes. Teacher plans give ${district.name} educators the AI Syllabus Builder, AI Lesson Planner, and the class code system so students auto-import deadlines. Teacher Starter is $5.99/month.`,
              },
              {
                q: "Does Syllio work with Canvas or Google Classroom?",
                a: "Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom. Students pull deadlines directly from their LMS on the AI Pro plan; teachers export to their LMS on Teacher Pro.",
              },
              {
                q: `Does Syllio work for middle school students in ${district.name}?`,
                a: `Syllio is primarily designed for high school and college students, though middle school students in ${district.name} can absolutely use the calendar and club management features. The AI scan works with any structured course document.`,
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
            Join {district.name} students and teachers on Syllio.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Free forever for the basics. No credit card required. Start scanning
            syllabi in under two minutes.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
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
          {district.name} or any school or government entity within the district. Course
          syllabi and deadlines extracted by Syllio AI are for organizational reference only.
          Always verify academic requirements against official district communications and your
          school&apos;s published resources. Syllio content does not constitute official academic
          or institutional guidance.
        </p>
      </div>

      <Footer />
    </>
  );
}
