import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { company, images } from '@/lib/data';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
}

export default function CTASection({
  headline = 'Ready to Breathe Cleaner Air?',
  subtext = 'Contact FreshFlow today for a free, no-obligation estimate on air duct cleaning in New York, NY.',
  buttonText = 'Get My Free Quote',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      {images.cta_bg ? (
        <Image
          src={images.cta_bg}
          alt="FreshFlow HVAC team"
          fill
          className="object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-surface-dark" />
      )}
      <div className="absolute inset-0 bg-surface-dark/85" />
      <div className="relative text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              {buttonText}
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="btn-outline text-base px-8 py-4"
            >
              <Phone size={18} />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
