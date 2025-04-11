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
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2">My portfolio highlights</h2>

        <div className="mt-8 grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

// DATA
const projects = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

export default Project;
