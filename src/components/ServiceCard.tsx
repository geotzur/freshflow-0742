import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { images } from '@/lib/data';

interface ServiceCardProps {
  slug: string;
  name: string;
  short_description: string;
}

export default function ServiceCard({ slug, name, short_description }: ServiceCardProps) {
  const imageUrl = images.services[slug];

  return (
    <Link
      href={`/services/${slug}`}
      className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold font-heading text-surface-dark mb-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">
          {short_description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm font-heading group-hover:gap-2 transition-all duration-200">
          Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
