import { Star, Quote, Building2, Users, TrendingUp, Award } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';

export function OurClients() {
  const testimonials = [
    {
      name: 'Robert Johnson',
      title: 'Chief Financial Officer',
      company: 'TechCorp Industries',
      industry: 'Technology Manufacturing',
      rating: 5,
      text: 'SafeCover conducted a comprehensive audit of our commercial insurance program and identified $300,000 in annual savings through carrier optimization and coverage restructuring. Their technical expertise and carrier relationships are exceptional.',
    },
    {
      name: 'Jennifer Martinez',
      title: 'Vice President, Human Resources',
      company: 'MedHealth Systems',
      industry: 'Healthcare Services',
      rating: 5,
      text: 'Our employee benefits program has been transformed since partnering with SafeCover. They manage carrier negotiations, regulatory compliance, and ongoing administration with remarkable efficiency and professionalism.',
    },
    {
      name: 'Thomas Anderson',
      title: 'Managing Partner',
      company: 'Anderson Law Group',
      industry: 'Legal Services',
      rating: 5,
      text: 'Professional liability insurance is mission-critical for our firm. SafeCover provides comprehensive E&O coverage with competitive premiums and has successfully advocated for our interests during two complex claims.',
    },
    {
      name: 'Maria Garcia',
      title: 'Chief Executive Officer',
      company: 'Garcia Consulting Group',
      industry: 'Management Consulting',
      rating: 5,
      text: 'As our business grew from 15 to 150 employees, SafeCover scaled our insurance programs accordingly. Their proactive approach to coverage reviews ensures we maintain appropriate protection at every growth stage.',
    },
    {
      name: 'David Kim',
      title: 'Founder & CEO',
      company: 'Quantum Analytics',
      industry: 'Data Analytics',
      rating: 5,
      text: 'We have engaged SafeCover for both corporate insurance and personal wealth management services. Their integrated approach and independent structure ensure we receive objective guidance across all financial categories.',
    },
    {
      name: 'Lisa Thompson',
      title: 'Executive Director',
      company: 'Community Foundation',
      industry: 'Non-Profit Organization',
      rating: 5,
      text: 'SafeCover understands the unique insurance requirements of non-profit organizations. They designed a comprehensive program that meets our board governance standards while optimizing our limited budget resources.',
    },
  ];

  const clientTypes = [
    {
      icon: Building2,
      title: 'Corporate Clients',
      description: 'Fortune 500 companies and mid-market enterprises across all industries',
      count: '200+',
    },
    {
      icon: Users,
      title: 'Small & Medium Business',
      description: 'SMEs and professional service firms with 10-500 employees',
      count: '1,500+',
    },
    {
      icon: TrendingUp,
      title: 'High Net Worth Individuals',
      description: 'Individual wealth management and personal insurance clients',
      count: '3,000+',
    },
    {
      icon: Award,
      title: 'Non-Profit Organizations',
      description: 'Charitable foundations and educational institutions',
      count: '300+',
    },
  ];

  const metrics = [
    { label: 'Client Retention Rate', value: '98%' },
    { label: 'Average Relationship Duration', value: '12+ Years' },
    { label: 'Client Satisfaction Rating', value: '4.9/5.0' },
    { label: 'Claims Advocacy Success Rate', value: '99%' },
  ];

  const industries = [
    'Technology & Software',
    'Healthcare & Medical Services',
    'Financial Services & Banking',
    'Legal & Professional Services',
    'Manufacturing & Industrial',
    'Real Estate & Construction',
    'Retail & E-commerce',
    'Non-Profit & Education',
    'Hospitality & Tourism',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Telecommunications',
  ];

  return (
    <div>
      <Breadcrumb 
        title="Client Success" 
        description="Trusted by thousands of organizations and individuals across industries for comprehensive insurance advisory and risk management services."
      />

      {/* Client Types */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Client Categories</h2>
          <div className="grid grid-cols-12 gap-6">
            {clientTypes.map((type, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-50 border border-slate-200 p-6">
                <div className="w-12 h-12 bg-[#001529] flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-[#0056B3] mb-3">{type.count}</div>
                <h3 className="text-[#001529] mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Client Testimonials</h2>
          <div className="grid grid-cols-12 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-slate-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-[#001529] text-sm mb-1">{testimonial.name}</div>
                  <div className="text-slate-600 text-xs mb-1">{testimonial.title}</div>
                  <div className="text-slate-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Client Success Metrics</h2>
          <div className="grid grid-cols-12 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="col-span-6 md:col-span-3 bg-slate-50 border border-slate-200 p-6">
                <div className="text-[#001529] mb-2">{metric.value}</div>
                <div className="text-slate-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Industries Served</h2>
          <div className="grid grid-cols-12 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-slate-200 px-6 py-4 text-slate-700 text-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001529] border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-white mb-4">Become a SafeCover Client</h2>
              <p className="text-slate-300 text-lg">
                Join thousands of satisfied clients who trust SafeCover for independent insurance advisory and comprehensive risk management services.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="/contact-us"
                className="bg-[#0056B3] text-white px-8 py-4 hover:bg-[#004494] transition-colors inline-block"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}