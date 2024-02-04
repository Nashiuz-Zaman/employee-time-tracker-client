// react
import { useEffect } from "react";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LoginFormWithImage from "./LoginFormWithImage/LoginFormWithImage";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../features/auth/authSlice";
const { setLoginErrors } = authActions;

// data
import { authImage } from "./../../../data/authUIContent";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { appLoading } = useSelector((store) => store.auth);

  // const { state } = useLocation();
  // useRedirectDashboard(profileData, state);

  useEffect(() => {
    return () => {
      dispatch(setLoginErrors([]));
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center py-customSm md:py-custom2md lg:py-customSm">
      <InnerContainer>
        <div>
          <div>
            <LoginFormWithImage
              imageSource={authImage}
              appLoading={appLoading}
            />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default LoginPage;
