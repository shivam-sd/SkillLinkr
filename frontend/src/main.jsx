import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {ToastContainer} from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <ToastContainer />
      <Provider store={store}>
      <App />
      </Provider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
