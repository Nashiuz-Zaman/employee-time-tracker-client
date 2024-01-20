// components
import BannerText from "../../../shared/BannerText/BannerText";
import ClockInForm from "../../../shared/ClockInForm/ClockInForm";
import ProgressTracker from "../ProgressTracker/ProgressTracker";

// data
import { homeTopBannerTextContent } from "../../../../data/homeUiContent";

// hooks
import useAuth from "../../../../hooks/useAuth";

const Banner = () => {
  // extract heading and subheading
  const { heading, description1 } = homeTopBannerTextContent;

  const { profileData } = useAuth();

  console.log(profileData);

  return (
    <div className="grid grid-cols-1 gap-[5rem] lg:grid-cols-2 items-center">
      {/* banner text part */}
      <div>
        <BannerText heading={heading} description1={description1} />
      </div>

      {/* banner clock in */}
      <div>
        {profileData && <ProgressTracker />}
        {!profileData && <ClockInForm />}
      </div>
    </div>
  );
};

export default Banner;
