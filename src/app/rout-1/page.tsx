"use client"
import CommentSection from "../component/comment/comment"

function Rout_1(){
    return(

        <main>
<div className="div-1">
<p className="ml-[5rem] text-[1rem] font-medium font-sans mt-[5rem] mr-[5rem]">


Being a freelance web developer can give you more flexibility and greater
 control over your career. You can choose whether you want to do front-end,
  back-end, or full-stack web development and the types of projects you want
   to specialize in. Instead of working full-time for one employer, you can
    work directly with individual clients and enjoy the perks of being self-employed.
</p>
<div className="flex justify-around">
    <div>
<h1 className='text-[2rem] font-bold font-serif text-blue-950 mt-[3rem] ml-[5rem]
 hover:text-cyan-600 hover:translate-x-2  hover:font-extralight'> 1. Define your skills</h1>
<p className=" text-gray-700 text-lg text-blance ml-[4rem] mt-[2rem]">
        The best place to start is a skills audit. Write down a list of all the skills <br />
         you currently have and the ones you'd like to develop. Define what you  <br />know, what 
          you don't know, and what you're best at (and enjoy) doing. <br /> Think about your career 
         goals and what your dream workweek looks like. <br />
        Knowing your strengths and weaknesses can help you choose projects <br />
         that will strengthen your portfolio and reputation. <br /> A successful
          freelance web development career is built on <br />
           positioning yourself 
           as a skilled professional and backing it up with positive <br /> client 
            reviews and work samples. This helps to establish trust with new <br />client.
        To help evaluate your skills and decide if freelancing as a web  <br /> developer
         is the right career path for you, ask yourself these questions:
      </p>
</div>
<div>
    <img src="Freelancer.jpg" alt=" its a picture " className="h-[20rem] mt-[7rem] rounded-r-md" />
</div>
</div>

<div>
<p className="ml-[3rem] mt-[3rem] text-gray-900 text-lg text-blance" >
To help evaluate your skills and decide if freelancing as a web developer is the 
right career path for you, ask yourself these questions:
</p>

<div className="mt-10 space-y-2 text-gray-600  ml-[6rem]  ">
          <ul className='text-sm font-sans font-semibold text-slate-700 text-balance cursor-pointer'>
          <li className="hover:text-cyan-500"> <span className="font-extrabod text-[2rem] ">.</span> What programming languages do you prefer working in?</li>
          <li className="hover:text-cyan-500"> <span className="font-extrabod text-[2rem]">.</span> What type of projects do you have experience working in?</li>
          <li className="hover:text-cyan-500"> <span className="font-extrabod text-[2rem]">.</span> What aspects of web development do you struggle with the most?</li>
          <li className="hover:text-cyan-500"> <span className="font-extrabod text-[2rem]">.</span> Do you want to work in an office?</li>
          <li className="hover:text-cyan-500"> <span className="font-extrabod text-[2rem]">.</span> Could you see yourself in a client-facing role?</li>
          <li className="hover:text-cyan-500"><span className="font-extrabod text-[2rem]">.</span> Do you like working independently?</li>
          <li className="hover:text-cyan-500"><span className="font-extrabod text-[2rem]">.</span> Do you mind doing administrative tasks like invoicing?</li>
          <li className="hover:text-cyan-500"><span className="font-extrabod text-[2rem]">.</span> Would you be comfortable pitching your services to clients?</li>
          </ul>
        </div>


</div>



<CommentSection/>
</div>
</main>
    )
}
export default Rout_1