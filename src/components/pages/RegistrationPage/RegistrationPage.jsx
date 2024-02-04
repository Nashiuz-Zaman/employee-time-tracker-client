// react imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import RegistrationFormWithImage from "./RegistrationFormWithImage/RegistrationFormWithImage";

// hook
import useRedirectDashboard from "../../../hooks/useRedirectDashboard";

// data
import { authImage } from "../../../data/authUIContent";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../features/auth/authSlice";

// extract setError method
const { setRegistrationErrors } = authActions;

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { profileData, appLoading } = useSelector((store) => store.auth);
  const { state } = useLocation();

  //if user profile already exists then redirect to dashboard
  useRedirectDashboard(profileData, state);

  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      dispatch(setRegistrationErrors([]));
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center py-customSm md:py-custom2md lg:py-customSm">
      <div>
        <div>
          <RegistrationFormWithImage
            imageSource={authImage}
            appLoading={appLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
