// react
import { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// auth actions
import { authActions } from "../features/auth/authSlice";

// axios
import useAxios from "./useAxios";

// firebase imports
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// create auth instance
const auth = getAuth(app);

// take auth actions
const { setUserShouldExist, setProfileData, setAppLoading } = authActions;

const useAuth = () => {
  const dispatch = useDispatch();
  const { axiosCustom } = useAxios();

  // take states from redux store
  const { userShouldExist, profileData } = useSelector((store) => store.auth);

  // if there is a jwt token in localstorage then user should exist
  useEffect(() => {
    if (localStorage.getItem("tokenExists")) {
      dispatch(setUserShouldExist(true));
    }
  }, [dispatch]);

  console.log(profileData);

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curUser) => {
      if (curUser) {
        
        // this code should only run when the website is refreshed
        if (!profileData && userShouldExist) {
          // check which firebase user is logged in, send the email to database and bring their profile data
          const userCheckResponse = await axiosCustom.post("/login", {
            email: curUser.email,
          });
          dispatch(setProfileData(userCheckResponse.data.user));

          dispatch(setAppLoading(false));
        } else {
          dispatch(setAppLoading(false));
        }
      } else {
        dispatch(setAppLoading(false));
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [dispatch, userShouldExist, profileData, axiosCustom]);
};

export default useAuth;
