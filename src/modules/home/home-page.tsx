import Image from "next/image";
import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";


const HomePage = () => {
  return (
    <div className="bg-black flex w-full flex-col md:flex-row h-[80vh]">
      <div className="w-full md:w-1/2 card bg-black text-white rounded-box grid grow place-items-center p-2 md:p-4">
        <div className="card card-dash bg-black m-auto">
          <div className="card-body">
            <h1 className="uppercase card-title text-7xl"> HI, I AM</h1>
            <h1 className="uppercase card-title text-4xl md:text-6xl"> AMIN HAQUE.</h1>
            <p className="w-full md:w-1/2 my-4 text-lg">
              A India based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
            <div className="card-actions flex items-center gap-4">
              <button className="btn btn-primary btn-outline btn-lg uppercase">Contact me</button>
              <button className="btn btn-outline btn-lg btn-circle">
                <TiSocialLinkedin color="white" size={26}/>
              </button>
              <button className="btn btn-outline btn-lg btn-circle">
                <PiGithubLogoFill color="white" size={26}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="divider divider-horizontal">OR</div> */}
      <div className="w-full md:w-1/2 card bg-black text-white rounded-box grid grow place-items-center p-4 ">
        <figure className="">
          <Image
            width={600}
            height={700}
            src="/image.jpg" 
            alt="Home Profile"
            className="rounded-lg" 
          />
        </figure>
        {/* <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
