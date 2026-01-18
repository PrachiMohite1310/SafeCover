import { Mail, Phone } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OurTeam() {
  const team = [
    {
      name: 'Michael Chen',
      title: 'Founder & Chief Executive Officer',
      credentials: 'CFP®, CLU, ChFC',
      image: 'https://images.unsplash.com/photo-1589458223095-03eee50f0054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbnxlbnwxfHx8fDE3NjYzMjc5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Founded SafeCover in 1999. Over 25 years of experience in insurance advisory and risk management. Specializes in corporate insurance programs and executive benefit planning for Fortune 500 companies.',
      email: 'michael.chen@safecover.com',
      phone: '(555) 123-4567',
    },
    {
      name: 'Sarah Williams',
      title: 'Vice President, Client Services',
      credentials: 'CLU, LUTCF, RICP',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjYzMjc5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Oversees all client relationships and service delivery operations. 18 years of experience in life insurance and health coverage advisory for individual and corporate clients.',
      email: 'sarah.williams@safecover.com',
      phone: '(555) 123-4568',
    },
    {
      name: 'David Rodriguez',
      title: 'Senior Insurance Advisor',
      credentials: 'ChFC, RICP',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjMxMDk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Provides comprehensive life and health insurance planning for high-net-worth individuals and families. 15 years of advisory experience with focus on estate planning integration.',
      email: 'david.rodriguez@safecover.com',
      phone: '(555) 123-4569',
    },
    {
      name: 'Emily Thompson',
      title: 'Commercial Insurance Specialist',
      credentials: 'CPCU, ARM, AU',
      image: 'https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZHZpc29yJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY2MzI3OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Specializes in business insurance and commercial risk management for mid-market and enterprise clients. 12 years of experience in property, casualty, and liability coverage.',
      email: 'emily.thompson@safecover.com',
      phone: '(555) 123-4570',
    },
    {
      name: 'James Park',
      title: 'Director, Retirement Planning',
      credentials: 'CFP®, CFA, RICP',
      image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjYzMDA4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Develops retirement income strategies and manages investment portfolios for affluent clients. 20 years of financial planning and investment advisory experience.',
      email: 'james.park@safecover.com',
      phone: '(555) 123-4571',
    },
    {
      name: 'Lisa Martinez',
      title: 'Group Benefits Consultant',
      credentials: 'GBA, RHU, REBC',
      image: 'https://images.unsplash.com/photo-1758524056096-6bedf35a33f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NjMyNzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Designs and manages employee benefit programs for corporate clients. 14 years of expertise in group health, dental, vision, and disability insurance programs.',
      email: 'lisa.martinez@safecover.com',
      phone: '(555) 123-4572',
    },
  ];

  const certifications = [
    { abbr: 'CFP®', full: 'Certified Financial Planner' },
    { abbr: 'CLU', full: 'Chartered Life Underwriter' },
    { abbr: 'ChFC', full: 'Chartered Financial Consultant' },
    { abbr: 'CPCU', full: 'Chartered Property Casualty Underwriter' },
    { abbr: 'CFA', full: 'Chartered Financial Analyst' },
    { abbr: 'RICP', full: 'Retirement Income Certified Professional' },
    { abbr: 'ARM', full: 'Associate in Risk Management' },
    { abbr: 'GBA', full: 'Group Benefits Associate' },
  ];

  return (
    <div>
      <Breadcrumb 
        title="Our Team" 
        description="Licensed insurance professionals with advanced certifications and decades of combined industry experience serving corporate and individual clients."
      />

      {/* Team Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-slate-200 overflow-hidden hover:border-[#0056B3] transition-colors"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#001529] mb-1">{member.name}</h3>
                  <div className="text-[#0056B3] text-sm mb-2">{member.title}</div>
                  <div className="text-slate-500 text-sm mb-4">{member.credentials}</div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-slate-600 hover:text-[#0056B3] transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-slate-600 hover:text-[#0056B3] transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-6">Professional Certifications</h2>
          <p className="text-slate-600 mb-10 max-w-3xl">
            Our advisors maintain advanced industry certifications requiring rigorous examination, experience requirements, and ongoing continuing education. All certifications are issued by recognized professional organizations and regulatory bodies.
          </p>
          <div className="grid grid-cols-12 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-slate-200 p-6">
                <div className="text-[#0056B3] mb-2">{cert.abbr}</div>
                <p className="text-slate-600 text-sm">{cert.full}</p>
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
              <h2 className="text-white mb-4">Schedule an Advisor Consultation</h2>
              <p className="text-slate-300 text-lg">
                Connect with one of our certified advisors to discuss your insurance requirements and receive a comprehensive risk assessment.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="/contact-us"
                className="bg-[#0056B3] text-white px-8 py-4 hover:bg-[#004494] transition-colors inline-block"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}