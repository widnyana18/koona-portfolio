/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

function EducationCard({
  content,
  institution,
  startYear,
  endYear,
  gpa,
  collage,
  logo,
}) {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-start gap-2 mt-2 mb-4">
        <figure className="rounded-lg me-4">
          <img
            src={logo}
            alt={institution}
            width={80}
            height={80}
            loading="lazy"
            className="max-w-screen"
          />
        </figure>

        <div>
          <h2 className="title-1">{institution}</h2>

          <p className="text-sm text-zinc-400 tracking-wider">
            {startYear + " - " + endYear}
          </p>
        </div>
      </div>

      <p className="tracking-wider mb-1">
        {collage}{" "}
        <span className="text-red-400">
          {gpa != null ? " - GPA: " + gpa : ""}
        </span>
      </p>

      <p className="text-zinc-400">{content}</p>
    </div>
  );
}

EducationCard.propTypes = {
  content: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  collage: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default EducationCard;
