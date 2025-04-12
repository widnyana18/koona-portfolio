/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONENTs
 */
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="education" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>

        <div className="md:not-only:flex items-stretch gap-3 w-fit grid">
          {experience.map(
            (
              { company, jobTitle, year, period, jobType, content, logo },
              key
            ) => (
              <ExperienceCard
                key={key}
                content={content}
                year={year}
                period={period}
                jobType={jobType}
                jobTitle={jobTitle}
                company={company}
                logo={logo}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    company: "PixelForge",
    jobTitle: "Sophia Ramirez",
    year: "2022 - 2023",
    period: "1 year",
    jobType: "Internship",
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    logo: "/images/logo-1.png",
  },
  {
    company: "NexaWave",
    jobTitle: "Ethan Caldwell",
    year: "2024",
    period: "6 months",
    jobType: 'Full-time',
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    logo: "/images/logo-2.png",
  },
];

export default Experience;
