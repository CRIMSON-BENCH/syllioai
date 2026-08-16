import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { universities, getUniversityBySlug, getUniversitiesByState } from "@/lib/universities";
import { subjects, topSubjects, getSubjectBySlug } from "@/lib/subjects";

export function generateStaticParams() {
  const params: { slug: string; subject: string }[] = [];
  for (const uni of universities) {
    for (const subject of topSubjects) {
      params.push({ slug: uni.slug, subject: subject.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subject: string }>;
}): Promise<Metadata> {
  const { slug, subject: subjectSlug } = await params;
  const uni = getUniversityBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!uni || !subject) return {};
  return {
    title: `Syllio for ${uni.name} ${subject.name} Students`,
    description: `Scan your ${uni.name} ${subject.name} syllabus in 30 seconds. Every exam, assignment, and deadline goes straight to your calendar — free for ${uni.name} students.`,
  };
}

export default async function UniversitySubjectPage({
  params,
}: {
  params: Promise<{ slug: string; subject: string }>;
}) {
  const { slug, subject: subjectSlug } = await params;
  const uni = getUniversityBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!uni || !subject) notFound();

  const related = getUniversitiesByState(uni.stateSlug)
    .filter((u) => u.slug !== uni.slug)
    .slice(0, 4);

  const relatedSubjects = subjects
    .filter((s) => s.category === subject.category && s.slug !== subject.slug)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI-powered syllabus scanner and student OS for ${uni.name} ${subject.name} students.`,
    url: `https://www.syllioai.com/universities/${uni.slug}/${subject.slug}`,
    applicationCategory: "EducationalApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Universities", href: "/universities" },
            { label: uni.name, href: `/universities/${uni.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {uni.city}, {uni.state} · {subject.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {uni.name} {subject.name} Students
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Photograph or upload your {uni.name} {subject.name} syllabus — Syllio AI extracts every
            exam date, assignment deadline, and reading in under 30 seconds. Your calendar fills
            itself. Nothing slips through.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Scan my {subject.name} syllabus free
            </Link>
            <Link
              href={`/universities/${uni.slug}`}
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              All {uni.name} features
            </Link>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">How it works for {subject.name} at {uni.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Snap or upload",
                desc: `Take a photo of your ${uni.name} ${subject.name} syllabus or upload the PDF from your course portal.`,
              },
              {
                step: "2",
                title: "AI reads every deadline",
                desc: `Syllio's AI extracts every exam, quiz, assignment, and reading deadline — even buried in dense ${subject.name} syllabi.`,
              },
              {
                step: "3",
                title: "Calendar fills itself",
                desc: "Every deadline lands in your personal calendar. Burnout Radar™ flags weeks when you're overloaded before they happen.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-brand text-white text-sm font-bold flex items-center justify-center">
                  {s.step}
                </div>
                <strong className="text-sm font-semibold">{s.title}</strong>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">Built for {uni.name} students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "AI Syllabus Scan",
                desc: `Instant deadline extraction from any ${uni.name} ${subject.name} syllabus — PDF, photo, or text.`,
              },
              {
                title: "Burnout Radar™",
                desc: `See your ${subject.name} workload 3–4 weeks ahead. Syllio flags crunch periods before they hit.`,
              },
              {
                title: "LMS Sync",
                desc: "Canvas, Blackboard, or Google Classroom? Syllio syncs deadlines from your LMS alongside the syllabus scan.",
              },
              {
                title: "4-Year Portfolio",
                desc: `Log every ${subject.name} project, research paper, and achievement. Portfolio-ready for grad school or jobs.`,
              },
              {
                title: "Club OS",
                desc: "Manage your clubs, study groups, and campus organizations — calendar, announcements, and members in one place.",
              },
              {
                title: "Verified Badges",
                desc: "Earn verifiable badges for academic milestones and share them on LinkedIn or your portfolio.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-5"
              >
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related subjects */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            Other {subject.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} subjects at {uni.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/universities/${uni.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
              >
                {uni.name.split(" ").pop()} {s.name}
              </Link>
            ))}
            <Link
              href={`/templates/${subject.slug}`}
              className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
            >
              {subject.name} syllabus template →
            </Link>
          </div>
        </section>

        {/* Related universities */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">
              Other universities in {uni.state} using Syllio
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {related.map((u) => (
                <Link
                  key={u.slug}
                  href={`/universities/${u.slug}/${subject.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-violet-brand hover:text-violet-brand transition-colors text-center"
                >
                  {u.name.split(" ").slice(0, 3).join(" ")}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tutoring CTA */}
        <div className="border border-teal-brand/30 bg-teal-brand/5 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h2 className="font-bold text-lg mb-1">Need help with {subject.name} at {uni.name}?</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Get matched with a tutor who knows your class — sessions synced to your Syllio deadline calendar.
            </p>
          </div>
          <Link
            href="/tutors"
            className="shrink-0 bg-teal-brand text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Find a tutor →
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            Start your {subject.name} semester right
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for {uni.name} students. Scan unlimited syllabi. No credit card.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. It is
          not affiliated with or endorsed by {uni.name} or any educational institution. Always verify
          deadlines with your official course materials and instructor.
        </p>
      </div>
      <Footer />
    </>
  );
}
