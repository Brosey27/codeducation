
"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/Frontend.webp";
import Link from "next/link";
import curriculum from "../public/curriculum.svg";

export default function Home() {
const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <main>
      {/* Nav */}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-2xl font-bold text-purple-300">Codeducation.</h1>
        <ul className="hidden md:flex">
          <a href="#">
            <li className="p-4">Home</li>
          </a>
          <a href="#">
            <li className="p-4">Company</li>
          </a>
          <a href="#">
            <li className="p-4">Resources</li>
          </a>
          <a href="#">
            <li className="p-4">About</li>
          </a>
          <a href="#">
            <li className="p-4">Contact</li>
          </a>
        </ul>
        <div onClick={handleNav} className="block">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            !nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-2xl font-bold text-purple-300 m-4">Codeducation.</h1>
          <ul className="uppercase p-4">
            <a href="#">
              <li className="p-4 border-b border-gray-600">Home</li>
            </a>
            <a href="#">
              <li className="p-4 border-b border-gray-600">Company</li>
            </a>
            <a href="#">
              <li className="p-4 border-b border-gray-600">Resources</li>
            </a>
            <a href="#">
              <li className="p-4 border-b border-gray-600">About</li>
            </a>
            <a href="#">
              <li className="p-4">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      {/* Hero */}
      <div className="text-white">
          <div className="maxw-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className='text-gra-300 md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>A Guide to Front-End Development</h1>
        <p className='md:text-2xl sm:text-4xl text-xl font-bold py-4'>This guide will take you through each aspect of front-end development.</p>
        <Image alt="aboutimage" src={frontend} className='w-[300px] mx-auto my-4' />
      </div>
      </div>
      {/* Curriculum */}
      <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          <h1 className='text-gra-300 md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>Curriculum</h1>
          <Link href="/curriculum">
  
    <Image alt="curriculum2" src={curriculum} className="w-[500px] mx-auto my-4" />
  
</Link>
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>The Internet</h1>
          <p className='text-md'>Lets start with the basics of the internet. by clicking the image above, you will learn: How the internet works, what is HTTP, what is a domain name, what is hosting, what is DNS/how it works and how browsers work.</p>
          </div>
          </div>
    </main>
);
}