"use client";

import CommentSection from "../component/comment/comment";

function Rout_8() {
  return (
    <main>
      <div className="p-4 sm:p-6 md:p-10">
        {/* Main Heading */}
        <h1 className="text-center text-4xl sm:text-4xl lg:text-[3rem] font-bold font-serif text-blue-900 hover:text-cyan-700 mt-8 sm:mt-10 lg:mt-12">
          Create your marketing strategy
        </h1>

        {/* Main Paragraph */}
        <p className="text-sm sm:text-base text-gray-800 font-sans mt-4  sm:mt-6 md:mt-[3rem] ml-4 sm:ml-[15rem] sm:mb-[2rem] md:ml-[15rem] lg:ml-[15rem] w-full sm:w-[40rem] md:w-[45rem] leading-relaxed">
          Once you are ready to start accepting clients, you need to figure out how you will market yourself. As a freelancer, you are a small business owner,
           so marketing your services and other admin tasks are important facets of the job. <br /> <br />
        <span className="text-cyan-500 font-semibold  " >Here is an overview of a marketing strategy for becoming a freelance web developer:</span>
        </p>

        {/* Image */}
        <img
          src="free-2.jpg"
          alt="Marketing strategy"
          className="h-60 w-full sm:w-[35rem] md:w-[40rem] lg:w-[45rem] mx-auto rounded-lg shadow-lg mt-6 sm:mt-8"
        />

        {/* Strategy Points */}
        <div className="mt-8 sm:mt-10 sm:w-[50rem] sm:ml-[12rem]">
          <p className="ml-4 sm:ml-6 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Define your niche and services</span>  
            Identify the specific web development services you will offer and consider specializing in a niche, like e-commerce sites or responsive design, to differentiate yourself.
          </p>

          <p className="ml-4 sm:ml-6 mt-4 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Create a strong portfolio</span>  
            Showcase your skills with a portfolio that highlights past projects, client testimonials, and the impact of your work; focus on quality over quantity.
          </p>

          <p className="ml-4 sm:ml-6 mt-4 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Set competitive pricing</span>  
            Research market rates for freelance web developers with similar skills and experience, and consider offering flexible pricing packages for different client needs.
          </p>

          <p className="ml-4 sm:ml-6 mt-4 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Develop an online presence</span>  
            Build a website or landing page that outlines your services, portfolio, and contact details; keep it optimized for search engines to attract organic traffic.
          </p>

          <p className="ml-4 sm:ml-6 mt-4 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Invest in targeted ads</span>  
            Consider running ads on platforms like Google or LinkedIn to reach potential clients searching for web development services.
          </p>

          <p className="ml-4 sm:ml-6 mt-4 text-sm sm:text-base font-light">
            <span className="text-blue-500 font-semibold cursor-pointer">. Build long-term client relationships</span>  
            Prioritize clear communication, deliver quality work, and offer ongoing support to encourage repeat business and referrals.
          </p>
        </div>
      </div>

      {/* Comment Section */}
      <CommentSection />
    </main>
  );
}

export default Rout_8;
