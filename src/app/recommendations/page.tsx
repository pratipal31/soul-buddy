"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Star, Clock, Heart, Flame, Gem, CloudMoon } from 'lucide-react';
import { RecommendationCard } from './recommendation-card';
import { TimelineItem } from './timeline-item'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    // Simulating API call to fetch recommendations
    const fetchRecommendations = async () => {
      // In a real app, this would be an API call
      const response = await fetch(`/api/recommendations?period=${activeTab}`);
      const data = await response.json();
      setRecommendations(data);
    };

    fetchRecommendations();
  }, [activeTab]);

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
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'daily' | 'weekly' | 'monthly')} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>

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

export default RecommendationsPage;

