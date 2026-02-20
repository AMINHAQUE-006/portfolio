import Image from "next/image";
import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-[#241d20] min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 gap-10 text-white">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase">Hi, I am</h1>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-lime-300 uppercase">Amin Haque</h1>
        </div>

        <p className="text-base sm:text-lg text-gray-300 max-w-md">
          A Full Stack Developer based in India, passionate about building accessible and user-friendly websites.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <button className="btn rounded-full px-6 bg-lime-300 text-black hover:bg-lime-400 transition-colors uppercase">
          <a href="#contact">Contact Me</a>
          </button>

          <Link
            href="https://www.linkedin.com/in/amin-haque-109a47263/"
            aria-label="LinkedIn"
            className="btn btn-outline btn-circle hover:bg-lime-300 hover:text-black transition-all"
          >
            <TiSocialLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/AMINHAQUE-006/"
            aria-label="GitHub"
            className="btn btn-outline btn-circle hover:bg-lime-300 hover:text-black transition-all"
          >
            <PiGithubLogoFill size={24} />
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm md:max-w-md">
          <Image
            src="/image.jpg"
            width={600}
            height={700}
            alt="Home Profile"
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;