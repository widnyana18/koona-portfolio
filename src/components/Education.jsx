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
        <h2 className="headline-2 mb-8">My journey as Programmer</h2>

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
    institution: "ITB Stikom Bali",
    collage: "S1 - Information System",
    startYear: "2018",
    endYear: "2023",
    gpa: "3.57",
    content:
      "Take part in committee event and event bootcamp. Build Dynamic web sales book and furniture.",
    logo: "/images/stikom.png",
  },
  {
    institution: "Academind (Maxmillian) - Udemy",
    collage: "Fullstack Website with MERN and Flutter Mobile App",
    startYear: "2020",
    endYear: "2023",
    gpa: null,
    content:
      "Learn fundamental React, State Management, React Router, and build small project (Include Sertificate) and learn Flutter Mobile App.",
    logo: "/images/udemy.svg",
  },
];

export default Education;
