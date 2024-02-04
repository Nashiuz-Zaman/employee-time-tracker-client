// react
import { useCallback } from "react";

// hooks
import useAxios from "./useAxios";

const useWorkhoursData = () => {
  const { axiosCustom } = useAxios();

  const createWorkhour = useCallback(
    async (employeeProfile) => {
      const { _id, fullname, email, imageSource } = employeeProfile;
      const currentTime = new Date().toISOString();
      const employeeData = { _id, fullname, email, imageSource, currentTime };

      const res = await axiosCustom.post("/workhours", employeeData);
      console.log(res);
    },
    [axiosCustom]
  );

  return { createWorkhour };
};

export default useWorkhoursData;
