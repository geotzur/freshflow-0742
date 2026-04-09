'use client';

import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { services } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-10 text-center animate-scale-in">
        <CheckCircle className="text-secondary mx-auto mb-4" size={56} />
        <h3 className="text-2xl font-bold font-heading text-surface-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. A FreshFlow team member will contact you within one business day.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3 text-surface-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold font-heading text-surface-dark mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass('name')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold font-heading text-surface-dark mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold font-heading text-surface-dark mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass('phone')}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold font-heading text-surface-dark mb-1.5">
            Service Needed
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass('service')}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold font-heading text-surface-dark mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your home, building type, and what you have noticed..."
          className={inputClass('message')}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto text-base px-8 py-4">
        <Send size={18} />
        Send My Request
      </button>
    </form>
  );
}
