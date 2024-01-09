// axios
import axios from "axios";

// server url
import { serverUrl } from "../data/serverUrl";

const axiosCustom = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

// const axiosSecure = axios.create({
//   baseURL: serverUrl,
//   withCredentials: true
// });

const useAxios = () => {
  return { axiosCustom };
};

export default useAxios;
