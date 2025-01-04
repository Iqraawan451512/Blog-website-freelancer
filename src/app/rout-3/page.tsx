"use client"

import { useState } from "react";
import CommentSection from "../component/comment/comment";
import Link from "next/link";

function Rout_3() {
    // State to track whether content is expanded or collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle function for "Learn More" / "Learn Less"
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <main className="bg-slate-100 h-full">
            <div className="main flex gap-2">
                <div className='mt-[5rem] rounded-sm w-[35em] sm:ml-[4rem]'>
                    <h1 className='text-[1.8rem] font-bold font-serif text-blue-900 hover:text-cyan-700 ml-[3.5rem] mt-[5rem] items-center'>
                        Find helpful tools
                    </h1>
                    <p className='text-[1rem] text-gray-800 font-sans mt-[2rem] font-light ml-[3rem] w-full leading-loose'>
                        Think about what tools you need to be successful as a freelancer. <br />
                        If you work directly with your clients rather <br /> than on a platform like <br />
                        Upwork, you can avoid paying service fees (Upwork is a flat 10%), <br />

                        {/* Learn More/ Learn Less Button */}
                        <span className='text-gray-500'>
                            Below, we cover some tools you could incorporate into your <br />
                            freelance business to streamline your workflow.
                        </span> <br />

                        <Link href="" className='text-blue-500 font-sans cursor-pointer mt-[5rem] font-medium'>
                            Project management
                        </Link><br />
                        <Link href="" className='text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium'>
                            Time tracking
                        </Link><br />
                        <Link href="" className='text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium'>
                            Mockups
                        </Link><br />
                        <Link href="" className='text-blue-500 font-sans cursor-pointer mt-[2rem] font-medium'>
                            AI
                        </Link><br />
                    </p>

                    {/* Content Toggle */}
                    <div className={`text-[1rem] text-gray-800 font-sans mt-[2rem] font-light ml-[3rem] w-full`}>
                        {isExpanded ? (
                            <>
                                <h1 className="font-sans font-semibold text-blue-900 text-[1.7rem] mt-[2rem]">Project management</h1>
                                <p className="mt-[2rem]">These tools help teams organize, track, and execute projects efficiently, ensuring streamlined collaboration and task visibility.</p>
                                <p className="mt-[1rem]"> <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer"> . Trello</span>
                                    Visual project management with boards and cards, ideal for simple task tracking and team collaboration.</p>
                                <p className="mt-[1rem]"> <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer"> . Hive</span>
                                    All-in-one tool with tasks, chat, and analytics, customizable for complex workflows and cross-team collaboration.</p>
                                <p className="mt-[1rem]"> <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer"> . ClickUp</span>
                                    Flexible project management with tasks, goals, and docs; suited for teams needing extensive customization</p>
                                <p className="mt-[1rem]"> <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer"> . Asana</span>
                                    Task and project tracking with timelines and workload views, popular for clear team planning and task prioritization</p>

                                {/* More content here... */}

                                {/* "Learn Less" button */}
                                <button onClick={toggleContent} 
                                className="text-slate-100  w-[8rem] h-[2.5rem] mt-[2rem] hover:text-slate-200
                                 hover:bg-cyan-900 rounded-[2rem] bg-blue-950 font-medium">
                                    Learn Less
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="mt-[2rem]">Click below to learn more about helpful tools.</p>
                                <button onClick={toggleContent}
                                 className="text-slate-100  w-[8rem] mt-[2rem] h-[2.5rem] hover:text-slate-200 hover:bg-cyan-900 rounded-[2rem] bg-blue-950 font-medium">
                                    Learn More
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <img src="picture-6.jpg" alt="picture of content " className='w-[30rem] h-[25rem] mt-[5rem] sm:mt-[10rem] rounded-md mb-5 hidden lg:block' />
                </div>
            </div>

            <CommentSection />
        </main>
    );
}

export default Rout_3;
