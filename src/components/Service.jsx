/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */


/**
 * NODE MODULES
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * REGISTER GSAP
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to

/**
 * COMPONENTs
 */
import ServiceCard from "./ServiceCard";

function Service() {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-100% 50%",
        end: "420% 80%",
        scrub: true,
        markers: true,
      },
      x: '-1200',
    });
  });

  return (
    <section id="service" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">The Service I Offer</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {services.map(({ desc, title, imgSrc }, key) => (
            <ServiceCard key={key} desc={desc} title={title} imgSrc={imgSrc} classes='scrub-slide' />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Web App Development",
    desc: "Build a modern web app, landing pages, or e-commerce store with our expert developers.",
    imgSrc: "/images/web.svg",
  },
  {
    title: "Mobile Apps Android & IOS",
    desc: "Build interactive mobile apps for Android and IOS with our skilled developers.",
    imgSrc: "/images/mobile.svg",
  },
  {
    title: "Maintenance & Update Feature",
    desc: "Fix bug and update features for your existing application.",
    imgSrc: "/images/maintenance.svg",
  },
  {
    title: "App Design",
    desc: "Build bussiness flow and user experience for your application.",
    imgSrc: "/images/design.svg",
  },
  {
    title: "Course & Mentoring",
    desc: "Learn programming with our mentor and course.",
    imgSrc: "/images/course.svg",
  },
];

export default Service;
