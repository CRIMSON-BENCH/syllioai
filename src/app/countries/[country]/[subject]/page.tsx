import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { countries, getCountryBySlug, getAllCountrySlugs } from "@/lib/countries";
import { subjects, getSubjectBySlug } from "@/lib/subjects";

export function generateStaticParams() {
  const params: { country: string; subject: string }[] = [];
  for (const country of countries) {
    for (const subject of subjects) {
      params.push({ country: country.slug, subject: subject.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; subject: string }>;
}): Promise<Metadata> {
  const { country: countrySlug, subject: subjectSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!country || !subject) return {};
  return {
    title: `Syllio for ${country.name} ${subject.name} Students`,
    description: `Scan your ${country.name} ${subject.name} syllabus with Syllio AI — get every deadline in your calendar automatically. Free for ${country.name} students.`,
  };
}

export default async function CountrySubjectPage({
  params,
}: {
  params: Promise<{ country: string; subject: string }>;
}) {
  const { country: countrySlug, subject: subjectSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!country || !subject) notFound();

  const relatedSubjects = subjects
    .filter((s) => s.category === subject.category && s.slug !== subject.slug)
    .slice(0, 6);

  const relatedCountries = countries
    .filter((c) => c.continent === country.continent && c.slug !== country.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    description: `AI syllabus scanner for ${country.name} ${subject.name} students. Scan, extract deadlines, auto-fill calendar.`,
    url: `https://www.syllioai.com/countries/${country.slug}/${subject.slug}`,
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
            { label: country.name, href: `/countries/${country.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            {country.name} · {subject.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio for {country.name} {subject.name} Students
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Studying {subject.name} in {country.name}? Syllio scans your syllabus — whether it&apos;s a{" "}
            {country.educationSystem.split(",")[0].trim()} course or a university module — and extracts
            every exam, assignment, and deadline into your calendar in under 30 seconds.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Scan my {subject.name} syllabus free
            </Link>
            <Link
              href={`/templates/${subject.slug}`}
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              {subject.name} syllabus template
            </Link>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">
            How Syllio works for {country.name} {subject.name} students
          </h2>
          <ol className="space-y-5">
            {[
              {
                title: "Snap or upload your syllabus",
                desc: `Take a photo or upload the PDF of your ${subject.name} course outline — in ${country.languages[0] !== "English" ? `${country.languages[0]} or English` : "any format"}.`,
              },
              {
                title: "AI reads every deadline",
                desc: `Syllio AI extracts every exam, essay deadline, tutorial submission, and reading — compatible with the ${country.educationSystem.split(",")[0].trim()} system.`,
              },
              {
                title: "Calendar fills itself",
                desc: "Every date syncs to your Google Calendar, Apple Calendar, or Outlook. Burnout Radar™ flags brutal weeks before they happen.",
              },
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
          <h2 className="text-xl font-bold mb-5">
            Everything {country.name} {subject.name} students get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AI Syllabus Scan", desc: `Instant deadline extraction from any ${subject.name} syllabus — PDF, photo, or text.` },
              { title: "Burnout Radar™", desc: "See your workload curve 3–4 weeks out. Know which weeks will be brutal before they hit." },
              { title: "LMS Sync", desc: `Canvas, Blackboard, Moodle, or Google Classroom — sync deadlines from your ${country.name} institution's LMS.` },
              { title: "4-Year Portfolio", desc: `Log every ${subject.name} project and achievement. Portfolio-ready for ${country.name} grad schools and employers.` },
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
          <h2 className="text-lg font-bold mb-3">
            Teaching {subject.name} in {country.name}?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Syllio&apos;s AI Syllabus Builder creates a complete {subject.name} syllabus in 2 minutes.
            Generate lesson plans, share a class code, and push to your LMS in one click.
            Teacher plans from $5.99/mo — up to 52% cheaper than competitors.
          </p>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-violet-brand hover:underline"
          >
            See teacher plans →
          </Link>
        </section>

        {/* Related subjects in this country */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3">Other {subject.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} subjects in {country.name}</h2>
          <div className="flex flex-wrap gap-2">
            {relatedSubjects.map((s) => (
              <Link
                key={s.slug}
                href={`/countries/${country.slug}/${s.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {country.name.split(" ")[0]} {s.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Related countries */}
        {relatedCountries.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-3">{subject.name} in other countries</h2>
            <div className="flex flex-wrap gap-2">
              {relatedCountries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/countries/${c.slug}/${subject.slug}`}
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
            <h2 className="font-bold text-lg mb-1">Need help with {subject.name} in {country.name}?</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Get matched with an online tutor — sessions synced to your Syllio deadline calendar, wherever you study.
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
            Start your {subject.name} semester in {country.name}
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. No credit card. Works anywhere in the world.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. It
          is not affiliated with any government, university, or educational institution in{" "}
          {country.name}. Always verify deadlines with your official course materials and instructor.
        </p>
      </div>
      <Footer />
    </>
  );
}
