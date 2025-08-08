import { ArrowRight, Shield, Globe, Zap, CreditCard, Building, Smartphone, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-xexon-gold/20 to-transparent"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                The Future of
                <span className="block text-xexon-gold">Digital Finance</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience seamless, secure, and intelligent financial solutions that empower businesses and individuals worldwide. Join the revolution in digital banking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-xexon-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-xexon-gold-light transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fc93c7c6ecbb1465c805658641c5ce582?format=webp&width=800"
                  alt="Professional businesswoman with XEXON card"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -top-12 -right-12 z-20">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fa75fded42ac64ccb853d1616d19a2028?format=webp&width=800"
                  alt="XEXON Debit Card"
                  className="w-64 h-40 object-cover rounded-xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-xexon-gold">XEXON</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another fintech company. We're your strategic partner in building a more efficient, secure, and prosperous financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Advanced encryption and multi-factor authentication protect your assets with institutional-grade security protocols."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Seamless international transactions with competitive rates and real-time processing across 180+ countries."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process transactions in seconds, not days. Our advanced infrastructure ensures minimal latency and maximum efficiency."
              },
              {
                icon: CreditCard,
                title: "Smart Cards",
                description: "Next-generation payment cards with contactless technology, real-time spending insights, and customizable controls."
              },
              {
                icon: Building,
                title: "Enterprise Solutions",
                description: "Comprehensive business banking solutions designed for modern enterprises and growing startups."
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                description: "Intuitive mobile apps that put complete financial control in your pocket, available 24/7 worldwide."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:bg-xexon-gold/5 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-xexon-gold/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-xexon-gold" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gradient-to-br from-xexon-dark to-xexon-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-xexon-gold">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how XEXON transforms financial operations across industries and use cases worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Use Cases List */}
            <div className="space-y-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Investment Management",
                  description: "Portfolio management with real-time analytics, automated rebalancing, and institutional-grade research tools."
                },
                {
                  icon: Users,
                  title: "Corporate Banking",
                  description: "Streamlined business accounts, payroll management, expense tracking, and multi-currency support for global operations."
                },
                {
                  icon: Award,
                  title: "Wealth Management",
                  description: "Personalized wealth strategies, tax optimization, and exclusive investment opportunities for high-net-worth individuals."
                },
                {
                  icon: CheckCircle,
                  title: "Payment Processing",
                  description: "Accept payments globally with competitive rates, instant settlements, and comprehensive fraud protection."
                }
              ].map((useCase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Cases Image */}
            <div className="relative">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F7c3a9bdd66c2410cb06014c974540136?format=webp&width=800"
                alt="Professional using XEXON services"
                className="w-full rounded-2xl shadow-2xl"
              />
              {/* Overlay with stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-xexon-gold">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-xexon-gold">$50B+</div>
                    <div className="text-sm text-gray-600">Processed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-xexon-gold">180+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See XEXON in <span className="text-xexon-gold">Action</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Watch how our platform transforms financial operations for businesses worldwide.
          </p>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://drive.google.com/file/d/1kWYOhy8gwD6A41Tf0aAsjYosQXRsvpd4/preview"
              className="w-full h-full"
              allow="autoplay"
              title="XEXON Platform Demo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-xexon-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F21755e85cb9f4d28b8c29d8b94b5a628?format=webp&width=800" 
                alt="XEXON" 
                className="h-8 w-auto mb-6"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the future of digital finance with innovative solutions that empower businesses and individuals to achieve their financial goals.
              </p>
              <div className="flex space-x-4">
                <button className="bg-xexon-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-xexon-gold-light transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-xexon-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>support@xexon.com</p>
                <p>+1 (555) 123-4567</p>
                <p>24/7 Global Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 XEXON. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
