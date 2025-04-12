/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONENTs
 */
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section id="education" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>

        <div className="md:not-only:flex items-stretch gap-3 w-fit grid">
          {educations.map(
            (
              { institution, collage, startYear, endYear, gpa, content, logo },
              key
            ) => (
              <EducationCard
                key={key}
                content={content}
                startYear={startYear}
                endYear={endYear}
                gpa={gpa}
                collage={collage}
                institution={institution}
                logo={logo}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

const educations = [
  {
    institution: "PixelForge",
    collage: "Sophia Ramirez",
    startYear: "2018",
    endYear: "2023",
    gpa: "4.56",
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    logo: "/images/logo-1.png",
  },
  {
    institution: "NexaWave",
    collage: "Ethan Caldwell",
    startYear: "2018",
    endYear: "2023",
    gpa: null,
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    logo: "/images/logo-2.png",
  },
];

export default Education;
