import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Smartphone, CreditCard, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function PlatformDemo() {
  const [activeDemo, setActiveDemo] = useState('wallet');
  const [isPlaying, setIsPlaying] = useState(false);
  const [balance, setBalance] = useState(25000.00);
  const [cryptoBalance, setCryptoBalance] = useState(1.5847);

  const demos = [
    {
      id: 'wallet',
      title: 'Crypto Wallet',
      icon: Smartphone,
      description: 'Secure multi-currency wallet'
    },
    {
      id: 'card',
      title: 'Debit Card',
      icon: CreditCard,
      description: 'Instant crypto-to-fiat conversion'
    },
    {
      id: 'trading',
      title: 'Trading',
      icon: TrendingUp,
      description: 'Advanced trading tools'
    },
    {
      id: 'banking',
      title: 'Banking',
      icon: DollarSign,
      description: 'Offshore banking services'
    }
  ];

  const transactions = [
    { type: 'receive', amount: 0.025, crypto: 'BTC', timestamp: '2 min ago', status: 'confirmed' },
    { type: 'send', amount: 150.00, crypto: 'USD', timestamp: '1 hour ago', status: 'confirmed' },
    { type: 'trade', amount: 0.5, crypto: 'ETH', timestamp: '3 hours ago', status: 'pending' },
    { type: 'receive', amount: 500.00, crypto: 'USD', timestamp: '1 day ago', status: 'confirmed' }
  ];

  const simulateTransaction = () => {
    if (activeDemo === 'wallet') {
      const newAmount = Math.random() * 0.1;
      setCryptoBalance(prev => prev + newAmount);
      setBalance(prev => prev + (newAmount * 43250));
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Interactive Platform Demo</h3>
          <p className="text-gray-400">Experience XEXON's features firsthand</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-xexon-gold text-black rounded-xl font-semibold hover:bg-xexon-gold-light transition-colors duration-200"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Start'} Demo
          </button>
          <button
            onClick={() => {
              setBalance(25000);
              setCryptoBalance(1.5847);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Demo Navigation */}
        <div className="lg:col-span-3 space-y-3">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                activeDemo === demo.id
                  ? 'bg-xexon-gold text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <demo.icon className="w-5 h-5" />
                <div>
                  <div className="font-semibold">{demo.title}</div>
                  <div className={`text-xs ${activeDemo === demo.id ? 'text-black/70' : 'text-gray-400'}`}>
                    {demo.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Screen */}
        <div className="lg:col-span-9">
          <div className="bg-black rounded-2xl p-6 border border-gray-800 min-h-96">
            {/* Mock Phone Frame */}
            <div className="max-w-sm mx-auto bg-gray-900 rounded-3xl p-6 border-2 border-gray-700">
              {/* Status Bar */}
              <div className="flex justify-between items-center mb-6 text-white text-sm">
                <span>9:41</span>
                <span>XEXON</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-6 h-2 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* Wallet Demo */}
              {activeDemo === 'wallet' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Total Balance</div>
                    <div className="text-3xl font-bold text-white">
                      ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xexon-gold text-sm">
                      {cryptoBalance.toFixed(4)} BTC
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={simulateTransaction}
                      className="bg-xexon-gold text-black p-3 rounded-xl font-semibold text-sm"
                    >
                      Receive
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-xl font-semibold text-sm">
                      Send
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="text-white font-semibold text-sm">Recent Transactions</div>
                    {transactions.slice(0, 3).map((tx, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-800 p-3 rounded-xl">
                        <div className="flex items-center gap-3">
                          {tx.type === 'receive' ? (
                            <ArrowDownRight className="w-4 h-4 text-green-400" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-red-400" />
                          )}
                          <div>
                            <div className="text-white text-sm font-medium">
                              {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.crypto}
                            </div>
                            <div className="text-gray-400 text-xs">{tx.timestamp}</div>
                          </div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          tx.status === 'confirmed' 
                            ? 'bg-green-900 text-green-400' 
                            : 'bg-yellow-900 text-yellow-400'
                        }`}>
                          {tx.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Demo */}
              {activeDemo === 'card' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl">
                    <div className="text-white text-lg font-semibold mb-2">XEXON Card</div>
                    <div className="text-gray-400 text-sm mb-4">•••• •••• •••• 1234</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-gray-400 text-xs">Available</div>
                        <div className="text-white font-semibold">${balance.toLocaleString()}</div>
                      </div>
                      <div className="text-white font-bold">VISA</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-xexon-gold text-black p-3 rounded-xl font-semibold">
                      Top Up from Crypto
                    </button>
                    <button className="w-full bg-gray-800 text-white p-3 rounded-xl font-semibold">
                      View Transactions
                    </button>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-xl">
                    <div className="text-white text-sm font-semibold mb-2">Quick Convert</div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">0.1 BTC</span>
                      <span className="text-white text-sm">→</span>
                      <span className="text-xexon-gold text-sm">$4,325 USD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Trading Demo */}
              {activeDemo === 'trading' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-white text-lg font-semibold">BTC/USD</div>
                    <div className="text-2xl font-bold text-green-400">$43,250.00</div>
                    <div className="text-green-400 text-sm">+2.4% (+$1,012)</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-green-600 text-white p-2 rounded-lg text-sm font-semibold">
                      BUY
                    </button>
                    <button className="bg-red-600 text-white p-2 rounded-lg text-sm font-semibold">
                      SELL
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Portfolio</span>
                      <span className="text-white">$25,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">P&L Today</span>
                      <span className="text-green-400">+$542.30</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Open Positions</span>
                      <span className="text-white">3</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Banking Demo */}
              {activeDemo === 'banking' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Offshore Account</div>
                    <div className="text-2xl font-bold text-white">$125,750.00</div>
                    <div className="text-xexon-gold text-sm">Seychelles Bank</div>
                  </div>

                  <div className="space-y-2">
                    <button className="w-full bg-xexon-gold text-black p-3 rounded-xl font-semibold text-sm">
                      Wire Transfer
                    </button>
                    <button className="w-full bg-gray-800 text-white p-3 rounded-xl font-semibold text-sm">
                      International Payment
                    </button>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-xl space-y-2">
                    <div className="text-white text-sm font-semibold">Account Details</div>
                    <div className="text-xs text-gray-400">
                      SWIFT: XEXNSC33XXX<br/>
                      IBAN: SC64XEXN0000123456789USD
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
