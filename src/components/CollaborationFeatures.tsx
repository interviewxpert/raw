"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function CollaborationFeatures() {
  return (
    <div className="py-20 space-y-32">
      {/* Messages Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Card className="p-6 bg-white shadow-lg w-[300px]">
            <div className="space-y-4">
              <div className="text-purple-600 font-semibold">New Messages</div>
              {[
                { name: "Adam shoks", time: "8:45 AM" },
                { name: "Marlo Willium", time: "8:00 AM" },
                { name: "Dianne Russell", time: "7:30 AM" },
              ].map((message, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{message.name}</div>
                  </div>
                  <div className="text-xs text-gray-500">{message.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Build collaboration through messages</h2>
          <p className="text-gray-600">
            Offering easy to understand solutions not only helps prevent confusion or additional requests but also shows the customer that you value their time and to help them.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Explore Now
          </Button>
        </div>
      </div>

      {/* Meetings Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Arrange meetings on any platform</h2>
          <p className="text-gray-600">
            Planning meetings can help establish the goals and timeline for a company initiative or project. Meetings are important because they give a clear sense of direction.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Explore Now
          </Button>
        </div>
        <div className="flex-1">
          <Card className="p-6 bg-purple-600 text-white w-[300px]">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">85</div>
                <div className="text-sm bg-white/20 px-2 py-1 rounded">
                  20% more in the last week
                </div>
              </div>
              <div className="font-medium">Total Calls</div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 bg-white/20 rounded-lg" />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Automation Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Card className="p-6 bg-white shadow-lg w-[300px]">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="font-medium">Customer</div>
                  <div className="text-sm text-gray-600">
                    How do I add pictures to the list names?
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Send a reply automatically
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Communication via automatic actions</h2>
          <p className="text-gray-600">
            Task automation refers to the use of software to complete work activities. Task automation improves the accuracy & consistency and powers more efficient processes.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
}