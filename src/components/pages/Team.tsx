import { Mail, Briefcase, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function MemberCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

export function Team() {
  const leadership = {
    name: 'Jaypal Deshmukh',
    title: 'Founder Partner',
    credentials: 'M.Com',
    experience: '17+ Years',
    bio: 'Jaypal Deshmukh brings over 17 years of extensive experience in insurance and financial services. As the founder of SafeCover Insurance Advisory, he specializes in policy selection, claim assistance, and providing expert guidance to clients across personal and business insurance needs. His client-first approach and deep industry knowledge have made SafeCover a trusted name in insurance advisory.',
  };

  const boardMembers = [
    {
      name: 'Dr. Jyoti Patil',
      credentials: 'BDS',
      role: 'Board Member',
      expertise: 'Healthcare & Medical Insurance',
    },
    {
      name: 'Dr. Karishma Sankpal',
      credentials: 'PT',
      role: 'Board Member',
      expertise: 'Healthcare Advisory',
    },
    {
      name: 'Sachin Deshmukh',
      credentials: 'BE (Mechanical)',
      role: 'Board Member',
      expertise: 'Industrial & Engineering Insurance',
    },
    {
      name: 'Shrishailya Mirajkar',
      credentials: 'BE (Civil), MBA',
      role: 'Board Member',
      expertise: 'Construction & Business Insurance',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#003557] text-white" style={{ minHeight: '25vh' }}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-10 flex items-center" style={{ minHeight: '25vh' }}>
          <div>
            <h1 className="text-white mb-3">Our Team</h1>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              Meet the experienced professionals behind SafeCover Insurance Advisory. Our team brings decades of combined expertise in insurance and financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <h2 className="text-[#003557] mb-6 sm:mb-8">Leadership</h2>
          
          <div className="grid grid-cols-12 gap-6 sm:gap-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-slate-100 border border-slate-200 aspect-[3/4] flex items-center justify-center mb-4">
                <User className="w-16 h-16 sm:w-20 sm:h-20 text-slate-400" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6">
                <h3 className="text-[#003557] mb-2">{leadership.name}</h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                  <span className="text-[#f5a623] text-sm">{leadership.title}</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-600 text-sm">{leadership.credentials}</span>
                </div>
                
                <div className="mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#003557]" />
                    <span className="text-[#003557] text-sm">Experience</span>
                  </div>
                  <p className="text-slate-600 text-sm">{leadership.experience} in Insurance & Financial Services</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4 text-sm">{leadership.bio}</p>

                <div className="bg-white border border-slate-200 p-4 sm:p-5">
                  <h4 className="text-[#003557] mb-3 text-xs uppercase tracking-wider">Areas of Expertise</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                      <span>Policy Selection & Advisory</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                      <span>Claim Assistance & Support</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                      <span>Business & Personal Insurance Solutions</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f5a623] mt-2 flex-shrink-0"></div>
                      <span>Financial Services & Risk Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Members */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <h2 className="text-[#003557] mb-6 sm:mb-8">Board of Members</h2>
          
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <MemberCard index={index}>
                  <div className="bg-white border border-slate-200 hover:border-[#f5a623] transition-colors h-full">
                    <div className="bg-slate-100 border-b border-slate-200 aspect-square flex items-center justify-center">
                      <User className="w-14 h-14 sm:w-16 sm:h-16 text-slate-400" />
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-[#003557] mb-1">{member.name}</h3>
                      <div className="text-[#f5a623] text-sm mb-2">{member.credentials}</div>
                      <div className="text-slate-500 text-sm mb-3">{member.role}</div>
                      <div className="pt-3 border-t border-slate-200">
                        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Expertise</div>
                        <p className="text-slate-600 text-sm">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                </MemberCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#003557]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Work With Our Expert Team</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6">
              Get personalized insurance advisory from professionals who understand your needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#f5a623] text-[#003557] px-6 sm:px-8 py-3 hover:bg-[#e09515] transition-colors inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}