import { ShieldCheck, Clock, FileText, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} className="text-primary" />,
  Clock: <Clock size={32} className="text-primary" />,
  FileText: <FileText size={32} className="text-primary" />,
  Star: <Star size={32} className="text-primary" />,
};

interface WhyUsCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export default function WhyUsCard({ title, description, icon, index = 0 }: WhyUsCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-7 border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
        {iconMap[icon] || <ShieldCheck size={32} className="text-primary" />}
      </div>
      <h3 className="text-xl font-bold font-heading text-surface-dark mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
