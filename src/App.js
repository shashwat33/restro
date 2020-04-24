import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/Screen4/LoginPage";
import UserHome from "./components/Screen7User/UserHome";
import UserOrder from "./components/Screen8User/UserOrder";
import HomeSingleOrderRequest from "./components/Screen6/HomeSingleOrderReruest";
import EditMenu from "./components/Screen5/EditMenu";

export class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Route
      //       path="/userorder"
      //       render={(props) => <UserOrder {...props} />}
      //     />
      //     <Route
      //       path="/loginpage"
      //       render={(props) => <LoginPage {...props} />}
      //     />
      //     <Route
      //       path="/homesingleorderrequest"
      //       render={(props) => <HomeSingleOrderRequest {...props} />}
      //     />
      //     <Route path="/userhome" render={(props) => <UserHome {...props} />} />
      //     <Route path="/editmenu" render={(props) => <EditMenu {...props} />} />
      //   </div>
      // </BrowserRouter>
    );
  }
}

export default App;
