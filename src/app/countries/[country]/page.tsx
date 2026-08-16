import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getCountryBySlug, getAllCountrySlugs, getCountriesByContinent } from "@/lib/countries";
import { subjects, SUBJECT_CATEGORIES } from "@/lib/subjects";

export function generateStaticParams() {
  return getAllCountrySlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return {
    title: `Syllio for ${country.name} Students & Teachers`,
    description: `The AI student OS for ${country.name} — scan syllabi, auto-fill your calendar, build lesson plans. ${country.studentPopulation} students. Free to start.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const relatedCountries = getCountriesByContinent(country.continent)
    .filter((c) => c.slug !== country.slug)
    .slice(0, 6);

  const featuredSubjects = subjects.slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI-powered student and teacher OS for ${country.name}. Syllabus scanner, calendar auto-fill, lesson planner.`,
    url: `https://www.syllioai.com/countries/${country.slug}`,
    applicationCategory: "EducationalApplication",
    availableInCountry: country.name,
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
            { label: "Countries", href: "/countries" },
            { label: country.name },
          ]}
        />

        {/* Hero */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {country.continent.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} · {country.languages[0]}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {country.name} Students & Teachers
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            The AI-powered student OS for {country.name}&apos;s{" "}
            {country.studentPopulation} students and {country.topUniversityCount}+ universities.
            Scan your syllabus, auto-fill your calendar, and never miss a deadline.
            Education system: {country.educationSystem}.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Get Syllio free
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: country.studentPopulation, label: "Students" },
            { value: `${country.topUniversityCount}+`, label: "Universities" },
            { value: country.currency, label: "Currency" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center">
              <div className="text-2xl font-extrabold text-violet-brand">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Students + Teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {country.name} students</h2>
            <ul className="space-y-2">
              {[
                "AI Syllabus Scan — snap or upload, deadlines auto-fill your calendar",
                "Burnout Radar™ — see crunch weeks 3–4 weeks ahead",
                `Works with ${country.educationSystem} structure`,
                "LMS Sync: Canvas, Blackboard, Google Classroom, Moodle",
                "4-Year Portfolio for grad school and jobs",
                "Club OS for campus societies and study groups",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-teal-brand shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-violet-brand/10 dark:bg-violet-brand/20 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {country.name} teachers & lecturers</h2>
            <ul className="space-y-2">
              {[
                "AI Syllabus Builder — complete syllabus in 2 minutes",
                "AI Lesson Planner — week-by-week plans auto-generated",
                "Class Code — students import your syllabus instantly",
                "Assignment Generator from learning objectives",
                "LMS Export to Canvas, Blackboard, Google Classroom",
                `50% cheaper than competitors — from $5.99/mo`,
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-violet-brand shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Browse by subject */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Browse {country.name} by subject</h2>
          <div className="flex flex-wrap gap-2">
            {featuredSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/countries/${country.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {country.name.split(" ")[0]} {s.name}
              </Link>
            ))}
            <Link
              href={`/countries/${country.slug}/more`}
              className="text-sm text-slate-400 rounded-full px-3 py-1.5"
            >
              + {subjects.length - 12} more →
            </Link>
          </div>
        </section>

        {/* Related countries */}
        {relatedCountries.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">
              Other{" "}
              {country.continent.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
              countries using Syllio
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {relatedCountries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/countries/${c.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Syllio for {country.name}</h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. Teacher plans from $5.99/mo. Works in {country.languages[0]}.
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
          not affiliated with any government, educational institution, or official body in{" "}
          {country.name}. Always verify deadlines with your official course materials.
        </p>
      </div>
      <Footer />
    </>
  );
}
