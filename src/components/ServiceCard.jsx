/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

function ServiceCard({ desc, imgSrc, title }) {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <figure className="img-box rounded-lg mb-6 w-14 h-14">
        <img
          src={imgSrc}
          alt={title}
          width={32}
          height={32}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <p>{title}</p>
      <p className="text-zinc-400 mt-2">{desc}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  desc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServiceCard;
