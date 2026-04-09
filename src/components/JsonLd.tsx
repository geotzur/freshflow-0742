import { company, areas } from '@/lib/data';

interface LocalBusinessProps {
  type?: 'LocalBusiness';
  areaName?: string;
}

interface ServiceSchemaProps {
  type: 'Service';
  name: string;
  description: string;
  url: string;
  areaName?: string;
}

interface FAQSchemaProps {
  type: 'FAQPage';
  faqs: Array<{ question: string; answer: string }>;
}

interface BreadcrumbSchemaProps {
  type: 'BreadcrumbList';
  items: Array<{ name: string; url: string }>;
}

interface ArticleSchemaProps {
  type: 'Article';
  title: string;
  description: string;
  url: string;
  date: string;
}

type JsonLdProps =
  | LocalBusinessProps
  | ServiceSchemaProps
  | FAQSchemaProps
  | BreadcrumbSchemaProps
  | ArticleSchemaProps;

const BASE_URL = 'https://freshflownyc.com';

const areaServedList = areas.map((a) => ({
  '@type': 'City',
  name: a.name,
}));

const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '15:00',
  },
];

export default function JsonLd(props: JsonLdProps) {
  let schema: object;

  if (props.type === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: props.name,
      description: props.description,
      url: props.url,
      areaServed: props.areaName
        ? [{ '@type': 'City', name: props.areaName }]
        : areaServedList,
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: company.name,
        telephone: company.phone,
        email: company.email,
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address,
          addressLocality: company.city,
          addressRegion: company.state,
          postalCode: '10018',
          addressCountry: 'US',
        },
      },
    };
  } else if (props.type === 'FAQPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: props.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  } else if (props.type === 'BreadcrumbList') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: props.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  } else if (props.type === 'Article') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.title,
      description: props.description,
      url: props.url,
      datePublished: props.date,
      dateModified: props.date,
      author: {
        '@type': 'Organization',
        name: company.name,
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: company.name,
        url: BASE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': props.url,
      },
    };
  } else {
    // LocalBusiness — use HomeAndConstructionBusiness + LocalBusiness for air duct cleaning
    const localBusinessSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      name: company.name,
      description: company.tagline,
      url: BASE_URL,
      telephone: company.phone,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address,
        addressLocality: props.areaName ?? company.city,
        addressRegion: company.state,
        postalCode: '10018',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.7549',
        longitude: '-73.9930',
      },
      openingHoursSpecification,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1200',
        bestRating: '5',
        worstRating: '1',
      },
      areaServed: props.areaName
        ? [{ '@type': 'City', name: props.areaName }]
        : areaServedList,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Air Duct Cleaning Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Air Duct Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Air Duct Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC System Inspection' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ductwork Mold Remediation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UV Air Purification' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Air Handler and Coil Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Air Quality Testing' } },
        ],
      },
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check',
      foundingDate: company.year_established,
      slogan: 'Breathe Cleaner Air Starting Today',
    };
    schema = localBusinessSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
