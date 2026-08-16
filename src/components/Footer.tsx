import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Revenue stream nav — 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">

          {/* Students */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Students</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/pricing" className="hover:text-violet-brand">Free plan</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand">AI Pro — $4.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand">OS Student — $9.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand">Portfolio PDF — $4.99</Link></li>
              <li><Link href="/tutors" className="hover:text-teal-brand">Find a Tutor</Link></li>
              <li><Link href="/features/burnout-radar" className="hover:text-violet-brand">Burnout Radar™</Link></li>
              <li><Link href="/features/club-os" className="hover:text-violet-brand">Club OS</Link></li>
            </ul>
          </div>

          {/* Teachers */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Teachers</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/pricing" className="hover:text-teal-brand">Teacher Starter — $5.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-brand">Teacher Pro — $11.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-brand">Teacher + Student Bundle</Link></li>
              <li><Link href="/features/syllabus-builder" className="hover:text-teal-brand">AI Syllabus Builder</Link></li>
              <li><Link href="/features/lesson-planner" className="hover:text-teal-brand">AI Lesson Planner</Link></li>
              <li><Link href="/lesson-plans" className="hover:text-teal-brand">Lesson Plan Library</Link></li>
              <li><Link href="/templates" className="hover:text-teal-brand">Syllabus Templates</Link></li>
            </ul>
          </div>

          {/* Parents & Counselors */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Parents & Counselors</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/pricing" className="hover:text-violet-brand font-medium text-violet-brand/80">Parent Portal — $3.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand font-medium text-violet-brand/80">College Counselor — $24.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand">Portfolio PDF Export</Link></li>
              <li><Link href="/tutors" className="hover:text-violet-brand">Tutoring Marketplace</Link></li>
              <li><Link href="/for/college-counselors" className="hover:text-violet-brand">For counselors →</Link></li>
            </ul>
          </div>

          {/* Schools & API */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Schools & Developers</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/pricing" className="hover:text-violet-brand">School Plan — $49.99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-brand">District Plan — $199/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-brand font-medium text-teal-brand/80">API Starter — $99/mo</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-brand font-medium text-teal-brand/80">API Pro — $299/mo</Link></li>
              <li><Link href="/contact" className="hover:text-violet-brand">Contact sales →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Company</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/pricing" className="hover:text-violet-brand">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-violet-brand">Blog</Link></li>
              <li><Link href="/glossary" className="hover:text-violet-brand">Glossary</Link></li>
              <li><Link href="/compare/magicschool-ai" className="hover:text-violet-brand">vs MagicSchool AI</Link></li>
              <li><Link href="/about" className="hover:text-violet-brand">About</Link></li>
              <li><Link href="/contact" className="hover:text-violet-brand">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-violet-brand">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-violet-brand">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Pricing quick-links strip */}
        <div className="border-t border-b border-slate-100 dark:border-slate-800 py-4 mb-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Plans:</span>
            {[
              { label: "Free", href: "/pricing" },
              { label: "AI Pro $4.99", href: "/pricing" },
              { label: "OS Student $9.99", href: "/pricing" },
              { label: "Teacher Starter $5.99", href: "/pricing" },
              { label: "Teacher Pro $11.99", href: "/pricing" },
              { label: "Parent Portal $3.99", href: "/pricing" },
              { label: "College Counselor $24.99", href: "/pricing" },
              { label: "School $49.99", href: "/pricing" },
              { label: "District $199", href: "/pricing" },
              { label: "API from $99", href: "/pricing" },
            ].map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="text-xs text-slate-400 hover:text-violet-brand transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            <strong className="text-slate-500">Disclaimer:</strong> Syllio is a student and educator productivity tool.
            Content generated by Syllio, including syllabi, lesson plans, course outlines, and study schedules,
            is for organizational purposes only and does not constitute official academic guidance, professional
            advice, or any form of legal, medical, or financial counsel. Always refer to your institution&apos;s
            official course requirements, academic policies, and advisor for authoritative information.
          </p>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Syllio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
