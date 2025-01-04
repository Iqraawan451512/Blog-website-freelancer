
import Link from "next/link";

function Footer() {
  return (
    <main className="">
      <div className="main-div flex flex-col sm:flex-row gap-10 sm:gap-[7rem] mt-[4rem] ml-[5rem] mr-[4rem] pt-[3rem] border-t-2 pb-[3rem] border-b-2">
        {/** div-one */}
        <div className="w-full sm:w-auto">
          <h1 className="font-sans font-semibold text-slate-800 hover:text-blue-900 cursor-pointer">Freelancing</h1>
          <p className="font-sans font-light text-gray-600 cursor-pointer">
            Revealed! The Secret to Success: <br />
            Unlocked Exclusive Insights
          </p>
        </div>

        {/** div-two */}
        <div className="div-two w-full sm:w-auto">
          <h1 className="font-sans font-semibold text-slate-800 hover:text-blue-900 cursor-pointer">Contact</h1>
          <p className="font-sans font-light text-gray-600 cursor-pointer">
            <Link href="">Iqraawan451511@Gmail.com</Link>
          </p>
          <p className="font-sans font-light text-gray-600 cursor-pointer">03341346679</p>
        </div>

        {/** div-three (Links) */}
        <div className="div-three w-full sm:w-auto">
          <h1 className="font-sans font-semibold text-slate-800 hover:text-blue-900 cursor-pointer">Links</h1>
          <ul>
            <Link href="/">
              <li className="font-sans font-light text-gray-600 cursor-pointer">Home</li>
            </Link>
            <Link href="./Blog">
              <li className="font-sans font-light text-gray-600 cursor-pointer">Blog</li>
            </Link>
            <Link href="./About">
              <li className="font-sans font-light text-gray-600 cursor-pointer">About</li>
            </Link>
            <Link href="./contact">
              <li className="font-sans font-light text-gray-600 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        {/** div-four (Subscribe) */}
        <div className="div-four w-full sm:w-auto">
          <h1 className="font-sans font-semibold text-slate-800 hover:text-blue-900 cursor-pointer">SUBSCRIBE</h1>
          <p className="font-sans font-light text-gray-600 cursor-pointer">
            Get our weekly newsletter for latest <br />
            blog news, exclusive blogs and <br />
            deals, and more.
          </p>
          <Link href="/">
            <button className="bg-blue-950 text-slate-200 rounded-lg w-[6rem] h-8 mt-[1rem] hover:bg-red-600">
              Subscribe
            </button>
          </Link>
        </div>
      </div>

      {/** foot-2 */}
      <div className="foot-2 border-b-2 ml-[2rem] mr-[3rem] mt-[1rem] pb-[2rem]">
  <ul className="flex flex-col sm:flex-row sm:gap-[4rem] gap-[1rem] items-center sm:items-start">
    <li className="hover:font-semibold hover:text-gray-800">
      Copyright © 2025. All rights reserved.
    </li>
    <Link href="/">
      <li className="font-medium text-slate-400 cursor-pointer hover:font-semibold hover:text-gray-800">
        Terms & Conditions
      </li>
    </Link>
    <Link href="/">
      <li className="font-medium text-slate-400 cursor-pointer hover:font-semibold hover:text-gray-800">
        Refund Policy
      </li>
    </Link>
    <Link href="/">
      <li className="font-medium text-slate-400 cursor-pointer hover:font-semibold hover:text-gray-800">
        Privacy Policy
      </li>
    </Link>
  </ul>
</div>

    </main>
  );
}

export default Footer;
