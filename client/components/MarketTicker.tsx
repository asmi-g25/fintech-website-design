import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export function MarketTicker() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'BTC', price: 43250.00, change: 1250.00, changePercent: 2.98 },
    { symbol: 'ETH', price: 2650.50, change: -45.20, changePercent: -1.68 },
    { symbol: 'XRP', price: 0.6234, change: 0.0123, changePercent: 2.01 },
    { symbol: 'ADA', price: 0.4567, change: 0.0089, changePercent: 1.99 },
    { symbol: 'SOL', price: 98.45, change: -2.34, changePercent: -2.32 },
    { symbol: 'MATIC', price: 0.8901, change: 0.0234, changePercent: 2.70 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(coin => ({
        ...coin,
        price: coin.price + (Math.random() - 0.5) * coin.price * 0.002,
        change: coin.change + (Math.random() - 0.5) * 10,
        changePercent: coin.changePercent + (Math.random() - 0.5) * 0.5
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/90 backdrop-blur-sm border-t border-b border-xexon-gold/20 py-3">
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marketData, ...marketData].map((coin, index) => (
            <div key={`${coin.symbol}-${index}`} className="flex items-center space-x-4 mx-8">
              <span className="text-xexon-gold font-bold text-lg">{coin.symbol}</span>
              <span className="text-white font-semibold">
                ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </span>
              <div className={`flex items-center space-x-1 ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {coin.change >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">
                  {coin.changePercent >= 0 ? '+' : ''}{coin.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
