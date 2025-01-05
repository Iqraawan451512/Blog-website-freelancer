"use client";
import Link from "next/link";
import CommentSection from "../component/comment/comment";
import { useState } from "react";

function Rout_4() {
    // State to toggle visibility of all sections
    const [showSections, setShowSections] = useState(false);
    const [showMoreFrontEnd, setShowMoreFrontEnd] = useState(false);
    const [showMoreBackEnd, setShowMoreBackEnd] = useState(false);
    const [showMoreFullStack, setShowMoreFullStack] = useState(false);


    // Toggle function for showing and hiding sections
    const toggleSections = () => setShowSections(!showSections);
    const toggleFrontEnd = () => setShowMoreFrontEnd(!showMoreFrontEnd);
    const toggleBackEnd = () => setShowMoreBackEnd(!showMoreBackEnd);
    const toggleFullStack = () => setShowMoreFullStack(!showMoreFullStack);

    return (
        <main>
            <div className="main ml-[2rem]">
                <h1 className='sm:text-[3rem] text-[2rem] font-bold font-serif ml-1 sm:ml-0 text-blue-950 mt-[5rem] text-center hover:text-cyan-600 hover:translate-x-2 hover:font-extralight'>
                    Create your business plan
                </h1>

                <p className="text-[1rem] text-black sm:ml-[5rem] ml-2 w-[20rem] sm:w-[60rem] mt-[1rem] text-blance leading-loose mr-[5rem]">
                    <span className="font-semibold text-[1rem] text-blue-500 cursor-pointer mr-2 ">
                        Being a freelancer
                    </span>
                    is owning your own business, so you get to choose which projects you say yes to and often what hours you work.
                     You are self-employed and responsible for everything from finding clients to paying taxes.
                      Creating your business plan is integral to becoming a freelance web developer.

                    Your business plan helps you outline what services you will offer as a developer and how you plan to find your clients.
                     Consider your top skills and the types of projects you want to take on. Many freelancers find success by
                      choosing a niche and working hard to become experts in that space.
                    <br />
                    <span className="mt-5 text-pretty text-gray-800 font-bold mb-[5rem] ">
                        Most important and the summary of all the content is:
                    </span>
                    <br />
                    You have to examine or realize your command on skills, what are those <br />
                    <Link href={"/"} className="text-[1rem] text-blue-700 font-bold "> 1 . FRONT-END </Link><br />
                    <Link href={"/"} className="text-[1rem] text-blue-700 font-bold "> 2 . BACK-END</Link><br />
                    <Link href={"/"} className="text-[1rem] text-blue-700 font-bold "> 3 . FULL-STACK</Link><br />

                    that can increase the demand for your skills so you can raise your rates and earn more clients.
                </p>

                {/* Button to toggle visibility of all sections */}
                <button onClick={toggleSections} 
                className="text-slate-100  w-[8rem] h-[2.5rem]  sm:ml-[32rem] mt-[2rem] hover:text-slate-400 hover:bg-cyan-900 rounded-[2rem] bg-slate-400 font-medium">
                    {showSections ? "Show Less" : "Learn More"}
                </button>

                {/* Conditional rendering for all three sections */}
                {showSections && (
                    <>
                        {/* Front-End Section */}
                        <h1 className="font-sans font-semibold text-blue-900 text-[1.7rem] mt-[2rem] ml-4 sm:ml-[12rem] ">
                            Front-End
                        </h1>
                        <p className="w-[18rem] ml-[1rem] sm:w-[45rem] sm:ml-[12rem] leading-normal ">
                            <span className="font-semibold text-[1rem] text-blue-500 cursor-pointer mr-2">Front-end developers</span>
                            Front-end developers enjoy the design aspect of development. They focus on the part that the user
                             interacts with—the UI. Front-end developers think heavily about the user experience and how to make 
                             the website easy to use, accessible, and overall aesthetically pleasing. This type of web development
                              can focus on the layout, graphics, navigation, how to display content, and even go into typography
                               and color schemes.

                            If you enjoy visuals and have an eye for design and creativity,
                             you may enjoy front-end development best. As a front-end developer,
                            
                            {showMoreFrontEnd && (
                                <> 
                            
                             you still need technical skills like proficiency with programming languages, 
                             but the focus is on the visual aspect of the website.

                           
                            You may work with the client to create mockups and wireframes, determining what elements 
                            the website needs at
                             a technical level.
                             The client will often take this to a back-end developer, who builds the website is foundation 
                             and then hands it back to you so
                              you can continue to work on the front end.
                        </>
                            )}
                        </p>
                        <button onClick={toggleFrontEnd} className="text-blue-950 sm:ml-[30rem] w-[8rem] h-[2.5rem] mt-[2rem] hover:text-slate-200
                                 hover:bg-cyan-900 rounded-[2rem] bg-slate-400 font-medium" >
                    {showMoreFrontEnd ? "Show Less" : "Learn More"}
                </button>

                        {/* Back-End Section */}
                        <h1 className="font-sans font-semibold text-blue-900 text-[1.7rem] mt-[2rem] sm:ml-[12rem] ml-4 ">
                            Back-End
                        </h1>
                        <p className="w-[18rem] sm:w-[45rem]  ml-[1rem] sm:ml-[12rem] leading-normal">
                            <span className="font-semibold text-[1rem] text-blue-500 cursor-pointer mr-2">Back-end developers</span>
                            Back-end web developers work behind the scenes, writing the code to build the website is framework. 
                            As a back-end developer, you are responsible for the coding stored on web servers.
                             You create the code that makes the website run. Back-end web developers think most
                             about databases, APIs, cybersecurity, and website performance.

                            If you are interested in being a programmer and building websites but want to concentrate on performance
                             rather than visuals,
                            
                            {showMoreBackEnd && (
                        <>
                            
                            
                             back-end development may be what you like best. While you still have to consider design and UX, you will 
                             focus more on building the functionality and structure and then hand it over to the front-end developer.

                            As a back-end developer, you will have to work with your client to figure out what they want before you 
                            can start building. The client may have a project manager, UX designer, front-end developer, or another 
                             team member you will need to collaborate with. Often your clients dont know what it takes behind the 
                             scenes to create certain features or integrations, so you have to understand what they want the website
                             to look like first, so you can make it possible on your end.
                        </>
                            )}
                        </p>
                        <button onClick={toggleBackEnd} className="text-blur-950 sm:ml-[30rem] w-[8rem] h-[2.5rem] mt-[2rem] hover:text-slate-200
                                 hover:bg-cyan-900 rounded-[2rem] bg-slate-400 font-medium">
                    {showMoreBackEnd ? "Show Less" : "Learn More"}
                </button>





                        {/* Full-Stack Section */}
                        <h1 className="font-sans font-semibold text-blue-900 text-[1.7rem] mt-[2rem] sm:ml-[12rem] ml-4">
                            Full-Stack
                        </h1>
                        <p className="w-[18rem] sm:w-[45rem] sm:ml-[12rem] leading-normal ">
                            <span className="font-semibold text-[1rem] text-blue-500 cursor-pointer mr-3">Full stack</span>

                            If you want to work on both the back and front ends, this is full-stack web development. 
                            As a full-stack web developer, you can offer entire packages to your clients. Instead of 
                            hiring two different web developers, they can work with just you. You will need to know the
                             programming languages for both sides, but you have greater control over the code and the build.

                            Full-stack developers work with their clients in the early stages, figuring out what they
                             want down to the finest detail and then creating mockups for them to sign off on.
                            
                            {showMoreFullStack && (
                        <>
                            
                            
                            
                             Once you know what the client wants, you can start building the back end. After the back end,
                              you will work on the front end, collaborating with other stakeholders if needed to work on the 
                              layouts and visual display.

                            Full-stack web development was popular in the earlier stages of the Internet when websites
                             had fewer integrations, technologies, and features. Today is full-stack web developers typically work 
                             on simpler websites or shipping minimal viable products (MVPs) for clients that then can be added to.
                              They can shift from back-end to front-end, but complicated websites often require separate developers.
                        </>
                        )}
                        </p>
                        <button onClick={toggleFullStack} className="text-blue-950 sm:ml-[30rem] w-[8rem] h-[2.5rem] mt-[2rem] hover:text-slate-200
                                 hover:bg-cyan-900 rounded-[2rem] bg-slate-400 font-medium">
                    {showMoreFullStack ? "Show Less" : "Learn More"}
                </button>
                            
                    </>
                )}
            </div>

            <CommentSection />
        </main>
    );
}

export default Rout_4;
