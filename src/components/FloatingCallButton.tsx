'use client';

import { Phone } from 'lucide-react';
import { company } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Show immediately if already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`tel:${company.phone}`}
      className={`fixed bottom-6 right-6 z-40 md:hidden bg-primary text-white rounded-full shadow-2xl px-5 py-3 flex items-center gap-2 font-semibold font-heading text-sm transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label={`Call ${company.name}`}
    >
      {pulse && (
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
      )}
      <Phone size={18} />
      Call Now
    </a>
  );
}
