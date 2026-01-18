import { Heart, User, Car, Plane, Home, Building2, Shield, Flame, HardHat, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function ServiceCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  const personalInsurance = [
    {
      icon: Heart,
      title: 'Health Insurance',
      items: ['Individual Health Plans', 'Family Floater Plans', 'Senior Citizen Health Insurance'],
    },
    {
      icon: Shield,
      title: 'Life & Term Insurance',
      items: ['Term Life Insurance', 'Whole Life Insurance', 'Endowment Plans'],
    },
    {
      icon: Car,
      title: 'Motor Insurance',
      items: ['Car Insurance', 'Two-wheeler Insurance', 'Commercial Vehicle Insurance'],
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      items: ['Domestic Travel Insurance', 'International Travel Insurance', 'Student Travel Insurance'],
    },
    {
      icon: Home,
      title: 'Home Insurance',
      items: ['Home Structure Insurance', 'Home Contents Insurance', 'Tenant Insurance'],
    },
  ];

  const businessInsurance = [
    {
      icon: User,
      title: 'Group Health & Accident',
      items: ['Group Mediclaim Policy', 'Group Personal Accident', 'Employee Benefits'],
    },
    {
      icon: Shield,
      title: 'Workmen\'s Compensation',
      items: ['WC Policy Coverage', 'Statutory Compliance', 'Employee Protection'],
    },
    {
      icon: Building2,
      title: 'Liability Insurance',
      items: ['Public Liability', 'Professional Indemnity', 'Product Liability'],
    },
    {
      icon: Flame,
      title: 'Fire & Burglary',
      items: ['Fire Insurance', 'Burglary Insurance', 'Property Protection'],
    },
    {
      icon: HardHat,
      title: 'Contractor\'s All Risk (CAR)',
      items: ['Construction Projects', 'Civil Engineering Works', 'Project Insurance'],
    },
    {
      icon: Cog,
      title: 'Contractor\'s Plant & Machinery',
      items: ['CPM Insurance', 'Equipment Coverage', 'Machinery Protection'],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#003557] text-white" style={{ minHeight: '25vh' }}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-10 flex items-center" style={{ minHeight: '25vh' }}>
          <div>
            <h1 className="text-white mb-3">Our Services</h1>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              Comprehensive insurance solutions for individuals and businesses. Expert advisory across personal and corporate insurance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Insurance */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#003557] mb-3">Personal Insurance</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl">
              Protect yourself and your family with comprehensive personal insurance coverage tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {personalInsurance.map((service, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <ServiceCard index={index}>
                  <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-[#f5a623] transition-colors h-full">
                    <div className="w-12 h-12 bg-[#003557] flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <h3 className="text-[#003557] mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Corporate Insurance */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#003557] mb-3">Business & Corporate Insurance</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl">
              Comprehensive insurance solutions designed for businesses of all sizes. Protect your assets, employees, and operations.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {businessInsurance.map((service, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <ServiceCard index={index}>
                  <div className="bg-white border border-slate-200 p-5 sm:p-6 hover:border-[#f5a623] transition-colors h-full">
                    <div className="w-12 h-12 bg-[#003557] flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <h3 className="text-[#003557] mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003557]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Need Help Choosing the Right Coverage?</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6">
              Our experienced advisors are here to help you find the perfect insurance solution for your needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#f5a623] text-[#003557] px-6 sm:px-8 py-3 hover:bg-[#e09515] transition-colors inline-block text-sm w-full sm:w-auto"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}