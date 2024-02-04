// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAxios from "./useAxios";
import useToast from "./useToast";
import useFirebaseMethods from "./useFirebaseMethods";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/auth/authSlice";

// api endpoints
import { userAuthEndpoint } from "../data/apiData";

const { setUserShouldExist, setProfileData, setLoginErrors, setAppLoading } =
  authActions;

const useLoginForm = () => {
  // extract functions from auth context
  const { loginErrors } = useSelector((store) => store.auth);
  const { loginEmail } = useFirebaseMethods();
  const dispatch = useDispatch();

  // react toastify
  const { showToast } = useToast();

  // axios
  const { axiosCustom } = useAxios();

  // create the navigation function
  const navigate = useNavigate();

  // extract state value from use location hook
  const { state } = useLocation();

  const validateInputs = (inputs) => {
    const { email, password } = inputs;
    const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

    const foundErrors = [];

    if (email === "") {
      foundErrors.push("Must provide an email address");
    } else if (!emailRegex.test(email)) {
      foundErrors.push("Must provide a valid email address");
    }

    if (password === "") {
      foundErrors.push("Must provide a password");
    }

    return foundErrors;
  };

  // handle normal login
  const handleLoginEmail = async (e) => {
    e.preventDefault();

    // reset errors
    dispatch(setLoginErrors([]));

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const dataObject = {
      email,
      password,
    };

    const foundErrors = validateInputs(dataObject);

    // if there are erros return from here
    if (foundErrors.length > 0) {
      dispatch(setLoginErrors(foundErrors));
      return;
    }

    try {
      // firebase login api call
      const result = await loginEmail(dataObject.email, dataObject.password);

      //  if firebase login is successful, check database for profile data
      if (result.user) {
        const loginResponse = await axiosCustom.post(userAuthEndpoint, {
          email: result.user.email,
        });

        if (loginResponse.data.success) {
          dispatch(setProfileData(loginResponse.data.user));
          dispatch(setUserShouldExist(true));

          // set profile and the jwt token in the localstorage
          localStorage.setItem("tokenExists", loginResponse.data.tokenExists);

          // send them where they were previously going
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }
          showToast("Logged In Successfully", "success");
          dispatch(setAppLoading(false));
        }
      }
    } catch (error) {
      dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
      dispatch(setAppLoading(false));
    }
  };

  return {
    dispatch,
    loginErrors,
    setLoginErrors,
    handleLoginEmail,
  };
};

export default useLoginForm;
