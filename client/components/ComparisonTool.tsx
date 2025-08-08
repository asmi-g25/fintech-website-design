import React, { useState } from 'react';
import { Check, X, Star, Shield, Zap, Globe, CreditCard, TrendingUp } from 'lucide-react';

export function ComparisonTool() {
  const [selectedTab, setSelectedTab] = useState('features');

  const competitors = [
    {
      name: 'XEXON',
      logo: '/xexon-logo.png',
      isUs: true,
      price: '$25/month',
      rating: 4.9,
      highlight: 'Recommended'
    },
    {
      name: 'Traditional Bank',
      logo: '/bank-logo.png',
      isUs: false,
      price: '$45/month',
      rating: 3.2,
      highlight: null
    },
    {
      name: 'Crypto Exchange',
      logo: '/exchange-logo.png',
      isUs: false,
      price: '$35/month',
      rating: 3.8,
      highlight: null
    },
    {
      name: 'Digital Wallet',
      logo: '/wallet-logo.png',
      isUs: false,
      price: '$30/month',
      rating: 4.1,
      highlight: null
    }
  ];

  const features = [
    {
      category: 'Banking',
      items: [
        { name: 'Offshore Bank Account', xexon: true, traditional: false, crypto: false, wallet: false },
        { name: 'Multi-Currency Support', xexon: true, traditional: true, crypto: true, wallet: true },
        { name: 'SWIFT Wire Transfers', xexon: true, traditional: true, crypto: false, wallet: false },
        { name: 'Anonymous Accounts', xexon: true, traditional: false, crypto: false, wallet: false },
        { name: 'Instant Account Opening', xexon: true, traditional: false, crypto: true, wallet: true }
      ]
    },
    {
      category: 'Cards & Payments',
      items: [
        { name: 'Crypto-Backed Debit Card', xexon: true, traditional: false, crypto: true, wallet: true },
        { name: 'Anonymous Card Usage', xexon: true, traditional: false, crypto: false, wallet: false },
        { name: 'Worldwide ATM Access', xexon: true, traditional: true, crypto: true, wallet: true },
        { name: 'Instant Crypto-to-Fiat', xexon: true, traditional: false, crypto: true, wallet: false },
        { name: 'No Foreign Transaction Fees', xexon: true, traditional: false, crypto: true, wallet: true }
      ]
    },
    {
      category: 'Trading & Investment',
      items: [
        { name: 'Spot Trading', xexon: true, traditional: false, crypto: true, wallet: false },
        { name: 'Futures & Derivatives', xexon: true, traditional: false, crypto: true, wallet: false },
        { name: 'Yield Farming', xexon: true, traditional: false, crypto: true, wallet: false },
        { name: 'Portfolio Management', xexon: true, traditional: true, crypto: true, wallet: false },
        { name: 'Advanced Analytics', xexon: true, traditional: false, crypto: true, wallet: false }
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        { name: 'Bank-Grade Security', xexon: true, traditional: true, crypto: false, wallet: false },
        { name: 'Insurance Coverage', xexon: true, traditional: true, crypto: false, wallet: false },
        { name: 'Regulatory Compliance', xexon: true, traditional: true, crypto: false, wallet: false },
        { name: 'Privacy Protection', xexon: true, traditional: false, crypto: false, wallet: true },
        { name: '24/7 Support', xexon: true, traditional: false, crypto: true, wallet: false }
      ]
    }
  ];

  const costComparison = [
    {
      feature: 'Monthly Fee',
      xexon: '$25',
      traditional: '$45',
      crypto: '$35',
      wallet: '$30'
    },
    {
      feature: 'Card Fees',
      xexon: '$0',
      traditional: '$15',
      crypto: '$10',
      wallet: '$5'
    },
    {
      feature: 'Wire Transfer',
      xexon: '$15',
      traditional: '$50',
      crypto: 'N/A',
      wallet: 'N/A'
    },
    {
      feature: 'Trading Fees',
      xexon: '0.25%',
      traditional: 'N/A',
      crypto: '0.5%',
      wallet: 'N/A'
    },
    {
      feature: 'Foreign Exchange',
      xexon: '0.5%',
      traditional: '3-5%',
      crypto: '1-2%',
      wallet: '2-3%'
    }
  ];

  const tabs = [
    { id: 'features', label: 'Features', icon: Star },
    { id: 'costs', label: 'Cost Analysis', icon: TrendingUp },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const getValue = (item: any, provider: string) => {
    switch (provider) {
      case 'xexon': return item.xexon;
      case 'traditional': return item.traditional;
      case 'crypto': return item.crypto;
      case 'wallet': return item.wallet;
      default: return false;
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
            <Star className="w-4 h-4" />
            Compare & Choose
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Why <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">XEXON</span> Wins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we stack up against traditional banks and other fintech solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-white text-xexon-gold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900">Solution</h3>
            </div>
            {competitors.map((competitor, index) => (
              <div key={index} className={`p-6 text-center ${competitor.isUs ? 'bg-xexon-gold/10' : ''}`}>
                <div className="mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="font-bold text-sm">{competitor.name[0]}</span>
                  </div>
                  <div className="font-semibold text-gray-900">{competitor.name}</div>
                  {competitor.highlight && (
                    <div className="inline-block bg-xexon-gold text-black text-xs px-2 py-1 rounded-full font-semibold mt-1">
                      {competitor.highlight}
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{competitor.price}</div>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{competitor.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          {selectedTab === 'features' && (
            <div className="divide-y divide-gray-200">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="bg-gray-50 px-6 py-3">
                    <h4 className="font-semibold text-gray-900">{category.category}</h4>
                  </div>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="grid grid-cols-5 hover:bg-gray-50 transition-colors duration-200">
                      <div className="p-4 font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="p-4 text-center bg-xexon-gold/5">
                        {getValue(item, 'xexon') ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </div>
                      <div className="p-4 text-center">
                        {getValue(item, 'traditional') ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </div>
                      <div className="p-4 text-center">
                        {getValue(item, 'crypto') ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </div>
                      <div className="p-4 text-center">
                        {getValue(item, 'wallet') ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Cost Comparison */}
          {selectedTab === 'costs' && (
            <div className="divide-y divide-gray-200">
              {costComparison.map((item, index) => (
                <div key={index} className="grid grid-cols-5 hover:bg-gray-50 transition-colors duration-200">
                  <div className="p-4 font-medium text-gray-900">
                    {item.feature}
                  </div>
                  <div className="p-4 text-center bg-xexon-gold/5 font-semibold text-green-600">
                    {item.xexon}
                  </div>
                  <div className="p-4 text-center text-gray-900">
                    {item.traditional}
                  </div>
                  <div className="p-4 text-center text-gray-900">
                    {item.crypto}
                  </div>
                  <div className="p-4 text-center text-gray-900">
                    {item.wallet}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-5 bg-gray-50">
                <div className="p-4 font-bold text-gray-900">
                  Total Annual Cost
                </div>
                <div className="p-4 text-center bg-xexon-gold/10 font-bold text-xl text-green-600">
                  $480
                </div>
                <div className="p-4 text-center font-bold text-xl text-red-600">
                  $1,320
                </div>
                <div className="p-4 text-center font-bold text-xl text-gray-900">
                  $780
                </div>
                <div className="p-4 text-center font-bold text-xl text-gray-900">
                  $600
                </div>
              </div>
            </div>
          )}

          {/* Security Comparison */}
          {selectedTab === 'security' && (
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {competitors.map((competitor, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${competitor.isUs ? 'bg-xexon-gold/10 border-2 border-xexon-gold/30' : 'bg-gray-50'}`}>
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                        <span className="font-bold">{competitor.name[0]}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">{competitor.name}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Encryption</span>
                        <span className="text-sm font-semibold">
                          {competitor.isUs ? '256-bit AES' : index === 1 ? '128-bit' : '256-bit'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Insurance</span>
                        <span className="text-sm font-semibold">
                          {competitor.isUs ? '$100M' : index === 1 ? '$250K' : index === 2 ? '$50M' : '$10M'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compliance</span>
                        <span className="text-sm font-semibold">
                          {competitor.isUs ? 'Full' : index === 1 ? 'Partial' : 'Limited'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Monitoring</span>
                        <span className="text-sm font-semibold">
                          {competitor.isUs ? '24/7' : index === 1 ? 'Business Hours' : '24/7'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer */}
          <div className="bg-gradient-to-r from-xexon-gold to-yellow-400 p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to experience the XEXON advantage?
            </h3>
            <p className="text-black/80 mb-6">
              Join thousands of satisfied clients who've made the switch to smarter banking.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200">
              Start Your Account Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
