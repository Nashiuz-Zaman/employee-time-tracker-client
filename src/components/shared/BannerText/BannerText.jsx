// react
import PropTypes from "prop-types";

function BannerText({ heading, description1 }) {
  return (
    <div className="w-full h-full flex items-center text-center lg:text-left">
      <div className="w-full lg:w-[80%] space-y-4 lg:space-y-5">
        {/* text part */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl">
          {heading}
        </h1>

        <p className="font-bold text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl">
          {description1}
        </p>
      </div>
    </div>
  );
}

BannerText.propTypes = {
  heading: PropTypes.node,
  description1: PropTypes.node,
};

export default BannerText;
