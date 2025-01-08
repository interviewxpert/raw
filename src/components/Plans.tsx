import React from 'react'
import { Card } from "@/components/ui/card";
import { Users, Target, Briefcase, Check, Info } from "lucide-react";

const Plans = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-6 text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Flexible Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tired of rejections? With InterviewXpert, your success begins here. Experience life-like mock interviews powered by AI voice technology, designed to help you practice, improve, and excel.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mock Interviews Card */}
          <Card className="p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
            <div className="space-y-4">
              <Users className="w-10 h-10" />
              <h3 className="text-2xl font-semibold">Mock Interviews</h3>
              <div className="flex items-baseline">
                <span className="text-6xl font-bold">5K</span>
                <span className="text-4xl ml-1">+</span>
              </div>
              <p className="text-sm opacity-90">
                Thousands of users have already boosted their confidence with our AI-powered practice sessions.
              </p>
            </div>
          </Card>

          {/* Accuracy Card */}
          <Card className="p-8 bg-white shadow-lg">
            <div className="space-y-4">
              <Target className="w-10 h-10 text-blue-500" />
              <h3 className="text-2xl font-semibold">Accuracy Improvement</h3>
              <div className="flex items-baseline">
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  87
                </span>
                <span className="text-4xl text-purple-500 ml-1">%</span>
              </div>
              <p className="text-sm text-gray-600">
                Real-time feedback ensures you're better prepared. An average improvement of 87% in answers after one session.
              </p>
            </div>
          </Card>

          {/* Career Paths Card */}
          <Card className="p-8 bg-white shadow-lg">
            <div className="space-y-4">
              <Briefcase className="w-10 h-10 text-blue-500" />
              <h3 className="text-2xl font-semibold">Career Paths Covered</h3>
              <div className="flex items-baseline">
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  50
                </span>
                <span className="text-4xl text-purple-500 ml-1">+</span>
              </div>
              <p className="text-sm text-gray-600">
                From developers and designers to managers and educators, InterviewXpert is designed for every career path.
              </p>
            </div>
          </Card>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Plans
