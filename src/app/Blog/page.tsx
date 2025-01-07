"use client"
import Link from 'next/link';
import { useState } from 'react';

function Blog() {
    // State to manage the expanded/collapsed state of content
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle function for "Learn More" and "Learn Less"
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <main>
            <div className="p-4 md:p-10">
                {/* Main Heading */}
                <h1 className="text-center mt-16 text-blue-950 font-bold text-2xl sm:text-3xl lg:text-4xl font-serif text-clip hover:text-amber-900">
                    Why Freelancing in Web Development is <br />
                    <span className="ml-8">a Great Choice</span>
                </h1>

                {/* Main Image */}
                <img
                    src="https://media.istockphoto.com/id/1196212232/photo/young-woman-with-cat-using-laptop.jpg?s=612x612&w=0&k=20&c=li_u3R10DP1gbKRVzEVPUm5k__GMrkp2w07kVljBnIk="
                    alt="Freelance Work"
                    className="h-80 w-full sm:w-[40rem] lg:w-[60rem] mx-auto mt-8 rounded-md"
                />

                {/* Main Paragraph */}
                <p className="mt-8 text-lg sm:text-xl font-sans text-slate-500 font-semibold mx-auto max-w-4xl">
                    Like many developers, I started my career working for a company, but I quickly realized that
                    the rigid 9-5 structure and lack of creative freedom were not fulfilling my true potential.
                    I wanted the flexibility to work on projects that excited me, and the chance to make a
                    direct impact on my clients businesses. That is when I decided to start my own freelance
                    journey. It was not always easy, but every project I took on taught me something new, and
                    soon enough, I was helping businesses large and small develop their online presence.
                </p>

                {/* Cards Section */}
                <div className="flex flex-wrap sm:flex-row lg:flex-row gap-6 ml-6 sm:ml-[8rem] mt-16 mb-16">
                    {/* Card 1 */}
                    <div className="text-center ">
                        <img
                            src="freelancer.jpg"
                            alt="Define Your Skills"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto
                              
                            "
                        />
                        <Link href={"./rout-1"}><p className="text-sm mt-2">Define your skills</p></Link>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center">
                        <img
                            src="picture.jpg"
                            alt="Education + Skills"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto"
                        />
                       <Link href={"./rout-2"}> <p className="text-sm mt-2">Education + Skills</p></Link>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center">
                        <img
                            src="picture-6.jpg"
                            alt="Market Research"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto"
                        />
                       <Link href={"./rout-6"}><p className="text-sm mt-2">Market research</p></Link>
                    </div>

                    {/* Card 4 */}
                    <div className="text-center">
                        <img
                            src="picture-2.jpg"
                            alt="Build Your Portfolio"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto"
                        />
                       <Link href={"./rout-5"}> <p className="text-sm mt-2">Build your portfolio</p></Link>
                    </div>

                    {/* Card 5 */}
                    <div className="text-center">
                        <img
                            src="picture-7.webp"
                            alt="Apply for Jobs"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto"
                        />
                       <Link href={"./rout-7"}><p className="text-sm mt-2">Apply for jobs</p></Link>
                    </div>

                    {/* Card 6 */}
                    <div className="text-center">
                        <img
                            src="picture-4.jpg"
                            alt="Marketing Strategy"
                            className="w-32 h-20 rounded-2xl hover:translate-x-1 hover:rounded-full mx-auto"
                        />
                      <Link href={"./rout-8"}><p className="text-sm mt-2">Marketing strategy</p></Link>
                    </div>
                </div>

                {/* Learn More / Learn Less Button */}
                <div className="text-center mt-6">
                    <button
                        onClick={toggleContent}
                        className="text-slate-100  w-[8rem] h-[2.5rem] hover:text-slate-200 hover:bg-cyan-900 rounded-[2rem] bg-blue-950 font-medium"
                    >
                        {isExpanded ? "Learn Less" : "Learn More"}
                    </button>
                </div>

                {/* Toggleable content */}
                {isExpanded && (
                    <div>
                        {/* Benefits Section */}
                        <div>
                            <p className="mt-8 text-lg sm:text-xl font-sans text-slate-500 font-semibold mx-auto max-w-4xl">
                                Some of the biggest benefits of freelancing as a web developer include:
                            </p>

                            <p className="mt-6 text-lg sm:text-xl font-sans text-gray-400 font-semibold mx-auto max-w-4xl">
                                <span className="text-blue-800 text-base mr-2">Flexibility:</span>
                                As your own boss, you have full control over the projects you take on, the clients you work
                                with, and your own workflow. You will be exposed to a variety of industries, challenges, and
                                creative opportunities, which will continuously grow your skillset.
                            </p>

                            <p className="mt-6 text-lg sm:text-xl font-sans text-gray-400 font-semibold mx-auto max-w-4xl">
                                <span className="text-blue-800 text-base mr-2">Independence:</span>
                                You will be exposed to a variety of industries, challenges, and creative opportunities, which
                                will continuously grow your skillset.
                            </p>

                            <p className="mt-6 text-lg sm:text-xl font-sans text-gray-400 font-semibold mx-auto max-w-4xl">
                                <span className="text-blue-800 text-base mr-2">Diverse Projects:</span>
                                You will be exposed to a variety of industries, challenges, and creative opportunities, which
                                will continuously grow your skillset.
                            </p>

                            <p className="mt-6 text-lg sm:text-xl font-sans text-gray-400 font-semibold mx-auto max-w-4xl">
                                <span className="text-blue-800 text-base mr-2">Earning Potential:</span>
                                Successful freelancers can command higher rates for their specialized skills, especially if they
                                niche down into a particular area (e.g., front-end, back-end, or full-stack development).
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Blog;
