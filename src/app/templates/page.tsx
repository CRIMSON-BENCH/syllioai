import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { subjects, SUBJECT_CATEGORIES } from "@/lib/subjects";
import MonetizationStrip from "@/components/MonetizationStrip";

export const metadata: Metadata = {
  title: "Free Syllabus Templates — AI Builder by Subject | Syllio",
  description:
    "Download free syllabus templates for 100+ subjects — Math, Science, English, History, AP courses, and more. Or use Syllio AI to build a custom syllabus in 60 seconds.",
};

export default function TemplatesPage() {
  const byCategory = SUBJECT_CATEGORIES.map((cat) => ({
    category: cat,
    label: cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    items: subjects.filter((s) => s.category === cat),
  }));

  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Syllabus Templates
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
            Free syllabus templates for every subject. Use Syllio&apos;s AI Syllabus Builder to
            customize any template for your school, semester, and grading policy — then share
            with students via a class code.
          </p>
        </div>

        <MonetizationStrip variant="teacher" className="mb-10" />

        {byCategory.map(({ category, label, items }) => (
          <section key={category} className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              {label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {items.map((subject) => (
                <Link
                  key={subject.slug}
                  href={`/templates/${subject.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2.5 hover:border-violet-brand hover:text-violet-brand transition-colors flex items-center justify-between gap-2"
                >
                  <span>{subject.name}</span>
                  <span className="text-xs text-slate-400 shrink-0">
                    {subject.levels.includes("both") || (subject.levels.includes("high-school") && subject.levels.includes("college"))
                      ? "K-12 + College"
                      : subject.levels.includes("college")
                      ? "College"
                      : "K-12"}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mt-4">
          <h2 className="text-xl font-bold mb-2">
            Don&apos;t see your subject?
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Syllio AI can build a syllabus for any subject. Just describe your course.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Build a custom syllabus
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
