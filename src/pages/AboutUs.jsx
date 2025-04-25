import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Your Trusted Partner for Digital Transformation
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Ainigma IT Solutions
                </span>
                , we believe that great technology can transform the way
                businesses operate. As a team of passionate professionals, we
                specialize in delivering digital solutions that solve problems
                and create opportunities. From mobile apps and websites to AI,
                custom software, and immersive AR/VR experiences, we’re
                dedicated to turning your ideas into reality. <br />
                <br />
                Whether you're a budding startup or an established enterprise,
                our mission is to help you grow, innovate, and stay ahead in a
                constantly evolving digital world. We focus on understanding
                your unique challenges and working alongside you to craft
                solutions that truly make an impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
