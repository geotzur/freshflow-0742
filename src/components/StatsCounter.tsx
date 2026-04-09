'use client';

import { useEffect, useRef, useState } from 'react';
import { homeStats } from '@/lib/data';

export default function StatsCounter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {homeStats.map((stat, index) => (
          <div
            key={stat.label}
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
            }}
          >
            <div className="text-3xl md:text-4xl font-extrabold font-heading text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
