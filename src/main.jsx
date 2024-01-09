// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// // react router import
// import { RouterProvider } from "react-router-dom";

// // router import
// import router from "./router/router";

// primary component
import PrimaryComponent from "./components/PrimaryComponent/PrimaryComponent";

// style import
import "./index.css";

// redux
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimaryComponent />
    </Provider>
  </React.StrictMode>
);
