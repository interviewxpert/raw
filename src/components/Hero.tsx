import React from 'react'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wand2 } from "lucide-react";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
  <section className="pt-32 pb-24 bg-[#f8f9ff]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-300 to-red-300 rounded-full px-4 py-2 shadow-md">
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-800 to-red-500 text-white ">
            Fresh Out!
          </Badge>
          <span className="text-gray-600">Experience the Future of Mock Interviews</span>
          <Wand2 className="w-5 h-5 text-[#4361ee]" />
        </div>
    
        <h1>
          <span className="text-5xl font-bold tracking-tight text-white bg-gradient-to-r from-purple-700 to-red-500">LEVEL UP YOUR INTERVIEW GAME</span>
        </h1>
        
        <h2 className="text-7xl font-bold fi text-[#4361ee] pb-4">
          The Interview<span className="text-red-500">Xpert Way</span>
        </h2>

        <p className="max-w-2xl mx-auto text-red-600">
          Tired of rejections? With InterviewXpert, your success begins here. Experience life-like mock interviews 
          powered by AI voice technology, designed to help you practice, improve, and excel
        </p>

        <div className="flex justify-center space-x-4 pt-4">
          <Button size="lg" className="outline-gradient-button border border-red-600 hover:bg-gradient-to-r hover:from-white hover:to-red-600 text-[#4361ee]">
            Take a Mock Interview
          </Button>
          <Button size="lg" className=" bg-gradient-to-r from-purple-400 to-red-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-white
            text-white">
            Learn How It Works
          </Button>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Hero
