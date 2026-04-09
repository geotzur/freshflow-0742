import Link from 'next/link';
import { ArrowRight, Tag, Calendar } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
}

export default function BlogCard({ slug, title, excerpt, category, date }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-white rounded-xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="h-3 bg-gradient-to-r from-primary to-accent" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
            <Tag size={11} />
            {category}
          </span>
          {date && (
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={11} />
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold font-heading text-surface-dark mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">{excerpt}</p>
        <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm font-heading">
          Read Article <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
