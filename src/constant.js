import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";
import {
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaVrCardboard,
} from "react-icons/fa";

export { logoImg };

export const companyDetails = {
  phone: "+91-9923987757",
  address: "At & Post Tempale, Tal – Mangaon, Dist – Raigad, 402104",
  email: "ainigma.it@gmail.com",
  linkedin: "https://linkedin.com/in/ainigma-it-solutions-26b56b361",
  instagram: "https://www.instagram.com/ainigma.in?igsh=dmNqdHMwNHpxY3Rl",
  facebook: "https://www.facebook.com/share/18QaG3z5d1/",
};


export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// Web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "We build powerful e-commerce platforms that drive sales and enhance customer experiences. Our solutions include secure payment gateways, inventory management, and mobile-optimized designs to maximize your online revenue.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    icon: webServiceIcon2,
    description:
      "Create engaging social networks and community platforms with our custom development services. We implement features like user profiles, content sharing, and real-time interactions to foster meaningful connections.",
  },
  {
    id: 3,
    title: "High-Converting Landing Pages",
    icon: webServiceIcon3,
    description:
      "Our conversion-focused landing pages are designed to turn visitors into customers. We combine compelling copy, strategic CTAs, and performance tracking to maximize your marketing ROI.",
  },
  {
    id: 4,
    title: "Custom Web Applications",
    icon: webServiceIcon4,
    description:
      "Tailored web solutions designed specifically for your business needs. From CRM systems to SaaS platforms, we build scalable applications that streamline operations and boost productivity.",
  },
];

// App development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Premium native iOS apps built with Swift and SwiftUI for superior performance. We create intuitive interfaces that leverage Apple's latest technologies while ensuring App Store compliance.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "High-performance Android apps developed with Kotlin and Jetpack Compose. We optimize for diverse device specifications while maintaining consistent user experiences across all screens.",
  },
  {
    id: 3,
    title: "Cross-Platform Development",
    icon: appServiceIcon3,
    description:
      "Flutter-powered solutions that deliver native-like experiences on both iOS and Android. Our approach maximizes code reuse while maintaining platform-specific optimizations for superior performance.",
  },
  {
    id: 4,
    title: "Progressive Web Apps",
    icon: appServiceIcon4,
    description:
      "Hybrid solutions that combine web flexibility with app-like functionality. We build PWAs that work offline, send push notifications, and install like native apps without store dependencies.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah T",
    position: "Product Manager at TechSolutions",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Partnering with AInigma  was a transformative experience for us. They took our vision for a mobile app and turned it into something that not only works smoothly but also provides a really great user experience. The team listened to our feedback and kept us in the loop throughout the entire process. Since the app launch, we’ve seen a noticeable increase in user engagement and positive feedback. We’re really happy with the results and look forward to collaborating with them again on future projects.”",
  },
  {
    id: 2,
    name: "James R",
    position: "Founder of GreenGoods",
    img: require("./assets/images/testimonial1.png"),
    desc: "“We came to AInigma  with a clear vision: we needed a website that was both modern and functional. What we got exceeded all expectations. Not only did they give us a sleek new design, but they also made sure the website was optimized for both performance and search engines. Since the launch, we've experienced higher traffic and more conversions. Their team made the entire process easy, and we’re thrilled with the end result.”",
  },
  {
    id: 3,
    name: "Jessica P",
    position: "Director of Operations at DataMinds",
    img: require("./assets/images/testimonial2.png"),
    desc: "“We were unsure of how to integrate AI into our business processes, but AInigma  helped us find the perfect solution. They developed a machine learning model that’s completely transformed the way we approach customer service and decision-making. The team’s deep understanding of AI and their dedication to solving our unique challenges made a huge impact on our business. Thanks to their work, we’ve been able to improve our customer support system and gain more meaningful insights from our data.”",
  },
  {
    id: 4,
    name: "Michael B",
    position: "Chief Technology Officer at AutoWorks Inc.",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“AInigma  helped us create a custom software solution that has streamlined our internal processes and increased productivity. The software was tailored specifically to our workflow, which made a big difference in terms of efficiency and reducing human error. Their team really understood our needs and made sure the system integrated flawlessly with the other tools we use. We’re incredibly pleased with the results and look forward to continuing to work with them.”",
  },
  {
    id: 5,
    name: "Emily H",
    position: "Marketing Lead at HomeStyle Furnishings",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“We wanted to offer our customers a way to visualize products in their own space before they bought them. AInigma  brought our idea to life with a brilliant AR app that’s been a hit with our customers. The ability to virtually “try out” furniture before purchasing has improved both customer engagement and sales. Their expertise in AR/VR is second to none, and we couldn’t be more thrilled with how they turned our vision into reality.”",
  },
];

export const allServices = [
  {
    id: 1,
    title: "App Development",
    description:
      "We create powerful, user-friendly mobile applications for both Android and iOS platforms. Our customized approach ensures intuitive design, high performance, and scalability for your business needs.",
    icon: FaMobileAlt,
    detailHeading: "App Development – Crafting Seamless Mobile Experiences",
    detailContent: `<p>In today's world, mobile apps are at the forefront of user engagement. At AInigma , we design and develop powerful, user-friendly mobile applications that cater to both Android and iOS platforms. Our team ensures that every app is not only intuitive and visually appealing but also high-performing and scalable.</p>
    <p>We take a customized approach to app development, focusing on functionality, speed, and security to deliver an outstanding user experience. Whether you need a productivity app, a gaming platform, or a business solution, we're committed to building apps that meet your unique needs.</p>
    <br/>
    <ul>
      <li><strong>Native & Cross-Platform Solutions:</strong> Reach your audience on both Android and iOS with apps built for cross-platform performance.</li>
      <br/>
      <li><strong>UI/UX Design:</strong> Crafting designs that aren't just attractive but also functional and easy to navigate.</li>
      <br/>
      <li><strong>Ongoing Support & Maintenance:</strong> We're here to ensure your app stays up-to-date and runs smoothly.</li>
    </ul>`,
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We build websites that do more than just look good - they deliver real results. From e-commerce to portfolios, we create fast, mobile-friendly sites that convert visitors and reflect your brand identity.",
    icon: FaGlobe,
    detailHeading: "Website Development – Building Your Digital Presence",
    detailContent: `<p>Your website is often the first point of contact between your brand and your audience. At AInigma , we specialize in creating websites that do more than just look good – they deliver real, measurable results. From e-commerce platforms to simple portfolio sites, our team has the expertise to build websites that not only capture attention but also convert visitors into customers.</p>
    <p>We prioritize user experience, ensuring that your site is fast, mobile-friendly, and search engine optimized. Our designs are tailored to reflect your brand's identity, while our development process focuses on functionality, security, and scalability.</p>
    <br/>
    <ul>
      <li><strong>Custom Website Design:</strong> Unique designs that align with your brand and resonate with your audience.</li>
      <br/>
      <li><strong>E-commerce Solutions:</strong> Seamlessly integrated shopping experiences that drive conversions.</li>
      <br/>
      <li><strong>SEO & Performance Optimization:</strong> Helping you rank higher and deliver a faster, smoother experience for your visitors.</li>
    </ul>`,
  },
  {
    id: 3,
    title: "AI Development",
    description:
      "We integrate AI into your operations to enhance productivity and decision-making. Our solutions in machine learning, NLP, and computer vision solve real-world problems with practical applications.",
    icon: FaRobot,
    detailHeading:
      "AI Development – Harnessing the Power of Intelligent Technology",
    detailContent: `<p>AI is no longer the future; it's the present. At AInigma , we help businesses integrate AI into their operations, empowering them to make smarter decisions and enhance productivity. Whether it's machine learning, natural language processing, or computer vision, we build AI-driven solutions that solve real-world problems.</p>
    <p>Our AI experts work closely with you to understand your goals and develop solutions that not only meet your needs but also anticipate future demands. From automating tasks to providing actionable insights, we bring AI to life in a way that's practical and impactful.</p>
    <br/>
    <ul>
      <li><strong>Machine Learning & Deep Learning:</strong> Building systems that evolve and improve as they process more data.</li>
      <br/>
      <li><strong>Natural Language Processing (NLP):</strong> Enable your systems to understand, interpret, and generate human language for better user interactions.</li>
      <br/>
      <li><strong>Computer Vision:</strong> Utilize AI to analyze and understand visual data, useful for industries like healthcare, security, and retail.</li>
    </ul>`,
  },
  {
    id: 4,
    title: "Custom Software Development",
    description:
      "We build tailored software solutions that fit your unique business requirements. Our scalable and secure applications streamline operations and grow with your business needs.",
    icon: FaLaptopCode,
    detailHeading:
      "Custom Software Development – Tailored to Your Business Needs",
    detailContent: `<p>Every business is unique, and sometimes off-the-shelf software just doesn't cut it. At AInigma , we specialize in developing custom software solutions designed specifically for your business. Whether you need an enterprise resource planning (ERP) system, customer relationship management (CRM) software, or a tailored web application, we can create the perfect solution for you.</p>
    <p>Our custom development process is collaborative, ensuring that the final product aligns with your goals and streamlines your operations. We focus on creating solutions that are scalable, secure, and ready for the future.</p>
    <br/>
    <ul>
      <li><strong>Automation & Workflow Optimization:</strong> Reduce manual effort and improve efficiency with software that automates routine tasks.</li>
      <br/>
      <li><strong>Cloud Solutions:</strong> Flexible, scalable software that grows with your business and adapts to your needs.</li>
      <br/>
      <li><strong>Cross-Platform Compatibility:</strong> Ensuring your custom solution works seamlessly across devices and operating systems.</li>
    </ul>`,
  },
  {
    id: 5,
    title: "AR/VR Development",
    description:
      "We create immersive AR/VR experiences that transform how users interact with technology. From virtual training to product demos, our solutions add real value across multiple industries.",
    icon: FaVrCardboard,
    detailHeading: "AR/VR Development – Immersing Users in New Realities",
    detailContent: `<p>The world of augmented and virtual reality is transforming how we interact with technology, and at AInigma , we're pushing the boundaries of this immersive space. Whether you're looking to create virtual training environments, interactive product demos, or engaging experiences for entertainment, we have the expertise to bring your vision to life.</p>
    <p>We design AR and VR solutions that not only engage users but also add real value to your business, whether that's through improved training, enhanced marketing, or innovative product experiences. Our team works across industries, including gaming, education, real estate, and healthcare, to build experiences that captivate and inspire.</p>
    <br/>
    <ul>
      <li><strong>Virtual Reality (VR) Solutions:</strong> Fully immersive, interactive experiences for training, entertainment, or simulation.</li>
      <br/>
      <li><strong>Augmented Reality (AR) Applications:</strong> Enhance the real world with digital overlays, perfect for retail, marketing, or product demonstrations.</li>
      <br/>
      <li><strong>3D Modeling & Animation:</strong> Bring your ideas to life with realistic 3D visualizations that offer a truly immersive experience.</li>
    </ul>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
