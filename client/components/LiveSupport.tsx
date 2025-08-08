import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Clock } from 'lucide-react';

export function LiveSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Average response: 30 seconds",
      action: "Start Chat",
      available: true
    },
    {
      icon: Phone,
      title: "Phone Support",
      subtitle: "+1 (555) 123-4567",
      action: "Call Now",
      available: true
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "support@xexon.com",
      action: "Send Email",
      available: true
    }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-xexon-gold to-yellow-400 text-black p-4 rounded-full shadow-2xl hover:shadow-xexon-gold/25 transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </div>
      </button>

      {/* Support Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-xexon-gold to-yellow-400 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">XEXON Support</h3>
                    <div className="flex items-center gap-2 text-black/70 text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Online now
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">How can we help you today?</h4>
                  <p className="text-gray-600 text-sm">Choose your preferred way to get in touch</p>
                </div>

                {supportOptions.map((option, index) => (
                  <button
                    key={index}
                    className="w-full p-4 border border-gray-200 rounded-xl hover:border-xexon-gold hover:bg-xexon-gold/5 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-xexon-gold/10 transition-colors duration-200">
                        <option.icon className="w-6 h-6 text-gray-600 group-hover:text-xexon-gold transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{option.title}</div>
                        <div className="text-sm text-gray-600">{option.subtitle}</div>
                      </div>
                      <div className="text-sm text-xexon-gold font-medium">{option.action}</div>
                    </div>
                  </button>
                ))}

                {/* Quick Message */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quick Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your question or issue..."
                    className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-xexon-gold transition-colors duration-200 resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-xexon-gold to-yellow-400 text-black font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  24/7 Support
                </div>
                <div>•</div>
                <div>Average response: 30s</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
