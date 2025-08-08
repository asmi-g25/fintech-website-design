import { Shield, Lock, Award, CheckCircle2, Globe, UserCheck } from 'lucide-react';

export function SecurityBadges() {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001",
      subtitle: "Information Security",
      description: "Certified information security management system"
    },
    {
      icon: Lock,
      title: "SOC 2 Type II",
      subtitle: "Security & Availability",
      description: "Audited security controls and procedures"
    },
    {
      icon: Award,
      title: "PCI DSS",
      subtitle: "Payment Security",
      description: "Payment card industry data security standard"
    },
    {
      icon: CheckCircle2,
      title: "GDPR Compliant",
      subtitle: "Data Protection",
      description: "European data protection regulation compliant"
    },
    {
      icon: Globe,
      title: "AML/KYC",
      subtitle: "Regulatory Compliance",
      description: "Anti-money laundering & know your customer"
    },
    {
      icon: UserCheck,
      title: "FATCA/CRS",
      subtitle: "Tax Compliance",
      description: "International tax reporting standards"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bank-Grade <span className="text-xexon-gold">Security</span> & Compliance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your assets are protected by the highest industry standards and regulatory compliance frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-xexon-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-xexon-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-xexon-gold/20 transition-colors duration-300">
                  <cert.icon className="w-6 h-6 text-xexon-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-xexon-gold text-sm font-medium mb-2">{cert.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-xexon-gold mb-2">256-bit</div>
            <div className="text-gray-400 text-sm">AES Encryption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-xexon-gold mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-xexon-gold mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-xexon-gold mb-2">Multi-Sig</div>
            <div className="text-gray-400 text-sm">Wallet Security</div>
          </div>
        </div>
      </div>
    </section>
  );
}
