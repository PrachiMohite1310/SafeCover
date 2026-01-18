import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        title: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Corporate Headquarters',
      lines: ['123 Insurance Boulevard, Suite 500', 'Financial District, New York, NY 10004'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['Main: (555) 123-4567', 'Toll Free: (800) 555-SAFE'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@safecover.com', 'support@safecover.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 8:00 AM - 6:00 PM EST', 'Saturday: 9:00 AM - 2:00 PM EST'],
    },
  ];

  return (
    <div>
      <Breadcrumb 
        title="Contact Us" 
        description="Request a consultation with one of our licensed insurance advisors. We respond to all inquiries within 24 business hours."
      />

      {/* Contact Info Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-50 border border-slate-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#001529] flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#001529]">{info.title}</h3>
                </div>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-12">
            {/* Form - 8 cols */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white border border-slate-200 p-8">
                <h2 className="text-[#001529] mb-6">Request a Consultation</h2>
                <p className="text-slate-600 mb-8">
                  Complete the form below and one of our licensed advisors will contact you within 24 business hours to discuss your insurance requirements.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Send className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-green-900 mb-2">Request Received</h3>
                        <p className="text-green-700 leading-relaxed">
                          Thank you for contacting SafeCover Insurance Advisory. A licensed advisor will review your inquiry and respond within 24 business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="firstName" className="block text-slate-700 mb-2 text-sm">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="lastName" className="block text-slate-700 mb-2 text-sm">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="company" className="block text-slate-700 mb-2 text-sm">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="title" className="block text-slate-700 mb-2 text-sm">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="email" className="block text-slate-700 mb-2 text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="phone" className="block text-slate-700 mb-2 text-sm">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-slate-700 mb-2 text-sm">
                        Service Category *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent bg-white text-sm"
                      >
                        <option value="">Select a service category</option>
                        <option value="life">Life Insurance</option>
                        <option value="health">Health Insurance</option>
                        <option value="business">Business Insurance</option>
                        <option value="group">Group Benefits</option>
                        <option value="retirement">Retirement Planning</option>
                        <option value="investment">Investment Advisory</option>
                        <option value="property">Property Insurance</option>
                        <option value="auto">Auto Insurance</option>
                        <option value="other">Other / Multiple Categories</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-slate-700 mb-2 text-sm">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your insurance requirements or questions..."
                        className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0056B3] focus:border-transparent resize-none text-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0056B3] text-white px-6 py-4 hover:bg-[#004494] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar - 4 cols */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 p-6">
                <h3 className="text-[#001529] mb-4">Consultation Process</h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0056B3] text-white flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </div>
                    <span>Advisor response within 24 business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0056B3] text-white flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </div>
                    <span>Complimentary initial consultation scheduled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0056B3] text-white flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </div>
                    <span>Comprehensive needs assessment conducted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0056B3] text-white flex items-center justify-center flex-shrink-0 text-xs">
                      4
                    </div>
                    <span>Detailed proposal with carrier recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-[#001529] mb-4">Office Locations</h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-[#001529] mb-1">New York (Headquarters)</div>
                    <p className="text-slate-600">123 Insurance Boulevard<br />New York, NY 10004</p>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <div className="text-[#001529] mb-1">Chicago Office</div>
                    <p className="text-slate-600">456 Corporate Drive<br />Chicago, IL 60601</p>
                  </div>
                  <div>
                    <div className="text-[#001529] mb-1">San Francisco Office</div>
                    <p className="text-slate-600">789 Market Street<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="bg-slate-200 border border-slate-300 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">Interactive office location map integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}