import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SUBJECT_CATEGORIES, getSubjectsByCategory } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "AI Lesson Plan Generator — All Grades & Subjects | Syllio",
  description:
    "Generate complete lesson plans for any grade and subject with Syllio AI. Kindergarten through college — objectives, activities, and assessments included.",
};

const GRADES = [
  { slug: "kindergarten", label: "Kindergarten" },
  { slug: "1st-grade", label: "1st Grade" },
  { slug: "2nd-grade", label: "2nd Grade" },
  { slug: "3rd-grade", label: "3rd Grade" },
  { slug: "4th-grade", label: "4th Grade" },
  { slug: "5th-grade", label: "5th Grade" },
  { slug: "6th-grade", label: "6th Grade" },
  { slug: "7th-grade", label: "7th Grade" },
  { slug: "8th-grade", label: "8th Grade" },
  { slug: "9th-grade", label: "9th Grade" },
  { slug: "10th-grade", label: "10th Grade" },
  { slug: "11th-grade", label: "11th Grade" },
  { slug: "12th-grade", label: "12th Grade" },
  { slug: "college", label: "College" },
  { slug: "graduate", label: "Graduate School" },
];

export default function LessonPlansPage() {
  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">AI Lesson Plan Generator</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
          Generate a complete, week-by-week lesson plan for any grade and subject. Syllio AI writes
          the objectives, activities, and assessments — you customize and export.
        </p>

        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Browse by Grade</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-12">
          {GRADES.map((g) => (
            <Link
              key={g.slug}
              href={`/lesson-plans/${g.slug}/algebra`}
              className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-center hover:border-teal-brand hover:text-teal-brand transition-colors"
            >
              {g.label}
            </Link>
          ))}
        </div>

        {SUBJECT_CATEGORIES.map((cat) => {
          const catSubjects = getSubjectsByCategory(cat).slice(0, 8);
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                {cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
              <div className="flex flex-wrap gap-2">
                {catSubjects.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/lesson-plans/college/${s.slug}`}
                    className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
