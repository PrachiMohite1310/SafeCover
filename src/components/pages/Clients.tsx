import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function PartnerCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export function Clients() {
  const insurancePartners = [
    { name: 'ICICI Lombard', category: 'General Insurance' },
    { name: 'Tata AIG', category: 'General Insurance' },
    { name: 'Future Generali', category: 'Life & General Insurance' },
    { name: 'HDFC ERGO', category: 'General Insurance' },
    { name: 'Niva Bupa', category: 'Health Insurance' },
    { name: 'Reliance General Insurance', category: 'General Insurance' },
    { name: 'Bajaj Allianz', category: 'Life & General Insurance' },
    { name: 'Care Health Insurance', category: 'Health Insurance' },
    { name: 'Star Health Insurance', category: 'Health Insurance' },
  ];

  const clients = [
    { name: 'TCS Limited', industry: 'Information Technology' },
    { name: 'Infosys Technologies', industry: 'IT Services' },
    { name: 'Larsen & Toubro', industry: 'Construction & Engineering' },
    { name: 'Tata Motors', industry: 'Automotive Manufacturing' },
    { name: 'Reliance Industries', industry: 'Conglomerate' },
    { name: 'HDFC Bank', industry: 'Banking & Financial Services' },
    { name: 'Asian Paints', industry: 'Manufacturing' },
    { name: 'Dr. Reddy\'s Laboratories', industry: 'Pharmaceuticals' },
    { name: 'Wipro Limited', industry: 'IT & Consulting' },
    { name: 'Mahindra & Mahindra', industry: 'Automotive & Aerospace' },
    { name: 'Sun Pharmaceutical', industry: 'Healthcare' },
    { name: 'Tech Mahindra', industry: 'Technology Services' },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#003557] text-white" style={{ minHeight: '25vh' }}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-10 flex items-center" style={{ minHeight: '25vh' }}>
          <div>
            <h1 className="text-white mb-3">Our Network</h1>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              SafeCover Insurance Advisory has built a strong network of insurance partners and corporate clients. Our partnerships with leading insurers and trusted relationships with businesses across industries enable us to deliver exceptional insurance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Partners Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#003557] mb-3">Trusted Insurance Tie-ups</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl">
              We work with India's most reputed insurance companies to provide you with competitive policies and comprehensive coverage options.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {insurancePartners.map((partner, index) => (
              <div
                key={index}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              >
                <PartnerCard index={index}>
                  <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-[#f5a623] transition-colors h-full">
                    <div className="bg-white border border-slate-200 aspect-square flex items-center justify-center mb-4">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-[#003557] mx-auto mb-3"></div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider">Logo Placeholder</div>
                      </div>
                    </div>
                    <h3 className="text-[#003557] mb-2 text-center text-sm">{partner.name}</h3>
                    <div className="text-slate-600 text-xs text-center">{partner.category}</div>
                  </div>
                </PartnerCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#003557] mb-3">Corporate Clients</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl">
              Trusted by leading corporations across industries. We provide comprehensive insurance solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
              >
                <PartnerCard index={index + insurancePartners.length}>
                  <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-[#f5a623] transition-colors h-full">
                    <div className="bg-white border border-slate-200 aspect-square flex items-center justify-center mb-4">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-[#003557] mx-auto mb-3"></div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider">Logo Placeholder</div>
                      </div>
                    </div>
                    <h3 className="text-[#003557] mb-2 text-center text-sm">{client.name}</h3>
                    <div className="text-slate-600 text-xs text-center">{client.industry}</div>
                  </div>
                </PartnerCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partnerships Matter */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-12 gap-6 sm:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[#003557] mb-4">Why Our Partnerships Matter</h2>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-5 text-sm">
                Our strategic partnerships with leading insurance providers enable us to offer:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#f5a623] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>
                  <div>
                    <div className="text-[#003557] mb-1 text-sm">Competitive Pricing</div>
                    <p className="text-slate-600 text-xs">Access to best rates and policy terms across multiple insurers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#f5a623] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>
                  <div>
                    <div className="text-[#003557] mb-1 text-sm">Wide Coverage Options</div>
                    <p className="text-slate-600 text-xs">Comprehensive range of insurance products for all your needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#f5a623] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>
                  <div>
                    <div className="text-[#003557] mb-1 text-sm">Streamlined Claims Process</div>
                    <p className="text-slate-600 text-xs">Direct coordination with insurers for faster claim settlements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#f5a623] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                  </div>
                  <div>
                    <div className="text-[#003557] mb-1 text-sm">Expert Guidance</div>
                    <p className="text-slate-600 text-xs">Independent advisory to help you choose the right insurer</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white border border-slate-200 p-5 sm:p-6">
                <h3 className="text-[#003557] mb-5">Coverage Statistics</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#f5a623] pl-5">
                    <div className="text-[#003557] mb-1 text-sm">9+</div>
                    <div className="text-slate-600 text-xs">Leading Insurance Partners</div>
                  </div>
                  <div className="border-l-4 border-[#f5a623] pl-5">
                    <div className="text-[#003557] mb-1 text-sm">50+</div>
                    <div className="text-slate-600 text-xs">Insurance Products Available</div>
                  </div>
                  <div className="border-l-4 border-[#f5a623] pl-5">
                    <div className="text-[#003557] mb-1 text-sm">17+ Years</div>
                    <div className="text-slate-600 text-xs">Industry Experience</div>
                  </div>
                  <div className="border-l-4 border-[#f5a623] pl-5">
                    <div className="text-[#003557] mb-1 text-sm">1000+</div>
                    <div className="text-slate-600 text-xs">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003557]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Find the Right Insurance Partner</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6">
              Let us help you compare policies and find the best coverage from our network of trusted insurance providers.
            </p>
            <Link
              to="/contact"
              className="bg-[#f5a623] text-[#003557] px-6 sm:px-8 py-3 hover:bg-[#e09515] transition-colors inline-block text-sm w-full sm:w-auto"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}