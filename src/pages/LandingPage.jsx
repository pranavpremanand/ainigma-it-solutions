import React, { lazy } from "react";
import webBanner from "../assets/images/web-banner-landing.jpg";
import appBanner from "../assets/images/app-banner-landing.jpg";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.jpg";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";

const LandingHeader = lazy(() => import("../components/landingPages/LandingHeader"));
const LandingFooter = lazy(() => import("../components/landingPages/LandingFooter"));
const ContactForm = lazy(() => import("../components/landingPages/ContactForm"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() => import("../components/JoinHappyCustomers"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services, banner;
  if (page === "web-development") {
    banner = webBanner;
    services = webDevelopmentServices;
  } else {
    banner = appBanner;
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-[#ffffffb5] to-background"></div>
        <img
          loading="lazy"
          src={banner}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to{" "}
            <span className="text-primary font-semibold block sm:inline">
              Ainigma IT Solutions
            </span>
          </p>
          <h1 className="heading text-transparent bg-gradient-to-r from-[#91851e] to-primary bg-clip-text">
            {isWebLanding
              ? "Web Development That Drives Business Growth"
              : "Mobile App Experiences Users Love"}
          </h1>
          <p className="sub-heading">
            {isWebLanding
              ? "Custom websites designed to convert visitors and elevate your digital presence"
              : "Native and cross-platform apps built for performance and engagement"}
          </p>
        </div>
      </section>

      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Results-Driven Websites for the Modern Business"
                  : "Mobile Solutions That Deliver Real Business Value"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Your website is your digital storefront, and we build sites that make lasting impressions. Our web development combines stunning design with technical excellence to create fast, secure, and conversion-optimized websites. Whether you need an e-commerce powerhouse or a sleek corporate site, we deliver solutions that align with your business objectives and drive measurable results."
                  : "In today's mobile-first world, your app needs to stand out. We develop high-performance mobile applications that solve real business challenges while delivering exceptional user experiences. From initial concept to final deployment, we focus on creating apps that are intuitive, scalable, and built to grow with your business."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Our Web Development Expertise"
              : "Our App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Comprehensive Solutions for Every Digital Need"
            : "End-to-End Mobile Development Capabilities"}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-primary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;