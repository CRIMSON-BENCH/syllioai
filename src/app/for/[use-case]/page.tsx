import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getUseCaseBySlug, getAllUseCaseSlugs } from "@/lib/use-cases";

export function generateStaticParams() {
  return getAllUseCaseSlugs();
}

type Props = {
  params: Promise<{ "use-case": string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams["use-case"];
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return { title: "Not Found" };

  return {
    title: `${useCase.headline} | Syllio`,
    description: useCase.subheadline,
    openGraph: {
      title: useCase.headline,
      description: useCase.subheadline,
      url: `https://www.syllioai.com/for/${useCase.slug}`,
    },
    alternates: {
      canonical: `https://www.syllioai.com/for/${useCase.slug}`,
    },
  };
}

function buildJsonLd(useCase: ReturnType<typeof getUseCaseBySlug>) {
  if (!useCase) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Syllio",
    url: "https://www.syllioai.com",
    applicationCategory: "EducationalApplication",
    description: useCase.jsonLdDescription,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", name: "AI Pro Student" },
      { "@type": "Offer", price: "9.99", priceCurrency: "USD", name: "OS Student" },
      { "@type": "Offer", price: "5.99", priceCurrency: "USD", name: "Teacher Starter" },
      { "@type": "Offer", price: "11.99", priceCurrency: "USD", name: "Teacher Pro" },
    ],
    featureList: useCase.features.map((f) => f.title),
    audience: {
      "@type": "Audience",
      audienceType: useCase.audienceLabel,
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams["use-case"];
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) notFound();

  const jsonLd = buildJsonLd(useCase);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "For", href: "/" },
              { label: useCase.audienceLabel },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-4">
            For {useCase.audienceLabel}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            {useCase.headline}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-9">
            {useCase.subheadline}
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-8 py-3.5 rounded-full font-semibold hover:bg-violet-dark transition-colors text-base"
          >
            {useCase.ctaText}
          </Link>
        </div>
      </section>

      {/* Benefits list */}
      <section className="bg-slate-900 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-brand mb-6 text-center">
            Why {useCase.audienceLabel} choose Syllio
          </p>
          <ul className="space-y-4">
            {useCase.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-violet-brand/20 border border-violet-brand/40 flex items-center justify-center text-xs font-bold text-violet-brand mt-0.5">
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3 text-center">
          Features built for {useCase.audienceLabel}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-center text-balance">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-12 max-w-xl mx-auto leading-relaxed">
          Syllio is purpose-built for {useCase.audienceLabel.toLowerCase()} — not a generic productivity tool dressed up with education labels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCase.features.map((feature) => (
            <div
              key={feature.title}
              className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-violet-brand dark:hover:border-violet-brand transition-colors"
            >
              <h3 className="font-extrabold text-base mb-2 text-slate-900 dark:text-slate-100">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-slate-50 dark:bg-slate-900 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "< 30 sec", label: "to scan a syllabus and populate your calendar" },
            { stat: "Free forever", label: "for the core academic OS — no card required" },
            { stat: "7-day warning", label: "before your highest-workload week hits" },
          ].map((item) => (
            <div key={item.stat}>
              <div className="text-2xl font-extrabold text-violet-brand mb-1">{item.stat}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Ready to get started?
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            The academic OS for {useCase.audienceLabel}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Free forever for the basics. Upgrade when you need more. Cancel any time.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              {useCase.ctaText}
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-700 text-slate-300 px-7 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors"
            >
              See all plans
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <strong className="text-slate-500">Disclaimer:</strong> Syllio is a student and educator
          productivity tool. Content generated by Syllio — including syllabi, lesson plans, course
          outlines, and study schedules — is for organizational purposes only and does not
          constitute official academic guidance, professional advice, or any form of legal,
          medical, or financial counsel. Always refer to your institution&apos;s official course
          requirements, academic policies, and advisor for authoritative information.
        </p>
      </div>

      <Footer />
    </>
  );
}
