"use client"
import Link from "next/link";
import CommentSection from "../component/comment/comment";

function Rout_5() {
    return (
        <main>
            <div className="div-1">

                <h1 className='text-[2rem]  sm:ml-[30rem] -font-bold font-serif text-blue-950 mt-[5rem] mb-[4rem]
                 hover:text-cyan-600 ml-[15%] 
                    hover:translate-x-2 hover:font-extralight shadow-blue-950 shadow-lg   w-fit'>
                    Build your portfolio
                </h1>
                
                <p className="text-[1rem]   text-black mt-[1rem] text-blance w-[20rem] sm:w-[45rem] text-pretty mx-auto leading-normal">
                    Once you have a solid business plan, it's time to build your 
                    <Link href={"/"} className="text-yellow-500 font-semibold ml-2 mr-2" target="_blank">portfolio.</Link>
                    This living collection highlights your projects and past work to show customers what you can do. Portfolios are essential for any freelance business, especially web development, and help prospects know that you can do the work they need. By reviewing past projects, clients can quickly get a feel for your work quality and style.
                    <br />
                    You can create an entire portfolio website dedicated to your work if you're freelancing off-platform or have many different types of examples, or you can add your best work to your Upwork portfolio. Think of the portfolio as your storefront, where people can browse and choose options. This means showcasing a diverse selection of work to attract more customers.
                </p>

                {/* Portfolio Section */}
                <div className="mt-[3rem]">
                    <p className="sm:ml-[30rem]  ml-8 mt-[1rem]">Here are the Portfolio:
                        <span className="font-semibold text-cyan-900 font-sans text-[0.8rem]">
                            <Link href={"/"} target="_blank">Explore My Masterpieces</Link>
                        </span>
                    </p>

                    {/* Flex Container for Portfolio Images */}
                    <div className="flex flex-wrap gap-10 mt-[4rem] justify-center">
                        
                        {/* Portfolio Item One */}
                        <div className="div-one flex flex-col items-center">
                            <img src="free-2.jpg" alt="Portfolio image" className="h-[15rem] w-[20rem] rounded-lg shadow-lg shadow-cyan-400 hover:rounded-[4rem]" />
                            <p className="font-semibold text-cyan-900 font-sans text-center mt-[2rem] hover:underline hover:text-yellow-400">
                                <Link href={"/"} target="_blank">Portfolio</Link>
                            </p>
                        </div>

                        {/* Portfolio Item Two */}
                        <div className="div-one flex flex-col items-center">
                            <img src="free-2.jpg" alt="Portfolio image" className="h-[15rem] w-[20rem] rounded-lg shadow-lg shadow-cyan-400 hover:rounded-[4rem]" />
                            <p className="font-semibold text-cyan-900 font-sans text-center mt-[2rem] hover:underline hover:text-yellow-400">
                                <Link href={"/"} target="_blank">Resume</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CommentSection />
        </main>
    )
}

export default Rout_5
