"use client";

import React from 'react'
import { Card } from "@/components/ui/card";
import { Users, Target, Briefcase, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Pricing = () => {

    const [userCount, setUserCount] = useState(100);

  return (
    <div>
      {/* Pricing Section */}
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ACE YOUR INTERVIEWS WITH</h2>
          <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent mb-12">
            Flexible Plans
          </h3>

          {/* User Slider */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <Slider
                defaultValue={[100]}
                max={1000}
                step={50}
                className="mb-8"
                onValueChange={(value) => setUserCount(value[0])}
              />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                {userCount} users
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Plan */}
            <Card className="p-8 relative overflow-hidden border-gradient-br">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Personal</h4>
                <div className="text-4xl font-bold">
                  $19
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600">
                  All the basic features to boost your freelance career
                </p>
                <ul className="space-y-4">
                  {['Full Access to Landingfolio', '100 GB Free Storage', 'Unlimited Visitors', '10 Agents', 'Live Chat Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                      <Info className="w-4 h-4 text-gray-400 ml-auto" />
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                  Get 14 Days Free Trial
                </Button>
              </div>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 relative overflow-hidden border-gradient-br bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Professional</h4>
                <div className="text-4xl font-bold">
                  $49
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600">
                  All the basic features to boost your freelance career
                </p>
                <ul className="space-y-4">
                  {['Full Access to Landingfolio', '100 GB Free Storage', 'Unlimited Visitors', '10 Agents', 'Live Chat Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                      <Info className="w-4 h-4 text-gray-400 ml-auto" />
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:opacity-90">
                  Get 14 Days Free Trial
                </Button>
              </div>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 relative overflow-hidden border-gradient-br">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Business</h4>
                <div className="text-4xl font-bold">
                  $99
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600">
                  All the basic features to boost your freelance career
                </p>
                <ul className="space-y-4">
                  {['Full Access to Landingfolio', '100 GB Free Storage', 'Unlimited Visitors', '10 Agents', 'Live Chat Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                      <Info className="w-4 h-4 text-gray-400 ml-auto" />
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                  Get 14 Days Free Trial
                </Button>
              </div>
            </Card>
          </div>
        </div>
    </div>
  )
}

export default Pricing
