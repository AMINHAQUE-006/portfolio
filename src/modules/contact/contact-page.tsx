import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="hero min-h-screen bg-black text-white px-4 sm:px-8 py-12">
      <div className="hero-content flex flex-col lg:flex-row justify-between gap-12 w-full max-w-6xl">
        {/* Left Panel */}
        <div className="flex flex-col gap-5 max-w-lg">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300">
            Say hello at{" "}
            <a
              href="mailto:robertgarcia@gmail.com"
              className="underline hover:text-lime-400"
            >
              aminhaque5006@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            For more info, here&apos;s my{" "}
            <a href="#" className="underline hover:text-lime-400">
              resume
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-lime-300 text-2xl mt-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-10">
            © 2023 Amin Haque. All rights reserved.
          </p>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="card w-full max-w-md shadow-2xl bg-neutral text-white">
          <div className="card-body">
            <form className="flex flex-col gap-5">
              <label className="form-control w-full">
                <span className="label-text text-white">Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered bg-black/20 text-white placeholder-gray-400"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-white">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered bg-black/20 text-white placeholder-gray-400"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-white">Subject</span>
                <input
                  type="text"
                  placeholder="Let's talk..."
                  className="input input-bordered bg-black/20 text-white placeholder-gray-400"
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-white">Message</span>
                <textarea
                  className="textarea textarea-bordered h-32 bg-black/20 text-white placeholder-gray-400"
                  placeholder="Your message..."
                  required
                />
              </label>

              <button
                type="submit"
                className="btn bg-lime-300 text-black px-6 rounded-full hover:bg-lime-400 transition-colors w-fit self-start"
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
