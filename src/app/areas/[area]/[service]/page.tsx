import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, areas, services, images } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return areas.flatMap((area) =>
    services.map((service) => ({
      area: area.slug,
      service: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { area: string; service: string };
}): Promise<Metadata> {
  const area = areas.find((a) => a.slug === params.area);
  const service = services.find((s) => s.slug === params.service);
  if (!area || !service) return {};
  return {
    title: `${service.name} in ${area.name}, ${company.state} | ${company.name}`,
    description: `FreshFlow provides professional ${service.name.toLowerCase()} in ${area.name}, ${company.state}. NADCA-certified technicians, free estimates, 100% satisfaction guarantee. Serving ${area.name} and all of the greater New York area.`,
    openGraph: {
      title: `${service.name} in ${area.name} | ${company.name}`,
      description: `NADCA-certified ${service.name.toLowerCase()} in ${area.name}, ${company.state}. Free estimates from FreshFlow.`,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://freshflownyc.com/areas/${area.slug}/${service.slug}`,
    },
  };
}

function generateUniqueIntro(areaName: string, serviceName: string, areaDescription: string): string {
  return `When ${areaName} residents and building managers need reliable ${serviceName.toLowerCase()}, FreshFlow delivers NADCA-certified results that meet the specific demands of ${areaName}'s diverse building stock. ${areaDescription} Our team brings the same certified standards to every ${serviceName.toLowerCase()} job we complete in ${areaName}, with upfront pricing and a written satisfaction guarantee.`;
}

export default function AreaServicePage({
  params,
}: {
  params: { area: string; service: string };
}) {
  const area = areas.find((a) => a.slug === params.area);
  const service = services.find((s) => s.slug === params.service);
  if (!area || !service) notFound();

  const serviceImage = images.services[service.slug];
  const areaImage = images.areas[area.slug];

  return (
    <>
      <JsonLd
        type="Service"
        name={`${service.name} in ${area.name}`}
        description={`Professional ${service.name.toLowerCase()} in ${area.name}, ${company.state} by FreshFlow. NADCA-certified technicians, free estimates, 100% satisfaction guarantee.`}
        url={`https://freshflownyc.com/areas/${area.slug}/${service.slug}`}
        areaName={area.name}
      />
      <JsonLd
        type="FAQPage"
        faqs={service.faq}
      />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Areas', url: 'https://freshflownyc.com/areas' },
          { name: area.name, url: `https://freshflownyc.com/areas/${area.slug}` },
          { name: service.name, url: `https://freshflownyc.com/areas/${area.slug}/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-surface-dark">
        {(serviceImage || areaImage) && (
          <>
            <Image
              src={serviceImage || areaImage}
              alt={`${service.name} in ${area.name}`}
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/50" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas' },
              { label: area.name, href: `/areas/${area.slug}` },
              { label: service.name },
            ]}
          />
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/20 text-white text-xs font-medium px-3 py-1 rounded-full font-heading flex items-center gap-1">
                <MapPin size={12} />
                {area.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
              {service.name} in {area.name}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {service.short_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${company.phone}`} className="btn-outline">
                <Phone size={16} />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Intro */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed">
            {generateUniqueIntro(area.name, service.name, area.description)}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed mb-10">
                {service.full_description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Area Highlights */}
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                Why {area.name} Residents Choose FreshFlow
              </h2>
              <div className="space-y-3 mb-10">
                {area.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 bg-surface rounded-lg p-4 border border-slate-200/80">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                What&apos;s Included in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 bg-surface rounded-lg p-3">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                FAQs About {service.name} in {area.name}
              </h2>
              <div className="space-y-3">
                {service.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold font-heading text-surface-dark hover:bg-primary/5 transition-colors duration-200 list-none">
                      {item.question}
                      <span className="ml-4 text-primary transition-transform duration-200 group-open:rotate-180">
                        &#8964;
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-surface rounded-xl border border-slate-200/80 p-6 sticky top-24">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-2">
                  {service.name} in {area.name}
                </h3>
                <p className="text-sm text-slate-600 mb-5">
                  Certified service from FreshFlow. Free estimates, no hidden fees.
                </p>
                <Link href="/contact" className="btn-primary w-full text-sm mb-3">
                  Get Free Quote
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary w-full text-sm">
                  <Phone size={16} />
                  {company.phone}
                </a>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs font-semibold text-surface-dark mb-3 font-heading uppercase tracking-wide">
                    Other Services in {area.name}
                  </p>
                  <ul className="space-y-2">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 5)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/areas/${area.slug}/${s.slug}`}
                            className="text-xs text-slate-600 hover:text-primary transition-colors duration-200 flex items-center gap-1"
                          >
                            <ArrowRight size={12} />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`${service.name} in ${area.name} — Get Your Free Estimate`}
        subtext={`FreshFlow's NADCA-certified technicians are ready to serve ${area.name} with professional ${service.name.toLowerCase()}. Contact us today for honest pricing and guaranteed results.`}
      />
    </>
  );
}
