// react
import { useEffect } from "react";

// react router import
import { RouterProvider } from "react-router-dom";

// router
import router from "../../router/router";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// components
import BackdropBlur from "../shared/BackdropBlur/BackdropBlur";

// redux
import { useSelector } from "react-redux";

// server url
import { serverUrl } from "../../data/serverUrl";

const PrimaryComponent = () => {
  const { open } = useSelector((store) => store.backdrop);

  useEffect(() => {
    const sendTimeData = () => {
      navigator.sendBeacon(`${serverUrl}/test`);
    };

    window.addEventListener("beforeunload", sendTimeData);

    return () => {
      window.removeEventListener("beforeunload", sendTimeData);
      console.log("katie");
    };
  }, []);

  return (
    <div className="text-textPrimary font-default min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      {/* react toastify */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Slide}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* blur overlay in the page */}
      <BackdropBlur openState={open} />

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default PrimaryComponent;
