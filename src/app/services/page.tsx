import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { company, services } from '@/lib/data';

export const metadata: Metadata = {
  title: `Air Duct Cleaning Services | ${company.name} ${company.city}, ${company.state}`,
  description: `Professional air duct cleaning, mold remediation, dryer vent cleaning, HVAC inspection, and more for ${company.city} homes and businesses.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-4">
              Our Air Quality Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              FreshFlow offers a complete range of NADCA-certified air duct cleaning and HVAC services for homes and businesses across New York.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
