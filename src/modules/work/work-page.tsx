import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
  name: "EMPTSHIRT - e-commerce platform",
  type: "freelance project",
  imgUrl: "/emptshirt.png",
  description: `Emptshirt is an online store offering unique, custom-designed T-shirts and apparel for people who value originality,
  simplicity, and self-expression. Our collections are built around minimalist design, quality fabrics, and bold ideas.`,
  year: 2025,
  role: "Front-end Developer",
  liveLink: "https://emptshirt.com",
  githubRepo: "",
  },
  {
  name: "Personal project",
  type: "learning project",
  imgUrl: "/hunger-bite.png",
  description: `Hunger Bite is a Swiggy-inspired food ordering web app built with React.js. It uses the Swiggy API to display restaurants and menus, allowing users to browse, view items, and manage their cart. React Router DOM enables smooth navigation, and Redux Toolkit handles state management. The app is responsive and mimics a real-world food delivery experience.`,
  year: 2024,
  role: "Full Stack Developer",
  liveLink: "https://hungerbite.vercel.app/",
  githubRepo: "https://github.com/AMINHAQUE-006/Hunger-Bite",
  },
            
]

const WorkPage = () => {
  return (
    <div className="bg-[#241d20] text-white px-6 py-16 min-h-screen">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 text-white">Featured Projects</h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
      {/* Project Card */}
      {projects.map((el, i) => (
        <div key={i} className="max-w-6xl mx-auto bg-black rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 bg-black">
            <div className="absolute top-4 left-4 bg-[#BBF451] text-black font-semibold text-xs px-3 py-1 rounded-full z-10">
              {el.type}
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src={el?.imgUrl}
                alt="EMPTSHIRT project"
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                priority
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#BBF451]">
                {el?.name}
              </h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed hover:text-white">
                {el?.description}
              </p>
              {/* Project Info Section */}
              <div className="text-sm text-gray-400 space-y-2">
                <h3 className="uppercase text-xs tracking-wider text-white hover:text-[#BBF451] hover:font-bold">Project Info</h3>
                <hr className="border-gray-700 my-2" />
                <div className="flex justify-between">
                  <span>Year</span>
                  <span className="text-white hover:text-[#BBF451] hover:font-bold hover:text-md ">{el?.year}</span>
                </div>
                <div className="flex justify-between">
                  <span>Role</span>
                  <span className="text-white hover:text-[#BBF451] hover:font-bold hover:text-md">{el.role}</span>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={el?.liveLink}
                target="_blank"
                className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-[#BBF451] hover:text-white hover:font-bold transition"
              >
                Live Demo →
              </Link>
              {el?.githubRepo &&
              <Link
                href={el?.githubRepo}
                target="_blank"
                className="px-5 py-2 text-sm font-semibold border border-[#BBF451] text-[#BBF451] rounded-full flex items-center gap-2 hover:bg-[#BBF451] hover:text-black transition"
              >
                <FaGithub />
                See on GitHub
              </Link>
              }
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
};

export default WorkPage;
