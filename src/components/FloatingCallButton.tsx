'use client';

import { Phone } from 'lucide-react';
import { company } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBounce(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`tel:${company.phone}`}
      className={`fixed bottom-6 right-6 z-40 md:hidden bg-primary text-white rounded-full shadow-2xl px-5 py-3 flex items-center gap-2 font-semibold font-heading text-sm ${
        bounce ? 'animate-bounce' : ''
      }`}
      aria-label={`Call ${company.name}`}
    >
      <Phone size={18} />
      Call Now
    </a>
  );
}
