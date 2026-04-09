import { Metadata } from 'next';
import AreaCard from '@/components/AreaCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { company, areas } from '@/lib/data';

export const metadata: Metadata = {
  title: `Service Areas | ${company.name} | Air Duct Cleaning in New York`,
  description: `FreshFlow provides NADCA-certified air duct cleaning throughout New York City and the surrounding area. View all service areas.`,
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Areas' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Where We Serve</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-4">
              Our Service Areas
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              FreshFlow brings NADCA-certified air duct cleaning to New York City and the surrounding metro area. Select your neighborhood to see available services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
