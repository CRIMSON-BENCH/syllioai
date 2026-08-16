import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { universities } from "@/lib/universities";

export const metadata: Metadata = {
  title: "Syllio for Universities — AI Student OS at 500+ Campuses",
  description:
    "Syllio is available at 500+ universities worldwide. Find your university for a guide to AI syllabus scanning, deadline management, and campus life tools.",
};

// US states + territories for grouping domestic universities
const US_STATES = new Set([
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming","District of Columbia",
]);

export default function UniversitiesPage() {
  const domestic = universities.filter((u) => US_STATES.has(u.state));
  const international = universities.filter((u) => !US_STATES.has(u.state));

  // Group international by country (state field = country name)
  const byCountry: Record<string, typeof universities> = {};
  for (const u of international) {
    if (!byCountry[u.state]) byCountry[u.state] = [];
    byCountry[u.state].push(u);
  }
  const countries = Object.keys(byCountry).sort();

  // Group US by state
  const byState: Record<string, typeof universities> = {};
  for (const u of domestic) {
    if (!byState[u.state]) byState[u.state] = [];
    byState[u.state].push(u);
  }
  const usStates = Object.keys(byState).sort();

  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Syllio at Your University
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-4 max-w-2xl">
          Syllio is used by students and teachers at {universities.length}+ universities worldwide.
          Find your campus for a guide to AI syllabus scanning, deadline management, and lesson
          planning.
        </p>
        <div className="flex gap-3 mb-10">
          <Link
            href="https://syllioai.com/auth"
            className="text-sm bg-violet-brand text-white px-5 py-2.5 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get Syllio free
          </Link>
          <Link
            href="/countries"
            className="text-sm border border-slate-200 dark:border-slate-800 px-5 py-2.5 rounded-full hover:border-teal-brand hover:text-teal-brand transition-colors"
          >
            Browse by country
          </Link>
        </div>

        {/* International */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          International — {international.length} universities
        </h2>
        <div className="space-y-8 mb-14">
          {countries.map((country) => (
            <section key={country}>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                {country}
              </h3>
              <div className="flex flex-wrap gap-2">
                {byCountry[country].map((u) => (
                  <Link
                    key={u.slug}
                    href={`/universities/${u.slug}`}
                    className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
                  >
                    {u.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* US */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          United States — {domestic.length} universities
        </h2>
        <div className="space-y-8">
          {usStates.map((state) => (
            <section key={state}>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                {state}
              </h3>
              <div className="flex flex-wrap gap-2">
                {byState[state].map((u) => (
                  <Link
                    key={u.slug}
                    href={`/universities/${u.slug}`}
                    className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
                  >
                    {u.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
