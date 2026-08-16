import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getStateBySlug, getAllStateSlugs, USState } from "@/lib/states";
import { getUniversitiesByState } from "@/lib/universities";
import { getDistrictsByState } from "@/lib/districts";
import MonetizationStrip from "@/components/MonetizationStrip";

export function generateStaticParams() {
  return getAllStateSlugs();
}

type Props = {
  params: Promise<{ state: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return { title: "State Not Found" };

  return {
    title: `Syllio for ${state.name} Students & Teachers — AI Syllabus Tools | Syllio`,
    description: `Syllio helps ${state.studentCount} students and teachers across ${state.schoolDistrictCount} school districts in ${state.name} manage syllabi, deadlines, clubs, and portfolios with AI.`,
    openGraph: {
      title: `Syllio for ${state.name} Students & Teachers | Syllio`,
      description: `AI-powered academic planning for students and teachers in ${state.name}. Scan syllabi, sync your LMS, manage clubs, and build a portfolio — free.`,
      url: `https://www.syllioai.com/states/${state.slug}`,
    },
    alternates: {
      canonical: `https://www.syllioai.com/states/${state.slug}`,
    },
  };
}

function buildJsonLd(state: USState) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Syllio for ${state.name} Students & Teachers`,
    url: `https://www.syllioai.com/states/${state.slug}`,
    description: `Syllio provides AI-powered academic tools for the ${state.studentCount} students and educators across ${state.schoolDistrictCount} school districts in ${state.name}.`,
    about: {
      "@type": "State",
      name: state.name,
      containedInPlace: {
        "@type": "Country",
        name: "United States",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Syllio",
      url: "https://www.syllioai.com",
    },
  };
}

const STATE_FAQS: Array<{ q: (s: USState) => string; a: (s: USState) => string }> = [
  {
    q: (s) => `Is Syllio available for students in ${s.name}?`,
    a: (s) =>
      `Yes — Syllio works for any student or teacher in ${s.name}, regardless of which school district, college, or university they attend. The free plan is available immediately with no institutional affiliation required.`,
  },
  {
    q: (s) => `Does Syllio sync with LMS platforms used in ${s.name} schools?`,
    a: (s) =>
      `Syllio syncs with Canvas, Blackboard, and Google Classroom — the three most widely adopted LMS platforms across ${s.name}'s ${s.schoolDistrictCount} school districts and higher education institutions. Connect your account once and every assignment your teachers post flows automatically into your Syllio calendar.`,
  },
  {
    q: (s) => `Can teachers in ${s.name} use Syllio to build syllabi?`,
    a: (s) =>
      `Absolutely. Syllio's AI Syllabus Builder is available to any teacher in ${s.name} — K-12 or higher ed. Generate a complete, polished syllabus from your course parameters in under 60 seconds, share it with students via a 6-character class code, and export directly to Canvas or Google Classroom on Teacher Pro.`,
  },
  {
    q: (s) => `How does Syllio help with ${s.name} state curriculum standards?`,
    a: (s) =>
      `Syllio's AI lesson planner and syllabus builder can be guided by any state or national curriculum framework — including ${s.name}'s state standards. Teachers enter their grade level, subject, and learning objectives, and Syllio generates standards-aligned materials. For international and multi-state contexts, Syllio's curriculum tools are flexible across frameworks.`,
  },
];

export default async function StatePage({ params }: Props) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) notFound();

  const universities = getUniversitiesByState(state.slug).slice(0, 8);
  const districts = getDistrictsByState(state.slug).slice(0, 8);
  const jsonLd = buildJsonLd(state);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-18 px-4 pt-16 pb-16">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "States", href: "/states" },
              { label: state.name },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-4">
            {state.name} · {state.abbr}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            Syllio for {state.name} Students & Teachers
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-6">
            AI-powered academic planning for {state.name}&apos;s{" "}
            <strong className="text-slate-200">{state.studentCount} students</strong>{" "}
            and teachers across{" "}
            <strong className="text-slate-200">
              {state.schoolDistrictCount.toLocaleString()} school districts
            </strong>{" "}
            and {state.k12SchoolCount.toLocaleString()} K-12 schools.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Get started free
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

      {/* Stats strip */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "Students", value: state.studentCount },
            { label: "School Districts", value: state.schoolDistrictCount.toLocaleString() },
            { label: "K-12 Schools", value: state.k12SchoolCount.toLocaleString() },
            { label: "State Capital", value: state.capital },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xl font-extrabold text-white">{item.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* For students */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
              For Students in {state.name}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
              Never miss a deadline again — no matter which school you attend
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Whether you&apos;re at a {state.name} university, a community college, or a K-12
              school, Syllio gives you one place for every deadline, every club event, and every
              academic milestone — all automatically.
            </p>
            <ul className="space-y-3">
              {[
                "AI scan any syllabus — photo or PDF — into your calendar in under 30 seconds",
                `Sync Canvas, Blackboard, and Google Classroom accounts used across ${state.name} schools`,
                "Burnout Radar™ warns you 7 days before your heaviest workload week",
                "Track your clubs, log service hours, and build a verified 4-year portfolio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-teal-brand font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
              For Teachers in {state.name}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-balance">
              Build syllabi in 60 seconds and share them with every student instantly
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {state.name}&apos;s teachers spend too many evenings on administrative work. Syllio&apos;s AI
              tools reclaim that time — and connect what you build directly to your students&apos;
              calendars.
            </p>
            <ul className="space-y-3">
              {[
                "AI Syllabus Builder generates a complete course document from your parameters",
                "Class code lets students auto-import every deadline — no scanning required",
                "AI Lesson Planner creates week-by-week plans from your syllabus automatically",
                "Export directly to Canvas, Google Classroom, or Blackboard on Teacher Pro",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-violet-brand font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Universities */}
      {universities.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900 py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-1">
                  Higher Education
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Universities in {state.name}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {universities.map((uni) => (
                <Link
                  key={uni.slug}
                  href={`/universities/${uni.slug}`}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-violet-brand dark:hover:border-violet-brand transition-colors group"
                >
                  <div className="text-xs font-semibold text-slate-400 mb-1 capitalize">
                    {uni.type.replace("-", " ")}
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-violet-brand transition-colors leading-snug">
                    {uni.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{uni.city}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Districts */}
      {districts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-14">
          <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-1">
                K-12 Education
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight">
                School Districts in {state.name}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {districts.map((district) => (
              <Link
                key={district.slug}
                href={`/districts/${district.slug}`}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-teal-brand dark:hover:border-teal-brand transition-colors group"
              >
                <div className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-teal-brand transition-colors leading-snug mb-1">
                  {district.name}
                </div>
                <div className="text-xs text-slate-400 mb-2">{district.city}</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">
                    {district.enrollment.toLocaleString()} students
                  </span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">
                    {district.schoolCount} schools
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-slate-50 dark:bg-slate-900 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-7">
            {STATE_FAQS.map((faq) => (
              <div
                key={faq.q(state)}
                className="border-b border-slate-200 dark:border-slate-800 pb-7"
              >
                <dt className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {faq.q(state)}
                </dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {faq.a(state)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <MonetizationStrip variant="district" />

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            {state.name} students & teachers
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Your academic OS is waiting
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Join students and teachers across {state.name} using Syllio to organize their
            semester, build syllabi, manage clubs, and beat burnout — starting free.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <strong className="text-slate-500">Disclaimer:</strong> Syllio is a student and educator
          productivity tool, not an official representative of any school district, university, or
          state education agency in {state.name}. Student enrollment counts, school district counts,
          and school counts are approximate figures from publicly available data and may not reflect
          current enrollment. Institution names are included for reference only. Content generated by
          Syllio does not constitute official academic guidance, and all educational decisions should
          be made in consultation with your institution&apos;s official advisors and policies.
        </p>
      </div>

      <Footer />
    </>
  );
}
