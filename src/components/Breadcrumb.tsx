import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex flex-wrap gap-1 items-center">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-300 dark:text-slate-600">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-violet-brand transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-700 dark:text-slate-200 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
