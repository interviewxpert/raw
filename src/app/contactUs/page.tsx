import Header from '@/components/Header'
import React from 'react'
import { FaUserClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'

export default function Contact() {
  return (
    <>
     <Header/>
     <div>
        <div className='flex flex-col justify-center items-center pt-[80px] pb-[80px]]'>
        <div className='flex flex-col items-center justify-center  bg-cover bg-center w-full  h-[400px]'
     
        >
        <div className='flex flex-col items-center justify-center w-full h-full '
         style={{ backgroundImage: `url('/images/background.png')`,
          backgroundSize: 'cover',

         }}
        >
          <div className='text-center bg-gradient-to-r from-purple-400 to-red-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700
            text-white py-[1px] px-[12px] tracking-wide uppercase font-bold text-[20px]  rounded-lg'>
            Contact us
          </div>
          <div className='mt-[10px]'>
          <h1 className='text-4xl text-[#ff3d3d] p-2 text-center tracking-wide font-bold'>InterviewXpert</h1>
          </div>
          <div className='flex justify-center text-center mt-[10px] md:w-[700px]'>
            <p className='text-center text-black font-[400] text-xl'>
            Are you try to practice for the interview please use our Product            </p>
          </div>
        </div>
        </div>
        <div  className='px-[20px]'>
          <div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full '>
          <div className='flex flex-col flex-1 xl:flex-row gap-[50px] '>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700 hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#FF002A 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <FaLocationDot size={40} color='#8713ec '/>
              </div>
              <div className='flex flex-col hover:text-white  pl-3'>
                <p className='text-[#5056fc] hover:text-white text-[16px]'>Location...</p>
              </div>
              <div className='font-semibold tracking-wide text-[20px]'>
                <p>Visit Us At</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700 hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#FF002A 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-9'>
                <MdCall size={40} color='#8713ec '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#5056fc] hover:text-white  text-[16px] ml-3'>Phone Number</p>
              </div>
              <div className='font-semibold tracking-wide text-[16px] '>
                <p>+92 3202031783</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700 hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#FF002A 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <IoMail size={40} color='#8713ec '/>
              </div>
              <div className='flex flex-col pl-6'>
                <p className='text-[#5056fc] hover:text-white text-[16px]'>EMAIL</p>
              </div>
              <div className='font-bold tracking-wide text-[12px]  '>
                <p>teaminterview <br /> xpert@gmail.com</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700 hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#FF002A 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <FaUserClock size={40} color='#8713ec '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#48AFDE] hover:text-white  text-[16px]'>Opening timing</p>
              </div>
              <div className='font-semibold tracking-wide text-[20px] pl-6'>
                <p>24/7</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>

    <section className="text-gray-600 body-font relative">
  <form action="https://formspree.io/f/xrbbnqjk"
  method="POST">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">we are here to solve your problem</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto bg-gradient-to-r from-purple-400 to-red-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700
            text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Button</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">teaminterviewxpert@gmail.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>
      
    </div>
    </>
  
  )
}
