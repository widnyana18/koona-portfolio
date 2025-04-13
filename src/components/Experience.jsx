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
    <section id="experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">Job Experience</h2>

        <div className="mt-8 grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(310px,1fr))]">
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
    company: "PT. Bala Biotech Indonesia",
    jobTitle: "Web Develooper",
    year: "2021",
    period: "6 months",
    jobType: "Internship",
    content:
      "Build web micro business for sale product client from scratch, first design mockup and then develop to code using react.js and node.js.",
    logo: "/images/bala.png",
  },
  {
    company: "Dunia Joglo",
    jobTitle: "Programmer IT",
    year: "2023",
    period: "6 months",
    jobType: "Paid Internship",
    content:
      "Build web micro business for sale product client from scratch, using vue.js, and node.js.",
    logo: "/images/dj.png",
  },
  {
    company: "WNG",
    jobTitle: "Mobile Developer",
    year: "2023 - 2024",
    period: "6 months",
    jobType: "Paid Internship",
    content:
      "Implement SDLC process for build software. First of all, I create user flow and mockup design. after that, I develop to mobile app using Flutter.",
    logo: "/images/wng.png",
  },
  {
    company: "PT.Bima Sakti Alterra",
    jobTitle: "Tech Ops Developer",
    year: "2024 - 2025",
    period: "6 months",
    jobType: "Fulltime",
    content:
      "Testing web app , maintenance web, fix bug, update new feature, and analyst database.",
    logo: "/images/bsa.png",
  },
];

export default Experience;
