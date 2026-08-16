import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { districts, getDistrictBySlug, getDistrictsByState } from "@/lib/districts";
import { subjects, topSubjects, getSubjectBySlug } from "@/lib/subjects";
import MonetizationStrip from "@/components/MonetizationStrip";

export function generateStaticParams() {
  const params: { slug: string; subject: string }[] = [];
  for (const district of districts) {
    for (const subject of topSubjects) {
      params.push({ slug: district.slug, subject: subject.slug });
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
  const district = getDistrictBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!district || !subject) return {};
  return {
    title: `Syllio for ${district.name} ${subject.name} Students & Teachers`,
    description: `${district.name} ${subject.name} — scan syllabi, build lesson plans, sync deadlines. Free for students. Teacher plans from $5.99/mo.`,
  };
}

export default async function DistrictSubjectPage({
  params,
}: {
  params: Promise<{ slug: string; subject: string }>;
}) {
  const { slug, subject: subjectSlug } = await params;
  const district = getDistrictBySlug(slug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!district || !subject) notFound();

  const nearbyDistricts = getDistrictsByState(district.stateSlug)
    .filter((d) => d.slug !== district.slug)
    .slice(0, 4);

  const relatedSubjects = subjects
    .filter((s) => s.category === subject.category && s.slug !== subject.slug)
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI syllabus scanner and lesson planner for ${district.name} ${subject.name} students and teachers.`,
    url: `https://www.syllioai.com/districts/${district.slug}/${subject.slug}`,
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
            { label: district.state, href: `/states/${district.stateSlug}` },
            { label: district.name, href: `/districts/${district.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {district.city}, {district.state} · {subject.name}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {district.name} {subject.name}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            {district.name} serves {district.enrollment.toLocaleString()} students across{" "}
            {district.schoolCount} schools. Syllio gives every {subject.name} student and teacher a
            smarter way to manage syllabi, deadlines, and lesson plans.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Free for students
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-teal-brand transition-colors"
            >
              Teacher plans from $5.99/mo
            </Link>
          </div>
        </div>

        {/* Two-column: students + teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {district.name} {subject.name} students</h2>
            <ul className="space-y-2">
              {[
                `Snap your ${subject.name} syllabus → deadlines land in your calendar`,
                "Burnout Radar™ flags brutal weeks before they happen",
                "LMS Sync: Canvas, Blackboard, Google Classroom",
                "4-Year Portfolio tracks every achievement",
                "Club OS for study groups and school clubs",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-teal-brand shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-violet-brand/10 dark:bg-violet-brand/20 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {district.name} {subject.name} teachers</h2>
            <ul className="space-y-2">
              {[
                `AI ${subject.name} Syllabus Builder — ready in 2 minutes`,
                `AI Lesson Planner for ${subject.name} units and weeks`,
                "Class Code: students auto-import your deadlines",
                "LMS Export: push directly to Canvas or Google Classroom",
                "Assignment Generator from your learning objectives",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-violet-brand shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related subjects */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3">More {district.name} subjects</h2>
          <div className="flex flex-wrap gap-2">
            {relatedSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/districts/${district.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href={`/lesson-plans/9th-grade/${subject.slug}`}
              className="text-sm border border-teal-brand/30 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
            >
              {subject.name} lesson plans →
            </Link>
          </div>
        </section>

        {/* Nearby districts */}
        {nearbyDistricts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-3">Nearby districts — {subject.name}</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/districts/${d.slug}/${subject.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
                >
                  {d.name} {subject.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <MonetizationStrip variant="district" />

        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            {district.name} — smarter {subject.name}
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. District pricing available for {district.schoolCount}+ schools.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Students — get started free
            </Link>
            <Link
              href="/pricing"
              className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:border-white/50 transition-colors"
            >
              Teacher & district plans
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is an independent productivity tool and is not
          affiliated with or endorsed by {district.name}. Always verify deadlines and curriculum
          requirements with your school or district directly.
        </p>
      </div>
      <Footer />
    </>
  );
}
