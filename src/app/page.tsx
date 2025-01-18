"use client";
import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
      <title>SoulBuddy</title>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Heart className="h-16 w-16 text-red-600" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover your destiny with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Connect with kindred spirits on your journey to enlightenment
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-transparent hover:bg-red-600 text-white hover:text-white border border-white"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-red-600 dark:text-purple-400 mb-4">
              SoulBuddy?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform goes beyond basic compatibility tests. Using advanced
              algorithms, we analyze your spiritual energy, preferences, and
              even astrological factors to provide personalized matches that
              truly align with your inner journey. It’s not just a match—it’s a
              connection built on authenticity and understanding.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-red-600 dark:text-purple-400 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage the latest AI technology to uncover the deepest
              insights into your preferences. Our system doesn’t just scratch
              the surface—it dives deep into your spiritual and astrological
              makeup to find matches that help you grow, thrive, and connect
              meaningfully with others.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-red-600 dark:text-purple-400 mb-4">
              Why Trust Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join a thriving global community of like-minded individuals who
              share your values and aspirations. Whether you’re looking for a
              meditation partner, a spiritual guide, or simply someone who
              understands your journey, SoulBuddy is here to create meaningful
              connections that last a lifetime.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('footer.jpg')", // Replace with your image path
        }}
      >
        <div className="bg-black bg-opacity-60 text-white py-16">
          <div className="container mx-auto px-4">
            {/* Unified Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
              {/* About Section */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600">
                  About SoulBuddy
                </h3>
                <p>
                  SoulBuddy is your trusted companion on the journey to
                  spiritual enlightenment, helping you connect with like-minded
                  individuals and mentors worldwide.
                </p>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-red-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-600">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Section */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600">
                  Stay Updated
                </h3>
                <p className="mb-4">
                  Subscribe to our newsletter for the latest updates and
                  spiritual insights.
                </p>
                <form className="flex flex-col sm:flex-row items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-grow px-4 py-2 rounded-l-lg border border-gray-300 bg-gray-100 text-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600">
                  Contact Us
                </h3>
                <p>Email: support@soulbuddy.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <div className="mt-4">
                  <h4 className="font-bold text-sm mb-2">Follow Us:</h4>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <motion.a
                      href="#"
                      whileHover={{ y: -3 }}
                      className="hover:text-red-600"
                    >
                      <Instagram className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ y: -3 }}
                      className="hover:text-red-600"
                    >
                      <Twitter className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ y: -3 }}
                      className="hover:text-red-600"
                    >
                      <Facebook className="h-6 w-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-gray-600 text-center">
              <p>
                © {new Date().getFullYear()} SoulBuddy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
