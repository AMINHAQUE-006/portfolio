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

const tools = [
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS" },
  { icon: <SiJavascript size={40} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact size={40} className="text-cyan-400" />, name: "React.js" },
  { icon: <SiTailwindcss size={40} className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaBootstrap size={40} className="text-purple-500" />, name: "Bootstrap" },
  { icon: <SiNextdotjs size={40} className="text-white" />, name: "Next.js" },
  { icon: <FaGitAlt size={40} className="text-orange-400" />, name: "Git" },
  { icon: <FaGithub size={40} className="text-white" />, name: "GitHub" },
  { icon: <FaBitbucket size={40} className="text-blue-400" />, name: "Bitbucket" },
];

const About = () => {
  return (
    <div className="bg-[#241d20] text-white px-6 py-16 min-h-screen">
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
            While I am not programming, I enjoy riding bikes, watching
            documentaries and playing games. Learning more to improve skills.
          </p>
        </div>
      </div>

      {/* Tools & Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl text-[#BBF451] md:text-5xl font-extrabold uppercase mb-8">
          My Tools & Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-black rounded-xl hover:bg-[#BBF451] cursor-pointer hover:text-black transition"
            >
              {tool.icon}
              <span className="mt-2 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
