/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONENTs
 */
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2">My portfolio highlights</h2>

        <div className="mt-8 grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// DATA
const projects = [
  {
    title: "Bala Indonesia Website",
    date: "2021",
    duration: "1 months",
    desc: "A website for sales product company.",
    techStack: ["React", "Tailwind", "TypeScript", "Firebase", "Admin JS"],
    imgSrc: "/images/bala-web.png",
    tags: ["E-commerce", "Biotech", "WA Blast", "Payment", "Admin Panel"],
    githubLink: "https://github.com/widnyana18/bala-indonesia",
    websiteLink: "https://bala-indonesia.com/",
  },
  {
    title: "Dunia Joglo Website",
    date: "2023",
    duration: "2 months",
    desc: "A website for a sales product Property Company.",
    techStack: [
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Admin JS",
      "Xendit",
    ],
    imgSrc: "/images/dj-web.png",
    tags: ["E-commerce", "Property", "Payment Gateway", "Admin Panel"],
    githubLink: "https://github.com/widnyana18/dunia-joglo",
    websiteLink: "https://dunia-joglo.com/",
  },
  {
    title: "Siap-DP",
    date: "2024",
    duration: "1 months",
    desc: "A website for generate the data to file Excel for the employee accounting report in goverment.",
    techStack: ["Bootstrap", "Node.js", "MongoDB"],
    imgSrc: "/images/siap-dp-web.png",
    tags: ["Admin Reporting Website"],
    githubLink: "https://github.com/widnyana18/siap-dp-report",
    websiteLink: "https://siap-dp.com",
  },
  {
    title: "Vigo Net",
    date: "2024",
    duration: "6 months",
    desc: "A Mobile Apps for order & instalation internet service, billing system and internet management customer.",
    techStack: ["Flutter", "TypeScript", "Node.js", "MongoDB", "Admin JS"],
    imgSrc: "/images/vigo-app.png",
    tags: [
      "E-commerce",
      "ISP",
      "Android",
      "IOS",
      "Admin Panel",
      "Ticketing",
      "Billing System",
    ],
    githubLink: "https://github.com/widnyana18/vigo-net",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.vigo.vigo_net",
  },
];

export default Project;
