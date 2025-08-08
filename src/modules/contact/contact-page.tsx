'use client'
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import emailjs from "emailjs-com";
import Link from "next/link";


const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/amin-haque-109a47263/" },
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/AMINHAQUE-006" },
  { icon: <FaXTwitter />, label: "Twitter", url: "https://x.com/Amin__Haque" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/amin.inst4" },
];


const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2z5qdrn",
        "template_tifu68p",
        formData,
        "5DMNdcxFXob2XFaIc"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Something went wrong, try again.");
        }
      );
  };

  return (
    <div className="hero min-h-screen bg-[#241d20] text-white px-4 sm:px-8 py-12">
      <div className="hero-content flex flex-col lg:flex-row justify-between gap-12 w-full max-w-6xl">
        {/* Left Panel */}
        <div className="flex flex-col gap-5 max-w-lg">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300">
            Say hello at{" "}
            <Link
              target="_blank"
              href="mailto:robertgarcia@gmail.com"
              className="underline hover:text-lime-400"
            >
              aminhaque5006@gmail.com
            </Link>
          </p>
          <p className="text-gray-300">
            For more info, here&apos;s my{" "}
            <Link href="#" target="_blank" className="underline hover:text-lime-400">
              resume
            </Link>
          </p>

          {/* Social Icons */}
            <div className="flex gap-5 text-[#BBF451]  text-2xl mt-2">
              {socials.map((social, i) => (
                <Link
                  target="_blank"
                  key={i}
                  href={social.url}
                  aria-label={social.label}
                  className="hover:scale-110 transition-transform text-[#BBF451] hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

          <p className="text-sm text-gray-500 mt-10">
            © 2023 Amin Haque. All rights reserved.
          </p>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="card w-full max-w-md shadow-2xl bg-black text-white">
          <div className="card-body">
             <form onSubmit={sendEmail} className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        required
        className="input input-bordered"
      />
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        className="input input-bordered"
      />
      <input
        type="text"
        name="subject"
        placeholder="Let's talk..."
        value={formData.subject}
        onChange={handleChange}
        className="input input-bordered"
      />
      <textarea
        name="message"
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        required
        className="textarea textarea-bordered"
      />
      <button
        type="submit"
        className="hover:bg-[#BBF451] hover:text-black cursor-pointer py-2 border text-[#BBF451] border-[#BBF451] px-6 rounded-full"
      >
        Submit
      </button>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
