import React from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../constant";
import LandingFooter from "../components/landingPages/LandingFooter";

const ThankYou = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-18rem)] flex flex-col items-center justify-center">
        <div className="py-4 sticky top-0 w-full bg-primary backdrop-blur-md z-50 text-white">
          <div className="wrapper flex justify-between items-center gap-10">
            <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
              <Link smooth={true} to="/" className="cursor-pointer">
                <img
                  loading="lazy"
                  src={logoImg}
                  width={150}
                  height={150}
                  className="w-[3.2rem] md:w-[3.5rem] md:scale-125"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper flex-1 !py-[10rem] flex flex-col items-center justify-center h-full">
          <h1 className="heading-1">Thank You</h1>
          <p className="text-center text-sm md:text-base text-balance">
            Thanks for contacting us, one of our associates will get in touch
            with you soon!
          </p>
          <Link
            to={"/"}
            className="mt-7 text-sm cursor-pointer primary-btn w-fit"
          >
            Home
          </Link>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default ThankYou;
