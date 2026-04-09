import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { company, services, areas, blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: `Sitemap | ${company.name}`,
  description: `Full sitemap of the ${company.name} website — services, service areas, blog articles, and more.`,
};

export default function SitemapPage() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Sitemap' }]} />
        <h1 className="text-4xl font-extrabold font-heading text-surface-dark tracking-tight mb-10">
          Sitemap
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Main Pages */}
          <div>
            <h2 className="text-lg font-bold font-heading text-surface-dark mb-4 pb-2 border-b border-slate-200">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/areas', label: 'Service Areas' },
                { href: '/contact', label: 'Contact' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/blog', label: 'Blog' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold font-heading text-surface-dark mb-4 pb-2 border-b border-slate-200">
              Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-600 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h2 className="text-lg font-bold font-heading text-surface-dark mb-4 pb-2 border-b border-slate-200">
              Service Areas
            </h2>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-slate-600 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-lg font-bold font-heading text-surface-dark mb-4 pb-2 border-b border-slate-200">
              Blog Articles
            </h2>
            <ul className="space-y-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-slate-600 hover:text-primary text-sm transition-colors duration-200 line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Area+Service Combos */}
        <div className="mt-12">
          <h2 className="text-lg font-bold font-heading text-surface-dark mb-4 pb-2 border-b border-slate-200">
            Area + Service Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area) => (
              <div key={area.slug}>
                <h3 className="font-semibold font-heading text-surface-dark text-sm mb-2">{area.name}</h3>
                <ul className="space-y-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/areas/${area.slug}/${service.slug}`}
                        className="text-xs text-slate-500 hover:text-primary transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
