import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, services, areas, images } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${company.city}, ${company.state} | ${company.name}`,
    description: `${service.short_description} NADCA-certified technicians, free estimates, and a 100% satisfaction guarantee. Serving all of ${company.city} and the greater NYC metro area.`,
    openGraph: {
      title: `${service.name} in ${company.city}, ${company.state} | ${company.name}`,
      description: service.short_description,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://freshflownyc.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const imageUrl = images.services[service.slug];

  return (
    <>
      <JsonLd
        type="Service"
        name={service.name}
        description={service.short_description}
        url={`https://freshflownyc.com/services/${service.slug}`}
      />
      <JsonLd
        type="FAQPage"
        faqs={service.faq}
      />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Services', url: 'https://freshflownyc.com/services' },
          { name: service.name, url: `https://freshflownyc.com/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark">
        {imageUrl && (
          <>
            <Image
              src={imageUrl}
              alt={service.name}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/60" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {service.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-5 text-slate-700 leading-relaxed mb-10">
                {service.full_description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Features */}
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                What&apos;s Included
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
                Frequently Asked Questions
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
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">
                  Available in These Areas
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}/${service.slug}`}
                        className="flex items-center gap-1 text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-full font-medium font-heading transition-colors duration-200"
                      >
                        <MapPin size={12} />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-4">
                    Ready to schedule {service.name} in {company.city}?
                  </p>
                  <Link href="/contact" className="btn-primary w-full text-sm">
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Get Professional ${service.name} in ${company.city}`}
        subtext={`Schedule your ${service.name.toLowerCase()} with FreshFlow today. Free estimates, NADCA-certified technicians, and a 100% satisfaction guarantee.`}
      />
    </>
  );
}
