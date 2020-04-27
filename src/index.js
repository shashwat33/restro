import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Userexplore from "./components/Userexplore";
// import Footer from "./components/Footer";
// import Usertype from "./components/Usertype";
// import Restaurantname from "./components/Restaurantname";
// import Profilebasicedit from "./components/Profilebasicedit";
// import HomeEmpty from "./components/HomeEmpty";
//import Dialougebox from "./components/Dialougebox";
// import Searchbar from "./components/Searchbar";
// import Firebaselogin from "./components/Firebaselogin";
// import LoginPage from "./components/Screen4/LoginPage";
import Menu from "./components/Screen1/Menu";

ReactDOM.render(
  <React.StrictMode>
    {/* <Userexplore /> */}
    {/* <Firebaselogin /> */}
    {/* <LoginPage /> */}
    {/* <Usertype /> */}
    {/* <Restaurantname /> */}
    {/* <Profilebasicedit /> */}
    {/* <HomeEmpty /> */}
    {/* <Dialougebox /> */}
    {/* <Prac /> */}
    <Menu />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
