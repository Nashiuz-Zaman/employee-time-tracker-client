// react
import PropTypes from "prop-types";

//redux
import { useSelector } from "react-redux";

function BannerText({ heading, description1 }) {
  const { profileData } = useSelector((store) => store.auth);

  return (
    <div className="w-full h-full flex items-center text-center lg:text-left">
      <div className="w-full space-y-4 lg:space-y-5">
        {/* text part */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl">
          {heading}
        </h1>

        <p className="font-bold text-3xl sm:text-4xl md:text-4xl 3xl:text-5xl">
          {profileData ? profileData.fullname : description1}
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
