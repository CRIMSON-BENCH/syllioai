import { MetadataRoute } from "next";
import { getAllUniversitySlugs } from "@/lib/universities";
import { getAllSubjectSlugs } from "@/lib/subjects";
import { getAllStateSlugs } from "@/lib/states";
import { getAllDistrictSlugs } from "@/lib/districts";
import { getAllCountySlugs } from "@/lib/counties";
import { getAllSchoolSlugs } from "@/lib/k12schools";
import { getAllPostSlugs } from "@/lib/blog";
import { getAllTermSlugs } from "@/lib/glossary";
import { getAllCompetitorSlugs } from "@/lib/competitors";
import { lmsIntegrations } from "@/lib/lms";
import { useCases } from "@/lib/use-cases";
import { features } from "@/lib/features";

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
  ];

  // Universities
  const universityPages: MetadataRoute.Sitemap = getAllUniversitySlugs().map(({ slug }) => ({
    url: `${BASE}/universities/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Subjects / syllabus templates
  const subjectPages: MetadataRoute.Sitemap = getAllSubjectSlugs().map(({ slug }) => ({
    url: `${BASE}/templates/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // States
  const statePages: MetadataRoute.Sitemap = getAllStateSlugs().map(({ state }) => ({
    url: `${BASE}/states/${state}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Districts
  const districtPages: MetadataRoute.Sitemap = getAllDistrictSlugs().map(({ slug }) => ({
    url: `${BASE}/districts/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Counties
  const countyPages: MetadataRoute.Sitemap = getAllCountySlugs().map(({ slug }) => ({
    url: `${BASE}/counties/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // K-12 schools
  const schoolPages: MetadataRoute.Sitemap = getAllSchoolSlugs().map(({ slug }) => ({
    url: `${BASE}/schools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map(({ slug }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Glossary terms
  const glossaryPages: MetadataRoute.Sitemap = getAllTermSlugs().map(({ term }) => ({
    url: `${BASE}/glossary/${term}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  // Competitors
  const comparePages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map(({ competitor }) => ({
    url: `${BASE}/compare/${competitor}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // LMS integrations
  const lmsPages: MetadataRoute.Sitemap = lmsIntegrations.map((l) => ({
    url: `${BASE}/integrations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Use cases
  const useCasePages: MetadataRoute.Sitemap = useCases.map((u) => ({
    url: `${BASE}/for/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Features
  const featurePages: MetadataRoute.Sitemap = features.map((f) => ({
    url: `${BASE}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Lesson plans (grade × subject)
  const subjects = getAllSubjectSlugs();
  const lessonPlanPages: MetadataRoute.Sitemap = GRADES.flatMap((grade) =>
    subjects.map(({ slug: subject }) => ({
      url: `${BASE}/lesson-plans/${grade}/${subject}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...staticPages,
    ...universityPages,
    ...subjectPages,
    ...statePages,
    ...districtPages,
    ...countyPages,
    ...schoolPages,
    ...blogPages,
    ...glossaryPages,
    ...comparePages,
    ...lmsPages,
    ...useCasePages,
    ...featurePages,
    ...lessonPlanPages,
  ];
}
