import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Privacy policy for ${company.name}, air duct cleaning services in ${company.city}, ${company.state}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: 'https://freshflownyc.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <JsonLd
      type="BreadcrumbList"
      items={[
        { name: 'Home', url: 'https://freshflownyc.com' },
        { name: 'Privacy Policy', url: 'https://freshflownyc.com/privacy-policy' },
      ]}
    />
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <h1 className="text-4xl font-extrabold font-heading text-surface-dark tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-10 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">1. Introduction</h2>
            <p>
              {company.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates this website. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us about our air duct cleaning services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">2. Information We Collect</h2>
            <p>We collect the following personal information when you fill out a contact form or request a quote:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message or service description</li>
            </ul>
            <p className="mt-3">We may also collect non-personal information such as browser type, pages visited, and general location data through analytics tools.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to your inquiries and schedule service appointments</li>
              <li>Provide you with quotes and service information</li>
              <li>Follow up on completed service calls</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">4. Third-Party Services</h2>
            <p>This website uses the following third-party services that may collect limited data:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Netlify (website hosting)</li>
              <li>Google Fonts (font delivery)</li>
              <li>Google Analytics (website usage analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">6. Cookies</h2>
            <p>
              Our website may use cookies to improve your browsing experience. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. Some website features may not function properly without cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us at{' '}
              <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                {company.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact {company.name} at:
            </p>
            <div className="mt-3 bg-surface rounded-xl p-5 border border-slate-200/80">
              <p className="font-semibold font-heading text-surface-dark">{company.name}</p>
              <p>{company.address}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                  {company.email}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href={`tel:${company.phone}`} className="text-primary hover:underline">
                  {company.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
