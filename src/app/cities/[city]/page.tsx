import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getCityBySlug, getAllCitySlugs, getCitiesByCountry } from "@/lib/cities";
import { subjects } from "@/lib/subjects";

export function generateStaticParams() {
  return getAllCitySlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Syllio for ${city.name} Students & Teachers`,
    description: `The AI student OS for ${city.name}, ${city.country}. ${city.studentPopulation} students across ${city.universityCount}+ universities. Scan syllabi, auto-fill your calendar, build lesson plans.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = getCitiesByCountry(city.countrySlug)
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

  const featuredSubjects = subjects.slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI-powered student OS for ${city.name}, ${city.country}. ${city.studentPopulation} students, ${city.universityCount}+ universities.`,
    url: `https://www.syllioai.com/cities/${city.slug}`,
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
            { label: city.name },
          ]}
        />

        {/* Hero */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {city.country} · {city.continent.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {city.name} Students & Teachers
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            {city.name} is home to {city.studentPopulation} students across{" "}
            {city.universityCount}+ universities and colleges. Syllio gives every {city.name}{" "}
            student and teacher an AI-powered OS — scan syllabi, auto-fill calendars, build lesson
            plans, and manage campus life in one app.
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

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {[
            { value: city.studentPopulation, label: "Students in " + city.name },
            { value: `${city.universityCount}+`, label: "Universities & Colleges" },
            { value: city.country, label: "Country" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center">
              <div className="text-xl font-extrabold text-violet-brand">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Student & teacher features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {city.name} students</h2>
            <ul className="space-y-2">
              {[
                "AI Syllabus Scan — snap or upload, deadlines auto-fill your calendar",
                "Burnout Radar™ — see brutal weeks 3–4 weeks ahead",
                "LMS Sync: Canvas, Blackboard, Moodle, Google Classroom",
                "4-Year Portfolio for grad school and careers",
                "Club OS — manage societies, sports clubs, and study groups",
                "Verified Badges for academic milestones",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-teal-brand shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-violet-brand/10 dark:bg-violet-brand/20 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">For {city.name} teachers & lecturers</h2>
            <ul className="space-y-2">
              {[
                "AI Syllabus Builder — complete syllabus in 2 minutes",
                "AI Lesson Planner — week-by-week plans from objectives",
                "Class Code — students import your syllabus instantly",
                "Assignment Generator",
                "LMS Export to Canvas, Blackboard, Google Classroom",
                "50% cheaper than MagicSchool AI and TeachQuill",
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
          <h2 className="text-xl font-bold mb-4">Browse {city.name} by subject</h2>
          <div className="flex flex-wrap gap-2">
            {featuredSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/cities/${city.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {city.name} {s.name}
              </Link>
            ))}
            <span className="text-sm text-slate-400 rounded-full px-3 py-1.5">
              + {subjects.length - 12} more
            </span>
          </div>
        </section>

        {/* Other cities in this country */}
        {nearbyCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Other {city.country} cities on Syllio</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Syllio for {city.name}</h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. Teacher plans from $5.99/mo. Works at every {city.name} university.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. It
          is not affiliated with any university, college, or educational institution in {city.name}.
          Always verify deadlines with your official course materials and instructor.
        </p>
      </div>
      <Footer />
    </>
  );
}
