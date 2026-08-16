import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getSchoolBySlug,
  getAllSchoolSlugs,
  type K12School,
} from "@/lib/k12schools";
import { getDistrictBySlug } from "@/lib/districts";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllSchoolSlugs();
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchoolBySlug(slug);
  if (!school) return {};

  const title = `Syllio for ${school.name} Students — AI Syllabus & Class Tools | Syllio`;
  const description = `Students at ${school.name} use Syllio to scan syllabi, track deadlines, manage clubs, and build their extracurricular portfolio. Free to start.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.syllioai.com/schools/${school.slug}`,
      siteName: "Syllio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://www.syllioai.com/schools/${school.slug}`,
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const school = getSchoolBySlug(slug);
  if (!school) notFound();

  const district = getDistrictBySlug(school.districtSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    url: "https://www.syllioai.com",
    applicationCategory: "EducationalApplication",
    description: `AI-powered syllabus scanner and student OS for ${school.name} students in ${school.city}, ${school.state}.`,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
      { "@type": "Offer", price: "5.99", priceCurrency: "USD", name: "Teacher Starter" },
    ],
    featureList: [
      "AI syllabus scan — photo to calendar",
      "Burnout Radar™ predictive load alerts",
      "Club OS — roster, attendance, mass push",
      "4-Year Portfolio — auto link-in-bio for college applications",
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
        name: `Is Syllio free for ${school.name} students?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever for students at ${school.name}. Paid plans start at $4.99/month for unlimited scans.`,
        },
      },
      {
        "@type": "Question",
        name: `Can teachers at ${school.name} use Syllio?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Teachers at ${school.name} can use Syllio's Teacher Starter ($5.99/month) to build syllabi with AI and share a class code. Students join with the code and every deadline auto-populates their calendar — no scanning required.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Syllio help with college applications for ${school.name} students?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Syllio's 4-Year Portfolio automatically builds a shareable, verified record of your clubs, leadership roles, volunteer hours, and extracurricular achievements at ${school.name}. Share the link in college applications, scholarships, and internship applications.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Syllio work with Canvas or Google Classroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom. Students pull deadlines from their LMS on the AI Pro plan. Teachers export syllabi to Canvas and Google Classroom on Teacher Pro.",
        },
      },
    ],
  };

  const crumbs: { label: string; href?: string }[] = [
    { label: "Home", href: "/" },
    { label: "Schools", href: "/schools" },
    { label: school.state, href: `/states/${school.stateSlug}` },
  ];

  if (district) {
    crumbs.push({ label: district.name, href: `/districts/${district.slug}` });
  }

  crumbs.push({ label: school.name });

  const steps = [
    {
      step: "1",
      title: "Photograph your syllabus",
      desc: `Take a photo of your printed ${school.name} syllabus or upload the PDF from your teacher's course page.`,
    },
    {
      step: "2",
      title: "AI extracts every deadline",
      desc: "Syllio reads every page and pulls out exams, assignments, quizzes, and project due dates — no manual entry required.",
    },
    {
      step: "3",
      title: "Your calendar fills itself",
      desc: "Deadlines land in your Syllio calendar with smart reminders. Burnout Radar alerts you a week before your heaviest workload period.",
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
            {school.city}, {school.state} · {school.enrollment.toLocaleString()} students
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio for {school.name} Students
          </h1>
          <p className="text-xl font-semibold text-violet-light mb-3">
            Every {school.name} deadline. One calendar. Zero manual entry.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Photograph your course syllabus and Syllio extracts every exam, assignment, and
            reading deadline into your personal calendar — in under 30 seconds. Manage your
            clubs, track your portfolio, and beat burnout, all in one free app.
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
            Three steps to a fully organized semester
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
          For {school.name} Students
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
          Every tool your high school career demands.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
          AP classes, extracurriculars, college prep, and social life — Syllio keeps it all
          organized so you never miss a deadline or an opportunity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: "AI Syllabus Scan",
              desc: `Photograph any course syllabus from ${school.name}. Syllio extracts every exam date, project deadline, and reading assignment into your calendar in under 30 seconds.`,
              href: "/features/ai-syllabus-scan",
            },
            {
              title: "Burnout Radar™",
              desc: "Predicts high-workload weeks before they arrive. When three finals and a project paper overlap, Syllio warns you a week ahead so you can plan.",
              href: "/features/burnout-radar",
            },
            {
              title: "Club OS",
              desc: `Join and manage every club and activity at ${school.name}. Club leaders get full roster management, attendance tracking, and one-tap mass push notifications.`,
              href: "/features/club-os",
            },
            {
              title: "LMS Sync",
              desc: "Pull deadlines from Canvas, Blackboard, and Google Classroom automatically — no scanning needed when your teacher posts assignments digitally.",
              href: "/features/lms-sync",
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

      {/* ── Teacher section ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            For {school.name} Teachers
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
            Build your syllabus in Syllio. Share a code. Students auto-import everything.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Teachers at {school.name} use Syllio to build polished syllabi with AI in under
            60 seconds. Publish with a 6-character class code and every student who joins
            has the full semester in their calendar before day one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "AI Syllabus Builder",
                desc: "Enter your course details and Syllio generates a complete, polished syllabus in under 60 seconds. Export to PDF or share a class code.",
                href: "/features/syllabus-builder",
              },
              {
                title: "AI Lesson Planner",
                desc: "Turn your syllabus into a week-by-week lesson plan. Adjust pacing, add activities, and export to Canvas or Google Classroom.",
                href: "/features/lesson-planner",
              },
              {
                title: "Class Code Import",
                desc: `Publish your ${school.name} syllabus with a 6-digit code. Students join and every deadline auto-populates their Syllio calendar instantly.`,
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

      {/* ── Extracurricular / portfolio ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
            College Applications
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
            Track your {school.name} clubs, activities, and leadership roles in your Syllio
            portfolio — verified, shareable, ready for college applications.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            The 4-Year Portfolio auto-builds a public link-in-bio of your verified clubs,
            hours, officer roles, and extracurricular achievements at {school.name}. No more
            scrambling to remember what you did sophomore year — Syllio tracks it from day one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "Verified Badges",
                desc: "Officer roles and volunteer hours are verified by your club leadership, not self-reported — colleges and employers can trust what they see.",
                href: "/features/verified-badges",
              },
              {
                title: "Shareable Portfolio Link",
                desc: "One link. Your full extracurricular record from all four years. Paste it into college apps, scholarship forms, and job applications.",
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
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors text-sm"
          >
            Start building your portfolio — free
          </Link>
        </div>
      </section>

      {/* ── Related links ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold tracking-tight mb-6">
            Explore more
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {district && (
              <Link
                href={`/districts/${district.slug}`}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-1">
                  District
                </p>
                <p className="font-semibold">{district.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {district.schoolCount} schools · {district.enrollment.toLocaleString()} students
                </p>
              </Link>
            )}
            <Link
              href={`/states/${school.stateSlug}`}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-1">
                State
              </p>
              <p className="font-semibold">{school.state} Schools & Districts</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Browse all {school.state} schools using Syllio
              </p>
            </Link>
          </div>
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
                q: `Is Syllio free for ${school.name} students?`,
                a: `Yes. Syllio's free plan includes a unified calendar, 2 AI syllabus scans per semester, and unlimited club memberships — free forever for students at ${school.name}. Paid plans start at $4.99/month for unlimited scans.`,
              },
              {
                q: `Can teachers at ${school.name} use Syllio?`,
                a: `Yes. Teachers at ${school.name} use Syllio's Teacher Starter plan to build syllabi with AI and share a class code. Students who join the code have every deadline in their calendar before the first class.`,
              },
              {
                q: `Does Syllio help with college applications for ${school.name} students?`,
                a: `Yes. Syllio's 4-Year Portfolio automatically builds a shareable, verified record of your clubs, leadership roles, and extracurricular achievements at ${school.name}. Share the link directly in college application forms.`,
              },
              {
                q: "Does Syllio work with Canvas or Google Classroom?",
                a: "Yes. Syllio syncs with Canvas, Blackboard, and Google Classroom. Students pull deadlines from their LMS on the AI Pro plan ($4.99/month). Teachers export to Canvas and Google Classroom on Teacher Pro.",
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
            Ready to organize your {school.name} semester?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Free forever for the basics. Start scanning syllabi and building your
            portfolio in under two minutes.
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
          {school.name}
          {district ? `, ${district.name},` : ","} or any school or government entity. Course
          syllabi, deadlines, and academic information extracted by Syllio AI are for
          organizational reference only. Always verify requirements against your official course
          pages, teacher communications, and your school&apos;s published academic calendar.
          Syllio content does not constitute official academic guidance.
        </p>
      </div>

      <Footer />
    </>
  );
}
