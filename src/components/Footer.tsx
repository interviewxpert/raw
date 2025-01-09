"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footerLinks = {
    Company: ["About", "Features", "Works", "Career"],
    Help: ["Customer Support", "Wallet Details", "Terms & Conditions", "Privacy Policy"],
    "Extra Links": ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  };

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
              <span className="text-xl font-bold">FUAPE</span>
            </div>
            <p className="text-gray-600 text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Github className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-black text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* NFT Banner */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Get access to rare Ape NFTs</h3>
          <Button className="bg-gray-800 hover:bg-gray-700">
            Collect on Opensea
          </Button>
        </div>
      </div>
    </footer>
  );
}