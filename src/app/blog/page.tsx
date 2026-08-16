import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, BLOG_CATEGORIES, getPostsByCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Syllio Blog — Study Tips, Teacher Guides & AI in Education",
  description:
    "Practical guides for students and teachers: AI syllabus tips, burnout prevention, club management, career planning, and how AI is reshaping the classroom.",
  openGraph: {
    title: "Syllio Blog — Study Tips, Teacher Guides & AI in Education",
    description:
      "Practical guides for students and teachers on using AI to study smarter, build syllabi faster, and manage academic life without burning out.",
    url: "https://www.syllioai.com/blog",
  },
  alternates: { canonical: "https://www.syllioai.com/blog" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Syllio Blog",
  url: "https://www.syllioai.com/blog",
  description:
    "Study tips, teacher guides, and AI in education articles from the Syllio team.",
  publisher: {
    "@type": "Organization",
    name: "Syllio",
    url: "https://www.syllioai.com",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "study-tips": "bg-violet-brand/10 text-violet-brand",
  "teacher-guides": "bg-teal-brand/10 text-teal-dark",
  "ai-in-education": "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "college-life": "bg-green-bg text-green",
  "career-planning": "bg-amber/10 text-amber",
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-brand mb-3">
            Syllio Blog
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-balance">
            Study Tips, Teacher Guides & AI in Education
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Practical guides for students who want to stay ahead and teachers who
            want their Sundays back.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-slate-900 border-b border-slate-800 px-4 py-4 sticky top-14 z-40">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mr-2">
            Filter:
          </span>
          <Link
            href="/blog"
            className="text-xs px-3 py-1 rounded-full border border-violet-brand bg-violet-brand/10 text-violet-brand font-medium"
          >
            All posts
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={`/blog?category=${cat.value}`}
              className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-400 hover:border-violet-brand hover:text-violet-brand transition-colors font-medium"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts grouped by category */}
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {BLOG_CATEGORIES.map((cat) => {
          const posts = getPostsByCategory(cat.value);
          if (posts.length === 0) return null;
          return (
            <section key={cat.value} id={cat.value}>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-xl font-extrabold tracking-tight">{cat.label}</h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {posts.length} {posts.length === 1 ? "post" : "posts"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-violet-brand dark:hover:border-violet-brand transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-slate-100 text-slate-600"}`}
                      >
                        {BLOG_CATEGORIES.find((c) => c.value === post.category)?.label}
                      </span>
                      <span className="text-xs text-slate-400">{post.readingTime}</span>
                    </div>
                    <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-violet-brand transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs text-slate-400"
                      >
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-violet-brand hover:text-violet-dark transition-colors"
                        aria-label={`Read ${post.title}`}
                      >
                        Read &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Ready to put these strategies to work?
          </h2>
          <p className="text-slate-400 mb-7 text-sm leading-relaxed">
            Syllio automates the systems every article talks about — so you spend
            less time organizing and more time actually learning.
          </p>
          <Link
            href="https://app.syllioai.com/auth"
            className="inline-block bg-violet-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-violet-dark transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
