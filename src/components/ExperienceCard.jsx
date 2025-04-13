/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

function ExperienceCard({
  content,
  company,
  year,
  period,
  jobTitle,
  jobType,
  logo,
}) {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[350px]">
      <div className="flex items-center gap-2 mt-auto mb-4">
        <figure className="img-box rounded-lg me-4">
          <img
            src={logo}
            alt={company}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div>
          <h2 className="title-1">{jobTitle}</h2>

          <p className="text-zinc-400 tracking-wider">
            {company}
          </p>
        </div>
      </div>

      <p className="text-sm tracking-wider mb-2">
        {year + ' (' + period + ')' + " - " + jobType}                   
      </p>

      <p className="text-zinc-400">{content}</p>
    </div>
  );
}

ExperienceCard.propTypes = {
  content: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default ExperienceCard;
