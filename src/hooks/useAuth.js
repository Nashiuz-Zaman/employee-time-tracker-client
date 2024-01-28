// react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// auth actions
import { authActions } from "../features/auth/authSlice";

// axios
import useAxios from "./useAxios";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// create auth instance
const auth = getAuth(app);

// hooks
import useToast from "./useToast";

const useAuth = () => {
  // declare dispatch function
  const dispatch = useDispatch();
  // take states from redux store
  const { userShouldExist, profileData } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const { axiosCustom } = useAxios();

  // take auth actions
  const {
    setUserShouldExist,
    setUserAlreadyRegistered,
    setProfileData,
    setAppLoading,
    setLoginErrors,
    setRegistrationErrors,
  } = authActions;

  // showToast method
  const { showToast } = useToast();

  // if there is a jwt token in localstorage then user should exist
  useEffect(() => {
    if (localStorage.getItem("tokenExists")) {
      dispatch(setUserShouldExist(true));
    }
  }, [dispatch, setUserShouldExist]);

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curUser) => {
      if (curUser) {
        setUser(curUser);

        // this code should only run when the website is refreshed
        if (!profileData && userShouldExist) {
          // check which firebase user is logged in, send the email to database and bring their profile data
          const userCheckResponse = await axiosCustom.post("/login", {
            email: curUser.email,
          });

          dispatch(setProfileData(userCheckResponse.data.user));
          dispatch(setAppLoading(false));
        } else {
          setUser(null);
          dispatch(setAppLoading(false));
        }
      } else {
        setUser(null);
        dispatch(setAppLoading(false));
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [
    dispatch,
    userShouldExist,
    profileData,
    setAppLoading,
    setProfileData,
    setUser,
    axiosCustom,
  ]);

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
        setUser(null);
        localStorage.removeItem("tokenExists");
        dispatch(setAppLoading(false));
        showToast("Logged Out Successfully", "success");
      })
      .catch((error) => console.error(error));
    navigate("/");
  };

  return {
    // auth slice methods
    // you have to call all the set methods inside dispatch method
    dispatch,
    setUserShouldExist,
    setUserAlreadyRegistered,
    setProfileData,
    setUser,
    setAppLoading,
    setLoginErrors,
    setRegistrationErrors,
    // auth properties
    user,
    // firebase auth related functions
    signup,
    loginEmail,
    updateUserProfile,
    logout,
  };
};

export default useAuth;
