// components
import BannerText from "../../../shared/BannerText/BannerText";
import ClockInForm from "../../../shared/ClockInForm/ClockInForm";
import ProgressTracker from "../ProgressTracker/ProgressTracker";

// data
import { homeTopBannerTextContent } from "../../../../data/homeUiContent";

// hooks
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

const Banner = () => {
  // extract heading and subheading
  const { heading, description1 } = homeTopBannerTextContent;

  const { profileData, appLoading } = useAuth();

  return (
    <div className="grid grid-cols-1 gap-[5rem] lg:grid-cols-2 items-center">
      {/* banner text part */}
      <div>
        <BannerText heading={heading} description1={description1} />
      </div>

      {/* banner clock in */}
      <div>
        {appLoading && (
          <LoadingSpinner
            text="Processing Data"
            textSizeClass="text-4xl"
            loaderSizeClass="text-4xl"
          />
        )}
        {!appLoading && profileData && <ProgressTracker />}
        {!appLoading && !profileData && <ClockInForm />}
      </div>
    </div>
  );
};

export default Banner;
