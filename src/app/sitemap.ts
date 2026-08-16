import { MetadataRoute } from "next";
import { getAllUniversitySlugs, universities } from "@/lib/universities";
import { getAllSubjectSlugs, subjects } from "@/lib/subjects";
import { getAllStateSlugs } from "@/lib/states";
import { getAllDistrictSlugs, districts } from "@/lib/districts";
import { getAllCountySlugs, counties } from "@/lib/counties";
import { getAllSchoolSlugs } from "@/lib/k12schools";
import { getAllPostSlugs } from "@/lib/blog";
import { getAllTermSlugs } from "@/lib/glossary";
import { getAllCompetitorSlugs } from "@/lib/competitors";
import { lmsIntegrations } from "@/lib/lms";
import { useCases } from "@/lib/use-cases";
import { features } from "@/lib/features";
import { getAllCountrySlugs, countries } from "@/lib/countries";
import { getAllCitySlugs, cities } from "@/lib/cities";
import { getAllInternationalSchoolSlugs } from "@/lib/international-schools";

const BASE = "https://www.syllioai.com";

const GRADES = [
  "kindergarten","1st-grade","2nd-grade","3rd-grade","4th-grade","5th-grade",
  "6th-grade","7th-grade","8th-grade","9th-grade","10th-grade","11th-grade",
  "12th-grade","college","graduate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/templates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/countries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cities`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/lesson-plans`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Universities (index)
  const universityPages: MetadataRoute.Sitemap = getAllUniversitySlugs().map(({ slug }) => ({
    url: `${BASE}/universities/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Universities × Subjects (cross-product)
  const universitySubjectPages: MetadataRoute.Sitemap = universities.flatMap((uni) =>
    subjects.map((subject) => ({
      url: `${BASE}/universities/${uni.slug}/${subject.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
    }))
  );

  // Subjects / syllabus templates
  const subjectPages: MetadataRoute.Sitemap = getAllSubjectSlugs().map(({ slug }) => ({
    url: `${BASE}/templates/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // States
  const statePages: MetadataRoute.Sitemap = getAllStateSlugs().map(({ state }) => ({
    url: `${BASE}/states/${state}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));

  // Districts (index)
  const districtPages: MetadataRoute.Sitemap = getAllDistrictSlugs().map(({ slug }) => ({
    url: `${BASE}/districts/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));

  // Districts × Subjects
  const districtSubjectPages: MetadataRoute.Sitemap = districts.flatMap((d) =>
    subjects.map((s) => ({
      url: `${BASE}/districts/${d.slug}/${s.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.5,
    }))
  );

  // Counties (index)
  const countyPages: MetadataRoute.Sitemap = getAllCountySlugs().map(({ slug }) => ({
    url: `${BASE}/counties/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));

  // Counties × Subjects
  const countySubjectPages: MetadataRoute.Sitemap = counties.flatMap((c) =>
    subjects.map((s) => ({
      url: `${BASE}/counties/${c.slug}/${s.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.5,
    }))
  );

  // US K-12 schools
  const schoolPages: MetadataRoute.Sitemap = getAllSchoolSlugs().map(({ slug }) => ({
    url: `${BASE}/schools/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));

  // International schools
  const intlSchoolPages: MetadataRoute.Sitemap = getAllInternationalSchoolSlugs().map(({ slug }) => ({
    url: `${BASE}/intl-schools/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));

  // Countries (index)
  const countryPages: MetadataRoute.Sitemap = getAllCountrySlugs().map(({ country }) => ({
    url: `${BASE}/countries/${country}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Countries × Subjects
  const countrySubjectPages: MetadataRoute.Sitemap = countries.flatMap((c) =>
    subjects.map((s) => ({
      url: `${BASE}/countries/${c.slug}/${s.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
    }))
  );

  // Cities (index)
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map(({ city }) => ({
    url: `${BASE}/cities/${city}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Cities × Subjects
  const citySubjectPages: MetadataRoute.Sitemap = cities.flatMap((c) =>
    subjects.map((s) => ({
      url: `${BASE}/cities/${c.slug}/${s.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
    }))
  );

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map(({ slug }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Glossary terms
  const glossaryPages: MetadataRoute.Sitemap = getAllTermSlugs().map(({ term }) => ({
    url: `${BASE}/glossary/${term}`,
    lastModified: now, changeFrequency: "yearly" as const, priority: 0.5,
  }));

  // Competitors
  const comparePages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map(({ competitor }) => ({
    url: `${BASE}/compare/${competitor}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }));

  // LMS integrations
  const lmsPages: MetadataRoute.Sitemap = lmsIntegrations.map((l) => ({
    url: `${BASE}/integrations/${l.slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Use cases
  const useCasePages: MetadataRoute.Sitemap = useCases.map((u) => ({
    url: `${BASE}/for/${u.slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  // Features
  const featurePages: MetadataRoute.Sitemap = features.map((f) => ({
    url: `${BASE}/features/${f.slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }));

  // Lesson plans (grade × subject)
  const allSubjectSlugs = getAllSubjectSlugs();
  const lessonPlanPages: MetadataRoute.Sitemap = GRADES.flatMap((grade) =>
    allSubjectSlugs.map(({ slug: subject }) => ({
      url: `${BASE}/lesson-plans/${grade}/${subject}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
    }))
  );

  return [
    ...staticPages,
    ...universityPages,
    ...universitySubjectPages,
    ...subjectPages,
    ...statePages,
    ...districtPages,
    ...districtSubjectPages,
    ...countyPages,
    ...countySubjectPages,
    ...schoolPages,
    ...intlSchoolPages,
    ...countryPages,
    ...countrySubjectPages,
    ...cityPages,
    ...citySubjectPages,
    ...blogPages,
    ...glossaryPages,
    ...comparePages,
    ...lmsPages,
    ...useCasePages,
    ...featurePages,
    ...lessonPlanPages,
  ];
}
