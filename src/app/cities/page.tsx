import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Syllio by City — AI Student OS in Every University City",
  description:
    "From London to Tokyo, São Paulo to Sydney — Syllio is the AI student OS for every university city. Find your city for a local guide.",
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

export default function CitiesPage() {
  const byContinent = CONTINENTS.map((c) => ({
    continent: c,
    label: c.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase()),
    items: cities.filter((ci) => ci.continent === c).slice(0, 20),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Syllio by City
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
          Find your university city for a local guide to AI syllabus scanning, deadline management,
          and lesson planning — from London and Paris to Tokyo, Mumbai, and São Paulo.
        </p>

        {byContinent.map(({ continent, label, items }) => (
          <section key={continent} className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              {label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {items.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="text-sm border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2.5 hover:border-teal-brand hover:text-teal-brand transition-colors flex items-center justify-between gap-2"
                >
                  <span>{city.name}</span>
                  <span className="text-xs text-slate-400 shrink-0">{city.country.split(" ").pop()}</span>
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
