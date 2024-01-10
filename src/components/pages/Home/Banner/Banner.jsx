// components
import BannerText from "../../../shared/BannerText/BannerText";
import ClockInForm from "../../../shared/ClockInForm/ClockInForm";

// data
import { homeTopBannerTextContent } from "../../../../data/homeUiContent";

const Banner = () => {
  // extract heading and subheading
  const { heading, description1 } = homeTopBannerTextContent;

  return (
    <div className="grid grid-cols-1 gap-[5rem] lg:grid-cols-2 items-center">
      {/* banner text part */}
      <div>
        <BannerText heading={heading} description1={description1} />
      </div>

      {/* banner clock in */}
      <div>
        <ClockInForm />
      </div>
    </div>
  );
};

export default Banner;
