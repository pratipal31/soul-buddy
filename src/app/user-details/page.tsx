"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('form.png')`, // Ensure 'form.png' exists in the public folder
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center flex-1 p-6 bg-black/60"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 space-y-8 rounded-lg shadow-lg"
          style={{
            backgroundColor: "transparent", // Make form background transparent
            boxShadow: "none", // Remove the shadow for cleaner transparency
          }}
        >
          {/* Name Input */}
          <div className="space-y-4">
            <Label className="text-gray-200 text-xl">Tell us your name</Label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-gray-400 px-2 py-3 text-white placeholder-gray-300 focus:outline-none focus:border--600 transition-colors bg-transparent"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Birth Details */}
          <div className="space-y-4">
            <Label className="text-gray-200 text-xl">Your Details</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Day */}
              <Select
                value={formData.day}
                onValueChange={(value) =>
                  setFormData({ ...formData, day: value })
                }
              >
                <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white">
                  <SelectValue placeholder="DAY" />
                </SelectTrigger>
                <SelectContent>
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
                onValueChange={(value) =>
                  setFormData({ ...formData, month: value })
                }
              >
                <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white">
                  <SelectValue placeholder="MONTH" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
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
                onValueChange={(value) =>
                  setFormData({ ...formData, year: value })
                }
              >
                <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white">
                  <SelectValue placeholder="YEAR" />
                </SelectTrigger>
                <SelectContent>
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
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white"
                disabled={formData.dontKnowTime}
              />
            </div>

            {/* Don't know time checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dontKnowTime"
                checked={formData.dontKnowTime}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    dontKnowTime: checked as boolean,
                  })
                }
                className="border-gray-400 data-[state=checked]:bg-red-600"
              />
              <label htmlFor="dontKnowTime" className="text-sm text-gray-300">
                I don't know my time of birth
              </label>
            </div>
          </div>

          {/* Birth Location */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-200">State of Birth</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                >
                  <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white mt-2">
                    <SelectValue placeholder="Select your Birth State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="state1">State 1</SelectItem>
                    <SelectItem value="state2">State 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-gray-200">City of Birth</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                >
                  <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white mt-2">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
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
            className="w-full bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors"
          >
            Submit
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
