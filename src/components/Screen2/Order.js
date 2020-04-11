import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Header from "./Header";
import "./Header.css";

export class Order extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: 25, marginTop: 60 }}>
          <h1>Orders</h1>
        </div>
        <div className="ss">
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Order;
