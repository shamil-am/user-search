import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import UsercontextProvider from "./context/UserContextProvider";
import "antd/dist/antd.css";

//
ReactDOM.render(
  <UsercontextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UsercontextProvider>,
  document.getElementById("root")
);
