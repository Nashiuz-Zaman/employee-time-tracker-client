// react
import PropTypes from "prop-types";

// react-router
import { Link } from "react-router-dom";

// components
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// redux
import { useSelector } from "react-redux";

// auth slice methods
import { authActions } from "../../../../features/auth/authSlice";
const { setUserAlreadyRegistered } = authActions;

const RegistrationFormWithImage = ({ imageSource, appLoading }) => {
  const { userAlreadyRegistered } = useSelector((store) => store.auth);

  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1.5fr_1fr]  rounded-2xl overflow-hidden mx-auto w-[90%] md:w-[80%] 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-large form-animation`}
    >
      {/* image */}
      <div className="w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt="cover image"
        />
      </div>

      {/* Registration form */}
      <div className="w-full">
        {!userAlreadyRegistered && <RegistrationForm loading={appLoading} />}

        {/* if user exists then show the user exists message */}
        {!appLoading && userAlreadyRegistered && (
          <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="mb-4 text-center text-2xl">User already exists</h2>

              {/* if user already registered */}
              <Link to="/auth/login" className="block mx-auto">
                <ButtonBtn
                  onClickFunction={() => {
                    setUserAlreadyRegistered(false);
                  }}
                  text="Log in to your account"
                  modifyClasses="mx-auto"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

RegistrationFormWithImage.propTypes = {
  imageSource: PropTypes.string,
  appLoading: PropTypes.bool,
};

export default RegistrationFormWithImage;
