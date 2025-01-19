// RecommendationsPage.tsx
"use client";

import React, { useState } from 'react';
import { Sun, Moon, Star, Clock, Heart, Flame, Gem, CloudMoon } from 'lucide-react';

interface Recommendation {
  type: 'puja' | 'gemstone' | 'ritual' | 'meditation';
  title: string;
  description: string;
  benefits: string[];
  timing?: string;
  items?: string[];
}

const RecommendationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const recommendations: Recommendation[] = [
    {
      type: 'puja',
      title: '✨ Ganesh Puja',
      description: 'A powerful ritual to remove obstacles and bring success in your endeavors',
      benefits: [
        'Removes obstacles from your life path',
        'Brings divine wisdom and mental clarity',
        'Enhances business prospects and success'
      ],
      timing: 'Best performed during sunrise or early morning',
      items: ['Fresh red flowers', 'Sweet modak', 'Yellow silk cloth', 'Pure incense sticks']
    },
    {
      type: 'gemstone',
      title: '💎 Red Coral (Moonga)',
      description: 'Sacred gemstone that strengthens Mars energy in your birth chart',
      benefits: [
        'Boosts confidence and inner strength',
        'Enhances leadership and decision-making abilities',
        'Provides protection against negative energies'
      ]
    },
    {
      type: 'meditation',
      title: '🧘‍♂️ Chakra Meditation',
      description: 'Ancient practice to balance your vital energy centers',
      benefits: [
        'Harmonizes spiritual and physical energies',
        'Enhances mental clarity and focus',
        'Brings emotional balance and peace'
      ],
      timing: 'Practice during sunrise or sunset for optimal benefits'
    },
    {
      type: 'ritual',
      title: '🕉️ Rudra Abhishek',
      description: 'Sacred ritual to invoke the blessings of Lord Shiva',
      benefits: [
        'Cleanses negative karmic energies',
        'Brings divine peace and prosperity',
        'Strengthens relationships and family bonds'
      ],
      timing: 'Most auspicious on Monday mornings',
      items: ['Pure milk', 'Sacred honey', 'Holy Gangajal', 'Fresh bael leaves']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50">
      {/* Enhanced Header with Pattern Overlay */}
      <header className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjIwLDM4LDM4LDAuMSkiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-red-700 to-red-900 p-4 rounded-full shadow-lg">
              <Gem className="w-16 h-16 text-red-100" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-red-800 bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-transparent bg-clip-text">
            Spiritual Recommendations
          </h1>
          <p className="text-xl text-red-600 font-medium">Personalized guidance for your divine journey</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Enhanced Time Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-1.5 inline-flex space-x-1">
            {['daily', 'weekly', 'monthly'].map((period) => (
              <button
                key={period}
                onClick={() => setActiveTab(period as any)}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === period
                    ? 'bg-gradient-to-r from-red-800 to-red-700 text-white shadow-md'
                    : 'text-red-800 hover:bg-red-50'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} recommendation={rec} />
          ))}
        </div>

        {/* Enhanced Daily Ritual Timeline */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-red-900 mb-8 flex items-center">
            <Clock className="w-8 h-8 mr-3 text-red-700" />
            Daily Spiritual Schedule
          </h2>
          <div className="space-y-8">
            <TimelineItem
              time="5:00 AM"
              title="✨ Brahma Muhurta Meditation"
              description="Practice meditation during the most auspicious time of day for spiritual growth"
              icon={<Sun className="w-6 h-6 text-red-600" />}
            />
            <TimelineItem
              time="6:00 AM"
              title="🕉️ Morning Prayers"
              description="Begin your day with sacred mantras and spiritual practices"
              icon={<Flame className="w-6 h-6 text-red-600" />}
            />
            <TimelineItem
              time="7:00 PM"
              title="🪔 Evening Aarti"
              description="Light the sacred lamp and connect with divine energy"
              icon={<Moon className="w-6 h-6 text-red-600" />}
            />
            <TimelineItem
              time="9:00 PM"
              title="💫 Gratitude Practice"
              description="End your day by counting your blessings and expressing gratitude"
              icon={<Heart className="w-6 h-6 text-red-600" />}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => {
  const getIcon = () => {
    switch (recommendation.type) {
      case 'puja':
        return <Flame className="w-8 h-8 text-red-600" />;
      case 'gemstone':
        return <Gem className="w-8 h-8 text-red-600" />;
      case 'meditation':
        return <CloudMoon className="w-8 h-8 text-red-600" />;
      case 'ritual':
        return <Star className="w-8 h-8 text-red-600" />;
    }
  };

  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-red-100 hover:border-red-200">
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
          {getIcon()}
        </div>
        <h3 className="text-2xl font-bold text-red-900 ml-4">{recommendation.title}</h3>
      </div>
      <p className="text-red-700 mb-6 leading-relaxed">{recommendation.description}</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-red-800 mb-3">✨ Benefits:</h4>
          <ul className="space-y-2">
            {recommendation.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-red-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {recommendation.timing && (
          <div className="mt-4">
            <h4 className="font-semibold text-red-800 mb-3">⏰ Timing:</h4>
            <p className="text-red-700">{recommendation.timing}</p>
          </div>
        )}
        
        {recommendation.items && (
          <div className="mt-4">
            <h4 className="font-semibold text-red-800 mb-3">🔮 Required Items:</h4>
            <ul className="space-y-2">
              {recommendation.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-red-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ time, title, description, icon }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-red-50 transition-colors duration-300">
    <div className="flex-shrink-0 w-20 text-red-800 font-medium">{time}</div>
    <div className="flex-shrink-0 p-2 rounded-lg bg-red-50">{icon}</div>
    <div>
      <h3 className="font-semibold text-red-900 mb-1">{title}</h3>
      <p className="text-red-700">{description}</p>
    </div>
  </div>
);

export default RecommendationsPage;