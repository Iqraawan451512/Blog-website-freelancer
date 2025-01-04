"use client"
import Link from "next/link"
import { useState } from "react"; // Import useState from React
import CommentSection from "../component/comment/comment";

function Rout_2() {

    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <main>
            <div className="main p-4 sm:p-6 md:p-10 lg:p-12">

                {/* Main Heading */}
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-blue-950 sm:ml-[10rem] mt-8 sm:mt-10 hover:text-cyan-600 hover:translate-x-2 hover:font-extralight'>
                    <Link href="./rout-2">Fill your skills gaps and enhance your education</Link>
                </h1>

                {/* Introduction Paragraph */}
                <p className="text-sm sm:text-base text-black ml-4 sm:ml-[16rem] mt-4 sm:mt-6 text-blance">
                    You can take web development courses online and earn certificates in specific languages or other <br /> elements of web development. Here are a few examples:
                </p>

                {/* List of Courses */}
                <ul className='font-sans'>
                    <Link href="/">
                        <li className='text-sm sm:text-base text-cyan-800 font-semibold ml-8 sm:ml-[20rem] mt-4 hover:text-yellow-600'>
                            . Web Design for Everybody: Basics of Web Development & Coding Specialization
                        </li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm sm:text-base text-cyan-800 font-semibold ml-8 sm:ml-[20rem] mt-4 hover:text-yellow-600'>
                            . The Complete 2024 Web Development Bootcamp
                        </li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm sm:text-base text-cyan-800 font-semibold ml-8 sm:ml-[20rem] mt-4 hover:text-yellow-600'>
                            . IBM: Introduction to Web Development with HTML5, CSS3, and JavaScript
                        </li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm sm:text-base text-cyan-800 font-semibold ml-8 sm:ml-[20rem] mt-4 hover:text-yellow-600'>
                            . Codeacademy's Learn HTML
                        </li>
                    </Link>
                </ul>

                {/* Learn More Button */}
                <div className="flex justify-center mt-6 sm:mt-8">
                    <button
                        onClick={toggleVisibility}
                        className="px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
                    >
                        {isVisible ? "Show Less" : "Learn More"}
                    </button>
                </div>

                {/* Conditionally rendered content */}
                {isVisible && (
                    <p className="mt-10 text-sm sm:text-base text-black space-y-2 sm:ml-[15rem]">
                        Many websites use WordPress, which can also be a good foundational platform to learn. The growth in e-commerce <br />
                        may make Shopify a valuable system to understand as well. Make sure you have the basics down and then look at <br />
                        more complex areas of specialization, such as Node.js or Ruby on Rails.‍
                    </p>
                )}
            </div>

            {/* Comment Section */}
            <CommentSection />
        </main>
    );
}

export default Rout_2;
