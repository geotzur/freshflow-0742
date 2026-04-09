import { Metadata } from 'next';
import Link from 'next/link';
import { Tag, Calendar, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${company.name} Blog`,
    description: `${post.excerpt} Expert air duct cleaning tips from FreshFlow, New York's trusted NADCA-certified duct cleaning company.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'en_US',
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://freshflownyc.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        type="Article"
        title={post.title}
        description={post.excerpt}
        url={`https://freshflownyc.com/blog/${post.slug}`}
        date={post.date}
      />
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: 'Home', url: 'https://freshflownyc.com' },
          { name: 'Blog', url: 'https://freshflownyc.com/blog' },
          { name: post.title, url: `https://freshflownyc.com/blog/${post.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium font-heading">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-surface-dark tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 pt-8 border-t border-slate-200">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-primary font-semibold font-heading hover:gap-3 transition-all duration-200"
                >
                  <ArrowLeft size={16} />
                  Back to All Articles
                </Link>
              </div>
            </article>

            <aside>
              <div className="bg-surface rounded-xl border border-slate-200/80 p-6 mb-6">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">
                  Need Air Duct Cleaning?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  FreshFlow is {company.city}&apos;s trusted NADCA-certified air duct cleaning company. Free estimates.
                </p>
                <Link href="/contact" className="btn-primary w-full text-sm">
                  Get Free Estimate
                </Link>
              </div>

              {otherPosts.length > 0 && (
                <div className="bg-surface rounded-xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">
                    More Articles
                  </h3>
                  <ul className="space-y-3">
                    {otherPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm text-slate-700 hover:text-primary transition-colors duration-200 leading-snug block"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
