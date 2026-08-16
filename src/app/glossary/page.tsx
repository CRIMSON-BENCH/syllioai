import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { glossaryTerms, GLOSSARY_CATEGORIES } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Academic Glossary — Education Terms & Definitions | Syllio",
  description:
    "A comprehensive glossary of academic terms for students and teachers — from GPA and syllabi to IEPs, LMS platforms, and standards-based grading. Free reference for K-12 and higher education.",
  openGraph: {
    title: "Academic Glossary — Education Terms & Definitions | Syllio",
    description:
      "Clear definitions of hundreds of academic terms — organized by category and alphabet — for students, teachers, and parents navigating K-12 and higher education.",
    url: "https://www.syllioai.com/glossary",
  },
  alternates: { canonical: "https://www.syllioai.com/glossary" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Academic Glossary — Education Terms & Definitions | Syllio",
  url: "https://www.syllioai.com/glossary",
  description:
    "Comprehensive definitions of academic and education terms for students, teachers, and parents in K-12 and higher education.",
  publisher: {
    "@type": "Organization",
    name: "Syllio",
    url: "https://www.syllioai.com",
  },
};

// Group terms alphabetically
function groupByFirstLetter(terms: typeof glossaryTerms) {
  const groups: Record<string, typeof glossaryTerms> = {};
  for (const term of terms) {
    const letter = term.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(term);
  }
  return groups;
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

export default function GlossaryIndexPage() {
  const sortedTerms = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );
  const grouped = groupByFirstLetter(sortedTerms);
  const letters = Object.keys(grouped).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            crumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Education Reference
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-balance">
            Academic Glossary
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Clear, authoritative definitions for every term you&apos;ll encounter in
            K-12 and higher education — from syllabi and LMS platforms to GPA scales
            and IEP requirements.
          </p>
        </div>
      </section>

      {/* Category filter strip */}
      <section className="bg-slate-900 border-b border-slate-800 px-4 py-4 sticky top-14 z-40">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mr-2">
            Categories:
          </span>
          {GLOSSARY_CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={`#${cat.value}`}
              className={`text-xs px-3 py-1 rounded-full border border-slate-700 font-medium transition-colors hover:border-violet-brand hover:text-violet-brand ${CATEGORY_COLORS[cat.value] ?? "text-slate-400"}`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Alphabet jump strip */}
      <section className="bg-slate-900/50 border-b border-slate-800 px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1">
          {letters.map((letter) => (
            <Link
              key={letter}
              href={`#letter-${letter}`}
              className="text-xs font-bold w-7 h-7 flex items-center justify-center rounded-md border border-slate-700 text-slate-400 hover:border-violet-brand hover:text-violet-brand transition-colors"
            >
              {letter}
            </Link>
          ))}
        </div>
      </section>

      {/* Terms grouped by letter */}
      <main className="max-w-5xl mx-auto px-4 py-14 space-y-12">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-28">
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="text-3xl font-extrabold text-violet-brand">{letter}</h2>
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>
            <ul className="space-y-3">
              {grouped[letter].map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 rounded-xl border border-transparent hover:border-violet-brand hover:bg-violet-brand/5 transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-violet-brand transition-colors">
                          {term.term}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[term.category] ?? "bg-slate-100 text-slate-500"}`}
                        >
                          {GLOSSARY_CATEGORIES.find((c) => c.value === term.category)
                            ?.label ?? term.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {term.definition.split(". ")[0]}.
                      </p>
                    </div>
                    <span className="text-violet-brand text-sm font-semibold shrink-0 self-center sm:self-start sm:mt-1 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Put these concepts into practice with Syllio
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-7">
            Whether you&apos;re a student navigating syllabi and LMS platforms or a teacher
            building curriculum and lesson plans — Syllio gives you the tools to turn
            academic knowledge into action.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
