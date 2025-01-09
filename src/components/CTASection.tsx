"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="text-gray-600 text-lg">
            Storing data on decentralized networks can be hard. Deupload removes that complexity. Upload data in seconds using the tools you already know and love.
          </p>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Get $10 credit
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full aspect-square">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Decorative elements */}
              <circle cx="200" cy="200" r="180" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 4" />
              <path
                d="M200 20C282.843 20 350 87.1573 350 170"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Add more decorative SVG elements here */}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                {/* Illustration placeholder */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-purple-600 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}