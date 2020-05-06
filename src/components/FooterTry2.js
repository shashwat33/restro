import React, { Component } from "react";
import FooterTry from "./FooterTry";
import HomeEmpty from "./HomeEmpty";
import Menu from "./Screen1/Menu";
import Order from "./Screen2/Order";
<Route path="/order" render={(props) => <Order {...props} />} />
<Route path="/menu" render={(props) => <Menu {...props} />} />
<Route
  path="/FooterTry2"
  render={(props) => <FooterTry2 {...props} />}
/>
import { Route, BrowserRouter } from "react-router-dom";
export class FooterTry2 extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <FooterTry />
          <Route path="/order" render={(props) => <Order {...props} />} />
          <Route path="/menu" render={(props) => <Menu {...props} />} />
          <Route
            path="/FooterTry2"
            render={(props) => <FooterTry2 {...props} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default FooterTry2;
