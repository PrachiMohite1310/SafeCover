import { Target, Eye, Shield, Users, Award, Heart } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WhoWeAre() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent operations and ethical guidance in all client relationships. Independent analysis without commission bias.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Objective recommendations aligned exclusively with client interests and risk management objectives.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Highest professional standards maintained through advanced certifications and continuing education.',
    },
    {
      icon: Heart,
      title: 'Accountability',
      description: 'Long-term advisor relationships with ongoing service, annual reviews, and claims advocacy.',
    },
  ];

  const milestones = [
    { year: '1999', event: 'SafeCover Insurance Advisory founded in New York' },
    { year: '2003', event: 'Expanded services to include retirement planning division' },
    { year: '2007', event: 'Opened Chicago and San Francisco regional offices' },
    { year: '2010', event: 'Surpassed $1 billion in managed insurance coverage' },
    { year: '2015', event: 'Launched investment advisory services for HNW clients' },
    { year: '2018', event: 'Achieved 5,000+ active client accounts milestone' },
    { year: '2022', event: 'Expanded carrier network to 50+ A.M. Best rated providers' },
    { year: '2024', event: 'Managing $2.5B+ in coverage across all service categories' },
  ];

  return (
    <div>
      <Breadcrumb 
        title="Why Us" 
        description="An independent insurance advisory firm serving Fortune 500 companies, mid-market enterprises, and high-net-worth individuals since 1999."
      />

      {/* Company Overview */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-[#001529] mb-6">Corporate Overview</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  SafeCover Insurance Advisory is an independent insurance brokerage and advisory firm headquartered in New York's Financial District. We provide comprehensive insurance solutions and risk management services to corporate clients and individual policyholders across the United States.
                </p>
                <p>
                  Our independence is structural. Unlike captive agents tied to single carriers, we maintain no ownership relationships or preferential agreements with insurance providers. This enables us to evaluate coverage options across 50+ carriers objectively, ensuring clients receive optimal protection at competitive market rates.
                </p>
                <p>
                  Our advisory team holds advanced professional certifications including Certified Financial Planner (CFP®), Chartered Life Underwriter (CLU), Chartered Financial Consultant (ChFC), and Chartered Property Casualty Underwriter (CPCU) designations. All advisors maintain active state licenses and complete annual continuing education requirements mandated by regulatory authorities.
                </p>
                <p>
                  With over 25 years of industry experience, SafeCover has established a reputation for technical expertise, transparent communication, and enduring client relationships. Our average client relationship exceeds 12 years, with a 98% annual retention rate reflecting the quality and consistency of our advisory services.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 p-8 mb-6">
                <h3 className="text-[#001529] mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Founded</div>
                    <div className="text-[#001529]">1999</div>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Headquarters</div>
                    <div className="text-[#001529]">New York, NY</div>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Licensed States</div>
                    <div className="text-[#001529]">All 50 States</div>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Active Clients</div>
                    <div className="text-[#001529]">5,000+</div>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Carrier Partners</div>
                    <div className="text-[#001529]">50+ A.M. Best Rated</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Assets Under Management</div>
                    <div className="text-[#001529]">$2.5B+</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY2MjE5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SafeCover office"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="bg-white border border-slate-200 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#001529] flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-[#001529]">Mission Statement</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To deliver independent, expert insurance advisory services that enable clients to make informed coverage decisions based on comprehensive risk analysis, objective carrier evaluation, and transparent communication. We prioritize client objectives above all other considerations.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="bg-white border border-slate-200 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#001529] flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-[#001529]">Vision Statement</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To establish SafeCover as the preeminent independent insurance advisory firm, recognized throughout the industry for structural independence, professional excellence, and unwavering commitment to client success across all insurance and risk management categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Core Values</h2>
          <div className="grid grid-cols-12 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-50 border border-slate-200 p-6"
              >
                <div className="w-12 h-12 bg-[#0056B3] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#001529] mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-[#001529] mb-10">Company Milestones</h2>
          <div className="grid grid-cols-12 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-slate-200 p-6">
                <div className="text-[#0056B3] mb-3">{milestone.year}</div>
                <p className="text-slate-700 text-sm leading-relaxed">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="bg-[#001529] border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h2 className="text-white mb-10">Performance Overview</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 md:col-span-3 border-l-4 border-[#0056B3] pl-6">
              <div className="text-white mb-2">25+ Years</div>
              <div className="text-slate-400 text-sm">Industry Leadership</div>
            </div>
            <div className="col-span-6 md:col-span-3 border-l-4 border-[#0056B3] pl-6">
              <div className="text-white mb-2">5,000+ Clients</div>
              <div className="text-slate-400 text-sm">Active Accounts</div>
            </div>
            <div className="col-span-6 md:col-span-3 border-l-4 border-[#0056B3] pl-6">
              <div className="text-white mb-2">50+ Carriers</div>
              <div className="text-slate-400 text-sm">Strategic Partners</div>
            </div>
            <div className="col-span-6 md:col-span-3 border-l-4 border-[#0056B3] pl-6">
              <div className="text-white mb-2">98% Retention</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}