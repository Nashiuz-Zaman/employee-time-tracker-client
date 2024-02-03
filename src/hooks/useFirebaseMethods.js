// react redux
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// hooks
import useToast from "./useToast";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// auth slice actions
import { authActions } from "../features/auth/authSlice";

// create auth instance
const auth = getAuth(app);

// take auth actions
const { setUserShouldExist, setProfileData, setAppLoading } = authActions;

const useFirebaseMethods = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // showToast method
  const { showToast } = useToast();

  // user creation with email and password
  const signup = (email, password) => {
    dispatch(setAppLoading(true));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const loginEmail = (email, password) => {
    dispatch(setAppLoading(true));
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update function
  const updateUserProfile = (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  // user logout function
  const logout = () => {
    dispatch(setAppLoading(true));
    signOut(auth)
      .then(() => {
        dispatch(setProfileData(null));
        dispatch(setUserShouldExist(false));
        localStorage.removeItem("tokenExists");
        dispatch(setAppLoading(false));
        showToast("Logged Out Successfully", "success");
      })
      .catch((error) => console.error(error));
    navigate("/");
  };

  return {
    // firebase auth related functions
    signup,
    loginEmail,
    updateUserProfile,
    logout,
  };
};

export default useFirebaseMethods;
