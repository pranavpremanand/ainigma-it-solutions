import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-secondary/10 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Values" />
          <h2 data-aos="fade-up" className="heading-2 mx-0">
            Driving Innovation & Excellence
          </h2>
          <p data-aos="fade-up" className="desc">
            At AInigma  IT Solutions, we believe in the power of innovation to
            drive change, and we are committed to delivering exceptional
            solutions that meet the unique needs of our clients.
          </p>
          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Innovation and Excellence</h6>
              <p className="desc">
                Unleashing creativity, pushing boundaries, and delivering
                outstanding results.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">
                Integrity and Transparency
              </h6>
              <p className="desc">
                Trustworthy, ethical, and transparent communication, ensuring
                transparency in all our dealings.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-primary text-white flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className=" tracking-widest">Web Development</p>
              <p className="">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className=" tracking-widest">App Development</p>
              <p className="">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className=" tracking-widest">AI Development</p>
              <p className="">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className=" tracking-widest">IT Consulting</p>
              <p className="">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
