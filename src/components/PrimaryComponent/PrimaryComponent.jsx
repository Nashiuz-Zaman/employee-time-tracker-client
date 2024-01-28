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

// hook
import useWorkhoursCheck from "../../hooks/useWorkhoursCheck";

// server url
// import { serverUrl } from "../../data/serverUrl";

const PrimaryComponent = () => {
  const { open } = useSelector((store) => store.backdrop);
  const { working, currentDuration } = useSelector((store) => store.workhour);

  useWorkhoursCheck();

  useEffect(() => {
    const saveTime = () => {
      if (working) {
        localStorage.setItem("lastTime", new Date().toISOString());
      } else {
        localStorage.removeItem("lastTime");
      }

      localStorage.setItem("working", working ? "yes" : "no");
      localStorage.removeItem("currentDuration");
      localStorage.setItem("currentDuration", currentDuration);
    };

    window.addEventListener("beforeunload", saveTime);

    return () => {
      window.removeEventListener("beforeunload", saveTime);
    };
  }, [working, currentDuration]);

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
