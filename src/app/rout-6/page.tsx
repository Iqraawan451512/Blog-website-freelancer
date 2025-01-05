"use client"

import CommentSection from "../component/comment/comment"

function Rout_6() {
    return (
        <main>
            <div className="main mx-auto px-4 sm:ml-[5rem] md:ml-[10rem]">
                <h1 className='text-[1.8rem] sm:text-[3rem] -font-bold font-serif text-blue-900 hover:text-cyan-700 sm:ml-[8rem] mt-[5rem] text-center sm:text-left'>
                    Conduct market research
                </h1>

                <p className='text-[1rem] text-gray-800 font-sans mt-[2rem] font-medium mx-auto sm:ml-[5rem] sm:w-[60rem] leading-loose'>
                    Market research is key to establishing yourself in freelance web development. 
                    It helps <br /> you understand client needs, industry trends, and competitor strategies so
                    you can stand out.
                </p>

                <img src="free-2.jpg" alt="Strategy image" className="h-[20rem]  sm:ml-[8rem] -w-full sm:w-[35rem] mx-auto rounded-lg shadow-white shadow-lg mt-[4rem] mb-[2rem]" />

                <div className="mt-[2rem] sm:ml-[3rem] sm:w-[50rem]">
                    <p className="mt-[1rem] text-[1rem] font-light">
                        <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer">
                            . Stay updated on trends
                        </span>
                        Follow industry blogs and forums to learn the latest in tools and design—keeping your skills relevant.
                        You can quickly get information on salaries, hourly rates, and in-demand skills.
                    </p>

                    <p className="mt-[1rem] text-[1rem] font-light">
                        <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer">
                            . Analyze competitor portfolios
                        </span>
                        Review other freelancers  work to spot opportunities and see where you can offer something unique.
                    </p>

                    <p className="mt-[1rem] text-[1rem] font-light">
                        <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer">
                            . Engage in online communities
                        </span>
                        Join forums to hear client pain points firsthand, allowing you to target their specific needs.
                    </p>

                    <p className="mt-[1rem] text-[1rem] font-light">
                        <span className="text-[1rem] font-semibold text-blue-500 mr-2 cursor-pointer">
                            . Review job listings
                        </span>
                        Analyze freelance job boards to understand what skills are in demand and align your profile accordingly.
                        Joining groups on LinkedIn and Facebook can help you understand what's in demand locally, 
                        too. Online communities like Reddit can also be valuable resources for input and problem-solving help.
                    </p>
                </div>
            </div>
            <CommentSection />
        </main>
    )
}

export default Rout_6
