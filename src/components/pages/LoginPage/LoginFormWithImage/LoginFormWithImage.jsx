// react
import PropTypes from "prop-types";

// components
import LoginForm from "../LoginForm/LoginForm";

const LoginFormWithImage = ({ imageSource, appLoading }) => {
  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] rounded-2xl overflow-hidden mx-auto w-[90%] md:w-[80%] 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-large form-animation`}
    >
      {/* image */}
      <div className="w-full h-full overflow-hidden">
        <img
          className="h-full object-cover"
          src={imageSource}
          alt="cover image"
        />
      </div>

      {/* login form */}
      <div className="w-full flex items-center">
        <LoginForm loading={appLoading} />
      </div>
    </div>
  );
};

LoginFormWithImage.propTypes = {
  imageSource: PropTypes.string,
  appLoading: PropTypes.bool,
};

export default LoginFormWithImage;
