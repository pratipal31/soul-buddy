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

// Define a list of Indian states and cities
const statesAndCities = {
  "Andhra Pradesh": [
    "Hyderabad",
    "Visakhapatnam",
    "Vijayawada",
    "Tirupati",
    "Rajahmundry",
    "Kakinada",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Tawang",
    "Ziro",
    "Naharlagun",
    "Pasighat",
    "Tezu",
  ],
  Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Nagaon", "Silchar", "Tinsukia"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Munger", "Buxar"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba", "Raigarh", "Jagdalpur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Cortalim"],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
  ],
  Haryana: ["Chandigarh", "Faridabad", "Gurgaon", "Ambala", "Hisar", "Karnal"],
  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Manali",
    "Kullu",
    "Mandi",
    "Solan",
  ],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Hazaribagh",
    "Bokaro",
    "Giridih",
  ],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Bellary", "Tumkur"],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Kottayam",
    "Thrissur",
    "Malappuram",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Jabalpur",
    "Ujjain",
    "Sagar",
  ],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane"],
  Manipur: [
    "Imphal",
    "Thoubal",
    "Kakching",
    "Churachandpur",
    "Bishnupur",
    "Tamenglong",
  ],
  Meghalaya: [
    "Shillong",
    "Tura",
    "Jowai",
    "Nongstoin",
    "Williamnagar",
    "Baghmara",
  ],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Saiha"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Zunheboto", "Phek"],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Berhampur",
    "Rourkela",
    "Sambalpur",
    "Puri",
  ],
  Punjab: [
    "Chandigarh",
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Patiala",
    "Bathinda",
  ],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner"],
  Sikkim: ["Gangtok", "Namchi", "Pelling", "Mangan", "Rongli", "Jorethang"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Tirunelveli",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Khammam",
    "Nizamabad",
    "Karimnagar",
    "Khammam",
  ],
  Tripura: [
    "Agartala",
    "Udaipur",
    "Dharmanagar",
    "Sepahijala",
    "Amarpur",
    "Kailashahar",
  ],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Agra",
    "Allahabad",
    "Meerut",
  ],
  Uttarakhand: [
    "Dehradun",
    "Nainital",
    "Haridwar",
    "Rishikesh",
    "Roorkee",
    "Haridwar",
  ],
  "West Bengal": [
    "Kolkata",
    "Siliguri",
    "Durgapur",
    "Asansol",
    "Howrah",
    "Darjeeling",
  ],
  "Andaman and Nicobar Islands": [
    "Port Blair",
    "Havelock",
    "Neil Island",
    "Diglipur",
    "Mayabunder",
  ],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  Lakshadweep: ["Kavaratti", "Andrott", "Minicoy"],
  Delhi: ["New Delhi", "Old Delhi", "Rohini", "Connaught Place", "Janakpuri"],
  Puducherry: ["Puducherry", "Auroville", "Karaikal", "Mahe"],
};

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/FormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data saved successfully!");
      } else {
        console.error("Failed to save form data.");
      }
    } catch (error) {
      console.error("Error while saving data:", error);
    }
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
                  onValueChange={
                    (value) =>
                      setFormData({ ...formData, state: value, city: "" }) // Clear city when state changes
                  }
                >
                  <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(statesAndCities).map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* City of Birth */}
              <div>
                <Label className="text-gray-200">City of Birth</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                >
                  <SelectTrigger className="w-full border border-gray-400 px-3 py-2 bg-transparent text-white">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.state &&
                      statesAndCities[formData.state].map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full bg-red-600 text-white">
            Submit
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
