"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { Sun, Moon, Star, Zap, MessageCircle, Settings } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Dashboard: React.FC = () => {
  const { user } = useUser()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Welcome back, {user?.firstName || 'Seeker'}!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Today's Horoscope */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="mr-2" /> Today's Horoscope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The stars align in your favor today. Expect positive energy and new opportunities.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Recommendations */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2" /> Quick Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Meditate for 10 minutes</li>
                  <li>Wear something blue</li>
                  <li>Practice gratitude</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Lunar Phase */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Moon className="mr-2" /> Lunar Phase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current Phase: Waxing Crescent</p>
                <p>Energy: Growing, Developing</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="initial"
          animate="animate"
        >
          <QuickActionButton icon={<Zap />} text="View Kundali" href="/kundali" variants={fadeInUp}/>
          <QuickActionButton icon={<Star />} text="Full Recommendations" href="/recommendations" variants={fadeInUp}/>
          <QuickActionButton icon={<MessageCircle />} text="Chat with AI" href="/chat" variants={fadeInUp}/>
          <QuickActionButton icon={<Settings />} text="Settings" href="/settings" variants={fadeInUp}/>
        </motion.div>
      </motion.div>
    </div>
  )
}

const QuickActionButton: React.FC<{ icon: React.ReactNode, text: string, href: string, variants: any }> = ({ icon, text, href, variants }) => (
  <motion.div >
    <Button 
      variant="outline" 
      className="w-full h-full py-8 bg-white/5 hover:bg-white/10 backdrop-blur-lg border-none text-white flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
      asChild
    >
      <a href={href}>
        {icon}
        <span className="mt-2">{text}</span>
      </a>
    </Button>
  </motion.div>
)

export default Dashboard

