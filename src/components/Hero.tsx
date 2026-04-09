import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { company, images } from '@/lib/data';
import StatsCounter from './StatsCounter';

interface HeroProps {
  headline: string;
  subheadline: string;
  badge?: string;
}

export default function Hero({ headline, subheadline, badge }: HeroProps) {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src={images.hero}
          alt="FreshFlow air duct cleaning team at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
                <ShieldCheck size={16} className="text-accent" />
                {badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6 animate-slide-up">
              {headline}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get Free Estimate
                <ArrowRight size={18} />
              </Link>
              <a href={`tel:${company.phone}`} className="btn-outline text-base px-8 py-4">
                <Phone size={18} />
                {company.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {company.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-white/80 text-sm">
                  <ShieldCheck size={14} className="text-accent" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative -mt-8 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsCounter />
      </div>
    </>
  );
}
