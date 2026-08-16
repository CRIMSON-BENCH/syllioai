import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getSubjectBySlug, subjects, getSubjectsByCategory } from "@/lib/subjects";
import MonetizationStrip from "@/components/MonetizationStrip";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) return {};
  return {
    title: `${subject.name} Syllabus Template — Free AI Builder | Syllio`,
    description: `Download a free ${subject.name} syllabus template or use Syllio's AI to build a complete, customized ${subject.name} syllabus in under 60 seconds.`,
  };
}

export default async function SubjectTemplatePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) notFound();

  const related = getSubjectsByCategory(subject.category)
    .filter((s) => s.slug !== subject.slug)
    .slice(0, 5);

  const levelLabel =
    subject.levels.includes("both")
      ? "High School & College"
      : subject.levels.includes("high-school") && subject.levels.includes("college")
      ? "High School & College"
      : subject.levels.includes("college")
      ? "College"
      : "High School";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Create a ${subject.name} Syllabus`,
    description: `Use Syllio's AI Syllabus Builder to generate a complete ${subject.name} syllabus. Customize for your school, export to PDF or LMS.`,
    tool: { "@type": "HowToTool", name: "Syllio AI Syllabus Builder" },
    step: [
      { "@type": "HowToStep", name: "Enter your course details", text: "Type your course name, school, semester, and learning objectives into Syllio." },
      { "@type": "HowToStep", name: "Generate with AI", text: `Syllio's AI builds a complete ${subject.name} syllabus in under 60 seconds.` },
      { "@type": "HowToStep", name: "Customize and review", text: "Edit the syllabus to match your grading policy, pacing, and required texts." },
      { "@type": "HowToStep", name: "Export or share", text: "Export to PDF, DOCX, or share directly with students via a class code." },
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
            { label: "Templates", href: "/templates" },
            { label: subject.category.replace(/-/g, " "), href: `/templates?category=${subject.category}` },
            { label: subject.name },
          ]}
        />

        <div className="mb-10">
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-brand">
              {subject.category.replace(/-/g, " ")}
            </span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {levelLabel}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-balance">
            {subject.name} Syllabus Template
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Build a complete, customized {subject.name} syllabus in under 60 seconds with Syllio&apos;s
            AI Syllabus Builder — or download a free template to edit yourself.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Build my {subject.name} syllabus free
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              Teacher plans from $5.99/mo
            </Link>
          </div>
        </div>

        {/* What to include */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">
            What a {subject.name} syllabus should include
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Course description and objectives",
              "Required textbooks and materials",
              "Weekly schedule and pacing guide",
              "Assignment breakdown and due dates",
              "Grading policy and weighting",
              "Attendance and late work policy",
              "Exam dates and format",
              "Academic integrity statement",
              "Accommodation and accessibility policy",
              "Contact information and office hours",
            ].map((item) => (
              <div key={item} className="flex gap-2.5 items-center text-sm text-slate-600 dark:text-slate-300">
                <span className="text-green shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">How Syllio builds your {subject.name} syllabus</h2>
          <ol className="space-y-5">
            {[
              { step: "1", title: "Enter your course details", desc: `Type your school name, semester, course level (${levelLabel}), and any required texts or standards.` },
              { step: "2", title: "AI generates in 60 seconds", desc: `Syllio's AI writes a complete ${subject.name} syllabus — objectives, pacing guide, assignment schedule, grading breakdown, and policies.` },
              { step: "3", title: "Customize to your classroom", desc: "Edit any section — add your grading weights, adjust the pacing, swap in your required readings." },
              { step: "4", title: "Share with a class code", desc: "Publish your syllabus and share a 6-character code. Students join in Syllio and every deadline auto-imports to their calendar." },
            ].map((s) => (
              <li key={s.step} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-brand text-white text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <strong className="text-sm">{s.title}</strong>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* For students */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            Got a {subject.name} syllabus from your teacher?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
            If your {subject.name} teacher uses Syllio, you can join with their class code and every
            deadline appears in your calendar automatically. No scanning needed. If they don&apos;t use
            Syllio yet, photograph the syllabus and Syllio&apos;s AI extracts every due date.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="text-sm font-semibold text-violet-brand hover:underline"
          >
            Scan my {subject.name} syllabus free →
          </Link>
        </section>

        {/* Related subjects */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-5">
              More {subject.category.replace(/-/g, " ")} templates
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/templates/${s.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <MonetizationStrip variant="teacher" />
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            Build your {subject.name} syllabus in 60 seconds
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            Teacher Starter plan — from $5.99/month. First syllabus is free.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Start for free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio&apos;s AI-generated syllabi are starting points for educators.
          Content does not constitute official academic guidance and may not reflect your institution&apos;s
          specific requirements. Always review generated content and consult your department&apos;s
          official standards before distributing to students.
        </p>
      </div>
      <Footer />
    </>
  );
}
