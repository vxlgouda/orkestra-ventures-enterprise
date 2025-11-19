import { CheckCircle, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[oklch(0.98_0.005_240)] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Transform Your Career in{" "}
              <span className="text-gradient">16 Weeks</span>
            </h1>
            <p className="text-body-large text-[oklch(0.4_0.02_240)] max-w-3xl mx-auto">
              Choose between our Technical or Business AI tracks. Both designed
              to launch your global AI career with intensive training, expert
              mentorship, and direct career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card-data">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[oklch(0.55_0.18_260)]" />
              <div className="text-4xl font-bold text-[oklch(0.55_0.18_260)] mb-2 font-data">
                16
              </div>
              <div className="text-body-small text-[oklch(0.4_0.02_240)]">
                Weeks Intensive
              </div>
            </div>

            <div className="card-data">
              <Users className="h-12 w-12 mx-auto mb-4 text-[oklch(0.7_0.15_70)]" />
              <div className="text-4xl font-bold text-[oklch(0.7_0.15_70)] mb-2 font-data">
                1:5
              </div>
              <div className="text-body-small text-[oklch(0.4_0.02_240)]">
                Mentorship Ratio
              </div>
            </div>

            <div className="card-data">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-[oklch(0.65_0.12_180)]" />
              <div className="text-4xl font-bold text-[oklch(0.65_0.12_180)] mb-2 font-data">
                100%
              </div>
              <div className="text-body-small text-[oklch(0.4_0.02_240)]">
                Hands-On Projects
              </div>
            </div>

            <div className="card-data">
              <Award className="h-12 w-12 mx-auto mb-4 text-[oklch(0.55_0.18_260)]" />
              <div className="text-4xl font-bold text-[oklch(0.55_0.18_260)] mb-2 font-data">
                100
              </div>
              <div className="text-body-small text-[oklch(0.4_0.02_240)]">
                Professionals Per Cohort
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical AI Track */}
      <section id="technical" className="section-padding section-bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-accent mb-4 inline-block">
                Technical Track
              </span>
              <h2 className="text-h1 mb-6">AI Technical Track</h2>
              <p className="text-body-large text-[oklch(0.4_0.02_240)]">
                Master AI/ML development from fundamentals to production-ready
                systems. Build the technical skills to lead AI innovation.
              </p>
            </div>

            <div className="space-y-8">
              {/* Module 1 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      AI Fundamentals & Python Programming
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 1-4
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Python programming for AI/ML development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Mathematics for AI: Linear Algebra, Calculus, Statistics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Data manipulation with NumPy, Pandas, and Matplotlib
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Introduction to AI/ML concepts and algorithms
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 2 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.7_0.15_70_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.7_0.15_70)] font-data">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      Applied Machine Learning & Model Development
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 5-8
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Supervised learning: Classification and Regression
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Unsupervised learning: Clustering and Dimensionality
                      Reduction
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Model evaluation, validation, and hyperparameter tuning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Scikit-learn for rapid ML prototyping
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 3 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.65_0.12_180_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.65_0.12_180)] font-data">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      Deep Learning & Neural Networks
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 9-12
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Neural network architectures and training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Computer Vision with CNNs and Transfer Learning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Natural Language Processing with Transformers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      TensorFlow and PyTorch for deep learning
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      Production AI Systems & Capstone Project
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 13-16
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      MLOps: Model deployment, monitoring, and maintenance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Cloud platforms: AWS, Azure, GCP for AI
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      API development and containerization with Docker
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.12_180)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Capstone project: Build and deploy end-to-end AI solution
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/apply">
                <a className="btn-primary inline-flex items-center gap-2">
                  Apply for Technical Track <ArrowRight className="h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business AI Track */}
      <section id="business" className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-accent mb-4 inline-block">
                Business Track
              </span>
              <h2 className="text-h1 mb-6">AI Business Track</h2>
              <p className="text-body-large text-[oklch(0.4_0.02_240)]">
                Lead AI transformation in organizations. Build AI-powered
                businesses and drive strategic innovation without deep technical
                coding.
              </p>
            </div>

            <div className="space-y-8">
              {/* Module 1 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      AI Strategy & Business Transformation
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 1-4
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      AI fundamentals for business leaders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Identifying AI opportunities in your industry
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Building AI strategy and roadmaps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Change management for AI transformation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 2 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.7_0.15_70_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.7_0.15_70)] font-data">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      AI Product Management & Design
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 5-8
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      AI product lifecycle and development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      User research and AI UX design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Working with AI/ML teams effectively
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Metrics and KPIs for AI products
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 3 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.65_0.12_180_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.65_0.12_180)] font-data">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      AI Entrepreneurship & Venture Building
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 9-12
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Identifying AI startup opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Business model design for AI companies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Fundraising and investor relations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Building and leading AI teams
                    </span>
                  </li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.55_0.18_260_/_0.1)] flex items-center justify-center">
                    <span className="text-xl font-bold text-[oklch(0.55_0.18_260)] font-data">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">
                      Go-to-Market & Scaling Strategies
                    </h3>
                    <p className="text-body-small text-[oklch(0.4_0.02_240)]">
                      Weeks 13-16
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Market analysis and positioning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Sales and marketing for AI solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Scaling operations and partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[oklch(0.7_0.15_70)] flex-shrink-0 mt-0.5" />
                    <span className="text-body">
                      Capstone: Develop complete AI business plan
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/apply">
                <a className="btn-primary inline-flex items-center gap-2">
                  Apply for Business Track <ArrowRight className="h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 mb-6">Program Format</h2>
            <p className="text-body-large text-[oklch(0.4_0.02_240)]">
              Designed for working professionals with flexible learning options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-standard text-center">
              <h3 className="text-h3 mb-4">Schedule</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Weekday evenings (6-9 PM) and Saturday full-day sessions.
                Designed to fit around your work schedule.
              </p>
            </div>

            <div className="card-standard text-center">
              <h3 className="text-h3 mb-4">Location</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                Smart Village, Cairo with hybrid options. In-person sessions for
                hands-on work, online for lectures.
              </p>
            </div>

            <div className="card-standard text-center">
              <h3 className="text-h3 mb-4">Commitment</h3>
              <p className="text-body text-[oklch(0.4_0.02_240)]">
                15-20 hours per week including class time, projects, and
                mentorship sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-bg-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 mb-6 text-white">Ready to Start?</h2>
            <p className="text-body-large text-[oklch(0.8_0.005_240)] mb-10">
              Applications are now open for our next cohort. Choose your track
              and begin your journey to becoming a global AI leader.
            </p>
            <Link href="/apply">
              <a className="btn-primary inline-flex items-center gap-2">
                Apply Now <ArrowRight className="h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
