"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowRight, Sparkles } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen "
    style={{ backgroundImage: `url('/images/background.png')`,
      backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mt-10 mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-red-800 via-red-400 to-purple-700 text-transparent bg-clip-text">Meet Our Team</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[#a353dc]">The brilliant minds behind our success</span>
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="relative group hover:bg-gradient-to-r from-blue-400 to-red-600 rounded-md "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-square overflow-hidden">
              <Image
  src="/images/hasnain.png"
  alt="Hasnain"
  width={400}
  height={400}
  className="object-cover transition-transform duration-300 group-hover:scale-110"
  priority
/>

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold text-gradient-to-r from-primary to-blue-600">Hasnain Saleem</h3>
                  <p className="text-sm text-gray-300">Lead Designer | UI developer</p>
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Passionate about creating intuitive user experiences and beautiful interfaces.
                  </p>
                  <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <Link href="#" className="hover:text-blue-400">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-blue-600">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-gray-400">
                      <GithubIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="relative group hover:bg-gradient-to-r from-blue-400 to-red-600 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-square overflow-hidden">
              <Image
  src="/images/laraib.png"
  alt="Laraib"
  width={400}
  height={400}
  className="object-cover transition-transform duration-300 group-hover:scale-110"
  priority
/>

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Muhammad Laraib</h3>
                  <p className="text-sm text-gray-300">Lead Developer | Project Manager</p>
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Frontend developer with expertise in Next.JS | TypeScript | Tailwind
                  </p>
                  <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <Link href="#" className="hover:text-blue-400">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-blue-600">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-gray-400">
                      <GithubIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="relative group hover:bg-gradient-to-r from-blue-400 to-red-600 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-square overflow-hidden">
              <Image
  src="/images/anas.png"
  alt="Anas"
  width={500}
  height={450}
  className="object-fill transition-transform duration-300 group-hover:scale-110"
  priority
/>

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold text-[#fffb]">Muhammad Anas</h3>
                  <p className="text-sm text-gray-300">Backend Developer</p>
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Full Stack Developer |Specialist | Building Scalable Web Solutions
                  </p>
                  <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <Link href="#" className="hover:text-blue-400">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-blue-600">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-gray-400">
                      <GithubIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="relative group hover:bg-gradient-to-r from-blue-400 to-red-600 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-square overflow-hidden">
              <Image
  src="/images/nathan.png"
  alt="Hasnain"
  width={400}
  height={400}
  className="object-cover transition-transform duration-300 group-hover:scale-110"
  priority
/>

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Nathan Asif</h3>
                  <p className="text-sm text-gray-300">Lead Engineer | AI, Simulation</p>
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Specialist, focusing and Crafting High-Performance,, and Backend Developer.
                  </p>
                  <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <Link href="#" className="hover:text-blue-400">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-blue-600">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-gray-400">
                      <GithubIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    {/* Collaboration CTA Section */}
<motion.div 
  className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 to-red-700">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
    <div className="relative px-8 py-16 md:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Let&apos;s discuss make
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          something <span className="text-blue-500">cool</span> together
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Have an idea? We&apos;d love to hear about it. Let&apos;s transform your vision into reality.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Apply for Meeting
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8">
        <Sparkles className="w-6 h-6 text-blue-500 opacity-50" />
      </div>
      <div className="absolute bottom-8 right-8">
        <Sparkles className="w-6 h-6 text-blue-500 opacity-50" />
      </div>
    </div>
  </div>
</motion.div>
          </div>

    </>
  );
}
