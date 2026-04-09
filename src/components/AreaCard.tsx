import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { images } from '@/lib/data';

interface AreaCardProps {
  slug: string;
  name: string;
  description: string;
}

export default function AreaCard({ slug, name, description }: AreaCardProps) {
  const imageUrl = images.areas[slug];

  return (
    <Link
      href={`/areas/${slug}`}
      className="group relative h-56 rounded-xl overflow-hidden block hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={16} className="text-accent flex-shrink-0" />
          <h3 className="text-lg font-bold font-heading">{name}</h3>
        </div>
        <p className="text-white/80 text-sm line-clamp-2 leading-snug">{description}</p>
        <div className="mt-2 flex items-center gap-1 text-accent text-sm font-semibold font-heading">
          View Services <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
