/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

function EducationCard({ desc, imgSrc, title }) {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <p className="text-zinc-400 mb-8">{desc}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={title}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div>
          <p>{title}</p>

          <p className="text-xs text-zinc-400 tracking-wider"></p>
        </div>
      </div>
    </div>
  );
}

EducationCard.propTypes = {
  desc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EducationCard;
