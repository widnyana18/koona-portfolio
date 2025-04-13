/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * COMPONENTS
 */
import { ButtonPrimary } from "./Button";

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="https://wa.me/6285179669575"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid gap-4 grid-cols-2 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.svg" alt="Logo" width={50} height={50} />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2023{" "}
            <span className="text-zinc-200">Komang Widnyana. All rights</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Skill",
    href: "#skill",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Project",
    href: "#project",
  },
  {
    label: "Contact Me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/widnyana18",
  },
  {
    label: "LinkedIn",
    href: "linkedin.com/in/i-komang-widnyana-a07a56264",
  },
  {
    label: "Twitter X",
    href: "https://x.com/koonadev",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/koona.dev",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/komangwidnyana",
  },
];

export default Footer;
