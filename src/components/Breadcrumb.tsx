import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  title: string;
  description?: string;
}

export function Breadcrumb({ title, description }: BreadcrumbProps) {
  return (
    <section className="bg-slate-100 border-b border-slate-200" style={{ height: '200px' }}>
      <div className="max-w-[1440px] mx-auto px-8 h-full flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <Link to="/" className="hover:text-[#0056B3] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">{title}</span>
        </div>
        <h1 className="text-[#001529] mb-2">{title}</h1>
        {description && (
          <p className="text-slate-600 text-lg max-w-3xl">{description}</p>
        )}
      </div>
    </section>
  );
}
