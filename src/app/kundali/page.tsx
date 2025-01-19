/* eslint-disable @typescript-eslint/no-unused-vars */
// KundaliPage.tsx
"use client";

import React, { useState } from "react";
import { Loader2, Sun, Moon, Star } from "lucide-react";

interface BirthDetails {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  gender: string;
  state: string;
  city: string;
}

const KundaliPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [birthDetails, setBirthDetails] = useState<BirthDetails>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    gender: "",
    state: "",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBirthDetails({
      ...birthDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Enhanced Form Container */}
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 mb-12 backdrop-blur-sm border border-red-100">
          <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
            Generate Your Kundali
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Enhanced Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white py-4 rounded-xl font-medium shadow-lg hover:from-red-900 hover:to-red-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-3 mt-8 border border-red-600"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span className="text-lg">Generating Your Kundali...</span>
                </>
              ) : (
                <>
                  <Star className="w-6 h-6" />
                  <span className="text-lg">Generate Kundali</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Enhanced Kundali Chart */}
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 mb-12 backdrop-blur-sm border border-red-100">
          <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
            Your Birth Chart (Kundali)
          </h2>
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
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Features Grid */}
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

// Enhanced Input Field Component
const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, name, type, value, onChange, required }) => (
  <div className="relative">
    <label className="block text-red-800 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border-2 border-red-100 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white transition-all duration-300 outline-none"
    />
  </div>
);

// Enhanced Select Field Component
const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}> = ({ label, name, value, onChange, options, required }) => (
  <div className="relative">
    <label className="block text-red-800 font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border-2 border-red-100 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white transition-all duration-300 outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Enhanced Feature Card Component
const EnhancedFeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 border border-red-100 hover:shadow-xl">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-red-900 mb-4">{title}</h3>
    <p className="text-red-700">{description}</p>
  </div>
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
