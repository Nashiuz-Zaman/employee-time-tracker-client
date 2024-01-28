// react
import { useEffect } from "react";

// redux related
import { useSelector } from "react-redux";

const useWorkhoursCheck = () => {
  const { profileData } = useSelector((store) => store.auth);

  useEffect(() => {}, [profileData]);
  return null;
};

export default useWorkhoursCheck;
