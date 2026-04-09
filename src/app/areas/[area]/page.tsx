import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, areas, services, images } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { area: string };
}): Promise<Metadata> {
  const area = areas.find((a) => a.slug === params.area);
  if (!area) return {};
  return {
    title: `Air Duct Cleaning in ${area.name}, ${company.state} | ${company.name}`,
    description: `FreshFlow provides NADCA-certified air duct cleaning in ${area.name}. ${area.description.substring(0, 120)}... Free estimates, same-day appointments, guaranteed results.`,
    openGraph: {
      title: `Air Duct Cleaning in ${area.name} | ${company.name}`,
      description: `NADCA-certified air duct cleaning in ${area.name}. Free estimates from FreshFlow, New York's trusted duct cleaning company.`,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://freshflownyc.com/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areas.find((a) => a.slug === params.area);
  if (!area) notFound();

  const imageUrl = images.areas[area.slug];

  return (
    <>
      <JsonLd type="LocalBusiness" areaName={area.name} />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Areas', url: 'https://freshflownyc.com/areas' },
          { name: area.name, url: `https://freshflownyc.com/areas/${area.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-surface-dark">
        {imageUrl && (
          <>
            <Image
              src={imageUrl}
              alt={area.name}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/70 to-transparent" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas' },
              { label: area.name },
            ]}
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
              Air Duct Cleaning in {area.name}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{area.description}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-surface-dark mb-6">
                Why Choose FreshFlow in {area.name}?
              </h2>
              <div className="space-y-4">
                {area.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-4 bg-surface rounded-xl p-4 border border-slate-200/80">
                    <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Schedule Service in {area.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-heading text-surface-dark mb-6">
                Services Available in {area.name}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/areas/${area.slug}/${service.slug}`}
                    className="flex items-center justify-between bg-surface hover:bg-primary/5 border border-slate-200/80 rounded-xl p-4 transition-all duration-200 group"
                  >
                    <span className="font-medium font-heading text-surface-dark group-hover:text-primary text-sm transition-colors duration-200">
                      {service.name}
                    </span>
                    <ArrowRight size={16} className="text-slate-400 group-hover:text-primary transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Ready for Clean Air in ${area.name}?`}
        subtext={`Schedule your NADCA-certified air duct cleaning with FreshFlow in ${area.name}. Free estimates and a 100% satisfaction guarantee.`}
      />
    </>
  );
}
