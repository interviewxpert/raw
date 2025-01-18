import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import logo from '@/../public/logo.png'
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="">
           <Link href={'/'}>
           <Image src={logo} height={150} width={150} alt='logo'/>
           </Link>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 bg-gradient-to-r from-blue-400 to-red-600 p-3 rounded-lg ">
          <a href="#" className="hover:text-gray-600 text-white">Discover</a>
          <a href="#" className="hover:text-gray-600 text-white">Our Story</a>
          <a href="/team" className="hover:text-gray-600 text-white">Who We Are</a>
          <a href="#" className="hover:text-gray-600 text-white">Say Hello</a>
          <a href="#" className="hover:text-gray-600 text-white">Reach Out</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="outline-gradient-button border border-red-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-600 text-[#4361ee] hover:text-white">Get Started</Button>
          <Button className="gradient-button bg-gradient-to-r from-purple-400 to-red-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700
            text-white">Try the Xpert</Button>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
