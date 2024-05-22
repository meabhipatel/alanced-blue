import React from "react";
import heroBackground from "../../assets/hero_background.svg";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <>
      <div className="h-[110vh] bg-cover" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="text-left pt-40 ml-[11.5vw] ">
          <h1 className="text-[#797979] text-lg font-semibold tracking-wider">
            <span className="text-[#031136] indent-4">Popular:</span> Design Art Business Video Editing
          </h1>
          <h6 className="text-[50px] font-semibold leading-[67.7px] mt-2 text-[#031136]">
            Find & Hire <br /> Top 3% of expert <br /> on Alanced
          </h6>
          <h1 className="mt-6 text-[#797979] text-[16px] font-normal leading-[26px] mb-3.5">
            With the largest professional creative community online, simply <br /> search through from our website
          </h1>
          <Link to="/sign-up">
            <span class="inline-block text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Background;
