"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import {
  Sun,
  Moon,
  Star,
  Zap,
  MessageCircle,
  Settings,
  ChevronRight,
  Gem,
  Feather,
  Brain,
  Music,
  Sunrise,
  Activity,
  Check,
  DollarSign,
  Heart,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("horoscope");

  return (
    <div className="min-h-screen bg-[url('/cosmic-background.jpg')] bg-cover bg-center text-black p-8 overflow-x-hidden">
      <div className="absolute"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg"
          {...fadeInUp}
        >
          Welcome back, {user?.firstName || "Cosmic Seeker"}!
        </motion.h1>

        <Tabs
          defaultValue="horoscope"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/20 backdrop-blur-md rounded-lg mb-6 p-1">
            <AnimatedTabsTrigger value="horoscope" icon={<Sun />}>
              Horoscope
            </AnimatedTabsTrigger>
            <AnimatedTabsTrigger value="kundali" icon={<Star />}>
              Kundali
            </AnimatedTabsTrigger>
            <AnimatedTabsTrigger value="recommendations" icon={<Gem />}>
              Recommendations
            </AnimatedTabsTrigger>
            <AnimatedTabsTrigger value="spiritual" icon={<Brain />}>
              Spiritual
            </AnimatedTabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="horoscope" className="mt-6">
                <HoroscopeContent />
              </TabsContent>
              <TabsContent value="kundali" className="mt-6">
                <KundaliContent />
              </TabsContent>
              <TabsContent value="recommendations" className="mt-6">
                <RecommendationsContent />
              </TabsContent>
              <TabsContent value="spiritual" className="mt-6">
                <SpiritualContent />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* Quick Actions */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="initial"
          animate="animate"
        >
          <QuickActionButton
            icon={<Zap />}
            text="Full Kundali Analysis"
            href="/kundali"
          />
          <QuickActionButton
            icon={<Star />}
            text="Detailed Recommendations"
            href="/recommendations"
          />
          <QuickActionButton
            icon={<MessageCircle />}
            text="Chat with Cosmic AI"
            href="/chat"
          />
          <QuickActionButton
            icon={<Settings />}
            text="Cosmic Settings"
            href="/settings"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnimatedTabsTrigger: React.FC<{
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ value, icon, children }) => (
  <TabsTrigger
    value={value}
    className="flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 hover:bg-white/30"
  >
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-xl"
    >
      {icon}
    </motion.span>
    <span className="font-medium">{children}</span>
  </TabsTrigger>
);

const HoroscopeContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <AnimatedCard
      icon={<Sun className="w-8 h-8 text-yellow-400" />}
      title="Today's Horoscope"
      content={
        <div>
          <p className="text-lg mb-4 leading-relaxed">
            The stars align in your favor today. Expect positive energy and new
            opportunities in your career and personal relationships. Your
            creativity is at its peak - use it wisely!
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/horoscope-chart.png"
              alt="Daily Horoscope Chart"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      }
    />
    <AnimatedCard
      icon={<Moon className="w-8 h-8 text-blue-300" />}
      title="Monthly Forecast"
      content={
        <div>
          <p className="mb-4 leading-relaxed">
            This month brings significant growth in your spiritual journey. Key
            dates:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center bg-white/10 p-2 rounded-md">
              <Sunrise className="w-5 h-5 mr-3 text-pink-400" />
              <span>
                <strong className="text-pink-300">15th:</strong> Unexpected
                financial gain
              </span>
            </li>
            <li className="flex items-center bg-white/10 p-2 rounded-md">
              <Sunrise className="w-5 h-5 mr-3 text-pink-400" />
              <span>
                <strong className="text-pink-300">22nd:</strong> Breakthrough in
                personal relationships
              </span>
            </li>
            <li className="flex items-center bg-white/10 p-2 rounded-md">
              <Sunrise className="w-5 h-5 mr-3 text-pink-400" />
              <span>
                <strong className="text-pink-300">28th:</strong> Perfect day for
                starting new projects
              </span>
            </li>
          </ul>
        </div>
      }
    />
  </div>
);

const KundaliContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <AnimatedCard
      icon={<Zap className="w-8 h-8 text-yellow-400" />}
      title="Your Kundali Overview"
      content={
        <div>
          <p className="mb-4 leading-relaxed">
            Your birth chart reveals a strong influence of Jupiter in the 10th
            house, indicating great career potential and public recognition.
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="/kundali-chart.png"
              alt="Kundali Chart"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            View Full Kundali
          </Button>
        </div>
      }
    />
    <AnimatedCard
      icon={<Star className="w-8 h-8 text-purple-400" />}
      title="Key Insights"
      content={
        <ul className="space-y-4">
          <li className="flex items-center bg-white/10 p-3 rounded-md">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            <div>
              <strong className="text-yellow-300">Career:</strong>
              <p className="text-sm mt-1">Leadership roles suited for you</p>
            </div>
          </li>
          <li className="flex items-center bg-white/10 p-3 rounded-md">
            <Heart className="w-6 h-6 mr-3 text-red-400" />
            <div>
              <strong className="text-red-300">Relationships:</strong>
              <p className="text-sm mt-1">
                Harmony in partnerships after minor challenges
              </p>
            </div>
          </li>
          <li className="flex items-center bg-white/10 p-3 rounded-md">
            <Activity className="w-6 h-6 mr-3 text-green-400" />
            <div>
              <strong className="text-green-300">Health:</strong>
              <p className="text-sm mt-1">
                Focus on mental well-being this month
              </p>
            </div>
          </li>
          <li className="flex items-center bg-white/10 p-3 rounded-md">
            <DollarSign className="w-6 h-6 mr-3 text-blue-400" />
            <div>
              <strong className="text-blue-300">Finance:</strong>
              <p className="text-sm mt-1">
                Favorable time for long-term investments
              </p>
            </div>
          </li>
        </ul>
      }
    />
  </div>
);

const RecommendationsContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <AnimatedCard
      icon={<Gem className="w-8 h-8 text-blue-400" />}
      title="Gemstone Suggestion"
      content={
        <div>
          <p className="mb-2 font-semibold text-blue-300">
            Blue Sapphire (Neelam)
          </p>
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
            <Image
              src="/blue-sapphire.png"
              alt="Blue Sapphire"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Enhances wisdom and brings prosperity. Wear on the middle finger of
            your right hand for best results.
          </p>
        </div>
      }
    />
    <AnimatedCard
      icon={<Feather className="w-8 h-8 text-purple-400" />}
      title="Recommended Ritual"
      content={
        <div>
          <p className="mb-2 font-semibold text-purple-300">Surya Namaskar</p>
          <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="/surya-namaskar.png"
              alt="Surya Namaskar"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Perform this yoga sequence at sunrise to align your energies with
            the sun and boost vitality.
          </p>
        </div>
      }
    />
    <AnimatedCard
      icon={<Star className="w-8 h-8 text-yellow-400" />}
      title="Do's and Don'ts"
      content={
        <ul className="space-y-3">
          <li className="flex items-center bg-white/10 p-2 rounded-md">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm">Wear light blue colors</span>
          </li>
          <li className="flex items-center bg-white/10 p-2 rounded-md">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm">Meditate facing east</span>
          </li>
          <li className="flex items-center bg-white/10 p-2 rounded-md">
            <X className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-sm">Make hasty financial decisions</span>
          </li>
          <li className="flex items-center bg-white/10 p-2 rounded-md">
            <X className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-sm">Neglect self-care routines</span>
          </li>
        </ul>
      }
    />
  </div>
);

const SpiritualContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <AnimatedCard
      icon={<Brain className="w-8 h-8 text-purple-400" />}
      title="Meditation Focus"
      content={
        <div>
          <p className="mb-2 font-semibold text-purple-300">
            Chakra Balancing Meditation
          </p>
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
            <Image
              src="/throat-chakra.png"
              alt="Throat Chakra"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Focus on your throat chakra today. Visualize a bright blue light as
            you chant the sound "HAM".
          </p>
          <Button
            variant="outline"
            className="w-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            Start Guided Meditation
          </Button>
        </div>
      }
    />

    <AnimatedCard
      icon={<Zap className="w-8 h-8 text-yellow-400" />}
      title="Energy Workout"
      content={
        <div>
          <p className="mb-2 font-semibold text-yellow-300">
            Kundalini Yoga Sequence
          </p>
          <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="/kundalini-yoga.png"
              alt="Kundalini Yoga"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            A 20-minute routine to awaken your spiritual energy and align your
            chakras.
          </p>
          <Button
            variant="outline"
            className="w-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            View Workout
          </Button>
        </div>
      }
    />
    <AnimatedCard
      icon={<Music className="w-8 h-8 text-blue-400" />}
      title="Sleep Harmony"
      content={
        <div>
          <p className="mb-2 font-semibold text-blue-300">Cosmic Lullaby</p>
          <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="/cosmic-lullaby.png"
              alt="Cosmic Lullaby"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            A specially curated playlist of soothing sounds aligned with your
            current astrological position.
          </p>
          <Button
            variant="outline"
            className="w-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            Play Sleep Sounds
          </Button>
        </div>
      }
    />
  </div>
);

const AnimatedCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}> = ({ icon, title, content }) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Card className="bg-white/10 backdrop-blur-lg border-none text-black overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50">
        <CardTitle className="flex items-center space-x-2 text-xl">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">{content}</CardContent>
    </Card>
  </motion.div>
);

const QuickActionButton: React.FC<{
  icon: React.ReactNode;
  text: string;
  href: string;
}> = ({ icon, text, href }) => (
  <motion.div variants={fadeInUp}>
    <Button
      variant="outline"
      className="w-full h-full py-8 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 hover:from-purple-700/60 hover:to-indigo-700/60 backdrop-blur-lg border-none text-black flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
      asChild
    >
      <a href={href}>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-2"
        >
          {icon}
        </motion.div>
        <span className="text-sm font-medium">{text}</span>
      </a>
    </Button>
  </motion.div>
);

export default Dashboard;
