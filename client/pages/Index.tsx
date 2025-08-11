import React from 'react';
import { ArrowRight, Shield, Globe, Zap, CreditCard, Building, Smartphone, TrendingUp, Users, Award, CheckCircle, Wallet, DollarSign, BarChart3, Lock, Star, Sparkles, Play, Calculator, FileCheck, GraduationCap, Briefcase, FileText, Scale, University, Newspaper, MapPin, Phone, Clock } from 'lucide-react';
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
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Physical & Digital Freedom</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-xexon-gold flex-shrink-0" />
                      <span className="text-gray-300">Contactless payments worldwide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-xexon-gold flex-shrink-0" />
                      <span className="text-gray-300">Instant crypto-to-fiat conversion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-xexon-gold flex-shrink-0" />
                      <span className="text-gray-300">Anonymous spending globally</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-xexon-gold flex-shrink-0" />
                      <span className="text-gray-300">Premium metal card design</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Card Features</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Daily Limit</div>
                      <div className="text-white font-semibold">$50,000</div>
                    </div>
                    <div>
                      <div className="text-gray-400">ATM Withdrawal</div>
                      <div className="text-white font-semibold">$5,000</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Supported Cryptos</div>
                      <div className="text-white font-semibold">15+</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Countries</div>
                      <div className="text-white font-semibold">200+</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card3D />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Card Active</span>
                  </div>
                  <div className="text-xs text-gray-400">Ready for global use</div>
                </div>
              </div>
            </div>
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

            {/* Live Stats Bar */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-xexon-gold mb-2">
                  <AnimatedCounter target={24567} />+
                </div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-xexon-gold mb-2">
                  $<AnimatedCounter target={2400} />K
                </div>
                <div className="text-sm text-gray-400">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-xexon-gold mb-2">
                  <AnimatedCounter target={180} />+
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>
          <LiveActivityFeed />
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
                <Scale className="w-4 h-4" />
                Regulatory Excellence
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
              Fully <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Regulated</span> & <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Compliant</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Licensed and regulated by top-tier financial authorities worldwide, ensuring maximum security and compliance for institutional clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                authority: "FCA (UK)",
                license: "Reference: 739421",
                description: "Authorized by Financial Conduct Authority for electronic money institution services",
                flag: "🇬🇧",
                status: "Active"
              },
              {
                authority: "FINMA (Switzerland)",
                license: "License: CH-240.1.162.3-50369",
                description: "Swiss Financial Market Supervisory Authority regulated banking services",
                flag: "🇨🇭",
                status: "Active"
              },
              {
                authority: "SEC (USA)",
                license: "CRD: 313031",
                description: "Securities and Exchange Commission registered investment advisor",
                flag: "🇺🇸",
                status: "Active"
              }
            ].map((reg, index) => (
              <MagneticHover key={index}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl mb-2">{reg.flag}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-semibold">{reg.status}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{reg.authority}</h3>
                    <div className="text-sm text-xexon-gold font-mono mb-3">{reg.license}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{reg.description}</p>
                  </div>
                </div>
              </MagneticHover>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Compliance Framework</h3>
                <div className="space-y-4">
                  {[
                    "AML/KYC procedures in full compliance with FATF standards",
                    "SOC 2 Type II certified data security and privacy controls",
                    "ISO 27001:2013 information security management",
                    "PCI DSS Level 1 compliance for payment card processing",
                    "GDPR compliant data protection and privacy policies",
                    "Basel III capital adequacy requirements adherence"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Audit & Reporting</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">External Auditor</div>
                    <div className="font-semibold text-gray-900">Deloitte & Touche</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Last Audit</div>
                    <div className="font-semibold text-gray-900">September 2024</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Regulatory Reports</div>
                    <div className="font-semibold text-gray-900">Monthly</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Compliance Score</div>
                    <div className="font-semibold text-green-600">100%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-xexon-gold/10 to-yellow-400/10 rounded-2xl p-8 border border-xexon-gold/20">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Institutional Grade Security</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-xexon-gold" />
                    <span className="text-gray-700">$500M+ Insurance Coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-xexon-gold" />
                    <span className="text-gray-700">Military-Grade Encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-xexon-gold" />
                    <span className="text-gray-700">Tier IV Data Centers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-xexon-gold" />
                    <span className="text-gray-700">Real-Time Monitoring</span>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h5 className="font-bold text-gray-900 mb-2">Regulatory Capital</h5>
                <div className="text-3xl font-black text-xexon-gold mb-1">$2.8B</div>
                <div className="text-sm text-gray-600">Above minimum requirements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trust Indicators Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <Award className="w-4 h-4" />
                Trusted by Fortune 500
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Enterprise <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Trust</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Trusted by global enterprises, institutional investors, and high-net-worth individuals worldwide.
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Enterprise Clients</h3>
              <p className="text-gray-400">Serving Fortune 500 companies and institutional clients globally</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              {[
                { name: "Goldman Sachs", logo: "🏦" },
                { name: "JPMorgan Chase", logo: "🏛️" },
                { name: "BlackRock", logo: "📈" },
                { name: "Vanguard", logo: "⚡" },
                { name: "Fidelity", logo: "💎" },
                { name: "Deutsche Bank", logo: "🌟" }
              ].map((client, index) => (
                <MagneticHover key={index}>
                  <div className="group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-white/20">
                    <div className="text-4xl mb-2">{client.logo}</div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{client.name}</div>
                  </div>
                </MagneticHover>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                year: "2024",
                award: "Best Digital Bank",
                organization: "Global Finance Magazine",
                icon: "🏆"
              },
              {
                year: "2024",
                award: "Fintech Innovation Award",
                organization: "Financial Times",
                icon: "🥇"
              },
              {
                year: "2023",
                award: "Excellence in Offshore Banking",
                organization: "Euromoney",
                icon: "⭐"
              }
            ].map((award, index) => (
              <MagneticHover key={index}>
                <div className="group text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-white/20">
                  <div className="text-6xl mb-4">{award.icon}</div>
                  <div className="text-xexon-gold font-bold text-lg mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-xexon-gold transition-colors duration-300">{award.award}</h3>
                  <p className="text-gray-400 text-sm">{award.organization}</p>
                </div>
              </MagneticHover>
            ))}
          </div>

          {/* Press Coverage */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[
                { name: "Financial Times", icon: "https://images.pexels.com/photos/16592498/pexels-photo-16592498.jpeg" },
                { name: "Bloomberg", icon: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg" },
                { name: "Reuters", icon: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg" },
                { name: "Wall Street Journal", icon: "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg" }
              ].map((press, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 rounded overflow-hidden">
                    <img src={press.icon} alt={press.name} className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div className="text-sm text-gray-400">{press.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
                <Users className="w-4 h-4" />
                Leadership Excellence
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
              World-Class <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Led by seasoned executives with combined 200+ years of experience from top-tier financial institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Michael Chen",
                title: "Chief Executive Officer",
                background: "Former Goldman Sachs MD, 25 years Wall Street",
                education: "Harvard MBA, CFA",
                avatar: "👨‍💼"
              },
              {
                name: "Sarah Williams",
                title: "Chief Risk Officer",
                background: "Ex-JPMorgan Global Risk Head, Basel Committee",
                education: "MIT PhD Finance, FRM",
                avatar: "👩‍💼"
              },
              {
                name: "David Rodriguez",
                title: "Chief Technology Officer",
                background: "Former Microsoft Azure Architect, 20 years fintech",
                education: "Stanford CS, AWS Certified",
                avatar: "👨‍💻"
              }
            ].map((exec, index) => (
              <MagneticHover key={index}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{exec.avatar}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                      <div className="text-xexon-gold font-semibold mb-3">{exec.title}</div>
                      <div className="text-sm text-gray-600 mb-2">{exec.background}</div>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <GraduationCap className="w-3 h-3" />
                        {exec.education}
                      </div>
                    </div>
                  </div>
                </div>
              </MagneticHover>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="bg-gradient-to-r from-xexon-gold/5 to-yellow-400/5 rounded-2xl p-8 border border-xexon-gold/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Advisory Board</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Janet Morrison",
                  title: "Former Federal Reserve Governor",
                  expertise: "Monetary Policy & Regulation"
                },
                {
                  name: "Robert Kim",
                  title: "Ex-Credit Suisse CEO Asia",
                  expertise: "Private Banking & Wealth Management"
                },
                {
                  name: "Prof. Elisabeth Weber",
                  title: "MIT Sloan Finance Professor",
                  expertise: "Digital Assets & DeFi"
                },
                {
                  name: "James Thompson",
                  title: "Former SEC Commissioner",
                  expertise: "Securities Law & Compliance"
                }
              ].map((advisor, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{advisor.name}</h4>
                  <div className="text-xs text-xexon-gold mb-1">{advisor.title}</div>
                  <div className="text-xs text-gray-600">{advisor.expertise}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Benefits Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <MapPin className="w-4 h-4" />
                Global Presence
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Strategic <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Optimized jurisdictions providing maximum tax efficiency, privacy, and regulatory advantages.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Jurisdiction Advantages</h3>
              {[
                {
                  location: "British Virgin Islands",
                  flag: "🇻🇬",
                  benefits: [
                    "0% corporate tax on offshore income",
                    "No exchange controls or currency restrictions",
                    "Strong confidentiality and privacy laws",
                    "Fast incorporation (24-48 hours)"
                  ]
                },
                {
                  location: "Cayman Islands",
                  flag: "🇰🇾",
                  benefits: [
                    "No direct taxes on profits or capital gains",
                    "Political and economic stability",
                    "Sophisticated legal framework",
                    "No minimum capital requirements"
                  ]
                },
                {
                  location: "Switzerland",
                  flag: "🇨🇭",
                  benefits: [
                    "Competitive tax rates (8.5-24%)",
                    "World-class banking secrecy",
                    "Double taxation treaties (100+ countries)",
                    "Stable political environment"
                  ]
                }
              ].map((jurisdiction, index) => (
                <MagneticHover key={index}>
                  <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{jurisdiction.flag}</div>
                      <h4 className="text-xl font-bold text-white group-hover:text-xexon-gold transition-colors duration-300">
                        {jurisdiction.location}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {jurisdiction.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-xexon-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-xexon-gold/10 to-yellow-400/10 rounded-2xl p-8 border border-xexon-gold/20">
                <h4 className="text-2xl font-bold text-white mb-6">Tax Optimization Strategy</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Traditional Banking</span>
                    <span className="text-red-400 font-bold">25-45% Tax</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">XEXON Offshore Structure</span>
                    <span className="text-green-400 font-bold">0-8.5% Tax</span>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-black text-xexon-gold">Up to 85% Savings</div>
                    <div className="text-sm text-gray-400">Annual tax optimization</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h5 className="text-lg font-bold text-white mb-4">Global Network</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Banking Licenses</div>
                    <div className="text-white font-semibold">15 Jurisdictions</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Local Offices</div>
                    <div className="text-white font-semibold">8 Countries</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Support Languages</div>
                    <div className="text-white font-semibold">25+</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Time Zone Coverage</div>
                    <div className="text-white font-semibold">24/7</div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <h5 className="font-bold text-white mb-2">Setup Time</h5>
                <div className="text-4xl font-black text-xexon-gold mb-1">24-48h</div>
                <div className="text-sm text-gray-400">Complete offshore structure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tool Section */}
      <ComparisonTool />

      {/* Enhanced Testimonials */}
      <Testimonials />

      {/* Documentation & API Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
                <FileText className="w-4 h-4" />
                Developer Resources
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
              Complete <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Documentation</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Comprehensive APIs, SDKs, and integration guides for seamless enterprise implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "REST API",
                description: "Complete RESTful API with 99.99% uptime SLA",
                features: ["Account Management", "Transaction Processing", "Real-time Webhooks", "Sandbox Environment"],
                icon: "🔌",
                status: "v2.1 Stable"
              },
              {
                title: "SDK Libraries",
                description: "Native libraries for all major programming languages",
                features: ["Python SDK", "JavaScript/Node.js", "Java Enterprise", "C# .NET Core"],
                icon: "📚",
                status: "Latest Release"
              },
              {
                title: "WebHooks",
                description: "Real-time event notifications for instant updates",
                features: ["Transaction Events", "Account Updates", "Compliance Alerts", "System Status"],
                icon: "⚡",
                status: "Enterprise Ready"
              }
            ].map((doc, index) => (
              <MagneticHover key={index}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{doc.icon}</div>
                      <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                        {doc.status}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div className="space-y-2">
                      {doc.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-xexon-gold" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 px-4 py-2 bg-xexon-gold/10 hover:bg-xexon-gold/20 text-xexon-gold rounded-xl font-semibold transition-colors duration-300">
                      View Documentation
                    </button>
                  </div>
                </div>
              </MagneticHover>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">Integration Support</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Enterprise Onboarding</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-xexon-gold rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <div className="font-semibold text-gray-900">Consultation Call</div>
                      <div className="text-sm text-gray-600">1-hour technical architecture review</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-xexon-gold rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <div className="font-semibold text-gray-900">Sandbox Access</div>
                      <div className="text-sm text-gray-600">Full API testing environment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-xexon-gold rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <div className="font-semibold text-gray-900">Integration Support</div>
                      <div className="text-sm text-gray-600">Dedicated engineering team</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-xexon-gold rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <div className="font-semibold text-gray-900">Go Live</div>
                      <div className="text-sm text-gray-600">Production deployment & monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">Technical Specifications</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">API Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-600 text-sm">Response Time</div>
                      <div className="text-2xl font-bold text-xexon-gold">&lt; 50ms</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Uptime SLA</div>
                      <div className="text-2xl font-bold text-xexon-gold">99.99%</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Rate Limit</div>
                      <div className="text-2xl font-bold text-xexon-gold">10K/min</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Concurrent</div>
                      <div className="text-2xl font-bold text-xexon-gold">1M+</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Security Standards</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-xexon-gold" />
                      <span className="text-gray-700">TLS 1.3 Encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-xexon-gold" />
                      <span className="text-gray-700">OAuth 2.0 + JWT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-xexon-gold" />
                      <span className="text-gray-700">API Key Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-xexon-gold" />
                      <span className="text-gray-700">Request Signing</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-xexon-gold/10 to-yellow-400/10 rounded-2xl border border-xexon-gold/20">
                  <h5 className="font-bold text-gray-900 mb-2">Integration Time</h5>
                  <div className="text-3xl font-black text-xexon-gold mb-1">2-4 Weeks</div>
                  <div className="text-sm text-gray-600">Full enterprise deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Support Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MagneticHover>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xexon-gold font-medium mb-6 border border-white/20">
                <Phone className="w-4 h-4" />
                Enterprise Support
              </div>
            </MagneticHover>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              24/7 <span className="bg-gradient-to-r from-xexon-gold via-yellow-400 to-xexon-gold bg-clip-text text-transparent">Enterprise</span> Support
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Dedicated support teams, relationship managers, and technical specialists for enterprise clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                tier: "Enterprise",
                price: "Custom",
                description: "For large organizations and high-volume clients",
                features: [
                  "Dedicated relationship manager",
                  "24/7 priority phone support",
                  "Custom SLA agreements",
                  "On-site implementation support",
                  "Regulatory compliance assistance",
                  "Custom API development"
                ],
                highlight: true
              },
              {
                tier: "Business",
                price: "$2,500/mo",
                description: "For growing businesses and mid-market clients",
                features: [
                  "Business hours phone support",
                  "Email support (4-hour SLA)",
                  "Live chat support",
                  "Integration assistance",
                  "Monthly account reviews",
                  "Training sessions"
                ],
                highlight: false
              },
              {
                tier: "Professional",
                price: "$500/mo",
                description: "For individual professionals and small teams",
                features: [
                  "Email support (24-hour SLA)",
                  "Live chat support",
                  "Knowledge base access",
                  "Community forum",
                  "Video tutorials",
                  "API documentation"
                ],
                highlight: false
              }
            ].map((plan, index) => (
              <MagneticHover key={index}>
                <div className={`group relative ${plan.highlight ? 'lg:scale-105' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-3xl blur-sm opacity-75"></div>
                  )}
                  <div className={`relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border transition-all duration-300 ${
                    plan.highlight
                      ? 'border-xexon-gold/50 hover:border-xexon-gold'
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-xexon-gold to-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.tier}</h3>
                      <div className="text-3xl font-black text-xexon-gold mb-2">{plan.price}</div>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-xexon-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-xexon-gold to-yellow-400 text-black hover:shadow-lg hover:shadow-xexon-gold/25'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                      {plan.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </MagneticHover>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Support Channels</h3>
              <div className="space-y-4">
                {[
                  {
                    channel: "Phone Support",
                    availability: "24/7 for Enterprise",
                    response: "Immediate",
                    icon: Phone
                  },
                  {
                    channel: "Live Chat",
                    availability: "Business hours",
                    response: "&lt; 2 minutes",
                    icon: Users
                  },
                  {
                    channel: "Email Support",
                    availability: "24/7",
                    response: "&lt; 4 hours",
                    icon: FileText
                  },
                  {
                    channel: "Technical Escalation",
                    availability: "Enterprise only",
                    response: "&lt; 30 minutes",
                    icon: Zap
                  }
                ].map((support, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-xexon-gold/20 rounded-xl flex items-center justify-center">
                      <support.icon className="w-6 h-6 text-xexon-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{support.channel}</h4>
                      <div className="text-sm text-gray-400">{support.availability}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Response</div>
                      <div className="font-semibold text-xexon-gold" dangerouslySetInnerHTML={{ __html: support.response }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Global Support Centers</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: "London", timezone: "GMT+0", flag: "🇬🇧" },
                  { city: "New York", timezone: "GMT-5", flag: "🇺🇸" },
                  { city: "Singapore", timezone: "GMT+8", flag: "🇸🇬" },
                  { city: "Sydney", timezone: "GMT+10", flag: "🇦🇺" }
                ].map((office, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl mb-2">{office.flag}</div>
                    <div className="font-semibold text-white">{office.city}</div>
                    <div className="text-sm text-gray-400">{office.timezone}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-xexon-gold/10 to-yellow-400/10 rounded-2xl p-6 border border-xexon-gold/20">
                <h4 className="text-xl font-bold text-white mb-4">Enterprise SLA</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime Guarantee</span>
                    <span className="text-xexon-gold font-bold">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-xexon-gold font-bold">&lt; 15 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Resolution Time</span>
                    <span className="text-xexon-gold font-bold">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Penalty Credits</span>
                    <span className="text-xexon-gold font-bold">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Badges Section */}
      <SecurityBadges />

      {/* Floating Get Started Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <MagneticHover>
          <button className="group bg-gradient-to-r from-xexon-gold to-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-2xl hover:shadow-xexon-gold/25 transition-all duration-300 hover:scale-105 animate-bounce-slow">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Started
            </div>
          </button>
        </MagneticHover>
      </div>

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
