import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state} | Free Estimates`,
    template: `%s | ${company.name} — ${company.city}, ${company.state}`,
  },
  description: `${company.name} provides professional, NADCA-certified air duct cleaning in ${company.city}, ${company.state}. Serving all five NYC boroughs and surrounding metro area since ${company.year_established}. Free estimates, HEPA equipment, 100% satisfaction guaranteed.`,
  keywords: [
    'air duct cleaning New York',
    'duct cleaning NYC',
    'air duct cleaning near me',
    'NADCA certified duct cleaning',
    'dryer vent cleaning New York',
    'HVAC cleaning New York City',
    'residential air duct cleaning NYC',
    'commercial duct cleaning New York',
    'mold remediation ductwork NYC',
    'indoor air quality New York',
    'FreshFlow air duct cleaning',
    'duct cleaning Manhattan Brooklyn Queens Bronx',
  ],
  metadataBase: new URL('https://freshflownyc.com'),
  openGraph: {
    title: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state}`,
    description: `NADCA-certified air duct cleaning serving New York City and surrounding metro area. Free estimates, HEPA equipment, guaranteed results.`,
    type: 'website',
    locale: 'en_US',
    siteName: company.name,
    url: 'https://freshflownyc.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': `${company.city}, ${company.state}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-surface-dark">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
