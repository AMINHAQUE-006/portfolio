import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-black text-white px-6 py-16 min-h-screen">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            About Me
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-300 text-xl my-4">
            I am a front-end developer based in Kolkata. Has Computer
            Applications background. Likes to focus on accessibility when
            developing. Passionate and curious about solving problems.
            Currently, I’m exploring Next.js, Framer Motion and a bit of UI/UX.
            While I am not programming, I enjoy playing riding bike, watching
            documentaries and playing games. Learning more to improve skill{" "}
          </p>
        </div>
      </div>

      {/* Tools & Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-8">
          My Tools & Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {/* HTML */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaHtml5 size={40} className="text-orange-500" />
            <span className="mt-2 text-sm">HTML</span>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaCss3Alt size={40} className="text-blue-500" />
            <span className="mt-2 text-sm">CSS</span>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <SiJavascript size={40} className="text-yellow-400" />
            <span className="mt-2 text-sm">JavaScript</span>
          </div>
          {/* React */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaReact size={40} className="text-cyan-400" />
            <span className="mt-2 text-sm">React.js</span>
          </div>
          {/* Tailwind */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <SiTailwindcss size={40} className="text-sky-400" />
            <span className="mt-2 text-sm">Tailwind</span>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaBootstrap size={40} className="text-purple-500" />
            <span className="mt-2 text-sm">Bootstrap</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <SiNextdotjs size={40} className="text-white" />
            <span className="mt-2 text-sm">Next.js</span>
          </div>
          {/* Git */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaGitAlt size={40} className="text-orange-400" />
            <span className="mt-2 text-sm">Git</span>
          </div>
          {/* GitHub */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaGithub size={40} className="text-white" />
            <span className="mt-2 text-sm">GitHub</span>
          </div>
          {/* Bitbucket */}
          <div className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition">
            <FaBitbucket size={40} className="text-blue-400" />
            <span className="mt-2 text-sm">Bitbucket</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
