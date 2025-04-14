/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

// COMPONENTS
import SkillCard from "./SkillCard";

function Skill() {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tech Stack I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tech, framework, library, tools and technologies
          I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => {
            return (
              <SkillCard imgSrc={imgSrc} label={label} desc={desc} classes='reveal-up' key={key} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "Typescript",
    desc: "JS Language",
  },
  {
    imgSrc: "/images/jquery.svg",
    label: "Jquery",
    desc: "JS Library",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JS Framework",
  },

  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/nestjs.svg",
    label: "Nest JS",
    desc: "Backend Framework",
  },

  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PorstgreSQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "NoSql Database",
  },
  {
    imgSrc: "/images/dart.svg",
    label: "Dart",
    desc: "Cross Platform Language",
  },
  {
    imgSrc: "/images/flutter.svg",
    label: "Flutter",
    desc: "Mobile App Framework",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Backend Service",
  },
  {
    imgSrc: "/images/firestore.svg",
    label: "Firestore",
    desc: "Cloud Database",
  },

  {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "Web Bundler",
  },
  {
    imgSrc: "/images/vercel.svg",
    label: "Vercel",
    desc: "Web Hosting",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Container Devops",
  },

  {
    imgSrc: "/images/rabbitmq.svg",
    label: "Rabbit MQ",
    desc: "Message Broker Microservice",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

export default Skill;
