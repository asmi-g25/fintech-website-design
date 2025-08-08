import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Activity, DollarSign, Bitcoin } from 'lucide-react';

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  sparkline: number[];
}

export function TradingDashboard() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250.00,
      change: 1250.00,
      changePercent: 2.98,
      volume: 28500000000,
      marketCap: 850000000000,
      sparkline: [42000, 42500, 43000, 42800, 43250]
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2650.50,
      change: -45.20,
      changePercent: -1.68,
      volume: 15200000000,
      marketCap: 320000000000,
      sparkline: [2700, 2680, 2660, 2645, 2650]
    },
    {
      symbol: 'XRP',
      name: 'Ripple',
      price: 0.6234,
      change: 0.0123,
      changePercent: 2.01,
      volume: 1800000000,
      marketCap: 34000000000,
      sparkline: [0.61, 0.615, 0.62, 0.625, 0.623]
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.4567,
      change: 0.0089,
      changePercent: 1.99,
      volume: 890000000,
      marketCap: 16000000000,
      sparkline: [0.448, 0.452, 0.455, 0.458, 0.457]
    }
  ]);

  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [timeframe, setTimeframe] = useState('1D');

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price + (Math.random() - 0.5) * crypto.price * 0.002,
        change: crypto.change + (Math.random() - 0.5) * 50,
        changePercent: crypto.changePercent + (Math.random() - 0.5) * 0.5,
        sparkline: [...crypto.sparkline.slice(1), crypto.price + (Math.random() - 0.5) * crypto.price * 0.001]
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const generateChartPath = (data: number[]) => {
    const width = 120;
    const height = 40;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    return data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const selectedData = cryptoData.find(c => c.symbol === selectedCrypto);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Live Trading Dashboard</h3>
            <p className="text-gray-400 text-sm">Real-time market data and analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Market Overview */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-4 mb-6">
            {['1H', '1D', '1W', '1M'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  timeframe === tf
                    ? 'bg-xexon-gold text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Selected Crypto Chart */}
          {selectedData && (
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Bitcoin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{selectedData.name}</div>
                    <div className="text-gray-400 text-sm">{selectedData.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    ${selectedData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: selectedData.symbol === 'BTC' ? 0 : 4 })}
                  </div>
                  <div className={`flex items-center gap-1 ${selectedData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedData.change >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {selectedData.changePercent >= 0 ? '+' : ''}{selectedData.changePercent.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-32 bg-gray-900/50 rounded-lg p-4 flex items-end">
                <svg width="100%" height="80" className="overflow-visible">
                  <path
                    d={generateChartPath(selectedData.sparkline)}
                    fill="none"
                    stroke={selectedData.change >= 0 ? '#10B981' : '#EF4444'}
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={selectedData.change >= 0 ? '#10B981' : '#EF4444'} stopOpacity="0.3"/>
                      <stop offset="100%" stopColor={selectedData.change >= 0 ? '#10B981' : '#EF4444'} stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path
                    d={`${generateChartPath(selectedData.sparkline)} L 120 80 L 0 80 Z`}
                    fill="url(#gradient)"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-gray-400 text-sm">24h Volume</div>
                  <div className="text-white font-semibold">
                    ${(selectedData.volume / 1000000000).toFixed(2)}B
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Market Cap</div>
                  <div className="text-white font-semibold">
                    ${(selectedData.marketCap / 1000000000).toFixed(0)}B
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Crypto List */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold mb-4">Top Cryptocurrencies</h4>
          {cryptoData.map((crypto) => (
            <button
              key={crypto.symbol}
              onClick={() => setSelectedCrypto(crypto.symbol)}
              className={`w-full p-4 rounded-xl transition-all duration-200 ${
                selectedCrypto === crypto.symbol
                  ? 'bg-xexon-gold/20 border border-xexon-gold/30'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {crypto.symbol[0]}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{crypto.symbol}</div>
                    <div className="text-gray-400 text-xs">{crypto.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-sm">
                    ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: crypto.symbol === 'BTC' ? 0 : 4 })}
                  </div>
                  <div className={`text-xs ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>

              {/* Mini sparkline */}
              <svg width="100%" height="20" className="opacity-60">
                <path
                  d={generateChartPath(crypto.sparkline)}
                  fill="none"
                  stroke={crypto.change >= 0 ? '#10B981' : '#EF4444'}
                  strokeWidth="1"
                />
              </svg>
            </button>
          ))}

          {/* Portfolio Summary */}
          <div className="bg-white/5 rounded-xl p-4 mt-6">
            <h5 className="text-white font-semibold mb-3">Portfolio Summary</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total Value</span>
                <span className="text-white font-semibold">$47,250.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">24h P&L</span>
                <span className="text-green-400 font-semibold">+$1,425.30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">ROI</span>
                <span className="text-green-400 font-semibold">+12.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
