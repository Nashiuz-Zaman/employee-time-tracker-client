// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";
import AuthLayout from "./../components/layouts/AuthLayout";

// page components
import Home from "../components/pages/Home/Home";
import LoginPage from "./../components/pages/LoginPage/LoginPage";
import RegistrationPage from "./../components/pages/RegistrationPage/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
  {
    path: "/registration",
    element: <AuthLayout />,
    children: [{ path: "/registration", element: <RegistrationPage /> }],
  },
]);

export default router;
