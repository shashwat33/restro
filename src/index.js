import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EditMenu from "./components/Screen5/EditMenu";
import { LoginPage } from "./components/Screen4/LoginPage";
import UserHome from "./components/Screen7User/UserHome";
import UserOrder from "./components/Screen8User/UserOrder";
import HomeSingleOrderReruest from "./components/Screen6/HomeSingleOrderReruest";

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import FirebaseLogin from "./Firebase/FirebaseLogin";
import HomeOrder from "./components/Screen10/HomeOrder";

ReactDOM.render(
  <React.StrictMode>
    <HomeOrder />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
