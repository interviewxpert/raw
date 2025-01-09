"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!",
    author: "Ahmed Raza",
    rating: 5,
  },
  // Add more testimonials here
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative mb-20">
      <Card className="p-12 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
        <div className="max-w-4xl mx-auto text-white">
          <Quote className="w-16 h-16 mb-8 opacity-50" />
          <p className="text-3xl font-light mb-8 leading-relaxed">
            {testimonials[currentSlide].text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              {/* Avatar placeholder */}
            </div>
            <div>
              <h4 className="font-semibold">{testimonials[currentSlide].author}</h4>
              <div className="flex gap-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}