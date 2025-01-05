"use client"
 import React from 'react'
import Link from 'next/link'
import { useState } from "react";

function Home() {
  // State to control visibility of the content
  const [isContentVisible, setIsContentVisible ] = useState(false);
  const [showCards, setShowCards] = useState(false);
  // Toggle function for showing/hiding content
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
   // Function to toggle card visibility
   const toggleCardsVisibility = () => setShowCards(!showCards);


  return (
    <main>
      {/**div-one */}
      <div className="div-one">
         <h1 className='text-center mt-[5rem] text-blue-950 font-semibold  font-sans text-clip hover:text-amber-900  text-lg sm:text-2xl lg:text-6xl  '>How To Become a Freelance <br /> Web Developer in <br />  2025</h1>
         </div>
               {/**div-two */}

<div className="div-two flex mt-[5rem]   flex-col sm:flex-row  sm:mt-32 justify-evenly">
  <p className='mt-[0.5rem]   text-balance leading-loose font-sans text-slate-500 font-semibold     text-center sm:text-left sm:mt-2   sm:w-1/2 lg:w-1/3 '>Learn how to start your career as a freelance web developer 
    <br /> and get insights that will help you get started. <br />
   Being a freelance web developer can give you more flexibility  and <br />
    greater control over your career. You can choose whether you want  <br />
     to do front-end, back-end, or full-stack web development and the  <br />
      types of projects you want to specialize in. Instead of working <br />
      full-time for one employer, you can work directly with individual  <br />clients and enjoy the  
     perks of being self-employed.
     <br />
      </p>
<img src="https://media.licdn.com/dms/image/v2/C5612AQGYxQzWge8t0g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1623349255827?e=2147483647&v=beta&t=Nuxa2T_gZZUmm8BSPbM7rd_iBVsHqSfR3W-wdrZfWbs"
           alt=" main image " className='h-[15rem] w-[35rem]   text-left rounded-md mt-5  sm:h-80 lg:h-96   sm:[30rem]  sm:w-[40rem] ' />

</div>
      {/**div-three */}
<div className="div-three">
  <h1 className='text-[1.5rem] font-bold font-serif text-gray-800 ml-[5rem] mt-[3rem]'> Related Articals</h1>
  
    <ul className='flex flex-col sm:flex-row mt-5 justify-center   gap-8 '>
   <li className=' h-[4rem]   p-4  pl-10 sm:p-6 sm:pl-10  text-[0.8rem] rounded-[1rem] w-[20rem]  sm:w-[28rem]  hover:bg-slate-400 hover:text-black cursor-pointer bg-slate-100 text-blue-950 font-semibold ' > <Link href="https://www.upwork.com/resources/most-common-software-development-methodologies">8 Most Common Software Development Methodologies</Link></li>
   <li className=' h-[4rem] p-4    pl-10 sm:p-6 sm:pl-10  w-[20rem]  sm:w-[28rem] text-[0.8rem] rounded-[1rem] cursor-pointer hover:bg-slate-400 hover:text-black bg-slate-100 text-blue-950 font-semibold '> <Link href="https://www.upwork.com/resources/web-design-vs-web-development">Web Design and Web Development: Meanings and Differences</Link></li>
</ul>
  
</div>
      {/**div-four */}


<div className="div-four text-gray-500 font-semibold text-[1rem] font-sans ml-[2rem] mt-[3rem] sm:mt-10 sm:w-full w-[15rem] ">
   <p>Here are some steps to kickstart your career as a freelance web developer.</p>
   <div className='flex flex-col md:flex-row gap-[5rem]'>
{/**table of content */}

<div className="table w-[13rem] mt-[6rem]  ">
  <h1 className='text-blue-950 font-serif font-semibold hover:text-cyan-600  hover:font-extralight '>Table Of Content</h1>
  <ol className='leading-[2rem]  mt-[2rem] text-gray-700 '>
<Link href=""><li className='hover:text-cyan-700'> 1.Define Your Skills</li></Link>
<Link href=""> <li className='hover:text-cyan-700'> 2. Fill your skills gaps and enhance your education</li></Link>
<Link href=""><li className='hover:text-cyan-700'> 3. Find helpful tools</li></Link>
<Link href=""><li className='hover:text-cyan-700'>4. Create your business plan</li></Link>
<Link href=""><li className='hover:text-cyan-700'> 5. Build your portfolio</li></Link>
<Link href=""><li className='hover:text-cyan-700'>6. Conduct market research</li></Link>
<Link href=""><li className='hover:text-cyan-700'> 7. Apply for jobs</li></Link>

  </ol>
</div>
    <div className=''>
<h1 className='text-[2rem] font-bold font-serif text-blue-950 mt-[5rem]
 hover:text-cyan-600 hover:translate-x-2  hover:font-extralight'> <Link href="./rout-1">1. Define your skills</Link></h1>
<p className=" text-gray-700 text-sm text-blance">
        The best place to start is a skills audit. Write down a list of all the skills <br />
         you currently have and the ones you dont like to develop. Define what you  <br />know, what 
          you dont know, and what you are best at (and enjoy) doing. <br /> Think about your career 
         goals and what your dream workweek looks like. <br />
        Knowing your strengths and weaknesses can help you choose projects <br />
         that will strengthen your portfolio and reputation. <br /> A successful
          freelance web development career is built on <br />
           positioning yourself 
           as a skilled professional and backing it up with positive <br /> client 
            reviews and work samples. This helps to establish trust with new clients. <br />
        To help evaluate your skills and decide if freelancing as a web developer <br />
         is the right career path for you, ask yourself these questions:
      </p>

      {/* Toggle button */}
      <button
        onClick={toggleContent}
        className="mt-[2rem] text-blue-200  focus:outline-double rounded-2xl
         hover:text-slate-200 hover:bg-cyan-900 bg-blue-950 w-[8rem] h-[2rem]
          focus:ring-2 focus:ring-slate-100  focus:ring-opacity-50"
      >
        {isContentVisible ? "Show Less" : "Learn More"}
      </button>

      {/* Conditionally rendered content */}
      {isContentVisible && (
        <div className="mt-10 space-y-2 text-gray-600  ml-[10rem]  ">
          <ul className='text-sm font-sans font-semibold text-slate-700 text-balance leading-loose'>
          <li>What programming languages do you prefer working in?</li>
          <li>What type of projects do you have experience working in?</li>
          <li>What aspects of web development do you struggle with the most?</li>
          <li>Do you want to work in an office?</li>
          <li>Could you see yourself in a client-facing role?</li>
          <li>Do you like working independently?</li>
          <li>Do you mind doing administrative tasks like invoicing?</li>
          <li>Would you be comfortable pitching your services to clients?</li>
          </ul>
        </div>
              )}
</div>

{/*** its for image */}

<div className="image">
  <img src="freelancer.jpg" alt=" its  picture of skill section"
  className='h-[25rem] w-[40rem] sm:[30rem] mt-[5rem]'
  />
</div>

</div>


{/**its a content-heading-2 */}
<div >

{/**for content */}
<div className="cont sm:ml-[10rem] ml-0 sm:w-[60rem] w-fit  ">
<h1 className='text-[2rem] font-bold font-serif text-blue-950 mt-[5rem] hover:text-cyan-600 
hover:translate-x-2  hover:font-extralight '><Link href="./rout-2"> 2. Fill your skills gaps and enhance your education</Link>
</h1>
<p className="  text-[1rem] text-black ml-[1rem] sm:text-balance sm:ml[5rem]  mt-[1rem] text-balane">
You can take web development courses online and earn certificates in specific  
languages or other <br /> elements of web development. Here are a few examples:
</p>
<ul className='font-sans  '>
 <Link href="/"><li className='text-[1rem] text-cyan-800 font-semibold sm:ml-[8rem] ml-[1rem]  mt-[1rem] hover:text-yellow-600'>
   . Web Design for Everybody: Basics of Web Development & Coding Specialization</li></Link>
  <Link href="/"><li className='text-[1rem] text-cyan-800 font-semibold sm:ml-[8rem] ml-[1rem] sm:mt-[1rem] mt-[1rem]  hover:text-yellow-600 '>
  . The Complete 2024 Web Development Bootcamp</li></Link><Link href="/">
  <li className='text-[1rem] text-cyan-800 font-semibold   hover:text-yellow-600 sm:ml-[8rem] ml-[1rem] sm:mt-[1rem] mt-[1rem]  '>
 . IBM: Introduction to Web Development with HTML5, CSS3, and JavaScript</li></Link><Link href="/">
  <li className='text-[1rem] text-cyan-800 font-semibold   hover:text-yellow-600 sm:ml-[8rem] ml-[1rem] sm:mt-[1rem] mt-[1rem] '>
  . Codeacademy s Learn HTML</li></Link>
  

</ul>


<p className="mt-10 space-y-2  text-black ">
Many websites use WordPress, which can also be a good foundational platform to learn. The growth in e-commerce <br />
 may make Shopify a valuable system to understand as well. Make sure you have the basics down and then look at <br />
  more complex areas of specialization, such as Node.js or Ruby on Rail
</p>

</div>
<div className="main sm:flex w-[80rem] mt-[5rem] flex-wrap gap-5">
      
      {/** Other content above **/}

      {/* Toggle Button before the six cards */}
      <div className="w-full text-center mt-[2rem]">
        <button
          onClick={toggleCardsVisibility}
          className="text-slate-100  w-[8rem] h-[2.5rem] hover:text-slate-200 hover:bg-cyan-900 rounded-[2rem] bg-blue-950 font-medium"
        >
          {showCards ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Six Cards */}
      {showCards && (
        <div className="flex flex-wrap gap-5 mt-[2rem]">
          
          {/* div-one */}
          <div className="bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit sm:w-fit sm:h-fit sm:ml-0 ml-0 text-center">
            <h1 className="text-[1.8rem] font-bold font-serif text-blue-900 hover:text-cyan-700 ml-[2rem] mt-[3rem] items-center">
              <Link href={"./rout-3"}> 3 . Find helpful tools </Link>
            </h1>
            <p className="text-[1rem] text-gray-800 font-sans mt-[5rem] font-light ml-[3rem] w-[20rem]">
              Think about what tools you need to be successful as a freelancer. <br />
              If you work directly with your clients rather <br /> than on a platform like  <br />
              Upwork, you can avoid paying service fees (Upwork is a flat 10%),  <br />
              <img src="picture-4.jpg" alt="picture of content " className="w-[18rem] mt-5 rounded-md mb-5 " />
              <span className="text-gray-500">
                Below, we cover some tools you could incorporate into your <br />
                freelance business to streamline your workflow.
              </span> <br />
              <Link href="" className="text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium">Project management</Link><br />
              <Link href="" className="text-blue-500 font-sans cursor-pointer font-medium">Time tracking</Link><br />
              <Link href="" className="text-blue-500 font-sans cursor-pointer font-medium">Mockups</Link><br />
              <Link href="" className="text-blue-500 font-sans cursor-pointer font-medium">AI</Link><br />
            </p>
          </div>

          {/* div-four */}
          <div className="bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit">
            <h1 className="text-[1.8rem] font-bold font-serif text-blue-900 ml-[0.5rem] mt-[3rem] hover:text-cyan-700">
              <Link href={"./rout-4"}>4. Create your business <br /><span className="ml-[8rem]">Plan</span></Link>
            </h1>
            <p className="text-[1rem] leading-loose text-gray-800 font-sans mt-[2rem] font-light ml-[3rem] w-[20rem]">
              <span className="font-medium text-cyan-800">Being a freelancer </span>is owning your own business, so you get 
              to choose which projects you say yes to and often what hours you work. You are self-employed and responsible 
              <img src="picture.jpg" alt="picture of content " className="w-[18rem] h-[12rem] mt-5 rounded-md mb-5 " />
              for everything from finding clients to paying taxes. Creating your business plan is integral to becoming a 
              freelance web developer.
              Your business plan helps you outline what services you wll offer as a developer and how you plan to find your clients.
            </p>
          </div>

          {/* Other Divs */}
          <div className="bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit">
            <h1 className="text-[1.8rem] font-bold font-serif text-blue-900 hover:text-cyan-800 ml-[1rem] mt-[2.5rem] items-center">
              <Link href="./rout-5"> 5. Build your portfolio</Link>
            </h1>
            <p className="text-[1rem] text-gray-500 font-sans mt-[5rem] ml-[3rem] w-[20rem] leading-loose">
              Once you have a solid business plan, it is time to <span className="text-cyan-800 font-medium">
                <Link href="/"> build your portfolio. </Link></span>
              This living collection highlights your projects and past work to show customers what you can do.
              <img src="picture-2.jpg" alt="picture of content " className="w-[18rem] mt-5 rounded-md mb-5 " />
              Portfolios are essential for any freelance business, especially web development, and help prospects 
              know that you can do the work they need. By reviewing past projects, clients can quickly get
               a feel for your work quality and style.
            </p>
          </div>

          
          {/**div-four */}
<div className='bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit '>
<h1 className='text-[1.8rem] font-bold font-serif text-blue-900 ml-[0.5rem] mt-[3rem] hover:text-cyan-700 '><Link href="">
6. Conduct market <br /><span className='ml-[4rem]'> research</span></Link> </h1>
<p className='text-[1rem] leading-loose text-gray-800 font-sans mt-[2rem] mb-[1.5rem] font-light ml-[3rem] w-[20rem] '>
Market research is key to establishing yourself in freelance web development. 
It helps you understand client needs, industry trends, and competitor 
strategies so you can stand out.
<img src="picture-6.jpg" alt="picture of content " className=' w-[18rem] mt-5 rounded-md mb-9 ' />

 Here is how to conduct market research effectively: 
<span className='text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium hover:text-cyan-800'> . Stay updated on trends</span><br />
  <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Analyze competitor portfolios</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium  hover:text-cyan-800'>   . Engage in online communities</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Network with other developers</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Survey potential clients.</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Conduct keyword research</span><br />

</p>
</div>
{/**div-five */}
<div className='bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit '>
<h1 className='text-[1.8rem] font-bold font-serif text-blue-900 ml-[2.5rem] mt-[3rem] hover:text-cyan-700 '><Link href="./rout-7">
7. Apply for jobs</Link>
</h1>
<p className='text-[1rem] leading-loose text-gray-800 font-sans mt-[4rem] mb-[4.5rem] font-light ml-[3rem] w-[20rem] '>
 Upwork is a great platform for building a freelance career in nearly any field,
  and web development is one of the top in-demand skills on the platform.
   On Upwork, you can browse the Talent Marketplace and filter jobs based
    on your skill set and criteria like hourly rate, hours per week,
     experience level, and more.
     <img src="picture-7.webp" alt="picture of content " className=' w-[18rem] mt-5 rounded-md mb-8 ' />

When you find a project that you like and want to apply to, make sure 
to read the entire post. Many companies and clients have specific requirements
 and needs for their jobs. 

 
</p>
</div>
{/**div-six */}
<div className='bg-slate-100 mt-[3rem] rounded-sm h-fit w-fit '>
<h1 className='text-[1.8rem] font-bold font-serif text-blue-900 ml-[0.5rem] mt-[3rem] hover:text-cyan-700 '>
  8. Create your  
<br /><span className='ml-[1rem]'> <Link href={"./rout-8"}> marketing strategy </Link></span> </h1>
<p className='text-[1rem] leading-loose text-gray-800 font-sans mt-[2rem]  font-light ml-[3rem] w-[20rem] '>
Once you are ready to start accepting clients, you need to figure out how you wll market yourself. 
As a freelancer, you are a small business owner, so marketing your services and other
<img src="pic.jpg" alt="picture of content " className=' w-[18rem] mt-5 rounded-md mb-5 ' />

 admin
 tasks are important facets of the job.

Here is an overview of a marketing strategy for becoming a freelance web developer:  <br />
<span className='text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium hover:text-cyan-800'> . Define your niche and services</span><br />
  <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Create a strong portfolio </span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium  hover:text-cyan-800'>   . Set competitive pricing </span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Develop an online presence</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> . Use social media strategically.</span><br />
 <span className='text-blue-500 font-sans cursor-pointer font-medium hover:text-cyan-800'> .Leverage freelancing platforms</span><br />

  
</p>
</div>



        </div>
      )}


</div>





</div>
</div>

    </main>
  )
}

export default Home