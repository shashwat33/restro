import React, { Component, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Usertype from "./components/Usertype";
import Restaurantname from "./components/Restaurantname";
import Footer from "./components/Footer";
import Addmenu from "./components/Screen3/Addmenu";
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
          <Route path="/addmenu" render={(props) => <Addmenu {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;
export default App;
