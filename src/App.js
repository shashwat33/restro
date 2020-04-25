import React, { Component, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Usertype from "./components/Usertype";
import Restaurantname from "./components/Restaurantname";
import Footer from "./components/Footer";
import Profilebasicedit from "./components/Profilebasicedit";
import LoginPage from "./components/Screen4/LoginPage";
import UserHome from "./components/Screen7User/UserHome";
import UserOrder from "./components/Screen8User/UserOrder";
import HomeSingleOrderRequest from "./components/Screen6/HomeSingleOrderReruest";
import EditMenu from "./components/Screen5/EditMenu";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={(props) => <Usertype {...props} />} />
          <Route
            path="/Restaurantname"
            render={(props) => <Restaurantname {...props} />}
          />
          <Route path="/Footer" render={(props) => <Footer {...props} />} />
          <Route
            path="/Profilebasicedit"
            render={(props) => <Profilebasicedit {...props} />}
          />
          {/* <Route
            path="/userorder"
            render={(props) => <UserOrder {...props} />}
          /> */}
          <Route
            path="/loginpage"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/homesingleorderrequest"
            render={(props) => <HomeSingleOrderRequest {...props} />}
          />
          {/* <Route path="/userhome" render={(props) => <UserHome {...props} />} /> */}
          <Route path="/editmenu" render={(props) => <EditMenu {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;
export default App;
