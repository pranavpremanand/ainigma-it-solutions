import React from "react";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/Data analytics.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/E-Commerce Development.svg";
import WorkProcess from "../components/WorkProcess";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/60 to-background"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to{" "}
            <span className="text-primary font-semibold block sm:inline">
              AInigma  IT Solutions
            </span>
          </p>
          <h1 className="heading capitalize">
            Innovating the Digital Landscape
          </h1>
          <p className="sub-heading max-w-5xl mx-auto text-center">
            Software solutions that drive success. We specialize in Web
            Development, UI/UX design, and E-Commerce solutions tailored to your
            needs.
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            We specialize in creating dynamic and user-friendly websites that
            provide a seamless experience for your users.
          </p>
        </div>
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">AI Solutions</p>
          </div>
          <p className="desc">
            We harness the power of AI to create intelligent systems that learn
            and adapt, providing you with insights and automation that drive
            efficiency.
          </p>
        </div>
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              E-Commerce Development
            </p>
          </div>
          <p className="desc">
            We build robust e-commerce platforms that provide a seamless
            shopping experience, from product browsing to secure checkout.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:block h-full">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="600"
                className="object-cover h-full rounded-lg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-center lg:items-start flex-col gap-7"
            >
              <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Bringing Ideas to Life
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">
                    AInigma  IT Solutions
                  </span>
                  , we’re passionate about creating solutions that make a real
                  difference. Our team specializes in a wide range of digital
                  services, from mobile app and website development to
                  cutting-edge AI, custom software, and immersive AR/VR
                  technologies. Whether you're a startup, an established
                  business, or a large enterprise, we’re here to bring your
                  digital ideas to life.
                </p>
              </div>
              <div className="w-fit mt-4 justify-center lg:justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <TrustWorthySection />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
