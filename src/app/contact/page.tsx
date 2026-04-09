import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact ${company.name} | Free Air Duct Cleaning Estimates in ${company.city}`,
  description: `Contact FreshFlow for a free estimate on air duct cleaning in ${company.city}, ${company.state}. NADCA-certified technicians available for same-day and next-day appointments. Call ${company.phone} or submit our online form.`,
  openGraph: {
    title: `Contact ${company.name} | Free Estimates in ${company.city}`,
    description: `Get a free air duct cleaning estimate from FreshFlow. Same-day appointments available in New York City and surrounding areas.`,
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://freshflownyc.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Contact', url: 'https://freshflownyc.com/contact' },
        ]}
      />

      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-4">
              Contact FreshFlow
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ready to schedule? Get in touch for a free estimate on air duct cleaning in New York.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">
                Request Your Free Estimate
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-surface rounded-xl border border-slate-200/80 p-6">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Phone</p>
                      <a
                        href={`tel:${company.phone}`}
                        className="font-semibold font-heading text-surface-dark hover:text-primary transition-colors duration-200"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="font-semibold font-heading text-surface-dark hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Address</p>
                      <p className="font-semibold font-heading text-surface-dark text-sm">
                        {company.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Hours</p>
                      <p className="font-semibold font-heading text-surface-dark text-sm">
                        {company.hours}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-md font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
