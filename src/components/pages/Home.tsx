import { Link } from 'react-router-dom';
import { Shield, Users, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import logoImage from 'figma:asset/65cfb555df06c1c078c38fa676311a48acdaf3b6.png';

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const highlights = [
    {
      icon: Shield,
      title: 'Expert Advisory',
      description: 'Professional insurance guidance backed by 17+ years of industry expertise',
    },
    {
      icon: Users,
      title: 'Long-term Client Relationships',
      description: 'Building trust through consistent service and personalized attention',
    },
    {
      icon: HeadphonesIcon,
      title: 'Strong Claim Assistance',
      description: 'Comprehensive support throughout the claim process and post-sale service',
    },
  ];

  const values = [
    'Making insurance simple, transparent, and accessible',
    'Independent advisory with client-first approach',
    'Comprehensive coverage across personal and business needs',
    'Professional claim assistance and ongoing support',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003557] to-[#005580] text-white" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="text-white mb-3 sm:mb-4 leading-tight">
                Professional Insurance Advisory You Can Trust
              </h1>
              <div className="bg-white/10 border border-white/20 p-4 sm:p-5 mb-4 sm:mb-6">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  SafeCover Insurance Advisory is a professionally managed insurance agency and advisory firm focused on making insurance simple, transparent, and accessible. We provide expert guidance across personal and business insurance needs with a commitment to long-term client relationships.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="bg-[#f5a623] text-[#003557] px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-[#e09515] transition-colors inline-flex items-center gap-2 sm:gap-3 text-sm w-full sm:w-auto justify-center"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex items-center justify-center mt-6 lg:mt-0">
              <div className="bg-white/10 border border-white/20 p-4 backdrop-blur-sm max-w-sm w-full">
                <img 
                  src={logoImage} 
                  alt="SafeCover Insurance Advisory" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-4"
              >
                <AnimatedCard index={index}>
                  <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 h-full">
                    <div className="w-12 h-12 bg-[#003557] flex items-center justify-center mb-4">
                      <highlight.icon className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <h3 className="text-[#003557] mb-3">{highlight.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{highlight.description}</p>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-12 gap-6 sm:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[#003557] mb-4">Why Choose SafeCover</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-4 leading-relaxed">
                With over 17 years of experience in insurance and financial services, SafeCover Insurance Advisory has established itself as a trusted partner for individuals and businesses seeking comprehensive insurance solutions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                Our team of experienced professionals provides personalized advisory services, helping clients navigate complex insurance decisions with clarity and confidence. We represent leading insurance providers and offer objective guidance tailored to your specific needs.
              </p>
              <Link
                to="/services"
                className="border-2 border-[#003557] text-[#003557] px-5 sm:px-6 py-2.5 hover:bg-slate-100 transition-colors inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white border border-slate-200 p-5 sm:p-6">
                <h3 className="text-[#003557] mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003557] border-t border-[#004a73]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Ready to Protect What Matters Most?</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
              Let our experienced advisors help you find the right insurance coverage for your needs. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#f5a623] text-[#003557] px-6 sm:px-8 py-3 hover:bg-[#e09515] transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/team"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}