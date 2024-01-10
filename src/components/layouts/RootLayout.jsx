// react-router imports
import { Outlet } from "react-router-dom";

// components
import Header from "./../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header modifyClasses="mb-[5rem]" />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
