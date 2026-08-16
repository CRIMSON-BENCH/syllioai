import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getLMSBySlug, lmsIntegrations } from "@/lib/lms";

export function generateStaticParams() {
  return lmsIntegrations.map((l) => ({ lms: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lms: string }>;
}): Promise<Metadata> {
  const { lms: slug } = await params;
  const lms = getLMSBySlug(slug);
  if (!lms) return {};
  return {
    title: `Syllio + ${lms.name} Integration — Sync Syllabi & Deadlines | Syllio`,
    description: `Connect Syllio with ${lms.name} to sync course deadlines, export syllabi, and manage your academic calendar in one place.`,
  };
}

export default async function LMSIntegrationPage({
  params,
}: {
  params: Promise<{ lms: string }>;
}) {
  const { lms: slug } = await params;
  const lms = getLMSBySlug(slug);
  if (!lms) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `Syllio + ${lms.name}`,
    description: lms.syllioIntegration,
    applicationCategory: "EducationalApplication",
    url: `https://www.syllioai.com/integrations/${lms.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Integrations", href: "/#integrations" },
            { label: lms.name },
          ]}
        />

        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-brand">
            Integration · {lms.targetLevel === "k12" ? "K-12" : lms.targetLevel === "higher-ed" ? "Higher Ed" : "K-12 & Higher Ed"}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-balance">
            Syllio + {lms.name}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-4 leading-relaxed max-w-2xl">
            {lms.description}
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-2xl">
            {lms.syllioIntegration}
          </p>
          <p className="text-xs text-slate-400 mb-8">
            Market share: {lms.marketShare} · Vendor: {lms.vendor}
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Connect {lms.name} to Syllio
          </Link>
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">What you get with Syllio + {lms.name}</h2>
          <ul className="space-y-3">
            {lms.benefits.map((b) => (
              <li key={b} className="flex gap-3 items-start text-slate-600 dark:text-slate-300">
                <span className="text-green font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Other integrations */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-5">More Syllio integrations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {lmsIntegrations
              .filter((l) => l.slug !== lms.slug)
              .slice(0, 6)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/integrations/${l.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-violet-brand hover:text-violet-brand transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Sync Syllio with {lms.name} today</h2>
          <p className="text-slate-400 text-sm mb-5">
            Free for students. Teacher plans from $5.99/month.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="bg-violet-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors inline-block"
          >
            Get started free
          </Link>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <strong>Disclaimer:</strong> Syllio is a productivity tool for students and educators. It is not
          affiliated with or endorsed by {lms.vendor}. Integration capabilities depend on your institution&apos;s
          {" "}{lms.name} configuration. Always consult your institution&apos;s IT policies before connecting
          third-party apps.
        </p>
      </div>
      <Footer />
    </>
  );
}
