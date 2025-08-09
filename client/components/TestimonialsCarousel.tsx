import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures",
    content: "XEXON transformed our international payment infrastructure. The offshore banking solutions are exactly what we needed for our global operations.",
    rating: 5,
    avatar: "https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fc93c7c6ecbb1465c805658641c5ce582?format=webp&width=800"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, CryptoFund Capital",
    content: "The privacy features and institutional-grade security give us confidence in managing our fund's assets. Outstanding service and technology.",
    rating: 5,
    avatar: "https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F5d296b0d44f848fda1470e359a127682?format=webp&width=800"
  },
  {
    name: "Elena Vasquez",
    role: "CFO, Global Innovations",
    content: "XEXON's trading platform and crypto-backed loans have been game-changers for our treasury management. Highly recommended.",
    rating: 5,
    avatar: "https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F9d750b2837ef48cbb87f6ffc5cdd13d2?format=webp&width=800"
  },
  {
    name: "David Kim",
    role: "Director, Blockchain Ventures",
    content: "The seamless integration between crypto and traditional banking is phenomenal. XEXON bridges the gap perfectly for institutional clients.",
    rating: 5,
    avatar: "https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2Fc93c7c6ecbb1465c805658641c5ce582?format=webp&width=800"
  },
  {
    name: "Lisa Wang",
    role: "Treasury Manager, Global Corp",
    content: "Outstanding customer service and cutting-edge technology. The offshore banking solutions have streamlined our international operations significantly.",
    rating: 5,
    avatar: "https://cdn.builder.io/api/v1/image/assets%2F9bf4348cc59849228c41bda59add7fc0%2F9d750b2837ef48cbb87f6ffc5cdd13d2?format=webp&width=800"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xexon-gold/10 text-xexon-gold font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Stories
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            What Our <span className="bg-gradient-to-r from-xexon-gold to-yellow-600 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust XEXON with their financial future.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div 
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-xexon-gold/5 to-yellow-400/5"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-xexon-gold/30 mx-auto mb-8" />
              
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-xexon-gold/30"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-xexon-gold hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-xexon-gold scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-xexon-gold hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="ml-2 text-sm text-gray-500">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
