import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Usertype from "./components/Usertype";
// import Restaurantname from "./components/Restaurantname";
// import Profilebasicedit from "./components/Profilebasicedit";
// import HomeEmpty from "./components/HomeEmpty";
//import Dialougebox from "./components/Dialougebox";
// import Prac from "./components/Prac";

ReactDOM.render(
  <React.StrictMode>
    {/* <Usertype /> */}
    {/* <Restaurantname /> */}
    {/* <Profilebasicedit /> */}
    {/* <HomeEmpty /> */}
    {/* <Dialougebox /> */}
    {/* <Prac /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
