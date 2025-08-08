import React, { useState, useEffect } from 'react';
import { Activity, MapPin, Users, TrendingUp, CreditCard, Globe2 } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'signup' | 'transaction' | 'trading' | 'card';
  location: string;
  amount?: number;
  timestamp: Date;
  user: string;
}

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [totalUsers, setTotalUsers] = useState(24567);
  const [dailyVolume, setDailyVolume] = useState(2400000);

  const locations = [
    'Singapore', 'London', 'New York', 'Tokyo', 'Hong Kong', 'Dubai', 
    'Switzerland', 'Cayman Islands', 'British Virgin Islands', 'Monaco',
    'Luxembourg', 'Malta', 'Cyprus', 'Seychelles', 'Panama', 'Bermuda'
  ];

  const activityTypes = [
    { type: 'signup' as const, message: 'opened an offshore account', icon: Users },
    { type: 'transaction' as const, message: 'completed a wire transfer', icon: TrendingUp },
    { type: 'trading' as const, message: 'executed a crypto trade', icon: Activity },
    { type: 'card' as const, message: 'used XEXON card', icon: CreditCard }
  ];

  const generateActivity = (): ActivityItem => {
    const type = activityTypes[Math.floor(Math.random() * activityTypes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const amount = type.type === 'transaction' ? Math.floor(Math.random() * 500000) + 10000 : 
                   type.type === 'trading' ? Math.floor(Math.random() * 100000) + 5000 :
                   type.type === 'card' ? Math.floor(Math.random() * 5000) + 100 : undefined;
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      type: type.type,
      location,
      amount,
      timestamp: new Date(),
      user: `User${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`
    };
  };

  useEffect(() => {
    // Initial activities
    const initialActivities = Array.from({ length: 5 }, generateActivity);
    setActivities(initialActivities);

    // Add new activity every 3-5 seconds
    const interval = setInterval(() => {
      const newActivity = generateActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]); // Keep only 10 items
      
      // Update counters
      if (newActivity.type === 'signup') {
        setTotalUsers(prev => prev + 1);
      }
      if (newActivity.amount) {
        setDailyVolume(prev => prev + newActivity.amount!);
      }
    }, Math.random() * 2000 + 3000); // 3-5 seconds

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    const activityType = activityTypes.find(a => a.type === type);
    return activityType?.icon || Activity;
  };

  const getActivityMessage = (activity: ActivityItem) => {
    const baseMessage = activityTypes.find(a => a.type === activity.type)?.message || 'performed an action';
    
    switch (activity.type) {
      case 'transaction':
        return `${baseMessage} of $${activity.amount?.toLocaleString()}`;
      case 'trading':
        return `${baseMessage} worth $${activity.amount?.toLocaleString()}`;
      case 'card':
        return `${baseMessage} for $${activity.amount?.toLocaleString()}`;
      default:
        return baseMessage;
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - timestamp.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
            <Globe2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Live Global Activity</h3>
            <p className="text-gray-400 text-sm">Real-time user activity worldwide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            {activities.map((activity) => {
              const IconComponent = getActivityIcon(activity.type);
              return (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 animate-slide-up">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'signup' ? 'bg-green-500/20 text-green-400' :
                    activity.type === 'transaction' ? 'bg-blue-500/20 text-blue-400' :
                    activity.type === 'trading' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm">
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-gray-300"> {getActivityMessage(activity)}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-400 text-xs">{activity.location}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-xs">{getTimeAgo(activity.timestamp)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Global Stats */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-xexon-gold" />
              Global Stats
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-white">{totalUsers.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">${(dailyVolume / 1000000).toFixed(1)}M</div>
                <div className="text-gray-400 text-sm">Daily Volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Top Locations */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-xexon-gold" />
              Top Locations
            </h4>
            <div className="space-y-3">
              {['Singapore', 'London', 'Hong Kong', 'Dubai', 'New York'].map((location, index) => (
                <div key={location} className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{location}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-xexon-gold rounded-full transition-all duration-300"
                        style={{ width: `${Math.max(20, 100 - (index * 15))}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-xs">{Math.max(5, 25 - (index * 4))}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Types */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4">Activity Breakdown</h4>
            <div className="space-y-3">
              {[
                { type: 'Card Usage', percent: 35, color: 'bg-orange-500' },
                { type: 'Trading', percent: 28, color: 'bg-purple-500' },
                { type: 'Transfers', percent: 25, color: 'bg-blue-500' },
                { type: 'New Accounts', percent: 12, color: 'bg-green-500' }
              ].map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-gray-300 text-sm">{item.type}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.8);
        }
      `}</style>
    </div>
  );
}
