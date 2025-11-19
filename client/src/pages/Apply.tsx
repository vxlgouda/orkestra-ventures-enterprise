import { CheckCircle, Upload, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Apply() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    city: "",
    
    // Education
    degree: "",
    university: "",
    graduationYear: "",
    major: "",
    
    // Professional
    currentEmployer: "",
    jobTitle: "",
    yearsExperience: "",
    industry: "",
    
    // Program Selection
    track: "",
    startDate: "",
    commitment: false,
    
    // Additional
    motivation: "",
    goals: "",
    hearAboutUs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success(
      "Application submitted successfully! We'll review your application and get back to you within 5 business days."
    );
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      city: "",
      degree: "",
      university: "",
      graduationYear: "",
      major: "",
      currentEmployer: "",
      jobTitle: "",
      yearsExperience: "",
      industry: "",
      track: "",
      startDate: "",
      commitment: false,
      motivation: "",
      goals: "",
      hearAboutUs: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[oklch(0.98_0.005_240)] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Apply to <span className="text-gradient">Orkestra Ventures</span>
            </h1>
            <p className="text-body-large text-[oklch(0.4_0.02_240)] max-w-3xl mx-auto">
              Take the first step toward launching your global AI career. Join
              100 talented professionals in our next cohort.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 mb-6">Application Process</h2>
            <p className="text-body-large text-[oklch(0.4_0.02_240)]">
              A simple 4-step process to join Orkestra Ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-standard text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                <span className="text-2xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                  1
                </span>
              </div>
              <h3 className="text-h4 mb-2">Submit Application</h3>
              <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                Complete the form below with your information and motivation.
              </p>
            </div>

            <div className="card-standard text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(0.7_0.15_70_/_0.1)] flex items-center justify-center">
                <span className="text-2xl font-bold text-[oklch(0.7_0.15_70)] font-data">
                  2
                </span>
              </div>
              <h3 className="text-h4 mb-2">Initial Review</h3>
              <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                Our team reviews your application within 5 business days.
              </p>
            </div>

            <div className="card-standard text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(0.65_0.12_180_/_0.1)] flex items-center justify-center">
                <span className="text-2xl font-bold text-[oklch(0.65_0.12_180)] font-data">
                  3
                </span>
              </div>
              <h3 className="text-h4 mb-2">Interview</h3>
              <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                Qualified candidates are invited for a 30-minute interview.
              </p>
            </div>

            <div className="card-standard text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                <span className="text-2xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                  4
                </span>
              </div>
              <h3 className="text-h4 mb-2">Decision</h3>
              <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                Receive your decision and enrollment information within 3 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated">
              <h2 className="text-h2 mb-8">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-h3 mb-6 pb-3 border-b border-[oklch(0.9_0.005_240)]">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Nationality *
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        required
                        value={formData.nationality}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-h3 mb-6 pb-3 border-b border-[oklch(0.9_0.005_240)]">
                    Education
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Highest Degree *
                      </label>
                      <select
                        name="degree"
                        required
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      >
                        <option value="">Select degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        University *
                      </label>
                      <input
                        type="text"
                        name="university"
                        required
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Graduation Year *
                      </label>
                      <input
                        type="number"
                        name="graduationYear"
                        required
                        min="1990"
                        max="2030"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Major/Field of Study *
                      </label>
                      <input
                        type="text"
                        name="major"
                        required
                        value={formData.major}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h3 className="text-h3 mb-6 pb-3 border-b border-[oklch(0.9_0.005_240)]">
                    Professional Experience
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Current Employer *
                      </label>
                      <input
                        type="text"
                        name="currentEmployer"
                        required
                        value={formData.currentEmployer}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Years of Experience *
                      </label>
                      <select
                        name="yearsExperience"
                        required
                        value={formData.yearsExperience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Industry *
                      </label>
                      <input
                        type="text"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <h3 className="text-h3 mb-6 pb-3 border-b border-[oklch(0.9_0.005_240)]">
                    Program Selection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Preferred Track *
                      </label>
                      <select
                        name="track"
                        required
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      >
                        <option value="">Select track</option>
                        <option value="technical">AI Technical Track</option>
                        <option value="business">AI Business Track</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Preferred Start Date *
                      </label>
                      <select
                        name="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      >
                        <option value="">Select start date</option>
                        <option value="march-2025">March 2025</option>
                        <option value="june-2025">June 2025</option>
                        <option value="september-2025">September 2025</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <h3 className="text-h3 mb-6 pb-3 border-b border-[oklch(0.9_0.005_240)]">
                    Tell Us About Yourself
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        Why do you want to join Orkestra Ventures? *
                      </label>
                      <textarea
                        name="motivation"
                        required
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent resize-none"
                        placeholder="Tell us what motivates you to pursue AI and why Orkestra Ventures is the right fit for you..."
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        What are your career goals after completing the program?
                        *
                      </label>
                      <textarea
                        name="goals"
                        required
                        value={formData.goals}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent resize-none"
                        placeholder="Describe your short-term and long-term career aspirations..."
                      />
                    </div>

                    <div>
                      <label className="block text-body font-medium text-[oklch(0.2_0.05_240)] mb-2">
                        How did you hear about Orkestra Ventures? *
                      </label>
                      <select
                        name="hearAboutUs"
                        required
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[oklch(0.9_0.005_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_260)] focus:border-transparent"
                      >
                        <option value="">Select option</option>
                        <option value="social-media">Social Media</option>
                        <option value="website">Website</option>
                        <option value="referral">Friend/Colleague Referral</option>
                        <option value="event">Event/Workshop</option>
                        <option value="university">University</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Commitment */}
                <div className="flex items-start gap-3 p-6 bg-[oklch(0.98_0.005_240)] rounded-lg">
                  <input
                    type="checkbox"
                    id="commitment"
                    name="commitment"
                    required
                    checked={formData.commitment}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-[oklch(0.9_0.005_240)] text-[oklch(0.55_0.18_260)] focus:ring-[oklch(0.55_0.18_260)]"
                  />
                  <label
                    htmlFor="commitment"
                    className="text-body text-[oklch(0.2_0.05_240)]"
                  >
                    I understand that this program requires 15-20 hours per week
                    commitment for 16 weeks, and I am prepared to dedicate the
                    necessary time and effort to successfully complete the
                    program. *
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    Submit Application <ArrowRight className="h-5 w-5" />
                  </Button>
                  <p className="text-body-small text-[oklch(0.4_0.02_240)] text-center mt-4">
                    By submitting this application, you agree to our Terms of
                    Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 mb-6">Admission Requirements</h2>
            <p className="text-body-large text-[oklch(0.4_0.02_240)]">
              Ensure you meet these requirements before applying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-standard">
              <CheckCircle className="h-8 w-8 text-[oklch(0.65_0.12_180)] mb-4" />
              <h3 className="text-h4 mb-2">Education</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Bachelor's degree or higher from an accredited institution.
              </p>
            </div>

            <div className="card-standard">
              <CheckCircle className="h-8 w-8 text-[oklch(0.65_0.12_180)] mb-4" />
              <h3 className="text-h4 mb-2">Experience</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Minimum 2 years of professional work experience.
              </p>
            </div>

            <div className="card-standard">
              <CheckCircle className="h-8 w-8 text-[oklch(0.65_0.12_180)] mb-4" />
              <h3 className="text-h4 mb-2">Language</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Strong English proficiency (written and spoken).
              </p>
            </div>

            <div className="card-standard">
              <CheckCircle className="h-8 w-8 text-[oklch(0.65_0.12_180)] mb-4" />
              <h3 className="text-h4 mb-2">Technical (for Technical Track)</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Basic programming knowledge (Python preferred).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
