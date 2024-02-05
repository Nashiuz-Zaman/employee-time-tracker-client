// react
import { useCallback } from "react";

// hooks
import useAxios from "./useAxios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setWorkhourData } from "../features/workhour/workhourSlice";

const useWorkhoursData = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector((store) => store.auth);
  const { axiosCustom } = useAxios();

  const createWorkhour = useCallback(
    async (employeeProfile) => {
      const { _id } = employeeProfile;
      const currentTime = new Date().toISOString();
      const employeeData = { _id, currentTime };
      const res = await axiosCustom.post("/workhours", employeeData);
      if (res.data.status === "success") {
        return res.data.newWorkhour;
      } else {
        return false;
      }
    },
    [axiosCustom]
  );

  const handleClockIn = useCallback(async () => {
    const newWorkhour = await createWorkhour(profileData);

    if (!newWorkhour) {
      return;
    }

    const workhourData = {
      _id: newWorkhour._id,
      working: true,
      onBreak: false,
      currentDuration: 0,
      startedWorkAt: newWorkhour.startedWorkAt,
      endedWorkAt: null,
      currentDayDate: newWorkhour.currentDayDate,
    };

    dispatch(setWorkhourData(workhourData));
  }, [createWorkhour, dispatch, profileData]);

  return { handleClockIn };
};

export default useWorkhoursData;
