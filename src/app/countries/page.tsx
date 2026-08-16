import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { countries } from "@/lib/countries";

export const metadata: Metadata = {
  title: "Syllio by Country — AI Student OS Worldwide",
  description:
    "Syllio is available worldwide. Find your country for a localized guide to scanning syllabi, managing deadlines, and building lesson plans.",
};

const CONTINENTS = [
  "europe",
  "north-america",
  "asia",
  "oceania",
  "south-america",
  "africa",
  "middle-east",
] as const;

export default function CountriesPage() {
  const byContinent = CONTINENTS.map((c) => ({
    continent: c,
    label: c.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase()),
    items: countries.filter((co) => co.continent === c),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Syllio Worldwide
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
          The AI student OS for every campus on earth. Find your country for a localized guide
          to syllabi scanning, deadline management, and AI lesson planning.
        </p>

        {byContinent.map(({ continent, label, items }) => (
          <section key={continent} className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              {label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {items.map((country) => (
                <Link
                  key={country.slug}
                  href={`/countries/${country.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2.5 hover:border-violet-brand hover:text-violet-brand transition-colors flex items-center justify-between gap-2"
                >
                  <span>{country.name}</span>
                  <span className="text-xs text-slate-400 shrink-0">{country.studentPopulation}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}
