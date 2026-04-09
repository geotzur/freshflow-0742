import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { company, blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: `Air Quality Blog | ${company.name}`,
  description: `Expert guides, seasonal tips, and safety advice on air duct cleaning and indoor air quality for New York homes and businesses.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-heading">Resources</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mt-2 mb-4">
              Air Quality Tips &amp; Guides
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Expert advice from FreshFlow&apos;s certified technicians on maintaining healthy indoor air quality in your New York home or business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
