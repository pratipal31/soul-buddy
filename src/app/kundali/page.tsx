"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Sun, Moon, Star, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlanetaryPosition {
  planet: string;
  house: number;
  sign: string;
}

const planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Rahu", "Ketu"];
const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const KundaliPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [kundaliData, setKundaliData] = useState<PlanetaryPosition[]>([]);

  const generateRandomKundali = (): PlanetaryPosition[] => {
    return planets.map(planet => ({
      planet,
      house: Math.floor(Math.random() * 12) + 1,
      sign: zodiacSigns[Math.floor(Math.random() * 12)]
    }));
  };

  const handleGenerateKundali = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newKundaliData = generateRandomKundali();
      setKundaliData(newKundaliData);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleGenerateKundali();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">Random Kundali Generator</h1>

        <Button
          onClick={handleGenerateKundali}
          disabled={isLoading}
          className="w-full max-w-md mx-auto mb-8 bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white py-4 rounded-xl font-medium shadow-lg hover:from-red-900 hover:to-red-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-3"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={24} />
              <span className="text-lg">Generating Kundali...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-6 h-6" />
              <span className="text-lg">Generate New Kundali</span>
            </>
          )}
        </Button>

        {/* Kundali Chart */}
        <Card className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 mb-12 backdrop-blur-sm border border-red-100">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-900 text-center">Your Random Kundali</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-1 bg-red-900 p-1 max-w-3xl mx-auto rounded-lg">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-red-50 p-6 min-h-[120px] flex flex-col items-center justify-center text-center rounded-md hover:shadow-inner transition-all duration-300"
                >
                  <span className="text-red-900 font-bold mb-2">
                    House {index + 1}
                  </span>
                  <span className="text-red-700 text-sm">
                    {getHouseName(index + 1)}
                  </span>
                  {kundaliData.filter(p => p.house === index + 1).map(p => (
                    <span key={p.planet} className="text-red-600 text-xs">
                      {p.planet} in {p.sign}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EnhancedFeatureCard
            icon={<Sun className="w-12 h-12 text-red-600" />}
            title="AI-Powered Insights"
            description="Get personalized interpretations of your birth chart, including career prospects, relationship compatibility, and life path guidance."
          />
          <EnhancedFeatureCard
            icon={<Moon className="w-12 h-12 text-red-600" />}
            title="Gemstone Recommendations"
            description="Receive customized suggestions for gemstones that can enhance your spiritual journey and life balance."
          />
          <EnhancedFeatureCard
            icon={<Star className="w-12 h-12 text-red-600" />}
            title="Ritual Guidance"
            description="Access detailed pooja recommendations and spiritual practices aligned with your birth chart."
          />
        </div>
      </main>
    </div>
  );
};

// Enhanced Feature Card Component
const EnhancedFeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card className="bg-white bg-opacity-95 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 border border-red-100 hover:shadow-xl">
    <CardContent>
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-red-900 mb-4">{title}</h3>
      <p className="text-red-700">{description}</p>
    </CardContent>
  </Card>
);

const getHouseName = (houseNumber: number): string => {
  const houseNames = [
    "Ascendant",
    "Wealth",
    "Communication",
    "Home",
    "Creativity",
    "Health",
    "Relationships",
    "Transformation",
    "Fortune",
    "Career",
    "Gains",
    "Spirituality",
  ];
  return houseNames[houseNumber - 1];
};

export default KundaliPage;

