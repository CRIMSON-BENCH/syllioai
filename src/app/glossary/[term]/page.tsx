import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getTermBySlug,
  getAllTermSlugs,
  GlossaryTerm,
  glossaryTerms,
  GLOSSARY_CATEGORIES,
} from "@/lib/glossary";

export function generateStaticParams() {
  return getAllTermSlugs();
}

type Props = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: termSlug } = await params;
  const term = getTermBySlug(termSlug);
  if (!term) return { title: "Term Not Found" };

  return {
    title: `${term.term} — Definition & Meaning | Syllio Education Glossary`,
    description: term.definition.slice(0, 160) + (term.definition.length > 160 ? "…" : ""),
    openGraph: {
      title: `${term.term} — Definition & Meaning | Syllio Education Glossary`,
      description: term.definition.slice(0, 160),
      url: `https://www.syllioai.com/glossary/${term.slug}`,
    },
    alternates: { canonical: `https://www.syllioai.com/glossary/${term.slug}` },
  };
}

function buildDefinedTermJsonLd(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Syllio Academic Glossary",
      url: "https://www.syllioai.com/glossary",
    },
    url: `https://www.syllioai.com/glossary/${term.slug}`,
  };
}

function getSyllioConnectionContent(term: GlossaryTerm): { heading: string; paragraphs: string[] } {
  const connections: Partial<Record<string, { heading: string; paragraphs: string[] }>> = {
    syllabus: {
      heading: "Using Syllio to Manage Your Syllabus",
      paragraphs: [
        "Syllio was built around the syllabus — not as a static document, but as the foundational data source for an entire semester's planning. When you upload or photograph a syllabus in Syllio, the AI reads every deadline, assignment, exam, and policy and converts it into structured calendar data in under 30 seconds. The syllabus stops being a document you lose and becomes the engine of your academic calendar.",
        "For teachers, Syllio's AI Syllabus Builder generates a complete, polished syllabus from your course parameters — learning objectives, major assignments, grading policy, and schedule — in under 60 seconds. The resulting document can be distributed via a class code so students auto-import every deadline, or exported directly to Canvas and Google Classroom.",
      ],
    },
    "learning-management-system-lms": {
      heading: "Using Syllio with Your LMS",
      paragraphs: [
        "Syllio is designed to complement your institution's learning management system, not replace it. On the student side, Syllio's LMS sync connects to Canvas, Blackboard, and Google Classroom and pulls every assignment and deadline directly into your Syllio calendar. You continue submitting work through your LMS — Syllio just ensures you never miss a deadline posted there.",
        "For teachers on Syllio's Teacher Pro plan, Syllio can export AI-built syllabi and lesson plans directly to Canvas or Google Classroom, populating assignments with due dates and descriptions automatically. This eliminates the manual re-entry step between creating content in Syllio and publishing it to your LMS.",
      ],
    },
    "canvas-lms": {
      heading: "Using Syllio with Canvas",
      paragraphs: [
        "Canvas is the most widely adopted LMS in US higher education, and Syllio is designed to extend what Canvas can do — not compete with it. Syllio's Canvas sync automatically pulls every assignment your professors post in Canvas into your unified Syllio calendar, alongside deadlines from syllabi you've scanned and club events from your student organizations.",
        "For teachers, Syllio's Teacher Pro plan exports AI-built syllabi directly to Canvas, creating assignments in your course with due dates, point values, and descriptions pre-populated. The result is a workflow that starts in Syllio and publishes to Canvas automatically — no duplicate data entry.",
      ],
    },
    "gpa-grade-point-average": {
      heading: "Using Syllio to Protect Your GPA",
      paragraphs: [
        "GPA outcomes are directly connected to deadline management. Research consistently shows that missed assignments and late submissions are among the most common causes of unexpected GPA drops — not academic inability, but organizational failure. Syllio's AI syllabus scanning and LMS sync ensure that every graded item in every course appears in your calendar before it's due.",
        "Syllio's Burnout Radar™ adds another layer of GPA protection: by flagging high-workload weeks seven days in advance, it gives you enough time to redistribute your study effort before your performance suffers. Students who see the crunch week coming can prepare. Students who don't have it visible get surprised by it.",
      ],
    },
    "burnout": {
      heading: "Using Syllio to Prevent Academic Burnout",
      paragraphs: [
        "Academic burnout rarely comes from a single catastrophic event — it accumulates from weeks of unmanaged overload. Syllio addresses burnout at the structural level by making your full workload visible across all courses simultaneously. When you can see that week 9 has two exams, a research paper, and three weekly assignments, you can begin distributing the preparation in week 6 instead of trying to survive week 9.",
        "Syllio's Burnout Radar™ feature does this analysis automatically. It monitors your assignment calendar, identifies high-density weeks, and sends you a warning alert seven days before the load peaks — giving you enough runway to adjust your plan before you're already overwhelmed.",
      ],
    },
    "attendance-policy": {
      heading: "Using Syllio to Stay on Top of Attendance Requirements",
      paragraphs: [
        "Attendance policies vary significantly across institutions and instructors, and the consequences of missing the threshold can be severe — grade reductions, automatic failures, or academic probation. Syllio keeps your course policies alongside your deadlines so your attendance requirements are visible in the same view as your assignments.",
        "For students involved in clubs and organizations, Syllio's Club OS also tracks event attendance digitally — creating a verified record of participation that matters for service hour requirements, officer elections, and national chapter reporting.",
      ],
    },
  };

  const connection = connections[term.slug];
  if (connection) return connection;

  // Generic fallback
  return {
    heading: `Using Syllio to Manage ${term.term}`,
    paragraphs: [
      `Understanding ${term.term} is the first step — having the right tools to manage it is the second. Syllio's AI-powered academic OS gives students and teachers the infrastructure to handle the full range of ${term.category === "academic-policies" ? "academic policies and requirements" : term.category === "assessment" ? "assessments and graded work" : term.category === "curriculum" ? "course content and curriculum planning" : "academic responsibilities"} that ${term.term.toLowerCase()} represents.`,
      `Students using Syllio can track every deadline related to ${term.term.toLowerCase()} across all their courses in one unified calendar — powered by AI syllabus scanning, LMS sync, and class code import. Teachers can build course materials that address ${term.term.toLowerCase()} directly from Syllio's AI tools and share them with students instantly.`,
    ],
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  "academic-policies": "bg-violet-brand/10 text-violet-brand",
  assessment: "bg-teal-brand/10 text-teal-dark",
  curriculum: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "student-life": "bg-green-bg text-green",
  "classroom-management": "bg-amber/10 text-amber",
  "higher-ed": "bg-violet-light/10 text-violet-dark",
  k12: "bg-teal-dark/10 text-teal-dark",
};

export default async function GlossaryTermPage({ params }: Props) {
  const { term: termSlug } = await params;
  const term = getTermBySlug(termSlug);

  if (!term) notFound();

  const categoryLabel =
    GLOSSARY_CATEGORIES.find((c) => c.value === term.category)?.label ?? term.category;

  const relatedTermObjs = term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean) as typeof glossaryTerms;

  const syllioSection = getSyllioConnectionContent(term);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDefinedTermJsonLd(term)) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Glossary", href: "/glossary" },
              { label: term.term },
            ]}
          />
          <div className="mb-4">
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[term.category] ?? "bg-slate-800 text-slate-300"}`}
            >
              {categoryLabel}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
            {term.term}
          </h1>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-14 space-y-12">

        {/* Full definition */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Definition
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed text-balance">
            {term.definition}
          </p>
        </section>

        {/* Related terms */}
        {relatedTermObjs.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Related Terms
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedTermObjs.slice(0, 4).map((related) => (
                <Link
                  key={related.slug}
                  href={`/glossary/${related.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {related.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Syllio connection */}
        <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-extrabold tracking-tight mb-4 text-violet-brand">
            {syllioSection.heading}
          </h2>
          {syllioSection.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3 last:mb-0"
            >
              {para}
            </p>
          ))}
        </section>

        {/* CTA */}
        <div className="bg-slate-950 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-extrabold tracking-tight mb-3">
            Ready to put this knowledge to work?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-md mx-auto">
            Syllio is the academic OS that handles the systems behind every term in
            this glossary — from scanning syllabi to tracking deadlines to building
            your portfolio.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <strong className="text-slate-500">Disclaimer:</strong> This glossary entry is for
          general educational reference only. Definitions may vary by institution, state, or
          jurisdiction. Always consult your institution&apos;s official academic policies, your
          academic advisor, or a qualified professional for guidance specific to your situation.
        </p>

        {/* Back link */}
        <Link
          href="/glossary"
          className="text-sm font-semibold text-violet-brand hover:text-violet-dark transition-colors"
        >
          &larr; Back to full glossary
        </Link>
      </main>

      <Footer />
    </>
  );
}
