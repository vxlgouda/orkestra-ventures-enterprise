import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[oklch(0.98_0.005_240)] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-body-large text-[oklch(0.4_0.02_240)] max-w-3xl mx-auto">
              Have questions about Orkestra Ventures? We're here to help. Reach
              out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-h2 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[oklch(0.55_0.18_260)]" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Office Location</h3>
                    <p className="text-body text-[oklch(0.4_0.02_240)]">
                      Smart Village
                      <br />
                      Cairo, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.7_0.15_70_/_0.1)] flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[oklch(0.7_0.15_70)]" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Email</h3>
                    <a
                      href="mailto:info@orkestraventures.com"
                      className="text-body text-[oklch(0.55_0.18_260)] hover:underline"
                    >
                      info@orkestraventures.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.65_0.12_180_/_0.1)] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[oklch(0.65_0.12_180)]" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Phone</h3>
                    <a
                      href="tel:+20123456789"
                      className="text-body text-[oklch(0.55_0.18_260)] hover:underline"
                    >
                      +20 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[oklch(0.55_0.18_260)]" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Office Hours</h3>
                    <p className="text-body text-[oklch(0.4_0.02_240)]">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card-standard">
                <div className="aspect-video bg-[oklch(0.96_0.005_240)] rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-[oklch(0.4_0.02_240)]" />
                </div>
                <p className="text-body-small text-[oklch(0.4_0.02_240)] mt-4 text-center">
                  Smart Village, Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-h2 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                    placeholder="+20 123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="application">Application Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Send Message <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 mb-6">Frequently Asked Questions</h2>
            <p className="text-body-large text-[oklch(0.4_0.02_240)]">
              Quick answers to common questions about Orkestra Ventures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card-standard">
              <h3 className="text-h4 mb-3">
                What are the admission requirements?
              </h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                We look for professionals with a bachelor's degree, 2+ years of
                work experience, strong English proficiency, and demonstrated
                interest in AI. Technical track requires basic programming
                knowledge.
              </p>
            </div>

            <div className="card-standard">
              <h3 className="text-h4 mb-3">What is the program cost?</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Program fees vary by track and payment plan. We offer flexible
                payment options and scholarships for qualified candidates.
                Contact us for detailed pricing information.
              </p>
            </div>

            <div className="card-standard">
              <h3 className="text-h4 mb-3">
                Can I work while attending the program?
              </h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Yes! The program is designed for working professionals with
                evening and weekend sessions. You'll need to commit 15-20 hours
                per week including class time and projects.
              </p>
            </div>

            <div className="card-standard">
              <h3 className="text-h4 mb-3">
                What career support do you provide?
              </h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                We provide comprehensive career support including resume
                building, interview preparation, salary negotiation coaching,
                and direct introductions to hiring partners in Egypt, UAE, and
                international markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
