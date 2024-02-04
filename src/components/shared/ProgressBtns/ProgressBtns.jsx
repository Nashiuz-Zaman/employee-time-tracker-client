// react
import PropTypes from "prop-types";
import { useEffect } from "react";

// components
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// hooks
import useWorkhoursData from "../../../hooks/useWorkhoursData";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  increaseDuration,
  setWorking,
  setCurrentDuration,
} from "../../../features/workhour/workhourSlice";

const ProgressBtns = ({ modifyClasses = "" }) => {
  const dispatch = useDispatch();
  const { currentDuration, working } = useSelector((store) => store.workhour);
  const { profileData } = useSelector((store) => store.auth);
  const { createWorkhour } = useWorkhoursData();

  console.log(currentDuration);

  useEffect(() => {
    const workingStorage = localStorage.getItem("working");

    if (workingStorage === "yes") {
      dispatch(setWorking(true));
      const newTime = new Date();

      const lastCurrentDuration = parseInt(
        localStorage.getItem("currentDuration")
      );
      const lastTime = localStorage.getItem("lastTime");

      const difference = (newTime - new Date(lastTime)) / 1000;

      dispatch(setCurrentDuration(lastCurrentDuration + difference));
    } else {
      dispatch(setCurrentDuration(0));
    }
  }, [dispatch]);

  useEffect(() => {
    let timer;

    if (working) {
      timer = setTimeout(() => {
        dispatch(increaseDuration());
        clearTimeout(timer);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentDuration, dispatch, working]);

  const handleStart = () => {
    // dispatch(setWorking(true));
    createWorkhour(profileData);
  };

  const handleEnd = () => {
    dispatch(setWorking(false));
    dispatch(setCurrentDuration(0));
  };

  const handlePause = () => {
    dispatch(setWorking(false));
    dispatch(setCurrentDuration(currentDuration));
  };

  return (
    <div className={`flex justify-center items-center gap-4 ${modifyClasses}`}>
      {/* start/resume button */}
      <ButtonBtn
        text={working ? "Take a break" : "Start Working"}
        colorTheme="black"
        onClickFunction={working ? handlePause : handleStart}
      />

      {/* pause button */}
      <ButtonBtn
        text={"Clock Out"}
        colorTheme="danger"
        onClickFunction={handleEnd}
      />
    </div>
  );
};

ProgressBtns.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ProgressBtns;
