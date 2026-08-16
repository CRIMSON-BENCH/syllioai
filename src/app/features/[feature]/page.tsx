import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getFeatureBySlug, features } from "@/lib/features";

export function generateStaticParams() {
  return features.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}): Promise<Metadata> {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};
  return {
    title: `${feature.name} — ${feature.tagline} | Syllio`,
    description: feature.description,
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const audienceLabel =
    feature.audience === "students"
      ? "Students"
      : feature.audience === "teachers"
      ? "Teachers"
      : "Students & Teachers";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `Syllio — ${feature.name}`,
    description: feature.description,
    applicationCategory: "EducationalApplication",
    featureList: feature.benefits,
    offers: { "@type": "Offer", description: feature.price },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is Syllio's ${feature.name}?`,
        acceptedAnswer: { "@type": "Answer", text: feature.description },
      },
      {
        "@type": "Question",
        name: `How much does ${feature.name} cost?`,
        acceptedAnswer: { "@type": "Answer", text: feature.price },
      },
      {
        "@type": "Question",
        name: `Who is ${feature.name} for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${feature.name} is built for ${audienceLabel.toLowerCase()}.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: feature.name },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-brand">
            {audienceLabel}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            {feature.name}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
            {feature.tagline}
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {feature.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://syllioai.com/auth"
              className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
            >
              Try {feature.name} free
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-violet-brand transition-colors"
            >
              {feature.price}
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feature.benefits.map((b) => (
              <div
                key={b}
                className="flex gap-3 items-start bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800"
              >
                <span className="text-green font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">More Syllio features</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features
              .filter((f) => f.slug !== feature.slug)
              .slice(0, 6)
              .map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {f.name}
                </Link>
              ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">Frequently asked questions</h2>
          <dl className="space-y-4">
            {[
              {
                q: `What is Syllio's ${feature.name}?`,
                a: feature.description,
              },
              {
                q: `How much does ${feature.name} cost?`,
                a: feature.price,
              },
              {
                q: `Who is ${feature.name} for?`,
                a: `${feature.name} is built for ${audienceLabel.toLowerCase()}.`,
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <dt className="font-semibold mb-1.5">{faq.q}</dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">
            Ready to try {feature.name}?
          </h2>
          <p className="text-slate-400 text-sm mb-5">{feature.price}</p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. Content
          generated by Syllio does not constitute official academic guidance. Always refer to your
          institution&apos;s official course requirements and advisor for authoritative information.
        </p>
      </div>
      <Footer />
    </>
  );
}
