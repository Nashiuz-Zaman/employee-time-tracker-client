// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import BrandLogo from "../BrandLogo/BrandLogo";

// data
import logoWhite from "./../../../assets/websiteLogo/logo-white.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] mt-auto py-8">
      <InnerContainer>
        <div className="flex items-center justify-between">
          {/* website logo */}
          <BrandLogo imageSource={logoWhite} />

          {/* copyright part */}
          <small className="text-white 2xl:text-lg">
            &copy; {currentYear} Shift Smart Technologies, Developed by Nashiuz
            Zaman
          </small>
        </div>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  addressData: PropTypes.object,
};

export default Footer;
