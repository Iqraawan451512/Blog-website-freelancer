"use client"

import CommentSection from "../component/comment/comment"

function Rout_7() {
    return (
        <main>
            <div className="main mx-auto px-4 sm:ml-[5rem] md:ml-[10rem]">
                <h1 className='text-[2rem] font-bold font-serif text-blue-950 mt-[5rem] hover:text-cyan-600  ml-8 sm:ml-[20rem] sm:text-center bg-blue-100 p-[0.5rem] rounded-md
                    hover:translate-x-2 hover:font-extralight shadow-blue-950 shadow-lg w-fit'>
                    Apply for jobs
                </h1>
                
                <p className="text-[1rem] text-black mt-[4rem] text-pretty w-full sm:w-[45rem] mx-auto sm:ml-[5rem] leading-normal">
                    Upwork is a great platform for building a freelance career in nearly any field,
                    and web development is one of the top in-demand skills on the platform. On Upwork,
                    you can browse the Talent Marketplace and filter jobs based on your skill set and
                    criteria like hourly rate, hours per week, experience level, and more.
                    If you know exactly what you want to offer clients, Project Catalog™ 
                    enables your marketing of pre-scoped and fixed-priced services.
                    <br /><br />
                    When you find a project that you like and want to apply to, make sure to 
                    read the entire post. Many companies and clients have specific requirements 
                    and needs for their jobs. The best proposals address these specific items.
                    Demonstrate your know-how and understanding. Take your time creating each
                    proposal and remember to proofread your submission.
                </p>
            </div>
            <CommentSection />
        </main>
    )
}

export default Rout_7
