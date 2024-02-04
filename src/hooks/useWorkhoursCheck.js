// react
import { useEffect } from "react";

// redux related
import { useSelector } from "react-redux";

// hook
import useAxios from "./useAxios";

const useWorkhoursCheck = () => {
  const { profileData } = useSelector((store) => store.auth);
  const { axiosCustom } = useAxios();

  useEffect(() => {}, [profileData]);
};

export default useWorkhoursCheck;
