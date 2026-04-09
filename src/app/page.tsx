import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import AreaCard from '@/components/AreaCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import WhyUsCard from '@/components/WhyUsCard';
import JsonLd from '@/components/JsonLd';
import { company, services, areas, testimonials, blogPosts, whyUs } from '@/lib/data';

export const metadata: Metadata = {
  title: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state} | Free Estimates`,
  description: `${company.name} is New York's trusted NADCA-certified air duct cleaning company. Serving Manhattan, Brooklyn, Queens, the Bronx, Staten Island and surrounding areas since ${company.year_established}. Free estimates, same-day appointments, 100% satisfaction guaranteed.`,
  openGraph: {
    title: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state}`,
    description: `NADCA-certified air duct cleaning for New York homes and businesses. Trusted by 1,200+ New Yorkers. Free estimates, same-day service available.`,
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://freshflownyc.com',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
        ]}
      />

      <Hero
        headline="Breathe Cleaner Air Starting Today"
        subheadline="FreshFlow delivers certified air duct cleaning across New York, NY, removing dust, allergens, and contaminants for healthier indoor air."
        badge="Trusted by 1,200+ Homeowners in New York"
      />

      {/* Services */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">What We Do</span>
            <h2 className="section-title mt-2">Our Air Quality Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive duct cleaning and HVAC services for New York homes and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Why FreshFlow</span>
            <h2 className="section-title mt-2">The FreshFlow Difference</h2>
            <p className="section-subtitle mx-auto">
              We combine certified expertise, honest pricing, and genuine care for your home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyUs.map((item, index) => (
              <WhyUsCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Where We Work</span>
            <h2 className="section-title mt-2">Serving the Greater New York Area</h2>
            <p className="section-subtitle mx-auto">
              From Manhattan to Staten Island and beyond, we bring certified air duct cleaning to your neighborhood.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Reviews</span>
            <h2 className="section-title mt-2">What New Yorkers Are Saying</h2>
            <p className="section-subtitle mx-auto">
              Real reviews from real customers across New York City and the surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Resources</span>
            <h2 className="section-title mt-2">Air Quality Tips &amp; Guides</h2>
            <p className="section-subtitle mx-auto">
              Expert advice on keeping your New York home&apos;s air clean and healthy year-round.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
