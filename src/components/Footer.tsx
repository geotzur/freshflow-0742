import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company, services, areas } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt={company.name}
                width={44}
                height={44}
                className="rounded-lg object-cover"
              />
              <span className="font-heading font-extrabold text-xl text-white">
                {company.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {company.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs bg-primary/20 text-primary-light px-2 py-1 rounded-md font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${company.phone}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm text-center mb-3">
            Proudly serving New York, NY and surrounding areas including Brooklyn, Queens, the Bronx, Staten Island, and Northern New Jersey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/sitemap-page" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </Link>
              <a
                href="#main-content"
                className="hidden sm:inline-flex items-center gap-1 text-slate-500 hover:text-white text-sm transition-colors duration-200 border border-white/10 px-3 py-1.5 rounded-lg hover:border-white/30"
                aria-label="Back to top"
              >
                ↑ Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
