import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { subjects } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "Find a Tutor | Syllio Tutoring Marketplace",
  description:
    "Find a tutor for your exact class at your exact school. Syllio matches students with vetted tutors for any subject — math, science, writing, languages, and more.",
};

const subjectGroups = [
  { label: "Math", slugs: ["algebra", "geometry", "trigonometry", "calculus", "statistics", "precalculus"] },
  { label: "Sciences", slugs: ["biology", "chemistry", "physics", "environmental-science", "anatomy", "earth-science"] },
  { label: "Languages", slugs: ["english", "spanish", "french", "german", "mandarin", "latin"] },
  { label: "Social Studies", slugs: ["us-history", "world-history", "ap-us-history", "economics", "psychology", "sociology"] },
  { label: "Test Prep", slugs: ["sat-prep", "act-prep", "ap-chemistry", "ap-biology", "ap-calculus-bc", "ap-english-language"] },
];

const steps = [
  { n: "1", title: "Find your subject", body: "Search by subject, class name, or school. We match you with tutors who know your exact curriculum." },
  { n: "2", title: "Book a session", body: "Choose your tutor's availability. Sessions are 1-on-1, video or in-person. Pay per session — no subscription." },
  { n: "3", title: "Sync your syllabus", body: "Your Syllio deadline calendar is already there. Your tutor sees exactly what's coming up so sessions stay focused." },
];

export default function TutorsPage() {
  const subjectMap = new Map(subjects.map((s) => [s.slug, s.name]));

  return (
    <>
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Hero */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-brand mb-3">
            Coming soon — Join the waitlist
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance mb-4">
            A tutor who knows your class,<br className="hidden sm:block" /> not just the subject.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8">
            Syllio tutors are matched to your school, your class, and your actual syllabus. No generic sessions — every tutor knows what test is coming up.
          </p>
          <form className="flex gap-2 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-slate-300 dark:border-slate-700 rounded-full px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:border-violet-brand"
            />
            <button
              type="submit"
              className="bg-violet-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-violet-dark transition-colors shrink-0"
            >
              Join waitlist
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-3">No spam. We&apos;ll notify you when tutors are available in your area.</p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-10 h-10 rounded-full bg-violet-brand/10 text-violet-brand font-extrabold text-lg flex items-center justify-center mx-auto mb-3">
                {s.n}
              </div>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Why different */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 mb-14">
          <h2 className="text-xl font-extrabold mb-6">Why Syllio tutoring is different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Syllabus-aware sessions", body: "Tutors can see your upcoming deadlines. You never have to explain what's due." },
              { title: "School-matched tutors", body: "We prioritize tutors who have taken the same class at your school or college." },
              { title: "Pay per session", body: "No subscription. Book one session or a hundred — you control the spend." },
              { title: "Burnout Radar integration", body: "When your load score spikes, Syllio can automatically suggest booking a session." },
            ].map((c) => (
              <div key={c.title} className="bg-white dark:bg-slate-800 rounded-xl p-4">
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Browse by subject */}
        <h2 className="text-xl font-extrabold mb-5">Browse tutors by subject</h2>
        <div className="space-y-6 mb-14">
          {subjectGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.slugs.map((slug) => {
                  const name = subjectMap.get(slug) ?? slug;
                  return (
                    <Link
                      key={slug}
                      href={`/tutors?subject=${slug}`}
                      className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Become a tutor */}
        <div className="bg-violet-brand/10 dark:bg-violet-brand/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Become a Syllio tutor</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Set your own rates. Work with students who already have their syllabus organized. Keep 80–85% of every session fee.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Apply to tutor
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
