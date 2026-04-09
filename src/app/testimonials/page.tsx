import { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, testimonials } from '@/lib/data';

export const metadata: Metadata = {
  title: `Customer Reviews | ${company.name} | Air Duct Cleaning ${company.city}`,
  description: `Read verified reviews from satisfied FreshFlow customers across New York City and surrounding areas. NADCA-certified air duct cleaning with a 4.9-star average rating from 1,200+ customers.`,
  openGraph: {
    title: `Customer Reviews | ${company.name} Air Duct Cleaning`,
    description: `1,200+ verified 5-star reviews from New York homeowners and business owners who trust FreshFlow for NADCA-certified air duct cleaning.`,
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://freshflownyc.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Testimonials', url: 'https://freshflownyc.com/testimonials' },
        ]}
      />
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Testimonials' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Reviews</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-4">
              What Our Customers Say
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Real reviews from New York homeowners, property managers, and business owners who have trusted FreshFlow with their indoor air quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-4xl font-extrabold font-heading text-surface-dark mb-1">4.9 / 5</p>
            <p className="text-slate-600">Based on 1,200+ customer reviews across New York</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
