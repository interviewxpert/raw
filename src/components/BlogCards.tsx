"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Introducing the Webflow Boosters App",
    description: "Advanced code solutions added directly inside of Webflow at the click of a button.",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Top 20 UI Inspiration Sites (2023)",
    description: "We've collated the top 20 UI inspiration sites, all with links in one handy spot! Find your inspiration for your next project.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "How to add a countdown timer to Framer",
    description: "Learn how to add a beautiful countdown to your Framer project. Add it to your project in seconds",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
  },
];

export function BlogCards() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}