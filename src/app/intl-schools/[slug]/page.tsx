import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getInternationalSchoolBySlug,
  getAllInternationalSchoolSlugs,
  getInternationalSchoolsByCity,
} from "@/lib/international-schools";
import MonetizationStrip from "@/components/MonetizationStrip";

export function generateStaticParams() {
  return getAllInternationalSchoolSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const school = getInternationalSchoolBySlug(slug);
  if (!school) return {};
  return {
    title: `Syllio for ${school.name} Students`,
    description: `${school.name} students: scan your syllabus, auto-fill your calendar, and never miss a deadline. Free with Syllio AI — works with ${school.curriculum}.`,
  };
}

export default async function IntlSchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const school = getInternationalSchoolBySlug(slug);
  if (!school) notFound();

  const nearbySchools = getInternationalSchoolsByCity(school.citySlug)
    .filter((s) => s.slug !== school.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI-powered student OS for ${school.name} students. Scan syllabi, auto-fill calendars, manage school life.`,
    url: `https://www.syllioai.com/intl-schools/${school.slug}`,
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
            { label: school.country, href: `/countries/${school.countrySlug}` },
            { label: school.city, href: `/cities/${school.citySlug}` },
            { label: school.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {school.city}, {school.country} · {school.curriculum} · {school.grades}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {school.name} Students
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            {school.name} students — snap a photo of your course outline and Syllio AI extracts every
            deadline into your calendar automatically. Works with {school.curriculum} syllabi.
            Free to start, no credit card needed.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get Syllio free
            </Link>
            <Link
              href={`/cities/${school.citySlug}`}
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-teal-brand transition-colors"
            >
              Syllio for {school.city}
            </Link>
          </div>
        </div>

        {/* School stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: school.enrollment.toLocaleString(), label: "Students" },
            { value: school.curriculum, label: "Curriculum" },
            { value: school.grades, label: "Year groups" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center">
              <div className="text-lg font-extrabold text-violet-brand">{s.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">How Syllio works at {school.name}</h2>
          <ol className="space-y-5">
            {[
              { title: "Snap your course outline", desc: `Take a photo of your ${school.curriculum} course outline or upload the PDF.` },
              { title: "AI reads every deadline", desc: `Syllio extracts every exam, coursework deadline, and test date from your ${school.name} syllabi.` },
              { title: "Calendar fills itself", desc: "Every deadline syncs to your calendar. Burnout Radar™ shows your workload curve weeks ahead." },
              { title: "Build your portfolio", desc: "Log achievements, projects, and extracurriculars in your 4-Year Portfolio — ready for UCAS, Common App, or job applications." },
            ].map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-brand text-slate-950 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-sm">{s.title}</strong>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">Built for {school.name} students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AI Syllabus Scan", desc: `Works with ${school.curriculum} — photo or PDF, instant deadline extraction.` },
              { title: "Burnout Radar™", desc: "Visualise your workload curve. Know which terms will be hardest, weeks before they arrive." },
              { title: "4-Year Portfolio", desc: "Track achievements, EPQ projects, volunteering, and leadership. Ready for your next application." },
              { title: "Club OS", desc: `Manage ${school.name} clubs, societies, and sports teams — calendar, members, and announcements.` },
            ].map((f) => (
              <div key={f.title} className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For teachers */}
        <section className="mb-12 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-3">Teaching at {school.name}?</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Syllio&apos;s AI Syllabus Builder creates a complete {school.curriculum} course outline in
            2 minutes. Generate lesson plans, share a class code, and students auto-import all
            deadlines. Teacher plans from $5.99/mo.
          </p>
          <Link href="/pricing" className="text-sm font-semibold text-violet-brand hover:underline">
            See teacher plans →
          </Link>
        </section>

        {/* Nearby schools */}
        {nearbySchools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Other {school.city} schools using Syllio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {nearbySchools.map((s) => (
                <Link
                  key={s.slug}
                  href={`/intl-schools/${s.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-teal-brand hover:text-teal-brand transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <MonetizationStrip variant="k12-parent" />

        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            Start the school year at {school.name} with Syllio
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. No credit card. Works with {school.curriculum}.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is an independent productivity tool and is not
          affiliated with or endorsed by {school.name}. Always verify deadlines with your official
          course materials and teachers.
        </p>
      </div>
      <Footer />
    </>
  );
}
