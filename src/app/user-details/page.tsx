"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../navbar/page"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CosmicForm() {
  const [formData, setFormData] = useState({
    name: "",
    day: "",
    month: "January",
    year: "2025",
    time: "00:00",
    dontKnowTime: false,
    state: "",
    city: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Left Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 p-12 bg-black"
        >
          <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
            {/* Name Input */}
            <div className="space-y-4">
              <Label className="text-white text-xl">Tell us your name</Label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-purple-400/30 text-white px-2 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Birth Details */}
            <div className="space-y-4">
              <Label className="text-white text-xl">Your Details</Label>
              <div className="flex gap-4">
                {/* Day */}
                <Select
                  value={formData.day}
                  onValueChange={(value) => setFormData({ ...formData, day: value })}
                >
                  <SelectTrigger className="w-[100px] bg-gradient-to-r from-red-900 to-red-600 border-purple-400/30 text-white">
                    <SelectValue placeholder="DAY" />
                  </SelectTrigger>
                  <SelectContent className="bg-gradient-to-r from-red-900 to-red-600 border-purple-400/30 text-white">
                    {Array.from({ length: 31 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Month */}
                <Select
                  value={formData.month}
                  onValueChange={(value) => setFormData({ ...formData, month: value })}
                >
                  <SelectTrigger className="w-[140px] bg-[#1A1025] border-purple-400/30 text-white">
                    <SelectValue placeholder="MONTH" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1025] border-purple-400/30">
                    {[
                      "January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                    ].map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Year */}
                <Select
                  value={formData.year}
                  onValueChange={(value) => setFormData({ ...formData, year: value })}
                >
                  <SelectTrigger className="w-[120px] bg-[#1A1025] border-purple-400/30 text-white">
                    <SelectValue placeholder="YEAR" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1025] border-purple-400/30">
                    {Array.from({ length: 100 }, (_, i) => (
                      <SelectItem key={2025 - i} value={String(2025 - i)}>
                        {2025 - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Time */}
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-[120px] bg-[#1A1025] border border-purple-400/30 rounded-md text-white px-3 py-2"
                  disabled={formData.dontKnowTime}
                />
              </div>

              {/* Don't know time checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dontKnowTime"
                  checked={formData.dontKnowTime}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, dontKnowTime: checked as boolean })
                  }
                  className="border-purple-400/30 data-[state=checked]:bg-purple-600"
                />
                <label
                  htmlFor="dontKnowTime"
                  className="text-sm text-gray-300"
                >
                  I don't know my time of birth
                </label>
              </div>
            </div>

            {/* Birth Location */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">State of Birth</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData({ ...formData, state: value })}
                  >
                    <SelectTrigger className="w-full bg-[#1A1025] border-purple-400/30 text-white mt-2">
                      <SelectValue placeholder="Select your Birth State" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1025] border-purple-400/30">
                      <SelectItem value="state1">State 1</SelectItem>
                      <SelectItem value="state2">State 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white">City of Birth</Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => setFormData({ ...formData, city: value })}
                  >
                    <SelectTrigger className="w-full bg-[#1A1025] border-purple-400/30 text-white mt-2">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1025] border-purple-400/30">
                      <SelectItem value="city1">City 1</SelectItem>
                      <SelectItem value="city2">City 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-red-900 hover:bg-red-600 text-white px-8 py-2 rounded-md transition-colors"
            >
              Submit
            </Button>
          </form>
        </motion.div>

        {/* Right Side - Image */}
        <div 
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('form.png')`
          }}
        />
      </div>
    </div>
  )
}
