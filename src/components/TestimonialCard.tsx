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
    <div className="bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-primary flex flex-col relative overflow-hidden">
      {/* Decorative quote mark */}
      <span className="absolute top-4 right-5 text-6xl font-serif text-primary/8 leading-none select-none pointer-events-none">&rdquo;</span>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-700 italic leading-relaxed text-sm flex-1 mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-bold font-heading text-sm">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-bold font-heading text-surface-dark text-sm">{author}</p>
          <p className="text-slate-500 text-xs">{location}</p>
        </div>
        <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
          {service}
        </span>
      </div>
    </div>
  );
}
