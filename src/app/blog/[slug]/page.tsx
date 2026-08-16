import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getPostBySlug, getAllPostSlugs, BlogPost, BLOG_CATEGORIES } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs();
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category;

  return {
    title: `${post.title} | Syllio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.syllioai.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Syllio Team"],
      tags: [categoryLabel, "Syllio", "education", "AI"],
    },
    alternates: { canonical: `https://www.syllioai.com/blog/${post.slug}` },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  "study-tips": "bg-violet-brand/10 text-violet-brand",
  "teacher-guides": "bg-teal-brand/10 text-teal-dark",
  "ai-in-education": "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "college-life": "bg-green-bg text-green",
  "career-planning": "bg-amber/10 text-amber",
};

function buildArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Syllio Team",
      url: "https://www.syllioai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Syllio",
      url: "https://www.syllioai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.syllioai.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.syllioai.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(post)) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-slate-800 text-slate-300"}`}
            >
              {categoryLabel}
            </span>
            <span className="text-slate-400 text-sm">{post.readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 text-balance leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="font-medium text-slate-400">Syllio Team</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
                {section.h2}
              </h2>
              {section.body.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-16 bg-slate-950 rounded-2xl p-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Put it into practice
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Ready to take control of your semester?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-md mx-auto">
            Syllio automates the strategies in this post — AI syllabus scanning,
            deadline organization, Burnout Radar™, and a portfolio that builds
            itself. Free forever for the basics.
          </p>
          <Link
            href="https://syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <strong className="text-slate-500">Disclaimer:</strong> This article is for
          general informational and educational purposes only. It does not constitute
          academic advising, mental health counseling, or professional advice of any
          kind. Always consult your institution&apos;s official resources and qualified
          professionals for guidance specific to your situation.
        </p>
      </article>

      {/* Related posts / back link */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Link
          href="/blog"
          className="text-sm font-semibold text-violet-brand hover:text-violet-dark transition-colors"
        >
          &larr; Back to all posts
        </Link>
      </div>

      <Footer />
    </>
  );
}
