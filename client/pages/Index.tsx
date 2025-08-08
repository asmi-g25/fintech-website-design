import { ArrowRight, Shield, Globe, Zap, CreditCard, Building, Smartphone, TrendingUp, Users, Award, CheckCircle, Wallet, DollarSign, BarChart3, Lock } from 'lucide-react';
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
                Cash Out Crypto
                <span className="block text-xexon-gold">Assets Easily</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Use the Xexon crypto debit card at any Visa, Mastercard, or UnionPay merchant or ATM worldwide. Top up instantly using crypto assets like Bitcoin.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Plus — Tier-1 offshore bank account, secure crypto wallet, diverse derivatives trading, crypto-backed loans.
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

            {/* Hero Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://drive.google.com/file/d/1mYTbt9pzyQqBsnrRscAYQ96dSY6hiwsH/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="XEXON Hero Demo"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -top-8 -right-8 z-20 hidden lg:block">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fa75fded42ac64ccb853d1616d19a2028?format=webp&width=800"
                  alt="XEXON Debit Card"
                  className="w-48 h-30 object-cover rounded-xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Xexon Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-xexon-gold">Xexon</span>?
            </h2>
            <p className="text-2xl text-gray-800 font-medium max-w-4xl mx-auto mb-12">
              Grow your wealth privately—and spend it in the real world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Why Xexon Content */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tier-1 bank account—even for offshore entities</h3>
                    <p className="text-gray-600">Open with simple KYC—no mountains of paperwork, even for BVI, Seychelles, or newly formed companies.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Anonymous Visa debit card, crypto-funded in seconds</h3>
                    <p className="text-gray-600">Convert crypto to USD in a few clicks and pay in 200+ countries. Your bank balance stays ready.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Private, versatile investing</h3>
                    <p className="text-gray-600">From spot to derivatives, we offer a wide range of trades while keeping you discreet—VIPs get bespoke management.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">One dashboard, all moves</h3>
                    <p className="text-gray-600">Wire funds, swap wallets, and load your card—everything online in a single interface.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Xexon Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://drive.google.com/file/d/1kWYOhy8gwD6A41Tf0aAsjYosQXRsvpd4/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Why XEXON"
                />
              </div>
            </div>
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
            <p className="text-2xl text-gray-300 font-medium max-w-4xl mx-auto mb-12">
              Grow wealth offshore, then wire, swipe, or withdraw cash anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Use Cases Content */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Offshore Bank Account</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Open instantly</li>
                      <li>• Store assets privately</li>
                      <li>• Buy overseas property via wire transfer</li>
                      <li>• Purchase yachts, foreign equities, other high-value assets</li>
                      <li>• Pay international suppliers and B2B invoices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Secure Crypto Wallet</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Safeguard your crypto</li>
                      <li>• Instantly send cross-border payroll and fees</li>
                      <li>• Swap to USD and top up your card or transfer funds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Anonymous Visa Debit Card</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Pay at any Visa merchant worldwide</li>
                      <li>• Withdraw local currency at ATMs everywhere</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Trading Platform</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Spot crypto trading</li>
                      <li>• Leveraged futures and options</li>
                      <li>• Arbitrage and position trades to grow your BTC</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-xexon-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-xexon-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Credit</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Borrow USD against BTC collateral for working capital or investment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://drive.google.com/file/d/1y-HGYQSzvPev6RTqutTY1qjYPShVMyOO/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="XEXON Real-World Use Cases"
                />
              </div>
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
                    <div className="text-2xl font-bold text-xexon-gold">200+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
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
                Rademan Inc.<br/>
                2 Puddle Dock, London EC4V 3DB, United Kingdom
              </p>
              <div className="flex space-x-4">
                <button className="bg-xexon-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-xexon-gold-light transition-colors duration-200">
                  Sign In / Sign Up
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['Why Xexon?', 'Real-World Use Cases', 'Pricing', 'Contact'].map((link) => (
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
                <p>24/7 Global Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 XEXON. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
