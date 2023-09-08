
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
import GIT from "../public/git.png";
import PM from  "../public/packagemanager.svg";
import FRAMEWORKS from "../public/frameworks.png";
import CSSFRAME from "../public/cssframe.png";
import CSSPRE from "../public/csspre.svg";
import TYPE from "../public/type.svg";
import SSR from "../public/SSR.png";

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
          {/* Learn about git/github */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={GIT} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Git/GitHub</h1>
          <p className='text-md'>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git/GitHub basics
    </button>
  </a>
  <a href="https://www.atlassian.com/git" className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git Tutorials
    </button>
  </a>
  <a href="https://cs.fyi/guide/git-cheatsheet" className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git Cheatsheet
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about Package Managers */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={PM} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Package Managers</h1>
          <p className='text-md'>Package managers allow you to manage the dependencies that allow your project to work correctly.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/" className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      NPM
    </button>
  </a>
  <a href="https://blog.bitsrc.io/pnpm-javascript-package-manager-4b5abd59dc9" className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      PNPM
    </button>
  </a>
  <a href="https://classic.yarnpkg.com/en/docs/getting-started" className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      YARN
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about Frameworks */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={FRAMEWORKS} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Frameworks</h1>
          <p className='text-md'>Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website. Frameworks for web application development are collections of various tools. Frameworks vary in their capabilities and functions, depending on the tasks set. They define the structure, establish the rules, and provide the development tools required.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://egghead.io/courses/the-beginner-s-guide-to-react" className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      React
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=FXpIoQ_rT_c" className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      Vue.js
    </button>
  </a>
  <a href="https://angular.io/start" className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      Angular
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about CSS Frameworks */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={CSSFRAME} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS Frameworks</h1>
          <p className='text-md'>The way we write CSS in our modern front-end applications is completely different from how we used to write CSS before. There are methods such as Styled Components, CSS Modules, Styled JSX, Emotion, etc.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=lCxcTsOHrjo" className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Tailwind CSS
    </button>
  </a>
  <a href="https://www.radix-ui.com/primitives/docs/overview/introduction" className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Radix UI
    </button>
  </a>
  <a href="https://ui.shadcn.com/" className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Shadcn UI
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn CSS Preprocessors */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={CSSPRE} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS Preprocessors</h1>
          <p className='text-md'>CSS Preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.freecodecamp.org/news/css-preprocessors/" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Preprocessor Basics
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=_a5j7KoflTs" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Sass Basics
    </button>
  </a>
  <a href="https://postcss.org/" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      PostCSS
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn Type Checkers */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={TYPE} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Type Checkers</h1>
          <p className='text-md'>Type checker helps developers write code with fewer bugs by adding types to their code, trying to catch type errors within your code, and then removing them during compile time. Flow and TypeScript are two popular static type checkers for JavaScript however I recommend Typescript.</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=BwuLxPH8IDs" className="mx-2 my-2">
    <button className="bg-blue-500 w-[200px] rounded-md font-medium py-3 text-white">
      Typescript
    </button>
 </a>
</div>

          </div>
          </div>
          {/* Learn SSR */}
          <div className="text-white mt-[-150px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="CSS2" src={SSR} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Server Side Rendering or SSR</h1>
          <p className='text-md'>Server-side rendering refers to the process that the service side completes the HTML structure splicing of the page, sends it to the browser, and then binds the status and events for it to become a fully interactive page.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.educative.io/answers/what-is-server-side-rendering" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      What is SSR?
    </button>
  </a>
  <a href="https://masteringnextjs.com/" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Next.js
    </button>
  </a>
  <a href="https://remix.run/" className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Remix
    </button>
  </a>
</div>

          </div>
          </div>
    </main>
);
}