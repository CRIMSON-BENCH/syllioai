import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { counties, getCountyBySlug, getCountiesByState } from "@/lib/counties";
import { subjects, getSubjectBySlug } from "@/lib/subjects";

export function generateStaticParams() {
  const params: { slug: string; subject: string }[] = [];
  for (const county of counties) {
    for (const subject of subjects) {
      params.push({ slug: county.slug, subject: subject.slug });
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
  const county = getCountyBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!county || !subject) return {};
  return {
    title: `Syllio for ${county.name} ${subject.name} Students`,
    description: `${county.name}, ${county.stateAbbr} ${subject.name} students: scan your syllabus, auto-fill your calendar, and never miss a deadline. Free with Syllio AI.`,
  };
}

export default async function CountySubjectPage({
  params,
}: {
  params: Promise<{ slug: string; subject: string }>;
}) {
  const { slug, subject: subjectSlug } = await params;
  const county = getCountyBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!county || !subject) notFound();

  const nearbyCounties = getCountiesByState(county.stateSlug)
    .filter((c) => c.slug !== county.slug)
    .slice(0, 4);

  const relatedSubjects = subjects
    .filter((s) => s.category === subject.category && s.slug !== subject.slug)
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI syllabus scanner for ${county.name}, ${county.state} ${subject.name} students.`,
    url: `https://www.syllioai.com/counties/${county.slug}/${subject.slug}`,
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
            { label: county.state, href: `/states/${county.stateSlug}` },
            { label: county.name, href: `/counties/${county.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {county.name}, {county.stateAbbr} · {subject.name}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {county.name} {subject.name} Students
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Whether you&apos;re studying {subject.name} at a {county.name} community college,
            university, or high school — Syllio scans your syllabus and puts every deadline in your
            calendar automatically. Free to start.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Scan my {subject.name} syllabus free
          </Link>
        </div>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">What {county.name} {subject.name} students get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Instant syllabus scan",
                desc: `Upload your ${subject.name} syllabus — Syllio AI extracts every deadline in under 30 seconds.`,
              },
              {
                title: "Auto-filled calendar",
                desc: "Every exam, assignment, and reading drops into your personal calendar. Google Cal, Apple, or Outlook.",
              },
              {
                title: "Burnout Radar™",
                desc: "See your workload curve 3–4 weeks out. Know which weeks will be brutal before they hit.",
              },
              {
                title: "LMS Sync",
                desc: "Canvas, Blackboard, Google Classroom — deadlines from your LMS sync alongside your scanned syllabus.",
              },
            ].map((f) => (
              <div key={f.title} className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related subjects */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3">Related subjects in {county.name}</h2>
          <div className="flex flex-wrap gap-2">
            {relatedSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/counties/${county.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {county.name.split(" ")[0]} {s.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Nearby counties */}
        {nearbyCounties.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-3">Nearby counties — {subject.name}</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/counties/${c.slug}/${subject.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
                >
                  {c.name} {subject.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Never miss a {subject.name} deadline</h2>
          <p className="text-slate-400 text-sm mb-5">Free for students. No credit card needed.</p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool and is not affiliated with any
          school, district, or institution in {county.name}, {county.state}. Always verify deadlines
          with your official course materials.
        </p>
      </div>
      <Footer />
    </>
  );
}
