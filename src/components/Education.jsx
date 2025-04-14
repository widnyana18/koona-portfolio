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
        <h2 className="headline-2 mb-8 reveal-up">My journey as Programmer</h2>

        <div className="md:items-stretch gap-3 w-fit grid md:grid-cols-2">
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
                classes="reveal-up"
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
    institution: "Studi Independen - Kampus Merdeka & Hacktiv8",
    collage: "Scalable web service & API with Golang",
    startYear: "2021",
    endYear: "2022",
    gpa: 'B',
    content:
      "Learn fundamental, concurency, database, & Rest API, build final project (include sertificate)",
    logo: "/images/hacktiv8.png",
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
