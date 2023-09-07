
"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/Frontend.webp";
import Link from "next/link";
import curriculum from "../public/curriculum.svg";
import HTML from "../public/HTML.svg";
import CSS from "../public/css.svg";
import JS from "../public/Javascript.png";

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
      {/* Learn about the internet */}
      <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="curriculum2" src={curriculum} className="w-[500px] mx-auto my-4" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>The Internet</h1>
          <p className='text-md'>Lets start with the basics of the internet. by clicking the buttons below, you will learn: How the internet works, what is HTTP, what is a domain name, what is hosting, what is DNS/how it works and how browsers work.</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://cs.fyi/guide/how-does-internet-work" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Internet
    </button>
  </a>
  <a href="https://cs.fyi/guide/http-in-depth" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      HTTP
    </button>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Domain Names 
    </button>
  </a>
</div>
<div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=htbY9-yggB0" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Hosting
    </button>
  </a>
  <a href="https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      DNS
    </button>
  </a>
  <a href="https://web.dev/howbrowserswork/" className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Browsers
    </button>
  </a>
</div>
          </div>
          </div>
          {/* Learn about HTML */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="HTML2" src={HTML} className="w-[500px] mx-auto my-4" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>HTML</h1>
          <p className='text-md'>HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.w3schools.com/html/html_intro.asp" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      HTML Basics
    </button>
  </a>
  <a href="https://cs.fyi/guide/writing-semantic-html" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Semantic HTML
    </button>
  </a>
  <a href="https://www.w3schools.com/js/js_validation.asp" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Forms/Validations
    </button>
  </a>
</div>
<div className="flex flex-wrap justify-center">
  <a href="https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Accessibility
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=xsVTqzratPs" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      SEO Basics
    </button>
  </a>
  <a href="https://htmlcheatsheet.com/" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      HTML Cheatsheet
    </button>
  </a>
  
</div>
          </div>
          </div>
          {/* Learn about CSS */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={CSS} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS</h1>
          <p className='text-md'>CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://web.dev/learn/css/" className="mx-2 my-2">
    <button className="bg-white w-[200px] rounded-md font-medium py-3 text-blue-600">
      CSS Basics
    </button>
  </a>
  <a href="https://www.simplilearn.com/tutorials/css-tutorial/css-grid-vs-flexbox" className="mx-2 my-2">
    <button className="bg-white w-[200px] rounded-md font-medium py-3 text-blue-600">
      Making Layouts
    </button>
  </a>
  <a href="https://kinsta.com/blog/responsive-web-design/" className="mx-2 my-2">
    <button className="bg-white w-[200px] rounded-md font-medium py-3 text-blue-600">
      Responsive Web Design
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about JS */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={JS} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Javascript</h1>
          <p className='text-md'>JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://javascript.info/" className="mx-2 my-2">
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      JS Basics
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=0ik6X4DJKCc" className="mx-2 my-2">
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      DOM Manipulation
    </button>
  </a>
  <a href="https://www.javascripttutorial.net/javascript-fetch-api/" className="mx-2 my-2">
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      Fetch API
    </button>
  </a>
</div>

          </div>
          </div>
    </main>
);
}