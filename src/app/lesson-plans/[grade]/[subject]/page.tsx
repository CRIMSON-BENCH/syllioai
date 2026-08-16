import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getSubjectBySlug, subjects } from "@/lib/subjects";

const GRADES = [
  { slug: "kindergarten", label: "Kindergarten", short: "K", level: "k12" },
  { slug: "1st-grade", label: "1st Grade", short: "1st", level: "k12" },
  { slug: "2nd-grade", label: "2nd Grade", short: "2nd", level: "k12" },
  { slug: "3rd-grade", label: "3rd Grade", short: "3rd", level: "k12" },
  { slug: "4th-grade", label: "4th Grade", short: "4th", level: "k12" },
  { slug: "5th-grade", label: "5th Grade", short: "5th", level: "k12" },
  { slug: "6th-grade", label: "6th Grade", short: "6th", level: "k12" },
  { slug: "7th-grade", label: "7th Grade", short: "7th", level: "k12" },
  { slug: "8th-grade", label: "8th Grade", short: "8th", level: "k12" },
  { slug: "9th-grade", label: "9th Grade (Freshman)", short: "9th", level: "high-school" },
  { slug: "10th-grade", label: "10th Grade (Sophomore)", short: "10th", level: "high-school" },
  { slug: "11th-grade", label: "11th Grade (Junior)", short: "11th", level: "high-school" },
  { slug: "12th-grade", label: "12th Grade (Senior)", short: "12th", level: "high-school" },
  { slug: "college", label: "College / University", short: "College", level: "college" },
  { slug: "graduate", label: "Graduate School", short: "Grad", level: "college" },
];

export function generateStaticParams() {
  const params: { grade: string; subject: string }[] = [];
  for (const grade of GRADES) {
    const gradeSubjects = subjects.filter((s) =>
      grade.level === "college"
        ? s.levels.includes("college") || s.levels.includes("both")
        : s.levels.includes("high-school") || s.levels.includes("both")
    );
    for (const subject of gradeSubjects) {
      params.push({ grade: grade.slug, subject: subject.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}): Promise<Metadata> {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const grade = GRADES.find((g) => g.slug === gradeSlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!grade || !subject) return {};
  return {
    title: `${grade.label} ${subject.name} Lesson Plan — AI Generator | Syllio`,
    description: `Generate a complete ${grade.label} ${subject.name} lesson plan with Syllio AI. Customize for your pacing, export to your LMS, and share with students in one click.`,
  };
}

export default async function LessonPlanPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}) {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const grade = GRADES.find((g) => g.slug === gradeSlug);
  const subject = getSubjectBySlug(subjectSlug);
  if (!grade || !subject) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Create a ${grade.label} ${subject.name} Lesson Plan`,
    description: `Use Syllio AI to generate a complete ${grade.label} ${subject.name} lesson plan — objectives, activities, and assessments included.`,
    step: [
      { "@type": "HowToStep", name: "Enter grade and subject", text: `Select ${grade.label} and ${subject.name} in Syllio's AI Lesson Planner.` },
      { "@type": "HowToStep", name: "Set learning objectives", text: "Add your specific learning outcomes or let Syllio suggest standards-aligned objectives." },
      { "@type": "HowToStep", name: "Generate lesson plan", text: "Syllio AI creates a week-by-week plan with activities, discussion questions, and assessments." },
      { "@type": "HowToStep", name: "Export or share", text: "Export to PDF, push to Canvas or Google Classroom, or share a class code with students." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Lesson Plans", href: "/lesson-plans" },
            { label: grade.label, href: `/lesson-plans/${grade.slug}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            Teacher Tool · {grade.label}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            {grade.label} {subject.name} Lesson Plan
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Generate a complete, week-by-week {grade.label} {subject.name} lesson plan in under two
            minutes. Syllio AI writes the objectives, activities, discussion questions, and assessments
            — you customize and export.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Generate my lesson plan free
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-teal-brand transition-colors"
            >
              Teacher plans from $5.99/mo
            </Link>
          </div>
        </div>

        {/* What's included */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">
            What Syllio generates for {grade.label} {subject.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              `${grade.label}-appropriate learning objectives`,
              "Week-by-week pacing guide",
              "Daily activity and discussion ideas",
              "Formative and summative assessment ideas",
              "Homework and reading assignments",
              "Differentiation suggestions (ELL, IEP, gifted)",
              "Standards alignment notes",
              "Export-ready PDF and DOCX format",
            ].map((item) => (
              <div key={item} className="flex gap-2.5 items-center text-sm text-slate-600 dark:text-slate-300">
                <span className="text-green shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Teacher workflow */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">How it works</h2>
          <ol className="space-y-5">
            {[
              { title: "Select grade and subject", desc: `Choose ${grade.label} and ${subject.name}, then set your course duration (semester, quarter, or year).` },
              { title: "Set your objectives", desc: "Describe your learning goals or let Syllio suggest standards-aligned objectives for your grade level." },
              { title: "AI generates your lesson plan", desc: `Syllio writes a complete ${grade.label} ${subject.name} lesson plan in under two minutes — activities, assessments, and pacing included.` },
              { title: "Pair it with your syllabus", desc: "Use the AI Syllabus Builder to turn your lesson plan into a student-facing syllabus. Share a class code — students auto-import all deadlines." },
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

        {/* Other grades */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">
            {subject.name} lesson plans for other grades
          </h2>
          <div className="flex flex-wrap gap-2">
            {GRADES.filter((g) => g.slug !== grade.slug).map((g) => (
              <Link
                key={g.slug}
                href={`/lesson-plans/${g.slug}/${subject.slug}`}
                className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 hover:border-teal-brand hover:text-teal-brand transition-colors"
              >
                {g.short} {subject.name}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            Generate your {grade.label} {subject.name} lesson plan
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Teacher Starter plan — from $5.99/month. First lesson plan is free.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-teal-brand text-slate-950 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio&apos;s AI-generated lesson plans are starting points for educators.
          Content may not align perfectly with your specific district curriculum standards or state requirements.
          Always review generated content before use and consult your school&apos;s curriculum guidelines.
          Syllio does not provide professional educational consulting or advising services.
        </p>
      </div>
      <Footer />
    </>
  );
}
