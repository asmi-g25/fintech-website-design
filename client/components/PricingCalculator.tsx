import React, { useState } from 'react';
import { Calculator, DollarSign, CreditCard, TrendingUp } from 'lucide-react';

export function PricingCalculator() {
  const [amount, setAmount] = useState(10000);
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');

  const currencies = [
    { symbol: 'BTC', name: 'Bitcoin', rate: 43250 },
    { symbol: 'ETH', name: 'Ethereum', rate: 2650 },
    { symbol: 'USDT', name: 'Tether', rate: 1 },
    { symbol: 'XRP', name: 'Ripple', rate: 0.62 }
  ];

  const selectedRate = currencies.find(c => c.symbol === selectedCurrency)?.rate || 1;
  const cryptoAmount = amount / selectedRate;
  const fee = amount * 0.0025; // 0.25% fee
  const totalReceived = amount - fee;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-xexon-gold to-yellow-400 rounded-2xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Quick Calculator</h3>
          <p className="text-gray-400 text-sm">Estimate your conversion</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Amount (USD)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-xexon-gold transition-colors duration-200"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Currency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Convert from
          </label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-xexon-gold transition-colors duration-200"
          >
            {currencies.map(currency => (
              <option key={currency.symbol} value={currency.symbol} className="bg-gray-800">
                {currency.name} ({currency.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Results */}
        <div className="bg-white/5 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">You send:</span>
            <span className="text-white font-semibold">
              {cryptoAmount.toFixed(6)} {selectedCurrency}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Processing fee:</span>
            <span className="text-red-400 font-semibold">${fee.toFixed(2)}</span>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">You receive:</span>
              <span className="text-xexon-gold font-bold text-lg">${totalReceived.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-xexon-gold to-yellow-400 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-xexon-gold/25 transition-all duration-300 flex items-center justify-center gap-2">
          <CreditCard className="w-5 h-5" />
          Start Conversion
        </button>
      </div>
    </div>
  );
}
