/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONENTs
 */
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <section id="service" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {services.map(({ desc, title, imgSrc }, key) => (
            <ServiceCard
              key={key}
              desc={desc}
              title={title}
              imgSrc={imgSrc}              
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    desc:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    title: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",    
  },
  {
    desc:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    title: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",    
  },
  {
    desc:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    title: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",    
  },
  {
    desc:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    title: "Noah Williams",
    imgSrc: "/images/people-4.jpg",    
  },
  {
    desc:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    title: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",    
  },
  {
    desc:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    title: "Jonathan",
    imgSrc: "/images/people-6.jpg",    
  },
];

export default Service;