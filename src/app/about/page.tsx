import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, images } from '@/lib/data';

export const metadata: Metadata = {
  title: `About ${company.name} | ${company.city}'s Trusted Air Duct Cleaning Company`,
  description: `Learn about FreshFlow, New York's trusted NADCA-certified air duct cleaning company serving all five NYC boroughs and surrounding metro area since ${company.year_established}. Certified technicians, honest pricing, guaranteed results.`,
  openGraph: {
    title: `About ${company.name} | Air Duct Cleaning in ${company.city}, ${company.state}`,
    description: `FreshFlow has been New York's trusted NADCA-certified air duct cleaning company since ${company.year_established}. Learn about our team and values.`,
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://freshflownyc.com/about',
  },
};

const values = [
  {
    title: 'Quality Workmanship',
    description: 'We use NADCA-standard negative-pressure cleaning methods and HEPA-rated equipment on every job. Our technicians do not leave until the ductwork passes a final inspection.',
  },
  {
    title: 'Honest Pricing',
    description: 'You receive a detailed, written estimate before we start work, with no upsells and no surprise charges at the end. The price we quote is the price you pay.',
  },
  {
    title: 'Customer First',
    description: 'From your first phone call to the final walkthrough, our team treats your home or office with care and respect. We answer questions clearly and keep you informed throughout the process.',
  },
  {
    title: 'Local Experts',
    description: 'We have worked inside thousands of New York City apartments, brownstones, co-ops, and commercial buildings. We understand the unique duct configurations and air quality challenges of New York structures.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'About', url: 'https://freshflownyc.com/about' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-6">
                About FreshFlow
              </h1>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  FreshFlow has been improving indoor air quality for New York homeowners and business owners since {company.year_established}. Based in New York, NY, we serve all five boroughs and the surrounding metro area with professional, NADCA-certified air duct cleaning and HVAC system care.
                </p>
                <p>
                  Our technicians carry NADCA certification and undergo continuous training on the latest duct cleaning equipment and techniques. We use commercial-grade negative-pressure vacuum systems and HEPA filtration to remove dust, mold spores, allergens, and debris from your ductwork without releasing contaminants back into your living space.
                </p>
                <p>
                  We believe every New Yorker deserves clean, healthy air at home and at work. That is why every FreshFlow job comes with a written satisfaction guarantee, transparent pricing, and follow-up support. We are a locally owned company proud to give back to the New York community we serve.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {company.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold font-heading"
                  >
                    <CheckCircle size={16} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {images.about ? (
                <Image
                  src={images.about}
                  alt="FreshFlow team in New York"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">What We Stand For</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-xl p-7 border border-slate-200/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-surface-dark mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
