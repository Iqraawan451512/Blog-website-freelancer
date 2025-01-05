"use client"
import Link from "next/link"
import CommentSection_1 from "../component/comment/comment-1"
function About(){
    return(
<main className="w-full bg-[#355070]">
      <div className="p-4 sm:p-8">
        {/* About Header */}
        <h1 className="text-[#ffb703] font-serif font-bold  hover:text-[#a9d6e5] ml-[3rem] text-[2rem] sm:text-[2.5rem] text-center sm:text-left mb-6">
          My Mission
        </h1>
        <p className="text-[#d3d3d3] ml-4 sm:ml-8 text-base sm:text-lg leading-relaxed">
        Welcome to my corner of the web! I am <span className="text-[1rem] font-serif hover:text-[#a9d6e5] text-blue-300">IQRA AWAN</span> , a budding web developer with a passion for 
        building innovative and user-friendly websites.
        My mission is clear: to provide insightful, well-researched, and engaging content that empowers
         individuals to make
         informed decisions and improve their lives.
         As I embark on my freelance journey, I am excited 
        to share my experiences, lessons learned, and insights with fellow aspiring developers. On this blog,
         I will be documenting my progress, sharing tips and resources, and exploring the latest trends in web 
         development. Join me on this journey, and lets learn and grow together!"


        </p>
        
        {/* Profile Image and Personal Info */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center sm:items-start sm:flex-row sm:justify-start">
          <img
            src="/imd.jpg"
            alt="its a picture"
            
            className="rounded-2xl border-cyan-800  w-[15rem]  ml-[2rem] h-[18rem]"
          />

             

          <div className="ml-4 sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-[#d8973c] text-[1.5rem] sm:text-[2rem] font-serif font-bold hover:text-[#a9d6e5]">
              About Me
            </h1>
            <p className="text-[#f9dbbd] text-base sm:text-lg font-serif">
          I am a creative and results-driven freelance web developer.
             I specialize in crafting beautifully designed, highly functional websites 
             that not only look great but also deliver seamless user experiences. I am here to help you build a strong
               online presence that drives results. Let's transform your digital vision
                into reality—one pixel at a time!

</p>
            <ul className="text-[#d3d3d3] font-serif pt-5 text-sm sm:text-base">
              <li><span className="font-bold text-[#e3f2fd]">~ Phone:</span> +923341357769</li>
              <li><Link href="https://mail.google.com/mail " target="_blank"><span className="font-bold text-[#e3f2fd]">~ Email:</span> iqraawan451512@gmail.com </Link></li>
              <li><span className="font-bold text-[#e3f2fd]">~ City:</span> Karachi</li>
            </ul>
          </div>
        </div>
<div>
<h1 className="text-[#b9b9c1] text-[1rem] sm:text-[1.5rem] ml-[4rem] font-serif font-bold mt-4 hover:text-[#7ac9e4]">
              IQRA AWAN
            </h1>
            <p className="text-[#d6d6d5] text-[1rem] sm:text-[0.9rem] ml-[5rem] font-serif font-medium">
 founder & Bloger            </p>
            </div>

<CommentSection_1/>



















            </div>
        </main>
    )
}
export default About