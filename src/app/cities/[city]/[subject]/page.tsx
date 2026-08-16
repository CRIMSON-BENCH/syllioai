import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import { subjects, topSubjects, getSubjectBySlug } from "@/lib/subjects";

export function generateStaticParams() {
  const params: { city: string; subject: string }[] = [];
  for (const city of cities) {
    for (const subject of topSubjects) {
      params.push({ city: city.slug, subject: subject.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; subject: string }>;
}): Promise<Metadata> {
  const { city: citySlug, subject: subjectSlug } = await params;
  const city = getCityBySlug(citySlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!city || !subject) return {};
  return {
    title: `Syllio for ${city.name} ${subject.name} Students`,
    description: `Studying ${subject.name} in ${city.name}? Scan your syllabus, auto-fill your calendar, and never miss a deadline. Free with Syllio AI.`,
  };
}

export default async function CitySubjectPage({
  params,
}: {
  params: Promise<{ city: string; subject: string }>;
}) {
  const { city: citySlug, subject: subjectSlug } = await params;
  const city = getCityBySlug(citySlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!city || !subject) notFound();

  const relatedSubjects = subjects
    .filter((s) => s.category === subject.category && s.slug !== subject.slug)
    .slice(0, 6);

  const nearbyCities = cities
    .filter((c) => c.countrySlug === city.countrySlug && c.slug !== city.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI syllabus scanner for ${subject.name} students in ${city.name}, ${city.country}.`,
    url: `https://www.syllioai.com/cities/${city.slug}/${subject.slug}`,
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
            { label: city.country, href: `/countries/${city.countrySlug}` },
            { label: city.name, href: `/cities/${city.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {city.name}, {city.country} · {subject.name}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {city.name} {subject.name} Students
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Studying {subject.name} at any of {city.name}&apos;s {city.universityCount}+ universities?
            Syllio scans your syllabus and drops every exam, assignment, and deadline straight into
            your calendar. Thirty seconds, zero manual entry.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Scan my {subject.name} syllabus free
            </Link>
            <Link
              href={`/countries/${city.countrySlug}/${subject.slug}`}
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-teal-brand transition-colors"
            >
              {subject.name} across {city.country}
            </Link>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">
            How it works for {city.name} {subject.name} students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                title: "Upload your syllabus",
                desc: `Snap a photo or upload the PDF of your ${subject.name} course outline from any ${city.name} university.`,
              },
              {
                n: "2",
                title: "AI extracts every deadline",
                desc: `Syllio reads exams, essays, tutorials, lab reports — every ${subject.name} deadline, however buried in the syllabus.`,
              },
              {
                n: "3",
                title: "Calendar fills itself",
                desc: "Every date syncs to Google Calendar, Apple Calendar, or Outlook. Burnout Radar™ flags crunch weeks before they arrive.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-brand text-slate-950 text-sm font-bold flex items-center justify-center shrink-0">
                  {s.n}
                </div>
                <strong className="text-sm font-semibold">{s.title}</strong>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features grid */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">{city.name} {subject.name} students get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AI Syllabus Scan", desc: `Instant deadline extraction from any ${city.name} ${subject.name} syllabus.` },
              { title: "Burnout Radar™", desc: "Predict overloaded weeks 3–4 weeks out. Manage your workload before it manages you." },
              { title: "LMS Sync", desc: `Works with Canvas, Blackboard, Moodle, or Google Classroom at ${city.name} institutions.` },
              { title: "4-Year Portfolio", desc: `Log every ${subject.name} achievement. Shareable for graduate applications and careers.` },
            ].map((f) => (
              <div key={f.title} className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related subjects in this city */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3">Other subjects in {city.name}</h2>
          <div className="flex flex-wrap gap-2">
            {relatedSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/cities/${city.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {city.name} {s.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Nearby cities — same subject */}
        {nearbyCities.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-3">{subject.name} in other {city.country} cities</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}/${subject.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {c.name} {subject.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tutoring CTA */}
        <div className="border border-teal-brand/30 bg-teal-brand/5 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h2 className="font-bold text-lg mb-1">Need help with {subject.name} in {city.name}?</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Get matched with a local or online tutor — sessions synced to your Syllio deadline calendar.
            </p>
          </div>
          <Link
            href="/tutors"
            className="shrink-0 bg-teal-brand text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Find a tutor →
          </Link>
        </div>

        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            Never miss a {subject.name} deadline in {city.name}
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. No credit card. Works at every {city.name} university.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. It
          is not affiliated with any university or educational institution in {city.name}. Always
          verify deadlines with your official course materials and instructor.
        </p>
      </div>
      <Footer />
    </>
  );
}
