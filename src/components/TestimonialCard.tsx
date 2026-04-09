import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
  rating: number;
  service: string;
}

export default function TestimonialCard({
  text,
  author,
  location,
  rating,
  service,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-primary flex flex-col">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-700 italic leading-relaxed text-sm flex-1 mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <div>
        <p className="font-bold font-heading text-surface-dark text-sm">{author}</p>
        <p className="text-slate-500 text-xs">{location}</p>
        <span className="mt-2 inline-block text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
          {service}
        </span>
      </div>
    </div>
  );
}
