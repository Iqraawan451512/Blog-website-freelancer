import Link from "next/link";
import Button from "../component/button/button";

function Contact() {
  return (
    <main>
      <div className=" ">

        {/* Header Section */}
        <div className="text-center md:text-left">
        <div className="ml-[13rem] pt-[5rem]  ">
                <p className="font-sans font-semibold text-slate-500">
         <span className="text-[1rem] font-sans font-semibold text-blue-900 mr-[0.5rem] "> Get Into Touch!</span>
Ready to collaborate or discuss a project? i would love to hear from you!
</p>
</div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row mt-10 md:w-[70rem]">

          {/* Contact Details */}
          <div className=" one flex-1 md:w-[30rem] md:ml-[13rem] md:mr-10 p-4 bg-slate-200 rounded-lg shadow-lg ">

            <ul className="text-[#22333b] font-serif">
              <li className="pb-2">
                <span className="font-bold text-[#00296b]">~ Phone: </span>
                <span>+9203341437768</span>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]">~ Email: </span>
                <Link href="mailto:iqraawan4512@gmail.com" className="text-blue-500">
                  Iqraawan4512@gmail.com
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]">~ GitHub: </span>
                <Link href="https://github.com/Iqraawan451512" className="text-blue-500">
                  Iqraawan451512
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]">~ LinkedIn: </span>
                <Link href="https://www.linkedin.com/in/iqraawan451512" className="text-blue-500">
                  iqraawan451512
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]">~ Location: </span>
                Karachi
              </li>
              <li className="pb-2 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1729687023809!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  className="rounded-md shadow-md"
                  loading="lazy"
                ></iframe>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className=" two flex-1 md:w-[30rem] mt-8 md:mt-0 p-4 bg-slate-200 rounded-lg shadow-lg ml-0 md:ml-[2rem]">

            <div className="">
              <label className="font-serif pl-3 pb-2 text-[1rem]">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className=" w-full h-[2.5rem] rounded-lg border-x-indigo-300 pl-5 mb-4"
              />
              <label className="font-serif pl-3 pb-2 text-[1rem]">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full h-[2.5rem] rounded-lg border-none pl-5 mb-4"
              />
              <label className="font-serif pl-3 pb-2 text-[1rem]">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full h-[10rem] rounded-lg border-none pl-5 mb-4 resize-none"
              ></textarea>
              <Button text="Send message" />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Contact;

        






















        