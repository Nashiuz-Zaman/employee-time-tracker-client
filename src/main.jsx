// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// primary component
import PrimaryComponent from "./components/PrimaryComponent/PrimaryComponent";

// redux
import { store } from "./app/store";
import { Provider } from "react-redux";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimaryComponent />
    </Provider>
  </React.StrictMode>
);
