import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Syllio — The Student & Teacher OS for Classes, Clubs & Curriculum",
  description:
    "Scan your syllabus with AI to get every deadline in your calendar. Build polished syllabi in minutes. Manage clubs, track your portfolio, and beat burnout — all in one app.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Syllio",
  url: "https://www.syllioai.com",
  applicationCategory: "EducationalApplication",
  description:
    "AI-powered student and teacher OS. Students scan syllabi to auto-import deadlines. Teachers build syllabi in minutes. One closed loop.",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
    { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
    { "@type": "Offer", price: "9.99", priceCurrency: "USD", name: "OS Student" },
    { "@type": "Offer", price: "5.99", priceCurrency: "USD", name: "Teacher Starter" },
    { "@type": "Offer", price: "11.99", priceCurrency: "USD", name: "Teacher Pro" },
  ],
  featureList: [
    "AI syllabus scan — photo to calendar",
    "Burnout Radar™ predictive load alerts",
    "Club OS — roster, attendance, mass push",
    "4-Year Portfolio — auto link-in-bio",
    "AI Syllabus Builder for teachers",
    "AI Lesson Planner for teachers",
    "Class code import — teacher to student in one click",
    "LMS sync — Canvas, Blackboard, Google Classroom",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Syllio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Syllio is an AI-powered app for students and teachers. Students photograph their syllabus and Syllio extracts every assignment, exam, and due date into their calendar. Teachers use Syllio's AI Syllabus Builder to create and share polished syllabi in minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI syllabus scan work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take a photo of your printed syllabus or upload a PDF. Syllio's AI reads the document, identifies every deadline, exam, reading, and assignment, and adds them directly to your Syllio calendar. The whole process takes under 30 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Is Syllio free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Syllio's Free plan includes a unified calendar, unlimited club memberships, and 2 AI syllabus scans per semester — forever free. Paid plans start at $4.99/month for unlimited scans and LMS sync.",
      },
    },
    {
      "@type": "Question",
      name: "Can teachers use Syllio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Syllio's Teacher plans include an AI Syllabus Builder, AI Lesson Planner, AI Assignment Generator, and a class code system so students can auto-import your syllabus without scanning.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-4">
            For Students & Teachers
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            The student OS for classes & clubs.
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Scan a syllabus, get every deadline. Build polished syllabi in minutes.
            Run your clubs, push events to everyone&apos;s timeline. One app. Zero spreadsheets.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Get started — it&apos;s free
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

      {/* Feature trio */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📅",
              title: "One timeline",
              desc: "Every class deadline + every club event in one feed.",
              href: "/features/ai-syllabus-scan",
            },
            {
              icon: "⚡",
              title: "AI syllabus scan",
              desc: "Snap a photo, get every due date auto-extracted.",
              href: "/features/ai-syllabus-scan",
            },
            {
              icon: "👥",
              title: "Club OS",
              desc: "Roster, attendance, mass push — all built in.",
              href: "/features/club-os",
            },
          ].map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h2 className="text-white font-bold mb-2">{f.title}</h2>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Student features */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-3">
          For Students
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
          Built for how you actually study.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
          Six things every student secretly needs — bundled into one app.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI Syllabus Scan",
              desc: "Photograph your syllabus. Our AI extracts every assignment, exam, and reading into your calendar.",
              href: "/features/ai-syllabus-scan",
            },
            {
              title: "Burnout Radar™",
              desc: "Predictive load alerts warn you a week before your hardest stretch. Built into AI Pro.",
              href: "/features/burnout-radar",
            },
            {
              title: "Real Push Notifications",
              desc: "Club presidents can mass-push event reminders straight to members' home screens.",
              href: "/features/club-os",
            },
            {
              title: "4-Year Portfolio",
              desc: "Auto-builds a public link-in-bio of your verified clubs, hours, and leadership roles.",
              href: "/features/portfolio",
            },
            {
              title: "Verified Badges",
              desc: "Officer roles and volunteer hours are verified by your club leadership, not self-reported.",
              href: "/features/verified-badges",
            },
            {
              title: "LMS Sync",
              desc: "Pull deadlines from Canvas, Blackboard, and Google Classroom automatically.",
              href: "/features/lms-sync",
            },
          ].map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
            >
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Teacher section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            For Teachers
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-balance">
            Build the syllabus. Share the code. Students auto-import everything.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
            Syllio&apos;s closed loop means teachers create the syllabus in Syllio and students
            join with a class code — every deadline appears in their calendar instantly, no
            scanning required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "AI Syllabus Builder",
                desc: "Enter your course details and Syllio generates a complete, polished syllabus in under 60 seconds. Edit, customize, and export to PDF or your LMS.",
                href: "/features/syllabus-builder",
              },
              {
                title: "AI Lesson Planner",
                desc: "Turn your syllabus into a week-by-week lesson plan automatically. Adjust pacing, add activities, and export to Canvas or Google Classroom.",
                href: "/features/lesson-planner",
              },
              {
                title: "Class Code Import",
                desc: "Publish your syllabus with a 6-character class code. Students join and every deadline lands in their Syllio calendar — no scanning, no manual entry.",
                href: "/features/class-code",
              },
              {
                title: "AI Assignment Generator",
                desc: "Create standards-aligned assignments and rubrics from your learning objectives. Save hours of prep time every week.",
                href: "/features/assignment-generator",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
              >
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link
              href="/features/syllabus-builder"
              className="text-sm bg-teal-brand text-slate-950 px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Explore teacher tools
            </Link>
            <Link
              href="/pricing"
              className="text-sm border border-slate-300 dark:border-slate-600 px-5 py-2.5 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              See teacher pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold tracking-tight mb-10">
          Used across universities, high schools, and classrooms.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {[
            { stat: "Zero scanning", label: "when teachers share a class code", color: "text-violet-brand" },
            { stat: "< 30 seconds", label: "to generate a complete AI syllabus", color: "text-teal-brand" },
            { stat: "7-day warning", label: "before your burnout week hits", color: "text-green" },
          ].map((s) => (
            <div key={s.stat}>
              <div className={`text-2xl font-extrabold ${s.color} mb-1`}>{s.stat}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: "What is Syllio?",
                a: "Syllio is an AI-powered app for students and teachers. Students photograph their syllabus and Syllio extracts every deadline into their calendar. Teachers use Syllio to build polished syllabi and lesson plans in minutes.",
              },
              {
                q: "How does the AI syllabus scan work?",
                a: "Take a photo of your printed syllabus or upload a PDF. Syllio's AI reads the document and identifies every deadline, exam, reading, and assignment, then adds them to your calendar — in under 30 seconds.",
              },
              {
                q: "Is Syllio free?",
                a: "Yes. The Free plan includes a unified calendar, unlimited club memberships, and 2 AI syllabus scans per semester. Paid plans start at $4.99/month for students and $5.99/month for teachers.",
              },
              {
                q: "What LMS platforms does Syllio integrate with?",
                a: "Syllio syncs with Canvas, Blackboard, and Google Classroom on the student side. Teachers can export directly to Canvas and Google Classroom on Teacher Pro.",
              },
              {
                q: "How does the class code work?",
                a: "Teachers on a Teacher plan publish their syllabus with a 6-character class code. Students enter the code in Syllio and every deadline, assignment, and exam instantly appears in their calendar — no scanning required.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <dt className="font-semibold mb-2">{faq.q}</dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Ready to run your semester?
          </h2>
          <p className="text-slate-400 mb-8">
            Free forever for the basics. Upgrade when you need superpowers.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://app.syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Create your free account
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
