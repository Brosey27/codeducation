
"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/frontend.svg";
import Link from "next/link";
import curriculum from "../public/curriculum.svg";
import HTML from "../public/HTML.webp";
import CSS from "../public/CSS.png";
import JS from "../public/Javascript.png";
import GIT from "../public/git.png";
import PM from  "../public/packagemanager.svg";
import FRAMEWORKS from "../public/frameworks.png";
import CSSFRAME from "../public/cssframe.png";
import CSSPRE from "../public/csspre.svg";
import TYPE from "../public/type.svg";
import SSR from "../public/SSR.png";
import QL from "../public/graphql.webp";
import PERFORM from "../public/performance.svg";

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
       
        <div
        className={`fixed top-0 right-0 z-50 p-4 cursor-pointer ${
          !nav ? "bg-[#000300]" : "" // Add background color if needed
        }`}
        onClick={handleNav}
      >
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
          <a href="#internet">
              <li className="p-4 border-b border-gray-600">Internet</li>
            </a>
            <a href="#HTML">
              <li className="p-4 border-b border-gray-600">HTML</li>
            </a>
            <a href="#CSS">
              <li className="p-4 border-b border-gray-600">CSS</li>
            </a>
            <a href="#JAVA">
              <li className="p-4 border-b border-gray-600">JavaScript</li>
            </a>
            <a href="#GIT">
              <li className="p-4 border-b border-gray-600">Git/GitHub</li>
            </a>
            <a href="#PM">
              <li className="p-4 border-b border-gray-600">Package Managers</li>
            </a>
            <a href="#FRAME">
              <li className="p-4 border-b border-gray-600">Frameworks</li>
            </a>
            <a href="#CSSFRAME">
              <li className="p-4 border-b border-gray-600">CSS Framworks</li>
            </a>
            <a href="#CSSPRE">
              <li className="p-4 border-b border-gray-600">CSS Preprocessors</li>
            </a>
            <a href="#TYPE">
              <li className="p-4 border-b border-gray-600">Type Checkers</li>
            </a>
            <a href="#SSR">
              <li className="p-4 border-b border-gray-600">SSR</li>
            </a>
            <a href="#GRAPH">
              <li className="p-4 border-b border-gray-600">GraphQL</li>
            </a>
            <a href="#PBP">
              <li className="p-4">PBP's</li>
            </a>
          </ul>
        </div>
      </div>
      {/* Hero */}
      <div className="text-white">
          <div className="maxw-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className='text-gra-300 md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>A Guide to Front-End Development</h1>
        <p className='md:text-2xl sm:text-4xl text-xl font-bold py-4'>This guide will take you through each aspect of front-end development in order.</p>
        <Image alt="aboutimage" src={frontend} className='w-[500px] mx-auto my-4' />
      </div>
      </div>

      {/* Curriculum */}
      <div className="">
      {/* Learn about the internet */}
      <div id="internet" className="text-white mt-[-150px] mb-9">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image alt="curriculum2" src={curriculum} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl lg:text-4xl text-2xl font-bold md:py-6'>The Internet</h1>
          <p className='text-md max-w-lg mx-auto '>Lets start with the basics of the internet. by clicking the buttons below, you will learn: How the internet works, what is HTTP, what is a domain name, what is hosting, what is DNS/how it works and how browsers work.</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://cs.fyi/guide/how-does-internet-work" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Internet
    </button>
  </a>
  <a href="https://cs.fyi/guide/http-in-depth" target="_blank" className="mx-2 my-2">
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
  <a href="https://www.youtube.com/watch?v=htbY9-yggB0" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Hosting
    </button>
  </a>
  <a href="https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      DNS
    </button>
  </a>
  <a href="https://web.dev/howbrowserswork/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-400 w-[200px] rounded-md font-medium py-3 text-white">
      Browsers
    </button>
  </a>
</div>
          </div>
          </div>
          {/* Learn about HTML */}
          <div className="text-white mt-[-50px] mb-11">
          <div  className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="HTML" alt="HTML2" src={HTML} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>HTML</h1>
          <p className='text-md max-w-lg mx-auto'>HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      HTML Basics
    </button>
  </a>
  <a href="https://cs.fyi/guide/writing-semantic-html" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Semantic HTML
    </button>
  </a>
  <a href="https://www.w3schools.com/js/js_validation.asp" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Forms/Validations
    </button>
  </a>
</div>
<div className="flex flex-wrap justify-center">
  <a target="_blank"  href="https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/" className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Accessibility
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=xsVTqzratPs" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      SEO Basics
    </button>
  </a>
  <a href="https://htmlcheatsheet.com/" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      HTML Cheatsheet
    </button>
  </a>
  
</div>
          </div>
          </div>
          {/* Learn about CSS */}
          <div  className="text-white mt-[-50px] mb-9">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="CSS" alt="CSS2" src={CSS} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS</h1>
          <p className='text-md max-w-lg mx-auto'>CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://web.dev/learn/css/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-500 w-[200px] rounded-md font-medium py-3 text-white">
      CSS Basics
    </button>
  </a>
  <a href="https://www.simplilearn.com/tutorials/css-tutorial/css-grid-vs-flexbox" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-500 w-[200px] rounded-md font-medium py-3 text-white">
      Making Layouts
    </button>
  </a>
  <a href="https://kinsta.com/blog/responsive-web-design/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-500 w-[200px] rounded-md font-medium py-3 text-white">
      Responsive Web Design
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about JS */}
          <div  className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="JAVA" alt="CSS2" src={JS} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Javascript</h1>
          <p  className='text-md max-w-lg mx-auto'>JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://javascript.info/" target="_blank"  className="mx-2 my-2">
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      JS Basics
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=0ik6X4DJKCc" target="_blank"  className="mx-2 my-2">
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      DOM Manipulation
    </button>
  </a>
  <a href="https://www.javascripttutorial.net/javascript-fetch-api/" target="_blank"  className="mx-2 my-2">
    <button  className="bg-yellow-500 w-[200px] rounded-md font-medium py-3 text-white">
      Fetch API
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about git/github */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="GIT" alt="CSS2" src={GIT} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Git/GitHub</h1>
          <p  className='text-md max-w-lg mx-auto'>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" target="_blank"  className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git/GitHub basics
    </button>
  </a>
  <a href="https://www.atlassian.com/git" target="_blank"  className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git Tutorials
    </button>
  </a>
  <a href="https://cs.fyi/guide/git-cheatsheet" target="_blank"  className="mx-2 my-2">
    <button className="bg-purple-500 w-[200px] rounded-md font-medium py-3 text-white">
      Git Cheatsheet
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about Package Managers */}
          <div  className="text-white mt-[-50px]">
          <div id="PM"   className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image  alt="CSS2" src={PM} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Package Managers</h1>
          <p className='text-md max-w-lg mx-auto'>Package managers allow you to manage the dependencies that allow your project to work correctly.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/" target="_blank"  className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      NPM
    </button>
  </a>
  <a href="https://blog.bitsrc.io/pnpm-javascript-package-manager-4b5abd59dc9" target="_blank"  className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      PNPM
    </button>
  </a>
  <a href="https://classic.yarnpkg.com/en/docs/getting-started" target="_blank"  className="mx-2 my-2">
    <button className="bg-green-500 w-[200px] rounded-md font-medium py-3 text-white">
      YARN
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about Frameworks */}
          <div className="text-white mt-[-50px]">
          <div   className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="FRAME"  alt="CSS2" src={FRAMEWORKS} className="w-[500px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Frameworks</h1>
          <p className='text-md max-w-lg mx-auto'>Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website. Frameworks for web application development are collections of various tools. Frameworks vary in their capabilities and functions, depending on the tasks set. They define the structure, establish the rules, and provide the development tools required.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://egghead.io/courses/the-beginner-s-guide-to-react" target="_blank"  className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      React
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=FXpIoQ_rT_c" target="_blank"  className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      Vue.js
    </button>
  </a>
  <a href="https://angular.io/start" target="_blank"  className="mx-2 my-2">
    <button className="bg-lime-500 w-[200px] rounded-md font-medium py-3 text-white">
      Angular
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn about CSS Frameworks */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="CSSFRAME" alt="CSS2" src={CSSFRAME} className="w-[500px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS Frameworks</h1>
          <p className='text-md max-w-lg mx-auto'>The way we write CSS in our modern front-end applications is completely different from how we used to write CSS before. There are methods such as Styled Components, CSS Modules, Styled JSX, Emotion, etc.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=lCxcTsOHrjo" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Tailwind CSS
    </button>
  </a>
  <a href="https://www.radix-ui.com/primitives/docs/overview/introduction" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Radix UI
    </button>
  </a>
  <a href="https://ui.shadcn.com/" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-500 w-[200px] rounded-md font-medium py-3 text-white">
      Shadcn UI
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn CSS Preprocessors */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="CSSPRE" alt="CSS2" src={CSSPRE} className="w-[500px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>CSS Preprocessors</h1>
          <p className='text-md max-w-lg mx-auto'>CSS Preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.freecodecamp.org/news/css-preprocessors/" target="_blank"  className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Preprocessor Basics
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank"  className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      Sass Basics
    </button>
  </a>
  <a href="https://postcss.org/" target="_blank"  className="mx-2 my-2">
    <button className="bg-violet-500 w-[200px] rounded-md font-medium py-3 text-white">
      PostCSS
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn Type Checkers */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="TYPE"  alt="CSS2" src={TYPE} className="w-[500px] mx-auto mt-96" />
          
          <h1 className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Type Checkers</h1>
          <p className='text-md max-w-lg mx-auto'>Type checker helps developers write code with fewer bugs by adding types to their code, trying to catch type errors within your code, and then removing them during compile time. Flow and TypeScript are two popular static type checkers for JavaScript however I recommend Typescript.</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.youtube.com/watch?v=BwuLxPH8IDs" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-500 w-[200px] rounded-md font-medium py-3 text-white">
      Typescript
    </button>
 </a>
</div>

          </div>
          </div>
          {/* Learn SSR */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="SSR" alt="CSS2" src={SSR} className="w-[500px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Server Side Rendering</h1>
          <p className='text-md max-w-lg mx-auto'>Server-side rendering refers to the process that the service side completes the HTML structure splicing of the page, sends it to the browser, and then binds the status and events for it to become a fully interactive page.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://www.educative.io/answers/what-is-server-side-rendering" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-800 w-[200px] rounded-md font-medium py-3 text-white">
      What is SSR?
    </button>
  </a>
  <a href="https://masteringnextjs.com/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-800 w-[200px] rounded-md font-medium py-3 text-white">
      Next.js
    </button>
  </a>
  <a href="https://remix.run/" target="_blank"  className="mx-2 my-2">
    <button className="bg-blue-800 w-[200px] rounded-md font-medium py-3 text-white">
      Remix
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn GraphQL */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="GRAPH" alt="CSS2" src={QL} className="w-[400px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>GraphQL</h1>
          <p className='text-md max-w-lg mx-auto'>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Visit the following resources to learn more:</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://graphql.org/learn/" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-700 w-[200px] rounded-md font-medium py-3 text-white">
      GraphQL Basics
    </button>
  </a>
  <a href="https://www.youtube.com/watch?v=YyUWW04HwKY" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-700 w-[200px] rounded-md font-medium py-3 text-white">
      Apollo
    </button>
  </a>
  <a href="https://relay.dev/docs/" target="_blank"  className="mx-2 my-2">
    <button className="bg-pink-700 w-[200px] rounded-md font-medium py-3 text-white">
      Relay
    </button>
  </a>
</div>

          </div>
          </div>
          {/* Learn Progressive web Apps */}
          <div className="text-white mt-[-50px]">
          <div className="maxw-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            
          
         
              <Image id="PBP" alt="HTML2" src={PERFORM} className="w-[500px] mx-auto mt-96" />
          
          <h1  className=' md:text-3xl sm:text-2xl text-2xl font-bold md:py-6'>Performance Best Practices</h1>
          <p className='text-md max-w-lg mx-auto'>Use these resources to calculate, measure and improve your websites performance:
</p>
          <div className="flex flex-wrap justify-center">
  <a href="https://roadmap.sh/best-practices/frontend-performance" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Performance Basics
    </button>
  </a>
  <a href="https://developer.chrome.com/docs/devtools/" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      DevTools
    </button>
  </a>
  <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Lighthouse
    </button>
  </a>
</div>
<div className="flex flex-wrap justify-center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Performance" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      Performance Metrics
    </button>
  </a>
  <a href="https://web.dev/rail/" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      RAIL Model
    </button>
  </a>
  <a href="https://web.dev/apply-instant-loading-with-prpl/" target="_blank"  className="mx-2 my-2">
    <button className="bg-orange-500 w-[200px] rounded-md font-medium py-3 text-white">
      PRPL Pattern
    </button>
  </a>
  </div>
</div>
          </div>
          </div>
    </main>
);
}