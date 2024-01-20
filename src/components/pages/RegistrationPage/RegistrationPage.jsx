// react imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import RegistrationFormWithImage from "./RegistrationFormWithImage/RegistrationFormWithImage";

// hook
import useAuth from "../../../hooks/useAuth";
import useRedirectDashboard from "../../../hooks/useRedirectDashboard";

// data
import { authImage } from "../../../data/authUIContent";

const RegistrationPage = () => {
  const { appLoading, dispatch, setRegistrationErrors, profileData } =
    useAuth();
  const { state } = useLocation();

  //if user profile already exists then redirect to dashboard
  useRedirectDashboard(profileData, state);
  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      dispatch(setRegistrationErrors([]));
    };
  }, [dispatch, setRegistrationErrors]);

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
