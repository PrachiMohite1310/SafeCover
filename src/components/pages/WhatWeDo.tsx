import { Shield, Heart, Briefcase, Users, PiggyBank, TrendingUp, Home, Car } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';

export function WhatWeDo() {
  const services = [
    {
      icon: Shield,
      title: 'Life Insurance',
      description:
        'Comprehensive life insurance solutions including term, whole, and universal life policies. Our advisors conduct thorough financial analysis to determine appropriate coverage levels aligned with your estate planning objectives.',
      offerings: [
        'Term Life Insurance (10, 20, 30-year terms)',
        'Whole Life Insurance with cash value accumulation',
        'Universal Life Insurance with flexible premiums',
        'Variable Universal Life for investment growth',
        'Survivorship policies for estate planning',
        'Key Person Insurance for business continuity',
      ],
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description:
        'Navigate complex healthcare coverage options with expert guidance. We analyze plan designs, provider networks, and cost structures across multiple carriers to identify optimal solutions.',
      offerings: [
        'Individual and Family Health Plans (ACA compliant)',
        'Medicare Advantage and Supplement Plans',
        'Prescription Drug Coverage (Medicare Part D)',
        'Health Savings Accounts (HSA) optimization',
        'Critical Illness and Accident Insurance',
        'Dental and Vision benefit programs',
      ],
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description:
        'Comprehensive commercial insurance programs designed for enterprises. Our risk management specialists conduct detailed exposure analysis and design multi-layered coverage strategies.',
      offerings: [
        'General Liability Insurance',
        'Professional Liability (Errors & Omissions)',
        'Directors & Officers Liability',
        'Cyber Liability and Data Breach Coverage',
        'Commercial Property and Business Interruption',
        'Workers Compensation programs',
      ],
    },
    {
      icon: Users,
      title: 'Group Benefits',
      description:
        'Design and implement competitive employee benefit programs that support talent acquisition and retention objectives. We manage carrier negotiations, plan administration, and regulatory compliance.',
      offerings: [
        'Group Health Insurance (fully-insured and self-funded)',
        'Dental and Vision benefit programs',
        'Group Life and AD&D Insurance',
        'Short-term and Long-term Disability',
        'Health Savings Accounts (HSA)',
        'Flexible Spending Accounts (FSA)',
      ],
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description:
        'Develop comprehensive retirement strategies that ensure financial security. Our certified planners analyze current assets, project future needs, and create actionable implementation plans.',
      offerings: [
        'Traditional and Roth IRA planning',
        '401(k) plan design and optimization',
        'Fixed and Variable Annuities',
        'Pension maximization strategies',
        'Social Security timing analysis',
        'Required Minimum Distribution (RMD) planning',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description:
        'Professional portfolio management and investment guidance. Our advisors provide ongoing monitoring, strategic rebalancing, and tax-efficient investment strategies aligned with your objectives.',
      offerings: [
        'Diversified portfolio construction',
        'Asset allocation and rebalancing',
        'Risk-adjusted return optimization',
        'Tax-loss harvesting strategies',
        'Alternative investment analysis',
        'Quarterly performance reporting',
      ],
    },
    {
      icon: Home,
      title: 'Property Insurance',
      description:
        'Comprehensive property coverage for residential and commercial real estate. We conduct property valuations, assess liability exposures, and recommend appropriate coverage limits.',
      offerings: [
        'Homeowners Insurance (HO-3, HO-5 policies)',
        'Renters Insurance programs',
        'Condominium Insurance',
        'Landlord and Investment Property coverage',
        'Flood Insurance (NFIP and private market)',
        'Umbrella Liability policies',
      ],
    },
    {
      icon: Car,
      title: 'Auto Insurance',
      description:
        'Personal and commercial auto insurance with competitive pricing across multiple carriers. We analyze driving profiles, coverage requirements, and recommend appropriate liability limits.',
      offerings: [
        'Personal Auto Insurance',
        'Multi-vehicle policy discounts',
        'Comprehensive and Collision coverage',
        'Uninsured/Underinsured Motorist protection',
        'Gap Insurance for leased vehicles',
        'Commercial Fleet insurance',
      ],
    },
  ];

  return (
    <div>
      <Breadcrumb 
        title="What We Do" 
        description="Comprehensive insurance and advisory services across all major coverage categories, supported by certified professionals and relationships with top-rated carriers."
      />

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-8 pb-12 border-b border-slate-200 last:border-0"
              >
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#001529] flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[#001529] mb-3">{service.title}</h2>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-slate-50 border border-slate-200 p-6">
                    <h3 className="text-[#001529] mb-4 text-sm uppercase tracking-wider">Coverage Options</h3>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#0056B3] mt-1.5 flex-shrink-0"></div>
                          <span className="text-slate-700">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              <h2 className="text-white mb-4">Discuss Your Coverage Requirements</h2>
              <p className="text-slate-300 text-lg">
                Schedule a consultation with a licensed advisor to receive personalized recommendations and a comprehensive risk assessment.
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