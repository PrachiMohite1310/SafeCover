import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { motion, useInView } from 'motion/react';

function ContactCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
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

  const offices = [
    {
      city: 'Pune Office',
      address: 'Office No. 506, 5th Floor, Bhosale Shine Arcade, Deccan, Pune – 411004',
    },
    {
      city: 'Mumbai Office',
      address: 'Office No. B12 A, Wadala Udyog Bhavan, Wadala, Mumbai – 400031',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#003557] text-white" style={{ minHeight: '25vh' }}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-10 flex items-center" style={{ minHeight: '25vh' }}>
          <div>
            <h1 className="text-white mb-3">Contact Us</h1>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              Get in touch with SafeCover Insurance Advisory. Our team is ready to assist you with all your insurance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <ContactCard index={0}>
                <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-[#003557] flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="text-[#003557] mb-3">Phone / WhatsApp</h3>
                  <div className="space-y-2">
                    <a href="tel:7387791857" className="block text-slate-600 hover:text-[#f5a623] transition-colors text-sm">
                      73877 91857
                    </a>
                    <a href="tel:9970362944" className="block text-slate-600 hover:text-[#f5a623] transition-colors text-sm">
                      99703 62944
                    </a>
                  </div>
                </div>
              </ContactCard>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <ContactCard index={1}>
                <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-[#003557] flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="text-[#003557] mb-3">Email</h3>
                  <a 
                    href="mailto:jaypal@safecoverinsurance.com" 
                    className="text-slate-600 hover:text-[#f5a623] transition-colors break-all text-sm"
                  >
                    jaypal@safecoverinsurance.com
                  </a>
                </div>
              </ContactCard>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <ContactCard index={2}>
                <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-[#003557] flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="text-[#003557] mb-3">Website</h3>
                  <a 
                    href="https://www.safecoverinsurance.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#f5a623] transition-colors text-sm"
                  >
                    www.safecoverinsurance.com
                  </a>
                </div>
              </ContactCard>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-[#003557] mb-4 sm:mb-6">Office Locations</h2>
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              {offices.map((office, index) => (
                <div key={index} className="col-span-12 md:col-span-6">
                  <ContactCard index={index + 3}>
                    <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#003557] flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#f5a623]" />
                        </div>
                        <div>
                          <h3 className="text-[#003557] mb-2">{office.city}</h3>
                          <p className="text-slate-600 leading-relaxed text-sm">{office.address}</p>
                        </div>
                      </div>
                    </div>
                  </ContactCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-50">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-12 gap-6 sm:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[#003557] mb-4">Send Us a Message</h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm">
                Have a question or need assistance? Fill out the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Send className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-green-900 mb-2 text-sm">Message Sent Successfully!</h3>
                      <p className="text-green-700 leading-relaxed text-sm">
                        Thank you for contacting SafeCover Insurance Advisory. We will respond to your inquiry shortly.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-5 sm:p-6 space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 mb-2 text-xs">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="email" className="block text-slate-700 mb-2 text-xs">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-slate-700 mb-2 text-xs">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-700 mb-2 text-xs">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-transparent bg-white text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="health">Health Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="motor">Motor Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="claim">Claim Assistance</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 mb-2 text-xs">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-transparent resize-none text-sm"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[#f5a623] text-[#003557] px-6 py-3 hover:bg-[#e09515] transition-colors flex items-center justify-center gap-2 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>

            <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="bg-white border border-slate-200 p-5 sm:p-6">
                <h3 className="text-[#003557] mb-4 sm:mb-5">Business Hours</h3>
                <div className="space-y-3 text-slate-600 text-sm">
                  <div className="flex justify-between pb-3 border-b border-slate-200">
                    <span>Monday - Friday</span>
                    <span className="text-right">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-200">
                    <span>Saturday</span>
                    <span className="text-right">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-right">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#003557] text-white p-5 sm:p-6">
                <h3 className="text-white mb-3">Quick Response</h3>
                <p className="text-white/80 mb-4 sm:mb-5 leading-relaxed text-sm">
                  Need immediate assistance? Call or WhatsApp us directly for faster response times.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:7387791857"
                    className="block bg-[#f5a623] text-[#003557] px-5 py-2.5 hover:bg-[#e09515] transition-colors text-center text-sm"
                  >
                    Call: 73877 91857
                  </a>
                  <a
                    href="https://wa.me/917387791857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-2 border-white text-white px-5 py-2.5 hover:bg-white/10 transition-colors text-center text-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}