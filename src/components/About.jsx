/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONETS
 */

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Mang Wid, a Software developer with give you
            solution for your bussiness with afordable price and provide the
            best service. Building application that focus on user needs, main
            problem, bussiness flow, functionality, and make it simple &
            efficient solution.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:tex-4xl">
                    {number}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="ml-auto md:w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// DATA
const aboutItems = [
  {
    label: "Origin",
    number: "Indonesia",
  },
  {
    label: "Project done",
    number: "2 of 5",
  },
  {
    label: "Client",
    number: "3",
  },
  {
    label: "Programmer Experience",
    number: "5 years",
  },
  {
    label: "Work experience",
    number: "1 year",
  },
];

export default About;
