import React from 'react';
import { ArrowRight, Shield, Globe, Zap, CreditCard, Building, Smartphone, TrendingUp, Users, Award, CheckCircle, Wallet, DollarSign, BarChart3, Lock, Star, Sparkles, Play, Calculator } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { ParticleField } from '../components/ParticleField';
import { MarketTicker } from '../components/MarketTicker';
import { PricingCalculator } from '../components/PricingCalculator';
import { Testimonials } from '../components/Testimonials';
import { SecurityBadges } from '../components/SecurityBadges';
import { LiveSupport } from '../components/LiveSupport';
import { Card3D } from '../components/Card3D';
import { PlatformDemo } from '../components/PlatformDemo';
import { TradingDashboard } from '../components/TradingDashboard';
import { LiveActivityFeed } from '../components/LiveActivityFeed';
import { ComparisonTool } from '../components/ComparisonTool';
import { CursorTrail } from '../components/CursorTrail';
import { ScrollProgress } from '../components/ScrollProgress';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { MagneticHover } from '../components/MagneticHover';
import { ParallaxScroll } from '../components/ParallaxScroll';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Index() {
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.3 });
  const [whyUsRef, whyUsInView] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <CursorTrail />
      <ScrollProgress />
      <Navigation />
      <ParticleField />
      <LiveSupport />
      
      {/* Market Ticker */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <MarketTicker />
      </div>
      
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-xexon-dark"></div>
          <div className="absolute inset-0 gradient-mesh"></div>
          
          {/* Enhanced Floating Elements with Parallax */}
          <ParallaxScroll speed={0.2} className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-xexon-gold/10 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-xexon-gold/20 rounded-full blur-lg animate-float"></div>
          </ParallaxScroll>
          
          <ParallaxScroll speed={0.4} className="absolute inset-0">
            <div className="absolute bottom-40 left-20 w-16 h-16 bg-xexon-gold/15 rounded-full blur-md animate-pulse-slow"></div>
            <div className="absolute top-60 left-1/2 w-20 h-20 bg-xexon-gold/8 rounded-full blur-lg animate-float"></div>
          </ParallaxScroll>
          
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#hero-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Enhanced Hero Content */}
            <div className={`lg:col-span-7 text-center lg:text-left space-y-8 transition-all duration-1000 ${heroInView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Premium Badge */}
              <MagneticHover>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-xexon-gold/20 hover:border-xexon-gold/40 transition-colors duration-300">
                  <Sparkles className="w-4 h-4 text-xexon-gold animate-pulse" />
                  <span className="text-sm text-gray-300 font-medium">Tier-1 Offshore Banking</span>
                </div>
              </MagneticHover>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-none">
                  <span className="block animate-fade-in">Cash Out</span>
                  <span className="block bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent animate-glow">
                    Crypto Assets
                  </span>
                  <span className="block text-white animate-fade-in">Easily</span>
                </h1>
                
                <div className="space-y-4 max-w-2xl">
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Use the <span className="text-xexon-gold font-semibold">Xexon crypto debit card</span> at any Visa, Mastercard, or UnionPay merchant or ATM worldwide.
                  </p>
                  <p className="text-base text-gray-400">
                    <span className="text-xexon-gold font-semibold">Plus</span> — Tier-1 offshore bank account, secure crypto wallet, diverse derivatives trading, crypto-backed loans.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticHover>
                  <button className="group relative bg-gradient-to-r from-xexon-gold to-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-xexon-gold/25 hover:scale-105 overflow-hidden">
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      Get Started Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </MagneticHover>
                <MagneticHover>
                  <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    Watch Demo
                  </button>
                </MagneticHover>
              </div>

              {/* Enhanced Trust Indicators with Animated Counters */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="text-center group">
                  <div className="text-xl lg:text-2xl font-bold text-xexon-gold group-hover:scale-110 transition-transform duration-300">
                  $<AnimatedCounter target={50} />B+
                </div>
                  <div className="text-xs text-gray-400">Assets Secured</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl lg:text-2xl font-bold text-xexon-gold group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter target={200} />+
                </div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl lg:text-2xl font-bold text-xexon-gold group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${heroInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Main Video Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-xexon-gold/20 to-yellow-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <iframe
                    src="https://drive.google.com/file/d/1mYTbt9pzyQqBsnrRscAYQ96dSY6hiwsH/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    title="XEXON Hero Demo"
                  />
                </div>
              </div>

              {/* Enhanced Floating Card */}
              <div className="absolute -top-12 -right-12 z-20 hidden lg:block animate-float">
                <MagneticHover strength={0.15}>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fa75fded42ac64ccb853d1616d19a2028?format=webp&width=800"
                      alt="XEXON Debit Card"
                      className="relative w-56 h-36 object-cover rounded-xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 border border-white/20 -mt-0.5"
                    />
                  </div>
                </MagneticHover>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Platform Demo Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <Smartphone className="w-4 h-4" />
                Interactive Experience
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Try <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">XEXON</span> Live
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our platform firsthand with this interactive demo.
            </p>
          </div>
          <PlatformDemo />
        </div>
      </section>

      {/* Why Xexon Section */}
      <section ref={whyUsRef} id="why-us" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${whyUsInView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
                <Star className="w-4 h-4" />
                Why Choose Us
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
              Why <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Xexon</span>?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Grow your wealth <span className="text-xexon-gold">privately</span>—and spend it in the real world.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Features Grid */}
            <div className="lg:col-span-7 grid gap-8">
              {[
                {
                  icon: Building,
                  title: "Tier-1 bank account—even for offshore entities",
                  description: "Open with simple KYC—no mountains of paperwork, even for BVI, Seychelles, or newly formed companies.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: CreditCard,
                  title: "Anonymous Visa debit card, crypto-funded in seconds",
                  description: "Convert crypto to USD in a few clicks and pay in 200+ countries. Your bank balance stays ready.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: TrendingUp,
                  title: "Private, versatile investing",
                  description: "From spot to derivatives, we offer a wide range of trades while keeping you discreet—VIPs get bespoke management.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: BarChart3,
                  title: "One dashboard, all moves",
                  description: "Wire funds, swap wallets, and load your card—everything online in a single interface.",
                  color: "from-orange-500 to-red-500"
                }
              ].map((feature, index) => (
                <MagneticHover key={index}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-white">
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-xexon-gold transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </div>

            {/* Video and Calculator */}
            <div className="lg:col-span-5 space-y-8">
              {/* Video Container */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-xexon-gold/20 to-yellow-400/20 rounded-3xl blur-lg"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <iframe
                    src="https://drive.google.com/file/d/1kWYOhy8gwD6A41Tf0aAsjYosQXRsvpd4/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    title="Why XEXON"
                  />
                </div>
                
                {/* Floating Badge */}
                <MagneticHover>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-xexon-gold to-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg animate-pulse-slow">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Award Winning
                    </div>
                  </div>
                </MagneticHover>
              </div>

              {/* Pricing Calculator */}
              <PricingCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3D Card Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <CreditCard className="w-4 h-4" />
                Interactive 3D Experience
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Experience <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interact with our premium XEXON debit card in stunning 3D.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card3D />
          </div>
        </div>
      </section>

      {/* Trading Dashboard Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <TrendingUp className="w-4 h-4" />
                Trading Platform
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Advanced <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Trading</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade trading tools with real-time market data and advanced analytics.
            </p>
          </div>
          <TradingDashboard />
        </div>
      </section>

      {/* Real-World Use Cases Section */}
      <section id="use-cases" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-xexon-dark via-black to-xexon-dark-lighter"></div>
        <div className="absolute inset-0 gradient-mesh"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <Globe className="w-4 h-4" />
                Global Solutions
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Real-World <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Use Cases</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Grow wealth offshore, then <span className="text-xexon-gold">wire, swipe, or withdraw</span> cash anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Use Cases */}
            <div className="space-y-6">
              {[
                {
                  icon: Building,
                  title: "Offshore Bank Account",
                  items: ["Open instantly", "Store assets privately", "Buy overseas property via wire transfer", "Purchase yachts, foreign equities, other high-value assets", "Pay international suppliers and B2B invoices"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Lock,
                  title: "Secure Crypto Wallet",
                  items: ["Safeguard your crypto", "Instantly send cross-border payroll and fees", "Swap to USD and top up your card or transfer funds"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  icon: CreditCard,
                  title: "Anonymous Visa Debit Card",
                  items: ["Pay at any Visa merchant worldwide", "Withdraw local currency at ATMs everywhere"],
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  icon: TrendingUp,
                  title: "Trading Platform",
                  items: ["Spot crypto trading", "Leveraged futures and options", "Arbitrage and position trades to grow your BTC"],
                  gradient: "from-orange-600 to-red-600"
                },
                {
                  icon: DollarSign,
                  title: "Credit Solutions",
                  items: ["Borrow USD against BTC collateral for working capital or investment"],
                  gradient: "from-yellow-600 to-amber-600"
                }
              ].map((useCase, index) => (
                <MagneticHover key={index}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-xexon-gold transition-colors duration-300">
                            {useCase.title}
                          </h3>
                          <ul className="space-y-1">
                            {useCase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-3 h-3 text-xexon-gold mt-1 flex-shrink-0" />
                                <span className="text-xs leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </div>

            {/* Video and Stats */}
            <div className="relative space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-xexon-gold/20 to-yellow-400/20 rounded-3xl blur-lg"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <iframe
                    src="https://drive.google.com/file/d/1y-HGYQSzvPev6RTqutTY1qjYPShVMyOO/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    title="XEXON Real-World Use Cases"
                  />
                </div>

                {/* Enhanced Floating Stats Cards */}
                <MagneticHover>
                  <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl hover:bg-white/15 transition-colors duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-xexon-gold to-yellow-400 bg-clip-text text-transparent">
                      $<AnimatedCounter target={50} />B+
                    </div>
                      <div className="text-xs text-gray-300">Assets Processed</div>
                    </div>
                  </div>
                </MagneticHover>

                <MagneticHover>
                  <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl hover:bg-white/15 transition-colors duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-xexon-gold to-yellow-400 bg-clip-text text-transparent">
                      <AnimatedCounter target={200} />+
                    </div>
                      <div className="text-xs text-gray-300">Countries</div>
                    </div>
                  </div>
                </MagneticHover>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Feed Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <Users className="w-4 h-4" />
                Global Community
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Join <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Thousands</span> Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real-time activity from our global community of users.
            </p>
          </div>
          <LiveActivityFeed />
        </div>
      </section>

      {/* Comparison Tool Section */}
      <ComparisonTool />

      {/* Enhanced Testimonials */}
      <Testimonials />

      {/* Security Badges Section */}
      <SecurityBadges />

      {/* Footer */}
      <footer id="contact" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-xexon-dark via-black to-xexon-dark-lighter"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F21755e85cb9f4d28b8c29d8b94b5a628?format=webp&width=800" 
                alt="XEXON" 
                className="h-10 w-auto"
              />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading the future of digital finance with innovative solutions for global wealth management and offshore banking.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="font-semibold">Rademan Inc.</div>
                <div>2 Puddle Dock, London EC4V 3DB, United Kingdom</div>
              </div>
              <MagneticHover>
                <button className="bg-gradient-to-r from-xexon-gold to-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-xexon-gold/25 transition-all duration-300 hover:scale-105">
                  Sign In / Sign Up
                </button>
              </MagneticHover>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
              <ul className="space-y-3">
                {['Why Xexon?', 'Real-World Use Cases', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <MagneticHover>
                      <a href="#" className="text-gray-300 hover:text-xexon-gold transition-colors duration-200 flex items-center gap-2 group">
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link}
                      </a>
                    </MagneticHover>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:support@xexon.com" className="text-gray-300 hover:text-xexon-gold transition-colors duration-200 block">
                  support@xexon.com
                </a>
                <div className="text-gray-400">24/7 Global Support</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live chat available
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 XEXON. All rights reserved. | Built for the future of finance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
