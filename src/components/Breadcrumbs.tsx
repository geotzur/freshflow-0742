import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center flex-wrap gap-1 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
        <Home size={14} />
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight size={14} className="text-slate-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-surface-dark">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
