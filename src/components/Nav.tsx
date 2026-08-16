import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-bold text-lg text-violet-brand">
          Syllio
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/features" className="hover:text-violet-brand transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-violet-brand transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-violet-brand transition-colors">Blog</Link>
          <Link href="/templates" className="hover:text-violet-brand transition-colors">Templates</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://app.syllioai.com/auth"
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-violet-brand"
          >
            Sign in
          </Link>
          <Link
            href="https://app.syllioai.com/auth"
            className="text-sm bg-violet-brand text-white px-4 py-2 rounded-full hover:bg-violet-dark transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
